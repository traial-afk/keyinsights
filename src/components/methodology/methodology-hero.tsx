"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function MethodologyHero() {
    return (
        <section className="pt-32 pb-16 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge className="bg-[#1e3a8a]/10 text-[#1e3a8a] border-[#1e3a8a]/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1e3a8a]/10 mb-6">
                        Our Approach
                    </Badge>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900 mb-6 font-['Playfair_Display'] serif"
                >
                    How We{" "}
                    <span className="text-[#1e3a8a]">Value</span>{" "}
                    <span className="italic text-[#f4a623]">Businesses</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-4"
                >
                    Three proven approaches. One defensible number.{" "}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-slate-500 max-w-xl mx-auto leading-relaxed"
                >
                    No black boxes. No guesswork. Just transparent, rigorous methodology 
                    you can explain to your clients with confidence.
                </motion.p>
            </div>
        </section>
    )
}
