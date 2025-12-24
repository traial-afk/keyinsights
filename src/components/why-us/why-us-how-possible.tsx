"use client"

import { motion } from "framer-motion"
import { Users, Target, Zap, CheckCircle, Database, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const howCards = [
    {
        icon: Users,
        iconBg: "bg-amber-100",
        iconColor: "text-[#f4a623]",
        title: "Parallel Processing",
        description: "Multiple analysts review your data simultaneously—not one person working alone in a queue.",
    },
    {
        icon: Target,
        iconBg: "bg-amber-100",
        iconColor: "text-[#f4a623]",
        title: "Focused Scope",
        description: "Built for SMB transactions up to $10M. No Fortune 500 complexity, just what matters for your deal.",
    },
    {
        icon: Zap,
        iconBg: "bg-amber-100",
        iconColor: "text-[#f4a623]",
        title: "No Waiting Games",
        description: "No partner committees, no approval queues, no bureaucratic delays. Just valuations, every single day.",
    },
    {
        icon: CheckCircle,
        iconBg: "bg-amber-100",
        iconColor: "text-[#f4a623]",
        title: "Nothing Skipped",
        description: "Four valuation methods, multiple reviewers, every red flag identified. Rigorous, not rushed.",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

export function WhyUsHowPossible() {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-100 to-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 font-['Playfair_Display'] serif">
                        24 Hours?{" "}
                        <span className="italic text-[#f4a623]">How Is That Possible?</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center mb-4"
                >
                    <p className="text-xl md:text-2xl text-slate-900 font-medium">
                        We deliver in 24 hours not by cutting corners,
                    </p>
                    <p className="text-xl md:text-2xl text-[#1e3a8a] font-bold">
                        but by cutting the waste.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-slate-500 max-w-3xl mx-auto mb-10"
                >
                    Traditional valuations take 2-4 weeks because you're stuck in a queue, waiting for one analyst to 
                    finish other clients before starting yours. Then waiting for partner reviews. Then waiting for revisions.
                </motion.p>

                {/* HERE'S HOW Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex justify-center mb-12"
                >
                    <Badge className="bg-[#1e3a8a] text-white px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-[#1e3a8a]">
                        Here's How
                    </Badge>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    {howCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            variants={cardVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-[#f4a623]/30 hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-4 mx-auto`}>
                                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-center mb-2">{card.title}</h3>
                            <p className="text-sm text-slate-500 text-center leading-relaxed">{card.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200 text-center max-w-4xl mx-auto"
                >
                    <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                        Fast doesn't mean rushed. Every report undergoes rigorous review before delivery.{" "}
                        <span className="font-bold text-[#1e3a8a]">
                            We've simply eliminated the inefficiencies that plague traditional valuation firms.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
