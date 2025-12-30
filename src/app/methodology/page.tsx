import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Metadata } from "next"
import { MethodologyHero } from "@/components/methodology/methodology-hero"
import { MethodologyOverview } from "@/components/methodology/methodology-overview"
import { MethodologyDetailsA } from "@/components/methodology/methodology-details-a"
import { MethodologyWeightingDonut } from "@/components/methodology/methodology-weighting-donut"
import { MethodologyCTA } from "@/components/methodology/methodology-cta"

export const metadata: Metadata = {
    title: "Our Valuation Methodology | KeyInsightsAI",
    description: "Three proven valuation approaches combined into one defensible number. Learn how we value businesses using Income Approach, Market Comparables, and Asset-Based methods.",
}

export default function MethodologyPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <SiteHeader />
            <MethodologyHero />
            <MethodologyOverview />
            <MethodologyDetailsA />
            <MethodologyWeightingDonut />
            <MethodologyCTA />
            <SiteFooter />
        </main>
    )
}
