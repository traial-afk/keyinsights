
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactUsDialog } from "@/components/shared/contact-us-dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Star, Zap, Shield, HelpCircle, ArrowRight, Building2, Globe, Headphones, Infinity, Clock } from "lucide-react"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Business Valuation Pricing - $399 to $549 | KeyInsightsAI",
    description: "Simple, transparent pricing for business valuations. Choose the plan that fits your needs: Essential, Exit-Ready, or Portfolio.",
}

import JsonLd from "@/components/json-ld"

export default function PricingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Product",
                "name": "Essential Valuation Package",
                "description": "Professional business valuation report and red flags analysis.",
                "image": "https://keyinsights.ai/og-image.png",
                "sku": "VAL-ESSENTIAL",
                "offers": {
                    "@type": "Offer",
                    "price": "399.00",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                }
            },
            {
                "@type": "Product",
                "name": "Exit Ready Valuation Package",
                "description": "Comprehensive valuation including CIM, Teaser, and Enhancement Roadmap.",
                "image": "https://keyinsights.ai/og-image.png",
                "sku": "VAL-EXITREADY",
                "offers": {
                    "@type": "Offer",
                    "price": "549.00",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What payment methods do you accept?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We accept all major credit cards (Visa, MasterCard, American Express, Discover) protected by Stripe's secure processing."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is my financial data secure?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We use bank-level 256-bit SSL encryption for all data transmission. We rely on Stripe for payment processing, meaning we never store your credit card information on our servers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I get an invoice for my records?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. You can download detailed PDF invoices for all transactions from the Billing section of your dashboard at any time."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens to my data after I pay?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We respect your data privacy. Your financial inputs are used solely for generating your valuation report. We do not share your data with third parties."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={jsonLd} />
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
                        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
                        <Badge variant="outline" className="border-blue-500/50 text-blue-300 px-4 py-1 mb-4">
                            Transparent Pricing
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                            Invest in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#f4a623]">Exit Strategy</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Professional, investor-grade valuation reports at a fraction of the cost of traditional firms. Delivered in 24 hours.
                        </p>
                    </div>
                </section>

                {/* Top Trust Badges */}
                <div className="bg-slate-50 dark:bg-slate-950 pt-16 pb-8">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 relative z-10 px-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#f4a623] text-white p-2 rounded-lg shadow-sm">
                                <Zap className="w-5 h-5 fill-current" />
                            </div>
                            <div className="text-left">
                                <p className="text-slate-900 dark:text-white font-bold text-base leading-tight">24-Hour</p>
                                <p className="text-slate-500 text-sm">Guaranteed Delivery</p>
                            </div>
                        </div>

                        <div className="hidden sm:block w-px h-10 bg-slate-200 dark:bg-slate-800" />

                        <div className="flex items-center gap-4">
                            <div className="bg-[#f4a623] text-white p-2 rounded-lg shadow-sm">
                                <Star className="w-5 h-5 fill-current" />
                            </div>
                            <div className="text-left">
                                <p className="text-slate-900 dark:text-white font-bold text-base leading-tight">4.9/5 Rating</p>
                                <p className="text-slate-500 text-sm">From 50+ Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards Section */}
                <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-8 items-start">

                            {/* Essential Plan */}
                            <Card className="flex flex-col border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 relative bg-white dark:bg-slate-900 h-full">
                                <CardHeader className="text-center pb-8 pt-8">
                                    <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">Essential</CardTitle>
                                    <div className="flex justify-center my-4">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$399</span>
                                        </div>
                                    </div>
                                    <CardDescription className="text-slate-500">
                                        For founders just starting to explore a potential sale.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-6">
                                    <div className="space-y-4">
                                        <p className="font-semibold text-sm text-slate-900 dark:text-white">Includes 2 Key Reports:</p>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <span className="block font-bold text-slate-900 dark:text-white">Business Valuation Report</span>
                                                    <span className="block text-slate-500 text-xs mt-0.5 leading-relaxed">
                                                        Your defensible price range with clear methodology
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <span className="block font-bold text-slate-900 dark:text-white">Red Flags Analysis</span>
                                                    <span className="block text-slate-500 text-xs mt-0.5 leading-relaxed">
                                                        Identify deal-killers before buyers do fix issues that tank valuations
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                                            <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-2 rounded-full flex items-center justify-center gap-2">
                                                <Clock className="w-3.5 h-3.5" />
                                                Delivered to your secured dashboard in 24 hours
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-4 pb-8">
                                    <Button className="w-full h-12 text-lg bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-50 transition-all font-semibold" asChild>
                                        <Link href="/auth/signup?plan=essential-valuation">
                                            Get Started
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Exit-Ready Plan (Highlight) */}
                            <Card className="flex flex-col border-[#f4a623] border-2 shadow-2xl hover:shadow-[0_20px_50px_rgba(244,166,35,0.15)] transition-all duration-300 relative bg-white dark:bg-slate-900 h-full transform scale-105 z-10 mt-4 lg:mt-0">
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#f4a623] text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg whitespace-nowrap z-20">
                                    Most Popular Choice
                                </div>
                                <CardHeader className="text-center pb-8 pt-12">
                                    <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white">Exit-Ready</CardTitle>
                                    <div className="flex justify-center my-4">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-5xl font-extrabold text-[#f4a623]">$549</span>
                                        </div>
                                    </div>
                                    <CardDescription className="text-slate-500 font-medium">
                                        For serious sellers preparing to go to market.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-6">
                                    <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-lg border border-orange-100 dark:border-orange-900/20">
                                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                            <Star className="w-4 h-4 text-[#f4a623] fill-current" />
                                            Best Value Package
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="font-semibold text-sm text-slate-900 dark:text-white">Includes 5 Comprehensive Reports:</p>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                <Check className="w-5 h-5 text-[#f4a623] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <span className="block font-bold text-slate-900 dark:text-white">Business Valuation Report</span>
                                                    <span className="block text-slate-500 text-xs mt-0.5 leading-relaxed">
                                                        Your defensible price range with clear methodology
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                <Check className="w-5 h-5 text-[#f4a623] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <span className="block font-bold text-slate-900 dark:text-white">Red Flags Analysis</span>
                                                    <span className="block text-slate-500 text-xs mt-0.5 leading-relaxed">
                                                        Identify deal-killers before buyers do fix issues that tank valuations
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                <Check className="w-5 h-5 text-[#f4a623] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <span className="block font-bold text-slate-900 dark:text-white">Confidential Information Memo</span>
                                                    <span className="block text-slate-500 text-xs mt-0.5 leading-relaxed">
                                                        The buyer-ready document that sells your story to investors
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                <Check className="w-5 h-5 text-[#f4a623] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <span className="block font-bold text-slate-900 dark:text-white">Professional Business Teaser</span>
                                                    <span className="block text-slate-500 text-xs mt-0.5 leading-relaxed">
                                                        Attract qualified buyers without revealing identity
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                <Check className="w-5 h-5 text-[#f4a623] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <span className="block font-bold text-slate-900 dark:text-white">Valuation Enhancement Roadmap</span>
                                                    <span className="block text-slate-500 text-xs mt-0.5 leading-relaxed">
                                                        Action plan to maximize your final sale price
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                                            <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-2 rounded-full flex items-center justify-center gap-2">
                                                <Clock className="w-3.5 h-3.5" />
                                                Delivered to your secured dashboard in 24 hours
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-4 pb-8">
                                    <Button className="w-full h-14 text-lg bg-[#f4a623] hover:bg-[#d99016] shadow-lg transition-all text-white font-bold" asChild>
                                        <Link href="/auth/signup?plan=exit-ready-valuation">
                                            Start Your Exit Journey
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Portfolio Plan */}
                            <Card className="flex flex-col border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 relative bg-white dark:bg-slate-900 h-full">
                                <CardHeader className="text-center pb-8 pt-8">
                                    <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">Portfolio</CardTitle>
                                    <div className="flex justify-center my-4">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$1,379</span>
                                        </div>
                                    </div>
                                    <CardDescription className="text-slate-500">
                                        For brokers, investors, and serial entrepreneurs.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-6">
                                    <div className="space-y-4">
                                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/30 text-center mb-6">
                                            <p className="text-emerald-700 dark:text-emerald-300 font-bold text-sm">Save $268 vs Individual Packages</p>
                                        </div>

                                        <div className="space-y-4">
                                            <p className="font-semibold text-sm text-slate-900 dark:text-white">3 Exit-Ready Packages • 15 Reports Included (5 per business)</p>
                                            <ul className="space-y-4">
                                                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                    <span className="block font-bold text-slate-900 dark:text-white">Business Valuation Report</span>
                                                </li>
                                                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                    <span className="block font-bold text-slate-900 dark:text-white">Red Flags Analysis</span>
                                                </li>
                                                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                    <span className="block font-bold text-slate-900 dark:text-white">Confidential Information Memorandum (CIM)</span>
                                                </li>
                                                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                    <span className="block font-bold text-slate-900 dark:text-white">Professional Business Teaser</span>
                                                </li>
                                                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                    <span className="block font-bold text-slate-900 dark:text-white">Valuation Enhancement Roadmap</span>
                                                </li>
                                            </ul>

                                            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                                                <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-2 rounded-full flex items-center justify-center gap-2">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    Delivered to your secured dashboard in 24 hours
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-4 pb-8">
                                    <Button className="w-full h-12 text-lg bg-slate-900 text-white hover:bg-slate-800 transition-all font-semibold" asChild>
                                        <Link href="/auth/signup?plan=portfolio-package">
                                            Get Portfolio Access
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                        </div>

                        {/* Trust Signals Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">256-bit SSL Encryption</h3>
                                <p className="text-sm text-slate-500">Your financial data is protected with bank-level security</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold text-indigo-600">S</span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Secure Stripe Payments</h3>
                                <p className="text-sm text-slate-500">Trusted payment processing used by millions of businesses</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                                <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">100% Satisfaction Guarantee</h3>
                                <p className="text-sm text-slate-500">Not satisfied? We'll make it right or refund your purchase</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                                <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-6 h-6 text-[#f4a623]" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">24-Hour Delivery Guarantee</h3>
                                <p className="text-sm text-slate-500">Your reports delivered within one business day guaranteed</p>
                            </div>
                        </div>

                        {/* Enterprise / Custom Section */}
                        <div className="mt-20">
                            <Card className="bg-[#1e3a8a] text-white border-0 shadow-2xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-12 opacity-10">
                                    <Building2 className="w-64 h-64" />
                                </div>
                                <div className="grid lg:grid-cols-2 gap-12 p-12 relative z-10 items-center">
                                    <div className="space-y-6">
                                        <Badge className="bg-blue-500/20 text-white hover:bg-blue-500/30 border-1 mb-2">Enterprise Solutions</Badge>
                                        <h2 className="text-3xl font-bold">Scaling M&A Operations?</h2>
                                        <p className="text-slate-300 text-lg leading-relaxed">
                                            We build custom valuation infrastructure for high-volume brokerage firms, marketplaces, and financial institutions.
                                            Get white-label reports and volume discounts.
                                        </p>
                                        <ContactUsDialog
                                            triggerText="Contact Sales"
                                            triggerClassName="bg-white text-blue-900 hover:bg-blue-50 font-bold h-11 px-8 rounded-md"
                                            defaultSubject="sales"
                                        />
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="bg-blue-900/40 p-4 rounded-xl backdrop-blur-sm border border-blue-500/20">
                                            <Globe className="w-8 h-8 text-blue-300 mb-3" />
                                            <h3 className="font-bold mb-1">White Labeling</h3>
                                            <p className="text-sm text-blue-200">Your logo on every report.</p>
                                        </div>
                                        <div className="bg-blue-900/40 p-4 rounded-xl backdrop-blur-sm border border-blue-500/20">
                                            <Infinity className="w-8 h-8 text-blue-300 mb-3" />
                                            <h3 className="font-bold mb-1">Unlimited Volume</h3>
                                            <p className="text-sm text-blue-200">Scalable pricing models.</p>
                                        </div>
                                        <div className="bg-blue-900/40 p-4 rounded-xl backdrop-blur-sm border border-blue-500/20">
                                            <Headphones className="w-8 h-8 text-blue-300 mb-3" />
                                            <h3 className="font-bold mb-1">VIP Support</h3>
                                            <p className="text-sm text-blue-200">Dedicated valuation experts.</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* FAQ Section */}
                        <div className="container mx-auto px-4 max-w-6xl mt-24 mb-12">
                            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
                                {/* Left Column - Header (Sticky on desktop) */}
                                <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
                                    <div>
                                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white font-['Playfair_Display'] serif mb-4">
                                            Frequently Asked Questions
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            Common questions about billing, security, and data privacy.
                                        </p>
                                    </div>

                                    {/* Contact CTA */}
                                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                                <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Billing question?</h4>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                                    Contact our support team directly.
                                                </p>
                                                <ContactUsDialog
                                                    triggerText="Contact Support"
                                                    triggerClassName="border-blue-600 text-white hover:bg-blue-50 w-full sm:w-auto text-sm"
                                                    defaultSubject="support"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Accordion */}
                                <div>
                                    <Accordion type="single" collapsible className="w-full space-y-3">
                                        <AccordionItem
                                            value="item-1"
                                            className="border border-slate-200 dark:border-slate-800 rounded-xl px-6 bg-white dark:bg-slate-900 hover:border-blue-200 dark:hover:border-blue-800 data-[state=open]:border-blue-200 dark:data-[state=open]:border-blue-800 data-[state=open]:bg-blue-50/30 dark:data-[state=open]:bg-blue-900/10 transition-all duration-200"
                                        >
                                            <AccordionTrigger className="text-left text-slate-900 dark:text-white font-semibold text-base py-5 hover:no-underline group">
                                                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-4">
                                                    What payment methods do you accept?
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed pb-6 text-[15px]">
                                                We accept all major credit cards (Visa, MasterCard, American Express, Discover) protected by Stripe's secure processing. For large enterprise or portfolio packages, we can also arrange invoice payment via wire transfer.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem
                                            value="item-2"
                                            className="border border-slate-200 dark:border-slate-800 rounded-xl px-6 bg-white dark:bg-slate-900 hover:border-blue-200 dark:hover:border-blue-800 data-[state=open]:border-blue-200 dark:data-[state=open]:border-blue-800 data-[state=open]:bg-blue-50/30 dark:data-[state=open]:bg-blue-900/10 transition-all duration-200"
                                        >
                                            <AccordionTrigger className="text-left text-slate-900 dark:text-white font-semibold text-base py-5 hover:no-underline group">
                                                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-4">
                                                    Is my financial data secure?
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed pb-6 text-[15px]">
                                                Yes. We use bank-level 256-bit SSL encryption for all data transmission. We rely on Stripe for payment processing, meaning we never store your credit card information on our servers. Your financial inputs for valuation are stored in a secure, encrypted database accessible only to you and the system.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem
                                            value="item-3"
                                            className="border border-slate-200 dark:border-slate-800 rounded-xl px-6 bg-white dark:bg-slate-900 hover:border-blue-200 dark:hover:border-blue-800 data-[state=open]:border-blue-200 dark:data-[state=open]:border-blue-800 data-[state=open]:bg-blue-50/30 dark:data-[state=open]:bg-blue-900/10 transition-all duration-200"
                                        >
                                            <AccordionTrigger className="text-left text-slate-900 dark:text-white font-semibold text-base py-5 hover:no-underline group">
                                                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-4">
                                                    Can I get an invoice for my records?
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed pb-6 text-[15px]">
                                                Absolutely. You will receive an automated receipt via email immediately after purchase. Additionally, you can download detailed PDF invoices for all transactions from the "Billing" section of your dashboard at any time.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem
                                            value="item-4"
                                            className="border border-slate-200 dark:border-slate-800 rounded-xl px-6 bg-white dark:bg-slate-900 hover:border-blue-200 dark:hover:border-blue-800 data-[state=open]:border-blue-200 dark:data-[state=open]:border-blue-800 data-[state=open]:bg-blue-50/30 dark:data-[state=open]:bg-blue-900/10 transition-all duration-200"
                                        >
                                            <AccordionTrigger className="text-left text-slate-900 dark:text-white font-semibold text-base py-5 hover:no-underline group">
                                                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-4">
                                                    What happens to my data after I pay?
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed pb-6 text-[15px]">
                                                We respect your data privacy. Your financial inputs are used solely for the purpose of generating your valuation report. We do not sell, share, or distribute your business data to third parties, brokers, or buyers without your explicit consent. You retain full ownership of your data.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="bg-slate-50 border-t border-slate-200 py-16">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to discover your true value?</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-[#1e3a8a] hover:bg-blue-800 text-lg px-8 py-6" asChild>
                                <Link href="/auth/signup">
                                    Get Started Now
                                </Link>
                            </Button>
                            <ContactUsDialog
                                triggerText="Talk to an Expert"
                                triggerClassName="border border-slate-200 text-[#1e3a8a] bg-white hover:bg-slate-100 hover:text-slate-900 text-lg px-8 py-6"
                                defaultSubject="question"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}
