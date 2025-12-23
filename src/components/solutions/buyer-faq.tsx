"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactUsDialog } from "@/components/shared/contact-us-dialog"

export function BuyerFAQ() {
    const faqs = [
        {
            question: "Why do I need an independent valuation when buying a business?",
            answer: "An independent valuation is one of the most important investments when acquiring a company. It helps you avoid overpaying (the #1 reason 70-90% of acquisitions fail to deliver expected value), uncovers hidden red flags like customer concentration or owner dependency, gives you negotiating leverage with objective third-party data, and helps secure SBA financing approval. For just $399 (Essential Package), you get both the valuation report and red flags analysis—a small investment that could save you from a six-figure mistake."
        },
        {
            question: "How much does a business valuation cost for acquisition due diligence?",
            answer: "Traditional business acquisition valuations cost $5,000-$15,000, with comprehensive due diligence packages exceeding $20,000. KeyInsights AI offers the Essential Package for $399, which includes complete fair market value analysis, financial performance assessment, industry comparable sales data, red flags analysis, and 24-hour delivery. We deliver the same analytical rigor using technology to eliminate inefficiencies, passing those savings to you. Our fast delivery ensures valuation never delays your acquisition timeline."
        },
        {
            question: "What red flags should I look for when buying a business?",
            answer: "Critical red flags include: Financial issues (declining revenue, inconsistent financials, negative working capital), operational risks (customer concentration over 20%, owner dependency, key employee risk, deferred maintenance), market and legal concerns (pending litigation, regulatory issues, industry decline), and strategic problems (limited growth potential, expiring competitive advantages, technology obsolescence). Our Essential Package ($399) includes comprehensive red flags analysis across all these categories, assessing their severity and impact on business value to help you decide whether to proceed, renegotiate, or walk away."
        },
        {
            question: "Do I need a business valuation for an SBA loan?",
            answer: "Yes, if your SBA loan exceeds $250,000, a third-party business valuation is required. Even for smaller loans, providing a valuation strengthens your application. SBA lenders need objective confirmation that the purchase price is reasonable and the business generates sufficient cash flow for debt service. Our Essential Package ($399) provides everything SBA lenders require: professional valuation using accepted methodologies, detailed financial analysis, cash flow assessment, and independent third-party certification—all delivered in 24 hours so loan processing isn't delayed."
        },
        {
            question: "How do I know if I'm paying too much for a business?",
            answer: "Determining fair value requires comparing the asking price against objective market data and earning potential. Most small to mid-size businesses are valued using SDE (Seller's Discretionary Earnings) multiples, typically 1.5x to 4x depending on industry, growth, diversification, and transferability. Warning signs you're overpaying include: price significantly exceeding comparable sales, overly optimistic assumptions, multiples above industry norms, and emotional attachment driving your offer. Our Essential Package ($399) provides fair market value calculation, industry comparable analysis, multiple validation, and red flags analysis to prevent overpaying."
        },
        {
            question: "What's included in a buyer due diligence valuation report?",
            answer: "Our Essential Package ($399) includes: Business Valuation Report (15-25 pages) with fair market value determination, financial performance analysis, market comparable analysis, industry benchmarking, and risk assessment; plus Red Flags Analysis identifying customer concentration, owner dependency, revenue trends, financial inconsistencies, operational vulnerabilities, legal concerns, and deferred capital needs. Each red flag includes severity rating, potential financial impact, and recommended actions. All delivered in 24 hours to support your acquisition decision with objective validation and negotiating ammunition."
        },
        {
            question: "Should I get a valuation before or after making an offer?",
            answer: "Get a valuation BEFORE making your final offer. This gives you informed negotiation, avoids emotional anchoring, provides a stronger negotiating position with objective data, identifies red flags early, and enables faster closing. Best practice: request the seller's financials during initial discussions, obtain the valuation, then make an educated offer. Our 24-hour delivery makes it practical to obtain valuations early. In competitive situations, structure your offer as 'contingent on satisfactory due diligence' and obtain the valuation immediately afterward."
        },
        {
            question: "What questions should I ask before buying a business?",
            answer: "Critical questions include: Financial (revenues/profits for 3 years, reconciliation with tax returns, SDE calculation, working capital, hidden liabilities), Customer & Revenue (top customer concentration, retention rates, contracts, seasonality), Operational (owner dependency, key employees, documented processes, equipment condition), Legal & Compliance (lawsuits, licenses, violations, lease transfers), Market & Competition (competitors, industry trends, differentiation), and Seller questions (reason for selling, transition support). Many of these questions are directly addressed in our Essential Package ($399) valuation report and red flags analysis."
        },
        {
            question: "What's the difference between a business appraisal and valuation?",
            answer: "Business valuation is a professional assessment for any purpose—buying, selling, financing, or planning—using accepted methodologies to determine fair market value. Business appraisal typically refers to a more formal, certified valuation by a credentialed professional for legal, tax, or regulatory purposes (IRS reporting, divorce, ESOP, litigation). KeyInsights AI provides professional business valuations for transactional purposes (acquisition decisions, SBA financing, negotiations, due diligence) for $399-$549. For certified appraisals for IRS, court, or ESOP purposes, you'll need a credentialed appraiser."
        },
        {
            question: "How do I verify the seller's financial statements are accurate?",
            answer: "Cross-reference multiple documents: compare tax returns (submitted to IRS) with P&L statements, match bank deposits to reported revenue, verify accounts receivable aging reports. Key verification areas include revenue (bank deposits, customer contracts, actual invoices), expenses (industry norms, personal expenses, unusual reductions), and assets (current values, proper depreciation, proof of ownership). Our red flags analysis (included in the $399 Essential Package) identifies financial inconsistencies, unusual patterns, red flags suggesting manipulation, and needed adjustments. Always request 3 years of business tax returns as they're most reliable."
        },
        {
            question: "What is seller's discretionary earnings (SDE) and why does it matter?",
            answer: "SDE is the primary valuation metric for small to mid-size owner-operated businesses (under $5M revenue). Formula: SDE = Net Profit + Owner Compensation + Owner Benefits + Non-Recurring Expenses. SDE shows true earning potential (not just tax return profit), determines business value using industry multiples (1.5x-4.5x SDE depending on business type), and reveals your true ROI before taking your own salary. Our Essential Package ($399) includes professional SDE calculation with appropriate add-backs, industry multiple analysis, comparison to benchmarks, and verification that add-backs are legitimate."
        },
        {
            question: "Can I negotiate a lower price based on valuation findings?",
            answer: "Yes—independent valuations are highly effective negotiating tools. You can use objective fair market value as evidence for a lower offer, leverage red flags (customer concentration, owner dependency, deferred maintenance, declining revenue) as specific negotiating points, and justify multiple adjustments based on identified risks. Present professional analysis, identify specific issues, propose earn-out structures, or request seller corrections. For $399, you gain professional credibility, specific data points for negotiation, walk-away confidence, and faster negotiations. Research shows buyers using independent valuations negotiate 12-18% lower on average."
        },
    ]

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
                    {/* Left Column - Header (Sticky on desktop) */}
                    <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 font-['Playfair_Display'] serif mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-slate-600">
                                Everything you need to know about buying a business and using valuations for due diligence.
                            </p>
                        </div>

                        {/* Contact CTA */}
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-5 h-5 text-[#1e3a8a]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-1">Still have questions?</h4>
                                    <p className="text-sm text-slate-600 mb-4">
                                        Our team is happy to walk you through the process.
                                    </p>
                                    <ContactUsDialog
                                        triggerText="Contact Us"
                                        triggerClassName="border-[#1e3a8a] text-white hover:bg-blue-800 hover:text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Accordion */}
                    <div>
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-slate-200 rounded-xl px-6 bg-white hover:border-slate-300 data-[state=open]:border-[#1e3a8a]/30 data-[state=open]:bg-[#1e3a8a]/[0.02] transition-all duration-200"
                                >
                                    <AccordionTrigger className="text-left text-slate-900 font-semibold text-base py-5 hover:no-underline group">
                                        <span className="group-hover:text-[#1e3a8a] transition-colors pr-4">
                                            {faq.question}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-[15px]">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}