"use client"

import { motion } from "framer-motion"
import { TrendingUp, Building2, BarChart3 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const methodologies = [
    {
        icon: TrendingUp,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "Income Approach",
        weight: "50%",
        description: "Values your business based on normalized earnings (SDE/EBITDA) with industry multiples. Supported by DCF analysis where projections are available.",
    },
    {
        icon: BarChart3,
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        title: "Market Comparables",
        weight: "35%",
        description: "Benchmarks against 100,000+ real transactions from similar businesses. Grounds your valuation in market reality.",
    },
    {
        icon: Building2,
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "Asset-Based Approach",
        weight: "15%",
        description: "Calculates the net value of tangible and intangible assets. Establishes a solid floor for your valuation.",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
}

export function WhyUsMethodologies() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <Badge className="bg-[#1e3a8a]/10 text-[#1e3a8a] border-[#1e3a8a]/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1e3a8a]/10 mb-6">
                        Our Methodology
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Playfair_Display'] serif mb-4">
                        Three Methods.{" "}
                        <span className="text-[#1e3a8a]">One Defensible Value.</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We don't rely on a single approach. Every valuation triangulates from multiple 
                        methodologies to give you a number you can stand behind.
                    </p>
                </motion.div>

                {/* Methodologies Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {methodologies.map((method, index) => (
                        <motion.div
                            key={method.title}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-[#1e3a8a]/30 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl ${method.iconBg} flex items-center justify-center flex-shrink-0`}>
                                    <method.icon className={`w-6 h-6 ${method.iconColor}`} />
                                </div>
                                <Badge variant="outline" className="text-slate-600 border-slate-300 font-semibold">
                                    {method.weight}
                                </Badge>
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 mb-2">{method.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">{method.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-slate-500 mt-10 text-sm"
                >
                    Each report includes a clear explanation of how each methodology was applied to your specific business.
                </motion.p>
            </div>
        </section>
    )
}
