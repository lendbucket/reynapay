import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/blog";

const BASE = "https://reynapay.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/salontransact",
    "/partners",
    "/pricing",
    "/about",
    "/contact",
    "/blog",
    "/legal/terms",
    "/legal/privacy",
    "/legal/cookies",
  ].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
