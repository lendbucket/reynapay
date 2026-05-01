import { HeroSection } from "@/components/hero-section";
import { Section, SectionHeader } from "@/components/section";
import { PricingTable, type PricingTier } from "@/components/pricing-table";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Card } from "@/components/card";
import { Button } from "@/components/button";
import { JsonLd, faqPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing — Reyna Pay & SalonTransact",
  description:
    "Transparent pricing for SalonTransact merchants and Reyna Pay partners. No hidden interchange markup, no surprise fees, no long-term contracts on standard plans.",
  path: "/pricing",
});

const salonTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$0",
    priceDetail: "/month",
    description: "For new salons just getting started with card payments.",
    cta: { label: "Apply now", href: "/apply" },
    features: [
      { label: "Per-transaction: 2.9% + $0.30", included: true },
      { label: "Card-on-file recognition", included: true },
      { label: "Standard chargeback evidence packs", included: true },
      { label: "T+1 settlement (next-business-day payouts)", included: true },
      { label: "Same-day payouts ($5 each)", included: true },
      { label: "Stylist commission attribution", included: false },
      { label: "Booking integration", included: false },
      { label: "Single location only", included: true },
    ],
  },
  {
    name: "Pro",
    price: "$49",
    priceDetail: "/month",
    description: "For established salons running multiple stylists or chairs.",
    cta: { label: "Apply now", href: "/apply" },
    popular: true,
    features: [
      { label: "Per-transaction: 2.4% + $0.20", included: true },
      { label: "Card-on-file recognition", included: true },
      { label: "Stylist commission attribution", included: true },
      { label: "Booking integration", included: true },
      { label: "Assisted chargeback support", included: true },
      { label: "1 free same-day payout per week", included: true },
      { label: "Up to 3 locations", included: true },
      { label: "Customer LTV scoring", included: true },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For franchise groups, multi-location operators, and high-volume salons.",
    cta: { label: "Talk to sales", href: "/contact" },
    features: [
      { label: "Interchange-plus pricing", included: "Negotiated" },
      { label: "Everything in Pro", included: true },
      { label: "Unlimited same-day payouts", included: true },
      { label: "Dedicated chargeback rep", included: true },
      { label: "Unlimited locations", included: true },
      { label: "Custom integrations & API access", included: true },
      { label: "Quarterly business reviews", included: true },
      { label: "Volume rebates", included: true },
    ],
  },
];

const partnerTiers: PricingTier[] = [
  {
    name: "Standard Partner",
    price: "$99",
    priceDetail: "/month",
    description: "For independent operators launching a branded payments business.",
    cta: { label: "Apply to be a partner", href: "/contact" },
    features: [
      { label: "Branded merchant portal at your-business.reynapay.com", included: true },
      { label: "Custom logo, colors, subdomain", included: true },
      { label: "25% of net processing margin", included: true },
      { label: "Marketing toolkit (decks, one-pagers, demo videos)", included: true },
      { label: "Underwriting handled by Reyna Pay", included: true },
      { label: "Monthly ACH commission payouts", included: true },
      { label: "Real-time partner dashboard", included: true },
      { label: "Email + chat support", included: true },
    ],
  },
  {
    name: "Enterprise Partner",
    price: "Custom",
    description: "For partners with 50+ active merchants or specialized industry focus.",
    cta: { label: "Talk to our team", href: "/contact" },
    popular: true,
    features: [
      { label: "Negotiated revenue share", included: true },
      { label: "Everything in Standard", included: true },
      { label: "White-label apps and APIs", included: true },
      { label: "Dedicated account manager", included: true },
      { label: "Co-marketing budget", included: true },
      { label: "Custom integration support", included: true },
      { label: "Priority underwriting", included: true },
      { label: "Quarterly partner roundtables", included: true },
    ],
  },
];

const faqItems = [
  {
    question: "Are these prices final?",
    answer:
      "[PLACEHOLDER — Robert to confirm final pricing]. Pricing shown is illustrative. Final rates depend on processing volume, average ticket size, MCC, and risk profile. We publish ranges transparently and confirm exact pricing during application underwriting.",
  },
  {
    question: "What's included in the per-transaction fee?",
    answer:
      "Card processing, fraud screening, chargeback handling tools, settlement to your bank account, and access to the platform. Card-network interchange and assessments are included in the rate — we don't pad them. The 'flat-rate' on Starter and Pro is genuinely flat; the interchange-plus on Enterprise itemizes interchange separately.",
  },
  {
    question: "Are there setup fees?",
    answer: "No. Setup, onboarding, training, and your first month of platform access are free across all tiers.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "Starter and Pro: month-to-month, 30-day notice to cancel. Enterprise plans may include negotiated multi-year terms in exchange for volume rebates — fully optional and disclosed in your contract.",
  },
  {
    question: "What does the partner monthly fee actually pay for?",
    answer:
      "The branded portal infrastructure (custom subdomain, white-label UI, partner dashboard, reporting), ongoing platform development, support staff, and compliance overhead. The $0 enrollment + monthly SaaS fee structure is intentional: we never want to look like a 'business opportunity' under FTC rules. You're paying for software, not buying a business.",
  },
  {
    question: "Can I switch plans?",
    answer: "Yes. Upgrade anytime; downgrade at the start of your next billing cycle.",
  },
  {
    question: "Do you offer non-profit, school, or church discounts?",
    answer:
      "Yes. Email support@reynapay.com with documentation of your 501(c)(3) status or equivalent and we'll review case-by-case.",
  },
  {
    question: "What if my volume is way higher than these tiers contemplate?",
    answer:
      "Talk to us. We custom-price merchants processing $1M+/month. Interchange-plus pricing typically saves 0.4-0.8% over flat rates at that volume.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqItems)} />

      <HeroSection
        eyebrow="Pricing"
        headline="Transparent pricing. No surprises."
        subheadline="Two paths into the platform — one for salons, one for partners. We publish exactly what you'll pay. Always."
        primaryCta={{ label: "Apply now", href: "/apply" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />

      <Section variant="soft" id="for-salons">
        <SectionHeader
          eyebrow="For salons"
          title="Pricing for salon owners"
          description="Pick the plan that fits where you are. Upgrade anytime as you grow."
        />
        <PricingTable tiers={salonTiers} />
        <p className="text-center text-xs text-[var(--color-text-muted)] mt-8 max-w-2xl mx-auto">
          [PLACEHOLDER — All numbers above are illustrative. Robert to confirm final published pricing.] Per-transaction rates apply to standard card-present and card-not-present transactions. AmEx, international, and high-risk MCCs may have differential pricing.
        </p>
      </Section>

      <Section id="for-partners">
        <SectionHeader
          eyebrow="For partners"
          title="Pricing for partner operators"
          description="The branded portal is software. The merchant relationships you build are yours."
        />
        <PricingTable tiers={partnerTiers} />
        <p className="text-center text-xs text-[var(--color-text-muted)] mt-8 max-w-2xl mx-auto">
          Commission percentages are calculated on net processing margin per the partner agreement. The Reyna Pay Partner Program is not a franchise or business opportunity. No earnings claims are made.
        </p>
      </Section>

      <Section variant="soft">
        <Card className="max-w-3xl mx-auto !p-10">
          <h2 className="mb-4 text-center">What's never in the price</h2>
          <ul className="space-y-3 text-[var(--color-text-secondary)] mt-6">
            <li className="flex gap-3"><span className="text-[var(--color-teal)] font-bold">×</span><span>Hidden interchange padding (we publish exactly what we mark up)</span></li>
            <li className="flex gap-3"><span className="text-[var(--color-teal)] font-bold">×</span><span>PCI compliance fees (included)</span></li>
            <li className="flex gap-3"><span className="text-[var(--color-teal)] font-bold">×</span><span>Statement fees, monthly minimums, or "regulatory recovery" surcharges</span></li>
            <li className="flex gap-3"><span className="text-[var(--color-teal)] font-bold">×</span><span>Long-term contracts (Starter & Pro are month-to-month)</span></li>
            <li className="flex gap-3"><span className="text-[var(--color-teal)] font-bold">×</span><span>Early-termination fees on month-to-month plans</span></li>
            <li className="flex gap-3"><span className="text-[var(--color-teal)] font-bold">×</span><span>Markup on chargeback handling, refunds, or batch settlement</span></li>
          </ul>
          <div className="mt-8 text-center">
            <Button href="/contact" variant="secondary">Get a quote for your business</Button>
          </div>
        </Card>
      </Section>

      <Section>
        <SectionHeader eyebrow="Pricing FAQ" title="Common pricing questions" />
        <FAQ items={faqItems} />
      </Section>

      <CTASection
        title="Ready to see your real cost?"
        description="Get a custom quote in 24 hours. No commitment."
        primaryLabel="Get a quote"
        primaryHref="/contact"
        secondaryLabel="Apply now"
        secondaryHref="/apply"
      />
    </>
  );
}
