import { SiteHeader } from "@/components/site-header"
import { SellingHero } from "@/components/solutions/selling-hero"
import { SiteFooter } from "@/components/site-footer"
import { Metadata } from "next"
import { SellerSteps } from "@/components/solutions/seller-steps"
import { SellerSolution } from "@/components/solutions/seller-solution"
import { SellerProblem } from "@/components/solutions/seller-problem"
import { WhyHours } from "@/components/solutions/why-hours"
import { SellerPackages } from "@/components/solutions/seller-packages"
import { SellerFAQ } from "@/components/solutions/seller-faq"
import { SellerStickyCTA } from "@/components/solutions/seller-sticky-cta"
import { SellerCTA } from "@/components/solutions/seller-cta"
import { SellerUseCases } from "@/components/solutions/seller-use-cases"
import { BuyerLogos } from "@/components/solutions/buyer-logos"
import { SellerMethodology } from "@/components/solutions/seller-methodology"
import { SellerDeliverables } from "@/components/solutions/seller-deliverables"
import { FreeEstimatorPopup } from "@/components/solutions/free-estimator-popup"

export const metadata: Metadata = {
    title: "Valuation for Business Sellers| Free Estimate | KeyInsightsAI",
    description: "Pre-sale business valuation in 24 hours. Identify value drivers, justify your asking price, and negotiate from strength. From $399. Get a free estimate.",
}

export default function SellingPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
            <SiteHeader />
            <div className="pt-16">
                <SellingHero />
                <BuyerLogos />
                <SellerProblem />
                <SellerSolution />
                <WhyHours />
                <SellerMethodology />
                <SellerSteps />
                <SellerDeliverables />
                <SellerUseCases />
                <FreeEstimatorPopup />
                <SellerPackages />
                <SellerFAQ />
                <SellerCTA />

                <SellerStickyCTA />
            </div>
            <SiteFooter />
        </main>
    )
}
