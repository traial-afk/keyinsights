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

export function AdvisorFAQ() {
    const faqs = [
        {
            question: "Can I add my company branding to the valuation reports?",
            answer: "Yes—white-label capability is a core feature for our advisor clients. Your company name, logo, contact information, and brand colors appear on all report headers and footers. KeyInsights AI does NOT appear anywhere on deliverables—no references to outsourcing or third-party preparation. Your clients see ONLY your brand and have no idea you've outsourced the valuation work. This allows you to maintain client relationships, add premium services without overhead, increase revenue by capturing $1,000-$2,500+ margin per valuation, and gain competitive advantage with 24-hour delivery versus competitor 2-6 week timelines."
        },
        {
            question: "How quickly can you deliver a business valuation report?",
            answer: "All KeyInsights AI business valuations are delivered within 24 hours of receiving complete client information. This is a fundamental competitive advantage that allows you to close more deals faster (avoiding deal fatigue), serve more clients simultaneously (no capacity constraints), respond to market opportunities (when clients need urgent analysis), and create competitive differentiation ('24-hour business valuation delivery' in your service offerings). Traditional firms take 2-6 weeks. For advisors managing multiple concurrent clients using our Portfolio Package, we process submissions in parallel—each delivered in 24 hours with consistent quality across all deliverables."
        },
        {
            question: "Do you offer volume pricing for business brokers handling multiple clients?",
            answer: "Yes—our Portfolio Package provides 3x Exit Ready packages bundled together with volume pricing (significant savings vs. individual purchases). Each client receives professional valuation report, red flags analysis, business teaser, full CIM, enhancement report, 24-hour delivery, and white-label branding with YOUR company information. Perfect for business brokers managing multiple listings, M&A advisory firms with multiple sell-side clients, investment firms screening opportunities, and CPAs/financial advisors serving business owner clients. No expiration—use credits as needed. For larger firms requiring significant volume, we offer custom pricing structures, dedicated account management, and priority processing."
        },
        {
            question: "What's the difference between a Broker Opinion of Value and a formal appraisal?",
            answer: "A Broker Opinion of Value (BOV) is an informal market value estimate based on broker's professional judgment, typically free or low-cost to attract listings, but not independent and cannot be used for legal/tax purposes. A Formal Business Appraisal is a certified valuation by credentialed professionals (CVA, ASA) following USPAP standards, costing $5,000-$25,000+, used for IRS reporting, divorce, litigation, or ESOP purposes. KeyInsights AI provides professional third-party business valuations positioned between BOVs and expensive certified appraisals—independent analysis at $399-$549 using rigorous methodologies for transactional purposes. Advisors use our valuations to provide clients with independent third-party validation that carries more weight than BOVs."
        },
        {
            question: "Will the valuation report help support my listing price with prospective buyers?",
            answer: "Yes—third-party valuation reports are highly effective for supporting listing prices and accelerating buyer decisions. Independent credibility (no conflict of interest), deflects price objections (buyers must engage with objective data), reduces negotiation window (from 20-30% below asking to 5-15%), and accelerates decision timeline (research shows listings with professional valuations sell 30-40% faster and within 5-10% of asking price). Present valuations with YOUR branding to serious buyers after NDA execution. For sophisticated buyers, private equity, strategic acquirers, and investor groups, professional valuations meet their standards and enable internal approval. Investment: $399-$549. Value: Close listings 30-40% faster, achieve asking price or 5-10% discount vs. 20-30% discounts without validation."
        },
        {
            question: "What's included in the red flags analysis?",
            answer: "Red flags analysis is included in all packages and identifies issues that could reduce business value, delay transactions, or cause deals to collapse. We assess Financial Red Flags (revenue trends, margin compression, inconsistencies, cash flow issues), Customer & Revenue Red Flags (concentration >20%, churn, contract expirations, volatility), Operational Red Flags (owner dependency, key employee risk, undocumented processes, deferred maintenance), Legal & Compliance Red Flags (pending litigation, regulatory issues, contract transferability, IP gaps), and Market & Strategic Red Flags (industry decline, competitive threats, supplier dependency). Each red flag includes severity rating (critical/moderate/minor), explanation, impact on value, and recommended actions. Advisors use this for pre-listing assessment, remediation planning, pricing strategy, and buyer preparation."
        },
        {
            question: "Can you prepare the Confidential Information Memorandum (CIM) for my client's business?",
            answer: "Yes—CIM preparation is included in our Exit Ready and Portfolio packages. We deliver professional 20-40 page CIMs including executive summary, business description, market & industry analysis, financial performance, management & operations, growth opportunities, and transaction structure—all with custom design, white-label branding, and ready-to-distribute PDF format. Creating quality CIMs takes 15-25 hours (worth $2,250-$7,500 in advisor time). KeyInsights AI delivers in 24 hours for $549 (Exit Ready Package), allowing you to handle multiple clients simultaneously without capacity constraints. CIMs attract higher-quality buyers, command 8-15% premium pricing on average, accelerate sales timeline, and reduce deal fatigue. Traditional CIM writers charge $3,000-$8,000 per CIM."
        },
        {
            question: "What valuation methodologies do you use?",
            answer: "KeyInsights AI employs the three core business valuation approaches: Income Approach (Capitalization of Earnings for stable businesses, DCF for predictable cash flows—primary for service businesses and owner-operated companies), Market Approach (Comparable Sales Method using actual transactions, Industry Rule of Thumb Method—critical for all valuations providing market reality check), and Asset-Based Approach (Adjusted Net Asset Value, Liquidation Value—used for asset-intensive businesses). Our process includes financial analysis, industry research, applying multiple methodologies, reconciliation considering qualitative factors, and risk assessment. Using multiple approaches demonstrates thoroughness, provides cross-validation, supports financing approval, and aligns with professional standards. This credibility withstands scrutiny from buyers, lenders, and other advisors."
        },
        {
            question: "How do I submit client information to get started?",
            answer: "Getting started is simple: (1) Select your package (Essential $399, Exit Ready $549, or Portfolio for volume pricing), (2) Create your advisor account with one-time setup providing firm information for white-labeling, (3) Submit client information (business tax returns for 3 years, P&L and balance sheets, business overview) via secure portal with encrypted transmission, (4) Select deliverables and submit with payment via Stripe, (5) Receive white-label reports within 24 hours via email. All documents feature your company branding with no KeyInsights AI references. Quality guarantee allows revision requests at no extra cost. For high-volume advisors, submit multiple clients simultaneously with parallel processing and consistent 24-hour turnaround per submission. Total submission time: Under 30 minutes."
        },
        {
            question: "Will SBA lenders accept this valuation for financing?",
            answer: "Yes—KeyInsights AI valuation reports meet SBA lender requirements for third-party business valuations in most cases. SBA 7(a) loans over $250,000 require independent third-party valuation with professional methodology. What lenders look for: independence (we're unrelated third party with no conflict), professional methodology (Income, Market, Asset approaches using industry standards), documentation quality (15-25 page reports with methodology explanation), and cash flow analysis (demonstrating debt service capability). KeyInsights AI valuations work for standard business acquisitions, owner-operated businesses, straightforward transactions, and SBA 7(a) and 504 loans. Larger transactions over $10M or complex structures may require certified appraisers. We've successfully supported SBA loans with community banks, regional lenders, and national SBA lenders. Client saves $4,600-$9,600 versus traditional $5,000-$10,000 certified appraisals."
        },
        {
            question: "What industries do you cover?",
            answer: "KeyInsights AI provides professional business valuations across virtually all industries in US and Canadian markets. Coverage includes Professional Services (accounting, legal, consulting, marketing agencies, IT services), Healthcare (dental, medical, veterinary, physical therapy, home healthcare), Retail (e-commerce, brick-and-mortar, specialty retail, franchises), Food & Beverage (restaurants, cafes, catering, manufacturing), Home Services (HVAC, plumbing, electrical, landscaping, cleaning, property management), Automotive (repair, dealerships, car washes, tire shops), Manufacturing & Distribution, Construction & Trades, Technology (SaaS, software development, IT consulting), Personal Services (salons, fitness, childcare, pet services), Transportation & Logistics, and many more. For each industry we provide industry-specific multiples, comparable transaction data, industry benchmarks, and industry risk factors. Geographic coverage: All 50 US states and all Canadian provinces with regional market adjustments."
        },
        {
            question: "What is a business teaser and how does it help my listing?",
            answer: "A business teaser is a 1-2 page anonymous summary designed to generate qualified buyer interest while protecting client confidentiality. It includes anonymous business overview (no company name), key financial highlights (revenue/SDE ranges), investment highlights, business strengths, and next steps for interested buyers to sign NDA. Teasers protect confidentiality (competitors/employees/customers don't learn about sale), enable wide distribution without risk (business-for-sale marketplaces, industry platforms, direct outreach, investor networks), filter qualified buyers (only serious prospects request NDA and full CIM), and create professional first impression attracting higher-quality buyers. Professional presentation supports premium pricing and generates competitive interest. Included in Exit Ready Package ($549) with white-label branding, professionally written, optimized for distribution, versus traditional approach costing $450-$600 in advisor time with variable quality."
        },
        {
            question: "How does an independent valuation help close deals faster?",
            answer: "Independent valuations accelerate deals four ways: (1) Reduces buyer objections—buyers must engage with objective data rather than questioning broker estimates, reaching price agreement 40% faster; (2) Narrows negotiation window—from typical $350K spread to $150K spread, converging in 1-3 weeks versus 4-8 weeks; (3) Accelerates due diligence—from 5-9 weeks to 3-5 weeks by providing professional analysis upfront; (4) Supports faster financing approval—valuation already in hand eliminates 3-8 week wait for lender-required valuation. Research shows deals with valuations completed pre-LOI close 35% faster from LOI to closing, with 65-70% close rates versus 40-45% without. Real-world comparison: Without valuation 7-10 months total timeline, with KeyInsights AI valuation 4-5 months (43-50% faster). ROI: $549 investment delivers 3-5 month timeline compression and 20-25 point close rate improvement."
        },
    ]

    return (
        <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
                    {/* Left Column - Header (Sticky on desktop) */}
                    <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-white font-['Playfair_Display'] serif mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                Everything advisors need to know about our white-label valuation services.
                            </p>
                        </div>

                        {/* Contact CTA */}
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Partner with us</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                        Discuss white-label solutions for your practice.
                                    </p>
                                    <ContactUsDialog
                                        triggerText="Contact Our Team"
                                        triggerClassName="border-blue-600 text-white hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white w-full sm:w-auto"
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
                                    className="border border-slate-200 dark:border-slate-800 rounded-xl px-6 bg-white dark:bg-slate-900 hover:border-blue-200 dark:hover:border-blue-800 data-[state=open]:border-blue-200 dark:data-[state=open]:border-blue-800 data-[state=open]:bg-blue-50/30 dark:data-[state=open]:bg-blue-900/10 transition-all duration-200"
                                >
                                    <AccordionTrigger className="text-left text-slate-900 dark:text-white font-semibold text-base py-5 hover:no-underline group">
                                        <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-4">
                                            {faq.question}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed pb-6 text-[15px]">
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