"use client";
import {useEffect, useState} from "react";
import {BLOGS_DISPLAY} from "../constant";
import {Moon, Sun} from "lucide-react";
import {socials} from "../App"; // use your actual blog list here

const PAGE_SIZE = 6;

export default function BlogListSimple() {
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const visibleBlogs = BLOGS_DISPLAY.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + PAGE_SIZE);
    };

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <main className="relative min-h-screen bg-background text-foreground p-4 md:p-8 overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-10">
                <header className="space-y-12">
                    <div className="flex justify-between items-center pt-8">
                        <div className="flex items-center space-x-4 text-muted-foreground">
                            {socials.map(({href, label, icon}) => (
                                <a key={label} href={href} aria-label={label} target="_blank">
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
                    <section className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="md:text-3xl text-2xl font-bold">Engineering Blog</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl">
                                I write about Computer Science, Software Engineering, Databases, and Distributed
                                Systems.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {visibleBlogs.map((post) => (
                                <li key={post.slug} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex flex-col space-y-1">
                                        <a
                                            href={`/blog/${post.slug}`}
                                            className="text-l font-semibold text-black-400 dark:text-blue-400 hover:underline"
                                        >
                                            {post.title}
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {visibleCount < BLOGS_DISPLAY.length && (
                            <div className="text-center mt-8">
                                <button
                                    onClick={handleLoadMore}
                                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors"
                                >
                                    Load More Articles
                                </button>
                            </div>
                        )}
                    </section>
                </header>
            </div>
        </main>
    );
}
