"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, BarChart3, AlertTriangle, X, Eye } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"

export function HeroSection() {
    const [showSamples, setShowSamples] = useState(false)

    return (
        <section className="relative overflow-hidden bg-[#1e3a8a] py-20 text-white lg:py-32 transition-all duration-500 ease-in-out">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <div className="mx-auto max-w-4xl space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center rounded-full bg-blue-800/50 px-3 py-1 text-sm font-medium text-blue-200 backdrop-blur-sm border border-blue-700">
                        <span className="mr-2 h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                        Guaranteed 24h Delivery
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Discover the Value of Your Business in <span className="text-[#f4a623]">24 Hours</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="mx-auto max-w-2xl text-lg text-blue-100 sm:text-xl">
                        The fastest way to bridge the gap between seller expectations and market reality.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="/auth/signup">
                            <Button size="lg" className="h-14 bg-white px-8 text-lg font-semibold text-blue-900 hover:bg-blue-50 shadow-lg">
                                Start My Valuation - $399
                            </Button>
                        </Link>

                        <Button
                            variant="outline"
                            size="lg"
                            className="h-14 border-blue-400 bg-transparent px-8 text-lg font-semibold text-white hover:bg-blue-800 hover:text-white"
                            onClick={() => setShowSamples(!showSamples)}
                        >
                            <FileText className="mr-2 h-5 w-5" />
                            {showSamples ? "Hide Sample Reports" : "See Sample Reports"}
                        </Button>
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
                            <div className="relative mx-auto max-w-6xl rounded-2xl bg-blue-800/30 p-8 backdrop-blur-sm border border-blue-700/50">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-bold">Sample Reports Preview</h3>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setShowSamples(false)}
                                        className="text-blue-200 hover:text-white hover:bg-blue-700/50"
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
                                        previewImage="/sample-teaser-preview.png" // Placeholder
                                    />

                                    {/* Card 2: CIM */}
                                    <SampleCard
                                        title="Confidential Information Memorandum"
                                        subtitle="10-20 Pages • PDF"
                                        icon={<FileText className="h-6 w-6 text-purple-500" />}
                                        color="bg-purple-500"
                                        previewImage="/sample-cim-preview.png" // Placeholder
                                    />

                                    {/* Card 3: Valuation Report */}
                                    <SampleCard
                                        title="Business Valuation Report"
                                        subtitle="10-20 Pages • PDF"
                                        icon={<BarChart3 className="h-6 w-6 text-orange-500" />}
                                        color="bg-orange-500"
                                        previewImage="/sample-valuation-preview.png" // Placeholder
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

function SampleCard({ title, subtitle, icon, color, previewImage }: { title: string, subtitle: string, icon: React.ReactNode, color: string, previewImage: string }) {
    return (
        <Card className="overflow-hidden bg-white text-slate-900 border-0 shadow-xl flex flex-col h-full">
            <div className="p-4 flex items-start gap-3 border-b bg-slate-50/50">
                <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
                    {icon}
                </div>
                <div>
                    <h4 className="font-bold text-sm leading-tight">{title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
                </div>
            </div>

            {/* Preview Area */}
            <div className="flex-1 bg-slate-100 relative group min-h-[300px] flex items-center justify-center">
                <div className="absolute inset-0 p-4 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                    {/* In a real app, use next/image here with the previewImage prop */}
                    <div className="w-full h-full bg-white shadow-sm border border-slate-200 rounded flex items-center justify-center text-slate-300">
                        [Preview Image]
                    </div>
                </div>

                {/* Overlay Button */}
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-all duration-300 flex items-end justify-center pb-6">
                    <Button className="w-[90%] bg-blue-600 hover:bg-blue-700 text-white shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <Eye className="mr-2 h-4 w-4" />
                        View Full Report
                    </Button>
                </div>
            </div>
        </Card>
    )
}
