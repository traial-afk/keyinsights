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
        // 1. Get your Webhook URL (e.g. from n8n, Zapier, Make)
        // You can hardcode it here OR put it in your .env file as CONTACT_WEBHOOK_URL
        const WEBHOOK_URL = process.env.SUPPORT_WEBHOOK_URL || "https://your-webhook-url.com";

        // 2. Send the data
        if (WEBHOOK_URL && WEBHOOK_URL.startsWith("http")) {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(rawData)
            })
        } else {
            console.warn("No valid Webhook URL configured in submit-contact.ts")
        }

        // Logic to actually send email or save to DB could go here too
        console.log("Contact Form Submitted:", rawData)

        return { success: "Message sent! We'll get back to you shortly." }
    } catch (error) {
        console.error("Contact submission error:", error)
        return { error: "Failed to send message. Please try again." }
    }
}
