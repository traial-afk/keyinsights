"use client"

import { ArrowRight, BarChart3, Clock, DollarSign, FileText, X, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function SellingHero() {
    const [showSamples, setShowSamples] = useState(false)

    return (
        <section className="relative overflow-hidden bg-[#1e3a8a] py-20 lg:py-32">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Left Column: Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center rounded-full border border-blue-400 bg-blue-900/50 px-3 py-1 text-sm font-medium text-blue-100">
                            <BarChart3 className="mr-2 h-4 w-4" />
                            Accurate Business Valuations
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white leading-tight">
                                Don't <span className="relative inline-block text-[#f4a623]">
                                    Undersell
                                    <span className="absolute bottom-2 left-0 w-full h-3 bg-[#f4a623]/30 -z-10 rounded-sm"></span>
                                </span> <br className="hidden lg:block" />
                                <span className="block mt-2">What You've Built</span>
                            </h1>
                            <p className="max-w-xl text-lg text-blue-100 leading-relaxed">
                                Professional business valuations that maximize your exit. Know what your business is worth and how to make it worth more in 24 hours.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/valuation/start">
                                <Button size="lg" className="bg-[#f4a623] hover:bg-[#d48c1b] text-white font-semibold px-8 h-12 rounded-lg w-full sm:w-auto shadow-md hover:shadow-lg transition-all">
                                    Start Valuation <ArrowRight className="ml-2 h-5 w-5" />
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
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-white font-bold">
                                    <DollarSign className="h-5 w-5 text-[#f4a623]" />
                                    Accurate
                                </div>
                                <p className="text-sm text-blue-200">Industry-standard methodologies</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-white font-bold">
                                    <Clock className="h-5 w-5 text-[#f4a623]" />
                                    Fast
                                </div>
                                <p className="text-sm text-blue-200">Results in 48 hours</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-white font-bold">
                                    <BarChart3 className="h-5 w-5 text-[#f4a623]" />
                                    Comprehensive
                                </div>
                                <p className="text-sm text-blue-200">Detailed reports & insights</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visuals */}
                    <div className="relative mx-auto w-full max-w-[600px] h-[600px] lg:max-w-none perspective-1000 flex items-center justify-center">
                        {/* Left Card - TechCorp (Back) */}
                        <Card className="absolute left-[5%] bottom-0 w-[48%] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-2xl border border-slate-100 z-10 transform -rotate-6 origin-bottom-right hover:rotate-0 transition-transform duration-500 min-h-[420px] flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Business Valuation Report</div>
                                        <div className="font-bold text-slate-900 text-base flex items-center gap-2">
                                            <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center">
                                                <FileText className="w-4 h-4 text-slate-400" />
                                            </div>
                                            TechCorp Solutions Inc.
                                        </div>
                                        <div className="text-xs text-slate-400 mt-1">As of November 2025</div>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>

                                <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                                    <div className="text-xs text-slate-500 mb-1">Estimated Business Value</div>
                                    <div className="flex items-baseline gap-2">
                                        <div className="text-3xl font-bold text-slate-900">$2.4M</div>
                                        <div className="text-xs font-medium text-green-600 flex items-center bg-green-100 px-2 py-0.5 rounded-full">
                                            ↑ 12%
                                        </div>
                                    </div>
                                    <div className="mt-4 h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 w-[75%] rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Revenue Multiple</span>
                                        <span className="font-medium text-slate-900">3.2x</span>
                                    </div>
                                    <div className="w-full h-px bg-slate-100"></div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">EBITDA Multiple</span>
                                        <span className="font-medium text-slate-900">8.5x</span>
                                    </div>
                                    <div className="w-full h-px bg-slate-100"></div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Industry Avg.</span>
                                        <span className="font-medium text-slate-900">$1.9M</span>
                                    </div>
                                </div>

                                <div className="pt-4 flex items-center gap-2 text-xs font-medium text-slate-400">
                                    <div className="h-4 w-4 rounded-full border border-slate-200 flex items-center justify-center">
                                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                    </div>
                                    Market position: Strong
                                </div>
                            </div>
                        </Card>

                        {/* Right Card - RetailHub (Front) */}
                        <Card className="absolute right-[5%] bottom-0 w-[48%] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] rounded-2xl border border-slate-100 z-20 transform rotate-6 origin-bottom-left hover:rotate-0 transition-transform duration-500 min-h-[420px] flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Business Valuation Report</div>
                                        <div className="font-bold text-slate-900 text-base flex items-center gap-2">
                                            <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center">
                                                <FileText className="w-4 h-4 text-slate-400" />
                                            </div>
                                            RetailHub Enterprises
                                        </div>
                                        <div className="text-xs text-slate-400 mt-1">As of October 2025</div>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                </div>
                                <div className="bg-green-50 rounded-xl p-6">
                                    <div className="text-xs text-slate-500 mb-1">Estimated Business Value</div>
                                    <div className="flex items-baseline gap-2">
                                        <div className="text-3xl font-bold text-slate-900">$1.8M</div>
                                        <div className="text-xs font-medium text-green-600 flex items-center bg-green-100 px-2 py-0.5 rounded-full">
                                            ↑ 8%
                                        </div>
                                    </div>
                                    <div className="mt-4 h-2 w-full bg-green-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[65%] rounded-full"></div>
                                    </div>
                                </div>
                                <div className="space-y-3 pt-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Revenue Multiple</span>
                                        <span className="font-medium text-slate-900">2.8x</span>
                                    </div>
                                    <div className="w-full h-px bg-slate-100"></div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">EBITDA Multiple</span>
                                        <span className="font-medium text-slate-900">7.2x</span>
                                    </div>
                                    <div className="w-full h-px bg-slate-100"></div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Industry Avg.</span>
                                        <span className="font-medium text-slate-900">$1.5M</span>
                                    </div>
                                </div>
                                <div className="pt-4 flex items-center gap-2 text-xs font-medium text-slate-400">
                                    <div className="h-4 w-4 rounded-full border border-slate-200 flex items-center justify-center">
                                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                    </div>
                                    Market position: Growing
                                </div>
                            </div>
                        </Card>
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
                                        icon={<BarChart3 className="h-6 w-6 text-orange-500" />}
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