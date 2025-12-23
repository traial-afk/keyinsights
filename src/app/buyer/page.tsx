import { SiteHeader } from "@/components/site-header"
import { BuyingHero } from "@/components/solutions/buying-hero"
import { BuyerRisks } from "@/components/solutions/buyer-risks"
import { BuyerSolution } from "@/components/solutions/buyer-solution"
import { BuyerSteps } from "@/components/solutions/buyer-steps"
import { BuyerUseCases } from "@/components/solutions/buyer-use-cases"
import { PackagesSection } from "@/components/solutions/packages-section"
import { BuyerMethods } from "@/components/solutions/buyer-methods"
import { BuyerFAQ } from "@/components/solutions/buyer-faq"
import { BuyerCTA } from "@/components/solutions/buyer-cta"
import { BuyerLogos } from "@/components/solutions/buyer-logos"
import { StickyCTA } from "@/components/solutions/sticky-cta"
import { SiteFooter } from "@/components/site-footer"
import { FreeEstimatorPopup } from "@/components/solutions/free-estimator-popup"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Valuation for Business Buyers| Free Estimate | KeyInsightsAI",
    description: "Professional business valuation in 24 hours for $399-$549. Validate asking price and identify red flags before you buy. Get a free estimate.",
}

export default function BuyerPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <SiteHeader />
            <BuyingHero />
            <BuyerLogos />
            <BuyerRisks />
            <BuyerSolution />
            <BuyerSteps />
            <BuyerUseCases />
            <BuyerMethods />
            <BuyerMethods />
            <FreeEstimatorPopup />
            <PackagesSection />
            <BuyerFAQ />
            <BuyerCTA />
            <StickyCTA />
            <SiteFooter />
        </main>
    )
}
// Force rebuild
