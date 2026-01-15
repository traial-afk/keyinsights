"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut, Search, ShieldCheck, ChevronDown } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

import { SampleReportDialog } from "@/components/shared/sample-report-dialog"
import { BookOpen, FileText, HelpCircle, Phone } from "lucide-react"

import { CallSalesButton } from "@/components/shared/call-sales-button"

export function SiteHeader() {
    const handleStartNew = (e: React.MouseEvent) => {
        e.preventDefault()
        if (typeof window !== 'undefined') {
            localStorage.removeItem("valuation_wizard_data")
            window.location.href = "/valuation/start"
        }
    }

    const pathname = usePathname()

    const getPricingLink = () => {
        if (pathname === '/buyer' || pathname === '/selling' || pathname === '/advisor') {
            return '#pricing'
        }
        return '/pricing'
    }

    const getProcessLink = () => {
        if (pathname === '/' || pathname === '/buyer' || pathname === '/selling' || pathname === '/advisor') {
            return '#how-it-works'
        }
        return '/#how-it-works'
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/80 backdrop-blur-md border-slate-200 dark:bg-slate-950/80 dark:border-slate-800" suppressHydrationWarning>
            {/* Top Bar - optional if we want it super separated, but for now putting inside nav structure */}
            <div className="container flex items-center justify-between h-16 px-4 mx-auto">
                <Link href="/" className="flex items-center gap-2 text-3xl text-[#1e3a8a] dark:text-white">
                    <Image
                        src="/favicon.png.png"
                        alt="KeyInsightsAI Logo"
                        width={48}
                        height={48}
                        className="rounded-lg"
                    />
                    <span className="font-['Norwester'] tracking-wide text-2xl">KeyInsights AI</span>
                </Link>

                <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 hover:text-blue-600 transition-colors focus:outline-none">
                            Solutions <ChevronDown className="w-4 h-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-64 p-2">
                            <DropdownMenuItem asChild>
                                <Link href="/buyer" className="flex items-start gap-3 p-2 cursor-pointer">
                                    <div className="p-1.5 bg-orange-100 rounded-md text-orange-600">
                                        <Search className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-slate-900">Buying a business</div>
                                        <div className="text-xs text-slate-500">For investors & acquirers</div>
                                    </div>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/selling" className="flex items-start gap-3 p-2 cursor-pointer">
                                    <div className="p-1.5 bg-blue-100 rounded-md text-blue-600">
                                        <LogOut className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-slate-900">Selling my business</div>
                                        <div className="text-xs text-slate-500">For founders & owners</div>
                                    </div>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/advisor" className="flex items-start gap-3 p-2 cursor-pointer">
                                    <div className="p-1.5 bg-purple-100 rounded-md text-purple-600">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-slate-900">Representing clients</div>
                                        <div className="text-xs text-slate-500">For brokers & advisors</div>
                                    </div>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link href={getProcessLink()} className="hover:text-blue-600 transition-colors">How it Works</Link>
                    <Link href={getPricingLink()} className="hover:text-blue-600 transition-colors">Pricing</Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 hover:text-blue-600 transition-colors focus:outline-none">
                            Resources <ChevronDown className="w-4 h-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-64 p-2">
                            <DropdownMenuItem asChild>
                                <Link href="/why-us" className="flex items-start gap-3 p-2 cursor-pointer">
                                    <div className="p-1.5 bg-emerald-100 rounded-md text-emerald-600">
                                        <HelpCircle className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-slate-900">Why KeyInsights?</div>
                                        <div className="text-xs text-slate-500">Our advantage explained</div>
                                    </div>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/blog" className="flex items-start gap-3 p-2 cursor-pointer">
                                    <div className="p-1.5 bg-indigo-100 rounded-md text-indigo-600">
                                        <BookOpen className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-slate-900">Blog & Guides</div>
                                        <div className="text-xs text-slate-500">Expert insights & resources</div>
                                    </div>
                                </Link>
                            </DropdownMenuItem>
                            <div className="h-px bg-slate-100 my-1" />
                            {/*<DropdownMenuItem asChild>
                                <SampleReportDialog
                                    trigger={
                                        <div className="flex items-start gap-3 p-2 cursor-pointer w-full">
                                            <div className="p-1.5 bg-amber-100 rounded-md text-amber-600">
                                                <FileText className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-slate-900">Sample Report</div>
                                                <div className="text-xs text-slate-500">See what you'll receive</div>
                                            </div>
                                        </div>
                                    }
                                />
                            </DropdownMenuItem>*/}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>

                <div className="flex items-center gap-2 xl:gap-3">
                    <Link href="/auth/login" className="hidden sm:flex">
                        <Button variant="ghost">Log in</Button>
                    </Link>

                    <Link href="/estimate" className="hidden sm:flex">
                        <Button variant="outline">Free Estimate</Button>
                    </Link>

                    <Link href="/auth/signup" className="hidden sm:flex">
                        <Button>Get Started</Button>
                    </Link>

                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-slate-900 dark:text-white">
                                    <Menu className="w-6 h-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 overflow-y-auto">
                                <SheetHeader className="mb-8 text-left">
                                    <SheetTitle className="flex items-center gap-2 text-xl font-bold text-[#1e3a8a]">
                                        <Image
                                            src="/favicon.png.png"
                                            alt="Logo"
                                            width={32}
                                            height={32}
                                            className="rounded-lg"
                                        />
                                        KeyInsights AI
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="flex flex-col gap-6">
                                    <div className="space-y-4">
                                        <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Solutions</div>
                                        <Link href="/buyer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="p-2 bg-orange-100 rounded-md text-orange-600">
                                                <Search className="w-4 h-4" />
                                            </div>
                                            <span className="font-medium text-slate-900">Buying a business</span>
                                        </Link>
                                        <Link href="/selling" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="p-2 bg-blue-100 rounded-md text-blue-600">
                                                <LogOut className="w-4 h-4" />
                                            </div>
                                            <span className="font-medium text-slate-900">Selling my business</span>
                                        </Link>
                                        <Link href="/advisor" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="p-2 bg-purple-100 rounded-md text-purple-600">
                                                <ShieldCheck className="w-4 h-4" />
                                            </div>
                                            <span className="font-medium text-slate-900">Representing clients</span>
                                        </Link>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Company</div>
                                        <Link href={getProcessLink()} className="block text-slate-700 hover:text-blue-600 font-medium py-2">How it Works</Link>
                                        <Link href={getPricingLink()} className="block text-slate-700 hover:text-blue-600 font-medium py-2">Pricing</Link>

                                        {/* Mobile Resources Group */}
                                        <div className="pt-2">
                                            <div className="text-xs font-medium text-slate-400 mb-2">RESOURCES</div>
                                            <Link href="/why-us" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium py-2">
                                                <HelpCircle className="w-4 h-4" />
                                                Why Us
                                            </Link>
                                            <Link href="/blog" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium py-2">
                                                <BookOpen className="w-4 h-4" />
                                                Blog
                                            </Link>
                                            <div className="py-2">
                                                <SampleReportDialog
                                                    trigger={
                                                        <button className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium w-full text-left">
                                                            <FileText className="w-4 h-4" />
                                                            View Sample Report
                                                        </button>
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 mt-2 border-t border-slate-100 space-y-4">
                                        <Link href="/auth/login" className="block w-full">
                                            <Button variant="ghost" className="w-full justify-start">Log in</Button>
                                        </Link>
                                        <Link href="/estimate" className="block w-full">
                                            <Button variant="outline" className="w-full">Free Estimate</Button>
                                        </Link>
                                        <Link href="/auth/signup" className="block w-full">
                                            <Button className="w-full">Get Started</Button>
                                        </Link>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
