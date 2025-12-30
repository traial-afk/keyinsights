"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, DollarSign, PieChart, TrendingUp, Hexagon, Percent } from "lucide-react"
import { BlogPost } from "@/lib/blog-api"
import { SiteHeader } from "@/components/site-header"

interface BlogListingProps {
    posts: BlogPost[];
}

export function BlogListing({ posts }: BlogListingProps) {
    return (
        <div className="min-h-screen bg-white">
            <SiteHeader />

            {/* Hero Section - Dark Blue (Matching Reference) */}
            <section className="relative bg-[#0f172a] py-20 lg:py-28 overflow-hidden">
                {/* Background Pattern & Shapes */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Gradients */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />

                    {/* Floating Symbols */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        {/* Top Left - Dollar */}
                        <div className="absolute top-10 left-10 text-white/5 rotate-12">
                            <DollarSign className="w-24 h-24" />
                        </div>
                        {/* Top Right - Chart */}
                        <div className="absolute top-20 right-20 text-white/5 -rotate-12">
                            <PieChart className="w-32 h-32" />
                        </div>
                        {/* Bottom Left - Trending */}
                        <div className="absolute bottom-10 left-20 text-white/5 rotate-6">
                            <TrendingUp className="w-20 h-20" />
                        </div>
                        {/* Bottom Center/Right - Hexagon/Briefcase */}
                        <div className="absolute bottom-20 right-1/3 text-[#f4a623]/10 rotate-45">
                            <Hexagon className="w-16 h-16" />
                        </div>
                        {/* Middle Left - Percent */}
                        <div className="absolute top-1/3 left-1/4 text-white/5 -rotate-6">
                            <Percent className="w-12 h-12" />
                        </div>

                        {/* Geometric Shapes */}
                        <div className="absolute top-1/4 right-10 w-4 h-4 rounded-full bg-[#f4a623]/20" />
                        <div className="absolute bottom-1/3 left-10 w-6 h-6 rounded-full border-2 border-white/10" />
                        <div className="absolute top-10 right-1/3 w-20 h-20 border border-white/5 rounded-full" />
                    </motion.div>
                </div>

                <div className="container relative mx-auto px-4 text-center z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                    >
                        Must Reads
                    </motion.h1>

                    {/* Categories / Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-12 mt-8 text-sm md:text-base font-semibold tracking-wider text-slate-400 uppercase"
                    >
                        {["Valuation 101", "Selling Guides", "Market Trends", "Case Studies", "Resources"].map((cat, i) => (
                            <button
                                key={i}
                                className="hover:text-[#f4a623] transition-colors duration-300 relative group"
                            >
                                {cat}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#f4a623] transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured / Grid Section - White Background */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {posts.map((post, index) => (
                            <BlogCard key={post.slug} post={post} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-slate-50 py-20 border-t border-slate-200">
                <div className="container mx-auto px-4 text-center max-w-2xl">
                    <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Stay Ahead of the Curve</h2>
                    <p className="text-slate-600 mb-8">Get the latest valuation insights and market trends delivered straight to your inbox.</p>
                    <div className="flex gap-2 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                        />
                        <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#152a66] transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer flex flex-col h-full"
        >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-6 shadow-md group-hover:shadow-xl transition-all duration-300">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Gradient (Subtle) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                {/* Category Badge - Top Left */}
                <div className="absolute top-4 left-4">
                    <span className="bg-[#f4a623] text-[#0f172a] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                        {post.category}
                    </span>
                </div>

                {/* Read Time - Bottom Right */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-white/90 text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
                <Link href={`/blog/${post.slug}`} className="group-hover:text-[#1e3a8a] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight line-clamp-2">
                        {post.title}
                    </h3>
                </Link>

                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-1">
                    {post.excerpt}
                </p>

                {/* Footer: Author & Date */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center text-[#1e3a8a] text-xs font-bold">
                            {post.author.avatar}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-900">{post.author.name}</span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-wider">{post.date}</span>
                        </div>
                    </div>

                    <Link
                        href={`/blog/${post.slug}`}
                        className="text-[#1e3a8a] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    >
                        Read Post <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
