"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ContactUsDialog } from "@/components/shared/contact-us-dialog"

const faqItems = [
    {
        question: "How can you deliver a quality valuation in 24 hours?",
        answer: "We've eliminated the inefficiencies that plague traditional firms—no client queues, no partner committee reviews, no bureaucratic delays. Our parallel processing model means multiple analysts review your data simultaneously, and our focused scope (SMB transactions up to $10M) allows us to apply proven methodologies efficiently without cutting corners.",
    },
    {
        question: "Is a $399 valuation really as good as a $5,000 one?",
        answer: "For SMB transactions up to $10M, yes. Traditional firms charge premium prices because they have overhead, partner hierarchies, and generalist teams. We're specialists—business valuations are all we do. You get the same four rigorous methodologies, the same expert review, the same defensible report. What you don't get is a six-week wait.",
    },
    {
        question: "What's included in each package?",
        answer: "The Essential package ($399) includes your Business Valuation Report with four methodologies and a Red Flags Analysis. The Exit Ready package ($549) adds a Business Teaser, Confidential Information Memorandum (CIM), and Valuation Enhancement Report—everything you need to go to market.",
    },
    {
        question: "What if I need revisions or have questions?",
        answer: "Revisions are included at no extra charge. Every package also includes a consultation call where we walk through your report, answer questions, and discuss the findings. We're not just delivering a document—we're supporting your decision.",
    },
    {
        question: "Is my financial data secure?",
        answer: "Yes. We use bank-level 256-bit SSL encryption for all data transmission. We rely on Stripe for payment processing, meaning we never store your credit card information. Your financial inputs are stored in a secure, encrypted database and are never shared with third parties without your explicit consent.",
    },
    {
        question: "What types of businesses can you value?",
        answer: "We specialize in SMB transactions with enterprise values up to $10M. This includes most small and mid-sized businesses across industries—from service businesses and e-commerce to manufacturing and professional practices. For complex multi-entity structures or valuations requiring regulatory compliance (SBA, ESOP), we recommend working with a specialized firm.",
    },
]

export function WhyUsFAQ() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
                    {/* Left Column - Header (Sticky on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-24 lg:self-start space-y-6"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Playfair_Display'] serif mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-slate-600">
                                Common questions about our process, pricing, and deliverables.
                            </p>
                        </div>

                        {/* Contact CTA */}
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <HelpCircle className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-1">Still have questions?</h4>
                                    <p className="text-sm text-slate-600 mb-4">
                                        Our team is happy to help.
                                    </p>
                                    <ContactUsDialog
                                        triggerText="Contact Us"
                                        triggerClassName="border-blue-600 text-white hover:bg-blue-50 w-full sm:w-auto text-sm"
                                        defaultSubject="general"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Accordion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {faqItems.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-slate-200 rounded-xl px-6 bg-white hover:border-blue-200 data-[state=open]:border-blue-200 data-[state=open]:bg-blue-50/30 transition-all duration-200"
                                >
                                    <AccordionTrigger className="text-left text-slate-900 font-semibold text-base py-5 hover:no-underline group">
                                        <span className="group-hover:text-blue-600 transition-colors pr-4">
                                            {item.question}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-[15px]">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
