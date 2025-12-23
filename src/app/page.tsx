import { SegmentHero } from "@/components/home/segment-hero"
import { SiteHeader } from "@/components/site-header"
import { ProcessSteps } from "@/components/home/process-steps"
import { SiteFooter } from "@/components/site-footer"
import { Metadata } from "next"
import { BuyerLogos } from "@/components/solutions/buyer-logos"
import { HomeFAQ } from "@/components/home/home-faq"
import { ProblemSolution } from "@/components/home/problem-solution"
import { WhyHours } from "@/components/home/why-hours"
import { Methodology } from "@/components/home/methodology"
import { HomeStickyCTA } from "@/components/home/home-sticky-cta"
import { FinalCTA } from "@/components/home/final-cta"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Business Valuation in 24 Hours | Free Estimate | KeyInsightsAI",
  description: "Get a professional business valuation for $399-$549 in 24 hours. Free estimate in minutes. Data-driven analysis for buyers, sellers, and advisors.",
}

import JsonLd from "@/components/json-ld"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KeyInsightsAI",
    "url": "https://keyinsightsai.com",
    "logo": "https://keyinsightsai.com/logo.png",
    "sameAs": [
      "https://twitter.com/keyinsightsai",
      "https://linkedin.com/company/keyinsightsai"
    ],
    "description": "Professional data-driven business valuations in 24 hours."
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <SegmentHero />
      <BuyerLogos />
      <ProblemSolution />
      <ProcessSteps />
      <WhyHours />
      <Methodology />
      <HomeFAQ />
      <HomeStickyCTA />
      <FinalCTA />
      <Analytics />
      <SpeedInsights />
      <SiteFooter />
    </main>
  )
}
