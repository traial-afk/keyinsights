"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Tag } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function HomeStickyCTA() {
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
                                Professional valuations starting at $399
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                24-hour delivery. Industry Standard Methodology.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                            <div className="md:hidden mr-auto">
                                <p className="font-bold text-slate-900 dark:text-white text-sm">
                                    Valuations from $399
                                </p>
                            </div>

                            <Link href="/pricing">
                                <Button variant="outline" className="rounded-full border-slate-300 text-slate-700 hover:bg-slate-50">
                                    <Tag className="mr-2 h-4 w-4" />
                                    View Pricing
                                </Button>
                            </Link>

                            <Link href="/auth/signup">
                                <Button className="bg-[#1e3a8a] hover:bg-[#172e6e] text-white rounded-full px-6 shadow-md shadow-blue-900/10">
                                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
