import { createClient } from "@/lib/supabase/server"
import { SettingsPageClient } from "./client-page"

export default async function SettingsPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    let fullName = user?.user_metadata?.full_name || ''

    // Fallback: Check User_Collections if name is missing in metadata
    if (!fullName && user?.email) {
        try {
            const { data: dbUser } = await supabase
                .from('User_Collections')
                .select('username')
                .eq('email', user.email)
                .single()

            if (dbUser?.username) {
                fullName = dbUser.username
            }
        } catch (error) {
            console.warn("Could not fetch name from User_Collections", error)
        }
    }

    const userData = {
        fullName: fullName,
        email: user?.email || ''
    }

    return <SettingsPageClient user={userData} />
}
