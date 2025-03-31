import {blogPosts} from "../data/blogPosts";

export function BlogSection() {
    return (
        <section className="space-y-2">
            <h2 className="md:text-2xl text-xl font-semibold opacity-80">Blog</h2>
            <p className="text-muted-foreground">
                I write about Computer Science, software Engineering, Databases and Distributed systems.
            </p>
            <ul className="list-disc list-inside space-y-1">
                {blogPosts.map((post) => (
                    <li key={post.slug}>
                        <a href={`/blog/${post.slug}`} className="no-underline hover:underline">
                            {post.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
