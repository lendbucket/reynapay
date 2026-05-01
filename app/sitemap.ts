import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/blog";
import { INDUSTRIES, SOLUTIONS } from "@/lib/site-config";

const BASE = "https://reynapay.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/salontransact", priority: 0.9, freq: "weekly" as const },
    { path: "/partners", priority: 0.9, freq: "weekly" as const },
    { path: "/pricing", priority: 0.9, freq: "weekly" as const },
    { path: "/about", priority: 0.7, freq: "monthly" as const },
    { path: "/contact", priority: 0.7, freq: "monthly" as const },
    { path: "/blog", priority: 0.9, freq: "weekly" as const },
    { path: "/who-we-serve", priority: 0.9, freq: "weekly" as const },
    { path: "/solutions", priority: 0.9, freq: "weekly" as const },
    { path: "/sitemap", priority: 0.5, freq: "monthly" as const },
    { path: "/legal/terms", priority: 0.3, freq: "yearly" as const },
    { path: "/legal/privacy", priority: 0.3, freq: "yearly" as const },
    { path: "/legal/cookies", priority: 0.3, freq: "yearly" as const },
  ].map(({ path, priority, freq }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));

  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${BASE}/who-we-serve/${i.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const solutionPages: MetadataRoute.Sitemap = SOLUTIONS.map((s) => ({
    url: `${BASE}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticPages, ...industryPages, ...solutionPages, ...blogPages];
}
