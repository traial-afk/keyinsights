"use client"

import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Calculator, Building2, ArrowUpRight, Database, Layers, Scale } from "lucide-react"

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
        illustration: "cash-flow",
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
        color: "purple",
        illustration: "network",
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
        illustration: "multiplier",
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
        color: "emerald",
        illustration: "blocks",
    },
]

// Abstract illustration components
function CashFlowIllustration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Background gradient blob */}
            <div className="absolute w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full blur-3xl opacity-60" />
            
            {/* Animated bars representing cash flow */}
            <div className="relative flex items-end gap-3 h-48">
                {[40, 55, 45, 70, 60, 85, 75, 95].map((height, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 * i }}
                        className="w-6 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg"
                    />
                ))}
            </div>
            
            {/* Trend line */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-12 left-[10%] h-0.5 bg-gradient-to-r from-blue-600 to-blue-400"
            />
            
            {/* Arrow up */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute top-8 right-8"
            >
                <ArrowUpRight className="w-12 h-12 text-blue-500" />
            </motion.div>
        </div>
    )
}

function NetworkIllustration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Background gradient blob */}
            <div className="absolute w-64 h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full blur-3xl opacity-60" />
            
            {/* Network nodes */}
            <div className="relative">
                {/* Center node */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                    <Database className="w-10 h-10 text-white" />
                </motion.div>
                
                {/* Surrounding nodes */}
                {[
                    { x: -80, y: -60, delay: 0.2 },
                    { x: 80, y: -60, delay: 0.3 },
                    { x: -100, y: 40, delay: 0.4 },
                    { x: 100, y: 40, delay: 0.5 },
                    { x: 0, y: 100, delay: 0.6 },
                ].map((pos, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: pos.delay }}
                        className="absolute w-12 h-12 bg-white border-2 border-purple-300 rounded-xl shadow-md flex items-center justify-center"
                        style={{ left: `calc(50% + ${pos.x}px - 24px)`, top: `calc(50% + ${pos.y}px - 24px)` }}
                    >
                        <BarChart3 className="w-5 h-5 text-purple-500" />
                    </motion.div>
                ))}
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ left: -100, top: -80, width: 280, height: 240 }}>
                    {[
                        { x1: 140, y1: 120, x2: 60, y2: 60 },
                        { x1: 140, y1: 120, x2: 220, y2: 60 },
                        { x1: 140, y1: 120, x2: 40, y2: 160 },
                        { x1: 140, y1: 120, x2: 240, y2: 160 },
                        { x1: 140, y1: 120, x2: 140, y2: 220 },
                    ].map((line, i) => (
                        <motion.line
                            key={i}
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x1}
                            y2={line.y1}
                            stroke="#c4b5fd"
                            strokeWidth="2"
                            strokeDasharray="4"
                            initial={{ x2: line.x1, y2: line.y1 }}
                            whileInView={{ x2: line.x2, y2: line.y2 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        />
                    ))}
                </svg>
            </div>
        </div>
    )
}

function MultiplierIllustration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Background gradient blob */}
            <div className="absolute w-64 h-64 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full blur-3xl opacity-60" />
            
            {/* Calculator representation */}
            <div className="relative">
                <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl p-6 shadow-xl border border-amber-200"
                >
                    {/* Display */}
                    <div className="bg-slate-900 rounded-lg p-4 mb-4 min-w-[180px]">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                            className="text-amber-400 text-right font-mono text-sm"
                        >
                            EBITDA × Multiple
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                            className="text-white text-right font-mono text-2xl font-bold"
                        >
                            $500K × 4.2
                        </motion.p>
                    </div>
                    
                    {/* Result */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                        className="bg-amber-50 rounded-lg p-3 text-center border border-amber-200"
                    >
                        <p className="text-amber-600 text-sm font-medium">Enterprise Value</p>
                        <p className="text-amber-700 text-xl font-bold">$2.1M</p>
                    </motion.div>
                </motion.div>
                
                {/* Floating multiplier badge */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.1, type: "spring" }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg"
                >
                    <span className="text-white font-bold text-lg">4.2×</span>
                </motion.div>
            </div>
        </div>
    )
}

function BlocksIllustration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Background gradient blob */}
            <div className="absolute w-64 h-64 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full blur-3xl opacity-60" />
            
            {/* Stacked blocks */}
            <div className="relative">
                {/* Balance scale */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2"
                >
                    <Scale className="w-8 h-8 text-emerald-400" />
                </motion.div>
                
                {/* Building blocks stack */}
                <div className="flex flex-col items-center gap-2">
                    {[
                        { label: "Goodwill", width: "w-32", color: "from-emerald-300 to-emerald-400", delay: 0.6 },
                        { label: "Intangibles", width: "w-40", color: "from-emerald-400 to-emerald-500", delay: 0.4 },
                        { label: "Equipment", width: "w-48", color: "from-emerald-500 to-emerald-600", delay: 0.2 },
                        { label: "Inventory", width: "w-56", color: "from-emerald-600 to-emerald-700", delay: 0 },
                    ].map((block, i) => (
                        <motion.div
                            key={block.label}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: block.delay }}
                            className={`${block.width} h-12 bg-gradient-to-r ${block.color} rounded-lg shadow-md flex items-center justify-center`}
                        >
                            <span className="text-white text-sm font-medium">{block.label}</span>
                        </motion.div>
                    ))}
                </div>
                
                {/* Total value badge */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
                    className="absolute -bottom-6 -right-6 bg-white rounded-xl px-4 py-2 shadow-lg border border-emerald-200"
                >
                    <p className="text-emerald-600 text-xs font-medium">Net Asset Value</p>
                    <p className="text-emerald-700 font-bold">$1.8M</p>
                </motion.div>
            </div>
        </div>
    )
}

const illustrations: Record<string, () => JSX.Element> = {
    "cash-flow": CashFlowIllustration,
    "network": NetworkIllustration,
    "multiplier": MultiplierIllustration,
    "blocks": BlocksIllustration,
}

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
    blue: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-200", light: "bg-blue-50" },
    purple: { bg: "bg-purple-500", text: "text-purple-600", border: "border-purple-200", light: "bg-purple-50" },
    amber: { bg: "bg-amber-500", text: "text-amber-600", border: "border-amber-200", light: "bg-amber-50" },
    emerald: { bg: "bg-emerald-500", text: "text-emerald-600", border: "border-emerald-200", light: "bg-emerald-50" },
}

export function MethodologyDetailsA() {
    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {methodologies.map((method, index) => {
                    const isEven = index % 2 === 0
                    const colors = colorClasses[method.color]
                    const IllustrationComponent = illustrations[method.illustration]
                    
                    return (
                        <motion.div
                            key={method.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16 py-16 ${index !== methodologies.length - 1 ? 'border-b border-slate-200' : ''}`}
                        >
                            {/* Illustration Side */}
                            <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px]">
                                <IllustrationComponent />
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
