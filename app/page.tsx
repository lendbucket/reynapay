import {
  ShieldCheck,
  Wallet,
  TrendingDown,
  Users,
  Lock,
  Sparkles,
  Zap,
  HeartHandshake,
} from "lucide-react";
import { HeroSection, ScreenshotPlaceholder } from "@/components/hero-section";
import { Section, SectionHeader } from "@/components/section";
import { FeatureGrid } from "@/components/feature-grid";
import { TestimonialCard } from "@/components/testimonial-card";
import { MetricCard } from "@/components/metric-card";
import { CTASection } from "@/components/cta-section";
import { Card } from "@/components/card";
import { Button } from "@/components/button";
import { JsonLd, organizationSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reyna Pay — Payment processing built for salons",
  description:
    "SalonTransact gives salons card-on-file, instant payouts, and transparent fees. Reyna Pay also powers a partner network for entrepreneurs building branded payments businesses.",
  path: "/",
});

const whyFeatures = [
  {
    icon: TrendingDown,
    title: "Lower fees, transparent pricing",
    description:
      "Every transaction shows interchange, assessments, and our markup separately. No hidden margins, no surprise statements.",
  },
  {
    icon: Sparkles,
    title: "Built for salons, not retrofitted",
    description:
      "Stylist commission attribution, no-show automation, and tip splits are first-class — not bolted on.",
  },
  {
    icon: HeartHandshake,
    title: "Real merchant support",
    description:
      "Humans on the phone when something breaks. Dedicated reps for Pro and Enterprise plans.",
  },
  {
    icon: Zap,
    title: "Funds when you need them",
    description:
      "Standard T+1 settlement. Same-day payouts available — toggle on when payroll can't wait.",
  },
];

const metrics = [
  { value: "$X+", label: "Processed monthly", isPlaceholder: true },
  { value: "X+", label: "Salons trust SalonTransact", isPlaceholder: true },
  { value: "0.5%", label: "Average savings vs. legacy processors", isPlaceholder: true },
  { value: "99.99%", label: "Platform uptime", isPlaceholder: true },
];

const testimonials = [
  {
    quote:
      "We were paying our old processor over $4,000 a month in fees we couldn't even understand. SalonTransact showed us the line items — we cut our processing cost by 18% in the first quarter.",
    name: "Sample Owner",
    role: "Owner",
    company: "Three-location salon",
    isPlaceholder: true,
  },
  {
    quote:
      "Stylist payday used to take half a day to reconcile. Now it's automatic. The card-on-file feature alone has saved us hundreds of hours at checkout.",
    name: "Sample Manager",
    role: "Operations Manager",
    company: "Independent salon",
    isPlaceholder: true,
  },
  {
    quote:
      "I run a salon and a barbershop. Having one dashboard for both, with separate MIDs and clean reporting, has made my accountant's life dramatically easier.",
    name: "Sample Owner",
    role: "Owner",
    company: "Multi-concept beauty group",
    isPlaceholder: true,
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />

      <HeroSection
        eyebrow="For salons & entrepreneurs"
        headline="Payment processing built for salons. Backed by enterprise infrastructure."
        subheadline="SalonTransact gives salons the tools they need to grow — card-on-file, instant payouts, and real merchant transparency. Powered by Reyna Pay's partner network."
        primaryCta={{ label: "Apply to accept payments", href: "/apply" }}
        secondaryCta={{ label: "See how it works", href: "/salontransact" }}
        visual={<ScreenshotPlaceholder label="DASHBOARD MOCKUP" />}
      />

      {/* Three-product band */}
      <Section variant="surface">
        <SectionHeader
          eyebrow="What we build"
          title="Three products, one infrastructure"
          description="A salon-first payment platform, a partner program for entrepreneurs, and the underlying processing rails powering both."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="text-[var(--color-teal)] font-semibold text-sm uppercase tracking-wider mb-3">
              Product
            </div>
            <h3 className="text-xl mb-3">SalonTransact</h3>
            <p className="text-[var(--color-text-secondary)] text-[0.9375rem] mb-6 leading-relaxed">
              The salon-first payment platform. Booking integration, stylist commissions, tip
              splits, no-show fees automated.
            </p>
            <Button href="/salontransact" variant="secondary" size="sm">
              Learn more
            </Button>
          </Card>
          <Card>
            <div className="text-[var(--color-teal)] font-semibold text-sm uppercase tracking-wider mb-3">
              Program
            </div>
            <h3 className="text-xl mb-3">Partner Program</h3>
            <p className="text-[var(--color-text-secondary)] text-[0.9375rem] mb-6 leading-relaxed">
              Build your own branded payments business. We provide the infrastructure, you bring
              the merchants.
            </p>
            <Button href="/partners" variant="secondary" size="sm">
              Become a partner
            </Button>
          </Card>
          <Card>
            <div className="text-[var(--color-teal)] font-semibold text-sm uppercase tracking-wider mb-3">
              Infrastructure
            </div>
            <h3 className="text-xl mb-3">Reyna Pay Platform</h3>
            <p className="text-[var(--color-text-secondary)] text-[0.9375rem] mb-6 leading-relaxed">
              The platform behind it all. PCI-compliant. Card-network certified. Built for scale.
            </p>
            <Button href="/about" variant="secondary" size="sm">
              About Reyna Pay
            </Button>
          </Card>
        </div>
      </Section>

      {/* Why Reyna Pay */}
      <Section>
        <SectionHeader
          eyebrow="Why Reyna Pay"
          title="The processor we wished we'd had"
          description="Reyna Pay was built by salon operators who got tired of opaque pricing, generic POS systems, and chargeback chaos."
        />
        <FeatureGrid features={whyFeatures} columns={4} />
      </Section>

      {/* Stats */}
      <Section variant="surface">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <MetricCard key={m.label} m={m} />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeader
          eyebrow="What operators say"
          title="Built with salon owners, not for them"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.quote} t={t} />
          ))}
        </div>
      </Section>

      {/* Trust signals */}
      <Section variant="surface">
        <SectionHeader
          eyebrow="Trust & compliance"
          title="Enterprise-grade infrastructure"
          description="Reyna Pay operates on bank-grade rails. PCI DSS Level 1 compliant processing, card-network certified, audited annually."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <Lock size={24} strokeWidth={1.5} className="text-[var(--color-teal)] mb-4" aria-hidden />
            <h3 className="text-lg mb-2">PCI DSS Level 1</h3>
            <p className="text-[var(--color-text-secondary)] text-[0.9375rem]">
              The highest level of payment card security compliance, audited annually.
            </p>
          </Card>
          <Card>
            <ShieldCheck
              size={24}
              strokeWidth={1.5}
              className="text-[var(--color-teal)] mb-4"
              aria-hidden
            />
            <h3 className="text-lg mb-2">Card-network certified</h3>
            <p className="text-[var(--color-text-secondary)] text-[0.9375rem]">
              Direct relationships with Visa, Mastercard, Discover, and American Express.
            </p>
          </Card>
          <Card>
            <Wallet size={24} strokeWidth={1.5} className="text-[var(--color-teal)] mb-4" aria-hidden />
            <h3 className="text-lg mb-2">Bank-sponsored</h3>
            <p className="text-[var(--color-text-secondary)] text-[0.9375rem]">
              Settlement through FDIC-insured sponsor banks. Funds held in segregated accounts.
            </p>
          </Card>
        </div>
      </Section>

      {/* Built for who */}
      <Section>
        <SectionHeader
          eyebrow="Who we serve"
          title="Two paths into the platform"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="!p-10">
            <Users
              size={32}
              strokeWidth={1.5}
              className="text-[var(--color-teal)] mb-5"
              aria-hidden
            />
            <h3 className="text-2xl mb-3">For salon owners</h3>
            <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              You run the salon. We handle the payments. Apply once, get approved, and start
              accepting cards with vertical-specific tools that actually fit how you operate.
            </p>
            <Button href="/salontransact">Explore SalonTransact</Button>
          </Card>
          <Card className="!p-10">
            <HeartHandshake
              size={32}
              strokeWidth={1.5}
              className="text-[var(--color-teal)] mb-5"
              aria-hidden
            />
            <h3 className="text-2xl mb-3">For partners</h3>
            <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              You bring the merchants. We provide the rails, the underwriting, the support, and
              your branded portal. Earn recurring commission on every transaction.
            </p>
            <Button href="/partners">Become a partner</Button>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <CTASection
        title="Ready to take the next step?"
        description="Apply in minutes. Most merchants are approved within 24 hours."
        primaryLabel="Apply as a salon"
        primaryHref="/apply"
        secondaryLabel="Apply as a partner"
        secondaryHref="/partners"
      />
    </>
  );
}
