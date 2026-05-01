import {
  Briefcase,
  Palette,
  Megaphone,
  ShieldCheck,
  Banknote,
  UserCheck,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import { HeroSection, ScreenshotPlaceholder } from "@/components/hero-section";
import { Section, SectionHeader } from "@/components/section";
import { FeatureGrid } from "@/components/feature-grid";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { Card } from "@/components/card";
import { Button } from "@/components/button";
import { JsonLd, faqPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reyna Pay Partner Program, Build a branded payments business",
  description:
    "Bring us merchants. We provide the infrastructure, compliance, and support. You get a branded portal at your-business.reynapay.com and earn recurring commission on every transaction.",
  path: "/partners",
  ogImage: "/og/partners.png",
});

const partnerBenefits = [
  {
    icon: Palette,
    title: "Branded merchant portal",
    description:
      "Your logo, your colors, your subdomain. Merchants you bring in see your brand, not Reyna Pay's. We handle the infrastructure invisibly behind your brand.",
  },
  {
    icon: Megaphone,
    title: "Marketing toolkit",
    description:
      "Pre-built one-pagers, sales decks, demo videos, and email templates. Customizable to your brand. We even provide pitch scripts for the conversations we know work.",
  },
  {
    icon: ShieldCheck,
    title: "Underwriting handled",
    description:
      "Submit a merchant application, we approve or decline within 24 hours. Risk, compliance, KYC, OFAC checks: ours to manage. You focus on bringing the next merchant.",
  },
  {
    icon: Banknote,
    title: "Recurring commission",
    description:
      "25% of net processing margin on every transaction your merchants run. Paid monthly via ACH. As long as the merchant processes with us, you get paid.",
  },
];

const idealPartners = [
  {
    icon: Briefcase,
    title: "Independent sales reps",
    description:
      "Currently selling for a large processor and tired of the comp plan changing every quarter? Bring your book, own your residuals.",
  },
  {
    icon: TrendingUp,
    title: "ISOs leaving large agencies",
    description:
      "Tired of fighting your principal for residual transparency? We publish exactly how the math works. No hidden splits, no surprise haircuts.",
  },
  {
    icon: UserCheck,
    title: "Industry consultants",
    description:
      "Already advising salons, restaurants, or gyms? Add a payments revenue line. Refer clients you'd refer anyway, get paid forever.",
  },
  {
    icon: HeartHandshake,
    title: "Business brokers",
    description:
      "Closing M&A deals where the seller is on a different processor? Convert during the transition, take the residual.",
  },
];

const faqItems = [
  {
    question: "What does it cost to become a partner?",
    answer:
      "Zero upfront enrollment fees. The branded portal carries a monthly software fee (see /pricing). We never charge for sales training, marketing materials, or your first merchants. The economics are simple: you only pay for the platform that runs your branded business.",
  },
  {
    question: "Am I a licensed money transmitter?",
    answer:
      "No. You operate as an independent referrer or independent sales agent, not a money transmitter. Reyna Pay LLC is the merchant services provider; merchants contract with Reyna Pay directly. You get attribution and commission for the relationship. This structure means you don't need state money transmitter licenses to operate.",
  },
  {
    question: "How is commission calculated?",
    answer:
      "25% of net processing margin per transaction. Net margin = total processing fees collected from the merchant minus interchange, network assessments, sponsor bank costs, and platform infrastructure costs. We publish the exact formula in your partner agreement, and your dashboard shows the math on every transaction.",
  },
  {
    question: "When do I get paid?",
    answer:
      "Monthly, by ACH, within 15 days after month close. You'll see real-time accruals in your partner dashboard so you know what's coming.",
  },
  {
    question: "Can I sell to any industry?",
    answer:
      "Most low-to-medium risk MCCs are eligible. High-risk verticals (CBD, firearms, adult, certain debt-collection categories) require special underwriting and may not qualify. We'll tell you upfront what we can and can't board.",
  },
  {
    question: "What if a merchant has a problem?",
    answer:
      "Reyna Pay handles all merchant support, chargebacks, and technical issues. You're not on the hook for support, but you're welcome to be the relationship contact if you want to. Many partners use our support as their support.",
  },
  {
    question: "Can I co-brand with my LLC?",
    answer:
      "Yes. The branded portal lives at your-business.reynapay.com (or your own subdomain pointing at our infrastructure). All merchant-facing communications, statements, and the portal itself can carry your brand.",
  },
  {
    question: "How do I exit the program if it doesn't work out?",
    answer:
      "30-day notice to cancel. We continue paying residuals on existing merchants for the life of those merchant accounts (subject to your partner agreement). You're not held hostage, but you keep earning on what you built.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqItems)} />

      <HeroSection
        eyebrow="Partner Program"
        headline="Build a payments business, powered by Reyna Pay."
        subheadline="Bring us merchants. We handle infrastructure, compliance, and support. You get a branded portal at your-business.reynapay.com and earn recurring commission on every transaction."
        primaryCta={{ label: "Apply to be a partner", href: "/contact" }}
        secondaryCta={{ label: "See partner pricing", href: "/pricing" }}
        visual={<ScreenshotPlaceholder label="BRANDED PORTAL MOCKUP" />}
      />

      {/* How it works */}
      <Section variant="soft" id="how-it-works">
        <SectionHeader
          eyebrow="How it works"
          title="Three steps to your own payments business"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <div className="text-5xl font-bold text-[var(--color-teal)]/20 mb-3">
              01
            </div>
            <h3 className="text-xl mb-3">You apply, we approve</h3>
            <p className="text-[var(--color-text-secondary)] text-[0.9375rem] leading-relaxed">
              Tell us about your business, your network, and what verticals you
              sell into. We approve qualified partners within 5 business days.
            </p>
          </Card>
          <Card>
            <div className="text-5xl font-bold text-[var(--color-teal)]/20 mb-3">
              02
            </div>
            <h3 className="text-xl mb-3">You get a branded portal</h3>
            <p className="text-[var(--color-text-secondary)] text-[0.9375rem] leading-relaxed">
              Custom subdomain, your logo, your colors. Marketing toolkit
              shipped to your inbox. Onboarding call to walk you through the
              platform.
            </p>
          </Card>
          <Card>
            <div className="text-5xl font-bold text-[var(--color-teal)]/20 mb-3">
              03
            </div>
            <h3 className="text-xl mb-3">You earn on every transaction</h3>
            <p className="text-[var(--color-text-secondary)] text-[0.9375rem] leading-relaxed">
              Standard rate: 25% of net processing margin. Paid monthly via ACH.
              As long as your merchants process with us, you get paid.
            </p>
          </Card>
        </div>
      </Section>

      {/* What you get */}
      <Section>
        <SectionHeader
          eyebrow="What you get"
          title="A complete payments business in a box"
          description="Everything you'd need to launch a merchant services agency, without the licensing, the underwriting infrastructure, or the bank sponsorship paperwork."
        />
        <FeatureGrid features={partnerBenefits} columns={4} />
      </Section>

      {/* Who this is for */}
      <Section variant="soft">
        <SectionHeader
          eyebrow="Who this is for"
          title="Built for operators who already sell"
        />
        <FeatureGrid features={idealPartners} columns={4} />
      </Section>

      {/* Pricing transparency */}
      <Section>
        <Card className="max-w-3xl mx-auto !p-10">
          <h2 className="mb-4 text-center">Pricing transparency</h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-6 leading-relaxed">
            Partner program:{" "}
            <strong className="text-[var(--color-text-primary)]">
              $0 to start
            </strong>
            . Monthly software fee for the branded portal:{" "}
            <strong className="text-[var(--color-text-primary)]">
              $99/month
            </strong>{" "}
            on the standard plan. We never charge upfront enrollment fees. We
            never charge for marketing materials, training, or onboarding.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm text-center mb-6">
            [PLACEHOLDER, Robert to confirm final pricing]
          </p>
          <div className="flex justify-center">
            <Button href="/pricing">See partner pricing</Button>
          </div>
        </Card>
      </Section>

      {/* Disclosure */}
      <section className="bg-[var(--color-surface)] py-8 border-t border-[var(--color-border)]">
        <div className="container-page">
          <p className="text-xs text-[var(--color-text-muted)] leading-relaxed max-w-4xl mx-auto text-center">
            <strong>Disclosure:</strong> Reyna Pay LLC is the merchant services
            provider for all merchants on the platform. Partners are independent
            referrers, not licensed money transmitters or money services
            businesses. Partner agreements are available on request. Income
            examples are illustrative; actual earnings depend on the partner's
            production. The Reyna Pay Partner Program is not a franchise or
            business opportunity under federal or state law and does not require
            an FTC Franchise Disclosure Document or equivalent state
            registration. No earnings claims are made or implied.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <Section variant="soft">
        <SectionHeader
          eyebrow="Partner FAQ"
          title="What partners ask us first"
        />
        <FAQ items={faqItems} />
      </Section>

      {/* Final CTA */}
      <CTASection
        title="Ready to build something of your own?"
        description="Apply to the partner program. We'll respond within 5 business days."
        primaryLabel="Apply to be a partner"
        primaryHref="/contact"
        secondaryLabel="Talk to our team"
        secondaryHref="/contact"
      />
    </>
  );
}
