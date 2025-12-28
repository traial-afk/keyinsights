import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Metadata } from "next"
import { MethodologyHero } from "@/components/methodology/methodology-hero"
import { MethodologyOverview } from "@/components/methodology/methodology-overview"
// Alternating Layout Options - swap these to test
import { MethodologyDetailsA } from "@/components/methodology/methodology-details-a"
import { MethodologyDetailsB } from "@/components/methodology/methodology-details-b"

// Weighting Visualization Options - swap these to test
import { MethodologyWeightingDonut } from "@/components/methodology/methodology-weighting-donut"
import { MethodologyWeightingBars } from "@/components/methodology/methodology-weighting-bars"
import { MethodologyWeightingFunnel } from "@/components/methodology/methodology-weighting-funnel"

import { MethodologyQuality } from "@/components/methodology/methodology-quality"
import { MethodologyLimitations } from "@/components/methodology/methodology-limitations"
import { MethodologyCTA } from "@/components/methodology/methodology-cta"

export const metadata: Metadata = {
    title: "Our Valuation Methodology | KeyInsightsAI",
    description: "Four proven valuation approaches combined into one defensible number. Learn how we value businesses using DCF, Market Comparables, EBITDA Multiples, and Asset-Based methods.",
}

export default function MethodologyPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <SiteHeader />
            <MethodologyHero />
            <MethodologyOverview />
            
            {/* Swap between MethodologyDetailsA and MethodologyDetailsB */}
            <MethodologyDetailsA />
            <MethodologyDetailsB />
            
            {/* Swap between MethodologyWeightingDonut, MethodologyWeightingBars, MethodologyWeightingFunnel */}
            <MethodologyWeightingDonut />
            <MethodologyWeightingBars />
            <MethodologyWeightingFunnel />
            
            <MethodologyQuality />
            <MethodologyLimitations />
            <MethodologyCTA />
            <SiteFooter />
        </main>
    )
}
