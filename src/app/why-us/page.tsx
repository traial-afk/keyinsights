import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Metadata } from "next"
import { WhyUsHero } from "@/components/why-us/why-us-hero"
import { WhyUsComparison } from "@/components/why-us/why-us-comparison"
import { WhyUsHowPossible } from "@/components/why-us/why-us-how-possible"
import { WhyUsMethodologies } from "@/components/why-us/why-us-methodologies"
import { WhyUsNotRightFit } from "@/components/why-us/why-us-not-right-fit"
import { WhyUsPersonas } from "@/components/why-us/why-us-personas"
import { WhyUsDeliverables } from "@/components/why-us/why-us-deliverables"
import { WhyUsFAQ } from "@/components/why-us/why-us-faq"
import { WhyUsCTA } from "@/components/why-us/why-us-cta"
// import { WhyUsTestimonials } from "@/components/why-us/why-us-testimonials"

export const metadata: Metadata = {
    title: "Why KeyInsights AI? | 24-Hour Business Valuations from $399",
    description: "Professional business valuations in 24 hours versus 2-6 weeks. $399-$549 versus $2,000-$25,000. Technology-enabled precision, expert-verified results.",
}

export default function WhyUsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <SiteHeader />
            <WhyUsHero />
            <WhyUsComparison />
            <WhyUsHowPossible />
            <WhyUsMethodologies />
            <WhyUsNotRightFit />
            <WhyUsPersonas />
            <WhyUsDeliverables />
            {/* <WhyUsTestimonials /> */}
            <WhyUsFAQ />
            <WhyUsCTA />
            <SiteFooter />
        </main>
    )
}
