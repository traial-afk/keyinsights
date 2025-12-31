'use server'

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export type ValuationStatus = 'draft' | 'pending' | 'completed'

export async function saveValuationDraft(formData: any, filePaths: string[], draftId?: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error("Unauthorized")

    let result;

    if (draftId) {
        // Update existing draft
        result = await supabase
            .from('valuation_inputs')
            .update({
                form_data: formData,
                file_paths: filePaths, // This overwrites, logic in frontend should merge
                updated_at: new Date().toISOString()
            })
            .eq('id', draftId)
            .eq('user_id', user.id) // Security check
            .select()
            .single()
    } else {
        // Create new draft
        result = await supabase
            .from('valuation_inputs')
            .insert({
                user_id: user.id,
                status: 'draft',
                form_data: formData,
                file_paths: filePaths,
                updated_at: new Date().toISOString()
            })
            .select()
            .single()
    }

    const { data, error } = result

    if (error) {
        return { success: false, error: error.message }
    }

    return { success: true, data }
}

export async function deleteValuationDraft(draftId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error("Unauthorized")

    const { error } = await supabase
        .from('valuation_inputs')
        .delete()
        .eq('id', draftId)
        .eq('user_id', user.id)

    if (error) {
        throw new Error(error.message)
    }

    revalidatePath('/dashboard')
    return { success: true }
}

export async function getValuationDraft() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return null

    const { data, error } = await supabase
        .from('valuation_inputs')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'draft')
        .order('updated_at', { ascending: false })
        .limit(1)
        .single()

    // PGRST116 is "Row not found" - not an error

    return data
}

export async function getUserCredits() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user || !user.email) return { essential: 0, exitReady: 0 }

    // Helper to check balance
    const hasBalance = (record: any) => (record?.essential_valuation || 0) > 0 || (record?.exitready_valuation || 0) > 0

    // 1. Try User ID
    const { data: byId } = await supabase
        .from('User_Collections')
        .select('*')
        .eq('id', user.id)
        .single()

    if (hasBalance(byId)) {
        return { essential: byId.essential_valuation, exitReady: byId.exitready_valuation }
    }

    // 2. Try Email (if ID didn't have balance)
    const { data: byEmail } = await supabase
        .from('User_Collections')
        .select('*')
        .eq('email', user.email)
        .single()

    if (hasBalance(byEmail)) {
        return { essential: byEmail.essential_valuation, exitReady: byEmail.exitready_valuation }
    }

    // 3. Default to whatever we found (likely 0)
    return {
        essential: byId?.essential_valuation || 0,
        exitReady: byId?.exitready_valuation || 0
    }
}

// Type for file data passed from client
export interface FileData {
    name: string
    type: string
    size: number
    base64: string  // Base64 encoded file content
}

export async function submitValuation(
    planType: 'essential' | 'exitready',
    draftId: string,
    files: FileData[] = []
) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user || !user.email) throw new Error("Unauthorized")

    // --- SIMPLIFIED CREDIT CHECK ---
    // We look for a record with credits, either by User ID or Email.
    let creditRecord = null

    // 1. Check User ID Record
    const { data: byId } = await supabase
        .from('User_Collections')
        .select('*')
        .eq('id', user.id)
        .single()

    // 2. Check Email Record
    const { data: byEmail } = await supabase
        .from('User_Collections')
        .select('*')
        .eq('email', user.email)
        .single()

    // 3. Decide which to use (Prioritize one with credits)
    const column = planType === 'essential' ? 'essential_valuation' : 'exitready_valuation'

    if (byId && byId[column] > 0) {
        creditRecord = byId
    } else if (byEmail && byEmail[column] > 0) {
        creditRecord = byEmail
    }

    if (!creditRecord) {
        throw new Error(`Insufficient credits. Please purchase a ${planType} plan.`)
    }

    // --- SUBMISSION LOGIC ---

    // 1. Get Draft
    const { data: draft } = await supabase
        .from('valuation_inputs')
        .select('*')
        .eq('id', draftId)
        .eq('user_id', user.id)
        .single()

    if (!draft) throw new Error("No draft found to submit")

    // 2. Deduct Credit (using the ID of the record we found)
    const { error: creditError } = await supabase
        .from('User_Collections')
        .update({ [column]: creditRecord[column] - 1 })
        .eq('id', creditRecord.id)

    if (creditError) throw new Error("Failed to deduct credit")

    // 3. Update Valuation Status & Package Type
    const packageType = planType === 'essential' ? 'Essential Package' : 'Exit Ready Package'

    const { error: statusError } = await supabase
        .from('valuation_inputs')
        .update({
            status: 'pending',
            package_type: packageType,
            updated_at: new Date().toISOString()
        })
        .eq('id', draft.id)

    if (statusError) {
        // Rollback credit if status update fails
        await supabase
            .from('User_Collections')
            .update({ [column]: creditRecord[column] })
            .eq('id', creditRecord.id)
        throw new Error("Failed to update valuation status")
    }

    // 4. Create Session_Collections entry to track this submission
    const sessionPackageType = planType === 'essential' ? 'essential' : 'exitready'
    const { error: sessionError } = await supabase
        .from('Session_Collections')
        .insert({
            userId: user.id,
            package_type: sessionPackageType,
            reportsCreated: 1
        })

    if (sessionError) {
        // Log but don't fail - this is for analytics, not critical
    }

    // 4. Send to Valuation Redirect Server
    const apiUrl = process.env.VALUATION_API_URL
    if (apiUrl) {
        try {
            // Get Supabase session token for authentication
            const { data: { session } } = await supabase.auth.getSession()
            const jwt = session?.access_token

            if (!jwt) {
                throw new Error("No session token available")
            }

            // Build FormData - append fields directly (not as JSON)
            const formData = new FormData()

            // Add user authentication data
            formData.append('userId', user.id)
            formData.append('email', user.email)

            // Add submission metadata
            formData.append('valuation_id', draft.id)
            formData.append('plan_type', planType)
            formData.append('package_type', packageType)

            // Add form fields from draft
            if (draft.form_data && typeof draft.form_data === 'object') {
                Object.entries(draft.form_data).forEach(([key, value]) => {
                    if (value !== null && value !== '' && value !== undefined) {
                        formData.append(key, String(value))
                    }
                })
            }

            // Add file_paths as JSON if present
            if (draft.file_paths && Array.isArray(draft.file_paths)) {
                formData.append('file_paths', JSON.stringify(draft.file_paths))
            }

            // Download and add existing files from Supabase storage (for resumed drafts)
            if (draft.file_paths && Array.isArray(draft.file_paths) && draft.file_paths.length > 0) {
                for (const filePath of draft.file_paths) {
                    try {
                        const { data: fileData, error: downloadError } = await supabase
                            .storage
                            .from('valuation-files')
                            .download(filePath)

                        if (fileData && !downloadError) {
                            // Extract filename from path (e.g., "userId/timestamp_filename.pdf" -> "filename.pdf")
                            const fileName = filePath.split('/').pop()?.replace(/^\d+_/, '') || 'file'
                            formData.append('files', fileData, fileName)
                        }
                    } catch {
                        // Skip files that fail to download
                    }
                }
            }

            // Add fresh uploads from current session (files passed as base64)
            for (const file of files) {
                // Convert base64 to Blob
                const byteCharacters = atob(file.base64)
                const byteNumbers = new Array(byteCharacters.length)
                for (let j = 0; j < byteCharacters.length; j++) {
                    byteNumbers[j] = byteCharacters.charCodeAt(j)
                }
                const byteArray = new Uint8Array(byteNumbers)
                const blob = new Blob([byteArray], { type: file.type || 'application/octet-stream' })

                formData.append('files', blob, file.name)
            }

            // Send to redirect server with timeout
            const controller = new AbortController()
            const timeoutId = setTimeout(() => controller.abort(), 180000) // 3 minutes timeout

            const response = await fetch(`${apiUrl}/request`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${jwt}`
                },
                body: formData,
                signal: controller.signal
            })

            clearTimeout(timeoutId)

            // Even if server response isn't perfect, data is saved in Supabase
            // and will be processed
            if (!response.ok) {
                const errorText = await response.text()
                throw new Error(`Server error: ${response.status} - ${errorText}`)
            }
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                // Timeout - but data may still be processing
                // Don't throw, let it succeed since data is in Supabase
            } else {
                throw new Error(`Failed to send to processing server: ${error instanceof Error ? error.message : 'Unknown error'}`)
            }
        }
    } else {
        throw new Error("VALUATION_API_URL is not configured")
    }

    revalidatePath('/dashboard')
    return { success: true }
}

export async function getProjectById(projectId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return null

    const { data, error } = await supabase
        .from('valuation_inputs')
        .select('*')
        .eq('id', projectId)
        .eq('user_id', user.id)
        .single()

    if (error) {
        return null
    }

    return data
}

export async function getProjectReports(projectId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return []

    // 1. Verify Ownership
    const { data: project } = await supabase
        .from('valuation_inputs')
        .select('id')
        .eq('id', projectId)
        .eq('user_id', user.id)
        .single()

    if (!project) {
        return []
    }

    // 2. List files in the project folder
    const { data, error } = await supabase
        .storage
        .from('completed-valuations')
        .list(projectId, {
            limit: 100,
            offset: 0,
            sortBy: { column: 'name', order: 'asc' },
        })

    if (error) {
        return []
    }

    // Generate signed URLs for each file
    const reportsWithUrls = await Promise.all(data.map(async (file) => {
        const { data: signedUrl } = await supabase
            .storage
            .from('completed-valuations')
            .createSignedUrl(`${projectId}/${file.name}`, 3600) // 1 hour expiry

        return {
            name: file.name,
            size: (file.metadata?.size || 0) as number,
            updated_at: file.updated_at,
            url: signedUrl?.signedUrl,
            type: file.name.endsWith('.pdf') ? 'pdf' : 'xlsx' // Simple type inference
        }
    }))

    return reportsWithUrls
}

export async function getUserInvoices() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return []

    // List files in the user's invoice folder
    // Folder structure: invoices/{userId}/...
    const { data, error } = await supabase
        .storage
        .from('invoices')
        .list(user.id, {
            limit: 100,
            offset: 0,
            sortBy: { column: 'created_at', order: 'desc' },
        })

    if (error) {
        return []
    }

    // Generate signed URLs for each invoice
    const invoicesWithUrls = await Promise.all(data.map(async (file) => {
        const { data: signedUrl } = await supabase
            .storage
            .from('invoices')
            .createSignedUrl(`${user.id}/${file.name}`, 3600) // 1 hour expiry

        return {
            name: file.name,
            size: (file.metadata?.size || 0) as number,
            created_at: file.created_at,
            url: signedUrl?.signedUrl,
            id: file.id
        }
    }))

    return invoicesWithUrls
}
