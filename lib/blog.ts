import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: "industry" | "product" | "partner-spotlight" | "compliance" | "founder-notes";
  author: string;
  ogImage?: string;
}

export interface BlogPost extends BlogFrontmatter {
  contentHtml: string;
  readingTime: number;
}

function calcReadingTime(text: string): number {
  const wordsPerMinute = 220;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);
  return {
    ...(data as BlogFrontmatter),
    contentHtml: processed.toString(),
    readingTime: calcReadingTime(content),
  };
}

export function getAllPostsMeta(): BlogFrontmatter[] {
  return getAllPostSlugs()
    .map((slug) => {
      const filePath = path.join(BLOG_DIR, `${slug}.md`);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);
      return data as BlogFrontmatter;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const CATEGORIES: Array<{ slug: BlogFrontmatter["category"]; label: string }> = [
  { slug: "industry", label: "Industry" },
  { slug: "product", label: "Product" },
  { slug: "partner-spotlight", label: "Partner Spotlight" },
  { slug: "compliance", label: "Compliance" },
  { slug: "founder-notes", label: "Founder Notes" },
];
