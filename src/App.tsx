import {useEffect, useState} from "react";
import {
    Sun,
    Moon,
    Github,
    Mail,
    Linkedin,
    Twitter,
    LucideLink,
    ArrowRight,
} from "lucide-react";
import {BLOGS_DISPLAY} from "./constant";

export const socials = [
    {
        href: "https://github.com/myke-awoniran",
        label: "GitHub",
        icon: <Github className="w-5 h-5"/>,
    },
    {
        href: "https://www.linkedin.com/in/myke-awoniran/",
        label: "LinkedIn",
        icon: <Linkedin className="w-5 h-5"/>,
    },
    {
        href: "https://x.com/mykethecsguy",
        label: "Twitter",
        icon: <Twitter className="w-5 h-5"/>,
    },
    {
        href: "mailto:hello@mykecs.dev",
        label: "Email",
        icon: <Mail className="w-5 h-5"/>,
    },
];

export default function Home() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    const year = new Date().getFullYear();

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

                    <div className="space-y-2">
                        <h1 className="md:text-3xl text-2xl font-bold mb-4 opacity-80">
                            Michael Awoniran <span className="opacity-50">(Myke)</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Hi, I&apos;m Myke, a Software Engineer passionate about databases
                            and distributed systems. I'm currently exploring Apache Pinot 🍇,
                            a real-time OLAP database built for ultra-low-latency analytics at
                            scale. — contributing to real-time analytics, indexing
                            strategies,and execution planning.
                        </p>

                        <p className="text-muted-foreground">
                            Outside of code, I enjoy writing poem, appreciate serene
                            environments, and love to travel. I also enjoy playing table
                            tennis.
                        </p>
                    </div>
                </header>

                {/* Projects */}
                <section className="space-y-2">
                    <h2 className="md:text-2xl text-xl font-semibold opacity-80">
                        Projects
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li className="flex gap-1 items-center">
                            <a href="https://github.com/myke-awoniran/NASA-API">
                                <strong>NASA App:</strong> Interactive App for exploring
                                exoplanet data and identifying potentially habitable planets.
                            </a>
                        </li>
                        <li className="flex gap-1 items-center">
                            <a href="https://github.com/myke-awoniran/Crop_health_simulation">
                                <strong>Crop Health Simulation:</strong> Experimental model to
                                simulate crop health @ OAU.
                            </a>
                        </li>
                        <li className="flex gap-1 items-center">
                            <a href="https://github.com/myke-awoniran/A-life-simulation">
                                <strong>A life Simulation:</strong> A-Life simulation leveraging
                                Go's goroutines and concurrency primitives.
                            </a>
                        </li>
                    </ul>
                </section>

                {/* Blogs */}
                <section className="space-y-2">
                    <h2 className="md:text-2xl text-xl font-semibold opacity-80">Blog</h2>
                    <p className="text-muted-foreground">
                        I write about Computer Science, software Engineering, Databases and
                        Distributed systems.
                    </p>
                    <div className="space-y-2">
                        <ul className="list-disc list-inside space-y-1">
                            {BLOGS_DISPLAY.map((post) => (
                                <li key={post.slug}>
                                    <a
                                        href={`/blog/${post.slug}`}
                                        className="no-underline hover:underline"
                                    >
                                        {post.title}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <a href="/blog" className="flex gap-2 items-center">
                            View more <ArrowRight size={18}/>
                        </a>
                    </div>
                </section>

                {/* footer */}
                <footer className="pt-6 border-t mt-10">
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <p className="mb-2">
                            &copy; {year} Michael Awoniran. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </main>
    );
}
