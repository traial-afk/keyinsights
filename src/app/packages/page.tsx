import { SiteFooter } from "@/components/site-footer"
import { Check, Sparkles, ArrowLeft, Clock, FileText, ShieldAlert, Briefcase, TrendingUp, Layers, Zap, Lock, Info, Building2, Headphones, Infinity, Globe } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Select Package - KeyInsightsAI",
    description: "Choose the right valuation package for your business needs. Essential, Exit-Ready, and Portfolio options available.",
}

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"
import { ContactSupportDialog } from "@/components/dashboard/contact-support-dialog"
import { ReportInfo } from "@/components/report-info"

export default async function PackagesPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
                <Card className="w-full max-w-md text-center p-6 shadow-lg">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                            <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Login Required</h1>
                    <p className="text-muted-foreground mb-6">
                        Please log in to view our valuation plans and packages.
                    </p>
                    <div className="space-y-3">
                        <Button className="w-full" asChild>
                            <Link href="/auth">
                                Log In / Sign Up
                            </Link>
                        </Button>
                        <Button variant="ghost" className="w-full" asChild>
                            <Link href="/">
                                Return Home
                            </Link>
                        </Button>
                    </div>
                </Card>
            </div>
        )
    }

    const getPaymentLink = (baseUrl: string) => {
        const params = new URLSearchParams()
        params.append('locked_prefilled_email', user.email || '')
        params.append('client_reference_id', user.id)
        return `${baseUrl}?${params.toString()}`
    }

    const essentialLink = getPaymentLink('https://buy.stripe.com/test_cNi5kFeepcORbCGbCN7bW0a')
    const exitReadyLink = getPaymentLink('https://buy.stripe.com/test_eVq4gB3zL5mpcGK7mx7bW0b')
    const portfolioLink = getPaymentLink('https://buy.stripe.com/test_6oUfZjfitbKN6im9uF7bW0c')

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="flex justify-center mb-6">
                        <Link href="/dashboard">
                            <Button variant="ghost" className="gap-2 text-muted-foreground">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Dashboard
                            </Button>
                        </Link>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        Choose Your Valuation Plan
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Professional valuation reports tailored to your business stage.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto items-stretch">

                    {/* Essential Valuation */}
                    <Card className="flex flex-col border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <CardHeader className="text-center pb-2">
                            <CardTitle className="text-2xl font-bold text-[#1e3a8a] dark:text-blue-400">Essential Valuation</CardTitle>
                            <div className="flex justify-center mt-2">
                                <Badge variant="secondary" className="bg-blue-100 text-[#1e3a8a] hover:bg-blue-100">2 Professional Reports</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-6">
                            <div className="text-center space-y-1">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-5xl font-extrabold text-[#1e3a8a] dark:text-white">$399</span>
                                </div>
                                <p className="text-xs text-muted-foreground">Traditional firms charge $3,000+</p>
                            </div>

                            <div className="space-y-4">
                                <p className="font-semibold text-sm text-slate-900 dark:text-white">What You Get (2 Reports):</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm">
                                        <Check className="w-4 h-4 text-[#1e3a8a] mt-1 flex-shrink-0" />
                                        <ReportInfo
                                            title="Business Valuation Report"
                                            description="A business valuation report tells you what a company is worth today. It reviews financials, profitability, industry benchmarks, and key risks to calculate a fair market value."
                                            sampleUrl="/samples/business-valuation-report.pdf"
                                        />
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <Check className="w-4 h-4 text-[#1e3a8a] mt-1 flex-shrink-0" />
                                        <ReportInfo
                                            title="Red Flags Analysis"
                                            description="Identifies potential issues or concerns that could affect your business value or sale process."
                                        />
                                    </li>
                                </ul>

                                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg space-y-2 border border-slate-100 dark:border-slate-800">
                                    <p className="text-xs font-bold text-slate-900 dark:text-white">Ideal For:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <Check className="w-3 h-3 text-[#1e3a8a] mt-0.5 flex-shrink-0" />
                                            <span><strong>First-Time Founders</strong> — You've built something but never had it professionally valued</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <Check className="w-3 h-3 text-[#1e3a8a] mt-0.5 flex-shrink-0" />
                                            <span><strong>Exploratory Sellers</strong> — Curious what your business is worth before making any decisions</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <Check className="w-3 h-3 text-[#1e3a8a] mt-0.5 flex-shrink-0" />
                                            <span><strong>Search fund operators or Buyers Checking a Price</strong> — Want independent validation before submitting an offer</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 justify-center pt-2">
                                    <Clock className="w-4 h-4 text-[#1e3a8a]" />
                                    <span className="font-medium">24-Hour Delivery</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-4 pb-8">
                            <Button className="w-full h-12 text-lg bg-[#1e3a8a] hover:bg-blue-800 shadow-md transition-all" asChild>
                                <Link href={essentialLink}>
                                    Go Essential
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Exit-Ready Package */}
                    <Card className="flex flex-col border-[#f4a623] border-2 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden bg-white dark:bg-slate-950 h-full transform scale-105 z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#f4a623] text-white px-6 py-1.5 rounded-b-lg text-xs font-bold tracking-wide uppercase shadow-sm">
                            Most Popular
                        </div>
                        <CardHeader className="text-center pb-2 pt-10">
                            <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">Exit-Ready Package</CardTitle>
                            <div className="flex justify-center mt-2">
                                <Badge className="bg-[#f4a623] hover:bg-[#d99016] text-white">5 Professional Documents</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-6">
                            <div className="text-center space-y-1">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-5xl font-extrabold text-[#f4a623]">$549</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="font-semibold text-sm text-slate-900 dark:text-white">All 5 Documents (Essential + 3 More):</p>

                                <div className="bg-orange-50 dark:bg-orange-900/10 p-3 rounded-lg border border-orange-100 dark:border-orange-900/20 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-[#f4a623]" />
                                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Includes 2 Essential Reports</span>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm">
                                        <Check className="w-4 h-4 text-[#f4a623] mt-1 flex-shrink-0" />
                                        <ReportInfo
                                            title="Confidential Information Memorandum (CIM)"
                                            description="Professional 10+ page document showcasing your business to potential buyers or investors."
                                            sampleUrl="/samples/cim.pdf"
                                        />
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <Check className="w-4 h-4 text-[#f4a623] mt-1 flex-shrink-0" />
                                        <ReportInfo
                                            title="Professional Business Teaser"
                                            description="1-2 page executive summary to generate initial buyer interest while maintaining confidentiality."
                                            sampleUrl="/samples/business-teaser.pdf"
                                        />
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <Check className="w-4 h-4 text-[#f4a623] mt-1 flex-shrink-0" />
                                        <ReportInfo
                                            title="Valuation Enhancement Report"
                                            description="Step-by-step roadmap to increase your business value by 20-40% before exit."
                                        />
                                    </li>
                                </ul>

                                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg space-y-2 border border-slate-100 dark:border-slate-800">
                                    <p className="text-xs font-bold text-slate-900 dark:text-white">Ideal For:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <Check className="w-3 h-3 text-[#f4a623] mt-0.5 flex-shrink-0" />
                                            <span><strong>Serious Sellers</strong> — You're going to market within the next 6–18 months</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <Check className="w-3 h-3 text-[#f4a623] mt-0.5 flex-shrink-0" />
                                            <span><strong>Raising Capital</strong> — Need polished documents to share with investors or PE firms</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <Check className="w-3 h-3 text-[#f4a623] mt-0.5 flex-shrink-0" />
                                            <span><strong>Value Maximizers</strong> — Want a clear roadmap to boost your valuation before exit</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <Check className="w-3 h-3 text-[#f4a623] mt-0.5 flex-shrink-0" />
                                            <span><strong>Intermediaries</strong> — Brokers or M&A advisors representing a seller and needing the full professional package</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 justify-center pt-2">
                                    <Clock className="w-4 h-4 text-[#f4a623]" />
                                    <span className="font-medium">24-Hour Delivery</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-4 pb-8">
                            <Button className="w-full h-12 text-lg bg-[#f4a623] hover:bg-[#d99016] shadow-md transition-all text-white" asChild>
                                <Link href={exitReadyLink}>
                                    Go Exit-Ready
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Portfolio Package */}
                    <Card className="flex flex-col border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <CardHeader className="text-center pb-2">
                            <CardTitle className="text-2xl font-bold text-[#1e3a8a] dark:text-blue-400">Portfolio Package</CardTitle>
                            <div className="flex justify-center mt-2">
                                <Badge variant="secondary" className="bg-blue-100 text-[#1e3a8a] hover:bg-blue-100">15 Reports Total (5 per business)</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-6">
                            <div className="text-center space-y-1">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-5xl font-extrabold text-[#1e3a8a] dark:text-white">$1,379</span>
                                    <span className="text-sm text-muted-foreground">for 3 businesses</span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">$459 per business (regularly $549)</p>
                            </div>

                            <div className="space-y-4">
                                <p className="font-semibold text-sm text-slate-900 dark:text-white">Each Business Gets All 5 Documents:</p>

                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm">
                                        <Check className="w-4 h-4 text-[#1e3a8a] mt-1 flex-shrink-0" />
                                        <ReportInfo
                                            title="Business Valuation Report"
                                            description="Complete 11-section analysis including executive summary, 3-year financial analysis, market positioning, growth opportunities, and final valuation."
                                        />
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <Check className="w-4 h-4 text-[#1e3a8a] mt-1 flex-shrink-0" />
                                        <ReportInfo
                                            title="Red Flags Analysis"
                                            description="Comprehensive risk assessment identifying critical issues that could impact your business value with mitigation strategies."
                                        />
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <Check className="w-4 h-4 text-[#1e3a8a] mt-1 flex-shrink-0" />
                                        <ReportInfo
                                            title="Confidential Information Memorandum (CIM)"
                                            description="Professional 10+ page document showcasing your business to potential buyers or investors."
                                        />
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <Check className="w-4 h-4 text-[#1e3a8a] mt-1 flex-shrink-0" />
                                        <ReportInfo
                                            title="Professional Business Teaser"
                                            description="1-2 page executive summary to generate initial buyer interest while maintaining confidentiality."
                                        />
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <Check className="w-4 h-4 text-[#1e3a8a] mt-1 flex-shrink-0" />
                                        <ReportInfo
                                            title="Valuation Enhancement Report"
                                            description="Step-by-step roadmap to increase your business value by 20-40% before exit."
                                        />
                                    </li>
                                </ul>

                                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg space-y-2 border border-slate-100 dark:border-slate-800">
                                    <p className="text-xs font-bold text-slate-900 dark:text-white">Ideal For:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <Check className="w-3 h-3 text-[#1e3a8a] mt-0.5 flex-shrink-0" />
                                            <span><strong>Serial Entrepreneurs</strong> — Own several businesses and want a unified portfolio view</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <Check className="w-3 h-3 text-[#1e3a8a] mt-0.5 flex-shrink-0" />
                                            <span><strong>Brokerage Firms</strong> — Serve multiple clients and need volume pricing with priority turnaround</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <Check className="w-3 h-3 text-[#1e3a8a] mt-0.5 flex-shrink-0" />
                                            <span><strong>Buy-Side Advisors</strong> — Screening opportunities for clients using standardized methodology</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <Check className="w-3 h-3 text-[#1e3a8a] mt-0.5 flex-shrink-0" />
                                            <span><strong>Family Offices</strong> — Managing small business investments and need portfolio-level reporting</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <Check className="w-3 h-3 text-[#1e3a8a] mt-0.5 flex-shrink-0" />
                                            <span><strong>Corporate development teams</strong> — Evaluating tuck-in acquisitions and needing quick, standardized analysis</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 justify-center pt-2">
                                    <Clock className="w-4 h-4 text-[#1e3a8a]" />
                                    <span className="font-medium">24-Hour Delivery</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-4 pb-8">
                            <Button className="w-full h-12 text-lg bg-[#1e3a8a] hover:bg-blue-800 shadow-md transition-all" asChild>
                                <Link href={portfolioLink}>
                                    Get Portfolio
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>

                </div>

                {/* Enterprise Section */}
                <div className="max-w-7xl mx-auto">
                    <Card className="bg-[#1e3a8a] text-white border-0 shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Building2 className="w-64 h-64" />
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 relative z-10 items-center">
                            <div className="space-y-6">
                                <div>
                                    <Badge className="bg-blue-500/20 text-white hover:bg-blue-500/30 border-1 mb-4">Enterprise</Badge>
                                    <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
                                    <p className="text-slate-300 text-lg">
                                        Tailored valuation infrastructure for high-volume firms, marketplaces, and financial institutions.
                                    </p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                            <Globe className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">White Labeling</h3>
                                            <p className="text-sm text-slate-400">Your brand, our engine. Fully customizable reports.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                            <Infinity className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Unlimited Valuations</h3>
                                            <p className="text-sm text-slate-400">Volume-based pricing for scaling operations.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                            <Headphones className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Dedicated Support</h3>
                                            <p className="text-sm text-slate-400">Priority access to our valuation experts.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                            <Zap className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Urgent Valuations</h3>
                                            <p className="text-sm text-slate-400">Expedited processing for time-sensitive deals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center lg:border-l border-slate-800 lg:pl-12 space-y-6">
                                <div className="text-center space-y-2">
                                    <h3 className="text-xl font-semibold">Let's build something together</h3>
                                    <p className="text-slate-400 text-sm max-w-sm mx-auto">
                                        Contact our sales team to discuss your specific requirements and get a custom quote.
                                    </p>
                                </div>
                                <ContactSupportDialog
                                    userEmail={user.email || ''}
                                    triggerClassName="bg-white text-slate-900 hover:bg-slate-100 w-full sm:w-auto px-8 py-6 text-lg font-semibold"
                                />
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Trust Section */}
                <div className="text-center pt-8 pb-8">
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <ShieldAlert className="w-4 h-4" />
                        Secure payments processed by Stripe.
                    </p>
                </div>
            </div>
            <SiteFooter />
        </div>
    )
}
