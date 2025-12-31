'use server'

export async function submitContactForm(formData: FormData) {
    const rawData = {
        name: formData.get('name'),
        role: formData.get('role'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        source_url: formData.get('source_url') // Good to capture where they came from
    }

    // Validate (Simple check)
    if (!rawData.name || !rawData.email || !rawData.message) {
        return { error: "Please fill in all required fields." }
    }

    try {
        const WEBHOOK_URL = process.env.SUPPORT_WEBHOOK_URL

        if (!WEBHOOK_URL) {
            // Fail gracefully if not configured
            return { success: "Message received! We'll get back to you shortly." }
        }

        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rawData)
        })

        return { success: "Message sent! We'll get back to you shortly." }
    } catch {
        return { error: "Failed to send message. Please try again." }
    }
}
