import fs from "fs"
import path from "path"
import matter from "gray-matter"

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
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
        .map((fileName) => {
            // Remove ".md" or ".mdx" from file name to get id
            const slug = fileName.replace(/\.mdx?$/, "")

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
                content: matterResult.content, // Raw Markdown/MDX content
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
    // Check for .md first, then .mdx
    let fullPath = path.join(postsDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
        fullPath = path.join(postsDirectory, `${slug}.mdx`)
        if (!fs.existsSync(fullPath)) {
            return null
        }
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

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
        content: matterResult.content, // Return raw content for next-mdx-remote
    } as BlogPost
}
