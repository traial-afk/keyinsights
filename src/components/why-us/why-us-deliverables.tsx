"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, AlertTriangle, Presentation, FileSpreadsheet, TrendingUp, Eye, Download, X } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const deliverables = [
    {
        icon: FileText,
        iconColor: "text-blue-600",
        iconBg: "bg-blue-100",
        title: "Business Valuation Report",
        subtitle: "The Number",
        description: "Your defensible value range with clear methodology. The anchor for every negotiation.",
        essential: true,
        exitReady: true,
    },
    {
        icon: AlertTriangle,
        iconColor: "text-red-500",
        iconBg: "bg-red-100",
        title: "Red Flags Analysis",
        subtitle: "The Risks",
        description: "Every weakness buyers will find—identified upfront so you're never caught off guard.",
        essential: true,
        exitReady: true,
    },
    {
        icon: Presentation,
        iconColor: "text-emerald-600",
        iconBg: "bg-emerald-100",
        title: "Business Teaser",
        subtitle: "The Hook",
        description: "One-page summary to attract qualified buyers without revealing your identity.",
        essential: false,
        exitReady: true,
    },
    {
        icon: FileSpreadsheet,
        iconColor: "text-purple-600",
        iconBg: "bg-purple-100",
        title: "Confidential Information Memorandum",
        subtitle: "The Full Story",
        description: "The complete package serious buyers need to make an offer. 15-25 pages of everything that matters.",
        essential: false,
        exitReady: true,
    },
    {
        icon: TrendingUp,
        iconColor: "text-amber-600",
        iconBg: "bg-amber-100",
        title: "Valuation Enhancement Report",
        subtitle: "The Roadmap",
        description: "Prioritized actions to increase your exit price before going to market.",
        essential: false,
        exitReady: true,
    },
]

const sampleReports = [
    {
        id: "valuation",
        title: "Business Valuation Report",
        subtitle: "10-20 Pages • PDF",
        icon: <FileText className="h-6 w-6 text-blue-600" />,
        fileUrl: "/samples/business-valuation-report.pdf",
        packageType: "Essential"
    },
    {
        id: "teaser",
        title: "Business Teaser",
        subtitle: "1 Page • PDF",
        icon: <Presentation className="h-6 w-6 text-emerald-500" />,
        fileUrl: "/samples/business-teaser.pdf",
        packageType: "Exit Ready"
    },
    {
        id: "cim",
        title: "Confidential Information Memorandum",
        subtitle: "15-25 Pages • PDF",
        icon: <FileSpreadsheet className="h-6 w-6 text-purple-500" />,
        fileUrl: "/samples/cim.pdf",
        packageType: "Exit Ready"
    },
]

function SampleCard({ title, subtitle, icon, fileUrl, packageType }: {
    title: string,
    subtitle: string,
    icon: React.ReactNode,
    fileUrl: string,
    packageType: string
}) {
    return (
        <Card className="overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="p-4 flex items-start justify-between gap-3 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-100">
                        {icon}
                    </div>
                    <div>
                        <h4 className="font-bold text-sm leading-tight text-slate-900">{title}</h4>
                        <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
                    </div>
                </div>
                <Badge
                    className={`${packageType === "Essential" ? "bg-[#1e3a8a]" : "bg-[#f4a623] text-slate-900"} text-[10px] border-0 font-bold shrink-0`}
                >
                    {packageType}
                </Badge>
            </div>

            {/* Preview Area */}
            <div className="flex-1 bg-slate-50 relative min-h-[400px] border-b border-slate-100">
                <iframe
                    src={`${fileUrl}#toolbar=0&navpanes=0&view=FitH`}
                    className="w-full h-full absolute inset-0"
                    title={`${title} Preview`}
                />
            </div>

            {/* Footer Actions */}
            <div className="p-4 bg-white flex gap-2">
                <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-[#1e3a8a] hover:bg-[#172e6e] text-white shadow-sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View Full Report
                    </Button>
                </a>
                <a href={fileUrl} download>
                    <Button variant="outline" size="icon" className="shadow-sm">
                        <Download className="h-4 w-4" />
                    </Button>
                </a>
            </div>
        </Card>
    )
}

export function WhyUsDeliverables() {
    const [showSamples, setShowSamples] = useState(false)

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 space-y-4"
                >
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-100">
                        What You Get
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 font-['Playfair_Display'] serif">
                        Professional Deliverables.{" "}
                        <span className="text-[#1e3a8a]">Ready to use.</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Everything you need to negotiate with confidence, support your transaction, or go to market.
                    </p>
                </motion.div>

                {/* Deliverables List */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-10"
                >
                    {/* Header Row */}
                    <div className="px-6 md:px-8 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <span className="font-bold text-slate-900">5 Reports Included</span>
                        <div className="flex items-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#1e3a8a]"></div>
                                <span className="text-slate-600 font-medium">Essential ($399)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#f4a623]"></div>
                                <span className="text-slate-600 font-medium">Exit Ready ($549)</span>
                            </div>
                        </div>
                    </div>

                    {/* Deliverable Rows */}
                    <div className="divide-y divide-slate-100">
                        {deliverables.map((item, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.05 * index }}
                                className="px-6 md:px-8 py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 hover:bg-slate-50/50 transition-colors"
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
                                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                                        <span className="text-sm text-slate-400 font-medium">{item.subtitle}</span>
                                    </div>
                                    <p className="text-sm text-slate-600">{item.description}</p>
                                </div>

                                {/* Package Indicators */}
                                <div className="flex items-center gap-8 flex-shrink-0">
                                    <div className="w-6 flex justify-center">
                                        {item.essential ? (
                                            <div className="w-3 h-3 rounded-full bg-[#1e3a8a]"></div>
                                        ) : (
                                            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                        )}
                                    </div>
                                    <div className="w-6 flex justify-center">
                                        {item.exitReady ? (
                                            <div className="w-3 h-3 rounded-full bg-[#f4a623]"></div>
                                        ) : (
                                            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* View Samples Button */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="text-center"
                >
                    <Button
                        onClick={() => setShowSamples(!showSamples)}
                        variant="outline"
                        className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white h-12 px-8"
                    >
                        <Eye className="mr-2 h-4 w-4" />
                        {showSamples ? "Hide Sample Reports" : "Preview Sample Reports"}
                    </Button>
                </motion.div>

                {/* Expandable Sample Reports Section */}
                <AnimatePresence>
                    {showSamples && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mt-10 overflow-hidden"
                        >
                            <div className="relative rounded-2xl bg-white p-6 md:p-8 shadow-xl border border-slate-200">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">Sample Reports</h3>
                                        <p className="text-slate-600 text-sm mt-1">Click any report to view the full document</p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setShowSamples(false)}
                                        className="text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                                    >
                                        <X className="h-6 w-6" />
                                    </Button>
                                </div>

                                <div className="grid gap-6 md:grid-cols-3">
                                    {sampleReports.map((report) => (
                                        <SampleCard
                                            key={report.id}
                                            title={report.title}
                                            subtitle={report.subtitle}
                                            icon={report.icon}
                                            fileUrl={report.fileUrl}
                                            packageType={report.packageType}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
