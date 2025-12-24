"use client"

import { motion } from "framer-motion"
import { Check, X, Clock, DollarSign, FileCheck, RefreshCw } from "lucide-react"

const comparisonData = [
    {
        feature: "Delivery Time",
        icon: Clock,
        traditional: "2-6 weeks",
        keyinsights: "24 hours",
        highlight: true,
    },
    {
        feature: "Cost",
        icon: DollarSign,
        traditional: "$2,000 - $25,000+",
        keyinsights: "$399 - $549",
        highlight: true,
    },
    {
        feature: "Methodologies",
        icon: FileCheck,
        traditional: "Varies by firm",
        keyinsights: "4 rigorous approaches",
        highlight: false,
    },
    {
        feature: "Revisions",
        icon: RefreshCw,
        traditional: "Extra fees",
        keyinsights: "Included",
        highlight: false,
    },
]

export function WhyUsComparison() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Playfair_Display'] serif mb-4">
                        The Difference at a Glance
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        See how we compare to traditional valuation firms.
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
                >
                    {/* Header */}
                    <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
                        <div className="p-4 md:p-6"></div>
                        <div className="p-4 md:p-6 text-center border-l border-slate-200">
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">Traditional Firms</span>
                        </div>
                        <div className="p-4 md:p-6 text-center border-l border-slate-200 bg-[#1e3a8a]/5">
                            <span className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wide">KeyInsights AI</span>
                        </div>
                    </div>

                    {/* Rows */}
                    {comparisonData.map((item, index) => (
                        <motion.div
                            key={item.feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            className={`grid grid-cols-3 ${index !== comparisonData.length - 1 ? 'border-b border-slate-100' : ''}`}
                        >
                            <div className="p-4 md:p-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-5 h-5 text-slate-600" />
                                </div>
                                <span className="font-semibold text-slate-900 text-sm md:text-base">{item.feature}</span>
                            </div>
                            <div className="p-4 md:p-6 flex items-center justify-center border-l border-slate-100 text-center">
                                <span className="text-slate-500 text-sm md:text-base">{item.traditional}</span>
                            </div>
                            <div className={`p-4 md:p-6 flex items-center justify-center border-l border-slate-100 text-center ${item.highlight ? 'bg-emerald-50' : 'bg-[#1e3a8a]/5'}`}>
                                <span className={`font-bold text-sm md:text-base ${item.highlight ? 'text-emerald-600' : 'text-[#1e3a8a]'}`}>
                                    {item.keyinsights}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
