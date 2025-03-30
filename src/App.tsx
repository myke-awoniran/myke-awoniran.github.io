import {useEffect, useState} from "react";
import {Sun, Moon, Github, Mail, Linkedin, X} from "lucide-react";

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

    return (
        <main className="min-h-screen bg-background text-foreground p-4 md:p-8">
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
                                <X className="w-5 h-5 hover:text-foreground"/>
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

                    <div className="space-y-2 mt-10">
                        <h1 className="text-4xl font-bold">
                            Michael Awoniran <span className="opacity-50">(Myke)</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Software Engineer passionate about database systems, query optimization, and DBMS internals.
                        </p>
                    </div>
                </header>

                <section className="space-y-2">
                    <h2 className="text-2xl font-semibold">Projects</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <strong>QueryCraft:</strong> An experimental PostgreSQL query optimizer playground. [<a
                            href="#" className="underline">View</a>]
                        </li>
                        <li>
                            <strong>MiniDB:</strong> A lightweight in-memory Java database engine exploring indexing and
                            transaction internals. [<a href="#" className="underline">View</a>]
                        </li>
                        <li>
                            <strong>PerfTrackr:</strong> A tool to benchmark and analyze slow queries in Node.js apps. [<a
                            href="#" className="underline">View</a>]
                        </li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className="text-2xl font-semibold">Blog</h2>
                    <p className="text-muted-foreground">I write about databases, performance tuning, and internal
                        system design.</p>
                    <ul className="list-disc list-inside space-y-1">
                        {blogPosts.map((post) => (
                            <li key={post.slug}>
                                <a href={`/blog/${post.slug}`} className="underline">
                                    {post.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                <footer className="pt-6 border-t mt-10">
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Built with TypeScript, TailwindCSS, and curiosity.</span>
                    </div>
                </footer>
            </div>
        </main>
    );
}
