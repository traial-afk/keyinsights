"use client"

import { TrendingUp, Building2, BarChart3, Calculator } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const methods = [
    {
        icon: TrendingUp,
        title: "DCF + Income Approach",
        description: "Projects your future earnings and calculates what they're worth today. The foundation of most business valuations.",
        color: "bg-[#1e3a8a]"
    },
    {
        icon: Building2,
        title: "Asset-Based Approach",
        description: "Values your tangible assets (equipment, inventory, property) plus intangibles like customer relationships.",
        color: "bg-[#1e3a8a]"
    },
    {
        icon: BarChart3,
        title: "Market Comparables",
        description: "Benchmarks your business against 100,000+ actual transactions. What did similar businesses actually sell for?",
        color: "bg-[#f4a623]"
    },
    {
        icon: Calculator,
        title: "Weighted EBITDA Analysis",
        description: "Examines your earnings trends over 3-5 years. Shows buyers whether you're growing, stable, or declining.",
        color: "bg-[#f4a623]"
    },
]

export function SellerMethodology() {
    return (
        <section className="py-24 bg-white border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Playfair_Display'] serif">
                        4 Proven Methods.{" "}
                        <span className="text-[#1e3a8a]">One Clear Answer.</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        The same methods used by professional appraisers and M&A firms applied to your business.
                    </p>
                </div>

                {/* Methods Grid - 2x2 */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {methods.map((method, index) => (
                        <Card key={index} className="border border-slate-200 shadow-md bg-white hover:shadow-lg transition-shadow">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center text-white shadow-sm`}>
                                        <method.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{method.title}</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {method.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Why Multiple Methods Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center max-w-4xl mx-auto">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Why Multiple Methods?</h4>
                    <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Each method shows value from a different angle. We weight each approach based on your specific business, then combine them into one defensible number the same number you'll use at the negotiating table.
                    </p>
                </div>
            </div>
        </section>
    )
}