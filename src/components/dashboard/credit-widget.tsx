"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ChevronRight } from "lucide-react"
import Link from "next/link"

interface CreditWidgetProps {
    essentialCredits?: number
    exitReadyCredits?: number
}

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Info, FileText } from "lucide-react"

function ReportInfo({ title, description, sampleUrl }: { title: string, description: string, sampleUrl?: string }) {
    return (
        <div className="inline-flex items-center gap-2 align-middle">
            <span>{title}</span>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="text-slate-400 hover:text-blue-600 transition-colors focus:outline-none inline-flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 p-0.5">
                        <Info className="w-3.5 h-3.5" />
                        <span className="sr-only">Info</span>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-w-[300px] p-4 text-sm z-50" align="start" side="top">
                    <div className="space-y-3">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{description}</p>
                        {sampleUrl && (
                            <Button size="sm" variant="outline" className="w-full gap-2 h-8" onClick={(e) => {
                                e.preventDefault()
                                window.open(sampleUrl, '_blank')
                            }}>
                                <FileText className="w-3 h-3" />
                                View Sample Report
                            </Button>
                        )}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export function CreditWidget({ essentialCredits = 0, exitReadyCredits = 0 }: CreditWidgetProps) {
    const handleStartNew = (e: React.MouseEvent) => {
        e.preventDefault()
        if (typeof window !== 'undefined') {
            localStorage.removeItem("valuation_wizard_data")
            window.location.href = "/valuation/start"
        }
    }

    return (
        <div className="grid gap-6 md:grid-cols-2">
            {/* Essential Credits Card */}
            <Card className="border border-slate-200 shadow-sm bg-white dark:bg-slate-900 dark:border-slate-800">
                <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-base font-medium text-blue-600 dark:text-blue-400">
                        Essential Valuation Package
                    </CardTitle>
                    {essentialCredits > 0 ? (
                        <Link href="/valuation/start" onClick={handleStartNew}>
                            <Button className="bg-blue-600 text-white hover:bg-blue-700 h-9 px-4">
                                Use Package
                            </Button>
                        </Link>
                    ) : (
                        <Link href="/packages">
                            <Button className="bg-blue-600 text-white hover:bg-blue-700 h-9 px-4 gap-2">
                                <ShoppingCart className="w-4 h-4" />
                                Buy
                            </Button>
                        </Link>
                    )}
                </CardHeader>
                <CardContent>
                    <div className="mt-2">
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-slate-900 dark:text-white">{essentialCredits}</span>
                            <span className="text-slate-500 dark:text-slate-400 font-medium">Packages remaining</span>
                        </div>
                        <div className="mt-4 space-y-2">
                            <p className="text-sm font-medium text-slate-900 dark:text-white">What you get (2 Reports):</p>
                            <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc list-inside space-y-2">
                                <li>
                                    <ReportInfo
                                        title="Valuation Report"
                                        description="A business valuation report tells you what a company is worth today. It reviews financials, profitability, industry benchmarks, and key risks to calculate a fair market value. Use it to understand pricing, negotiate confidently, or make informed buying and selling decisions."
                                        sampleUrl="/samples/business-valuation-report.pdf"
                                    />
                                </li>
                                <li>
                                    <ReportInfo
                                        title="Red Flags Analysis"
                                        description="Identifies potential issues or concerns that could affect your business value or sale process. Allows you to address problems before they become deal-breakers."
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Exit Ready Credits Card */}
            <Card className="border border-slate-200 shadow-sm bg-white dark:bg-slate-900 dark:border-slate-800">
                <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-base font-medium text-[#1e3a8a] dark:text-blue-400">
                        Exit Ready Package
                    </CardTitle>
                    {exitReadyCredits > 0 ? (
                        <Link href="/valuation/start" onClick={handleStartNew}>
                            <Button className="bg-[#1e3a8a] text-white hover:bg-blue-950 dark:bg-white dark:text-slate-900 h-9 px-4">
                                Use Package
                            </Button>
                        </Link>
                    ) : (
                        <Link href="/packages">
                            <Button className="bg-[#1e3a8a] text-white hover:bg-blue-950 h-9 px-4 gap-2">
                                <ShoppingCart className="w-4 h-4" />
                                Buy
                            </Button>
                        </Link>
                    )}
                </CardHeader>
                <CardContent>
                    <div className="mt-2">
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-slate-900 dark:text-white">{exitReadyCredits}</span>
                            <span className="text-slate-500 dark:text-slate-400 font-medium">Packages remaining</span>
                        </div>
                        <div className="mt-4 space-y-2">
                            <p className="text-sm font-medium text-slate-900 dark:text-white">What you get (5 Reports):</p>
                            <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc list-inside space-y-2">
                                <li>Includes Essential Valuation Reports</li>
                                <li>
                                    <ReportInfo
                                        title="Confidential Information Memorandum (CIM)"
                                        description="A comprehensive document that provides detailed information about your business including financials, operations, market position, and growth opportunities. Essential for serious buyers conducting due diligence."
                                        sampleUrl="/samples/cim.pdf"
                                    />
                                </li>
                                <li>
                                    <ReportInfo
                                        title="Teaser"
                                        description="A concise one-page overview designed to attract qualified buyers without revealing sensitive information. Perfect for initial buyer outreach and generating interest."
                                        sampleUrl="/samples/business-teaser.pdf"
                                    />
                                </li>
                                <li>
                                    <ReportInfo
                                        title="Valuation Enhancement Report"
                                        description="Strategic recommendations to increase your business value before sale. Includes actionable insights on financial improvements, operational efficiencies, and market positioning."
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
