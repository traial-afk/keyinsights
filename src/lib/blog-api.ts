import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    content: string;
    featured?: boolean;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
}

export function getAllPosts(): BlogPost[] {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const slug = fileName.replace(/\.md$/, "")

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            slug,
            title: matterResult.data.title,
            excerpt: matterResult.data.excerpt,
            date: matterResult.data.date,
            readTime: matterResult.data.readTime,
            category: matterResult.data.category,
            image: matterResult.data.image,
            featured: matterResult.data.featured || false,
            author: {
                name: matterResult.data.author_name,
                role: matterResult.data.author_role,
                avatar: matterResult.data.author_avatar,
            },
            content: matterResult.content, // Raw Markdown content
        } as BlogPost
    })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export async function getPostData(slug: string): Promise<BlogPost | null> {
    const fullPath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
        return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        slug,
        title: matterResult.data.title,
        excerpt: matterResult.data.excerpt,
        date: matterResult.data.date,
        readTime: matterResult.data.readTime,
        category: matterResult.data.category,
        image: matterResult.data.image,
        featured: matterResult.data.featured || false,
        author: {
            name: matterResult.data.author_name,
            role: matterResult.data.author_role,
            avatar: matterResult.data.author_avatar,
        },
        content: contentHtml,
    } as BlogPost
}
