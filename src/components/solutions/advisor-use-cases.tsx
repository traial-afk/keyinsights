"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, TrendingUp, PieChart, ArrowRight, Zap, Target, CheckCheck, Tag, ChevronRight } from "lucide-react"

const benefits = [
    {
        icon: Zap,
        title: "24-Hour Delivery",
        description: "Submit today, deliver tomorrow",
        color: "text-[#f4a623]",
        bgColor: "bg-[#f4a623]/10",
    },
    {
        icon: Target,
        title: "Third-Party Credibility",
        description: "The number comes from us, not you",
        color: "text-[#1e3a8a]",
        bgColor: "bg-[#1e3a8a]/10",
    },
    {
        icon: CheckCheck,
        title: "Consistent Quality",
        description: "Same methodology, every report",
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
    },
    {
        icon: Tag,
        title: "White-Label Ready",
        description: "Your brand, we stay invisible",
        color: "text-purple-500",
        bgColor: "bg-purple-50",
    }
]

const personas = [
    {
        id: "brokers",
        label: "Business Brokers",
        icon: Briefcase,
        tagline: "Win more listings. Price them right. Close faster.",
        useCases: [
            {
                title: "Listing Price Reality Check",
                scenario: "Seller expectations don't match market reality.",
                outcome: "You set expectations with a third-party number. You're not the bad guy."
            },
            {
                title: "Competitive Pitch for Listings",
                scenario: "You're up against other brokers for a listing.",
                outcome: "You win by offering a complimentary valuation they can't match."
            },
            {
                title: "Stale Listing Repricing",
                scenario: "A listing has been sitting. You need the price reduction talk.",
                outcome: "You have an objective reason to reprice without damaging the relationship."
            }
        ]
    },
    {
        id: "ma-advisors",
        label: "M&A Advisors",
        icon: TrendingUp,
        tagline: "Move faster. Advise smarter. Protect your reputation.",
        useCases: [
            {
                title: "Engagement Kickoff",
                scenario: "New client, need a baseline before strategy discussions.",
                outcome: "You start with data, not guesses. Client confidence from day one."
            },
            {
                title: "Validating Buyer Indications",
                scenario: "You received an IOI. Is it fair?",
                outcome: "You give data-backed advice to accept, counter, or walk away."
            },
            {
                title: "CIM Support",
                scenario: "Marketing materials need a valuation section.",
                outcome: "Your CIM has credibility. Buyers take the asking price seriously."
            }
        ]
    },
    {
        id: "investors",
        label: "Investors & PE",
        icon: PieChart,
        tagline: "Screen faster. Negotiate smarter. Monitor consistently.",
        useCases: [
            {
                title: "Deal Screening",
                scenario: "Broker sent a teaser. Is it worth your time?",
                outcome: "You kill bad deals fast. Focus only on real opportunities."
            },
            {
                title: "Pre-LOI Diligence",
                scenario: "Interested, but not ready for $50K full diligence.",
                outcome: "You write an informed LOI. Negotiate from strength."
            },
            {
                title: "Negotiation Leverage",
                scenario: "Seller is anchored high. You see it differently.",
                outcome: "\"It's not just us saying this.\" You have third-party backup."
            },
            {
                title: "Portfolio Monitoring",
                scenario: "Multiple companies need annual or quarterly valuations.",
                outcome: "Clean, consistent reporting for investor updates and exit timing."
            }
        ]
    }
]

export function AdvisorUseCases() {
    const [activeTab, setActiveTab] = useState("brokers")
    const activePersona = personas.find(p => p.id === activeTab)

    return (
        <section id="use-cases" className="py-20 lg:py-28 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <div className="inline-flex items-center rounded-full bg-[#1e3a8a]/10 px-4 py-1.5 text-sm font-semibold text-[#1e3a8a] mb-6">
                        Your Back-Office Valuation Team
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        How Advisors Like You{" "}
                        <span className="text-[#1e3a8a]">Use This</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        You focus on clients and deals. We deliver professional valuations fast, consistent.
                    </p>
                </motion.div>

                {/* Benefits Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-5xl mx-auto mb-16"
                >
                    <div className="bg-white border border-slate-200 rounded-2xl p-4 md:p-6 shadow-sm">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl ${benefit.bgColor} flex items-center justify-center flex-shrink-0`}>
                                        <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-semibold text-slate-900 text-sm leading-tight">{benefit.title}</div>
                                        <div className="text-xs text-slate-500 leading-tight mt-0.5">{benefit.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Persona Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    {personas.map((persona) => (
                        <button
                            key={persona.id}
                            onClick={() => setActiveTab(persona.id)}
                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === persona.id
                                ? "bg-[#1e3a8a] text-white shadow-lg"
                                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                                }`}
                        >
                            <persona.icon className="w-4 h-4" />
                            {persona.label}
                        </button>
                    ))}
                </motion.div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {activePersona && (
                        <motion.div
                            key={activePersona.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-5xl mx-auto"
                        >
                            {/* Persona Tagline */}
                            <div className="text-center mb-8">
                                <p className="text-[#f4a623] font-semibold text-lg">
                                    {activePersona.tagline}
                                </p>
                            </div>

                            {/* Use Cases - Streamlined Cards */}
                            <div className={`grid gap-4 ${activePersona.useCases.length === 4 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                                {activePersona.useCases.map((useCase, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#1e3a8a]/20 transition-all duration-300"
                                    >
                                        {/* Title */}
                                        <h4 className="font-bold text-slate-900 mb-2">
                                            {useCase.title}
                                        </h4>

                                        {/* Scenario */}
                                        <p className="text-slate-500 text-sm mb-4">
                                            {useCase.scenario}
                                        </p>

                                        {/* Outcome */}
                                        <div className="pt-3 border-t border-slate-100">
                                            <div className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                                                <p className="text-slate-700 text-sm font-medium leading-snug">
                                                    {useCase.outcome}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-14 text-center"
                >
                    <a
                        href="#pricing"
                        className="inline-flex items-center gap-2 bg-[#f4a623] hover:bg-[#e09000] text-slate-900 font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                        View Pricing
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}