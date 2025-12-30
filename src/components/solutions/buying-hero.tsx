"use client"

import { ArrowRight, CheckCircle2, FileText, X, Eye, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function BuyingHero() {
    const [showSamples, setShowSamples] = useState(false)

    return (
        <section className="relative overflow-hidden bg-[#1e3a8a] pt-32 pb-48 lg:pt-48 lg:pb-64">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
                    {/* Left Column: Content */}
                    <div className="space-y-8 pt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center rounded-full border border-blue-400 bg-blue-900/50 px-4 py-1.5 text-sm font-bold text-blue-100 mb-2"
                        >
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Buyer Due Diligence
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="space-y-6"
                        >
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white leading-tight">
                                Don't <span className="relative inline-block text-[#f4a623]">
                                    Overpay
                                    <span className="absolute bottom-2 left-0 w-full h-3 bg-[#f4a623]/30 -z-10 rounded-sm"></span>
                                </span> <br className="hidden lg:block" />
                                <span className="block mt-2">for Your Next Acquisition</span>
                            </h1>
                            <p className="max-w-xl text-lg text-blue-100 leading-relaxed">
                                Independent valuations that reveal true value, hidden risks, and deal-breaking red flags. Delivered in 24 hours.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 pt-2"
                        >
                            <Link href="/valuation/start">
                                <Button size="lg" className="bg-[#f4a623] hover:bg-[#d48c1b] text-white font-semibold px-8 h-12 rounded-lg w-full sm:w-auto shadow-md hover:shadow-lg transition-all">
                                    Get My Valuation Report <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white/20 bg-white/10 text-white hover:bg-white/20 h-12 rounded-lg w-full sm:w-auto font-medium backdrop-blur-sm"
                                onClick={() => setShowSamples(!showSamples)}
                            >
                                {showSamples ? "Hide Sample Reports" : "View Sample Report"}
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-4"
                        >
                            <div className="flex items-center gap-2 text-white font-medium">
                                <CheckCircle2 className="h-5 w-5 text-[#f4a623]" />
                                24-Hour Delivery
                            </div>
                            <div className="flex items-center gap-2 text-white font-medium">
                                <CheckCircle2 className="h-5 w-5 text-[#f4a623]" />
                                SBA-Compliant
                            </div>
                            <div className="flex items-center gap-2 text-white font-medium">
                                <CheckCircle2 className="h-5 w-5 text-[#f4a623]" />
                                3-Method Analysis
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Stacked Cards Visual */}
                    <div className="relative mx-auto w-full lg:max-w-none flex items-center justify-center lg:justify-center">
                        <div className="relative w-full max-w-[600px] h-[580px]">

                            {/* Back Card - Red Flags Report */}
                            <motion.div
                                initial={{ opacity: 0, x: 40, rotate: 5 }}
                                animate={{ opacity: 1, x: 0, rotate: 5 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="absolute top-10 right-[-140px] w-[320px] lg:w-[340px]"
                            >
                                <Card className="bg-white p-6 shadow-xl rounded-2xl border border-slate-100">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[11px] text-orange-500 uppercase tracking-wider font-bold">Red Flags Report</span>
                                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                                                <AlertTriangle className="w-4 h-4 text-orange-500" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-800 text-sm">TechCorp Solutions Inc.</div>
                                                <div className="text-[11px] text-slate-400">As of November 2025</div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4">
                                            <div className="text-[11px] text-slate-500 mb-1">Risk Assessment</div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-2xl font-bold text-orange-600">High Risk</span>
                                                <span className="text-xs text-orange-500 font-semibold flex items-center">
                                                    <AlertTriangle className="w-3 h-3 mr-0.5" />
                                                    5 Issues
                                                </span>
                                            </div>
                                            <div className="w-full bg-orange-100 rounded-full h-1.5 mt-2">
                                                <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs">
                                                <span className="text-slate-500">Asking Price</span>
                                                <span className="font-semibold text-slate-700">$2.5M</span>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span className="text-slate-500">Adjusted Value</span>
                                                <span className="font-semibold text-orange-600">$2.15M</span>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span className="text-slate-500">Overpriced By</span>
                                                <span className="font-semibold text-orange-600">$350K</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1.5 text-[11px] text-orange-600 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                            Recommend: But with Caution
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Front Card - Main Valuation Report */}
                            <motion.div
                                initial={{ opacity: 0, x: -20, rotate: -4 }}
                                animate={{ opacity: 1, x: 0, rotate: -4 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="absolute top-16 left-[40px] w-[340px] lg:w-[380px] z-10 rotate4"
                            >
                                <Card className="bg-white p-7 shadow-2xl rounded-2xl border border-slate-100 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-500">
                                    <div className="space-y-5">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Buyer Valuation Report</span>
                                            <div className="w-2 h-2 rounded-full bg-[#f4a623] animate-pulse"></div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                                                <FileText className="w-5 h-5 text-[#1e3a8a]" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-800">TechCorp Solutions Inc.</div>
                                                <div className="text-[11px] text-slate-400">As of November 2025</div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5">
                                            <div className="text-[11px] text-slate-500 mb-1">Estimated Fair Value</div>
                                            <div className="flex items-baseline gap-3">
                                                <span className="text-4xl font-bold text-[#1e3a8a]">$2.15M</span>
                                                <span className="text-sm text-amber-600 font-semibold">vs $2.5M asking</span>
                                            </div>
                                            <div className="w-full bg-blue-100 rounded-full h-2 mt-3">
                                                <div className="bg-[#1e3a8a] h-2 rounded-full" style={{ width: '86%' }}></div>
                                            </div>
                                        </div>

                                        {/* Updated to 3 Methods + Final Value */}
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-slate-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors">
                                                <div className="text-[11px] text-slate-500 mb-1">Income</div>
                                                <div className="font-bold text-[#1e3a8a] text-lg">$2.2M</div>
                                                <div className="text-[10px] text-slate-400">50%</div>
                                            </div>
                                            <div className="bg-slate-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors">
                                                <div className="text-[11px] text-slate-500 mb-1">Market</div>
                                                <div className="font-bold text-[#1e3a8a] text-lg">$2.1M</div>
                                                <div className="text-[10px] text-slate-400">35%</div>
                                            </div>
                                            <div className="bg-slate-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors">
                                                <div className="text-[11px] text-slate-500 mb-1">Asset</div>
                                                <div className="font-bold text-[#1e3a8a] text-lg">$1.8M</div>
                                                <div className="text-[10px] text-slate-400">15%</div>
                                            </div>
                                            <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                                                <div className="text-[11px] text-[#1e3a8a] font-semibold mb-1">Final Value</div>
                                                <div className="font-bold text-[#1e3a8a] text-lg">$2.15M</div>
                                                <div className="text-[10px] text-slate-400">Weighted</div>
                                            </div>
                                        </div>

                                        {/* Red Flags Section */}
                                        <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                                            <div className="flex items-center gap-2 text-orange-600 font-bold mb-2">
                                                <AlertTriangle className="h-4 w-4" />
                                                5 Red Flags Identified
                                            </div>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                Customer concentration, aggressive add-backs, declining revenue trend
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 text-xs text-amber-600 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                            Potential Overvaluation: $350K
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Expandable Sample Reports Section - Added more top margin */}
                <AnimatePresence>
                    {showSamples && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: 20 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="mt-32 lg:mt-40 relative z-20"
                        >
                            <div className="relative mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-2xl border border-slate-200">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-bold text-[#1e3a8a]">Sample Reports Preview</h3>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setShowSamples(false)}
                                        className="text-slate-500 hover:text-[#1e3a8a] hover:bg-slate-100"
                                    >
                                        <X className="h-6 w-6" />
                                    </Button>
                                </div>

                                <div className="grid gap-6 md:grid-cols-3 text-left">
                                    {/* Card 1: Business Teaser */}
                                    <SampleCard
                                        title="Business Teaser"
                                        subtitle="1 Page • PDF"
                                        icon={<FileText className="h-6 w-6 text-green-500" />}
                                        color="bg-green-500"
                                        fileUrl="/samples/business-teaser.pdf"
                                    />

                                    {/* Card 2: CIM */}
                                    <SampleCard
                                        title="Confidential Information Memorandum"
                                        subtitle="10-20 Pages • PDF"
                                        icon={<FileText className="h-6 w-6 text-purple-500" />}
                                        color="bg-purple-500"
                                        fileUrl="/samples/cim.pdf"
                                    />

                                    {/* Card 3: Valuation Report */}
                                    <SampleCard
                                        title="Business Valuation Report"
                                        subtitle="10-20 Pages • PDF"
                                        icon={<CheckCircle2 className="h-6 w-6 text-orange-500" />}
                                        color="bg-orange-500"
                                        fileUrl="/samples/business-valuation-report.pdf"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

function SampleCard({ title, subtitle, icon, color, fileUrl }: { title: string, subtitle: string, icon: React.ReactNode, color: string, fileUrl: string }) {
    return (
        <Card className="overflow-hidden bg-white text-slate-900 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
            <div className="p-4 flex items-start gap-3 border-b border-slate-100 bg-slate-50/50">
                <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
                    {icon}
                </div>
                <div>
                    <h4 className="font-bold text-sm leading-tight text-slate-900">{title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
                </div>
            </div>

            {/* Preview Area */}
            <div className="flex-1 bg-slate-50 relative min-h-[500px] border-b border-slate-100">
                <iframe
                    src={`${fileUrl}#toolbar=0&navpanes=0&view=FitH`}
                    className="w-full h-full absolute inset-0"
                    title={`${title} Preview`}
                />
            </div>

            {/* Footer Action */}
            <div className="p-4 bg-white">
                <Link href={fileUrl} target="_blank" className="w-full block">
                    <Button className="w-full bg-[#1e3a8a] hover:bg-[#172e6e] text-white shadow-sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View Full Report
                    </Button>
                </Link>
            </div>
        </Card>
    )
}
