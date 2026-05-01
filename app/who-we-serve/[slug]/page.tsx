import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { Section, SectionHeader } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { JsonLd, breadcrumbSchema, productSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { INDUSTRIES, PRODUCTS } from "@/lib/site-config";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = INDUSTRIES.find((i) => i.slug === slug);
  if (!ind) return buildMetadata({ title: "Not found", description: "", path: `/who-we-serve/${slug}` });
  return buildMetadata({
    title: `${ind.name} payment processing — Reyna Pay`,
    description: `Reyna Pay's payment processing infrastructure for ${ind.name.toLowerCase()}. Vertical-specific features, transparent pricing, and the support ${ind.name.toLowerCase()} actually need.`,
    path: `/who-we-serve/${slug}`,
    keywords: [`${ind.name.toLowerCase()} payment processing`, `${ind.name.toLowerCase()} credit card processor`, `${ind.name.toLowerCase()} POS`, "merchant services"],
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = INDUSTRIES.find((i) => i.slug === slug);
  if (!ind) notFound();

  const product = PRODUCTS.find((p) => p.slug === ind.primaryProduct);

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
          description: `Payment processing infrastructure built for ${ind.name.toLowerCase()}.`,
          url: `https://reynapay.com/who-we-serve/${slug}`,
        })}
      />

      <HeroSection
        eyebrow={ind.category}
        headline={
          <>
            Payment processing for{" "}
            <span className="text-[var(--color-brand)]">{ind.name.toLowerCase()}.</span>
          </>
        }
        subheadline={`Reyna Pay's payment infrastructure is built for the way ${ind.name.toLowerCase()} actually operate. Industry-specific features, transparent fees, and real human support.`}
        primaryCta={{ label: "Get started", href: "/apply" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <Section>
        <SectionHeader
          eyebrow="Coming soon"
          title={`Detailed ${ind.name.toLowerCase()} content`}
          description="This page will expand with industry-specific features, case studies, pricing, and FAQs in Stage 5B. For now, here's how to get started."
        />
        <div className="max-w-2xl mx-auto text-center">
          {product && (
            <div className="mb-8">
              <p className="text-[var(--color-ink-muted)] mb-4">
                For {ind.name.toLowerCase()}, our recommended product is:
              </p>
              <Link
                href={product.slug === "platform" ? "/" : `/${product.slug}`}
                className="inline-flex items-center gap-2 text-[var(--color-brand)] font-semibold text-lg hover:underline"
              >
                {product.name} <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </Section>

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
