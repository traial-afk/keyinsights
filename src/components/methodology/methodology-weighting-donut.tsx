"use client"

import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Calculator, Building2 } from "lucide-react"

const weightings = [
    { name: "Income Approach", weight: 40, color: "#3b82f6", icon: TrendingUp },
    { name: "Market Comparables", weight: 25, color: "#8b5cf6", icon: BarChart3 },
    { name: "Weighted EBITDA", weight: 20, color: "#f59e0b", icon: Calculator },
    { name: "Asset-Based", weight: 15, color: "#10b981", icon: Building2 },
]

export function MethodologyWeightingDonut() {
    // Calculate stroke dash values for each segment
    const circumference = 2 * Math.PI * 80 // radius = 80
    let cumulativeOffset = 0
    
    const segments = weightings.map((method) => {
        const dashLength = (method.weight / 100) * circumference
        const offset = cumulativeOffset
        cumulativeOffset += dashLength
        return {
            ...method,
            dashLength,
            dashOffset: circumference - offset,
        }
    })
    
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
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

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                    {/* Donut Chart */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <svg width="280" height="280" viewBox="0 0 200 200">
                            {/* Background circle */}
                            <circle
                                cx="100"
                                cy="100"
                                r="80"
                                fill="none"
                                stroke="#f1f5f9"
                                strokeWidth="24"
                            />
                            
                            {/* Segments */}
                            {segments.map((segment, index) => (
                                <motion.circle
                                    key={segment.name}
                                    cx="100"
                                    cy="100"
                                    r="80"
                                    fill="none"
                                    stroke={segment.color}
                                    strokeWidth="24"
                                    strokeLinecap="butt"
                                    strokeDasharray={`${segment.dashLength} ${circumference}`}
                                    strokeDashoffset={segment.dashOffset}
                                    transform="rotate(-90 100 100)"
                                    initial={{ strokeDasharray: `0 ${circumference}` }}
                                    whileInView={{ strokeDasharray: `${segment.dashLength} ${circumference}` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.3 + index * 0.15 }}
                                />
                            ))}
                        </svg>
                        
                        {/* Center text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className="text-sm text-slate-400 font-medium"
                            >
                                Weighted
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1.1 }}
                                className="text-3xl font-bold text-slate-900"
                            >
                                Average
                            </motion.span>
                        </div>
                    </motion.div>

                    {/* Legend */}
                    <div className="space-y-4">
                        {weightings.map((method, index) => (
                            <motion.div
                                key={method.name}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                className="flex items-center gap-4 bg-slate-50 rounded-xl p-4 border border-slate-200"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                    style={{ backgroundColor: `${method.color}20` }}
                                >
                                    <method.icon className="w-6 h-6" style={{ color: method.color }} />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-slate-900">{method.name}</p>
                                    <p className="text-sm text-slate-500">Contributes to final value</p>
                                </div>
                                <div
                                    className="text-2xl font-bold"
                                    style={{ color: method.color }}
                                >
                                    {method.weight}%
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-center text-slate-500 text-sm mt-10 max-w-xl mx-auto"
                >
                    <span className="font-semibold text-slate-700">Note:</span> Weights may be adjusted based on your business type. 
                    Asset-heavy businesses may weight the Asset-Based approach higher, while SaaS companies may emphasize the Income Approach.
                </motion.p>
            </div>
        </section>
    )
}
