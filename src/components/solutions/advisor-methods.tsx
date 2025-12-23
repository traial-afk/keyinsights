"use client"

import { useState } from "react"
import { TrendingUp, Building2, BarChart3, Clock, Check, Eye, Download, ChevronDown, FileText, FileSpreadsheet, Presentation, X, AlertTriangle, Calculator, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

function SampleCard({ title, subtitle, icon, color, fileUrl, packageType }: { title: string, subtitle: string, icon: React.ReactNode, color: string, fileUrl: string, packageType: string }) {
    return (
        <Card className="overflow-hidden bg-white text-slate-900 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
            <div className="p-4 flex items-start justify-between gap-3 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
                        {icon}
                    </div>
                    <div>
                        <h4 className="font-bold text-sm leading-tight text-slate-900">{title}</h4>
                        <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
                    </div>
                </div>
                <Badge
                    className={`${packageType === "Essential" ? "bg-[#1e3a8a]" : "bg-[#f4a623] text-slate-900"} text-[10px] border-0 font-bold shrink-0`}
                >
                    {packageType}
                </Badge>
            </div>

            {/* Preview Area */}
            <div className="flex-1 bg-slate-50 relative min-h-[500px] border-b border-slate-100">
                <iframe
                    src={`${fileUrl}#toolbar=0&navpanes=0&view=FitH`}
                    className="w-full h-full absolute inset-0"
                    title={`${title} Preview`}
                />
            </div>

            {/* Footer Actions */}
            <div className="p-4 bg-white flex gap-2">
                <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-[#1e3a8a] hover:bg-[#172e6e] text-white shadow-sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View Full Report
                    </Button>
                </a>
                <a href={fileUrl} download>
                    <Button variant="outline" size="icon" className="shadow-sm">
                        <Download className="h-4 w-4" />
                    </Button>
                </a>
            </div>
        </Card>
    )
}

export function AdvisorMethods() {
    const [showSamples, setShowSamples] = useState(false)

    const methods = [
        {
            icon: TrendingUp,
            title: "Income Approach",
            description: "Combines Discounted Cash Flow (DCF) and capitalization of earnings methods. Projects future cash flows, discounts to present value, and calculates value based on the business's ability to generate income using industry-specific multiples.",
            bestFor: "Service businesses, professional practices, and companies with predictable revenue streams",
            color: "bg-[#1e3a8a]"
        },
        {
            icon: Building2,
            title: "Asset-Based Approach",
            description: "Values the business based on its net asset value, including tangible assets like equipment, inventory, and real estate, plus intangible assets like customer lists, brand value, and goodwill.",
            bestFor: "Asset-heavy businesses, manufacturing, real estate holdings, or liquidation scenarios",
            color: "bg-[#1e3a8a]"
        },
        {
            icon: BarChart3,
            title: "Market Comparables",
            description: "Benchmarks your client's business against 100,000+ actual transactions in our database. Analyzes what similar businesses actually sold for, adjusted for size, geography, and industry specifics.",
            bestFor: "Validating other methods and establishing market-realistic expectations",
            color: "bg-[#f4a623]"
        },
        {
            icon: Clock,
            title: "Weighted EBITDA Analysis",
            description: "Examines EBITDA trends over 3-5 years, applying appropriate weightings to recent performance. Identifies whether the business is growing, stable, or declining and adjusts valuation accordingly.",
            bestFor: "Understanding trajectory, normalizing unusual years, and supporting negotiation positions",
            color: "bg-[#f4a623]"
        },
    ]

    const reports = [
        {
            icon: FileText,
            title: "Business Teaser",
            tagline: "The Hook",
            description: "A one-page snapshot that grabs buyer attention. Clean, professional, and designed to generate inquiries without revealing confidential details.",
            package: "Exit Ready",
            color: "text-green-500",
            bgColor: "bg-green-50"
        },
        {
            icon: FileSpreadsheet,
            title: "Confidential Information Memorandum",
            tagline: "The Full Story",
            description: "Comprehensive 15-20 page document with everything serious buyers need financials, operations, market position, and growth opportunities.",
            package: "Exit Ready",
            color: "text-purple-500",
            bgColor: "bg-purple-50"
        },
        {
            icon: Calculator,
            title: "Business Valuation Report",
            tagline: "The Number",
            description: "Defensible valuation using four proven methods. Clear range, weighted value, and methodology breakdown buyers and lenders trust.",
            package: "Essential",
            color: "text-[#1e3a8a]",
            bgColor: "bg-blue-50"
        },
        {
            icon: AlertTriangle,
            title: "Red Flags Analysis",
            tagline: "The Risks",
            description: "Identifies issues that could derail a deal or reduce value. Covers 15+ risk categories so there are no surprises at due diligence.",
            package: "Essential",
            color: "text-red-500",
            bgColor: "bg-red-50"
        },
        {
            icon: ArrowUpRight,
            title: "Valuation Enhancement Report",
            tagline: "The Roadmap",
            description: "Actionable steps tailored to the business. Shows exactly how to increase value over the next 12 months before going to market.",
            package: "Exit Ready",
            color: "text-[#f4a623]",
            bgColor: "bg-amber-50"
        },
    ]

    const sampleReports = [
        {
            id: "teaser",
            title: "Business Teaser",
            subtitle: "1 Page • PDF",
            icon: <Presentation className="h-6 w-6 text-green-500" />,
            color: "bg-green-500",
            fileUrl: "/samples/business-teaser.pdf",
            packageType: "Exit Ready"
        },
        {
            id: "cim",
            title: "Confidential Information Memorandum",
            subtitle: "10-20 Pages • PDF",
            icon: <FileSpreadsheet className="h-6 w-6 text-purple-500" />,
            color: "bg-purple-500",
            fileUrl: "/samples/cim.pdf",
            packageType: "Exit Ready"
        },
        {
            id: "valuation",
            title: "Business Valuation Report",
            subtitle: "10-20 Pages • PDF",
            icon: <FileText className="h-6 w-6 text-orange-500" />,
            color: "bg-orange-500",
            fileUrl: "/samples/business-valuation-report.pdf",
            packageType: "Essential"
        },
    ]

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section 1: Four Methods */}
                <div className="mb-24">
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center rounded-full bg-[#1e3a8a]/10 px-4 py-1.5 text-sm font-semibold text-[#1e3a8a] mb-2">
                            Our Methodology
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                            4 Proven Methods.{" "}
                            <span className="text-[#1e3a8a]">One Clear Answer.</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Every valuation uses the same rigorous methodology. Your clients get consistent, defensible numbers every time.
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
                            Each method provides a different perspective on value. We assign a percentage weight to each approach based on the specific business characteristics, then synthesize everything into one clear, defensible number your clients can trust.
                        </p>
                    </div>
                </div>

                {/* Section 2: What You'll Receive */}
                <div className="space-y-16">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                See exactly what{" "}
                                <span className="text-[#1e3a8a]">your clients receive</span>
                            </h2>
                            <p className="text-slate-600">
                                Professional deliverables that make you look good and give your clients confidence.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Executive summary with clear valuation range",
                                    "Detailed methodology breakdown with weightings",
                                    "Red flags analysis across 15+ risk categories",
                                    "Market comparables with transaction data",
                                    "Your branding (white-label on Exit Ready)"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                onClick={() => setShowSamples(!showSamples)}
                                className="bg-[#1e3a8a] hover:bg-blue-900 text-white h-12 px-6"
                            >
                                <Eye className="mr-2 h-4 w-4" />
                                {showSamples ? "Hide Sample Reports" : "View Sample Reports"}
                                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${showSamples ? 'rotate-180' : ''}`} />
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

                                    {/* Methodology Breakdown */}
                                    <div className="space-y-3">
                                        <div className="text-xs text-slate-500 font-medium mb-2">Methodology Weights</div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-20 text-xs text-slate-500">Income</div>
                                                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full w-[40%] bg-[#1e3a8a] rounded-full"></div>
                                                </div>
                                                <div className="w-8 text-xs text-slate-600 font-medium">40%</div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-20 text-xs text-slate-500">Asset</div>
                                                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full w-[15%] bg-[#1e3a8a] rounded-full"></div>
                                                </div>
                                                <div className="w-8 text-xs text-slate-600 font-medium">15%</div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-20 text-xs text-slate-500">Market</div>
                                                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full w-[25%] bg-[#f4a623] rounded-full"></div>
                                                </div>
                                                <div className="w-8 text-xs text-slate-600 font-medium">25%</div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-20 text-xs text-slate-500">EBITDA</div>
                                                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full w-[20%] bg-[#f4a623] rounded-full"></div>
                                                </div>
                                                <div className="w-8 text-xs text-slate-600 font-medium">20%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Each Report Explained */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                                Five Reports. Each One Serves a Purpose.
                            </h3>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                From grabbing buyer attention to closing the deal every deliverable is designed to move your client forward.
                            </p>
                        </div>

                        {/* Reports Grid - 3 on top, 2 on bottom centered */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {reports.slice(0, 3).map((report, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl ${report.bgColor} flex items-center justify-center`}>
                                            <report.icon className={`w-6 h-6 ${report.color}`} />
                                        </div>
                                        <Badge
                                            className={`${report.package === "Essential" ? "bg-[#1e3a8a]" : "bg-[#f4a623] text-slate-900"} text-[10px] border-0 font-bold`}
                                        >
                                            {report.package}
                                        </Badge>
                                    </div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                        {report.tagline}
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                                        {report.title}
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {report.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom 2 cards centered */}
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {reports.slice(3).map((report, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl ${report.bgColor} flex items-center justify-center`}>
                                            <report.icon className={`w-6 h-6 ${report.color}`} />
                                        </div>
                                        <Badge
                                            className={`${report.package === "Essential" ? "bg-[#1e3a8a]" : "bg-[#f4a623] text-slate-900"} text-[10px] border-0 font-bold`}
                                        >
                                            {report.package}
                                        </Badge>
                                    </div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                        {report.tagline}
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                                        {report.title}
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {report.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Package Summary */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-2xl mx-auto">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-[#1e3a8a]"></div>
                                    <span className="text-slate-700 font-medium">
                                        <span className="font-bold text-[#1e3a8a]">Essential</span> - Valuation + Red Flags
                                    </span>
                                </div>
                                <div className="hidden sm:block w-px h-6 bg-slate-200"></div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-[#f4a623]"></div>
                                    <span className="text-slate-700 font-medium">
                                        <span className="font-bold text-[#f4a623]">Exit Ready</span> - All 5 Reports
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Expandable Sample Reports Section */}
                    {showSamples && (
                        <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                            <div className="relative mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-2xl border border-slate-200">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#1e3a8a]">Sample Reports Preview</h3>
                                        <p className="text-slate-600 text-sm mt-1">Click on any report to view the full document</p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setShowSamples(false)}
                                        className="text-slate-500 hover:text-[#1e3a8a] hover:bg-slate-100"
                                    >
                                        <X className="h-6 w-6" />
                                    </Button>
                                </div>

                                <div className="grid gap-6 md:grid-cols-3 text-left">
                                    {sampleReports.map((report) => (
                                        <SampleCard
                                            key={report.id}
                                            title={report.title}
                                            subtitle={report.subtitle}
                                            icon={report.icon}
                                            color={report.color}
                                            fileUrl={report.fileUrl}
                                            packageType={report.packageType}
                                        />
                                    ))}
                                </div>

                                {/* Package Note */}
                                <div className="mt-8 bg-[#f4a623]/10 border border-[#f4a623]/20 rounded-xl p-4 flex items-start gap-3">
                                    <div className="w-8 h-8 bg-[#f4a623]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FileSpreadsheet className="w-4 h-4 text-[#f4a623]" />
                                    </div>
                                    <div>
                                        <p className="text-slate-700 text-sm font-medium">Want all 5 reports for your client?</p>
                                        <p className="text-slate-600 text-sm">
                                            The <span className="font-semibold">Exit Ready Package</span> includes the CIM, Teaser, and Valuation Enhancement Report everything your client needs to go to market. White-label included.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}