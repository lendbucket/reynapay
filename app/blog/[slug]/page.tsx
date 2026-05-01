import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Section } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { BlogCard } from "@/components/blog-card";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import {
  getAllPostSlugs,
  getAllPostsMeta,
  getPostBySlug,
  CATEGORIES,
} from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post)
    return buildMetadata({
      title: "Not found",
      description: "",
      path: `/blog/${slug}`,
    });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    ogImage: post.ogImage ?? "/og/default.png",
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const url = `https://reynapay.com/blog/${slug}`;
  const category =
    CATEGORIES.find((c) => c.slug === post.category)?.label ?? post.category;
  const related = getAllPostsMeta()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          url,
          image: `https://reynapay.com${post.ogImage ?? "/og/default.png"}`,
          datePublished: post.date,
          authorName: post.author,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://reynapay.com" },
          { name: "Blog", url: "https://reynapay.com/blog" },
          { name: post.title, url },
        ])}
      />

      <article className="bg-white">
        <div className="container-page max-w-3xl pt-8 md:pt-12 pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-teal)] mb-8"
          >
            <ArrowLeft size={16} /> Back to blog
          </Link>
          <div className="flex items-center gap-3 text-xs mb-4">
            <span className="text-[var(--color-teal)] font-semibold uppercase tracking-wider">
              {category}
            </span>
            <span className="text-[var(--color-text-muted)]">·</span>
            <time
              dateTime={post.date}
              className="text-[var(--color-text-muted)]"
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-[var(--color-text-muted)]">·</span>
            <span className="inline-flex items-center gap-1 text-[var(--color-text-muted)]">
              <Clock size={12} />
              {post.readingTime} min read
            </span>
          </div>
          <h1 className="mb-6">{post.title}</h1>
          <div className="flex items-center gap-3 pb-8 border-b border-[var(--color-border)] mb-10">
            <div className="w-10 h-10 rounded-full bg-[var(--color-teal-light)] flex items-center justify-center text-[var(--color-teal)] font-semibold text-sm">
              {post.author
                .split(" ")
                .map((p) => p[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div>
              <div className="text-sm font-semibold">{post.author}</div>
              <div className="text-xs text-[var(--color-text-muted)]">
                Reyna Pay
              </div>
            </div>
          </div>
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>

      {related.length > 0 && (
        <Section variant="soft">
          <h2 className="text-center mb-10">Related reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Section>
      )}

      <CTASection
        title="Ready to switch to a processor that gets it?"
        description="Apply in minutes. Most salons approved within 24 hours."
        primaryLabel="Apply now"
        primaryHref="/apply"
        secondaryLabel="Talk to our team"
        secondaryHref="/contact"
      />
    </>
  );
}
