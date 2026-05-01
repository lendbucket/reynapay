import {
  ShieldCheck,
  Zap,
  TrendingDown,
  Users,
  Lock,
  Sparkles,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { HeroSection, HeroVisual } from "@/components/hero-section";
import { Section, SectionHeader } from "@/components/section";
import { FeatureGrid } from "@/components/feature-grid";
import { CTASection } from "@/components/cta-section";
import { Card } from "@/components/card";
import { Button } from "@/components/button";
import { JsonLd, organizationSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { PRODUCTS, INDUSTRIES } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Reyna Pay, Vertical-first payment processing infrastructure",
  description:
    "Reyna Pay powers vertical-specific payment processing for salons, restaurants, gyms, retail, and dozens more industries. SalonTransact, KasseApp, and our partner network, all on one transparent infrastructure.",
  path: "/",
  keywords: [
    "payment processing",
    "vertical payment processor",
    "payment processing infrastructure",
    "white label payment processor",
    "salon payment processing",
    "restaurant payment processing",
  ],
});

const whyFeatures = [
  {
    icon: TrendingDown,
    title: "Transparent interchange-plus pricing",
    description:
      "Every transaction itemizes interchange, network assessments, and our markup separately. No hidden padding.",
  },
  {
    icon: Sparkles,
    title: "Vertical-specific products",
    description:
      "Salons get SalonTransact. Restaurants get KasseApp. Each product is built around how that industry actually operates.",
  },
  {
    icon: HeartHandshake,
    title: "Real human support",
    description:
      "Dedicated account reps. Real engineers fixing real problems. Support phones answered by people, not chatbots.",
  },
  {
    icon: Zap,
    title: "Same-day funding",
    description:
      "Standard T+1 settlement. Same-day payouts available, toggle on when payroll can't wait.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />

      <HeroSection
        eyebrow="Vertical-first payment infrastructure"
        headline={
          <>
            Payment processing,
            <br />
            <span className="text-[var(--color-brand)]">
              built for your industry.
            </span>
          </>
        }
        subheadline="Reyna Pay powers vertical-specific payment products for salons, restaurants, gyms, retail, and dozens more. Transparent pricing. Real support. Infrastructure that scales with you."
        primaryCta={{ label: "Get started", href: "/apply" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        trustline="PCI DSS Level 1 · Card-network certified"
        visual={<HeroVisual />}
      />

      {/* Three products band */}
      <Section variant="default">
        <SectionHeader
          eyebrow="Our products"
          title="One platform, multiple verticals."
          description="Reyna Pay is the parent infrastructure powering each of these specialized payment products. Pick the one that fits your industry, or let us know what's missing."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PRODUCTS.map((p) => (
            <a
              key={p.slug}
              href={p.url}
              target={
                p.url.startsWith("http") && !p.url.includes("reynapay.com")
                  ? "_blank"
                  : undefined
              }
              rel="noopener"
              className="group card-base p-7 flex flex-col"
            >
              {p.logoFile && (
                <div className="h-12 mb-4 flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.logoFile}
                    alt={p.name}
                    className="max-h-7 max-w-[140px] w-auto object-contain"
                  />
                </div>
              )}
              <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[var(--color-brand)] mb-3 font-mono">
                {p.domain}
              </div>
              <h3 className="text-xl mb-3 font-semibold group-hover:text-[var(--color-brand)] transition-colors">
                {p.name}
              </h3>
              <p className="text-[var(--color-ink-muted)] text-[0.9375rem] mb-6 leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)]">
                Visit {p.name}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Industries we serve */}
      <Section variant="deep">
        <SectionHeader
          eyebrow="Who we serve"
          title="Built for the industries the giants ignore."
          description="Generic processors treat every business the same. We don't. Each industry on Reyna Pay gets purpose-built features, vertical-specific support, and pricing that reflects their reality."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {INDUSTRIES.slice(0, 12).map((ind) => (
            <Link
              key={ind.slug}
              href={`/who-we-serve/${ind.slug}`}
              className="group card-base p-5 hover:border-[var(--color-brand)] transition-all flex flex-col"
            >
              <div className="text-[0.9375rem] font-semibold group-hover:text-[var(--color-brand)] transition-colors">
                {ind.name}
              </div>
              <div className="text-xs text-[var(--color-ink-subtle)] mt-1">
                {ind.category}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/who-we-serve" variant="secondary" size="lg">
            See all industries we serve
          </Button>
        </div>
      </Section>

      {/* Why Reyna Pay */}
      <Section variant="default">
        <SectionHeader
          eyebrow="Why Reyna Pay"
          title="The processor we wished we'd had."
          description="Reyna Pay was built by operators who got tired of opaque pricing, mediocre support, and POS systems that treat every business like a coffee shop."
        />
        <FeatureGrid features={whyFeatures} columns={4} />
      </Section>

      {/* Trust band */}
      <Section variant="soft">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <div className="eyebrow mb-4">Trust & compliance</div>
            <h2 className="mb-4">Enterprise-grade infrastructure.</h2>
            <p className="text-[var(--color-ink-muted)] leading-relaxed">
              Reyna Pay operates on bank-grade rails. PCI DSS Level 1 compliant
              processing, card-network certified, audited annually.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <Lock
                size={22}
                strokeWidth={1.75}
                className="text-[var(--color-brand)] mb-3"
                aria-hidden
              />
              <h3 className="text-base mb-1.5">PCI DSS Level 1</h3>
              <p className="text-sm text-[var(--color-ink-muted)]">
                Highest level of payment card security compliance.
              </p>
            </Card>
            <Card>
              <ShieldCheck
                size={22}
                strokeWidth={1.75}
                className="text-[var(--color-brand)] mb-3"
                aria-hidden
              />
              <h3 className="text-base mb-1.5">Network certified</h3>
              <p className="text-sm text-[var(--color-ink-muted)]">
                Direct relationships with Visa, Mastercard, Amex, Discover.
              </p>
            </Card>
            <Card>
              <Building2
                size={22}
                strokeWidth={1.75}
                className="text-[var(--color-brand)] mb-3"
                aria-hidden
              />
              <h3 className="text-base mb-1.5">Bank-sponsored</h3>
              <p className="text-sm text-[var(--color-ink-muted)]">
                Settlement through FDIC-insured sponsor banks.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Two paths */}
      <Section variant="default">
        <SectionHeader
          eyebrow="Two ways in"
          title="Whether you take payments or sell payments, we built it for you."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <Card className="!p-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-brand-tint)] mb-5">
              <Users
                size={22}
                strokeWidth={1.75}
                className="text-[var(--color-brand)]"
                aria-hidden
              />
            </div>
            <h3 className="text-2xl mb-3 font-semibold">For business owners</h3>
            <p className="text-[var(--color-ink-muted)] mb-6 leading-relaxed">
              Apply once, get approved, start accepting cards with a
              vertical-specific platform that fits how your business actually
              runs.
            </p>
            <ul className="space-y-2.5 mb-8">
              <CheckRow>Industry-specific features built in</CheckRow>
              <CheckRow>Transparent interchange-plus pricing</CheckRow>
              <CheckRow>Same-day approval for most merchants</CheckRow>
            </ul>
            <Button href="/apply">
              Apply as a business <ArrowRight size={14} />
            </Button>
          </Card>
          <Card className="!p-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-brand-tint)] mb-5">
              <HeartHandshake
                size={22}
                strokeWidth={1.75}
                className="text-[var(--color-brand)]"
                aria-hidden
              />
            </div>
            <h3 className="text-2xl mb-3 font-semibold">For partners</h3>
            <p className="text-[var(--color-ink-muted)] mb-6 leading-relaxed">
              Bring us merchants. We provide the infrastructure, compliance, and
              support. You get a branded portal and recurring commission on
              every transaction.
            </p>
            <ul className="space-y-2.5 mb-8">
              <CheckRow>Branded merchant portal at your subdomain</CheckRow>
              <CheckRow>25% of net processing margin, paid monthly</CheckRow>
              <CheckRow>Marketing toolkit + dedicated support</CheckRow>
            </ul>
            <Button href="/partners" variant="secondary">
              Learn about the partner program <ArrowRight size={14} />
            </Button>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <CTASection
        eyebrow="Ready when you are"
        title="Stop guessing what your processor is charging."
        description="Apply in two minutes. Most merchants approved within 24 hours. No long-term contracts on standard plans."
        primaryLabel="Get started"
        primaryHref="/apply"
        secondaryLabel="Talk to our team"
        secondaryHref="/contact"
      />
    </>
  );
}

function CheckRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[0.9375rem] text-[var(--color-ink-muted)]">
      <CheckCircle2
        size={18}
        className="text-[var(--color-brand)] flex-shrink-0 mt-0.5"
        aria-hidden
      />
      <span>{children}</span>
    </li>
  );
}
