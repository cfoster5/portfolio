import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00Z`),
  }));

  return [
    { url: siteUrl },
    { url: `${siteUrl}/blog` },
    ...posts,
    { url: `${siteUrl}/simply-water` },
    { url: `${siteUrl}/pto-pacer` },
  ];
}
