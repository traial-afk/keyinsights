"use client"

import { motion } from "framer-motion"
import { Users, Clock, AlertTriangle, DollarSign } from "lucide-react"

const painPoints = [
    {
        icon: Users,
        title: "Sellers Don't Believe Your Number",
        description: "There's always a gap between seller expectations and market reality. If you're the one delivering that news, you risk the relationship.",
        highlight: "Let a third party close the gap. You stay the trusted advisor.",
        color: "text-red-500",
        bgColor: "bg-red-50",
        borderColor: "border-red-100"
    },
    {
        icon: Clock,
        title: "You Wait. Your Deals Don't.",
        description: "Traditional valuations take 3-4 weeks. By then, your buyer has moved on or your seller is frustrated.",
        highlight: "You're stuck explaining delays you didn't cause.",
        color: "text-amber-500",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-100"
    },
    {
        icon: AlertTriangle,
        title: "Some Reports Impress. Others Embarrass.",
        description: "You never know what you're going to get. One valuation looks professional, the next looks like a DIY spreadsheet.",
        highlight: "Your reputation is on the line every time.",
        color: "text-orange-500",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-100"
    },
    {
        icon: DollarSign,
        title: "Enterprise Fees Eat Your Margins",
        description: "Big firms charge $3,000-$5,000 per valuation. Pass that to your client and you're overpriced.",
        highlight: "Absorb it and your margins disappear.",
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-100"
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

export function AdvisorProblem() {
    return (
        <section className="py-20 lg:py-28 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Your Clients Are Waiting.{" "}
                        <span className="text-[#f4a623]">Your Deals Are Stalling.</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        You're great at finding deals and closing them. But valuations create problems you shouldn't have to solve alone.
                    </p>
                </motion.div>

                {/* Pain Points Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
                >
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative bg-white rounded-2xl p-6 lg:p-8 border ${point.borderColor} shadow-sm hover:shadow-lg transition-shadow duration-300`}
                        >
                            {/* Icon */}
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${point.bgColor} mb-5`}>
                                <point.icon className={`w-6 h-6 ${point.color}`} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {point.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                {point.description}
                            </p>
                            <p className="text-slate-800 font-medium">
                                {point.highlight}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Statistic Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-6 py-4 shadow-sm">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f4a623] text-white font-bold text-lg">
                            97%
                        </div>
                        <p className="text-slate-700 font-medium">
                            of advisors cite unrealistic seller expectations as their #1 challenge
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}