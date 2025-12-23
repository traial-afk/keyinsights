import { ProjectList } from "@/components/dashboard/project-list"
import { createClient } from "@/lib/supabase/server"

export default async function ReportsPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    let completedProjects: any[] = []

    if (user) {
        const { data } = await supabase
            .from('valuation_inputs')
            .select('*')
            .eq('user_id', user.id)
            .eq('status', 'completed')
            .order('updated_at', { ascending: false })

        if (data) {
            completedProjects = data
        }
    }

    return (
        <div className="space-y-8 max-w-6xl mx-auto pt-2">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">My Reports</h2>
                <p className="text-muted-foreground mt-1">
                    View and manage your completed valuation reports.
                </p>
            </div>

            <section className="space-y-4">
                <ProjectList initialProjects={completedProjects} />
            </section>
        </div>
    )
}
