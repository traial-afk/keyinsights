'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateProfile(formData: FormData) {
    const supabase = await createClient()
    const fullName = formData.get('fullName') as string
    const email = formData.get('email') as string

    const { data: { user }, error: userError } = await supabase.auth.getUser()
    if (userError || !user) return { error: 'Unauthorized' }

    const updates: { data: { full_name: string }; email?: string } = {
        data: { full_name: fullName }
    }

    if (email && email !== user.email) {
        updates.email = email
    }

    // 1. Update Auth Metadata & Email
    const { error: authError } = await supabase.auth.updateUser(updates)

    if (authError) return { error: authError.message }

    // 2. Update Public Table
    const { error: dbError } = await supabase
        .from('User_Collections')
        .update({ username: fullName })
        .eq('id', user.id)

    if (dbError) {
        console.error('Error syncing profile:', dbError)
    }

    revalidatePath('/dashboard')
    return { success: 'Profile updated successfully. If you changed your email, please check your inbox for a confirmation link.' }
}

export async function updatePassword(formData: FormData) {
    const supabase = await createClient()
    const currentPassword = formData.get('currentPassword') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (password !== confirmPassword) {
        return { error: 'New passwords do not match' }
    }

    if (password.length < 6) {
        return { error: 'Password must be at least 6 characters' }
    }

    if (!currentPassword) {
        return { error: 'Current password is required' }
    }

    // 1. Verify Current Password
    const { data: { user } } = await supabase.auth.getUser()
    if (!user || !user.email) return { error: 'Unauthorized' }

    try {
        const { error: signInError } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: currentPassword
        })

        if (signInError) {
            return { error: 'Incorrect current password' }
        }
    } catch (error) {
        console.error("Error verifying password:", error)
        return { error: 'Failed to verify current password' }
    }

    // 2. Update to New Password
    const { error } = await supabase.auth.updateUser({
        password: password
    })

    if (error) return { error: error.message }

    revalidatePath('/dashboard')
    return { success: 'Password updated successfully' }
}
