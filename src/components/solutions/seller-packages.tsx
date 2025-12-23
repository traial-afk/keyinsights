"use client"

import { ArrowRight, Check, FileText, Star } from 'lucide-react';

export function SellerPackages() {
    const essentialPackage = {
        name: "Essential Valuation Package",
        price: "$399",
        priceNote: "One-time payment",
        recommended: false,
        bestFor: "Sellers wanting to know their value before engaging brokers",
        reports: [
            "Business Valuation Report",
            "Red Flags Analysis",
        ],
        features: [
            "4 Proven Valuation Methods",
            "Market Comparables Benchmark",
            "24-Hour Delivery",
            "Expert Consultation Included",
            "SSVS No. 1 & USPAP Methodology",
        ],
    };

    const exitReadyPackage = {
        name: "Exit Ready Package",
        price: "$549",
        priceNote: "One-time payment",
        recommended: true,
        bestFor: "Sellers ready to go to market now, or preparing to exit in 6-12 months and wanting to maximize value first",
        reports: [
            "Business Valuation Report",
            "Red Flags Analysis",
            "Business Teaser",
            "Confidential Information Memorandum (CIM)",
            "Valuation Enhancement Report",
        ],
        features: [
            "4 Proven Valuation Methods",
            "Market Comparables Benchmark",
            "24-Hour Delivery",
            "Expert Consultation Included",
            "SSVS No. 1 & USPAP Methodology",
        ],
    };

    return (
        <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-slate-900 via-slate-900 to-[#1e3a8a] text-white relative overflow-hidden">
            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] opacity-10"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[120px] opacity-10"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="text-emerald-400 mb-4 tracking-widest uppercase text-sm font-bold">Pricing</div>
                    <h2 className="text-4xl md:text-5xl mb-4 font-['Playfair_Display'] font-bold">
                        Know Your Number Before You Negotiate
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Everything you need to negotiate from strength
                    </p>
                </div>

                {/* Two Package Cards */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
                    {/* Essential Package */}
                    <div className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-xl flex flex-col">
                        {/* Header */}
                        <div className="bg-slate-800 p-8 lg:p-10 text-white">
                            <div className="text-sm uppercase tracking-wide mb-3 text-slate-400 font-medium">
                                {essentialPackage.name}
                            </div>
                            <div className="mb-1">
                                <span className="text-5xl lg:text-6xl font-bold">{essentialPackage.price}</span>
                            </div>
                            <p className="text-slate-400 mb-6">
                                {essentialPackage.priceNote}
                            </p>
                            <a href="/auth/signup?plan=essential-valuation" className="w-full bg-white text-slate-800 py-4 px-6 rounded-full inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-xl font-bold shadow-lg">
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Features */}
                        <div className="p-8 lg:p-10 flex-1 flex flex-col">
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
                                            <span className="text-slate-900 font-medium">{report}</span>
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
                            Recommended
                        </div>

                        {/* Header */}
                        <div className="bg-gradient-to-br from-[#1e3a8a] to-blue-900 p-8 lg:p-10 text-white relative overflow-hidden">
                            {/* Subtle accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16"></div>

                            <div className="relative">
                                <div className="text-sm uppercase tracking-wide mb-3 text-blue-200 font-medium">
                                    {exitReadyPackage.name}
                                </div>
                                <div className="mb-1">
                                    <span className="text-5xl lg:text-6xl font-bold">{exitReadyPackage.price}</span>
                                </div>
                                <p className="text-blue-200 mb-6">
                                    {exitReadyPackage.priceNote}
                                </p>
                                <a href="/auth/signup?plan=exit-ready-valuation" className="w-full bg-[#f4a623] text-slate-900 py-4 px-6 rounded-full inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-xl font-bold shadow-lg">
                                    Get Started
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="p-8 lg:p-10 flex-1 flex flex-col">
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
                                            <span className="text-slate-900 font-medium">{report}</span>
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
                </div>

                {/* ROI reminder */}
                <div className="text-center mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-3xl mx-auto">
                    <p className="text-slate-300">
                        75% of sellers regret their sale. <span className="text-white font-medium">$399 to make sure you won't.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}