"use client"

import { ArrowRight, CheckCircle2, FileText, X, Eye, Briefcase, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function AdvisorHero() {
    const [showSamples, setShowSamples] = useState(false)

    return (
        <section className="relative overflow-hidden bg-[#1e3a8a] pt-32 pb-20 lg:pt-48 lg:pb-32">
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
                            <Briefcase className="mr-2 h-4 w-4" />
                            Built for Advisors
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="space-y-6"
                        >
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white leading-tight">
                                Whether Your Client is{" "}
                                <span className="relative inline-block text-[#f4a623]">
                                    Buying
                                    <span className="absolute bottom-2 left-0 w-full h-3 bg-[#f4a623]/30 -z-10 rounded-sm"></span>
                                </span>{" "}
                                or{" "}
                                <span className="relative inline-block text-[#f4a623]">
                                    Selling
                                    <span className="absolute bottom-2 left-0 w-full h-3 bg-[#f4a623]/30 -z-10 rounded-sm"></span>
                                </span>
                                , We've Got You Covered
                            </h1>
                            <p className="max-w-xl text-lg text-blue-100 leading-relaxed">
                                You focus on closing deals. We handle the valuations. Professional deliverables your clients trust. Valuations for listings, due diligence for acquisitions. Ready in 24 hours, not 4 weeks.
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
                                    See What's Included <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white/20 bg-white/10 text-white hover:bg-white/20 h-12 rounded-lg w-full sm:w-auto font-medium backdrop-blur-sm"
                                onClick={() => setShowSamples(!showSamples)}
                            >
                                {showSamples ? "Hide Sample Reports" : "View Sample Reports"}
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
                                Industry Standard Methodology
                            </div>
                            <div className="flex items-center gap-2 text-white font-medium">
                                <CheckCircle2 className="h-5 w-5 text-[#f4a623]" />
                                24-Hour Delivery
                            </div>
                            <div className="flex items-center gap-2 text-white font-medium">
                                <CheckCircle2 className="h-5 w-5 text-[#f4a623]" />
                                White-Label Available
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Stacked Cards Visual */}
                    <div className="relative mx-auto w-full lg:max-w-none flex items-center justify-center lg:justify-center">
                        <div className="relative w-full max-w-[620px] h-[520px]">

                            {/* Back Card - Essential Package */}
                            <motion.div
                                initial={{ opacity: 0, x: -20, rotate: -5 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    rotate: -5
                                }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2
                                }}
                                className="absolute top-10 left-0 w-[300px] lg:w-[320px] z-0"
                            >
                                <Card className="bg-white p-6 shadow-xl rounded-3xl border border-slate-100 h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Essential</h3>
                                            <p className="text-sm text-slate-500 mt-1">For initial assessments</p>
                                        </div>
                                        <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">Starter</span>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-1 rounded-full bg-green-100 text-green-600">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-900">Valuation Report</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-1 rounded-full bg-green-100 text-green-600">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-900">Red Flags Analysis</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-100">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <CheckCircle2 className="w-4 h-4 text-[#f4a623]" />
                                            24-hour delivery
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Front Card - Exit Ready Package */}
                            <motion.div
                                initial={{ opacity: 0, x: 20, rotate: 5 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    rotate: 5
                                }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.4
                                }}
                                className="absolute top-0 right-0 w-[320px] lg:w-[340px] z-10"
                            >
                                <Card className="bg-[#faf8f5] p-8 shadow-2xl border-[4px] border-[#f4a623] rounded-3xl h-full relative overflow-hidden">
                                    {/* Popular Badge */}
                                    <div className="absolute top-6 right-6">
                                        <span className="bg-[#1e3a8a] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                            <Star className="w-3 h-3 fill-current" />
                                            Popular
                                        </span>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-[#1e3a8a]">Exit Ready Package</h3>
                                        <p className="text-slate-500 text-sm mt-1">Full deal package</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-1 rounded-full bg-green-100 text-green-600">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-[#1e3a8a]">Valuation Report</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-1 rounded-full bg-green-100 text-green-600">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-[#1e3a8a]">Red Flags Analysis</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-1 rounded-full bg-green-100 text-green-600">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-[#1e3a8a]">Confidential IM (CIM)</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-1 rounded-full bg-green-100 text-green-600">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-[#1e3a8a]">Business Teaser</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-1 rounded-full bg-green-100 text-green-600">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-[#1e3a8a]">Value Enhancement Report</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-[#f4a623]/20">
                                        <div className="flex items-center gap-2 text-sm text-[#1e3a8a] mt-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#f4a623]" />
                                            24-hour delivery
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>
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
                                    <SampleCard
                                        title="Business Teaser"
                                        subtitle="1 Page • PDF"
                                        icon={<FileText className="h-6 w-6 text-green-500" />}
                                        color="bg-green-500"
                                        fileUrl="/samples/business-teaser.pdf"
                                    />

                                    <SampleCard
                                        title="Confidential Information Memorandum"
                                        subtitle="10-20 Pages • PDF"
                                        icon={<FileText className="h-6 w-6 text-purple-500" />}
                                        color="bg-purple-500"
                                        fileUrl="/samples/cim.pdf"
                                    />

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

            <div className="flex-1 bg-slate-50 relative min-h-[500px] border-b border-slate-100">
                <iframe
                    src={`${fileUrl}#toolbar=0&navpanes=0&view=FitH`}
                    className="w-full h-full absolute inset-0"
                    title={`${title} Preview`}
                />
            </div>

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