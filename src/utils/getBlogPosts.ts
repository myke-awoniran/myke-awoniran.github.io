import matter from "gray-matter";

export interface BlogPostMeta {
    slug: string;
    title: string;
    date: string;
}

export function getBlogPosts(): BlogPostMeta[] {
    const postFiles = import.meta.glob("../blog/*.md", {
        eager: true,
        as: "raw",
    });

    console.log(postFiles)

    return Object.entries(postFiles).map(([path, content]) => {
        const slug = path
            .split("/")
            .pop()
            ?.replace(".md", "") ?? "";

        const {data} = matter(content as string);

        return {
            slug,
            title: data.title,
            date: data.date,
        };
    }).sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
