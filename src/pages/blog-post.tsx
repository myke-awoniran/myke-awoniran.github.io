import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {BLOGS} from "../constant";

export default function BlogPost() {
    const {slug} = useParams();
    const [blog, setBlog] = useState<any>(null);

    useEffect(() => {
        const foundBlog = BLOGS.find((blog) => blog.slug === slug);
        setBlog(foundBlog);
    }, [slug]);

    if (!blog) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <p className="text-muted-foreground">Loading article...</p>
            </main>
        );
    }

    return (
        <main className="relative min-h-screen bg-background text-foreground p-4 md:p-8 overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-10">
                <article className="space-y-6">
                    <header className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold">{blog.title}</h1>
                        <p className="text-muted-foreground text-base">{blog.date}</p>
                        <p className="text-muted-foreground text-base">{blog.readTime}</p>
                    </header>
                    <section className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
                        <p>{blog.post}</p>
                    </section>
                </article>
            </div>
        </main>
    );
}
