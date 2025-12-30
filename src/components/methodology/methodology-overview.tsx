"use client"

import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Building2, ArrowDown } from "lucide-react"

const methodSummary = [
    {
        icon: TrendingUp,
        name: "Income Approach",
        weight: "50%",
        color: "#1e3a8a",
    },
    {
        icon: BarChart3,
        name: "Market Comparables",
        weight: "35%",
        color: "#f4a623",
    },
    {
        icon: Building2,
        name: "Asset-Based",
        weight: "15%",
        color: "#3b82f6",
    },
]

export function MethodologyOverview() {
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
                        Why Three Methods?
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        A single valuation approach tells one story. By triangulating from multiple
                        methodologies, we deliver a range that&apos;s <span className="font-semibold text-slate-900">defensible in negotiations</span> and
                        reflects the true market value of your business.
                    </p>
                </motion.div>

                {/* Quick Method Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {methodSummary.map((method, index) => (
                        <motion.div
                            key={method.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center hover:border-[#1e3a8a]/30 hover:shadow-md transition-all"
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                                style={{ backgroundColor: `${method.color}15` }}
                            >
                                <method.icon className="w-6 h-6" style={{ color: method.color }} />
                            </div>
                            <p className="font-semibold text-slate-900 text-sm mb-1">{method.name}</p>
                            <p className="text-2xl font-bold" style={{ color: method.color }}>{method.weight}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll indicator with animated downward arrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex justify-center mt-12"
                >
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <span>Scroll to explore each method</span>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowDown className="w-4 h-4" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
