"use client"

import { motion } from "framer-motion"
import { AlertCircle, Scale, Building, Landmark, FileWarning } from "lucide-react"

const notRightFitItems = [
    {
        icon: Scale,
        text: "Litigation or court-required valuations",
    },
    {
        icon: Building,
        text: "Complex multi-entity corporate structures",
    },
    {
        icon: Landmark,
        text: "Transactions over $10M+ requiring Big 4 sign-off",
    },
    {
        icon: FileWarning,
        text: "Regulatory compliance valuations (SBA 7(a), ESOP, etc.)",
    },
]

export function WhyUsNotRightFit() {
    return (
        <section className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200"
                >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                            <AlertCircle className="w-6 h-6 text-[#f4a623]" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-['Playfair_Display'] serif">
                                When We're <span className="italic">Not</span> the Right Fit
                            </h2>
                            <p className="text-slate-600 mt-1">
                                Transparency builds trust. Here's when you should look elsewhere.
                            </p>
                        </div>
                    </div>

                    {/* Items */}
                    <div className="space-y-4 mb-8">
                        {notRightFitItems.map((item, index) => (
                            <motion.div
                                key={item.text}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                                className="flex items-center gap-3 text-slate-600"
                            >
                                <item.icon className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                <span>{item.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Statement */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="pt-6 border-t border-slate-100"
                    >
                        <p className="text-slate-700 leading-relaxed">
                            We're not trying to replace every valuation firm.{" "}
                            <span className="font-semibold text-[#1e3a8a]">
                                We're making professional valuations accessible for the 90% of transactions 
                                that don't need a six-week engagement.
                            </span>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
