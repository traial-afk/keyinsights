"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock, FileCheck, MessageSquare, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function WhyUsCTA() {
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com"

    return (
        <section className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Main Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 font-['Playfair_Display'] serif leading-tight">
                        Ready to know your{" "}
                        <span className="italic text-[#f4a623]">number</span>?
                    </h2>
                    <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
                        Professional business valuations in 24 hours. From $399.
                    </p>
                </motion.div>

                {/* Value Props Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-10 mb-10 relative overflow-hidden"
                >
                    {/* Subtle accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f4a623] to-[#1e3a8a]"></div>

                    <div className="text-center">
                        {/* Value props */}
                        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-lg md:text-xl lg:text-2xl mb-6">
                            <span className="font-bold text-[#1e3a8a]">Four methodologies.</span>
                            <span className="text-slate-300">•</span>
                            <span className="font-bold text-[#1e3a8a]">Expert verification.</span>
                            <span className="text-slate-300">•</span>
                            <span className="font-bold text-[#1e3a8a]">24-hour delivery.</span>
                        </div>

                        <p className="text-slate-600 max-w-xl mx-auto leading-relaxed text-lg">
                            Everything you need to negotiate from strength.{" "}
                            <span className="font-semibold text-slate-900">Without the wait.</span>
                        </p>
                    </div>
                </motion.div>

                {/* Feature Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
                >
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
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/checkout">
                        <Button className="bg-[#f4a623] hover:bg-[#e09915] text-slate-900 font-bold h-14 px-10 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all group">
                            Get My Valuation
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                            variant="outline"
                            className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white font-semibold h-14 px-8 text-lg rounded-full transition-all group"
                        >
                            <Calendar className="mr-2 w-5 h-5" />
                            Schedule a Demo
                        </Button>
                    </a>
                </motion.div>

                {/* Secondary option */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
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
