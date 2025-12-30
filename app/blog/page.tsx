import Link from "next/link";
import { format } from "date-fns";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 dark:text-white">
      <main className="mx-auto max-w-3xl px-8 py-16 sm:px-32">
        <h1 className="mb-8 text-4xl font-bold">All Posts</h1>
        {posts.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">
            No blog posts yet. Check back soon!
          </p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b pb-8 last:border-b-0"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-semibold hover:text-blue-600 dark:hover:text-blue-400">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </p>
                <p className="mt-2">{post.description}</p>
              </article>
            ))}
          </div>
        )}
        <div className="mt-12">
          <Link
            href="/"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
