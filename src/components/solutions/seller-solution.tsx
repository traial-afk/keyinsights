"use client"

import { Target, Search, TrendingUp, Map, CheckCircle2, HelpCircle, CircleDot } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const benefits = [
    {
        icon: Target,
        title: 'Know When to Say No',
        description: 'Know your realistic range recognize a fair offer and when to walk away.',
    },
    {
        icon: Search,
        title: "See Problems First",
        description: 'See the red flags and weaknesses before buyers use them against you.',
    },
    {
        icon: TrendingUp,
        title: 'What Drives Your Price',
        description: "Understand what's actually making your business valuable and what's holding it back.",
    },
    {
        icon: Map,
        title: 'How to Increase Your Price',
        description: 'Specific, prioritized actions to increase your exit price before going to market.',
    },
]

export function SellerSolution() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Playfair_Display'] serif leading-tight">
                        Know Your Number{" "}
                        <span className="text-[#1e3a8a]">Before Buyers Tell You</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
                        Most sellers guess, hope, and react.{" "}
                        <span className="text-[#1e3a8a] font-bold">You won't.</span>
                    </p>
                </div>

                {/* Contrast Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
                    {/* Without Valuation - Muted */}
                    <Card className="border border-slate-200 shadow-md bg-slate-50/50 relative overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                        <CardContent className="p-8 space-y-6">
                            <div className="flex items-center justify-between">
                                <Badge variant="secondary" className="bg-slate-200 text-slate-600 hover:bg-slate-200 font-semibold">
                                    Going In Blind
                                </Badge>
                                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                                    <HelpCircle className="w-5 h-5 text-slate-400" />
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <p className="text-2xl font-medium text-slate-400 italic">
                                    "I think it's worth around $2M?"
                                </p>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-slate-200">
                                <div className="flex items-center gap-3 text-slate-400">
                                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                    <span className="font-medium">Guessing</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400">
                                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                    <span className="font-medium">Hoping</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400">
                                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                    <span className="font-medium">Reacting</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* With Valuation - Elevated */}
                    <Card className="border-2 border-[#1e3a8a]/20 shadow-xl bg-white relative overflow-hidden ring-1 ring-[#1e3a8a]/10">
                        {/* Top accent bar */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1e3a8a] via-blue-600 to-[#1e3a8a]"></div>

                        <CardContent className="p-8 space-y-6">
                            <div className="flex items-center justify-between">
                                <Badge className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a] font-semibold">
                                    Going In Ready
                                </Badge>
                                <div className="w-8 h-8 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-white" />
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <p className="text-2xl font-bold text-slate-900 italic">
                                    "I know it's worth $1.8-2.2M.{" "}
                                    <span className="text-[#1e3a8a]">Here's why.</span>"
                                </p>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-[#1e3a8a]/10">
                                <div className="flex items-center gap-3 text-slate-800">
                                    <div className="w-2 h-2 rounded-full bg-[#1e3a8a]"></div>
                                    <span className="font-semibold">Knowing</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800">
                                    <div className="w-2 h-2 rounded-full bg-[#1e3a8a]"></div>
                                    <span className="font-semibold">Planning</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800">
                                    <div className="w-2 h-2 rounded-full bg-[#1e3a8a]"></div>
                                    <span className="font-semibold">Leading</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Section subtitle before benefits */}
                <div className="text-center mb-10">
                    <p className="text-lg text-slate-600">
                        After your valuation, you'll have:
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-4 gap-5">
                    {benefits.map((benefit, index) => (
                        <Card
                            key={benefit.title}
                            className="border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#1e3a8a]/30 transition-all duration-300 bg-white group"
                        >
                            <CardContent className="p-6 space-y-4 text-center">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-[#1e3a8a] flex items-center justify-center text-[#1e3a8a] group-hover:text-white transition-colors duration-300 mx-auto">
                                    <benefit.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#1e3a8a] transition-colors">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom summary */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 rounded-full border border-[#1e3a8a]/20">
                        <CheckCircle2 className="w-5 h-5 text-[#1e3a8a]" />
                        <p className="text-slate-700 font-medium">
                            Everything you need to <span className="text-[#1e3a8a] font-bold">negotiate from strength.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}