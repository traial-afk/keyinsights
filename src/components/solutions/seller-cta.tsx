"use client"

import { Button } from "@/components/ui/button"
import { Clock, FileCheck, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

export function SellerCTA() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Main Headline */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Playfair_Display'] serif leading-tight">
                        Know your number before the{" "}
                        <span className="italic text-[#f4a623]">negotiation</span>{" "}
                        starts
                    </h2>
                    <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
                        Buyers will do their homework. Shouldn't you?
                    </p>
                </div>

                {/* Value Props Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-10 mb-10 relative overflow-hidden">
                    {/* Subtle accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f4a623] to-[#1e3a8a]"></div>

                    <div className="text-center">
                        {/* Value props - Updated to plain language */}
                        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xl md:text-2xl mb-6">
                            <span className="font-bold text-[#1e3a8a]">Know when to say no.</span>
                            <span className="text-slate-300">•</span>
                            <span className="font-bold text-[#1e3a8a]">See problems first.</span>
                            <span className="text-slate-300">•</span>
                            <span className="font-bold text-[#1e3a8a]">Understand your value.</span>
                        </div>

                        <p className="text-slate-600 max-w-xl mx-auto leading-relaxed text-lg">
                            Everything you need to negotiate from strength.{" "}
                            <span className="font-semibold text-slate-900">In 24 hours.</span>
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
                        <FileCheck className="w-4 h-4 text-[#1e3a8a]" />
                        <span className="text-slate-700 text-sm font-medium">3 Valuation Methods</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
                        <MessageSquare className="w-4 h-4 text-[#1e3a8a]" />
                        <span className="text-slate-700 text-sm font-medium">Consultation Included</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col items-center justify-center gap-4">
                    <Link href="/checkout">
                        <Button className="bg-[#f4a623] hover:bg-[#e09915] text-slate-900 font-bold h-14 px-10 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all group">
                            Get My Valuation
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                {/* Secondary option */}
                <p className="text-center text-slate-500 mt-6">
                    Not ready?{" "}
                    <Link
                        href="/estimate"
                        className="text-[#1e3a8a] hover:text-[#f4a623] underline underline-offset-4 transition-colors font-medium"
                    >
                        Try our free estimator first
                    </Link>
                </p>

            </div>
        </section>
    )
}
