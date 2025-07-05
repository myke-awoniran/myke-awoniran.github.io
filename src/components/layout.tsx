import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
    Github,
    Linkedin,
    Mail,
    Moon,
    Sun,
    Twitter,
    FlaskConical,   // ← NEW
} from "lucide-react";

export const socials = [
    {
        href: "https://github.com/myke-awoniran",
        label: "GitHub",
        icon: <Github className="w-5 h-5" />,
    },
    {
        href: "https://www.linkedin.com/in/myke-awoniran/",
        label: "LinkedIn",
        icon: <Linkedin className="w-5 h-5" />,
    },
    {
        href: "https://x.com/_m_y_k_e",
        label: "Twitter",
        icon: <Twitter className="w-5 h-5" />,
    },
    {
        href: "mailto:contact@myke.pro",
        label: "Email",
        icon: <Mail className="w-5 h-5" />,
    },
];

export default function Layout() {
    const [theme, setTheme] = useState(() => {
        // Load from localStorage or default to 'light'
        return localStorage.getItem("theme") || "light";
    });

    const year = new Date().getFullYear();

    useEffect(() => {
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <main className="relative min-h-screen bg-background text-foreground p-4 md:p-8 overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-10">
                {/* ───── Header with socials, research icon, and theme toggle ───── */}
                <header className="flex justify-between items-center pt-8">
                    {/* Social links (left) */}
                    <div className="flex items-center space-x-4 text-muted-foreground">
                        {socials.map(({ href, label, icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* Research icon + theme toggle (right) */}
                    <div className="flex items-center space-x-4">
                        {/* Research icon */}
                        <a
                            href="/#research"   // assumes Home route is "/"
                            aria-label="Research Area"
                            className="p-2 rounded-full hover:bg-muted transition-colors"
                        >
                            <FlaskConical className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                        </a>

                        {/* Light/Dark toggle */}
                        <button onClick={toggleTheme} aria-label="Toggle Theme">
                            {theme === "light" ? (
                                <Moon className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                            ) : (
                                <Sun className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                            )}
                        </button>
                    </div>
                </header>

                {/* Outlet renders the active page */}
                <Outlet />

                {/* ─────────────── Footer ─────────────── */}
                <footer className="pt-6 border-t mt-10">
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <p>&copy; {year} Michael Awoniran. All rights reserved.</p>
                        <p>
                            Feel free to reach out:{" "}
                            <a
                                href="mailto:contact@myke.pro"
                                className="underline underline-offset-2 decoration-transparent transition-colors duration-200 hover:decoration-current hover:text-foreground"
                            >
                                contact@myke.pro
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
        </main>
    );
}
