'use server'

import { createClient } from "@/lib/supabase/server"

export async function submitSupportRequest(formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return { error: 'You must be logged in to submit a support request.' }
    }

    const subject = formData.get('subject') as string
    const message = formData.get('message') as string
    const email = user.email

    if (!subject || !message) {
        return { error: 'Subject and message are required.' }
    }

    const webhookUrl = process.env.SUPPORT_WEBHOOK_URL

    if (!webhookUrl) {
        console.error('SUPPORT_WEBHOOK_URL is not defined')
        return { error: 'Support service is currently unavailable. Please try again later.' }
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                subject,
                message,
                userId: user.id,
                timestamp: new Date().toISOString(),
            }),
        })

        if (!response.ok) {
            throw new Error(`Webhook failed with status ${response.status}`)
        }

        return { success: 'Your message has been sent to our support team.' }
    } catch (error) {
        console.error('Error submitting support request:', error)
        return { error: 'Failed to send message. Please try again later.' }
    }
}
