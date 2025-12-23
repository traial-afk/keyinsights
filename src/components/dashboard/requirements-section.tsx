"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Building2, FileText, Users, Lightbulb, CheckCircle2, FileQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export function RequirementsSection() {
    const [isOpen, setIsOpen] = useState(false)

    const requirements = [
        {
            title: "About Your Business",
            icon: Building2,
            items: [
                "Business name and industry",
                "Years in operation",
                "Number of employees",
                "Business location(s)",
                "Your role & time commitment"
            ]
        },
        {
            title: "Financial Documents",
            icon: FileText,
            items: [
                "Profit & Loss statements (last 2-3 years)",
                "Current year P&L (year-to-date)",
                "Balance sheet (if available)",
                "Tax returns (optional but helpful)"
            ]
        },
        {
            title: "Operations & Context",
            icon: Users,
            items: [
                "Owner involvement level",
                "Key employees and their roles",
                "Customer concentration",
                "Revenue breakdown by service/product"
            ]
        },
        {
            title: "Helpful Extras",
            icon: Lightbulb,
            items: [
                "Growth plans or recent investments",
                "Lease terms (if applicable)",
                "Any pending contracts or opportunities",
                "Known issues or concerns"
            ]
        }
    ]

    return (
        <div className="w-full mt-6">
            <Button
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-100 hover:text-white hover:bg-blue-800/50 p-0 h-auto font-medium flex items-center gap-2 mb-4 group"
            >
                {isOpen ? "Hide Requirements" : "See what you'll need to get started"}
                {isOpen ? (
                    <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                ) : (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                )}
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-2">
                            <h4 className="text-lg font-semibold text-white mb-6">Here's what you'll need to get started:</h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                                {requirements.map((section, idx) => (
                                    <div key={idx} className="bg-white dark:bg-slate-950 rounded-lg p-5 shadow-sm">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-[#1e3a8a] dark:text-blue-400">
                                                <section.icon className="w-5 h-5" />
                                            </div>
                                            <h5 className="font-semibold text-slate-900 dark:text-white text-sm">
                                                {section.title}
                                            </h5>
                                        </div>
                                        <ul className="space-y-2.5">
                                            {section.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex items-start gap-3 bg-blue-50/10 border border-blue-100/20 rounded-lg p-4 text-blue-50 text-sm backdrop-blur-md">
                                <FileQuestion className="w-5 h-5 shrink-0 mt-0.5 text-blue-200" />
                                <p>
                                    Don't have everything? No problem. Start with what you have and we'll let you know if we need more specifics later.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
