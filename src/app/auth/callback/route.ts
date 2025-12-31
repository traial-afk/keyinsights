import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    const nextParam = searchParams.get('next') ?? '/dashboard'

    // Validate redirect path to prevent open redirect attacks
    // Must start with '/' but not '//' (which could redirect to external sites)
    const isValidPath = nextParam.startsWith('/') && !nextParam.startsWith('//')
    const next = isValidPath ? nextParam : '/dashboard'

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            return NextResponse.redirect(`${origin}${next}`)
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
