import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { Section, SectionHeader } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { Card } from "@/components/card";
import { Button } from "@/components/button";
import { JsonLd, breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SOLUTIONS, INDUSTRIES } from "@/lib/site-config";
import { SOLUTION_CONTENT } from "@/lib/solutions-content";
import { getAllPostsMeta } from "@/lib/blog";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.slug === slug);
  const content = SOLUTION_CONTENT[slug];
  if (!sol) return buildMetadata({ title: "Not found", description: "", path: `/solutions/${slug}` });
  return buildMetadata({
    title: `${sol.name}, Reyna Pay`,
    description: content?.hero.subheadline.slice(0, 160) ?? sol.description,
    path: `/solutions/${slug}`,
    keywords: content?.seoKeywords ?? [],
  });
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.slug === slug);
  if (!sol) notFound();
  const content = SOLUTION_CONTENT[slug];
  if (!content) notFound();

  const allPosts = getAllPostsMeta();
  const relatedPosts = content.relatedBlogPosts
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const relatedSolutions = content.relatedSolutions
    .map((s) => SOLUTIONS.find((sol) => sol.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relatedIndustries = content.relatedIndustries
    .map((s) => INDUSTRIES.find((i) => i.slug === s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://reynapay.com" },
          { name: "Solutions", url: "https://reynapay.com/solutions" },
          { name: sol.name, url: `https://reynapay.com/solutions/${slug}` },
        ])}
      />
      <JsonLd data={faqPageSchema(content.faqs)} />

      {content.hero.imageUrl ? (
        <section
          className="relative overflow-hidden flex items-center"
          style={{ minHeight: "560px", paddingTop: "5rem", paddingBottom: "5rem" }}
        >
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={content.hero.imageUrl}
              alt={content.hero.imageAlt ?? sol.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand)]/95 via-[var(--color-brand)]/85 to-[var(--color-brand)]/92" />
          </div>
          <div className="relative container-page w-full">
            <div className="max-w-3xl mx-auto text-center text-[var(--color-accent)]">
              <div className="eyebrow eyebrow-on-brand mb-5 inline-block">Solution</div>
              <h1 className="mb-5 text-balance text-[var(--color-accent)]">{content.hero.headline}</h1>
              <p className="text-[1.0625rem] md:text-xl text-[var(--color-accent)]/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                {content.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="/apply" variant="cream" size="lg">
                  Get started <ArrowRight size={16} />
                </Button>
                <Button href="/pricing" variant="outline-cream" size="lg">
                  See pricing
                </Button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <HeroSection
          eyebrow="Solution"
          headline={content.hero.headline}
          subheadline={content.hero.subheadline}
          primaryCta={{ label: "Get started", href: "/apply" }}
          secondaryCta={{ label: "See pricing", href: "/pricing" }}
        />
      )}

      {content.problem && (
        <Section variant="default">
          <div className="max-w-3xl mx-auto text-center">
            <div className="eyebrow mb-4">The reality</div>
            <h2 className="mb-5 text-balance">{content.problem.title}</h2>
            <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed mb-8">{content.problem.body}</p>
            {content.problem.bullets && content.problem.bullets.length > 0 && (
              <ul className="space-y-3 text-left max-w-2xl mx-auto">
                {content.problem.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--color-ink-muted)] leading-relaxed">
                    <span className="text-[var(--color-brand)] font-bold mt-0.5 flex-shrink-0">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Section>
      )}

      {content.outcomes && (
        <Section variant="brand">
          <div className="max-w-4xl mx-auto text-center">
            <div className="eyebrow eyebrow-on-brand mb-5 inline-block">The numbers</div>
            <h2 className="mb-5 text-balance text-[var(--color-accent)]">{content.outcomes.title}</h2>
            <p className="text-lg text-[var(--color-accent)]/85 leading-relaxed mb-12 max-w-2xl mx-auto">
              {content.outcomes.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {content.outcomes.stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-2 tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-sm text-[var(--color-accent)]/80 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section variant="default">
        <div className="max-w-3xl mx-auto text-center">
          <div className="eyebrow mb-4">Why Reyna Pay</div>
          <h2 className="mb-5 text-balance">{content.whyUs.title}</h2>
          <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed">{content.whyUs.description}</p>
          <div className="mt-8">
            <Button href="/apply" size="lg">
              Get started <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Section>

      <Section variant="soft">
        <SectionHeader eyebrow="How it works" title={`Features built for ${sol.name.toLowerCase()}.`} />
        <div className="space-y-12 md:space-y-20 max-w-6xl mx-auto">
          {content.features.map((f, i) => {
            const reverse = i % 2 === 1;
            const hasImage = Boolean(f.imageUrl);
            return (
              <div
                key={f.title}
                className={`grid ${hasImage ? "lg:grid-cols-2 gap-10 lg:gap-16 items-center" : "grid-cols-1"}`}
              >
                {hasImage && f.imageUrl && (
                  <div className={reverse ? "lg:order-2" : ""}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.imageUrl}
                      alt={f.imageAlt ?? f.title}
                      className="w-full aspect-[4/3] object-cover rounded-[var(--radius-lg)] shadow-[var(--shadow-md)]"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className={hasImage ? (reverse ? "lg:order-1" : "") : "max-w-3xl mx-auto text-center"}>
                  <h3 className="text-2xl md:text-3xl mb-4 font-semibold leading-tight flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-[var(--color-brand)] flex-shrink-0 mt-1" />
                    {f.title}
                  </h3>
                  <p className="text-[var(--color-ink-muted)] text-lg leading-relaxed pl-9">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {content.useCases && content.useCases.length > 0 && (
        <Section variant="default">
          <SectionHeader eyebrow="Real-world use cases" title="Where this solution wins." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {content.useCases.map((u, i) => (
              <Card key={i}>
                <div className="text-[var(--color-brand)] font-bold text-2xl mb-3 tracking-tight">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg mb-2 font-semibold">{u.title}</h3>
                <p className="text-[0.9375rem] text-[var(--color-ink-muted)] leading-relaxed">{u.description}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <Section variant="deep">
        <SectionHeader eyebrow="FAQ" title={`Common questions about ${sol.name.toLowerCase()}.`} />
        <div className="max-w-3xl mx-auto">
          <FAQ items={content.faqs} />
        </div>
      </Section>

      {relatedSolutions.length > 0 && (
        <Section variant="default">
          <SectionHeader eyebrow="Related solutions" title="What pairs with this." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {relatedSolutions.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group card-base p-5 hover:border-[var(--color-brand)] transition-all"
              >
                <h3 className="text-base mb-2 font-semibold group-hover:text-[var(--color-brand)] transition-colors">
                  {s.name}
                </h3>
                <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {relatedIndustries.length > 0 && (
        <Section variant="soft">
          <SectionHeader eyebrow="Industries that use this" title="Built for these verticals." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {relatedIndustries.map((i) => (
              <Link
                key={i.slug}
                href={`/who-we-serve/${i.slug}`}
                className="group card-base p-4 text-center hover:border-[var(--color-brand)] transition-all"
              >
                <div className="text-sm font-semibold group-hover:text-[var(--color-brand)] transition-colors">
                  {i.name}
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {relatedPosts.length > 0 && (
        <Section variant="default">
          <SectionHeader eyebrow="Further reading" title="From the Reyna Pay blog." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {relatedPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group card-base p-6 flex flex-col">
                <h3 className="text-base mb-2 font-semibold group-hover:text-[var(--color-brand)] transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand)]">
                  Read more <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTASection
        title={`Ready to use ${sol.name.toLowerCase()}?`}
        description="Apply in two minutes. Most merchants approved within 24 hours."
        primaryLabel="Get started"
        primaryHref="/apply"
        secondaryLabel="Talk to sales"
        secondaryHref="/contact"
      />
    </>
  );
}
