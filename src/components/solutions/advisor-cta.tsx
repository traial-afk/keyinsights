"use client"

import { Button } from "@/components/ui/button"
import { Clock, FileCheck, Tag, ArrowRight, Briefcase, Calendar } from "lucide-react"
import Link from "next/link"

export function AdvisorCTA() {
    return (
        <section className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Main Headline */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Partner with the Valuation Team That{" "}
                        <span className="italic text-[#f4a623]">Moves at Your Speed</span>
                    </h2>
                    <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
                        You focus on relationships and deals. We focus on fast, consistent, professional valuations.
                    </p>
                </div>

                {/* Value Props Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-10 mb-10 relative overflow-hidden">
                    {/* Subtle accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f4a623] to-[#1e3a8a]"></div>

                    <div className="text-center">
                        {/* Value props */}
                        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xl md:text-2xl mb-6">
                            <span className="font-bold text-[#1e3a8a]">Better materials.</span>
                            <span className="text-slate-300">•</span>
                            <span className="font-bold text-[#1e3a8a]">Faster deals.</span>
                            <span className="text-slate-300">•</span>
                            <span className="font-bold text-[#1e3a8a]">Your brand.</span>
                        </div>

                        <p className="text-slate-600 max-w-xl mx-auto leading-relaxed text-lg">
                            Your clients get professional deliverables.{" "}
                            <span className="font-semibold text-slate-900"> Your deals move faster.</span>
                        </p>
                    </div>
                </div>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
                        <Clock className="w-4 h-4 text-[#1e3a8a]" />
                        <span className="text-slate-700 text-sm font-medium">24-Hour Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
                        <Tag className="w-4 h-4 text-[#1e3a8a]" />
                        <span className="text-slate-700 text-sm font-medium">White-Label Available</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/pricing">
                        <Button className="bg-[#f4a623] hover:bg-[#e09915] text-slate-900 font-bold h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto group">
                            <Briefcase className="mr-2 w-5 h-5" />
                            Start with Exit Ready — $549
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com"} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-white hover:border-[#1e3a8a] hover:text-[#1e3a8a] h-14 px-8 text-lg rounded-full w-full sm:w-auto transition-all">
                            <Calendar className="mr-2 h-5 w-5" />
                            Schedule a Demo
                        </Button>
                    </Link>
                </div>

                {/* Note */}
                <p className="text-center text-slate-500 text-sm mt-6">
                    Just need one? <a href="#pricing" className="text-[#1e3a8a] font-medium hover:underline">Start with Essential — $399</a>
                </p>

            </div>
        </section >
    )
}