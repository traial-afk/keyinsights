import { getAllPosts } from "@/lib/blog-api"
import { BlogListing } from "@/components/blog/blog-listing"

import { SiteFooter } from "@/components/site-footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Business Valuation Resources & Blog | KeyInsightsAI",
    description: "Insights on business valuation, exit planning, and market trends for founders and advisors.",
}

export default function BlogPage() {
    const posts = getAllPosts()
    return (
        <>
            <BlogListing posts={posts} />
            <SiteFooter />
        </>
    )
}
