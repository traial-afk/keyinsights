"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Placeholder testimonials - replace with real ones when available
const testimonials = [
    {
        quote: "Placeholder testimonial - We got our valuation in less than 24 hours. The report was thorough and gave us exactly what we needed for negotiations.",
        author: "John D.",
        role: "Business Seller",
        rating: 5,
    },
    {
        quote: "Placeholder testimonial - The red flags analysis alone was worth it. Saved us from a deal that would have been a disaster.",
        author: "Sarah M.",
        role: "Acquisition Buyer",
        rating: 5,
    },
    {
        quote: "Placeholder testimonial - Finally, a valuation service that understands advisors need fast turnaround for our clients.",
        author: "Michael R.",
        role: "Business Broker",
        rating: 5,
    },
]

export function WhyUsTestimonials() {
    return (
        <section className="py-24 bg-white border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <Badge className="bg-[#f4a623]/10 text-[#f4a623] border-[#f4a623]/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#f4a623]/10 mb-6">
                        What Clients Say
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Playfair_Display'] serif mb-4">
                        Trusted by Buyers, Sellers, and{" "}
                        <span className="text-[#1e3a8a]">Advisors</span>
                    </h2>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6">
                                <Quote className="w-8 h-8 text-slate-200" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#f4a623] text-[#f4a623]" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-slate-600 leading-relaxed mb-6">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div>
                                <p className="font-bold text-slate-900">{testimonial.author}</p>
                                <p className="text-sm text-slate-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
