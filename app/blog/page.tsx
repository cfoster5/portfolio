import Link from "next/link";
import { format } from "date-fns";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { alternatesFor, siteName } from "@/lib/site";

const title = "Blog";
const description =
  "Posts by Corey Foster on iOS and web development, shipping side projects, and the apps he builds.";

export const metadata: Metadata = {
  title: `${title} | ${siteName}`,
  description,
  alternates: alternatesFor("/blog"),
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    url: "/blog",
    title,
    description,
    images: ["/site.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/site.png"],
  },
};

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
                  {format(new Date(post.date + "T00:00:00"), "MMMM d, yyyy")}
                </p>
                <p className="mt-2">{post.description}</p>
              </article>
            ))}
          </div>
        )}
        <div className="mt-12 flex items-center gap-4">
          <Link
            href="/"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            ← Back to home
          </Link>
          <a
            href="/rss.xml"
            className="text-gray-500 hover:underline dark:text-gray-400"
          >
            RSS
          </a>
        </div>
      </main>
    </div>
  );
}
