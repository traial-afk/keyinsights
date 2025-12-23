"use client"

import { motion } from "framer-motion"
import { Zap, Target, CheckCheck, Tag } from "lucide-react"

const solutions = [
    {
        icon: Zap,
        title: "24 Hours, Every Time",
        description: "You submit today, you deliver to your client tomorrow. No exceptions, no excuses.",
        highlight: "Your deals keep moving.",
        color: "text-[#f4a623]",
        bgColor: "bg-[#f4a623]/10",
    },
    {
        icon: Target,
        title: "A Number That Isn't Yours",
        description: "When you need third-party credibility, you have it. The valuation comes from us.",
        highlight: "The trust stays with you.",
        color: "text-[#1e3a8a]",
        bgColor: "bg-[#1e3a8a]/10",
    },
    {
        icon: CheckCheck,
        title: "Same Quality, Every Report",
        description: "No more guessing what you'll get. Same rigorous methodology, same professional format, every single time.",
        highlight: "Your clients see consistency that's your credibility.",
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
    },
    {
        icon: Tag,
        title: "Your Brand, Our Work",
        description: "Your logo, your letterhead, your client relationship. We stay behind the scenes.",
        highlight: "They never know we exist.",
        color: "text-purple-500",
        bgColor: "bg-purple-50",
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

export function AdvisorSolution() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center rounded-full bg-[#1e3a8a]/10 px-4 py-1.5 text-sm font-semibold text-[#1e3a8a] mb-6">
                        The Solution
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Your Back-Office{" "}
                        <span className="text-[#1e3a8a]">Valuation Team</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        You focus on clients and deals. We deliver professional valuations fast, consistent, and priced for you to profit.
                    </p>
                </motion.div>

                {/* Solution Pillars Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
                >
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100 hover:border-[#1e3a8a]/20 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${solution.bgColor} mb-5`}>
                                <solution.icon className={`w-6 h-6 ${solution.color}`} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {solution.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                {solution.description}
                            </p>
                            <p className="text-[#1e3a8a] font-semibold">
                                {solution.highlight}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-slate-600 mb-2">
                        See how it works for your specific situation
                    </p>
                    <a
                        href="#use-cases"
                        className="inline-flex items-center text-[#1e3a8a] font-semibold hover:underline"
                    >
                        View Use Cases by Role
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}