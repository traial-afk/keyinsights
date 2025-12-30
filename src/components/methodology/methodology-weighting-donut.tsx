"use client"

import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Building2, Link2 } from "lucide-react"

// Brand colors: Income=#1e3a8a (dark blue), Market=#f4a623 (amber), Asset=#3b82f6 (light blue)
const weightings = [
    { name: "Income Approach", weight: 50, color: "#1e3a8a", icon: TrendingUp },
    { name: "Market Comparables", weight: 35, color: "#f4a623", icon: BarChart3 },
    { name: "Asset-Based", weight: 15, color: "#3b82f6", icon: Building2 },
]

export function MethodologyWeightingDonut() {
    // Calculate stroke dash values for each segment
    const radius = 80
    const circumference = 2 * Math.PI * radius

    // Build segments with correct positioning
    // strokeDashoffset: positive value rotates counter-clockwise (moves start point backward)
    // We start at 12 o'clock position (after -90 degree rotation)
    const segments = []
    let startAngle = 0

    for (const method of weightings) {
        const dashLength = (method.weight / 100) * circumference
        // strokeDashoffset moves the pattern start, so we use negative of startAngle position
        const dashOffset = -startAngle
        segments.push({
            ...method,
            dashLength,
            dashOffset,
        })
        startAngle += dashLength
    }

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
                        The weighted average produces a defensible range, not a single, arbitrary number.
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
                        <motion.svg
                            width="280"
                            height="280"
                            viewBox="0 0 200 200"
                            initial={{ opacity: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
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
                            {segments.map((segment) => (
                                <circle
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
                                />
                            ))}
                        </motion.svg>

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

                {/* Weighted Valuation Range Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 flex flex-col items-center"
                >
                    {/* Link icon */}
                    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                        <Link2 className="w-8 h-8 text-slate-400" />
                    </div>

                    {/* Arrow */}
                    <div className="text-[#1e3a8a] mb-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                    </div>

                    {/* Valuation Range Card */}
                    <div className="bg-[#1e3a8a] rounded-2xl px-12 py-10 text-center max-w-lg">
                        <p className="text-blue-200 text-sm font-medium mb-2">Weighted Valuation Range</p>
                        <p className="text-white text-4xl md:text-5xl font-bold mb-3">
                            $1.8M - $2.4M
                        </p>
                        <p className="text-blue-200 text-sm mb-6">
                            Defensible. Data-driven. Ready for negotiation.
                        </p>

                        {/* Weight pills */}
                        <div className="flex flex-wrap justify-center gap-2">
                            <span className="px-3 py-1.5 bg-white/10 rounded-full text-white text-sm font-medium">
                                Income 50%
                            </span>
                            <span className="px-3 py-1.5 bg-white/10 rounded-full text-white text-sm font-medium">
                                Comps 35%
                            </span>
                            <span className="px-3 py-1.5 bg-white/10 rounded-full text-white text-sm font-medium">
                                Assets 15%
                            </span>
                        </div>
                    </div>
                </motion.div>

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
