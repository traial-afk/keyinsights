"use client"

import { Button } from "@/components/ui/button"
import { Clock, FileCheck, MessageSquare, ArrowRight } from "lucide-react"

export function BuyerCTA() {
    return (
        <section className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Main Headline */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Playfair_Display'] serif leading-tight">
                        The smartest investment in your{" "}
                        <span className="italic text-[#f4a623]">acquisition</span>
                    </h2>
                </div>

                {/* ROI Card - Visual Emphasis */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-10 mb-10 relative overflow-hidden">
                    {/* Subtle accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f4a623] to-[#1e3a8a]"></div>

                    <div className="text-center">
                        {/* The math */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-xl md:text-2xl mb-6">
                            <span className="font-bold text-[#f4a623] text-3xl md:text-4xl">$399</span>
                            <span className="text-slate-500">on a $500K deal</span>
                            <span className="text-slate-400">=</span>
                            <span className="font-bold text-[#1e3a8a] text-3xl md:text-4xl">0.08%</span>
                            <span className="text-slate-500">of purchase price</span>
                        </div>

                        <p className="text-slate-600 max-w-xl mx-auto leading-relaxed text-lg">
                            Our valuations identify tens of thousands in adjustments.{" "}
                            <span className="font-semibold text-slate-900">One correction pays for itself many times over.</span>
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
                        <span className="text-slate-700 text-sm font-medium">USPAP Methodology</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
                        <MessageSquare className="w-4 h-4 text-[#1e3a8a]" />
                        <span className="text-slate-700 text-sm font-medium">Consultation Included</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button className="bg-[#f4a623] hover:bg-[#e09915] text-slate-900 font-bold h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto group">
                        Get Your Free Estimate
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-white hover:border-[#1e3a8a] hover:text-[#1e3a8a] h-14 px-8 text-lg rounded-full w-full sm:w-auto transition-all">
                        Schedule a Demo
                    </Button>
                </div>

                {/* No obligation note */}
                <p className="text-center text-slate-500 text-sm mt-6">
                    No payment required. See your estimate before you commit.
                </p>

            </div>
        </section>
    )
}