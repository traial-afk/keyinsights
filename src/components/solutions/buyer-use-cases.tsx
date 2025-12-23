import { CheckCircle2, AlertTriangle, ThumbsUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function BuyerUseCases() {
    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">
                        Real Results
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Playfair_Display'] serif">
                        How buyers use our valuations
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        See how independent valuations change the negotiation dynamic.
                    </p>
                </div>

                {/* Two Column Cases */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Use Case 1: The Inflated EBITDA */}
                    <Card className="bg-[#1e3a8a] border-0 shadow-xl overflow-hidden text-white">
                        <CardContent className="p-8 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">The Inflated EBITDA</h3>
                            </div>

                            <div className="bg-blue-900/50 rounded-xl p-5 mb-6 border border-blue-700/50 flex-grow">
                                <div className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">The Situation</div>
                                <p className="text-blue-100 leading-relaxed text-sm">
                                    A buyer was considering a service business listed at $850K. The seller's broker provided a valuation showing strong, consistent earnings. Our independent analysis revealed aggressive owner salary add-backs and one-time revenue that inflated EBITDA by 35%.
                                </p>
                            </div>

                            {/* Outcome - Visual Emphasis */}
                            <div className="bg-emerald-900/40 border border-emerald-500/30 rounded-xl p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-emerald-300 text-sm font-medium">Negotiated down from $850K to $680K</span>
                                </div>
                                <div className="text-4xl font-bold text-emerald-400">
                                    $170K saved
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Use Case 2: Hidden Revenue Problem */}
                    <Card className="bg-slate-900 border-0 shadow-xl overflow-hidden text-white">
                        <CardContent className="p-8 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <AlertTriangle className="w-6 h-6 text-orange-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">The Hidden Revenue Problem</h3>
                            </div>

                            <div className="bg-slate-800/80 rounded-xl p-5 mb-6 border border-slate-700/50 flex-grow">
                                <div className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">The Situation</div>
                                <p className="text-slate-300 leading-relaxed text-sm">
                                    Our Red Flags Analysis uncovered dangerous customer concentration: 62% of revenue came from just two clients, both with contracts expiring within 18 months. This represented significant risk the seller had minimized.
                                </p>
                            </div>

                            {/* Outcome - Visual Emphasis */}
                            <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-orange-300 text-sm font-medium">Price reduction + earnout tied to retention</span>
                                </div>
                                <div className="text-4xl font-bold text-orange-400">
                                    $200K protected
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Third Case - Confirmation (Different Style) */}
                <Card className="bg-slate-50 border border-slate-200 shadow-md overflow-hidden">
                    <CardContent className="p-8 md:p-10">
                        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                            <div className="flex items-center gap-4 md:w-auto">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <ThumbsUp className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 md:hidden">The Deal That Made Sense</h3>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 hidden md:block">The Deal That Made Sense</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    A first-time buyer was nervous about a $1.2M asking price for a manufacturing business. Our valuation confirmed the price was within 5% of fair market value, with no significant red flags. The buyer closed with confidence knowing they paid the right price, not hoping.
                                </p>
                            </div>

                            <div className="md:text-right md:flex-shrink-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l md:pl-10 border-slate-200">
                                <div className="text-sm text-slate-500 mb-1">Result</div>
                                <div className="text-2xl font-bold text-blue-600">Closed with confidence</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}