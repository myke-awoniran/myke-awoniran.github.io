"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {BLOGS} from "../constant";

export default function BlogPost() {
    const {slug} = useParams();
    const [blog, setBlog] = useState<any>(null);
    const [readTime, setReadTime] = useState<number>(0);

    useEffect(() => {
        const foundBlog = BLOGS.find((blog) => blog.slug === slug);
        setBlog(foundBlog);

        if (foundBlog?.post) {
            const wordCount = foundBlog.post.split(/\s+/).length;
            const minutes = Math.ceil(wordCount / 200);
            setReadTime(minutes);
        }
    }, [slug]);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-muted-foreground">Loading article...</p>
            </div>
        );
    }

    return (
        <>
            {/* Updated: Changed from <header> to <section> to avoid duplicate headers */}
            <section className="space-y-4">
                <h2 className="md:text-3xl text-2xl font-bold">{blog.title}</h2>
                <div className="text-muted-foreground text-base flex flex-col md:flex-row gap-1 md:gap-4">
                    <span>{blog.date}</span>
                    <span>Estimated read time: {readTime} min</span>
                </div>
            </section>

            <article className="prose dark:prose-invert prose-lg max-w-none leading-loose space-y-6">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {blog.post}
                </ReactMarkdown>
            </article>
        </>
    );
}
