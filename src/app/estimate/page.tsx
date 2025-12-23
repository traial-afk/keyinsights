"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, TrendingUp, DollarSign, Building2, Clock, Users, BarChart3, RefreshCw, Calendar, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// ============================================
// INDUSTRY DATA WITH MULTIPLES
// ============================================
const industryGroups = [
    {
        group: "Food & Hospitality",
        options: [
            { value: "restaurant", label: "Restaurant", sdeMultiple: 2.13, ebitdaMultiple: 3.5 },
            { value: "coffee_shop", label: "Coffee Shop / Cafe", sdeMultiple: 2.19, ebitdaMultiple: 3.5 },
            { value: "bar_pub", label: "Bar / Pub / Tavern", sdeMultiple: 2.69, ebitdaMultiple: 4.0 },
            { value: "bakery", label: "Bakery", sdeMultiple: 2.32, ebitdaMultiple: 3.5 },
            { value: "food_truck", label: "Food Truck", sdeMultiple: 1.61, ebitdaMultiple: 2.5 },
        ]
    },
    {
        group: "Professional Services",
        options: [
            { value: "accounting", label: "Accounting / Tax Practice", sdeMultiple: 2.16, ebitdaMultiple: 4.0 },
            { value: "insurance", label: "Insurance Agency", sdeMultiple: 2.85, ebitdaMultiple: 5.0 },
            { value: "legal", label: "Law Firm / Legal Services", sdeMultiple: 2.01, ebitdaMultiple: 3.5 },
            { value: "consulting", label: "Consulting", sdeMultiple: 2.55, ebitdaMultiple: 4.5 },
            { value: "staffing", label: "Staffing Agency", sdeMultiple: 2.78, ebitdaMultiple: 4.5 },
        ]
    },
    {
        group: "Healthcare & Fitness",
        options: [
            { value: "dental", label: "Dental Practice", sdeMultiple: 2.49, ebitdaMultiple: 5.0 },
            { value: "medical", label: "Medical Practice", sdeMultiple: 2.34, ebitdaMultiple: 5.0 },
            { value: "gym_fitness", label: "Gym / Fitness Center", sdeMultiple: 2.51, ebitdaMultiple: 4.0 },
            { value: "home_health", label: "Home Health Care", sdeMultiple: 3.04, ebitdaMultiple: 5.5 },
            { value: "assisted_living", label: "Assisted Living / Senior Care", sdeMultiple: 4.38, ebitdaMultiple: 6.5 },
        ]
    },
    {
        group: "Construction & Trades",
        options: [
            { value: "hvac", label: "HVAC", sdeMultiple: 2.72, ebitdaMultiple: 4.5 },
            { value: "plumbing", label: "Plumbing", sdeMultiple: 2.45, ebitdaMultiple: 4.0 },
            { value: "electrical", label: "Electrical Contracting", sdeMultiple: 2.60, ebitdaMultiple: 4.5 },
            { value: "construction", label: "General Construction", sdeMultiple: 2.68, ebitdaMultiple: 4.5 },
            { value: "landscaping", label: "Landscaping", sdeMultiple: 2.42, ebitdaMultiple: 4.0 },
            { value: "roofing", label: "Roofing", sdeMultiple: 2.55, ebitdaMultiple: 4.0 },
        ]
    },
    {
        group: "Technology & Online",
        options: [
            { value: "software_saas", label: "Software / SaaS", sdeMultiple: 3.27, ebitdaMultiple: 7.0 },
            { value: "ecommerce", label: "E-commerce", sdeMultiple: 3.31, ebitdaMultiple: 5.5 },
            { value: "it_services", label: "IT Services / MSP", sdeMultiple: 3.10, ebitdaMultiple: 5.5 },
            { value: "digital_agency", label: "Digital Marketing Agency", sdeMultiple: 2.86, ebitdaMultiple: 5.0 },
        ]
    },
    {
        group: "Retail",
        options: [
            { value: "convenience", label: "Convenience Store", sdeMultiple: 2.34, ebitdaMultiple: 3.5 },
            { value: "liquor", label: "Liquor Store", sdeMultiple: 3.26, ebitdaMultiple: 4.5 },
            { value: "specialty_retail", label: "Specialty Retail", sdeMultiple: 2.59, ebitdaMultiple: 4.0 },
            { value: "grocery", label: "Grocery Store", sdeMultiple: 2.61, ebitdaMultiple: 3.5 },
        ]
    },
    {
        group: "Automotive",
        options: [
            { value: "auto_repair", label: "Auto Repair / Service", sdeMultiple: 2.82, ebitdaMultiple: 4.5 },
            { value: "car_wash", label: "Car Wash", sdeMultiple: 4.94, ebitdaMultiple: 6.0 },
            { value: "dealership", label: "Car Dealership", sdeMultiple: 3.11, ebitdaMultiple: 4.5 },
            { value: "towing", label: "Towing Company", sdeMultiple: 3.27, ebitdaMultiple: 4.5 },
        ]
    },
    {
        group: "Manufacturing & Distribution",
        options: [
            { value: "manufacturing", label: "Manufacturing", sdeMultiple: 3.01, ebitdaMultiple: 5.0 },
            { value: "machine_shop", label: "Machine Shop", sdeMultiple: 3.41, ebitdaMultiple: 5.5 },
            { value: "wholesale", label: "Wholesale / Distribution", sdeMultiple: 2.84, ebitdaMultiple: 4.5 },
        ]
    },
    {
        group: "Service Businesses",
        options: [
            { value: "cleaning", label: "Cleaning / Janitorial", sdeMultiple: 2.16, ebitdaMultiple: 3.5 },
            { value: "laundromat", label: "Laundromat", sdeMultiple: 3.56, ebitdaMultiple: 5.0 },
            { value: "pest_control", label: "Pest Control", sdeMultiple: 2.43, ebitdaMultiple: 4.5 },
            { value: "security", label: "Security Services", sdeMultiple: 2.69, ebitdaMultiple: 4.5 },
            { value: "property_mgmt", label: "Property Management", sdeMultiple: 2.71, ebitdaMultiple: 4.5 },
        ]
    },
    {
        group: "Other",
        options: [
            { value: "daycare", label: "Day Care / Child Care", sdeMultiple: 3.34, ebitdaMultiple: 5.0 },
            { value: "pet_services", label: "Pet Services", sdeMultiple: 2.52, ebitdaMultiple: 4.0 },
            { value: "trucking", label: "Trucking / Transportation", sdeMultiple: 3.04, ebitdaMultiple: 4.5 },
            { value: "storage", label: "Storage Facility", sdeMultiple: 3.12, ebitdaMultiple: 5.0 },
            { value: "salon", label: "Hair Salon / Barber", sdeMultiple: 2.01, ebitdaMultiple: 3.0 },
            { value: "other", label: "Other", sdeMultiple: 2.53, ebitdaMultiple: 4.0 },
        ]
    }
]

// ============================================
// OPTION DATA FOR QUESTIONS
// ============================================
const revenueOptions = [
    { value: "under_250k", label: "Under $250,000", midpoint: 175000 },
    { value: "250k_500k", label: "$250,000 - $500,000", midpoint: 375000 },
    { value: "500k_1m", label: "$500,000 - $1,000,000", midpoint: 750000 },
    { value: "1m_2m", label: "$1,000,000 - $2,000,000", midpoint: 1500000 },
    { value: "2m_5m", label: "$2,000,000 - $5,000,000", midpoint: 3500000 },
    { value: "5m_10m", label: "$5,000,000 - $10,000,000", midpoint: 7500000 },
    { value: "10m_plus", label: "$10,000,000+", midpoint: 15000000 },
]

const profitMarginOptions = [
    { value: "negative", label: "Losing money", margin: -0.05 },
    { value: "breakeven", label: "Break-even", margin: 0.02 },
    { value: "under_5", label: "Under 5%", margin: 0.03 },
    { value: "5_10", label: "5% - 10%", margin: 0.075 },
    { value: "10_15", label: "10% - 15%", margin: 0.125 },
    { value: "15_20", label: "15% - 20%", margin: 0.175 },
    { value: "20_30", label: "20% - 30%", margin: 0.25 },
    { value: "30_plus", label: "30%+", margin: 0.35 },
]

const ownerCompOptions = [
    { value: "under_50k", label: "Under $50,000", midpoint: 35000 },
    { value: "50k_75k", label: "$50,000 - $75,000", midpoint: 62500 },
    { value: "75k_100k", label: "$75,000 - $100,000", midpoint: 87500 },
    { value: "100k_150k", label: "$100,000 - $150,000", midpoint: 125000 },
    { value: "150k_200k", label: "$150,000 - $200,000", midpoint: 175000 },
    { value: "200k_plus", label: "$200,000+", midpoint: 250000 },
]

const ownerInvolvementOptions = [
    { value: "full_time_critical", label: "Full-time & critical to operations", adjustment: -0.3 },
    { value: "full_time", label: "Full-time (40+ hours/week)", adjustment: -0.15 },
    { value: "part_time", label: "Part-time (20-40 hours/week)", adjustment: 0 },
    { value: "minimal", label: "Minimal (under 20 hours/week)", adjustment: 0.2 },
    { value: "absentee", label: "Absentee (managers run it)", adjustment: 0.4 },
]

const yearsInBusinessOptions = [
    { value: "under_2", label: "Less than 2 years", adjustment: -0.3 },
    { value: "2_5", label: "2 - 5 years", adjustment: -0.1 },
    { value: "5_10", label: "5 - 10 years", adjustment: 0 },
    { value: "10_20", label: "10 - 20 years", adjustment: 0.15 },
    { value: "20_plus", label: "20+ years", adjustment: 0.25 },
]

const revenueTrendOptions = [
    { value: "declining_fast", label: "Declining significantly (>10%/year)", adjustment: -0.4 },
    { value: "declining_slow", label: "Declining slightly", adjustment: -0.2 },
    { value: "stable", label: "Stable", adjustment: 0 },
    { value: "growing_slow", label: "Growing 5-15%/year", adjustment: 0.2 },
    { value: "growing_fast", label: "Growing 15%+/year", adjustment: 0.4 },
]

const customerConcentrationOptions = [
    { value: "very_high", label: "Top customer is >50% of revenue", adjustment: -0.4 },
    { value: "high", label: "Top customer is 25-50% of revenue", adjustment: -0.25 },
    { value: "moderate", label: "Top 3 customers are 25-50% of revenue", adjustment: -0.1 },
    { value: "diverse", label: "No customer is more than 10%", adjustment: 0.1 },
]

const recurringRevenueOptions = [
    { value: "none", label: "0% - No recurring revenue", adjustment: 0 },
    { value: "some", label: "1-25% recurring", adjustment: 0.1 },
    { value: "moderate", label: "25-50% recurring", adjustment: 0.25 },
    { value: "majority", label: "50-75% recurring", adjustment: 0.4 },
    { value: "subscription", label: "75%+ recurring/subscription", adjustment: 0.6 },
]

const timelineOptions = [
    { value: "asap", label: "As soon as possible" },
    { value: "6_months", label: "Within 6 months" },
    { value: "1_year", label: "Within 1 year" },
    { value: "1_3_years", label: "1-3 years" },
    { value: "exploring", label: "Just exploring options" },
]

// ============================================
// STEP DEFINITIONS
// ============================================
interface Step {
    id: number
    title: string
    description: string
    field: string
    type: "select" | "grouped-select" | "input"
    options?: { value: string; label: string }[]
    groups?: typeof industryGroups
    placeholder?: string
    icon?: React.ComponentType<{ className?: string }>
    conditional?: (data: Record<string, string>) => boolean
}

const steps: Step[] = [
    {
        id: 1,
        title: "Industry",
        description: "What industry does your business operate in?",
        field: "industry",
        type: "grouped-select",
        groups: industryGroups,
        icon: Building2,
    },
    {
        id: 2,
        title: "Annual Revenue",
        description: "What was your total revenue over the last 12 months?",
        field: "revenue",
        type: "select",
        options: revenueOptions,
        icon: DollarSign,
    },
    {
        id: 3,
        title: "Profit Margin",
        description: "What's your approximate net profit margin?",
        field: "profitMargin",
        type: "select",
        options: profitMarginOptions,
        icon: BarChart3,
    },
    {
        id: 4,
        title: "Owner Compensation",
        description: "What's the total owner salary/compensation taken from the business?",
        field: "ownerCompensation",
        type: "select",
        options: ownerCompOptions,
        icon: DollarSign,
        conditional: (data) => {
            const rev = revenueOptions.find(r => r.value === data.revenue)
            return !rev || rev.midpoint < 2000000
        }
    },
    {
        id: 5,
        title: "Owner Involvement",
        description: "How involved is the owner in day-to-day operations?",
        field: "ownerInvolvement",
        type: "select",
        options: ownerInvolvementOptions,
        icon: Users,
    },
    {
        id: 6,
        title: "Years in Business",
        description: "How long has the business been operating?",
        field: "yearsInBusiness",
        type: "select",
        options: yearsInBusinessOptions,
        icon: Clock,
    },
    {
        id: 7,
        title: "Revenue Trend",
        description: "How has revenue changed over the last 3 years?",
        field: "revenueTrend",
        type: "select",
        options: revenueTrendOptions,
        icon: TrendingUp,
    },
    {
        id: 8,
        title: "Customer Concentration",
        description: "How dependent are you on your largest customers?",
        field: "customerConcentration",
        type: "select",
        options: customerConcentrationOptions,
        icon: Users,
    },
    {
        id: 9,
        title: "Recurring Revenue",
        description: "What percentage of revenue is recurring or subscription-based?",
        field: "recurringRevenue",
        type: "select",
        options: recurringRevenueOptions,
        icon: BarChart3,
    },
    {
        id: 10,
        title: "Timeline",
        description: "When are you considering selling or exiting?",
        field: "timeline",
        type: "select",
        options: timelineOptions,
        icon: Clock,
    },
]

// ============================================
// VALUATION CALCULATION
// ============================================
interface ValuationResult {
    low: number
    mid: number
    high: number
    method: "SDE" | "EBITDA"
    multiple: number
    earnings: number
    factors: {
        label: string
        impact: "positive" | "negative" | "neutral"
    }[]
}

function calculateValuation(data: Record<string, string>): ValuationResult | null {
    const revenueInfo = revenueOptions.find(r => r.value === data.revenue)
    if (!revenueInfo) return null

    let industryData = null
    for (const group of industryGroups) {
        const found = group.options.find(opt => opt.value === data.industry)
        if (found) {
            industryData = found
            break
        }
    }
    if (!industryData) return null

    const revenue = revenueInfo.midpoint
    const useSDE = revenue < 2000000

    const profitInfo = profitMarginOptions.find(p => p.value === data.profitMargin)
    const profitMargin = profitInfo?.margin || 0.1

    let earnings: number
    let baseMultiple: number

    if (useSDE) {
        const netProfit = revenue * profitMargin
        const ownerCompInfo = ownerCompOptions.find(o => o.value === data.ownerCompensation)
        const ownerComp = ownerCompInfo?.midpoint || 75000
        const discretionary = revenue * 0.05
        earnings = netProfit + ownerComp + discretionary
        baseMultiple = industryData.sdeMultiple
    } else {
        const netProfit = revenue * profitMargin
        const estimatedDA = revenue * 0.05
        const estimatedInterest = revenue * 0.02
        earnings = netProfit + estimatedDA + estimatedInterest
        baseMultiple = industryData.ebitdaMultiple
    }

    let adjustedMultiple = baseMultiple
    const factors: ValuationResult["factors"] = []

    const ownerInvInfo = ownerInvolvementOptions.find(o => o.value === data.ownerInvolvement)
    if (ownerInvInfo) {
        const adj = useSDE ? ownerInvInfo.adjustment : ownerInvInfo.adjustment * 0.5
        adjustedMultiple += adj
        if (ownerInvInfo.adjustment < -0.1) {
            factors.push({ label: "High owner dependency", impact: "negative" })
        } else if (ownerInvInfo.adjustment > 0.1) {
            factors.push({ label: "Business runs independently", impact: "positive" })
        }
    }

    const yearsInfo = yearsInBusinessOptions.find(y => y.value === data.yearsInBusiness)
    if (yearsInfo) {
        adjustedMultiple += yearsInfo.adjustment
        if (yearsInfo.adjustment < 0) {
            factors.push({ label: "Limited operating history", impact: "negative" })
        } else if (yearsInfo.adjustment > 0.1) {
            factors.push({ label: "Established track record", impact: "positive" })
        }
    }

    const trendInfo = revenueTrendOptions.find(t => t.value === data.revenueTrend)
    if (trendInfo) {
        const adj = useSDE ? trendInfo.adjustment : trendInfo.adjustment * 1.5
        adjustedMultiple += adj
        if (trendInfo.adjustment < 0) {
            factors.push({ label: "Declining revenue trend", impact: "negative" })
        } else if (trendInfo.adjustment > 0.1) {
            factors.push({ label: "Strong growth trajectory", impact: "positive" })
        }
    }

    const custInfo = customerConcentrationOptions.find(c => c.value === data.customerConcentration)
    if (custInfo) {
        adjustedMultiple += custInfo.adjustment
        if (custInfo.adjustment < -0.1) {
            factors.push({ label: "Customer concentration risk", impact: "negative" })
        } else if (custInfo.adjustment > 0) {
            factors.push({ label: "Diversified customer base", impact: "positive" })
        }
    }

    const recurringInfo = recurringRevenueOptions.find(r => r.value === data.recurringRevenue)
    if (recurringInfo) {
        const adj = useSDE ? recurringInfo.adjustment : recurringInfo.adjustment * 1.5
        adjustedMultiple += adj
        if (recurringInfo.adjustment > 0.2) {
            factors.push({ label: "Strong recurring revenue", impact: "positive" })
        }
    }

    if (!useSDE) {
        if (revenue > 5000000) adjustedMultiple += 0.5
        if (revenue > 10000000) adjustedMultiple += 0.5
    }

    const minMultiple = useSDE ? 1.0 : 2.5
    const maxMultiple = useSDE ? 5.0 : 10.0
    adjustedMultiple = Math.max(minMultiple, Math.min(adjustedMultiple, maxMultiple))

    const lowMultiple = adjustedMultiple * 0.75
    const highMultiple = adjustedMultiple * 1.25

    if (profitMargin < 0.05) {
        factors.push({ label: "Low profit margins", impact: "negative" })
    } else if (profitMargin > 0.2) {
        factors.push({ label: "Healthy profit margins", impact: "positive" })
    }

    return {
        low: Math.round(earnings * lowMultiple),
        mid: Math.round(earnings * adjustedMultiple),
        high: Math.round(earnings * highMultiple),
        method: useSDE ? "SDE" : "EBITDA",
        multiple: Math.round(adjustedMultiple * 100) / 100,
        earnings: Math.round(earnings),
        factors: factors.slice(0, 4)
    }
}

// ============================================
// FORMAT HELPERS
// ============================================
function formatCurrency(value: number): string {
    if (value >= 1000000) {
        return `$${(value / 1000000).toFixed(1)}M`
    }
    if (value >= 1000) {
        return `$${Math.round(value / 1000)}K`
    }
    return `$${value.toLocaleString()}`
}

// ============================================
// MAIN COMPONENT
// ============================================
export default function EstimatePage() {
    const [currentStep, setCurrentStep] = useState(0)
    const [formData, setFormData] = useState<Record<string, string>>({})
    const [showResults, setShowResults] = useState(false)
    const [direction, setDirection] = useState(1)

    const activeSteps = useMemo(() => {
        return steps.filter(step => {
            if (step.conditional) {
                return step.conditional(formData)
            }
            return true
        })
    }, [formData])

    const currentStepData = activeSteps[currentStep]
    const progress = ((currentStep + 1) / activeSteps.length) * 100

    const handleNext = () => {
        if (currentStep < activeSteps.length - 1) {
            setDirection(1)
            setCurrentStep(prev => prev + 1)
        } else {
            setShowResults(true)
        }
    }

    const handleBack = () => {
        if (currentStep > 0) {
            setDirection(-1)
            setCurrentStep(prev => prev - 1)
        }
    }

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            [currentStepData.field]: value
        }))
    }

    const isStepComplete = () => {
        return !!formData[currentStepData?.field]
    }

    const valuation = useMemo(() => calculateValuation(formData), [formData])

    const handleStartOver = () => {
        setShowResults(false)
        setCurrentStep(0)
        setFormData({})
        setDirection(1)
    }

    // ============================================
    // RESULTS SCREEN
    // ============================================
    if (showResults && valuation) {
        return (
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950">
                <SiteHeader />

                <main className="flex-1 py-16 px-4">
                    <div className="max-w-2xl mx-auto space-y-8">
                        {/* Success Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
                                <CheckCircle2 className="w-4 h-4" />
                                Estimate Complete
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                                Your Estimated Business Value
                            </h1>
                            <p className="text-slate-500">
                                Based on {valuation.method} methodology and industry data
                            </p>
                        </motion.div>

                        {/* Valuation Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card className="border-0 shadow-2xl bg-white dark:bg-slate-900 overflow-hidden">
                                <div className="bg-gradient-to-r from-[#1e3a8a] to-blue-700 p-8 text-white text-center">
                                    <p className="text-blue-200 text-sm mb-4">Estimated Value Range</p>
                                    <div className="flex items-end justify-center gap-6 md:gap-10">
                                        <div className="text-center">
                                            <p className="text-blue-300 text-xs mb-1">Low</p>
                                            <p className="text-2xl md:text-3xl font-bold">{formatCurrency(valuation.low)}</p>
                                        </div>
                                        <div className="text-center pb-2">
                                            <p className="text-blue-200 text-xs mb-1">Most Likely</p>
                                            <p className="text-4xl md:text-5xl font-bold">{formatCurrency(valuation.mid)}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-blue-300 text-xs mb-1">High</p>
                                            <p className="text-2xl md:text-3xl font-bold">{formatCurrency(valuation.high)}</p>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex justify-center gap-8 text-sm text-center">
                                        <div>
                                            <p className="text-slate-400 mb-1">Method</p>
                                            <p className="font-semibold text-slate-700 dark:text-slate-200">
                                                {valuation.method === "SDE" ? "SDE" : "EBITDA"}
                                            </p>
                                        </div>
                                        <div className="w-px bg-slate-200 dark:bg-slate-700" />
                                        <div>
                                            <p className="text-slate-400 mb-1">Est. {valuation.method}</p>
                                            <p className="font-semibold text-slate-700 dark:text-slate-200">
                                                {formatCurrency(valuation.earnings)}
                                            </p>
                                        </div>
                                        <div className="w-px bg-slate-200 dark:bg-slate-700" />
                                        <div>
                                            <p className="text-slate-400 mb-1">Multiple</p>
                                            <p className="font-semibold text-slate-700 dark:text-slate-200">
                                                {valuation.multiple}x
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Factors */}
                        {valuation.factors.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Card className="border-0 shadow-lg bg-white dark:bg-slate-900">
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Key Factors</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {valuation.factors.map((factor, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm ${factor.impact === "positive"
                                                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                                            : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                                                        }`}
                                                >
                                                    {factor.impact === "positive" ? (
                                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                                    ) : (
                                                        <AlertTriangle className="w-3.5 h-3.5" />
                                                    )}
                                                    {factor.label}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )}

                        {/* Disclaimer + CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            <p className="text-center text-sm text-slate-500">
                                This is a preliminary estimate. For a certified valuation with detailed analysis, get started below.
                            </p>

                            <Card className="border-0 shadow-lg bg-white dark:bg-slate-900">
                                <CardContent className="p-8 text-center space-y-6">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        Ready to Get Started?
                                    </h3>
                                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-[#1e3a8a] hover:bg-blue-800 text-white px-8"
                                        >
                                            <Link href="/signup">
                                                Get My Valuation
                                                <ChevronRight className="w-4 h-4 ml-1" />
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="border-slate-300 dark:border-slate-600"
                                        >
                                            <Link href="https://calendly.com/keyinsightsai" target="_blank">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                Talk to an Expert
                                            </Link>
                                        </Button>
                                    </div>
                                    <Link
                                        href="/pricing"
                                        className="inline-flex items-center text-sm text-slate-500 hover:text-[#1e3a8a] transition-colors"
                                    >
                                        View our pricing
                                        <ChevronRight className="w-4 h-4 ml-0.5" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Start Over */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-center"
                        >
                            <Button
                                variant="ghost"
                                onClick={handleStartOver}
                                className="text-slate-400 hover:text-slate-600"
                            >
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Start Over
                            </Button>
                        </motion.div>
                    </div>
                </main>

                <SiteFooter />
            </div>
        )
    }

    // ============================================
    // QUESTIONNAIRE SCREEN
    // ============================================
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950">
            <SiteHeader />

            <main className="flex-1 flex items-center justify-center py-16 px-4">
                <div className="w-full max-w-xl space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                            Free Business Valuation
                        </h1>
                        <p className="text-slate-500">Get a data-backed estimate in under 2 minutes</p>
                    </div>

                    {/* Progress */}
                    <div className="space-y-3">
                        <Progress value={progress} className="h-1.5 bg-slate-200 dark:bg-slate-800" />
                        <div className="flex justify-center gap-1.5">
                            {activeSteps.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx <= currentStep
                                            ? "bg-[#1e3a8a]"
                                            : "bg-slate-200 dark:bg-slate-700"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Card */}
                    <Card className="border-0 shadow-2xl bg-white dark:bg-slate-900 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: direction * 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction * -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <CardHeader className="text-center pb-4 pt-8">
                                    {currentStepData.icon && (
                                        <div className="flex justify-center mb-4">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-900/20 flex items-center justify-center">
                                                <currentStepData.icon className="w-7 h-7 text-[#1e3a8a] dark:text-blue-400" />
                                            </div>
                                        </div>
                                    )}
                                    <CardTitle className="text-2xl">{currentStepData.title}</CardTitle>
                                    <CardDescription className="text-base pt-1">
                                        {currentStepData.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="px-8 pb-6 min-h-[140px] flex flex-col justify-center">
                                    <Label className="sr-only">{currentStepData.title}</Label>

                                    {currentStepData.type === "grouped-select" && currentStepData.groups && (
                                        <Select
                                            value={formData[currentStepData.field] || ""}
                                            onValueChange={handleSelectChange}
                                        >
                                            <SelectTrigger className="h-14 text-base border-slate-200 dark:border-slate-700 focus:ring-[#1e3a8a]">
                                                <SelectValue placeholder="Select your industry..." />
                                            </SelectTrigger>
                                            <SelectContent className="max-h-[300px]">
                                                {currentStepData.groups.map((group) => (
                                                    <SelectGroup key={group.group}>
                                                        <SelectLabel className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">
                                                            {group.group}
                                                        </SelectLabel>
                                                        {group.options.map((option) => (
                                                            <SelectItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}

                                    {currentStepData.type === "select" && currentStepData.options && (
                                        <Select
                                            value={formData[currentStepData.field] || ""}
                                            onValueChange={handleSelectChange}
                                        >
                                            <SelectTrigger className="h-14 text-base border-slate-200 dark:border-slate-700 focus:ring-[#1e3a8a]">
                                                <SelectValue placeholder="Select an option..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {currentStepData.options.map((option) => (
                                                    <SelectItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                </CardContent>
                            </motion.div>
                        </AnimatePresence>
                        <CardFooter className="flex justify-between px-8 py-5 border-t bg-slate-50/80 dark:bg-slate-800/50">
                            <Button
                                variant="ghost"
                                onClick={handleBack}
                                disabled={currentStep === 0}
                                className="text-slate-500 hover:text-slate-900 disabled:opacity-30"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back
                            </Button>
                            <Button
                                onClick={handleNext}
                                disabled={!isStepComplete()}
                                className="bg-[#1e3a8a] hover:bg-blue-800 min-w-[140px] disabled:opacity-40"
                            >
                                {currentStep === activeSteps.length - 1 ? "See Results" : "Continue"}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Footer */}
                    <p className="text-center text-xs text-slate-400">
                        No signup required · Based on real transaction data
                    </p>
                </div>
            </main>

            <SiteFooter />
        </div>
    )
}