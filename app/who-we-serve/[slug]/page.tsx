import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { Section, SectionHeader } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { Card } from "@/components/card";
import { Button } from "@/components/button";
import { JsonLd, breadcrumbSchema, productSchema, faqPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { INDUSTRIES, PRODUCTS, SOLUTIONS } from "@/lib/site-config";
import { INDUSTRY_CONTENT } from "@/lib/industries-content";
import { getAllPostsMeta } from "@/lib/blog";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = INDUSTRIES.find((i) => i.slug === slug);
  const content = INDUSTRY_CONTENT[slug];
  if (!ind) return buildMetadata({ title: "Not found", description: "", path: `/who-we-serve/${slug}` });
  return buildMetadata({
    title: `${ind.name} payment processing — Reyna Pay`,
    description: content?.hero.subheadline.slice(0, 160) ?? `Payment processing for ${ind.name.toLowerCase()}.`,
    path: `/who-we-serve/${slug}`,
    keywords: content?.seoKeywords ?? [],
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = INDUSTRIES.find((i) => i.slug === slug);
  if (!ind) notFound();
  const content = INDUSTRY_CONTENT[slug];
  if (!content) notFound();

  const product = PRODUCTS.find((p) => p.slug === ind.primaryProduct);
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

  function productHref(p: (typeof PRODUCTS)[number]): { href: string; external: boolean } {
    if (p.slug === "platform") return { href: "/apply", external: false };
    if (p.slug === "salontransact") return { href: "/salontransact", external: false };
    return { href: p.url, external: true };
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://reynapay.com" },
          { name: "Industries", url: "https://reynapay.com/who-we-serve" },
          { name: ind.name, url: `https://reynapay.com/who-we-serve/${slug}` },
        ])}
      />
      <JsonLd
        data={productSchema({
          name: `Reyna Pay for ${ind.name}`,
          description: content.hero.subheadline,
          url: `https://reynapay.com/who-we-serve/${slug}`,
        })}
      />
      <JsonLd data={faqPageSchema(content.faqs)} />

      <HeroSection
        eyebrow={ind.category}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        primaryCta={{ label: "Get started", href: "/apply" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      {/* Why us */}
      <Section variant="default">
        <div className="max-w-3xl mx-auto text-center">
          <div className="eyebrow mb-4">Why Reyna Pay</div>
          <h2 className="mb-5">{content.whyUs.title}</h2>
          <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed">{content.whyUs.description}</p>
        </div>
      </Section>

      {/* Features */}
      <Section variant="soft">
        <SectionHeader eyebrow="Built for the work" title={`Features built for ${ind.name.toLowerCase()}.`} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {content.features.map((f) => (
            <Card key={f.title}>
              <h3 className="text-lg mb-3 font-semibold flex items-start gap-2.5">
                <CheckCircle2 size={20} className="text-[var(--color-brand)] flex-shrink-0 mt-0.5" />
                {f.title}
              </h3>
              <p className="text-[0.9375rem] text-[var(--color-ink-muted)] leading-relaxed pl-7">{f.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Recommended product */}
      {product &&
        (() => {
          const { href, external } = productHref(product);
          return (
            <Section variant="default">
              <div className="max-w-2xl mx-auto text-center">
                <div className="eyebrow mb-4">Recommended product</div>
                <h2 className="mb-4">For {ind.name.toLowerCase()}, we recommend {product.name}.</h2>
                <p className="text-[var(--color-ink-muted)] mb-8 leading-relaxed">{product.description}</p>
                {external ? (
                  <Button href={href}>
                    Visit {product.name} <ArrowRight size={16} />
                  </Button>
                ) : (
                  <Button href={href}>
                    Learn more about {product.name} <ArrowRight size={16} />
                  </Button>
                )}
              </div>
            </Section>
          );
        })()}

      {/* FAQ */}
      <Section variant="deep">
        <SectionHeader eyebrow="FAQ" title={`Common questions for ${ind.name.toLowerCase()}.`} />
        <FAQ items={content.faqs} />
      </Section>

      {/* Related solutions */}
      {relatedSolutions.length > 0 && (
        <Section variant="default">
          <SectionHeader eyebrow="Related capabilities" title="Solutions that power this industry." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedSolutions.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group card-base p-5 hover:border-[var(--color-brand)] transition-all"
              >
                <h3 className="text-base mb-2 font-semibold group-hover:text-[var(--color-brand)] transition-colors">{s.name}</h3>
                <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Related industries */}
      {relatedIndustries.length > 0 && (
        <Section variant="soft">
          <SectionHeader eyebrow="Related industries" title="Other verticals we serve." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {relatedIndustries.map((i) => (
              <Link
                key={i.slug}
                href={`/who-we-serve/${i.slug}`}
                className="group card-base p-4 text-center hover:border-[var(--color-brand)] transition-all"
              >
                <div className="text-sm font-semibold group-hover:text-[var(--color-brand)] transition-colors">{i.name}</div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Related blog posts */}
      {relatedPosts.length > 0 && (
        <Section variant="default">
          <SectionHeader eyebrow="Further reading" title="From the Reyna Pay blog." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {relatedPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group card-base p-6 flex flex-col">
                <h3 className="text-base mb-2 font-semibold group-hover:text-[var(--color-brand)] transition-colors leading-snug">{p.title}</h3>
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
        title={`Ready to upgrade your ${ind.name.toLowerCase()} payment processing?`}
        description="Apply in two minutes. Most merchants approved within 24 hours."
        primaryLabel="Get started"
        primaryHref="/apply"
        secondaryLabel="Talk to sales"
        secondaryHref="/contact"
      />
    </>
  );
}
