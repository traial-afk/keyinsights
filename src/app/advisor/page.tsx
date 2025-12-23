import { SiteHeader } from "@/components/site-header"
import { AdvisorHero } from "@/components/solutions/advisor-hero"
import { SiteFooter } from "@/components/site-footer"
import { Metadata } from "next"
import { BuyerLogos } from "@/components/solutions/buyer-logos"
import { AdvisorProblem } from "@/components/solutions/advisor-problem"
import { AdvisorUseCases } from "@/components/solutions/advisor-use-cases"
import { AdvisorConsistency } from "@/components/solutions/advisor-consistency"
import { AdvisorSteps } from "@/components/solutions/advisor-steps"
import { AdvisorPricing } from "@/components/solutions/advisor-pricing"
import { AdvisorFAQ } from "@/components/solutions/advisor-faq"
import { AdvisorCTA } from "@/components/solutions/advisor-cta"
import { AdvisorDeliverables } from "@/components/solutions/advisor-deliverables"
import { AdvisorStickyCTA } from "@/components/solutions/advisor-sticky-cta"
import { FreeEstimatorPopup } from "@/components/solutions/free-estimator-popup"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
    title: "Business Valuations for Advisors | KeyInsightsAI",
    description: "Deliver professional valuations to clients in 24 hours. From $399 per report. Institutional-grade service for brokers, M&A advisors, and investors.",
}

export default function AdvisorPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
            <SiteHeader />
            <AdvisorHero />
            <BuyerLogos />
            <AdvisorProblem />
            <AdvisorStickyCTA />
            <AdvisorSteps />
            <AdvisorUseCases />
            <FreeEstimatorPopup />
            <AdvisorConsistency />
            <AdvisorDeliverables />
            <AdvisorPricing />
            <AdvisorFAQ />
            <Analytics />
            <AdvisorCTA />
            <SpeedInsights />
            <SiteFooter />
        </main>
    )
}
