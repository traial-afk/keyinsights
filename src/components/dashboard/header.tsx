import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"
import Link from "next/link"

export function DashboardHeader() {
    return (
        <header className="flex items-center justify-between h-16 px-8 border-b bg-white dark:bg-slate-950 sticky top-0 z-40">
            <div className="flex items-center gap-4">
                {/* Breadcrumbs or Title could go here if needed, but design shows empty left side or title in page body */}
            </div>

            <div className="flex items-center gap-4">
                <Link href="/dashboard/help">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-full gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200"
                    >
                        <HelpCircle className="w-4 h-4" />
                        Help
                    </Button>
                </Link>
            </div>
        </header>
    )
}
