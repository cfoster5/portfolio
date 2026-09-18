import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const title = "Corey Foster | Portfolio";
const description = "A web and app developer based in Evansville, IN";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
  openGraph: {
    type: "website",
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
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: "Corey Foster" }],
    },
  },
  other: {
    "msapplication-TileColor": "#da532c",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white dark:bg-zinc-900">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
