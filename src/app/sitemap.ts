import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog-api'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://keyinsights.ai' // Default to project name or config
    const posts = getAllPosts()

    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const routes = [
        '',
        '/pricing',
        '/blog',
        '/buyer',
        '/selling',
        '/advisor',
        '/why-us',
        '/estimate',
        '/auth/login',
        '/auth/signup',
        '/valuation/start',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return [...routes, ...blogUrls]
}
