"use client"

import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Calculator, Building2, ArrowRight } from "lucide-react"

const weightings = [
    { 
        name: "Income Approach", 
        weight: 40, 
        color: "bg-blue-500", 
        lightColor: "bg-blue-100",
        textColor: "text-blue-600",
        icon: TrendingUp,
        description: "Future cash flow value"
    },
    { 
        name: "Market Comparables", 
        weight: 25, 
        color: "bg-purple-500", 
        lightColor: "bg-purple-100",
        textColor: "text-purple-600",
        icon: BarChart3,
        description: "Transaction benchmarks"
    },
    { 
        name: "Weighted EBITDA", 
        weight: 20, 
        color: "bg-amber-500", 
        lightColor: "bg-amber-100",
        textColor: "text-amber-600",
        icon: Calculator,
        description: "Industry multiples"
    },
    { 
        name: "Asset-Based", 
        weight: 15, 
        color: "bg-emerald-500", 
        lightColor: "bg-emerald-100",
        textColor: "text-emerald-600",
        icon: Building2,
        description: "Floor valuation"
    },
]

export function MethodologyWeightingBars() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Playfair_Display'] serif mb-4">
                        How We Combine Them
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Each methodology contributes to the final valuation based on its relevance to your specific business.
                        The weighted average produces a defensible range—not a single, arbitrary number.
                    </p>
                </motion.div>

                {/* Bars visualization */}
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                    <div className="space-y-6">
                        {weightings.map((method, index) => (
                            <motion.div
                                key={method.name}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                {/* Label row */}
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-lg ${method.lightColor} flex items-center justify-center`}>
                                            <method.icon className={`w-5 h-5 ${method.textColor}`} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900">{method.name}</p>
                                            <p className="text-xs text-slate-500">{method.description}</p>
                                        </div>
                                    </div>
                                    <span className={`text-xl font-bold ${method.textColor}`}>
                                        {method.weight}%
                                    </span>
                                </div>
                                
                                {/* Bar */}
                                <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${method.weight}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 + 0.1 * index }}
                                        className={`h-full ${method.color} rounded-full`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Total bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-8 pt-6 border-t border-slate-300"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-bold text-slate-900">Combined Weighted Value</span>
                            <span className="text-2xl font-bold text-[#1e3a8a]">100%</span>
                        </div>
                        <div className="h-6 rounded-full overflow-hidden flex">
                            {weightings.map((method, index) => (
                                <motion.div
                                    key={method.name}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${method.weight}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.9 + 0.1 * index }}
                                    className={`h-full ${method.color}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Arrow to result */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex justify-center my-6"
                >
                    <ArrowRight className="w-8 h-8 text-slate-300 rotate-90" />
                </motion.div>

                {/* Result card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="bg-gradient-to-r from-[#1e3a8a] to-[#2d4a9e] rounded-2xl p-8 text-center text-white"
                >
                    <p className="text-blue-200 mb-2">Your Defensible Value Range</p>
                    <p className="text-3xl md:text-4xl font-bold mb-2">$1.8M — $2.4M</p>
                    <p className="text-blue-200 text-sm">Based on triangulated methodology</p>
                </motion.div>

                {/* Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="text-center text-slate-500 text-sm mt-8 max-w-xl mx-auto"
                >
                    <span className="font-semibold text-slate-700">Note:</span> Weights may be adjusted based on your business type. 
                    Asset-heavy businesses may weight the Asset-Based approach higher, while SaaS companies may emphasize the Income Approach.
                </motion.p>
            </div>
        </section>
    )
}
