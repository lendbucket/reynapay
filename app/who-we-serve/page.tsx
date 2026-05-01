import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { Section } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { INDUSTRIES } from "@/lib/site-config";
import { INDUSTRY_CONTENT } from "@/lib/industries-content";

export const metadata = buildMetadata({
  title: "Industries we serve — Vertical-specific payment processing",
  description:
    "Reyna Pay serves salons, restaurants, gyms, retail, professional services, and dozens more industries with vertical-specific payment processing infrastructure. Find your industry.",
  path: "/who-we-serve",
  keywords: [
    "vertical payment processing",
    "industry-specific payment processor",
    "salon payment processing",
    "restaurant payment processing",
    "gym payment processing",
  ],
});

export default function WhoWeServePage() {
  const grouped = INDUSTRIES.reduce<Record<string, (typeof INDUSTRIES)[number][]>>((acc, ind) => {
    if (!acc[ind.category]) acc[ind.category] = [];
    acc[ind.category].push(ind);
    return acc;
  }, {});

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://reynapay.com" },
          { name: "Industries", url: "https://reynapay.com/who-we-serve" },
        ])}
      />

      <HeroSection
        eyebrow="Industries"
        headline={
          <>
            Built for the industries <span className="text-[var(--color-brand)]">the giants ignore.</span>
          </>
        }
        subheadline="Generic processors treat every business the same. We don't. Each industry on Reyna Pay gets purpose-built features, vertical-specific support, and pricing that reflects how that industry actually runs."
        primaryCta={{ label: "Get started", href: "/apply" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />

      {Object.entries(grouped).map(([cat, items], idx) => (
        <Section key={cat} variant={idx % 2 === 0 ? "default" : "soft"}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <div className="eyebrow mb-3">{cat}</div>
              <h2>{cat} payment processing.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((ind) => {
                const content = INDUSTRY_CONTENT[ind.slug];
                const Icon = content?.icon;
                return (
                  <Link
                    key={ind.slug}
                    href={`/who-we-serve/${ind.slug}`}
                    className="group card-base p-7 flex flex-col justify-between hover:border-[var(--color-brand)] transition-all"
                  >
                    <div>
                      {Icon && <Icon size={22} strokeWidth={1.75} className="text-[var(--color-brand)] mb-3" aria-hidden />}
                      <h3 className="text-lg mb-2 font-semibold group-hover:text-[var(--color-brand)] transition-colors">{ind.name}</h3>
                      <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
                        {content?.hero.subheadline.slice(0, 110) ?? `Payment processing for ${ind.name.toLowerCase()}.`}
                        {content && content.hero.subheadline.length > 110 ? "…" : ""}
                      </p>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)]">
                      Learn more <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Section>
      ))}

      <CTASection
        title="Don't see your industry?"
        description="Reyna Pay's infrastructure works for almost any vertical. Tell us what you do and we'll tell you honestly whether we're a fit."
        primaryLabel="Talk to our team"
        primaryHref="/contact"
      />
    </>
  );
}
