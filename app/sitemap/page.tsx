import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { HeroSection } from "@/components/hero-section";
import { buildMetadata } from "@/lib/seo";
import { INDUSTRIES, SOLUTIONS, PRODUCTS } from "@/lib/site-config";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata = buildMetadata({
  title: "Sitemap — Reyna Pay",
  description: "Complete index of every page on reynapay.com — products, solutions, industries, blog posts, and resources.",
  path: "/sitemap",
});

export default function SitemapPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      <HeroSection
        eyebrow="Sitemap"
        headline="Every page, in one place."
        subheadline="A human-readable index of everything on reynapay.com. For the machine-readable version, see /sitemap.xml."
        primaryCta={{ label: "Home", href: "/" }}
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <SitemapColumn title="Main">
            <SitemapLink href="/">Home</SitemapLink>
            <SitemapLink href="/pricing">Pricing</SitemapLink>
            <SitemapLink href="/about">About</SitemapLink>
            <SitemapLink href="/contact">Contact</SitemapLink>
            <SitemapLink href="/partners">Partner Program</SitemapLink>
            <SitemapLink href="/apply">Apply</SitemapLink>
          </SitemapColumn>

          <SitemapColumn title="Products">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <a
                  href={p.url}
                  target={p.url.startsWith("http") && !p.url.includes("reynapay.com") ? "_blank" : undefined}
                  rel="noopener"
                  className="text-[0.9375rem] text-[var(--color-ink-muted)] hover:text-[var(--color-brand)]"
                >
                  {p.name} <span className="text-xs font-mono text-[var(--color-ink-subtle)]">({p.domain})</span>
                </a>
              </li>
            ))}
          </SitemapColumn>

          <SitemapColumn title="Solutions">
            <SitemapLink href="/solutions">All solutions</SitemapLink>
            {SOLUTIONS.map((s) => (
              <SitemapLink key={s.slug} href={`/solutions/${s.slug}`}>
                {s.name}
              </SitemapLink>
            ))}
          </SitemapColumn>

          <SitemapColumn title="Industries">
            <SitemapLink href="/who-we-serve">All industries</SitemapLink>
            {INDUSTRIES.map((i) => (
              <SitemapLink key={i.slug} href={`/who-we-serve/${i.slug}`}>
                {i.name}
              </SitemapLink>
            ))}
          </SitemapColumn>

          <SitemapColumn title="Blog">
            <SitemapLink href="/blog">All posts</SitemapLink>
            {posts.map((p) => (
              <SitemapLink key={p.slug} href={`/blog/${p.slug}`}>
                {p.title}
              </SitemapLink>
            ))}
          </SitemapColumn>

          <SitemapColumn title="Legal">
            <SitemapLink href="/legal/terms">Terms of Service</SitemapLink>
            <SitemapLink href="/legal/privacy">Privacy Policy</SitemapLink>
            <SitemapLink href="/legal/cookies">Cookie Policy</SitemapLink>
          </SitemapColumn>
        </div>
      </Section>
    </>
  );
}

function SitemapColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-subtle)] mb-4">{title}</h3>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function SitemapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[0.9375rem] text-[var(--color-ink-muted)] hover:text-[var(--color-brand)]">
        {children}
      </Link>
    </li>
  );
}
