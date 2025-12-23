import { AlertTriangle, EyeOff, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BuyerRisks() {
    return (
        <section className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-['Playfair_Display'] serif">
                        Buying a business is exciting until you realize how much is at stake
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                        Without an accurate valuation, you're negotiating blind.
                    </p>
                </div>

                {/* Risk Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Card 1: Hidden Liabilities */}
                    <Card className="border-t-4 border-t-orange-500 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-slate-900">
                        <CardContent className="pt-8 p-6 space-y-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <AlertTriangle className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Hidden Liabilities</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Aggressive add-backs that inflate earnings and EBITDA, making the business look more profitable than it actually is.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 2: Missed Red Flags */}
                    <Card className="border-t-4 border-t-orange-500 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-slate-900">
                        <CardContent className="pt-8 p-6 space-y-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <EyeOff className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Missed Red Flags</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Hidden problems that traditional valuations miss: customer concentration, declining margins, operational risks.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 3: Overpaying */}
                    <Card className="border-t-4 border-t-orange-500 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-slate-900">
                        <CardContent className="pt-8 p-6 space-y-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Overpaying</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Without independent verification, you're relying on the seller's numbers to determine what's fair.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Newspaper Style Case Study */}
                <div className="bg-[#1e3a8a] rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                    <div className="relative z-10 grid md:grid-cols-[1fr_2fr] gap-12 items-center">
                        {/* Newspaper Clipping */}
                        <div className="relative">
                            <div
                                className="bg-[#f5f0e6] p-6 rounded shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
                                }}
                            >
                                {/* Torn edge effect at top */}
                                <div className="absolute -top-1 left-0 right-0 h-2 bg-[#f5f0e6]"
                                    style={{
                                        clipPath: "polygon(0% 100%, 2% 60%, 5% 100%, 8% 50%, 12% 100%, 15% 70%, 18% 100%, 22% 55%, 25% 100%, 28% 65%, 32% 100%, 35% 50%, 38% 100%, 42% 70%, 45% 100%, 48% 55%, 52% 100%, 55% 65%, 58% 100%, 62% 50%, 65% 100%, 68% 70%, 72% 100%, 75% 55%, 78% 100%, 82% 65%, 85% 100%, 88% 50%, 92% 100%, 95% 70%, 98% 100%, 100% 60%, 100% 100%)"
                                    }}
                                />

                                {/* Newspaper header */}
                                <div className="border-b-2 border-slate-800 pb-2 mb-3">
                                    <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Financial Times • October 2012</p>
                                </div>

                                {/* Headline */}
                                <h4 className="font-['Times_New_Roman',_'Playfair_Display',_serif] text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-3">
                                    HP Takes $5B Write-Down on Autonomy
                                </h4>

                                {/* Subheadline */}
                                <p className="text-sm text-slate-600 font-serif italic">
                                    Accounting irregularities missed during due diligence
                                </p>

                                {/* Big number overlay */}
                                <div className="mt-4 pt-3 border-t border-slate-300">
                                    <div className="font-['Playfair_Display'] text-5xl font-bold text-[#c41e3a] tracking-tight">
                                        $5B
                                    </div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                                        Write-Down
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                HP's due diligence team had every resource imaginable. They still missed it.
                            </h3>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                In 2011, HP acquired Autonomy for <span className="text-white font-semibold">$11.1 billion</span>. Within a year, they wrote down <span className="text-[#f4a623] font-semibold">$5 billion</span> due to accounting irregularities their due diligence failed to catch.
                            </p>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                If it can happen to them, it can happen to anyone.
                            </p>
                            <p className="text-white font-medium text-lg border-l-4 border-[#f4a623] pl-4">
                                You don't need a $10 billion team. You need one independent set of eyes on the numbers before you sign.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}