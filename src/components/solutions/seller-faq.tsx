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

export function SellerFAQ() {
    const faqs = [
        {
            question: "What is a business valuation and why do I need one?",
            answer: "A business valuation is a professional assessment that determines the fair market value of a company based on its financial performance, assets, market position, and growth potential. You need one for selling your business, buying a business, securing financing (SBA loans over $250,000 require third-party valuations), partnership matters, estate planning, divorce proceedings, or strategic planning. Whether you're a buyer, seller, or advisor, a professional business valuation removes guesswork and provides the confidence needed to make sound financial decisions."
        },
        {
            question: "How much does a professional business valuation cost?",
            answer: "Traditional valuation firms typically charge $2,000 to $25,000+ depending on business complexity, with most small to mid-size business valuations falling in the $5,000-$15,000 range. KeyInsights AI offers a faster, more affordable alternative: Essential Package ($399) includes comprehensive valuation report and red flags analysis, while the Exit Ready Package ($549) includes everything in Essential plus professional teaser, CIM, and valuation enhancement report. All packages are delivered within 24 hours using the same rigorous methodologies as traditional firms."
        },
        {
            question: "How long does a business valuation take?",
            answer: "Traditional business valuations typically take 2-6 weeks from submission to final report. KeyInsights AI delivers all business valuations within 24 hours. Our streamlined process and technology-enabled approach allows us to process your financial information quickly, apply sophisticated valuation methodologies efficiently, and generate comprehensive reports that meet professional standards—all while your transaction is still timely. The fast delivery doesn't compromise quality."
        },
        {
            question: "What valuation methods do you use?",
            answer: "KeyInsights AI employs three core business valuation approaches: Income Approach (using DCF analysis, SDE multiples for owner-operated businesses, and EBITDA multiples for larger businesses), Market Approach (analyzing comparable business sales, industry-specific multiples, and geographic market adjustments), and Asset-Based Approach (assessing book value, adjusted net asset value, and liquidation value where applicable). Our analysts apply the most relevant approaches to ensure your valuation reflects true market value."
        },
        {
            question: "What documents or information do I need to provide?",
            answer: "Required documents include: tax returns (last 3 years), Profit & Loss statements (last 3 years plus current YTD), balance sheets (last 3 years plus current YTD), business overview, and asset list. Helpful additional information includes customer concentration data, lease agreements, key employee roles and compensation, pending contracts or litigation, and recent operational changes. The more complete your documentation, the more accurate your valuation will be."
        },
        {
            question: "How do I get started with a valuation?",
            answer: "Getting your business valuation is straightforward: (1) Select your package (Essential $399, Exit Ready $549, or Portfolio for advisors), (2) Submit your information through our secure online form and upload financial documents, (3) Receive your comprehensive report within 24 hours, (4) Review and take action using your valuation to price accurately, negotiate confidently, or make informed decisions. All payments are processed securely through Stripe."
        },
        {
            question: "Is an online business valuation accurate and reliable?",
            answer: "Yes—when performed by qualified professionals using rigorous methodologies, online business valuations are just as accurate and reliable as traditional in-person valuations. We use the same Income, Market, and Asset-based approaches that traditional valuation firms employ, following industry standards recognized by business brokers, SBA lenders, and M&A advisors. Our online platform actually enhances accuracy by accessing real-time market data, applying consistent analytical frameworks, and cross-referencing multiple data sources for validation."
        },
        {
            question: "What will I receive in my valuation report?",
            answer: "Essential Package ($399) includes a comprehensive Business Valuation Report (15-25 pages) with fair market value determination, financial analysis, industry benchmarks, and methodology explanation, plus Red Flags Analysis identifying potential risks. Exit Ready Package ($549) includes everything above plus a Professional Teaser for buyer outreach, a detailed Confidential Information Memorandum (CIM), and a Valuation Enhancement Report with specific recommendations to increase business value."
        },
        {
            question: "Who should get a business valuation?",
            answer: "Business owners should get valuations when considering selling, planning retirement or succession, evaluating growth investments, seeking financing, or facing partnership disputes. Business buyers need valuations to verify fair market value, uncover risks, and support SBA loan applications. Business brokers and M&A advisors rely on valuations to set realistic prices and provide third-party validation. CPAs and financial advisors obtain valuations for estate planning, buy-sell agreements, and strategic advisory services."
        },
        {
            question: "How is KeyInsights AI different from other valuation services?",
            answer: "KeyInsights AI delivers professional-quality valuations with three fundamental advantages: Speed (24 hours vs. 2-6 weeks), Price ($399-$549 vs. $2,000-$25,000), and Tailored Packages (Essential for buyers, Exit Ready for sellers, Portfolio for advisors). We use identical methodologies to traditional firms but eliminate inefficiencies that drive up pricing. Additional differentiators include white-label capability for brokers, coverage for both US and Canada markets, and professional reports that meet SBA lender standards."
        },
        {
            question: "Is my business information kept confidential?",
            answer: "Absolutely. Your business information and financial data are kept strictly confidential with bank-level security. All documents are transmitted and stored using encrypted connections. Only our valuation analysts working on your specific report can access your information. We never sell, share, or distribute your business information to third parties. All payments are processed through Stripe, and we never store your credit card information. Our analysts adhere to professional confidentiality standards consistent with CPA and M&A advisory professions."
        },
        {
            question: "Do you serve businesses in both the US and Canada?",
            answer: "Yes, KeyInsights AI provides professional business valuations for companies throughout the United States (all 50 states) and Canada (all provinces). We have expertise in regional market conditions, industry-specific multiples, and regulatory environments for both countries. Our valuation methodologies adjust for regional market multiples, local industry dynamics, regulatory environments, and currency considerations. All packages are priced in USD, and Canadian clients can pay in USD through our secure Stripe payment processing."
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
                                Common questions from founders planning their exit.
                            </p>
                        </div>

                        {/* Contact CTA */}
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Still specific questions?</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                        Chat with our valuation team directly.
                                    </p>
                                    <ContactUsDialog
                                        triggerText="Contact Us"
                                        triggerClassName="border-blue-600 text-white hover:bg-blue-800 hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white w-full sm:w-auto"
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
