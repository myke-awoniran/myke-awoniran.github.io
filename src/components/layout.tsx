import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {Github, Linkedin, Mail, Moon, Sun, Twitter} from "lucide-react";

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

export default function Layout() {
    const [theme, setTheme] = useState("light");
    const year = new Date().getFullYear();

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
                {/* Header with socials and theme toggle */}
                <header className="flex justify-between items-center pt-8">
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
                </header>

                {/* This is where child pages like Home and BlogPost will be rendered */}
                <Outlet/>

                {/* Footer */}
                <footer className="pt-6 border-t mt-10">
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <p className="mb-2">&copy; {year} Michael Awoniran. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </main>
    );
}
