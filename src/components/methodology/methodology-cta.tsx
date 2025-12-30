"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, FileText, Eye, Download, X, Briefcase } from "lucide-react"
import Link from "next/link"
import { ContactUsDialog } from "@/components/shared/contact-us-dialog"

export function MethodologyCTA() {
    const [showSample, setShowSample] = useState(false)
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com"

    return (
        <section className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Main content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 font-['Playfair_Display'] serif leading-tight mb-4">
                        Ready to See It{" "}
                        <span className="italic text-[#f4a623]">in Action</span>?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Review a sample report or get started with your own valuation today.
                    </p>
                </motion.div>

                {/* Sample Report Preview Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex justify-center mb-8"
                >
                    <Button
                        onClick={() => setShowSample(!showSample)}
                        variant="outline"
                        className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white h-12 px-8 rounded-full"
                    >
                        <FileText className="mr-2 h-5 w-5" />
                        {showSample ? "Hide Sample Report" : "Preview Sample Report"}
                    </Button>
                </motion.div>

                {/* Expandable Sample Report */}
                <AnimatePresence>
                    {showSample && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mb-10 overflow-hidden"
                        >
                            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                                <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-blue-100">
                                            <FileText className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Sample Business Valuation Report</h4>
                                            <p className="text-xs text-slate-500">10-20 Pages • PDF</p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setShowSample(false)}
                                        className="text-slate-400 hover:text-slate-600"
                                    >
                                        <X className="h-5 w-5" />
                                    </Button>
                                </div>

                                {/* PDF Preview */}
                                <div className="h-[500px] bg-slate-100">
                                    <iframe
                                        src="/samples/business-valuation-report.pdf#toolbar=0&navpanes=0&view=FitH"
                                        className="w-full h-full"
                                        title="Sample Business Valuation Report"
                                    />
                                </div>

                                {/* Actions */}
                                <div className="p-4 bg-white border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                                    <a
                                        href="/samples/business-valuation-report.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1"
                                    >
                                        <Button className="w-full bg-[#1e3a8a] hover:bg-[#172e6e] text-white">
                                            <Eye className="mr-2 h-4 w-4" />
                                            View Full Report
                                        </Button>
                                    </a>
                                    <a href="/samples/business-valuation-report.pdf" download>
                                        <Button variant="outline" className="w-full sm:w-auto">
                                            <Download className="mr-2 h-4 w-4" />
                                            Download
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-10 relative overflow-hidden"
                >
                    {/* Accent bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f4a623] to-[#1e3a8a]"></div>

                    <div className="text-center">
                        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-lg md:text-xl mb-6">
                            <span className="font-bold text-[#1e3a8a]">Four methodologies.</span>
                            <span className="text-slate-300">•</span>
                            <span className="font-bold text-[#1e3a8a]">Expert verification.</span>
                            <span className="text-slate-300">•</span>
                            <span className="font-bold text-[#1e3a8a]">24-hour delivery.</span>
                        </div>

                        <p className="text-slate-600 max-w-xl mx-auto mb-8">
                            Professional valuations your clients can trust.{" "}
                            <span className="font-semibold text-slate-900">Starting at $399.</span>
                        </p>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/checkout">
                                <Button className="bg-[#f4a623] hover:bg-[#e09915] text-slate-900 font-bold h-14 px-10 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all group">
                                    Get a Valuation
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                                <Button
                                    variant="outline"
                                    className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white font-semibold h-14 px-8 text-lg rounded-full transition-all"
                                >
                                    <Calendar className="mr-2 w-5 h-5" />
                                    Schedule a Demo
                                </Button>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* White-label mention */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 flex flex-col items-center gap-3"
                >
                    <div className="flex items-center gap-2 text-slate-500">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm">Need white-label valuations for your clients?</span>
                    </div>
                    <ContactUsDialog
                        triggerText="Contact Us"
                        triggerClassName="border-slate-300 text-white hover:bg-slate-100 hover:text-slate-900 text-sm"
                    />
                </motion.div>

                {/* Secondary link */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center text-slate-500 mt-6"
                >
                    Not ready?{" "}
                    <Link
                        href="/estimate"
                        className="text-[#1e3a8a] hover:text-[#f4a623] underline underline-offset-4 transition-colors font-medium"
                    >
                        Try our free estimator first
                    </Link>
                </motion.p>
            </div>
        </section>
    )
}
