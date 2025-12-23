"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Check, Download, FileText } from "lucide-react"
import { useState } from "react"

interface SampleReportDialogProps {
    trigger?: React.ReactNode
}

export function SampleReportDialog({ trigger }: SampleReportDialogProps) {
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleDownload = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSuccess(true)
            // In a real app, this would trigger the download
        }, 1500)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger || (
                    <Button variant="outline" className="gap-2">
                        <FileText className="w-4 h-4" />
                        View Sample Report
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[80vh] flex flex-col p-0 overflow-hidden bg-slate-50">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left Side: Preview */}
                    <div className="flex-1 bg-slate-200/50 p-6 overflow-y-auto relative hidden md:block">
                        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-200/50 to-transparent z-10" />

                        {/* Mock Report Pages */}
                        <div className="space-y-6 max-w-lg mx-auto pb-10">
                            {[1, 2, 3].map((page) => (
                                <div key={page} className="bg-white shadow-xl aspect-[8.5/11] rounded-sm relative overflow-hidden group">
                                    {/* Page Content Simulation */}
                                    <div className="p-8 space-y-4 opacity-50 blur-[0.5px] transition-all group-hover:blur-none group-hover:opacity-100">
                                        <div className="w-1/3 h-4 bg-slate-800 mb-8" />
                                        <div className="space-y-2">
                                            <div className="w-full h-2 bg-slate-200" />
                                            <div className="w-full h-2 bg-slate-200" />
                                            <div className="w-2/3 h-2 bg-slate-200" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-8">
                                            <div className="h-32 bg-blue-50 rounded" />
                                            <div className="h-32 bg-slate-50 rounded" />
                                        </div>
                                        <div className="space-y-2 mt-8">
                                            {[...Array(8)].map((_, i) => (
                                                <div key={i} className="w-full h-2 bg-slate-200" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Overlay Text */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="bg-slate-900/10 backdrop-blur-[1px] px-4 py-2 rounded-full text-slate-900 font-bold text-sm border border-slate-900/20">
                                            Page {page} Preview
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-200/50 to-transparent z-10" />
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full md:w-[400px] bg-white p-8 overflow-y-auto flex flex-col">
                        <DialogHeader className="mb-6">
                            <DialogTitle className="text-2xl font-bold text-slate-900">Get the Full Report</DialogTitle>
                            <DialogDescription>
                                See exactly what you'll get. Download our comprehensive 35-page sample valuation report.
                            </DialogDescription>
                        </DialogHeader>

                        {isSuccess ? (
                            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <Check className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Check your inbox!</h3>
                                <p className="text-slate-500">
                                    We've sent the sample report to <strong>{email}</strong>.
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-4"
                                    onClick={() => setIsSuccess(false)}
                                >
                                    Send to another email
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleDownload} className="space-y-6 flex-1 flex flex-col justify-center">
                                <div className="space-y-4">
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 space-y-3">
                                        <h4 className="font-semibold text-blue-900 text-sm">What's Inside:</h4>
                                        <ul className="space-y-2">
                                            {[
                                                "Executive Summary format",
                                                "4 Valuation Methodologies",
                                                "Red Flags Analysis example",
                                                "Market Benchmarking data"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-blue-700">
                                                    <Check className="w-3.5 h-3.5 text-blue-500" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-slate-700">
                                            Work Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="name@company.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-[#1e3a8a] hover:bg-blue-900 text-lg py-6"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            Download Sample PDF
                                            <Download className="w-5 h-5 ml-2" />
                                        </>
                                    )}
                                </Button>

                                <p className="text-xs text-center text-slate-400">
                                    By downloading, you agree to our Terms of Service and Privacy Policy.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
