"use client"

import { useState } from "react"
import { TrendingUp, Building2, BarChart3, Check, Eye, Download, X, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const methods = [
    {
        icon: TrendingUp,
        title: "Income Approach",
        weight: "50%",
        description: "Values your business based on normalized earnings (SDE for owner-operated, EBITDA for larger operations) with industry-appropriate multiples. Supported by DCF analysis where reliable projections are available.",
        color: "bg-[#1e3a8a]"
    },
    {
        icon: BarChart3,
        title: "Market Comparables",
        weight: "35%",
        description: "Benchmarks your business against 100,000+ actual transactions. What did similar businesses in your industry actually sell for?",
        color: "bg-[#f4a623]"
    },
    {
        icon: Building2,
        title: "Asset-Based Approach",
        weight: "15%",
        description: "Values your tangible assets (equipment, inventory, property) plus intangibles. Provides a floor value and sanity check on earnings-based methods.",
        color: "bg-[#1e3a8a]"
    },
]

export function Methodology() {
    const [showSample, setShowSample] = useState(false)

    return (
        <section className="py-24 bg-white border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Playfair_Display'] serif">
                        3 Proven Methods.{" "}
                        <span className="text-[#1e3a8a]">One Clear Answer.</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        The same methods used by professional appraisers and M&A firms — applied to your business.
                    </p>
                </div>

                {/* Methods Grid - 3 cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {methods.map((method, index) => (
                        <Card key={index} className="border border-slate-200 shadow-md bg-white hover:shadow-lg transition-shadow">
                            <CardContent className="p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center text-white shadow-sm`}>
                                        <method.icon className="w-6 h-6" />
                                    </div>
                                    <Badge variant="outline" className="text-slate-600 border-slate-300 font-semibold">
                                        {method.weight}
                                    </Badge>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{method.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {method.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Why Multiple Methods Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center max-w-4xl mx-auto mb-20">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Why Multiple Methods?</h4>
                    <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Each method shows value from a different angle. We weight each approach based on your specific business, then combine them into one defensible number you can act on with confidence.
                    </p>
                </div>

                {/* What You'll Receive */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-slate-900 font-['Playfair_Display'] serif">
                            See exactly what you'll receive
                        </h2>
                        <p className="text-slate-600">
                            Our comprehensive valuation reports give you everything you need to make confident decisions.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Executive summary with clear valuation range",
                                "Detailed methodology breakdown with weightings",
                                "Risk factors and red flags analysis",
                                "Market comparables with transaction data",
                                "Value drivers and improvement opportunities"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button
                            onClick={() => setShowSample(!showSample)}
                            className="bg-[#1e3a8a] hover:bg-blue-900 text-white h-12 px-6"
                        >
                            <Eye className="mr-2 h-4 w-4" />
                            {showSample ? "Hide Sample Report" : "View Sample Report"}
                        </Button>
                    </div>

                    {/* Report Visual */}
                    <div className="relative">
                        <div className="absolute top-0 right-0 w-full h-full bg-[#1e3a8a]/10 rounded-3xl transform rotate-3 translate-x-4 translate-y-4 -z-10"></div>
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                            {/* Window Header */}
                            <div className="bg-[#1e3a8a] p-4 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                                </div>
                                <div className="text-[10px] text-white/80 font-medium">KeyInsights_Valuation_Report.pdf</div>
                                <Badge className="bg-[#f4a623] text-slate-900 hover:bg-[#f4a623]/90 text-[10px] border-0 font-bold">SAMPLE</Badge>
                            </div>

                            {/* Report Body */}
                            <div className="p-8">
                                <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Business Valuation Report</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-8">ABC Services LLC</h3>

                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div className="bg-slate-50 p-4 rounded-xl">
                                        <div className="text-xs text-slate-500 mb-1">Valuation Range</div>
                                        <div className="text-lg font-bold text-slate-900">$425K - $510K</div>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl">
                                        <div className="text-xs text-slate-500 mb-1">Weighted Value</div>
                                        <div className="text-lg font-bold text-[#1e3a8a]">$467,500</div>
                                    </div>
                                </div>

                                {/* Methodology Breakdown - Updated to 3 methods */}
                                <div className="space-y-3">
                                    <div className="text-xs text-slate-500 font-medium mb-2">Methodology Weights</div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-20 text-xs text-slate-500">Income</div>
                                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[50%] bg-[#1e3a8a] rounded-full"></div>
                                            </div>
                                            <div className="w-8 text-xs text-slate-600 font-medium">50%</div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-20 text-xs text-slate-500">Market</div>
                                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[35%] bg-[#f4a623] rounded-full"></div>
                                            </div>
                                            <div className="w-8 text-xs text-slate-600 font-medium">35%</div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-20 text-xs text-slate-500">Asset</div>
                                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[15%] bg-emerald-500 rounded-full"></div>
                                            </div>
                                            <div className="w-8 text-xs text-slate-600 font-medium">15%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Expandable Sample Report */}
                {showSample && (
                    <div className="mt-16 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="relative mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-2xl border border-slate-200">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#1e3a8a]">Sample Valuation Report</h3>
                                    <p className="text-slate-600 text-sm mt-1">Preview our comprehensive business valuation report</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setShowSample(false)}
                                    className="text-slate-500 hover:text-[#1e3a8a] hover:bg-slate-100"
                                >
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>

                            <Card className="overflow-hidden bg-white text-slate-900 border border-slate-200 shadow-md">
                                <div className="p-4 flex items-start justify-between gap-3 border-b border-slate-100 bg-slate-50/50">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-orange-500 bg-opacity-10">
                                            <FileText className="h-6 w-6 text-orange-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm leading-tight text-slate-900">Business Valuation Report</h4>
                                            <p className="text-xs text-slate-500 mt-1">10-20 Pages • PDF</p>
                                        </div>
                                    </div>
                                    <Badge className="bg-[#1e3a8a] text-white text-[10px] border-0 font-bold">
                                        All Packages
                                    </Badge>
                                </div>

                                {/* Preview Area */}
                                <div className="bg-slate-50 relative h-[500px] border-b border-slate-100">
                                    <iframe
                                        src="/samples/business-valuation-report.pdf#toolbar=0&navpanes=0&view=FitH"
                                        className="w-full h-full absolute inset-0"
                                        title="Business Valuation Report Preview"
                                    />
                                </div>

                                {/* Footer Actions */}
                                <div className="p-4 bg-white flex gap-2">
                                    <a href="/samples/business-valuation-report.pdf" target="_blank" rel="noopener noreferrer" className="flex-1">
                                        <Button className="w-full bg-[#1e3a8a] hover:bg-[#172e6e] text-white shadow-sm">
                                            <Eye className="mr-2 h-4 w-4" />
                                            View Full Report
                                        </Button>
                                    </a>
                                    <a href="/samples/business-valuation-report.pdf" download>
                                        <Button variant="outline" size="icon" className="shadow-sm">
                                            <Download className="h-4 w-4" />
                                        </Button>
                                    </a>
                                </div>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
