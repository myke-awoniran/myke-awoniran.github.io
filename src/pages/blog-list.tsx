"use client";
import {useState} from "react";
import {useNavigate} from "react-router-dom"; // Import useNavigate
import {BLOGS_DISPLAY} from "../constant";

const PAGE_SIZE = 6;

export default function BlogListSimple() {
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const navigate = useNavigate(); // Moved outside for proper scope

    const visibleBlogs = BLOGS_DISPLAY.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + PAGE_SIZE);
    };

    return (
        <section className="space-y-8">
            <div className="space-y-4">
                <h2 className="md:text-3xl text-2xl font-bold">Engineering Blog</h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    I write about Computer Science, Software Engineering, Databases, and Distributed Systems.
                </p>
            </div>

            <ul className="space-y-4">
                {visibleBlogs.map((post) => (
                    <li
                        key={post.slug}
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        <div className="flex flex-col space-y-1">
                            <span className="text-l font-semibold text-black-600 dark:text-blue-400 hover:underline">
                                {post.title}
                            </span>
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
    );
}
