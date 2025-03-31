import {getBlogPosts} from "../utils/getBlogPosts";
import {useState} from "react";

const POSTS_PER_PAGE = 5;

export default function BlogList() {
    const allPosts = getBlogPosts();
    const [page, setPage] = useState(1);

    const paginated = allPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

    return (
        <section className="p-4 space-y-4">
            <h1 className="text-2xl font-semibold opacity-80">Blog</h1>
            <ul className="list-disc list-inside space-y-2">
                {paginated.map((post) => (
                    <li key={post.slug}>
                        <a href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                            {post.title}
                        </a>{" "}
                        <span className="text-sm text-muted-foreground">({post.date})</span>
                    </li>
                ))}
            </ul>
            <div className="flex gap-4 items-center">
                <button
                    className="px-3 py-1 border rounded"
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                >
                    Prev
                </button>
                <span>
          Page {page} of {totalPages}
        </span>
                <button
                    className="px-3 py-1 border rounded"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                >
                    Next
                </button>
            </div>
        </section>
    );
}