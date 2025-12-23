"use client"

import { TrendingUp, Building2, BarChart3, Clock, Check, Eye, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function BuyerMethods() {
    const methods = [
        {
            icon: TrendingUp,
            title: "DCF/Income Approach",
            description: "Projects future cash flows and applies earnings multiples specific to your industry. Combines discounted cash flow modeling with capitalization rates to determine what the business's income stream is actually worth.",
            bestFor: "Service businesses and companies with predictable revenue",
            color: "bg-[#1e3a8a]"
        },
        {
            icon: Building2,
            title: "Asset-Based Approach",
            description: "Values the business based on its net asset value, including tangible assets like equipment and inventory, plus intangible assets like customer lists and goodwill.",
            bestFor: "Asset-heavy businesses or liquidation scenarios",
            color: "bg-[#1e3a8a]"
        },
        {
            icon: BarChart3,
            title: "Market Comparables",
            description: "Benchmarks your valuation against 100,000+ actual business transactions in our database. Shows what similar businesses in your industry and size range actually sold for, not just theoretical models.",
            bestFor: "Reality-checking the asking price against actual deals",
            color: "bg-[#f4a623]"
        },
        {
            icon: Clock,
            title: "Weighted EBITDA Analysis",
            description: "Examines EBITDA trends over 3-5 years, applying appropriate weightings to recent performance. Identifies whether the business is growing, stable, or declining.",
            bestFor: "Understanding trajectory and normalizing unusual years",
            color: "bg-[#f4a623]"
        },
    ]

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section 1: Four Methods */}
                <div className="mb-24">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Playfair_Display'] serif">
                            4 Proven Methods. One Clear Answer.
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Professional methodology following SSVS No. 1 and USPAP guidelines
                        </p>
                    </div>

                    {/* Methods Grid - 2x2 */}
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        {methods.map((method, index) => (
                            <Card key={index} className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-10 h-10 rounded-lg ${method.color} flex items-center justify-center text-white shadow-sm`}>
                                            <method.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900">{method.title}</h3>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {method.description}
                                    </p>
                                    <div className="bg-slate-50 rounded-lg p-3">
                                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Best For</div>
                                        <div className="text-sm font-medium text-slate-700">{method.bestFor}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Why Multiple Methods Box */}
                    <div className="bg-[#1e3a8a]/5 border border-[#1e3a8a]/10 rounded-2xl p-8 text-center max-w-4xl mx-auto">
                        <h4 className="text-lg font-bold text-slate-900 mb-3">Why Multiple Methods?</h4>
                        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
                            Each method provides a different perspective on value. We assign a percentage weight to each approach based on your specific business characteristics, then synthesize everything into one clear, defensible number.
                        </p>
                    </div>
                </div>

                {/* Section 2: Report Preview with Dialog */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-slate-900 font-['Playfair_Display'] serif">
                            See exactly what you'll receive
                        </h2>
                        <p className="text-slate-600">
                            Our comprehensive valuation reports give you everything you need to negotiate with confidence.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Executive summary with clear valuation range",
                                "Detailed methodology breakdown with weightings",
                                "Red flags analysis across 15+ categories",
                                "Market comparables with transaction data"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="bg-[#1e3a8a] hover:bg-blue-900 text-white h-12 px-6">
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Sample Report
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 overflow-hidden">
                                <div className="p-6 border-b flex items-center justify-between bg-white z-10">
                                    <DialogHeader className="p-0 m-0 space-y-1 text-left">
                                        <DialogTitle className="text-xl">Valuation Report Preview</DialogTitle>
                                        <DialogDescription className="text-sm">
                                            A sample of our comprehensive valuation report.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <Button className="bg-[#1e3a8a] text-white hover:bg-blue-900 gap-2 shadow-sm" asChild>
                                        <a href="/samples/business-valuation-report.pdf" download>
                                            <Download className="h-4 w-4" />
                                            Download PDF
                                        </a>
                                    </Button>
                                </div>

                                <div className="flex-1 w-full bg-slate-100">
                                    <iframe
                                        src="/samples/business-valuation-report.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                        className="w-full h-full border-0"
                                        title="Sample Valuation Report"
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
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

                                {/* Methodology Breakdown - Updated Weights */}
                                <div className="space-y-3">
                                    <div className="text-xs text-slate-500 font-medium mb-2">Methodology Weights</div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 text-xs text-slate-500">Income</div>
                                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[40%] bg-[#1e3a8a] rounded-full"></div>
                                            </div>
                                            <div className="w-8 text-xs text-slate-600 font-medium">40%</div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 text-xs text-slate-500">Asset</div>
                                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[15%] bg-emerald-500 rounded-full"></div>
                                            </div>
                                            <div className="w-8 text-xs text-slate-600 font-medium">15%</div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 text-xs text-slate-500">Market</div>
                                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[25%] bg-[#f4a623] rounded-full"></div>
                                            </div>
                                            <div className="w-8 text-xs text-slate-600 font-medium">25%</div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 text-xs text-slate-500">EBITDA</div>
                                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[20%] bg-slate-700 rounded-full"></div>
                                            </div>
                                            <div className="w-8 text-xs text-slate-600 font-medium">20%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}