'use server'

import { redirect } from 'next/navigation'

// Map internal plan IDs to Stripe Payment Links
// User must provide these full URLs in .env.local
// Example: https://buy.stripe.com/test_...
const PAYMENT_LINKS = {
    'essential-valuation': process.env.STRIPE_LINK_ESSENTIAL,
    'exit-ready-valuation': process.env.STRIPE_LINK_EXIT_READY,
    'portfolio-package': process.env.STRIPE_LINK_PORTFOLIO,
}

export async function createCheckoutSession(planId: string, email?: string, userId?: string) {
    const paymentLink = PAYMENT_LINKS[planId as keyof typeof PAYMENT_LINKS]

    if (!paymentLink) {
        console.error(`[Stripe Error] No payment link found for plan: '${planId}'`)
        console.error(`[Debug] Env Var Check: Essential=${!!process.env.STRIPE_LINK_ESSENTIAL}, ExitReady=${!!process.env.STRIPE_LINK_EXIT_READY}`)
        // Fallback or error handling - for now redirect to dashboard with error
        redirect(`/dashboard?error=payment_link_missing&plan=${planId}`)
    }

    // Construct URL with query parameters for tracking
    const url = new URL(paymentLink)

    if (email) {
        url.searchParams.set('locked_prefilled_email', email)
    }

    if (userId) {
        // This allows us to link the payment back to the user in the webhook
        url.searchParams.set('client_reference_id', userId)
    }

    redirect(url.toString())
}
