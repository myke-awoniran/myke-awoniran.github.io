import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
    const {slug} = useParams<{ slug: string }>();
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        const load = async () => {
            try {
                const post = await import(`../blog/${slug}.md?raw`);
                console.log(post);
                const parsed = matter(post.default);
                setTitle(parsed.data.title);
                setDate(parsed.data.date);
                setContent(parsed.content);
            } catch (e) {
                setTitle("Not Found");
                setContent("");
            }
        };

        if (slug) load();
    }, [slug]);

    return (
        <article className="prose dark:prose-invert max-w-3xl mx-auto px-4 py-8">
            {title === "Not Found" ? (
                <div className="text-center mt-20 space-y-2 opacity-80">
                    <h2 className="text-2xl font-semibold">Blog Post Not Found</h2>
                    <p className="text-muted-foreground">I couldn’t find the post you were looking for.</p>
                    <a href="/blog" className="inline-block mt-4 text-blue-600 hover:underline transition">
                        ← Back to Blog
                    </a>
                </div>
            ) : (
                <>
                    <h1>{title}</h1>
                    {date && <p className="text-gray-500 text-sm">{date}</p>}
                    <ReactMarkdown>{content}</ReactMarkdown>
                </>
            )}
        </article>
    );
}