"use client"

import { motion } from "framer-motion"
import { ShoppingCart, BadgeDollarSign, Briefcase, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const personas = [
    {
        icon: ShoppingCart,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "Buyers",
        tagline: "Know what you're getting into",
        benefits: [
            "Due diligence support",
            "Risk and red flag identification",
            "Negotiation leverage",
        ],
        href: "/buyer",
        ctaText: "Learn More",
    },
    {
        icon: BadgeDollarSign,
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "Sellers",
        tagline: "Know your number before negotiations",
        benefits: [
            "Exit preparation",
            "Realistic pricing",
            "Professional positioning",
        ],
        href: "/selling",
        ctaText: "Learn More",
    },
    {
        icon: Briefcase,
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        title: "Advisors",
        tagline: "Fast turnaround for your clients",
        benefits: [
            "White-label options",
            "Volume pricing available",
            "24-hour delivery",
        ],
        href: "/advisor",
        ctaText: "Learn More",
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
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
}

export function WhyUsPersonas() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-100 mb-6">
                        Who We Help
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Playfair_Display'] serif mb-4">
                        Built for Everyone in the{" "}
                        <span className="text-[#1e3a8a]">Transaction</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Whether you're buying, selling, or advising we have solutions designed for your specific needs.
                    </p>
                </motion.div>

                {/* Personas Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {personas.map((persona) => (
                        <motion.div
                            key={persona.title}
                            variants={cardVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-[#1e3a8a]/30 hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className={`w-14 h-14 rounded-xl ${persona.iconBg} flex items-center justify-center mb-5`}>
                                <persona.icon className={`w-7 h-7 ${persona.iconColor}`} />
                            </div>
                            
                            <h3 className="font-bold text-xl text-slate-900 mb-1">{persona.title}</h3>
                            <p className="text-slate-500 text-sm mb-5">{persona.tagline}</p>
                            
                            <ul className="space-y-3 mb-6 flex-1">
                                {persona.benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-center gap-2 text-slate-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]"></div>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            <Link href={persona.href}>
                                <Button 
                                    variant="outline" 
                                    className="w-full border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white group"
                                >
                                    {persona.ctaText}
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
