import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BLOGS } from "../constant";

export default function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const foundBlog = BLOGS.find((blog) => blog.slug === slug);
    setBlog(foundBlog);
  }, [slug]);

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      <h2 className="font-bold text-2xl">{blog.title}</h2>
      <p> {blog?.post}</p>
    </article>
  );
}
