import { CreditWidget } from "@/components/dashboard/credit-widget"
import { ProjectList } from "@/components/dashboard/project-list"
import { StartValuationButton } from "@/components/dashboard/start-valuation-button"
import { DashboardSuccessHandler } from "@/components/dashboard/success-handler"
import { RequirementsSection } from "@/components/dashboard/requirements-section"
import { createClient } from "@/lib/supabase/server"

export default async function DashboardPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    let projects: any[] = []
    let essentialCredits = 0
    let exitReadyCredits = 0

    if (user) {
        const { data: userData } = await supabase
            .from('User_Collections')
            .select('essential_valuation, exitready_valuation')
            .eq('email', user.email)
            .single()

        if (userData) {
            essentialCredits = userData.essential_valuation || 0
            exitReadyCredits = userData.exitready_valuation || 0
        }

        // Fetch user's projects (drafts and completed)
        const { data: userProjects } = await supabase
            .from('valuation_inputs')
            .select('*')
            .eq('user_id', user.id)
            .order('updated_at', { ascending: false })

        if (userProjects) {
            projects = userProjects
        }
    }

    return (
        <div className="space-y-8 max-w-6xl mx-auto pt-2">
            <DashboardSuccessHandler />
            {/* Header */}
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard</h2>
                <p className="text-muted-foreground mt-1">
                    Overview of your valuation projects and credits.
                </p>
            </div>

            {/* Hero Card */}
            <div className="relative overflow-hidden rounded-xl bg-[#1e3a8a] p-8 text-white shadow-lg">
                <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                    <div className="space-y-2 max-w-xl">
                        <h3 className="text-2xl font-bold">Start a New Valuation</h3>
                        <p className="text-blue-100 text-lg">
                            Get comprehensive Business Valuation Reports. Choose your valuation type and get started in minutes.
                        </p>
                    </div>
                    <StartValuationButton />
                </div>

                <RequirementsSection />

                {/* Decorative circles */}
                <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-12 left-12 h-48 w-48 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
            </div>

            {/* Credits Section */}
            <section>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                    <span className="w-1 h-5 bg-[#1e3a8a] rounded-full"></span>
                    Available Packages
                </h3>
                <CreditWidget essentialCredits={essentialCredits} exitReadyCredits={exitReadyCredits} />
            </section>

            {/* Active Projects Section */}
            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                        <span className="w-1 h-5 bg-[#1e3a8a] rounded-full"></span>
                        Recent Packages
                    </h3>
                </div>
                <ProjectList initialProjects={projects.filter(p => p.status === 'draft' || p.status === 'pending')} />
            </section>

            {/* Completed Projects Section */}
            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                        <span className="w-1 h-5 bg-green-600 rounded-full"></span>
                        Completed Packages
                    </h3>
                </div>
                <ProjectList initialProjects={projects.filter(p => p.status === 'completed').slice(0, 3)} />
            </section>
        </div>
    )
}
