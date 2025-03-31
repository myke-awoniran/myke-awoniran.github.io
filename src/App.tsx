import {useEffect, useState} from "react";
import {Sun, Moon, Github, Mail, Linkedin, Twitter, LucideLink} from "lucide-react";

export default function Home() {
    const [theme, setTheme] = useState("light");
    //
    // useEffect(() => {
    //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //     setTheme("dark");
    //     document.documentElement.classList.add("dark");
    //   }
    // }, []);
    useEffect(() => {
        // Force light theme on first load
        document.documentElement.classList.remove("dark");
        setTheme("light");
    }, []);


    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark");
    };

    const blogPosts = [
        {
            title: "Why PostgreSQL's Query Planner Thinks Differently",
            slug: "postgresql-query-planner",
        },
        {
            title: "Rebuilding Indexes Efficiently: Lessons from the Field",
            slug: "rebuilding-indexes-efficiently",
        },
        {
            title: "MVCC in Action: A Peek Into PostgreSQL Internals",
            slug: "mvcc-in-postgresql",
        },
    ];

    const year = new Date().getFullYear();

    return (
        <main className="relative min-h-screen bg-background text-foreground p-4 md:p-8 overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 -z-10 animate-pulse opacity-5 pointer-events-none">
                <div
                    className="w-[120%] h-[120%] bg-gradient-radial from-blue-400 via-transparent to-transparent rounded-full blur-3xl mx-auto mt-[30%]"/>
            </div>

            <div className="max-w-3xl mx-auto space-y-10">
                <header className="space-y-12">
                    <div className="flex justify-between items-center pt-8">
                        <div className="flex items-center space-x-4 text-muted-foreground">
                            <a href="https://github.com/myke-awoniran" aria-label="GitHub" target={'_blank'}>
                                <Github className="w-5 h-5 hover:text-foreground"/>
                            </a>
                            <a href="https://www.linkedin.com/in/myke-awoniran/" aria-label="LinkedIn"
                               target={'_blank'}>
                                <Linkedin className="w-5 h-5 hover:text-foreground"/>
                            </a>
                            <a href="https://x.com/mykethecsguy" aria-label="Email" target={'_blank'}>
                                <Twitter className="w-5 h-5 hover:text-foreground"/>
                            </a>
                            <a href="mailto:hello@mykecs.dev" aria-label="Email" target={'_blank'}>
                                <Mail className="w-5 h-5 hover:text-foreground"/>
                            </a>
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
                        <h1 className="text-3xl font-bold mb-4 opacity-80">
                            Hi, I’m Michael Awoniran
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            A Software Engineer passionate about database systems and DBMS internals.
                            I'm currently diving into Apache Pinot 🍷, a real-time OLAP DBMS.
                            {/*— contributing to real-time analytics, indexing*/}
                            {/*strategies,and execution planning.*/}
                        </p>
                        {/*<p className="text-muted-foreground">*/}
                        {/*    I enjoy unraveling how data flows beneath the surface — from storage engines to query*/}
                        {/*    lifecycles — and love*/}
                        {/*    building tools that make data systems faster and more expressive. I actively contribute to*/}
                        {/*    open-source projects*/}
                        {/*    in the data systems space.*/}
                        {/*</p>*/}
                        {/*<p className="text-muted-foreground">*/}
                        {/*    I also write about system design, and building resilient infrastructure.*/}
                        {/*    Soon, I hope to share insights through talks and collaborative projects.*/}
                        {/*</p>*/}
                        <p className="text-muted-foreground">
                            {/*Outside of code, I enjoy writing poem, calm spaces, and really enjoy to travel.*/}
                            {/*Based in Nigeria — always happy to connect.*/}
                            Beyond coding, I have a passion for poetry, appreciate serene environments, and love to
                            travel.
                            I also enjoy playing table tennis.
                        </p>
                    </div>
                </header>

                <section className="space-y-2">
                    <h2 className="text-2xl font-semibold opacity-80">Education</h2>
                    <div className="text-muted-foreground space-y-2">
                        <p>
                            Final-year B.Sc Computer Science and Engineering student at Obafemi Awolowo University
                            (OAU),
                            Nigeria.
                            My academic journey has blended theory and practice, with a strong focus on systems
                            programming, data structures,
                            and scalable computing.
                        </p>
                        <p>
                            Additionally, I’m taking both Introductory and Advanced Database Systems courses from
                            Carnegie Mellon University (CMU),
                            diving deep into storage engines, indexing, concurrency, and query planning.
                        </p>
                    </div>
                </section>

                <section className="space-y-2">
                    <h2 className="text-2xl font-semibold opacity-80">Projects</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li className="flex gap-1 items-center">
                            <strong>QueryCraft:</strong> An experimental PostgreSQL query optimizer playground. <a
                            href="#" className="underline"><LucideLink className="opacity-50" size={20}/></a>
                        </li>
                        <li className="flex gap-1 items-center">
                            <strong>MiniDB:</strong> A lightweight in-memory Java database engine exploring indexing and
                            transaction internals. <a href="#" className="underline"><LucideLink className="opacity-50"
                                                                                                 size={20}/></a>
                        </li>
                        <li className="flex gap-1 items-center">
                            <strong>PerfTrackr:</strong> A tool to benchmark and analyze slow queries in Node.js
                            apps. <a
                            href="#" className="underline"><LucideLink className="opacity-50" size={20}/></a>
                        </li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className="text-2xl font-semibold opacity-80">Blog</h2>
                    <p className="text-muted-foreground">I write about databases, performance tuning, and internal
                        system design.</p>
                    <ul className="list-disc list-inside space-y-1">
                        {blogPosts.map((post) => (
                            <li key={post.slug}>
                                <a href={`/blog/${post.slug}`} className="underline-none">
                                    {post.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                <footer className="pt-6 border-t mt-10">
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <p className="mb-2"> &copy; {year} Michael Awoniran. All rights reserved.</p>
                        {/*<span>Built with TypeScript, TailwindCSS, and curiosity.</span>*/}
                    </div>
                </footer>
            </div>
        </main>
    );
}
