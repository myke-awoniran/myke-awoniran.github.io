import { BLOGS } from "../constant";

export default function BlogList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Developer Insights
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Sharing knowledge and experiences from my development journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOGS.map((blog) => (
          <article
            key={blog.slug}
            className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute bottom-3 right-3 bg-gray-900/80 text-white text-xs px-2 py-1 rounded">
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {blog.excerpt}
              </p>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                  {blog.readTime || "5 min read"}
                </span>
                <a
                  href={`/blog/${blog.slug}`}
                  className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center transition-colors"
                >
                  Read more
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {BLOGS.length > 6 && (
        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors">
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
}
