"use client"

import { UploadCloud, BrainCircuit, FileCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ProcessSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        From Upload to Report in <span className="text-blue-600">Under 24 Hours</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Our streamlined process combines efficient technology with expertise to deliver professional valuations at lightning speed.
                    </p>
                </div>

                <div className="relative grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 -z-10" />

                    {/* Step 1: Data Upload */}
                    <ProcessCard
                        step="01"
                        title="Data Upload"
                        description="Secure submission takes 10 minutes"
                        icon={<UploadCloud className="w-8 h-8 text-white" />}
                        color="bg-blue-600"
                        features={[
                            "Financial statements (3 years)",
                            "Business information form",
                            "Bank-level encryption",
                            "Simple interface"
                        ]}
                    />

                    {/* Step 2: Analysis */}
                    <ProcessCard
                        step="02"
                        title="Analysis"
                        description="Our proprietary system processes 50+ data points"
                        icon={<BrainCircuit className="w-8 h-8 text-white" />}
                        color="bg-purple-600"
                        features={[
                            "Financial ratio analysis",
                            "Market research & benchmarking",
                            "Risk assessment algorithms",
                            "Growth opportunity identification"
                        ]}
                    />

                    {/* Step 3: Professional Report */}
                    <ProcessCard
                        step="03"
                        title="Professional Report"
                        description="Delivered to your email same day or within 24 hours max"
                        icon={<FileCheck className="w-8 h-8 text-white" />}
                        color="bg-green-600"
                        features={[
                            "Comprehensive 11-section analysis",
                            "Investment-ready format",
                            "Executive summary included",
                            "Secure email delivery"
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}

function ProcessCard({ step, title, description, icon, color, features }: { step: string, title: string, description: string, icon: React.ReactNode, color: string, features: string[] }) {
    return (
        <Card className="relative bg-white border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-8 pb-8 px-6 text-center">
                {/* Icon Circle */}
                <div className={`mx-auto w-16 h-16 rounded-2xl ${color} flex items-center justify-center shadow-lg mb-6 transform transition-transform hover:scale-110 duration-300`}>
                    {icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 mb-6 min-h-[40px]">{description}</p>

                <div className="bg-slate-50 rounded-xl p-4 text-left">
                    <ul className="space-y-3">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start text-sm text-slate-600">
                                <span className={`mr-2 mt-1 w-1.5 h-1.5 rounded-full ${color.replace('bg-', 'text-')}`} style={{ backgroundColor: 'currentColor' }} />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}
