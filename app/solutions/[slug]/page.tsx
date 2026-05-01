import { notFound } from "next/navigation";
import { HeroSection } from "@/components/hero-section";
import { Section, SectionHeader } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SOLUTIONS } from "@/lib/site-config";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.slug === slug);
  if (!sol) return buildMetadata({ title: "Not found", description: "", path: `/solutions/${slug}` });
  return buildMetadata({
    title: `${sol.name} — Reyna Pay solutions`,
    description: `${sol.description} Available across all Reyna Pay vertical products and partner platforms.`,
    path: `/solutions/${slug}`,
  });
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.slug === slug);
  if (!sol) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://reynapay.com" },
          { name: "Solutions", url: "https://reynapay.com/solutions" },
          { name: sol.name, url: `https://reynapay.com/solutions/${slug}` },
        ])}
      />

      <HeroSection
        eyebrow="Solution"
        headline={<>{sol.name}</>}
        subheadline={`${sol.description} Stage 5B will expand this page with full feature breakdown, use cases, integration examples, and FAQ.`}
        primaryCta={{ label: "Get started", href: "/apply" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />

      <Section>
        <SectionHeader
          eyebrow="Coming soon"
          title="Detailed solution content"
          description="This page will be populated with full implementation details, code examples, pricing, and case studies in Stage 5B."
          centered
        />
      </Section>

      <CTASection
        title={`Ready to add ${sol.name.toLowerCase()} to your business?`}
        primaryLabel="Get started"
        primaryHref="/apply"
        secondaryLabel="Talk to sales"
        secondaryHref="/contact"
      />
    </>
  );
}
