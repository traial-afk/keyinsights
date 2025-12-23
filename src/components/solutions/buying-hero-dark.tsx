"use client"

import { ArrowRight, CheckCircle2, FileText, X, Eye, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function BuyingHeroDark() {
    const [showSamples, setShowSamples] = useState(false)

    return (
        <section className="relative overflow-hidden bg-[#1e3a8a] pt-32 pb-20 lg:pt-48 lg:pb-32 border-t border-blue-800">
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
                            Dark Theme Variant
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="space-y-6"
                        >
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white leading-tight">
                                Don't <span className="text-[#f4a623]">Overpay</span> <br className="hidden lg:block" />
                                <span className="block mt-2">for Your Next Acquisition</span>
                            </h1>
                            <p className="max-w-xl text-lg text-blue-100 leading-relaxed">
                                Professional valuation reports with red flag analysis delivered in 24 hours. Make confident buying decisions backed by data, not guesswork.
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
                            className="flex flex-wrap gap-6 pt-4"
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
                                4-Method Analysis
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visuals */}
                    <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none flex items-center justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full"
                        >
                            <Card className="w-full bg-white p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[2.5rem] border border-slate-100 relative z-10 hover:shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:-translate-y-2 transition-all duration-500 min-h-[500px] flex flex-col justify-center">
                                <div className="space-y-10">
                                    <div>
                                        <div className="text-sm text-slate-500 uppercase tracking-wider mb-3 font-bold flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#f4a623] animate-pulse"></div>
                                            Sample Valuation Summary
                                        </div>
                                        <div className="text-6xl font-bold text-[#1e3a8a] font-serif tracking-tight">$2,150,000</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-slate-50 p-5 rounded-2xl flex justify-between items-center hover:bg-blue-50 transition-colors group cursor-default">
                                            <span className="text-slate-500 text-sm font-medium">DCF</span>
                                            <span className="text-[#1e3a8a] font-bold text-lg group-hover:scale-105 transition-transform">$2.3M</span>
                                        </div>
                                        <div className="bg-slate-50 p-5 rounded-2xl flex justify-between items-center hover:bg-blue-50 transition-colors group cursor-default">
                                            <span className="text-slate-500 text-sm font-medium">Income</span>
                                            <span className="text-[#1e3a8a] font-bold text-lg group-hover:scale-105 transition-transform">$2.1M</span>
                                        </div>
                                        <div className="bg-slate-50 p-5 rounded-2xl flex justify-between items-center hover:bg-blue-50 transition-colors group cursor-default">
                                            <span className="text-slate-500 text-sm font-medium">Asset</span>
                                            <span className="text-[#1e3a8a] font-bold text-lg group-hover:scale-105 transition-transform">$1.8M</span>
                                        </div>
                                        <div className="bg-slate-50 p-5 rounded-2xl flex justify-between items-center hover:bg-blue-50 transition-colors group cursor-default">
                                            <span className="text-slate-500 text-sm font-medium">Weighted</span>
                                            <span className="text-[#1e3a8a] font-bold text-lg group-hover:scale-105 transition-transform">$2.15M</span>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 border border-red-100 rounded-2xl p-6 hover:bg-red-100/50 transition-colors">
                                        <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                                            <AlertTriangle className="h-5 w-5" />
                                            3 Red Flags Identified
                                        </div>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Customer concentration, aggressive add-backs, declining revenue trend
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                {/* Expandable Sample Reports Section */}
                <AnimatePresence>
                    {showSamples && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: 20 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="mt-16"
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
