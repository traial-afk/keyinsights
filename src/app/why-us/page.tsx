import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "24-Hour Business Valuations from $399 | KeyInsightsAI",
    description: "Professional business valuations in 24 hours versus 2-6 weeks. $399-$549 versus $2,000-$25,000. Technology-enabled precision, expert-verified results.",
}

export default function WhyUsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <SiteHeader />
            <div className="pt-32 pb-20 container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900 mb-6 font-['Playfair_Display'] serif">
                    Why KeyInsightsAI?
                </h1>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    We combine the speed of AI with the rigorous standards of certified valuation analysts to deliver reports you can trust.
                </p>

                {/* Placeholder for future content */}
                <div className="mt-16 p-12 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
                    <p className="text-slate-400 font-medium italic">Detailed content coming soon...</p>
                </div>
            </div>
            <SiteFooter />
        </main>
    )
}
