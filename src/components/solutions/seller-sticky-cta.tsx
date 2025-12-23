"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Clock, TrendingUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function SellerStickyCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (approx 600px)
            if (window.scrollY > 600) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] p-4 md:py-4"
                >
                    <div className="container mx-auto px-4 flex items-center justify-between gap-4 max-w-6xl">
                        <div className="hidden md:block">
                            <p className="font-bold text-slate-900 dark:text-white text-lg">
                                Don't leave money on the table
                            </p>
                            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                    24-hour delivery
                                </span>
                                <span className="flex items-center gap-1">
                                    <TrendingUp className="w-4 h-4 text-green-600" />
                                    Maximize your multiple
                                </span>
                                <span className="font-semibold text-slate-700 dark:text-slate-300">
                                    Starts at $399
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                            <div className="md:hidden">
                                <p className="font-bold text-slate-900 dark:text-white text-sm mr-auto">
                                    Maximize your exit
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    $399 · 24-hr delivery
                                </p>
                            </div>
                            <Link href="/valuation/start" className="ml-auto md:ml-0">
                                <Button className="bg-[#1e3a8a] hover:bg-[#172e6e] text-white rounded-full px-6 shadow-md shadow-blue-900/10">
                                    Get Business Valuation <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
