import Link from "next/link";
import type { BlogFrontmatter } from "@/lib/blog";

interface Props {
  categories: Array<{ slug: BlogFrontmatter["category"]; label: string }>;
  active?: string;
}

export function BlogCategoryFilter({ categories, active }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <CategoryPill href="/blog" label="All" active={!active} />
      {categories.map((c) => (
        <CategoryPill key={c.slug} href={`/blog?category=${c.slug}`} label={c.label} active={active === c.slug} />
      ))}
    </div>
  );
}

function CategoryPill({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href} className={`text-sm font-semibold px-4 py-2 rounded-full transition-colors ${active ? "bg-[var(--color-teal)] text-white" : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]"}`}>
      {label}
    </Link>
  );
}
