"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function Hero() {
    const handleStartNew = (e: React.MouseEvent) => {
        e.preventDefault()
        if (typeof window !== 'undefined') {
            localStorage.removeItem("valuation_wizard_data")
            window.location.href = "/valuation/start"
        }
    }

    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                        <span className="flex w-2 h-2 mr-2 bg-blue-600 rounded-full animate-pulse"></span>
                        AI-Powered Business Valuation
                    </div>

                    <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
                        Know Your Business Worth in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">24 Hours</span>
                    </h1>

                    <p className="max-w-2xl mx-auto mb-10 text-lg text-slate-600 dark:text-slate-300 md:text-xl">
                        Get a professional, analyst-reviewed valuation report.
                        Start with our free instant estimator or get the full certified report for brokers and sellers.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="/valuation/start" onClick={handleStartNew}>
                            <Button size="lg" className="h-12 px-8 text-lg font-semibold rounded-full shadow-lg shadow-blue-500/20">
                                Start Free Valuation
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="#how-it-works">
                            <Button variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full">
                                How it Works
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            Bank-Grade Security
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            Certified Analysts
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            Instant Preliminary Result
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-cyan-400 rounded-full blur-3xl opacity-20"></div>
            </div>
        </section>
    )
}
