"use client"

import { ArrowRight, Check, FileText, Star, Package, Building2 } from "lucide-react"

export function AdvisorPricing() {
    const essentialPackage = {
        name: "Essential",
        price: "$399",
        priceNote: "Per report",
        recommended: false,
        bestFor: "One-off client needs, deal screening, quick sanity checks",
        reports: [
            "Business Valuation Report",
            "Red Flags Analysis"
        ],
        features: [
            "3 Proven Valuation Methods",
            "Market Comparables Benchmark",
            "24-Hour Delivery",
            "Consulation Call Included"
        ]
    }

    const exitReadyPackage = {
        name: "Exit Ready",
        price: "$549",
        priceNote: "Per report",
        recommended: true,
        bestFor: "Active deal support, client deliverables, listing packages",
        reports: [
            "Business Valuation Report",
            "Red Flags Analysis",
            "Business Teaser",
            "Confidential Information Memorandum (CIM)",
            "Valuation Enhancement Report"
        ],
        features: [
            "3 Proven Valuation Methods",
            "Market Comparables Benchmark",
            "24-Hour Delivery",
            "Consulation Call Included"
        ]
    }

    const portfolioPackage = {
        name: "Portfolio",
        price: "$1,379",
        priceNote: "3 Exit Ready reports",
        savings: "Save $268",
        perReport: "$460 per report",
        recommended: false,
        bestFor: "Active brokers, M&A advisors with ongoing deal flow",
        reports: [
            "3× Exit Ready Packages",
            "All 5 Reports Per Deal"
        ],
        features: [
            "Priority 24-Hour Turnaround",
            "Dedicated Advisor Success Contact",
            "Use Anytime Within 12 Months",
        ]
    }

    return (
        <section id="pricing" className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")`
                }}
            />

            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] opacity-10"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[120px] opacity-10"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-semibold text-emerald-400 mb-6">
                        Pricing
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Pricing That{" "}
                        <span className="text-[#f4a623]">Works for You</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Professional valuations your clients trust. Reports that close deals.
                    </p>
                </div>

                {/* Three Package Cards */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Essential Package */}
                    <div className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-xl flex flex-col">
                        {/* Header */}
                        <div className="bg-slate-800 p-6 lg:p-8 text-white">
                            <div className="text-sm uppercase tracking-wide mb-3 text-slate-400 font-medium">
                                {essentialPackage.name}
                            </div>
                            <div className="mb-1">
                                <span className="text-4xl lg:text-5xl font-bold">{essentialPackage.price}</span>
                            </div>
                            <p className="text-slate-400 mb-6">
                                {essentialPackage.priceNote}
                            </p>
                            <a href="/auth/signup?plan=essential-valuation" className="w-full bg-white text-slate-800 py-3 px-6 rounded-full inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-xl font-bold shadow-lg text-sm">
                                Get Started
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Features */}
                        <div className="p-6 lg:p-8 flex-1 flex flex-col">
                            {/* Reports */}
                            <div className="mb-6">
                                <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    Reports Included
                                </div>
                                <div className="space-y-3">
                                    {essentialPackage.reports.map((report, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-5 h-5 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-slate-900 font-medium text-sm">{report}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-slate-200 my-6"></div>

                            {/* Also Includes */}
                            <div className="mb-6 flex-1">
                                <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
                                    Also Includes
                                </div>
                                <div className="space-y-3">
                                    {essentialPackage.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-emerald-600" />
                                            </div>
                                            <span className="text-slate-600 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Best For */}
                            <div className="bg-slate-50 rounded-xl p-4 mt-auto">
                                <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">
                                    Best For
                                </div>
                                <p className="text-slate-700 text-sm">
                                    {essentialPackage.bestFor}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Exit Ready Package (Recommended) */}
                    <div className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col relative ring-2 ring-[#f4a623]">
                        {/* Recommended Badge */}
                        <div className="absolute top-0 right-0 bg-[#f4a623] text-slate-900 px-4 py-1.5 rounded-bl-xl font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg z-10">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            Popular
                        </div>

                        {/* Header */}
                        <div className="bg-[#1e3a8a] p-6 lg:p-8 text-white relative overflow-hidden">
                            {/* Subtle accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16"></div>

                            <div className="relative">
                                <div className="text-sm uppercase tracking-wide mb-3 text-blue-200 font-medium">
                                    {exitReadyPackage.name}
                                </div>
                                <div className="mb-1">
                                    <span className="text-4xl lg:text-5xl font-bold">{exitReadyPackage.price}</span>
                                </div>
                                <p className="text-blue-200 mb-6">
                                    {exitReadyPackage.priceNote}
                                </p>
                                <a href="/auth/signup?plan=exit-ready-valuation" className="w-full bg-[#f4a623] text-slate-900 py-3 px-6 rounded-full inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-xl font-bold shadow-lg text-sm">
                                    Get Started
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="p-6 lg:p-8 flex-1 flex flex-col">
                            {/* Reports */}
                            <div className="mb-6">
                                <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    Reports Included
                                </div>
                                <div className="space-y-3">
                                    {exitReadyPackage.reports.map((report, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-5 h-5 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-slate-900 font-medium text-sm">{report}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-slate-200 my-6"></div>

                            {/* Also Includes */}
                            <div className="mb-6 flex-1">
                                <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
                                    Also Includes
                                </div>
                                <div className="space-y-3">
                                    {exitReadyPackage.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-emerald-600" />
                                            </div>
                                            <span className="text-slate-600 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Best For */}
                            <div className="bg-blue-50 rounded-xl p-4 mt-auto border border-blue-100">
                                <div className="text-xs uppercase tracking-wider text-[#1e3a8a] font-bold mb-1">
                                    Best For
                                </div>
                                <p className="text-slate-700 text-sm">
                                    {exitReadyPackage.bestFor}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Package */}
                    <div className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-xl flex flex-col">
                        {/* Header */}
                        <div className="bg-slate-800 p-6 lg:p-8 text-white">
                            <div className="text-sm uppercase tracking-wide mb-3 text-slate-400 font-medium">
                                {portfolioPackage.name}
                            </div>
                            <div className="mb-1 flex items-baseline gap-3">
                                <span className="text-4xl lg:text-5xl font-bold">{portfolioPackage.price}</span>
                                <span className="text-emerald-400 text-sm font-semibold">{portfolioPackage.savings}</span>
                            </div>
                            <p className="text-slate-400 mb-1">
                                {portfolioPackage.priceNote}
                            </p>
                            <p className="text-emerald-400 text-sm font-medium mb-6">
                                {portfolioPackage.perReport}
                            </p>
                            <a href="/auth/signup?plan=portfolio-package" className="w-full bg-white text-slate-800 py-3 px-6 rounded-full inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-xl font-bold shadow-lg text-sm">
                                Get Portfolio
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Features */}
                        <div className="p-6 lg:p-8 flex-1 flex flex-col">
                            {/* Reports */}
                            <div className="mb-6">
                                <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-2">
                                    <Package className="w-4 h-4" />
                                    What's Included
                                </div>
                                <div className="space-y-3">
                                    {portfolioPackage.reports.map((report, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-5 h-5 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-slate-900 font-medium text-sm">{report}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-slate-200 my-6"></div>

                            {/* Also Includes */}
                            <div className="mb-6 flex-1">
                                <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
                                    Also Includes
                                </div>
                                <div className="space-y-3">
                                    {portfolioPackage.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-emerald-600" />
                                            </div>
                                            <span className="text-slate-600 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Best For */}
                            <div className="bg-slate-50 rounded-xl p-4 mt-auto">
                                <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">
                                    Best For
                                </div>
                                <p className="text-slate-700 text-sm">
                                    {portfolioPackage.bestFor}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enterprise / White-Label CTA */}
                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
                        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-[#f4a623]/20 rounded-2xl flex items-center justify-center">
                                    <Building2 className="w-8 h-8 text-[#f4a623]" />
                                </div>
                            </div>
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Need White-Label or Enterprise Solutions?
                                </h3>
                                <p className="text-slate-400">
                                    Full white-label programs, custom report formats, and dedicated account management for high-volume brokerages and PE firms.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <button className="bg-white text-slate-900 py-3 px-8 rounded-full inline-flex items-center gap-2 transition-all hover:scale-105 hover:shadow-xl font-bold">
                                    Contact Us
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
