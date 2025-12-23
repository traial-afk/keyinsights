"use client"

import { Calculator, Users, Target, AlertTriangle, TrendingDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SellerProblem() {
    const problems = [
        {
            icon: Calculator,
            title: "The Guessing Game",
            description: "Most owners have a number in their head but no way to defend it. Price too high, you sit on the market for months. Too low, and you leave serious money on the table.",
        },
        {
            icon: Users,
            title: "The Information Gap",
            description: "Buyers arrive with analysts, accountants, and M&A advisors. They've done this before. You get one shot at the biggest transaction of your life and they know it.",
        },
        {
            icon: Target,
            title: "The Negotiation Trap",
            description: "Without a defensible valuation, every conversation starts on their terms. You end up reacting to their number instead of anchoring to yours.",
        },
    ]

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Playfair_Display'] serif leading-tight">
                        You're about to enter the{" "}
                        <span className="text-orange-500">biggest negotiation</span>{" "}
                        of your life
                    </h2>
                    <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
                        Do you know your number? Most sellers don't and it costs them.
                    </p>
                </div>

                {/* Problem Cards - No fake stats, just clear problems */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {problems.map((problem, index) => (
                        <Card
                            key={index}
                            className="border border-slate-200 border-t-4 border-t-orange-500 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white overflow-hidden"
                        >
                            <CardContent className="p-8 space-y-5">
                                {/* Icon */}
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                    <problem.icon className="w-6 h-6 text-orange-600" />
                                </div>

                                {/* Title & Description */}
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {problem.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Stakes Alert Section - Softened language */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-slate-200 relative overflow-hidden">
                    {/* Subtle gradient accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400"></div>

                    <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-center relative z-10">
                        {/* Left Side - Icon and Label */}
                        <div className="flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-slate-200 pb-8 md:pb-0 md:pr-10">
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                                <AlertTriangle className="w-8 h-8 text-orange-600" />
                            </div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                                The Real Stakes
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-4 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-slate-900">
                                This isn't just another transaction
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                For most founders, their business represents the majority of their wealth. It's your retirement, your family's security, and the legacy of everything you've built.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Walking into this negotiation without knowing your number isn't just risky, it's leaving your future in someone else's hands.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}