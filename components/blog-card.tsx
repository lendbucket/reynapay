import Link from "next/link";
import type { BlogFrontmatter } from "@/lib/blog";
import { CATEGORIES } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogFrontmatter }) {
  const category = CATEGORIES.find((c) => c.slug === post.category)?.label ?? post.category;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] overflow-hidden transition-transform hover:-translate-y-0.5"
    >
      <div className="aspect-[16/9] bg-[var(--color-teal-light)] flex items-center justify-center text-[var(--color-teal)]/40 text-xs uppercase tracking-wider">
        {post.ogImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.ogImage} alt={post.title} className="w-full h-full object-cover" />
        ) : (
          <span>Cover image</span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)] mb-3">
          <span className="text-[var(--color-teal)] font-semibold uppercase tracking-wider">
            {category}
          </span>
          <span>·</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </div>
        <h3 className="text-lg leading-snug mb-2 group-hover:text-[var(--color-teal)] transition-colors">
          {post.title}
        </h3>
        <p className="text-[0.9375rem] text-[var(--color-text-secondary)] line-clamp-3">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
