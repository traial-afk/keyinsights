"use client";

import { useState } from 'react';
import { FileText, TrendingUp, Download, Phone, ChevronDown, CheckCircle2, FileSpreadsheet, Building2, Users, DollarSign } from 'lucide-react';

export function SellerSteps() {
    const [expandedStep, setExpandedStep] = useState<number | null>(null);

    const steps = [
        {
            number: '01',
            icon: FileText,
            title: 'Share Your Business Information',
            description: 'Complete our secure questionnaire in 15-20 minutes with your business details and financials',
            expandable: true,
            expandedContent: {
                intro: "Here's what you'll need to get started:",
                sections: [
                    {
                        icon: Building2,
                        title: 'About Your Business',
                        items: [
                            'Business name and industry',
                            'Years in operation',
                            'Number of employees',
                            'Business location(s)',
                            'Your role & time commitment',
                        ],
                    },
                    {
                        icon: DollarSign,
                        title: 'Financial Documents',
                        items: [
                            'Profit & Loss statements (last 2-3 years)',
                            'Current year P&L (year-to-date)',
                            'Balance sheet (if available)',
                            'Tax returns (optional but helpful)',
                        ],
                    },
                    {
                        icon: Users,
                        title: 'Operations & Context',
                        items: [
                            'Owner involvement level',
                            'Key employees and their roles',
                            'Customer concentration',
                            'Revenue breakdown by service/product',
                        ],
                    },
                    {
                        icon: FileSpreadsheet,
                        title: 'Helpful Extras',
                        items: [
                            'Growth plans or recent investments',
                            'Lease terms (if applicable)',
                            'Any pending contracts or opportunities',
                            'Known issues or concerns',
                        ],
                    },
                ],
                note: "Don't have everything? No problem. Start with what you have we'll let you know if we need more.",
            },
        },
        {
            number: '02',
            icon: TrendingUp,
            title: 'We Analyze Everything',
            description: 'Our team calculates your business value using 3 proven methods and separately identifies every red flag buyers might use against you.',
            expandable: false,
        },
        {
            number: '03',
            icon: Download,
            title: 'Receive Your Valuation',
            description: 'Get your comprehensive report with value range, key drivers, and red flags delivered in 24 hours',
            expandable: false,
        },
        {
            number: '04',
            icon: Phone,
            title: 'Expert Consultation Included',
            description: 'Walk through your results with our team. We will explain the methodology, answer your questions, and help you plan what to do next',
            expandable: false,
        },
    ];

    const toggleExpand = (index: number) => {
        if (steps[index].expandable) {
            setExpandedStep(expandedStep === index ? null : index);
        }
    };

    return (
        <section id="how-it-works" className="py-20 md:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="text-blue-600 mb-4 tracking-widest uppercase text-sm font-bold">How It Works</div>
                    <h2 className="text-4xl md:text-6xl text-slate-900 font-['Playfair_Display']">
                        From Your Numbers to Your Answer in 24 Hours
                    </h2>
                </div>

                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="grid md:grid-cols-12 gap-8 items-start"
                        >
                            <div className="md:col-span-2">
                                <div className="text-8xl text-blue-200 font-light">
                                    {step.number}
                                </div>
                            </div>

                            <div className="md:col-span-10">
                                <div
                                    className={`bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-300 ${expandedStep === index ? 'shadow-2xl' : 'hover:-translate-y-1 hover:shadow-2xl'
                                        }`}
                                >
                                    {/* Main Step Content */}
                                    <div
                                        className={`p-8 flex items-center gap-6 group ${step.expandable ? 'cursor-pointer' : ''
                                            }`}
                                        onClick={() => toggleExpand(index)}
                                    >
                                        <div className="w-16 h-16 bg-[#1e3a8a] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                                            <step.icon className="w-8 h-8 text-blue-200" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl mb-2 text-slate-900 font-bold">
                                                {step.title}
                                            </h3>
                                            <p className="text-slate-600">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Expand Button - Only for expandable steps */}
                                        {step.expandable && (
                                            <button
                                                className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-slate-50"
                                                aria-expanded={expandedStep === index}
                                                aria-label="See what you'll need"
                                            >
                                                <span className="text-sm font-medium hidden sm:inline">
                                                    {expandedStep === index ? 'Hide details' : "What you'll need?"}
                                                </span>
                                                <ChevronDown
                                                    className={`w-5 h-5 transition-transform duration-300 ${expandedStep === index ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {/* Expanded Content */}
                                    {step.expandable && step.expandedContent && (
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedStep === index
                                                ? 'max-h-[1000px] opacity-100'
                                                : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <div className="px-8 pb-8 pt-2 border-t border-slate-100">
                                                <p className="text-slate-700 font-medium mb-6">
                                                    {step.expandedContent.intro}
                                                </p>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    {step.expandedContent.sections.map((section, sectionIndex) => (
                                                        <div
                                                            key={sectionIndex}
                                                            className="bg-slate-50 rounded-xl p-5"
                                                        >
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                                    <section.icon className="w-5 h-5 text-blue-600" />
                                                                </div>
                                                                <h4 className="font-semibold text-slate-900">
                                                                    {section.title}
                                                                </h4>
                                                            </div>
                                                            <ul className="space-y-2">
                                                                {section.items.map((item, itemIndex) => (
                                                                    <li
                                                                        key={itemIndex}
                                                                        className="flex items-start gap-2 text-slate-600 text-sm"
                                                                    >
                                                                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="mt-6 bg-blue-50 rounded-xl p-4 flex items-start gap-3">
                                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <FileText className="w-4 h-4 text-blue-600" />
                                                    </div>
                                                    <p className="text-slate-600 text-sm">
                                                        {step.expandedContent.note}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
