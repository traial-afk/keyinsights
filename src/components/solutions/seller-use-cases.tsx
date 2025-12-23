"use client"

import { useState } from "react"
import { Clock, TrendingUp, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SellerUseCases() {
    const [activeCase, setActiveCase] = useState(0)

    const useCases = [
        {
            id: "retirement",
            icon: Building2,
            title: "The Retirement Exit",
            subtitle: "Planning to sell in 6-18 months",
            industry: "Service Business",
            stat: "Confidence",
            statLabel: "to negotiate on your terms",
            situation: "After decades building your business, you're ready to retire. Your broker gives you one number. A buyer offers significantly less. Two very different figures and no way to know which is realistic.",
            problem: "You're about to make the biggest financial decision of your life, and you're guessing. Is your broker being optimistic to win the listing? Is the buyer lowballing you?",
            solution: "A 24-hour valuation shows you the true range and explains exactly why. You see what's driving the value up and what's holding it back.",
            result: "You list with confidence, knowing your floor. When buyers push back, you have the documentation to defend your price or walk away knowing it wasn't right.",
        },
        {
            id: "unsolicited",
            icon: Clock,
            title: "The Unsolicited Offer",
            subtitle: "When you need answers fast",
            industry: "Any Industry",
            stat: "Clarity",
            statLabel: "in 24 hours, not 4 weeks",
            situation: "A competitor or private equity firm reaches out with an unexpected offer. They want an answer this week. You weren't planning to sell, but the number sounds interesting.",
            problem: "No time to get a traditional valuation. No idea if this is a lowball, a fair price, or actually generous. Saying yes too fast could cost you. Saying no could mean missing a real opportunity.",
            solution: "A 24-hour valuation tells you exactly where you stand. You see your true range, what's driving it, and what the buyer is probably seeing.",
            result: "You respond from knowledge, not panic. You counter with confidence, accept a fair deal, or walk away knowing you made the right call.",
        },
        {
            id: "valuebuilder",
            icon: TrendingUp,
            title: "The Value Builder",
            subtitle: "Maximizing your exit over time",
            industry: "Any Industry",
            stat: "Roadmap",
            statLabel: "to a higher exit price",
            situation: "You're not ready to sell yet maybe in 2-3 years. But you want to exit at the highest possible price when the time comes.",
            problem: "You don't know your current value, what's actually driving it, or what to fix before going to market. You could be wasting time on things that don't move the needle.",
            solution: "A valuation shows where you stand today. The enhancement report identifies the specific changes that will increase your price ranked by impact.",
            result: "You spend the next 18-24 months fixing what matters. When you're ready to list, your business is worth significantly more than when you started.",
        },
    ]

    return (
        <section id="use-cases-section" className="py-24 bg-white border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Playfair_Display'] serif">
                        How Sellers Use Their Valuation
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Common scenarios where knowing your number changes everything.
                    </p>
                </div>

                {/* Use Case Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {useCases.map((useCase, index) => (
                        <button
                            key={useCase.id}
                            onClick={() => setActiveCase(index)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all ${activeCase === index
                                ? "bg-[#1e3a8a] text-white shadow-lg"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                        >
                            <useCase.icon className="w-4 h-4" />
                            {useCase.title}
                        </button>
                    ))}
                </div>

                {/* Active Use Case Detail */}
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                    {/* Left: Stat Card */}
                    <div className="lg:col-span-2">
                        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-3xl p-8 text-white relative overflow-hidden">
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
                            </div>

                            <div className="relative">
                                {/* Industry Badge */}
                                <Badge className="bg-white/20 text-white border-0 mb-6">
                                    {useCases[activeCase].industry}
                                </Badge>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-2">
                                    {useCases[activeCase].title}
                                </h3>
                                <p className="text-blue-200 text-sm mb-8">
                                    {useCases[activeCase].subtitle}
                                </p>

                                {/* Big Stat */}
                                <div className="mb-2">
                                    <span className="text-4xl md:text-5xl font-bold text-[#f4a623]">
                                        {useCases[activeCase].stat}
                                    </span>
                                </div>
                                <p className="text-blue-200 text-sm">
                                    {useCases[activeCase].statLabel}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Story Steps */}
                    <div className="lg:col-span-3 space-y-4">
                        {/* Situation */}
                        <Card className="border-0 shadow-md bg-slate-50 hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                                        <span className="text-slate-600 font-bold text-sm">1</span>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">
                                            The Situation
                                        </div>
                                        <p className="text-slate-700">
                                            {useCases[activeCase].situation}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Problem */}
                        <Card className="border-0 shadow-md bg-slate-50 hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#f4a623]/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-[#f4a623] font-bold text-sm">2</span>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase font-bold text-[#f4a623] tracking-wider mb-1">
                                            The Challenge
                                        </div>
                                        <p className="text-slate-700">
                                            {useCases[activeCase].problem}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Solution */}
                        <Card className="border-0 shadow-md bg-slate-50 hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-[#1e3a8a] font-bold text-sm">3</span>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase font-bold text-[#1e3a8a] tracking-wider mb-1">
                                            The Answer
                                        </div>
                                        <p className="text-slate-700">
                                            {useCases[activeCase].solution}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Result */}
                        <Card className="border-0 shadow-md bg-emerald-50 hover:shadow-lg transition-shadow border-l-4 border-l-emerald-500">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase font-bold text-emerald-600 tracking-wider mb-1">
                                            The Outcome
                                        </div>
                                        <p className="text-slate-700 font-medium">
                                            {useCases[activeCase].result}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Bottom Note - More honest */}
                <div className="mt-12 text-center">
                    <p className="text-slate-500 text-sm">
                        These are common situations where sellers benefit from knowing their number before negotiations begin.
                    </p>
                </div>
            </div>
        </section>
    )
}