import { ImageResponse } from "next/og";
import { format } from "date-fns";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteName } from "@/lib/site";

export const alt = "Blog post on coreyfoster.dev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#18181b",
        padding: 80,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 30, color: "#a1a1aa" }}>
          {post
            ? format(new Date(`${post.date}T00:00:00`), "MMMM d, yyyy")
            : ""}
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
          }}
        >
          {post?.title ?? siteName}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ width: 14, height: 48, background: "#2563eb" }} />
        <div style={{ fontSize: 34, color: "#e4e4e7" }}>coreyfoster.dev</div>
      </div>
    </div>,
    size,
  );
}
