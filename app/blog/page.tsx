import { HeroSection } from "@/components/hero-section";
import { Section } from "@/components/section";
import { BlogCard } from "@/components/blog-card";
import { CTASection } from "@/components/cta-section";
import { BlogCategoryFilter } from "@/components/blog-category-filter";
import { getAllPostsMeta, CATEGORIES } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog — Salon payments, partner playbooks, founder notes",
  description: "Insights on salon payment processing, the merchant services industry, building a payments business, and what we're learning at Reyna Pay.",
  path: "/blog",
});

export default async function BlogIndex({ searchParams }: { searchParams?: Promise<{ category?: string }> }) {
  const params = (await searchParams) ?? {};
  const allPosts = getAllPostsMeta();
  const activeCategory = params.category;
  const filtered = activeCategory ? allPosts.filter((p) => p.category === activeCategory) : allPosts;

  return (
    <>
      <HeroSection
        eyebrow="Blog"
        headline="Notes from the payments frontier."
        subheadline="Practical guides for salon owners, playbooks for partners, and what we're learning as we build Reyna Pay in public."
        primaryCta={{ label: "Apply now", href: "/apply" }}
        secondaryCta={{ label: "Subscribe", href: "/contact" }}
      />
      <Section>
        <BlogCategoryFilter categories={CATEGORIES} active={activeCategory} />
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-[var(--color-text-muted)]">No posts in this category yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filtered.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        )}
      </Section>
      <CTASection title="Ready to take the next step?" primaryLabel="Apply as a salon" primaryHref="/apply" secondaryLabel="Apply as a partner" secondaryHref="/partners" />
    </>
  );
}
