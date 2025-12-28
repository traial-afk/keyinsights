"use client"

import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Calculator, Building2, ArrowDown, Blend } from "lucide-react"

const methodologies = [
    { 
        name: "Income", 
        fullName: "DCF / Income Approach",
        weight: 40, 
        color: "#3b82f6", 
        bgColor: "bg-blue-500",
        lightColor: "bg-blue-50",
        textColor: "text-blue-600",
        icon: TrendingUp,
        value: "$2.1M"
    },
    { 
        name: "Comps", 
        fullName: "Market Comparables",
        weight: 25, 
        color: "#8b5cf6", 
        bgColor: "bg-purple-500",
        lightColor: "bg-purple-50",
        textColor: "text-purple-600",
        icon: BarChart3,
        value: "$1.9M"
    },
    { 
        name: "EBITDA", 
        fullName: "Weighted EBITDA",
        weight: 20, 
        color: "#f59e0b", 
        bgColor: "bg-amber-500",
        lightColor: "bg-amber-50",
        textColor: "text-amber-600",
        icon: Calculator,
        value: "$2.3M"
    },
    { 
        name: "Assets", 
        fullName: "Asset-Based",
        weight: 15, 
        color: "#10b981", 
        bgColor: "bg-emerald-500",
        lightColor: "bg-emerald-50",
        textColor: "text-emerald-600",
        icon: Building2,
        value: "$1.6M"
    },
]

export function MethodologyWeightingFunnel() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Playfair_Display'] serif mb-4">
                        How We Combine Them
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Each methodology produces an independent valuation. We then apply weighted averaging 
                        to synthesize a final, defensible value range.
                    </p>
                </motion.div>

                {/* Flow diagram */}
                <div className="relative">
                    {/* Input cards - top row */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {methodologies.map((method, index) => (
                            <motion.div
                                key={method.name}
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className={`${method.lightColor} rounded-2xl p-5 border-2`}
                                style={{ borderColor: method.color }}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div 
                                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: method.color }}
                                    >
                                        <method.icon className="w-4 h-4 text-white" />
                                    </div>
                                    <span className={`text-sm font-bold ${method.textColor}`}>{method.weight}%</span>
                                </div>
                                <p className="font-semibold text-slate-900 text-sm mb-1">{method.fullName}</p>
                                <p className="text-xl font-bold" style={{ color: method.color }}>{method.value}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Flow lines */}
                    <div className="relative h-24 hidden lg:block">
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                            {methodologies.map((method, index) => {
                                const startX = (index * 25) + 12.5 // Center of each card
                                return (
                                    <motion.path
                                        key={method.name}
                                        d={`M ${startX}% 0 Q ${startX}% 50%, 50% 100%`}
                                        fill="none"
                                        stroke={method.color}
                                        strokeWidth="2"
                                        strokeDasharray="6 4"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 0.5 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                                    />
                                )
                            })}
                        </svg>
                    </div>

                    {/* Mobile arrows */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex justify-center my-4 lg:hidden"
                    >
                        <ArrowDown className="w-8 h-8 text-slate-300" />
                    </motion.div>

                    {/* Synthesis indicator */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="bg-slate-100 rounded-full p-4 border-2 border-slate-300">
                            <Blend className="w-8 h-8 text-slate-600" />
                        </div>
                    </motion.div>

                    {/* Arrow down */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex justify-center mb-8"
                    >
                        <ArrowDown className="w-8 h-8 text-[#1e3a8a]" />
                    </motion.div>

                    {/* Final output card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="max-w-lg mx-auto"
                    >
                        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b5998] rounded-3xl p-8 text-center text-white shadow-2xl relative overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                            
                            <div className="relative">
                                <p className="text-blue-200 text-sm font-medium mb-1">Weighted Valuation Range</p>
                                <motion.p
                                    initial={{ scale: 0.8 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 1.3, type: "spring" }}
                                    className="text-4xl md:text-5xl font-bold mb-3"
                                >
                                    $1.8M — $2.4M
                                </motion.p>
                                <p className="text-blue-200 text-sm">Defensible. Data-driven. Ready for negotiation.</p>
                                
                                {/* Weight breakdown mini */}
                                <div className="flex justify-center gap-2 mt-6">
                                    {methodologies.map((method) => (
                                        <div 
                                            key={method.name}
                                            className="px-2 py-1 rounded-full text-xs font-medium bg-white/10"
                                        >
                                            {method.name} {method.weight}%
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="text-center text-slate-500 text-sm mt-10 max-w-xl mx-auto"
                >
                    <span className="font-semibold text-slate-700">Note:</span> Weights may be adjusted based on your business type. 
                    Asset-heavy businesses may weight the Asset-Based approach higher, while SaaS companies may emphasize the Income Approach.
                </motion.p>
            </div>
        </section>
    )
}
