import { ShieldCheck, Search, FileText, BarChart3, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BuyerSolution() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-['Playfair_Display'] serif max-w-4xl mx-auto leading-tight">
                        Our independent valuation reports reveal what a business is actually worth <span className="text-[#1e3a8a]">before you sign anything</span>
                    </h2>

                    {/* 24-Hour Delivery Highlight */}
                    <div className="flex items-center justify-center gap-2 text-[#1e3a8a] dark:text-blue-400 font-medium text-lg bg-blue-50/50 dark:bg-blue-900/20 py-2 px-6 rounded-full w-fit mx-auto border border-blue-100 dark:border-blue-900">
                        <Clock className="w-5 h-5" />
                        <span>Delivered to your dashboard in 24 hours</span>
                    </div>
                </div>

                {/* Solution Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Card 1: Negotiate from Strength */}
                    <Card className="border-0 shadow-lg bg-white dark:bg-slate-800 overflow-hidden group hover:shadow-xl transition-all">
                        <CardContent className="p-8 flex items-start gap-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-6 h-6 text-[#1e3a8a] dark:text-blue-400" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Negotiate from Strength</h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    A <span className="bg-blue-100 text-[#1e3a8a] px-1.5 py-0.5 rounded font-semibold text-sm">50K EBITDA correction</span> at a 4x multiple means <strong>$200K</strong> in negotiating leverage. Walk into every conversation knowing exactly what the business is worth.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 2: Identify Hidden Problems */}
                    <Card className="border-0 shadow-lg bg-white dark:bg-slate-800 overflow-hidden group hover:shadow-xl transition-all">
                        <CardContent className="p-8 flex items-start gap-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Search className="w-6 h-6 text-[#1e3a8a] dark:text-blue-400" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Identify Hidden Problems</h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Catch what the seller isn't telling you customer concentration, declining margins, revenue quality issues, operational risks. Our <span className="bg-blue-100 text-[#1e3a8a] px-1.5 py-0.5 rounded font-semibold text-sm">Red Flags Analysis</span> covers 15+ risk categories so nothing surprises you post-close.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 3: SBA-Compliant Methodology */}
                    <Card className="border-0 shadow-lg bg-white dark:bg-slate-800 overflow-hidden group hover:shadow-xl transition-all">
                        <CardContent className="p-8 flex items-start gap-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <BarChart3 className="w-6 h-6 text-[#1e3a8a] dark:text-blue-400" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">See How the Price Compares</h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Your valuation is benchmarked against <span className="bg-blue-100 text-[#1e3a8a] px-1.5 py-0.5 rounded font-semibold text-sm">100,000 real transactions</span> in our database. You'll know instantly if you're paying market rate or overpaying.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 4: 100K+ Market Comparables */}
                    <Card className="border-0 shadow-lg bg-white dark:bg-slate-800 overflow-hidden group hover:shadow-xl transition-all">
                        <CardContent className="p-8 flex items-start gap-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <FileText className="w-6 h-6 text-[#1e3a8a] dark:text-blue-400" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Methodology You Can Defend</h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Four proven valuation methods following <span className="bg-blue-100 text-[#1e3a8a] px-1.5 py-0.5 rounded font-semibold text-sm">SSVS No. 1 and USPAP guidelines</span>. The same rigorous framework used by professional analysts. Numbers that hold up in negotiations, not just on paper.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
