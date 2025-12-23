"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SegmentHero() {
    return (
        <section className="relative overflow-hidden bg-[#1e3a8a] py-20 text-white lg:py-32">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center space-y-6 mb-12">
                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-white">
                        Know Your Business Value in{" "}
                        <span className="text-[#f4a623]">24 Hours</span>
                    </h1>
                    <p className="mx-auto max-w-3xl text-xl text-blue-100">
                        Accurate valuations using industry-standard methodology. For buyers, sellers, and advisors. Delivered fast.
                    </p>

                    {/* Primary CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <Button
                            asChild
                            size="lg"
                            className="bg-[#f4a623] hover:bg-[#d89520] text-[#1e3a8a] font-semibold text-lg px-8 py-6 rounded-full"
                        >
                            <Link href="#free-estimator">
                                Get Your Free Estimate
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] font-semibold text-lg px-8 py-6 rounded-full bg-transparent"
                        >
                            <Link href="#how-it-works">
                                See How It Works
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Persona Section Header */}
                <div className="text-center mb-8">
                    <p className="text-blue-200 text-lg">
                        Choose your path below and we'll personalize your experience based on your needs
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    {/* Buying a business */}
                    <Link href="/buyer" className="group" onClick={() => typeof window !== 'undefined' && localStorage.setItem('userPersona', 'buyer')}>
                        <Card className="h-full bg-[#2545a0] border-4 border-transparent hover:border-[#f4a623] transition-all duration-300 p-8 flex flex-col items-center text-center cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 relative overflow-hidden rounded-3xl">
                            <div className="w-24 h-24 rounded-3xl bg-[#2545a0] flex items-center justify-center mb-6 transition-transform duration-300">
                                <Image
                                    src="/buyer.svg"
                                    alt="Buyer Icon"
                                    width={48}
                                    height={48}
                                    className="w-20 h-20"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">
                                I'm <span className="text-[#f4a623]">Buying</span> a Business
                            </h3>
                            <p className="text-blue-100 text-base leading-relaxed mb-6">
                                Verify the asking price before you commit. Get independent valuation to negotiate with confidence.
                            </p>
                            <div className="mt-auto">
                                <div className="w-12 h-12 rounded-full bg-[#1e3a8a]/50 flex items-center justify-center group-hover:bg-[#f4a623] transition-colors duration-300">
                                    <ArrowRight className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </Card>
                    </Link>

                    {/* Selling my business */}
                    <Link href="/selling" className="group" onClick={() => typeof window !== 'undefined' && localStorage.setItem('userPersona', 'seller')}>
                        <Card className="h-full bg-[#2545a0] border-4 border-transparent hover:border-[#f4a623] transition-all duration-300 p-8 flex flex-col items-center text-center cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 relative overflow-hidden rounded-3xl">
                            <div className="w-24 h-24 rounded-3xl bg-[#2545a0] flex items-center justify-center mb-6 transition-transform duration-300">
                                <Image
                                    src="/selling.svg"
                                    alt="Selling Icon"
                                    width={48}
                                    height={48}
                                    className="w-20 h-20"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">
                                I'm <span className="text-[#f4a623]">Selling</span> My Business
                            </h3>
                            <p className="text-blue-100 text-base leading-relaxed mb-6">
                                Know what you've built is worth. Set the right price and attract serious buyers.
                            </p>
                            <div className="mt-auto">
                                <div className="w-12 h-12 rounded-full bg-[#1e3a8a]/50 flex items-center justify-center group-hover:bg-[#f4a623] transition-colors duration-300">
                                    <ArrowRight className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </Card>
                    </Link>

                    {/* Representing clients */}
                    <Link href="/advisor" className="group" onClick={() => typeof window !== 'undefined' && localStorage.setItem('userPersona', 'advisor')}>
                        <Card className="h-full bg-[#2545a0] border-4 border-transparent hover:border-[#f4a623] transition-all duration-300 p-8 flex flex-col items-center text-center cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 relative overflow-hidden rounded-3xl">
                            <div className="w-24 h-24 rounded-3xl bg-[#2545a0] flex items-center justify-center mb-6 transition-transform duration-300">
                                <Image
                                    src="/advisor.svg"
                                    alt="Advisor Icon"
                                    width={48}
                                    height={48}
                                    className="w-20 h-20"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">
                                I'm <span className="text-[#f4a623]">Representing</span> Clients
                            </h3>
                            <p className="text-blue-100 text-base leading-relaxed mb-6">
                                Deliver credentialed valuations that enhance your service. White-label reports and fast turnaround.
                            </p>
                            <div className="mt-auto">
                                <div className="w-12 h-12 rounded-full bg-[#1e3a8a]/50 flex items-center justify-center group-hover:bg-[#f4a623] transition-colors duration-300">
                                    <ArrowRight className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
        </section>
    )
}