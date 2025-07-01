import {BLOGS_DISPLAY} from "./constant";
import {ArrowRight} from "lucide-react";

export default function Home() {
    return (
        <>
            <header className="space-y-12">
                {/*<div className="space-y-2">*/}
                {/*    <h1 className="md:text-3xl text-2xl font-bold mb-4 opacity-80">*/}
                {/*        Michael Awoniran <span className="opacity-50">(Myke)</span>*/}
                {/*    </h1>*/}
                {/*    <p className="text-lg text-muted-foreground">*/}
                {/*        Hi, my name is Michael (he/him).*/}
                {/*    </p>*/}
                {/*    <p className="text-muted-foreground">*/}
                {/*        - Software Engineer passionate about databases and distributed systems.*/}
                {/*    </p>*/}
                {/*    <p className="text-muted-foreground">*/}
                {/*        - Currently, I am exploring Apache Pinot, a real-time OLAP database built for ultra-low-latency*/}
                {/*        analytics at scale.*/}
                {/*    </p>*/}

                {/*    <p className="text-muted-foreground">*/}
                {/*        - Currently, I am exploring Apache Pinot, a real-time OLAP database built for ultra-low-latency*/}
                {/*        analytics at scale.*/}
                {/*    </p>*/}

                {/*    <p className="text-muted-foreground">*/}
                {/*        - Beyond coding, I spend my extracurricular time playing table tennis. I love to admire the*/}
                {/*        beauty of nature and I find traveling quite lovable.*/}
                {/*    </p>*/}
                {/*</div>*/}
                <div className="space-y-2">
                    <h1 className="md:text-3xl text-2xl font-bold mb-6 opacity-80">
                        Michael Awoniran <span className="opacity-50">(Myke)</span>
                    </h1>

                    <p className="text-lg font-semibold text-muted-foreground">
                        Hey, I'm Michael (he/him).
                    </p>

                    <p className="text-muted-foreground">
                        - Software Engineer with strong background in cs + engineering.
                    </p>

                    <p className="text-muted-foreground">
                        - Passionate about databases and distributed systems.
                    </p>

                    <p className="text-muted-foreground">
                        - Exploring Apache Pinot, a real-time OLAP database built for ultra-low-latency
                        analytics at scale.
                    </p>

                    <p className="text-muted-foreground">
                        - Beyond coding, I enjoy playing table tennis, admiring nature’s beauty, and traveling.
                    </p>
                </div>

            </header>

            <section className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold opacity-80">Projects</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <a href="https://github.com/myke-awoniran/NASA-API">
                            <strong>NASA App:</strong> Interactive App for exploring exoplanet data and identifying
                            potentially
                            habitable planets.
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/myke-awoniran/Crop_health_simulation">
                            <strong>Crop Health Simulation:</strong> Experimental model to simulate crop health @ OAU.
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/myke-awoniran/A-life-simulation">
                            <strong>A life Simulation:</strong> A-Life simulation leveraging Go's goroutines and
                            concurrency
                            primitives.
                        </a>
                    </li>
                </ul>
                <a href="/projects" className="flex gap-2 items-center font-semibold">
                    View more <ArrowRight size={18}/>
                </a>
            </section>

            <section className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold opacity-80">Blog</h2>
                <p className="text-muted-foreground">
                    I write about Computer Science, Software Engineering, Databases, and Distributed Systems.
                </p>
                <div className="space-y-2">
                    <ul className="list-disc list-inside space-y-1">
                        {BLOGS_DISPLAY.slice(0, 3).map((post) => ( // Slice to show only 3 blogs
                            <li key={post.slug}>
                                <a href={`/blog/${post.slug}`} className="no-underline hover:underline">
                                    {post.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a href="/blog" className="flex gap-2 items-center font-semibold">
                        View more <ArrowRight size={18}/>
                    </a>
                </div>
            </section>

        </>
    );
}
