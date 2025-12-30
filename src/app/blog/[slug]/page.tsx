import Image from "next/image"
import Link from "next/link"
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArrowLeft, Clock, Twitter, Linkedin, Share2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { getPostData } from "@/lib/blog-api"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"

import { Metadata } from "next"

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = await getPostData(slug)
    if (!post) return {}

    return {
        title: `${post.title} | KeyInsightsAI`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    }
}

import JsonLd from "@/components/json-ld"

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const post = await getPostData(slug)


    if (!post) {
        return (
            <div className="min-h-screen bg-slate-50">
                <SiteHeader />
                <div className="container mx-auto px-4 py-32 text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
                    <p className="text-slate-600 mb-8">The article you're looking for doesn't exist.</p>
                    <Link href="/blog">
                        <Button>Back to Blog</Button>
                    </Link>
                </div>
            </div>
        )
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": [post.image],
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author.name
        },
        "publisher": {
            "@type": "Organization",
            "name": "KeyInsightsAI",
            "logo": {
                "@type": "ImageObject",
                "url": "https://keyinsightsai.com/logo.png"
            }
        },
        "description": post.excerpt
    }

    return (
        <div className="min-h-screen bg-white">
            <JsonLd data={jsonLd} />
            <SiteHeader />

            <article>
                {/* Hero / Header */}
                <div className="bg-[#0f172a] text-white pt-32 pb-20 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-slate-400 hover:text-[#f4a623] transition-colors mb-8 text-sm font-medium"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-[#f4a623] text-[#0f172a] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                {post.category}
                            </span>
                            <span className="flex items-center text-slate-400 text-sm">
                                <Clock className="w-4 h-4 mr-1" /> {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8 tracking-wide">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-between border-t border-slate-800 pt-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-xl font-bold text-white">
                                    {post.author.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{post.author.name}</div>
                                    <div className="text-sm text-slate-400">{post.author.role}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-slate-400 text-sm mr-2 hidden sm:inline-block">Share:</span>
                                <button className="p-2 rounded-full bg-slate-800 hover:bg-[#1e3a8a] transition-colors text-white"><Twitter className="w-4 h-4" /></button>
                                <button className="p-2 rounded-full bg-slate-800 hover:bg-[#0077b5] transition-colors text-white"><Linkedin className="w-4 h-4" /></button>
                                <button className="p-2 rounded-full bg-slate-800 hover:bg-white/20 transition-colors text-white"><Share2 className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="container mx-auto px-4 max-w-4xl py-12 lg:py-20">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>


                    <div className="prose prose-lg max-w-none text-slate-700 prose-headings:text-[#1e3a8a] prose-a:text-blue-600">
                        {/* Dynamic HTML/MDX Content */}
                        <MDXRemote source={post.content} />
                    </div>
                </div>
            </article>

            {/* CTA Section */}
            <section className="bg-[#1e3a8a] py-16 text-center text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Ready to find out what your business is worth?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Get a comprehensive valuation using our AI-powered platform in just minutes.</p>
                    <Link href="/valuation/start">
                        <Button size="lg" className="bg-[#f4a623] hover:bg-[#d99010] text-slate-900 font-bold">
                            Get Your Valuation Now
                        </Button>
                    </Link>
                </div>
            </section>
            <SiteFooter />
        </div>
    )
}
