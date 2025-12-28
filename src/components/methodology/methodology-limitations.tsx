"use client"

import { motion } from "framer-motion"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

const designedFor = [
    "Negotiation support for buyers and sellers",
    "Exit planning and preparation",
    "Deal structuring and due diligence",
    "Business planning and strategy",
    "Partner buyouts and internal transfers",
]

const notDesignedFor = [
    "Litigation or court-required valuations",
    "SBA 7(a) loan compliance",
    "ESOP or regulatory valuations",
    "Transactions over $10M requiring Big 4 sign-off",
    "Complex multi-entity corporate structures",
]

export function MethodologyLimitations() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="w-7 h-7 text-[#f4a623]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Playfair_Display'] serif mb-4">
                        Scope & Limitations
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We believe in transparency. Our valuations are designed for specific use cases—here's where we excel, 
                        and where you should consider alternatives.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Designed For */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-emerald-50 rounded-2xl p-6 md:p-8 border border-emerald-200"
                    >
                        <h3 className="font-bold text-lg text-emerald-800 mb-6 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Designed For
                        </h3>
                        <ul className="space-y-4">
                            {designedFor.map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.3 + 0.05 * index }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Not Designed For */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-slate-100 rounded-2xl p-6 md:p-8 border border-slate-200"
                    >
                        <h3 className="font-bold text-lg text-slate-700 mb-6 flex items-center gap-2">
                            <XCircle className="w-5 h-5" />
                            Not Designed For
                        </h3>
                        <ul className="space-y-4">
                            {notDesignedFor.map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.3 + 0.05 * index }}
                                    className="flex items-start gap-3"
                                >
                                    <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-10 text-center"
                >
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We're not trying to replace every valuation firm.{" "}
                        <span className="font-semibold text-[#1e3a8a]">
                            We're making professional valuations accessible for the 90% of transactions 
                            that don't need a six-week engagement.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
