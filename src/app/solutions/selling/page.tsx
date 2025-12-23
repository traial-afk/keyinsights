import { SiteHeader } from "@/components/site-header"
import { SellingHero } from "@/components/solutions/selling-hero"

export default function SellingPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <SiteHeader />
            <div className="pt-16">
                <SellingHero />
            </div>
        </main>
    )
}
