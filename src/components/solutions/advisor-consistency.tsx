"use client"

import { motion } from "framer-motion"
import { FileCheck, Users, MessageSquareOff, ArrowRight } from "lucide-react"

export function AdvisorConsistency() {
    return (
        <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f4a623]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1e3a8a]/30 rounded-full blur-3xl -ml-24 -mb-24"></div>

                        <div className="relative">
                            {/* Header */}
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center rounded-full bg-[#f4a623]/20 px-4 py-1.5 text-sm font-semibold text-[#f4a623] mb-4">
                                    The Consistency Advantage
                                </div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                                    Your Deals Get Read, Not Skipped
                                </h2>
                                <p className="text-slate-600 max-w-2xl mx-auto">
                                    Buyers see dozens of deals weekly. Messy teasers and incomplete CIMs get ignored.
                                    You send institutional-grade materials every time.
                                </p>
                            </div>

                            {/* Three pillars */}
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-sm">
                                    <div className="w-10 h-10 rounded-lg bg-[#f4a623]/20 flex items-center justify-center mx-auto mb-3">
                                        <FileCheck className="w-5 h-5 text-[#f4a623]" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Complete Packages</h3>
                                    <p className="text-slate-600 text-sm">Buyers get everything upfront. No chasing.</p>
                                </div>

                                <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-sm">
                                    <div className="w-10 h-10 rounded-lg bg-[#f4a623]/20 flex items-center justify-center mx-auto mb-3">
                                        <Users className="w-5 h-5 text-[#f4a623]" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Institutional Look</h3>
                                    <p className="text-slate-600 text-sm">First listing or fiftieth same polish.</p>
                                </div>

                                <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-sm">
                                    <div className="w-10 h-10 rounded-lg bg-[#f4a623]/20 flex items-center justify-center mx-auto mb-3">
                                        <MessageSquareOff className="w-5 h-5 text-[#f4a623]" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Fewer Questions</h3>
                                    <p className="text-slate-600 text-sm">Less "can you send me..." back-and-forth.</p>
                                </div>
                            </div>

                            {/* Bottom line */}
                            <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                                <p className="text-slate-600">
                                    You close deals, not explain them. Buyers remember who sends quality, {" "}
                                    <span className="text-[#f4a623] font-semibold">that's you.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}