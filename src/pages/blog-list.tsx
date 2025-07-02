"use client";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BLOGS_DISPLAY } from "../constant";

const PAGE_SIZE = 6;

export default function BlogListSimple() {
    /* ─── Background music logic ────────────────────────────────────────────── */
    const audioRef = useRef<HTMLAudioElement>(null);
    const [needsPlay, setNeedsPlay] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const tryAutoplay = async () => {
            try {
                await audio.play();
            } catch {
                setNeedsPlay(true); // Show play-button fallback
            }
        };

        tryAutoplay();
    }, []);

    const handleManualPlay = async () => {
        const audio = audioRef.current;
        if (!audio) return;
        await audio.play();
        setNeedsPlay(false);
    };

    /* ─── Blog list pagination ──────────────────────────────────────────────── */
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const navigate = useNavigate();
    const visibleBlogs = BLOGS_DISPLAY.slice(0, visibleCount);
    const handleLoadMore = () => setVisibleCount((prev) => prev + PAGE_SIZE);

    /* ─── JSX ───────────────────────────────────────────────────────────────── */
    return (
        <section className="space-y-8">
            {/* Hidden background music */}
            <audio
                ref={audioRef}
                src="/music/Hans_Zimmer_-_Time_from_Inception_OST_(Hydr0.org).mp3" /* update if path differs */
                loop
                preload="auto"
                hidden
            />

            {/* Play button fallback (appears only if autoplay failed) */}
            {needsPlay && (
                <button
                    onClick={handleManualPlay}
                    className="fixed bottom-4 left-4 z-50 px-4 py-2 rounded-full bg-gray-800 text-white text-sm shadow-lg animate-pulse"
                >
                    ▶ Play music
                </button>
            )}

            {/* Page header */}
            <div className="space-y-4">
                <h2 className="md:text-3xl text-2xl font-bold">Engineering Blog</h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    I write about Computer Science, Software Engineering, Databases, and Distributed Systems.
                </p>
            </div>

            {/* Blog entries */}
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

            {/* Load-more button */}
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
