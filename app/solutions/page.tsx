import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { Section, SectionHeader } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SOLUTIONS } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Solutions, Payment processing capabilities",
  description:
    "Card-on-file, no-show fees, stylist commission tracking, multi-location reporting, white-label payments, and more. The capabilities that power Reyna Pay's vertical products.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://reynapay.com" },
          { name: "Solutions", url: "https://reynapay.com/solutions" },
        ])}
      />

      <HeroSection
        eyebrow="Solutions"
        headline={
          <>
            The capabilities that{" "}
            <span className="text-[var(--color-brand)]">
              power every Reyna Pay product.
            </span>
          </>
        }
        subheadline="Card-on-file. Stylist attribution. No-show automation. Multi-location reporting. White-label payments. The features below are available across our vertical products and via our partner program."
        primaryCta={{ label: "Get started", href: "/apply" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />

      <Section>
        <SectionHeader
          eyebrow="All solutions"
          title="Browse what's possible."
          centered={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.slug}
              href={`/solutions/${s.slug}`}
              className="group card-base p-7 flex flex-col"
            >
              <h3 className="text-lg mb-2 font-semibold group-hover:text-[var(--color-brand)] transition-colors">
                {s.name}
              </h3>
              <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed flex-1">
                {s.description}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)]">
                Learn more{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection
        title="Need a capability we haven't listed?"
        description="Reyna Pay's infrastructure is flexible. Tell us what you need and we'll tell you whether we can build it."
        primaryLabel="Talk to our team"
        primaryHref="/contact"
      />
    </>
  );
}
