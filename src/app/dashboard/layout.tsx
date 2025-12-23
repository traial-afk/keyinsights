import { createClient } from "@/lib/supabase/server"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const userData = user ? {
        name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
        email: user.email
    } : undefined

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
            <div className="hidden w-64 md:block fixed inset-y-0 z-50">
                <DashboardSidebar user={userData} />
            </div>
            <div className="flex-1 md:pl-64 flex flex-col">
                <DashboardHeader />
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}
