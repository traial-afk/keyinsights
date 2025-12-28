"use client"

import { TrendingUp, Building2, BarChart3, Check, Eye, FileText, FileSpreadsheet, Presentation, AlertTriangle, ArrowUpRight, ExternalLink, ChevronRight } from "lucide-react"

export function AdvisorDeliverables() {
    const methods = [
        { icon: TrendingUp, name: "Income Approach", weight: "50%", detail: "SDE/EBITDA Multiples + DCF" },
        { icon: BarChart3, name: "Market Comparables", weight: "35%", detail: "100K+ Transaction Database" },
        { icon: Building2, name: "Asset-Based", weight: "15%", detail: "Tangible & Intangible Assets" },
    ]

    const reports = [
        {
            icon: FileText,
            title: "Business Valuation Report",
            tagline: "The Number",
            package: "Essential",
            color: "text-[#1e3a8a]",
            bgColor: "bg-blue-50"
        },
        {
            icon: AlertTriangle,
            title: "Red Flags Analysis",
            tagline: "The Risks",
            package: "Essential",
            color: "text-red-500",
            bgColor: "bg-red-50"
        },
        {
            icon: Presentation,
            title: "Business Teaser",
            tagline: "The Hook",
            package: "Exit Ready",
            color: "text-green-500",
            bgColor: "bg-green-50"
        },
        {
            icon: FileSpreadsheet,
            title: "Confidential Information Memorandum",
            tagline: "The Full Story",
            package: "Exit Ready",
            color: "text-purple-500",
            bgColor: "bg-purple-50"
        },
        {
            icon: ArrowUpRight,
            title: "Valuation Enhancement Report",
            tagline: "The Roadmap",
            package: "Exit Ready",
            color: "text-[#f4a623]",
            bgColor: "bg-amber-50"
        },
    ]

    const sampleReports = [
        {
            id: "valuation",
            title: "Business Valuation Report",
            pages: "15-20 Pages",
            icon: <FileText className="h-5 w-5 text-[#1e3a8a]" />,
            fileUrl: "/samples/business-valuation-report.pdf",
            packageType: "Essential",
            highlight: "Defensible valuation with clear methodology"
        },
        {
            id: "teaser",
            title: "Business Teaser",
            pages: "1 Page",
            icon: <Presentation className="h-5 w-5 text-green-500" />,
            fileUrl: "/samples/business-teaser.pdf",
            packageType: "Exit Ready",
            highlight: "Grabs buyer attention without revealing details"
        },
        {
            id: "cim",
            title: "Confidential Information Memorandum",
            pages: "15-25 Pages",
            icon: <FileSpreadsheet className="h-5 w-5 text-purple-500" />,
            fileUrl: "/samples/cim.pdf",
            packageType: "Exit Ready",
            highlight: "Everything serious buyers need to proceed"
        },
    ]

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* ========== SECTION 1: Methodology Credibility Strip ========== */}
                <div className="mb-24">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center rounded-full bg-[#1e3a8a]/10 px-4 py-1.5 text-sm font-semibold text-[#1e3a8a] mb-4">
                            Our Methodology
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            3 Proven Methods.{" "}
                            <span className="text-[#1e3a8a]">One Clear Answer.</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Every valuation combines multiple approaches, weighted for the specific business, to arrive at one defensible number.
                        </p>
                    </div>

                    {/* Methods Strip - Horizontal on desktop */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {methods.map((method, index) => (
                                <div key={index} className="text-center md:text-left">
                                    <div className="inline-flex items-center justify-center md:justify-start gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center">
                                            <method.icon className="w-5 h-5 text-[#1e3a8a]" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-slate-900">{method.name}</span>
                                            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{method.weight}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-500 md:pl-[52px]">{method.detail}</p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom note */}
                        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                            {/* Replace the existing bottom note paragraph with this */}
                            <p className="text-slate-600 text-sm">
                                Each method provides a different lens. We weight them based on business type and synthesize into{" "}
                                <span className="font-semibold text-slate-900">one clear, defensible value</span>.{" "}
                                <a
                                    href="/methodology"
                                    className="inline-flex items-center gap-1 text-[#1e3a8a] font-medium hover:underline"
                                >
                                    Learn more
                                    <ChevronRight className="w-3.5 h-3.5" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* ========== SECTION 2: Deliverables Showcase ========== */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-600 mb-4">
                            What You Get
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            Professional Deliverables.{" "}
                            <span className="text-[#1e3a8a]">Ready to Send.</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Every report is designed to make you look good and give your clients confidence.
                        </p>
                    </div>

                    {/* Two Column: Reports List + Key Benefits */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {/* Left: Reports List */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-slate-900">5 Reports Included</h3>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-[#1e3a8a]"></span>
                                        Essential
                                    </span>
                                    <span className="flex items-center gap-1.5 ml-3">
                                        <span className="w-2 h-2 rounded-full bg-[#f4a623]"></span>
                                        Exit Ready
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {reports.map((report, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                                    >
                                        <div className={`w-10 h-10 rounded-lg ${report.bgColor} flex items-center justify-center flex-shrink-0`}>
                                            <report.icon className={`w-5 h-5 ${report.color}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-semibold text-slate-900 text-sm">{report.title}</div>
                                            <div className="text-xs text-slate-500">{report.tagline}</div>
                                        </div>
                                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${report.package === "Essential" ? "bg-[#1e3a8a]" : "bg-[#f4a623]"}`}></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Key Benefits */}
                        <div className="bg-gradient-to-br from-[#1e3a8a] to-blue-900 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
                            {/* Decorative */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="relative">
                                <h3 className="font-bold text-xl mb-6">What Makes Our Reports Different</h3>

                                <div className="space-y-5">
                                    {[
                                        { title: "White-Label Ready", desc: "Your branding, your client relationship. We stay invisible." },
                                        { title: "Draft Review Included", desc: "Review before your client sees it. Request changes if needed." },
                                        { title: "24-Hour Delivery", desc: "Submit today, receive tomorrow. No waiting weeks." },
                                        { title: "Defensible Numbers", desc: "Clear methodology that holds up to buyer scrutiny." },
                                        { title: "Deal-Ready Formatting", desc: "Professional layouts that buyers and lenders expect." },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-emerald-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-sm">{item.title}</div>
                                                <div className="text-blue-200 text-sm">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ========== Sample Reports Preview (Visible by Default) ========== */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">Sample Reports</h3>
                                <p className="text-slate-600 text-sm mt-1">See exactly what your clients will receive</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {sampleReports.map((report) => (
                                <div
                                    key={report.id}
                                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                                >
                                    {/* Header */}
                                    <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                                                    {report.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm text-slate-900 leading-tight">{report.title}</h4>
                                                    <p className="text-xs text-slate-500">{report.pages}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-600 mt-2">{report.highlight}</p>
                                    </div>

                                    {/* Scrollable PDF Preview */}
                                    <div className="h-[350px] bg-slate-100 relative overflow-hidden">
                                        <iframe
                                            src={`${report.fileUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                                            className="w-full h-full absolute inset-0"
                                            title={`${report.title} Preview`}
                                            style={{ border: 'none' }}
                                        />
                                        {/* Fade overlay at bottom to hint scrollability */}
                                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
                                    </div>

                                    {/* Footer CTA */}
                                    <div className="p-4 bg-white border-t border-slate-100">
                                        <a
                                            href={report.fileUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 bg-[#1e3a8a] hover:bg-blue-900 text-white py-2.5 px-4 rounded-xl font-semibold text-sm transition-all group-hover:shadow-lg"
                                        >
                                            <Eye className="w-4 h-4" />
                                            View Full Report
                                            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                                        </a>
                                    </div>

                                    {/* Package Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${report.packageType === "Essential"
                                            ? "bg-[#1e3a8a] text-white"
                                            : "bg-[#f4a623] text-slate-900"
                                            }`}>
                                            {report.packageType}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Note */}
                        <div className="mt-8 bg-[#f4a623]/10 border border-[#f4a623]/20 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#f4a623]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FileSpreadsheet className="w-5 h-5 text-[#f4a623]" />
                                </div>
                                <div>
                                    <p className="text-slate-900 font-semibold text-sm">Want all 5 reports for your client?</p>
                                    <p className="text-slate-600 text-sm">
                                        Exit Ready includes CIM, Teaser, Enhancement Report — everything to go to market.
                                    </p>
                                </div>
                            </div>
                            <a
                                href="#pricing"
                                className="flex items-center gap-2 bg-[#f4a623] hover:bg-[#e09000] text-slate-900 py-2.5 px-5 rounded-xl font-bold text-sm transition-all whitespace-nowrap"
                            >
                                See Packages
                                <ChevronRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
