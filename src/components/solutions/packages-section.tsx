import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export function PackagesSection() {
    const features = [
        {
            title: '3 Proven Valuation Methods',
            description: 'DCF&Income Approach, Asset Approach, and Market Comparables synthesized into one defensible number',
        },
        {
            title: 'Red Flags Analysis',
            description: '15+ risk categories reviewed so nothing surprises you post-close',
        },
        {
            title: 'Market Comparables Benchmark',
            description: 'Your valuation tested against 100K+ actual transactions',
        },
        {
            title: '24-Hour Delivery',
            description: 'Keep your deal moving no weeks of waiting',
        },
        {
            title: 'Expert Consultation Included',
            description: 'Walk through findings with our team until you understand every number',
        },
        {
            title: 'SSVS No. 1 & USPAP Methodology',
            description: 'Professional-grade framework that holds up in negotiations',
        },
    ];

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
                        Know What It's Worth Before You Sign
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Everything you need to negotiate from strength
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="grid lg:grid-cols-5 gap-0">
                            {/* Price Column */}
                            <div className="lg:col-span-2 bg-gradient-to-br from-[#1e3a8a] to-blue-900 p-10 lg:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                                {/* Subtle accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16"></div>

                                <div className="relative">
                                    <div className="text-lg uppercase tracking-wide mb-4 text-blue-200 font-medium">
                                        Essential Valuation Package
                                    </div>
                                    <div className="mb-2">
                                        <span className="text-6xl lg:text-7xl font-bold">$399</span>
                                    </div>
                                    <p className="text-blue-200 mb-8">
                                        One-time payment
                                    </p>
                                    <Link href="/auth/signup?plan=essential-valuation" className="w-full">
                                        <button className="w-full bg-white text-[#1e3a8a] py-4 px-6 rounded-full inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-xl font-bold shadow-lg">
                                            Get Started
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </Link>

                                    {/* Value anchor */}
                                    <div className="mt-6 pt-6 border-t border-blue-700/50 text-center">
                                        <p className="text-blue-200 text-sm">
                                            <span className="text-white font-semibold">0.08%</span> of a $500K deal
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Features Column */}
                            <div className="lg:col-span-3 p-10 lg:p-12">
                                <div className="space-y-5">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-4 h-4 text-emerald-600" />
                                            </div>
                                            <div>
                                                <div className="text-slate-900 mb-0.5 font-semibold">{feature.title}</div>
                                                <div className="text-sm text-slate-500">{feature.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROI reminder */}
                    <div className="text-center mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
                        <p className="text-slate-300">
                            Our valuations routinely identify tens of thousands in adjustments. <span className="text-white font-medium">One correction pays for itself 50x over.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
