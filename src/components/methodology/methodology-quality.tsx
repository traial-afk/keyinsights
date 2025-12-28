"use client"

import { motion } from "framer-motion"
import { Shield, Users, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const qualitySteps = [
    {
        icon: Users,
        title: "Multi-Analyst Review",
        description: "Every valuation is reviewed by multiple analysts working in parallel—not a single person in a queue.",
    },
    {
        icon: AlertTriangle,
        title: "Red Flag Identification",
        description: "We systematically identify risks, inconsistencies, and issues that could affect value or negotiations.",
    },
    {
        icon: CheckCircle2,
        title: "Expert Verification",
        description: "Final review ensures methodology is applied correctly and conclusions are defensible.",
    },
]

export function MethodologyQuality() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-100 mb-6">
                        Quality Assurance
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Playfair_Display'] serif mb-4">
                        Fast Doesn't Mean{" "}
                        <span className="text-[#1e3a8a]">Rushed</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Every report undergoes rigorous review before delivery. 
                        Here's how we maintain quality while delivering in 24 hours.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {qualitySteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all"
                        >
                            <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                                <step.icon className="w-7 h-7 text-emerald-600" />
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Trust badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-10 flex justify-center"
                >
                    <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 border border-slate-200 shadow-sm">
                        <Shield className="w-5 h-5 text-emerald-500" />
                        <span className="text-slate-600 text-sm">
                            <span className="font-semibold text-slate-900">100,000+</span> transactions in our database
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
