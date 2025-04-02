"use client";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {BLOGS} from "../constant";
import {Moon, Sun} from "lucide-react";
import {socials} from "../App"; // make sure this path is correct

export default function BlogPost() {
    const {slug} = useParams();
    const [blog, setBlog] = useState<any>(null);
    const [readTime, setReadTime] = useState<number>(0);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const foundBlog = BLOGS.find((blog) => blog.slug === slug);
        setBlog(foundBlog);

        if (foundBlog?.post) {
            const wordCount = foundBlog.post.split(/\s+/).length;
            const minutes = Math.ceil(wordCount / 200);
            setReadTime(minutes);
        }
    }, [slug]);

    useEffect(() => {
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

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
                {/* Header */}
                <header className="space-y-12">
                    <div className="flex justify-between items-center pt-8">
                        <div className="flex items-center space-x-4 text-muted-foreground">
                            {socials.map(({href, label, icon}) => (
                                <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                                    {icon}
                                </a>
                            ))}
                        </div>
                        <button onClick={toggleTheme} aria-label="Toggle Theme">
                            {theme === "light" ? (
                                <Moon className="w-5 h-5 text-muted-foreground hover:text-foreground"/>
                            ) : (
                                <Sun className="w-5 h-5 text-muted-foreground hover:text-foreground"/>
                            )}
                        </button>
                    </div>

                    <section className="space-y-4">
                        <h2 className="md:text-3xl text-2xl font-bold">{blog.title}</h2>
                        <div className="text-muted-foreground text-base flex flex-col md:flex-row gap-1 md:gap-4">
                            <span>{blog.date}</span>
                            <span>Estimated read time: {readTime} min</span>
                        </div>
                    </section>
                </header>

                {/* Blog content */}
                <article className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
                    <p>{blog.post}</p>
                </article>
            </div>
        </main>
    );
}
