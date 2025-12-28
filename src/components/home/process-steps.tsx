"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { FileText, FolderOpen, Search, CheckCircle, Download, ArrowDown } from "lucide-react"

export function ProcessSteps() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

    return (
        <section ref={containerRef} id="how-it-works" className="relative bg-white py-12 lg:py-20">
            {/* Section Heading */}
            <div className="text-center mb-8 px-4">
                <p className="text-[#f4a623] font-semibold tracking-widest text-sm uppercase mb-4">
                    How It Works
                </p>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-[#1e3a8a] mb-4">
                    From Submission to Valuation in{" "}
                    <span className="text-[#f4a623]">24 Hours</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    A simple process designed to get you answers fast.
                </p>
            </div>

            {/* Progress Line */}
            <motion.div
                className="fixed left-8 top-1/2 -translate-y-1/2 h-[200px] w-1 bg-[#1e3a8a]/10 rounded-full hidden lg:block z-40 pointer-events-none"
                style={{ opacity }}
            >
                <motion.div
                    className="w-full bg-[#f4a623] rounded-full origin-top"
                    style={{ scaleY: scrollYProgress, height: "100%" }}
                />
            </motion.div>

            {/* Step Indicators (Fixed on left) */}
            <motion.div
                className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-40 pointer-events-none"
                style={{ opacity }}
            >
                <StepIndicator step={1} scrollProgress={scrollYProgress} threshold={0} label="Submit" />
                <StepIndicator step={2} scrollProgress={scrollYProgress} threshold={0.33} label="Analyze" />
                <StepIndicator step={3} scrollProgress={scrollYProgress} threshold={0.66} label="Receive" />
            </motion.div>

            {/* Step 1: Submit Information */}
            <Step1Submit />

            {/* Step 2: Analysis */}
            <Step2Analysis />

            {/* Step 3: Receive Report */}
            <Step3Receive />
        </section>
    )
}

function StepIndicator({ step, scrollProgress, threshold, label }: {
    step: number,
    scrollProgress: any,
    threshold: number,
    label: string
}) {
    const isActive = useTransform(scrollProgress, [threshold, threshold + 0.1], [0, 1])

    return (
        <motion.div className="flex items-center gap-2">
            <motion.div
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-300"
                style={{
                    borderColor: useTransform(isActive, [0, 1], ["rgba(30,58,138,0.2)", "#f4a623"]),
                    backgroundColor: useTransform(isActive, [0, 1], ["transparent", "#f4a623"]),
                    color: useTransform(isActive, [0, 1], ["rgba(30,58,138,0.4)", "#0f172a"])
                }}
            >
                {step}
            </motion.div>
            <motion.span
                className="text-[18px] font-medium hidden lg:block"
                style={{
                    color: useTransform(isActive, [0, 1], ["rgba(30,58,138,0.3)", "#f4a623"])
                }}
            >
                {label}
            </motion.span>
        </motion.div>
    )
}

function Step1Submit() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: "-30% 0px -30% 0px" })

    return (
        <div ref={ref} className="min-h-[80vh] flex items-center justify-center px-4 py-16">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 text-center lg:text-left lg:flex-1"
                >
                    <div className="inline-flex items-center gap-2 bg-[#1e3a8a]/10 text-[#1e3a8a] px-4 py-2 rounded-full text-base font-semibold">
                        <span className="w-6 h-6 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                        Step One • ~15 minutes
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a8a]">
                        Submit Your{" "}
                        <span className="text-[#f4a623]">Information</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                        Complete our streamlined questionnaire in about 15 minutes. We only ask what we need.
                    </p>
                    <ul className="space-y-3 inline-block text-left">
                        {["Business overview", "Financial summary", "Recent tax returns"].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                                className="flex items-center gap-3 text-slate-700"
                            >
                                <CheckCircle className="w-5 h-5 text-[#f4a623]" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right: Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative h-[350px] w-[300px] flex items-center justify-center lg:flex-1"
                >
                    {/* Folder */}
                    <motion.div
                        className="absolute bottom-8 w-44 h-36 bg-[#1e3a8a] rounded-xl shadow-2xl flex items-end justify-center overflow-hidden"
                        animate={isInView ? { scale: [1, 1.02, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="absolute top-0 left-0 right-0 h-7 bg-[#152a66] rounded-t-xl" />
                        <FolderOpen className="w-14 h-14 text-white/30 mb-3" />
                    </motion.div>

                    {/* Flying Documents */}
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute w-14 h-18 bg-white border-2 border-[#1e3a8a] rounded-lg shadow-lg flex items-center justify-center"
                            initial={{ y: -80, x: -40 + i * 40, opacity: 0, rotate: -10 + i * 10 }}
                            animate={isInView ? {
                                y: [null, -40, 60],
                                x: [null, -25 + i * 25, 0],
                                opacity: [0, 1, 0],
                                rotate: [null, 0, 0],
                                scale: [0.8, 1, 0.6]
                            } : {}}
                            transition={{
                                duration: 2,
                                delay: i * 0.4,
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        >
                            <FileText className="w-7 h-7 text-[#1e3a8a]" />
                        </motion.div>
                    ))}

                    {/* Upload Arrow */}
                    <motion.div
                        className="absolute top-16"
                        animate={isInView ? { y: [0, 10, 0] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowDown className="w-7 h-7 text-[#f4a623]" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

function Step2Analysis() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: "-30% 0px -30% 0px" })

    return (
        <div ref={ref} className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-slate-50">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                {/* Left: Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-[350px] w-[350px] flex items-center justify-center order-2 lg:order-1 lg:flex-1"
                >
                    {/* Central Analysis Hub */}
                    <div className="relative w-52 h-52 flex items-center justify-center">
                        {/* Static center */}
                        <div className="w-30 h-30 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-full shadow-2xl flex items-center justify-center z-10">
                            <Search className="w-10 h-10 text-white" />
                        </div>

                        {/* Outer ring - static */}
                        <div className="absolute w-32 h-32 border-2 border-dashed border-[#1e3a8a]/30 rounded-full" />
                    </div>

                    {/* Orbiting data points - 4 valuation methods */}
                    {[0, 1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute w-12 h-12 bg-[#f4a623] rounded-lg shadow-lg flex items-center justify-center"
                            style={{
                                top: "50%",
                                left: "50%",
                                marginTop: -24,
                                marginLeft: -24,
                            }}
                            animate={isInView ? {
                                x: [
                                    Math.cos((i * 90) * Math.PI / 180) * 90,
                                    Math.cos((i * 90 + 90) * Math.PI / 180) * 90,
                                    Math.cos((i * 90 + 180) * Math.PI / 180) * 90,
                                    Math.cos((i * 90 + 270) * Math.PI / 180) * 90,
                                    Math.cos((i * 90 + 360) * Math.PI / 180) * 90,
                                ],
                                y: [
                                    Math.sin((i * 90) * Math.PI / 180) * 90,
                                    Math.sin((i * 90 + 90) * Math.PI / 180) * 90,
                                    Math.sin((i * 90 + 180) * Math.PI / 180) * 90,
                                    Math.sin((i * 90 + 270) * Math.PI / 180) * 90,
                                    Math.sin((i * 90 + 360) * Math.PI / 180) * 90,
                                ],
                            } : {}}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {i === 0 && <span className="text-[9px] font-bold text-[#0f172a] text-center leading-tight">DCF</span>}
                            {i === 1 && <span className="text-[9px] font-bold text-[#0f172a] text-center leading-tight">Asset</span>}
                            {i === 2 && <span className="text-[9px] font-bold text-[#0f172a] text-center leading-tight">Market</span>}
                            {i === 3 && <span className="text-[9px] font-bold text-[#0f172a] text-center leading-tight">Income</span>}
                        </motion.div>
                    ))}

                    {/* Scanning ring - pulsing */}
                    <motion.div
                        className="absolute w-48 h-48 border-2 border-[#f4a623]/30 rounded-full"
                        animate={isInView ? {
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6 text-center lg:text-left order-1 lg:order-2 lg:flex-1"
                >
                    <div className="inline-flex items-center gap-2 bg-[#1e3a8a]/10 text-[#1e3a8a] px-4 py-2 rounded-full text-base font-semibold">
                        <span className="w-6 h-6 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                        Step Two • Same Day
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a8a]">
                        We <span className="text-[#f4a623]">Analyze</span> Your Business
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                        Our certified analysts examine your financials using four proven valuation methods.
                    </p>
                    <ul className="space-y-3 inline-block text-left">
                        {["DCF/Income approach", "Asset-based valuation", "Market comparables"].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                className="flex items-center gap-3 text-slate-700"
                            >
                                <CheckCircle className="w-5 h-5 text-[#f4a623]" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

function Step3Receive() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: "-30% 0px -30% 0px" })

    const documents = [
        { name: "Executive Summary", color: "bg-[#1e3a8a]" },
        { name: "Valuation Analysis", color: "bg-[#2563eb]" },
        { name: "Value Drivers", color: "bg-[#3b82f6]" },
    ]

    return (
        <div ref={ref} className="min-h-[80vh] flex items-center justify-center px-4 py-16">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 text-center lg:text-left lg:flex-1"
                >
                    <div className="inline-flex items-center gap-2 bg-[#1e3a8a]/10 text-[#1e3a8a] px-4 py-2 rounded-full text-base font-semibold">
                        <span className="w-6 h-6 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                        Step Three • Within 24 Hours
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a8a]">
                        Receive Your{" "}
                        <span className="text-[#f4a623]">Report</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                        Within 24 hours, receive your comprehensive valuation with clear findings and actionable insights.
                    </p>
                    <ul className="space-y-3 inline-block text-left">
                        {["Executive summary", "Detailed valuation analysis", "Value drivers and risk factors"].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                                className="flex items-center gap-3 text-slate-700"
                            >
                                <CheckCircle className="w-5 h-5 text-[#f4a623]" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right: Animation - Stacked Documents */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative h-[350px] w-[300px] flex flex-col items-center justify-start pt-8 lg:flex-1"
                >
                    <div className="relative w-52 h-48">
                        {documents.map((doc, i) => (
                            <motion.div
                                key={i}
                                className={`absolute w-full ${doc.color} rounded-xl shadow-xl overflow-hidden`}
                                initial={{ y: 0 }}
                                animate={isInView ? { y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                style={{
                                    zIndex: 3 - i,
                                    top: i * -50,
                                }}
                            >
                                {/* Document header with name */}
                                <div className="h-12 flex items-center px-4 gap-2 border-b border-white/10">
                                    <div className="w-2.5 h-2.5 bg-[#f4a623] rounded-full" />
                                    <span className="text-white font-semibold text-sm">{doc.name}</span>
                                </div>

                                {/* Document body - only visible for top card */}
                                <div className={`p-4 space-y-2 ${i === 0 ? 'block' : 'hidden'}`}>
                                    <div className="w-full h-2 bg-white/20 rounded" />
                                    <div className="w-3/4 h-2 bg-white/20 rounded" />
                                    <div className="w-full h-2 bg-white/20 rounded" />
                                    <div className="w-1/2 h-2 bg-white/20 rounded" />

                                    <div className="pt-3 flex gap-3">
                                        <div className="w-14 h-14 bg-white/10 rounded-lg" />
                                        <div className="flex-1 space-y-2">
                                            <div className="w-full h-2 bg-white/20 rounded" />
                                            <div className="w-3/4 h-2 bg-white/20 rounded" />
                                            <div className="w-1/2 h-2 bg-white/20 rounded" />
                                        </div>
                                    </div>

                                    <div className="pt-3 space-y-2">
                                        <div className="w-full h-2 bg-white/20 rounded" />
                                        <div className="w-2/3 h-2 bg-white/20 rounded" />
                                    </div>
                                </div>

                                {/* Spacer for stacked cards */}
                                {i !== 0 && <div className="h-8" />}
                            </motion.div>
                        ))}
                    </div>

                    {/* Success checkmark */}
                    <motion.div
                        className="absolute top-4 right-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                    >
                        <CheckCircle className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Download indicator */}
                    <motion.div
                        className="mt-6 flex items-center gap-2 bg-[#f4a623] px-4 py-2 rounded-full shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <Download className="w-4 h-4 text-[#0f172a]" />
                        <span className="text-sm font-semibold text-[#0f172a]">Ready to Download</span>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
