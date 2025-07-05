import {useEffect, useState} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {
    ArrowLeft,
    Github,
    Linkedin,
    Mail,
    Moon,
    Sun,
    Twitter,
} from "lucide-react";

export const socials = [
    {
        href: "https://github.com/myke-awoniran",
        label: "GitHub",
        icon: <Github className="w-5 h-5" aria-hidden="true"/>,
    },
    {
        href: "https://www.linkedin.com/in/myke-awoniran/",
        label: "LinkedIn",
        icon: <Linkedin className="w-5 h-5" aria-hidden="true"/>,
    },
    {
        href: "https://x.com/_m_y_k_e",
        label: "Twitter",
        icon: <Twitter className="w-5 h-5" aria-hidden="true"/>,
    },
    {
        href: "mailto:contact@myke.pro",
        label: "Email",
        icon: <Mail className="w-5 h-5" aria-hidden="true"/>,
    },
];

export default function () {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const year = new Date().getFullYear();
    const navigate = useNavigate();
    const location = useLocation();

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
                {/* ───── Header ───── */}
                <header className="flex justify-between items-center pt-4 md:pt-8">
                    {/* Left side: Back + Socials */}
                    <div className="flex items-center space-x-4 text-muted-foreground">
                        {location.pathname !== "/" && (
                            <button
                                onClick={() => navigate(-1)}
                                aria-label="Go Back"
                                className="hover:text-foreground"
                            >
                                <ArrowLeft className="w-5 h-5" aria-hidden="true"/>
                            </button>
                        )}

                        {socials.map(({href, label, icon}) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="hover:text-foreground"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* Right side: Research + Theme Toggle */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="/research"
                            aria-label="Research Projects"
                            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-2"
                        >
                            Research Projects
                        </a>

                        <button onClick={toggleTheme} aria-label="Toggle Theme">
                            {theme === "light" ? (
                                <Moon className="w-5 h-5 text-muted-foreground hover:text-foreground"/>
                            ) : (
                                <Sun className="w-5 h-5 text-muted-foreground hover:text-foreground"/>
                            )}
                        </button>
                    </div>
                </header>

                {/* Outlet renders the active route */}
                <Outlet/>

                {/* ───── Footer ───── */}
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
