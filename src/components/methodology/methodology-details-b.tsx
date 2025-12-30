"use client"

import React from "react"
import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Calculator, Building2 } from "lucide-react"

const methodologies = [
    {
        id: "income",
        icon: TrendingUp,
        title: "DCF / Income Approach",
        weight: "40%",
        tagline: "What's your future cash worth today?",
        description: "The Income Approach projects your business's future cash flows and discounts them to present value. It captures the true earning potential of your business—what a buyer is really paying for.",
        details: [
            { label: "Best for", value: "Cash-flow positive, stable businesses" },
            { label: "Key inputs", value: "Historical financials, growth rates, risk factors" },
            { label: "We analyze", value: "3-5 year projections with multiple scenarios" },
        ],
        color: "blue",
        chartType: "line",
    },
    {
        id: "comps",
        icon: BarChart3,
        title: "Market Comparables",
        weight: "25%",
        tagline: "What are similar businesses actually selling for?",
        description: "We benchmark your business against real transaction data from our database of 100,000+ completed deals. This grounds your valuation in market reality—not theory.",
        details: [
            { label: "Data source", value: "100,000+ verified transactions" },
            { label: "Matching criteria", value: "Industry, size, geography, timing" },
            { label: "Adjustments", value: "Normalized for business-specific factors" },
        ],
        color: "slate",
        chartType: "scatter",
    },
    {
        id: "ebitda",
        icon: Calculator,
        title: "Weighted EBITDA Multiple",
        weight: "20%",
        tagline: "The metric buyers and lenders speak fluently.",
        description: "We apply industry-specific multiples to your adjusted EBITDA. This is the language of M&A—the number brokers, buyers, and banks all understand immediately.",
        details: [
            { label: "Multiple range", value: "Industry and size-specific benchmarks" },
            { label: "Adjustments", value: "Owner comp, one-time expenses, add-backs" },
            { label: "Output", value: "Clear multiple range with justification" },
        ],
        color: "amber",
        chartType: "bar",
    },
    {
        id: "asset",
        icon: Building2,
        title: "Asset-Based Approach",
        weight: "15%",
        tagline: "What's the floor value of everything you've built?",
        description: "This method calculates the net value of all tangible and intangible assets. It establishes a floor valuation and is especially relevant for asset-heavy businesses.",
        details: [
            { label: "Tangible assets", value: "Equipment, inventory, real estate" },
            { label: "Intangible assets", value: "Customer lists, IP, brand value" },
            { label: "Goodwill", value: "Calculated as excess over book value" },
        ],
        color: "slate",
        chartType: "stacked",
    },
]

// Line chart - DCF cash flow projections
function LineChartViz() {
    const years = ["Y1", "Y2", "Y3", "Y4", "Y5"]
    const values = [100, 115, 135, 158, 185]
    const maxValue = Math.max(...values)
    
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 h-full">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-slate-700 text-sm">Projected Cash Flows</h4>
                <span className="text-xs text-slate-400">5-Year Forecast</span>
            </div>
            
            <div className="relative h-48">
                {/* Grid lines */}
                {[0, 25, 50, 75, 100].map((line) => (
                    <div
                        key={line}
                        className="absolute w-full border-t border-slate-100"
                        style={{ bottom: `${line}%` }}
                    />
                ))}
                
                {/* Line chart */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    {/* Area fill */}
                    <motion.path
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.2 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        d={`M 0 ${192} ${values.map((v, i) => `L ${(i / (values.length - 1)) * 100}% ${192 - (v / maxValue) * 180}`).join(' ')} L 100% 192 Z`}
                        fill="url(#blueGradient)"
                    />
                    
                    {/* Line */}
                    <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        d={`M ${values.map((v, i) => `${(i / (values.length - 1)) * 100}% ${192 - (v / maxValue) * 180}`).join(' L ')}`}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    
                    <defs>
                        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                
                {/* Data points */}
                {values.map((v, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        className="absolute w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow"
                        style={{
                            left: `calc(${(i / (values.length - 1)) * 100}% - 6px)`,
                            bottom: `calc(${(v / maxValue) * 100}% - 6px)`,
                        }}
                    />
                ))}
            </div>
            
            {/* X-axis labels */}
            <div className="flex justify-between mt-2 text-xs text-slate-400">
                {years.map((year) => (
                    <span key={year}>{year}</span>
                ))}
            </div>
            
            {/* Legend */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-xs text-slate-600">Present Value: <span className="font-bold text-blue-600">$1.85M</span></span>
                </div>
                <span className="text-xs text-slate-400">@ 12% discount rate</span>
            </div>
        </div>
    )
}

// Scatter plot - Market comparables
function ScatterChartViz() {
    const dataPoints = [
        { x: 15, y: 30, size: 8 },
        { x: 25, y: 45, size: 10 },
        { x: 35, y: 52, size: 6 },
        { x: 42, y: 65, size: 12 },
        { x: 55, y: 58, size: 8 },
        { x: 62, y: 78, size: 14 },
        { x: 75, y: 70, size: 10 },
        { x: 82, y: 85, size: 8 },
    ]
    
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 h-full">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-slate-700 text-sm">Comparable Transactions</h4>
                <span className="text-xs text-slate-400">Revenue vs. Sale Price</span>
            </div>
            
            <div className="relative h-48 border-l-2 border-b-2 border-slate-200">
                {/* Grid */}
                {[25, 50, 75].map((line) => (
                    <div
                        key={line}
                        className="absolute w-full border-t border-dashed border-slate-100"
                        style={{ bottom: `${line}%` }}
                    />
                ))}
                
                {/* Data points */}
                {dataPoints.map((point, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 0.7 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * i }}
                        className="absolute bg-slate-500 rounded-full"
                        style={{
                            left: `${point.x}%`,
                            bottom: `${point.y}%`,
                            width: point.size * 2,
                            height: point.size * 2,
                            transform: 'translate(-50%, 50%)',
                        }}
                    />
                ))}
                
                {/* Your business indicator */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                    className="absolute bg-slate-600 rounded-full border-4 border-white shadow-lg"
                    style={{
                        left: '50%',
                        bottom: '60%',
                        width: 24,
                        height: 24,
                        transform: 'translate(-50%, 50%)',
                    }}
                />
                
                {/* Trend line */}
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute h-0.5 bg-slate-300 origin-left"
                    style={{
                        left: '10%',
                        bottom: '35%',
                        transform: 'rotate(-25deg)',
                    }}
                />
            </div>
            
            {/* Axis labels */}
            <div className="flex justify-between mt-2">
                <span className="text-xs text-slate-400">Revenue →</span>
            </div>
            
            {/* Legend */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-slate-500/50 rounded-full" />
                    <span className="text-xs text-slate-600">Comparables (47)</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-slate-600 rounded-full border-2 border-white shadow" />
                    <span className="text-xs text-slate-600 font-semibold">Your Business</span>
                </div>
            </div>
        </div>
    )
}

// Bar chart - EBITDA multiples by industry
function BarChartViz() {
    const industries = [
        { name: "SaaS", multiple: 8.2, highlight: false },
        { name: "Manufacturing", multiple: 4.5, highlight: false },
        { name: "Services", multiple: 4.2, highlight: true },
        { name: "Retail", multiple: 3.8, highlight: false },
        { name: "Distribution", multiple: 3.5, highlight: false },
    ]
    const maxMultiple = Math.max(...industries.map(i => i.multiple))
    
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 h-full">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-slate-700 text-sm">Industry EBITDA Multiples</h4>
                <span className="text-xs text-slate-400">2024 Median</span>
            </div>
            
            <div className="space-y-3">
                {industries.map((industry, i) => (
                    <div key={industry.name} className="flex items-center gap-3">
                        <span className={`text-xs w-24 ${industry.highlight ? 'font-bold text-amber-600' : 'text-slate-500'}`}>
                            {industry.name}
                        </span>
                        <div className="flex-1 h-8 bg-slate-100 rounded-lg overflow-hidden relative">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${(industry.multiple / maxMultiple) * 100}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 * i }}
                                className={`h-full rounded-lg ${industry.highlight ? 'bg-gradient-to-r from-amber-400 to-amber-500' : 'bg-gradient-to-r from-amber-200 to-amber-300'}`}
                            />
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 + 0.1 * i }}
                                className={`absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold ${industry.highlight ? 'text-amber-700' : 'text-amber-600'}`}
                            >
                                {industry.multiple}×
                            </motion.span>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Your business callout */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-4 pt-4 border-t border-slate-100 bg-amber-50 rounded-lg p-3"
            >
                <div className="flex items-center justify-between">
                    <span className="text-xs text-amber-700">Your Applied Multiple</span>
                    <span className="text-lg font-bold text-amber-600">3.8× - 4.5×</span>
                </div>
                <p className="text-xs text-amber-600/80 mt-1">Based on size, margins, and growth profile</p>
            </motion.div>
        </div>
    )
}

// Stacked bar - Asset breakdown
function StackedChartViz() {
    const assets = [
        { name: "Real Estate", value: 450, color: "bg-slate-600" },
        { name: "Equipment", value: 320, color: "bg-slate-500" },
        { name: "Inventory", value: 180, color: "bg-slate-400" },
        { name: "Intangibles", value: 250, color: "bg-slate-300" },
        { name: "Goodwill", value: 400, color: "bg-slate-200" },
    ]
    const total = assets.reduce((sum, a) => sum + a.value, 0)
    
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 h-full">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-slate-700 text-sm">Asset Composition</h4>
                <span className="text-xs text-slate-400">by Category</span>
            </div>
            
            {/* Stacked horizontal bar */}
            <div className="h-12 rounded-lg overflow-hidden flex mb-4">
                {assets.map((asset, i) => (
                    <motion.div
                        key={asset.name}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(asset.value / total) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 * i }}
                        className={`${asset.color} h-full`}
                        title={`${asset.name}: $${asset.value}K`}
                    />
                ))}
            </div>
            
            {/* Legend */}
            <div className="grid grid-cols-2 gap-2">
                {assets.map((asset, i) => (
                    <motion.div
                        key={asset.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + 0.05 * i }}
                        className="flex items-center gap-2"
                    >
                        <div className={`w-3 h-3 rounded ${asset.color}`} />
                        <span className="text-xs text-slate-600">{asset.name}</span>
                        <span className="text-xs text-slate-400 ml-auto">${asset.value}K</span>
                    </motion.div>
                ))}
            </div>
            
            {/* Total */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between"
            >
                <span className="text-sm font-semibold text-slate-700">Total Asset Value</span>
                <span className="text-xl font-bold text-slate-600">${(total / 1000).toFixed(1)}M</span>
            </motion.div>
        </div>
    )
}

const chartComponents: Record<string, () => React.ReactNode> = {
    "line": LineChartViz,
    "scatter": ScatterChartViz,
    "bar": BarChartViz,
    "stacked": StackedChartViz,
}

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
    blue: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-200", light: "bg-blue-50" },
    slate: { bg: "bg-slate-500", text: "text-slate-600", border: "border-slate-200", light: "bg-slate-50" },
    amber: { bg: "bg-amber-500", text: "text-amber-600", border: "border-amber-200", light: "bg-amber-50" },
    slate: { bg: "bg-slate-500", text: "text-slate-600", border: "border-slate-200", light: "bg-slate-50" },
}

export function MethodologyDetailsB() {
    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {methodologies.map((method, index) => {
                    const isEven = index % 2 === 0
                    const colors = colorClasses[method.color]
                    const ChartComponent = chartComponents[method.chartType]
                    
                    return (
                        <motion.div
                            key={method.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16 py-16 ${index !== methodologies.length - 1 ? 'border-b border-slate-200' : ''}`}
                        >
                            {/* Chart Side */}
                            <div className="w-full lg:w-1/2">
                                <ChartComponent />
                            </div>
                            
                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                {/* Header */}
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-xl ${colors.light} flex items-center justify-center`}>
                                        <method.icon className={`w-6 h-6 ${colors.text}`} />
                                    </div>
                                    <div className={`px-3 py-1 rounded-full ${colors.light} ${colors.text} text-sm font-bold`}>
                                        {method.weight} Weight
                                    </div>
                                </div>
                                
                                {/* Title & Tagline */}
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-['Playfair_Display'] serif mb-2">
                                        {method.title}
                                    </h3>
                                    <p className={`${colors.text} font-medium italic`}>
                                        {method.tagline}
                                    </p>
                                </div>
                                
                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed">
                                    {method.description}
                                </p>
                                
                                {/* Details */}
                                <div className={`${colors.light} rounded-xl p-5 space-y-3`}>
                                    {method.details.map((detail) => (
                                        <div key={detail.label} className="flex items-start gap-3">
                                            <span className={`${colors.text} font-semibold text-sm min-w-[100px]`}>
                                                {detail.label}:
                                            </span>
                                            <span className="text-slate-700 text-sm">
                                                {detail.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
