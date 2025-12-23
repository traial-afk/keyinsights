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
        console.error("Error saving draft:", error)
        return { success: false, error: error.message }
    }

    console.log("Draft saved successfully:", data.id)
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
        console.error("Error deleting draft:", error)
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

    if (error && error.code !== 'PGRST116') { // PGRST116 is "Row not found"
        console.error("Error fetching draft:", error)
    }

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

export async function submitValuation(planType: 'essential' | 'exitready', draftId: string) {
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

    // 4. Trigger Webhook
    try {
        const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL
        if (webhookUrl) {
            console.log("Triggering webhook:", webhookUrl)
            fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: user.id,
                    valuation_id: draft.id,
                    plan_type: planType,
                    form_data: draft.form_data,
                    file_paths: draft.file_paths
                })
            }).catch(e => console.error("Webhook background trigger failed", e))
        }
    } catch (e) {
        console.error("Webhook setup failed", e)
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
        console.error("Error fetching project:", error)
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
        console.error("Unauthorized access to project reports")
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
        console.error("Error fetching reports:", error)
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
        console.error("Error fetching invoices:", error)
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
