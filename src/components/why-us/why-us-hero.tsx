"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function WhyUsHero() {
    return (
        <section className="pt-32 pb-16 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge className="bg-[#1e3a8a]/10 text-[#1e3a8a] border-[#1e3a8a]/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1e3a8a]/10 mb-6">
                        The KeyInsights Difference
                    </Badge>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900 mb-6 font-['Playfair_Display'] serif"
                >
                    Why{" "}
                    <span className="text-[#1e3a8a]">KeyInsights</span>
                    <span className="text-[#f4a623]">AI</span>?
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-4"
                >
                    Traditional business valuations take weeks and cost thousands.{" "}
                    <span className="font-semibold text-slate-900">We asked: why?</span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-slate-500 max-w-xl mx-auto leading-relaxed"
                >
                    We combine technology-enabled efficiency with expert verification to deliver 
                    professional valuations you can trust—without the wait or the premium price tag.
                </motion.p>
            </div>
        </section>
    )
}
