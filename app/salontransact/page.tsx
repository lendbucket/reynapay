import {
  CreditCard,
  Users,
  ShieldAlert,
  CalendarCheck,
  LineChart,
  Building2,
  Zap,
  Crown,
  Check,
  X,
  Minus,
} from "lucide-react";
import { HeroSection, ScreenshotPlaceholder } from "@/components/hero-section";
import { Section, SectionHeader } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { JsonLd, productSchema, faqPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "SalonTransact, The payment platform built for salons",
  description:
    "Card-on-file, stylist commission attribution, no-show automation, transparent pricing. SalonTransact is payment processing designed from the ground up for salons.",
  path: "/salontransact",
  ogImage: "/og/salontransact.png",
});

const features = [
  {
    icon: CreditCard,
    title: "Card-on-file recognition",
    description:
      "Customers tap their card once. Next time they walk in, the system knows them. Save 30 seconds at every checkout, and unlock no-show fees, prepaid services, and one-tap rebooking.",
  },
  {
    icon: Users,
    title: "Stylist payroll attribution",
    description:
      "Stylists log into the platform with their own profile. Tips, commissions, and product sales auto-attribute to whoever performed the service. Payday is automatic, no spreadsheets.",
  },
  {
    icon: ShieldAlert,
    title: "Fraud + chargeback protection",
    description:
      "Velocity controls flag suspicious transactions before they ship. When a chargeback comes in, our system auto-builds an evidence pack, receipt, signature, customer history, to win the dispute.",
  },
  {
    icon: CalendarCheck,
    title: "Booking integration",
    description:
      "Pre-authorize cards at booking time, not at checkout. No-show fees auto-charge per your policy. Late-cancellation fees the same way. The customer agreed to it when they booked, collect what you're owed.",
  },
  {
    icon: LineChart,
    title: "Transparent pricing dashboard",
    description:
      "See exactly what each transaction costs you, broken into interchange, network assessments, and our markup. No hidden interchange padding. Export it all to your accountant in one click.",
  },
  {
    icon: Building2,
    title: "Multi-location reporting",
    description:
      "Own three salons? See all three in one view, or drill into each. Each location has its own MID for clean accounting. Roll up totals to the franchise group, or separate by entity.",
  },
  {
    icon: Zap,
    title: "Same-day payouts (optional)",
    description:
      "Need cash today for payroll or rent? Toggle same-day on. Standard plans get T+1 settlement. Same-day payouts available per-transaction or unlimited on Pro+.",
  },
  {
    icon: Crown,
    title: "Customer LTV scoring",
    description:
      "Every customer profile shows lifetime value, visit frequency, and tip history. Your front desk knows who's gold the moment they walk in, and your stylists know who to retain.",
  },
];

const comparisonRows: Array<{
  feature: string;
  salontransact: string | boolean;
  square: string | boolean;
  stripe: string | boolean;
  clover: string | boolean;
}> = [
  {
    feature: "Built specifically for salons",
    salontransact: true,
    square: false,
    stripe: false,
    clover: false,
  },
  {
    feature: "Stylist commission attribution",
    salontransact: true,
    square: "Limited",
    stripe: false,
    clover: "Add-on",
  },
  {
    feature: "Transparent interchange pricing",
    salontransact: true,
    square: false,
    stripe: "Limited",
    clover: false,
  },
  {
    feature: "Card-on-file with no-show fees",
    salontransact: true,
    square: "Limited",
    stripe: true,
    clover: false,
  },
  {
    feature: "Hardware lock-in",
    salontransact: false,
    square: "Some",
    stripe: false,
    clover: true,
  },
  {
    feature: "Same-day payouts",
    salontransact: true,
    square: "Fee",
    stripe: "Fee",
    clover: "Fee",
  },
  {
    feature: "Dedicated chargeback support",
    salontransact: true,
    square: false,
    stripe: false,
    clover: false,
  },
  {
    feature: "Multi-location with separate MIDs",
    salontransact: true,
    square: false,
    stripe: true,
    clover: "Limited",
  },
  {
    feature: "Human phone support",
    salontransact: true,
    square: "Limited",
    stripe: false,
    clover: "Limited",
  },
  {
    feature: "Owned by salon operators",
    salontransact: true,
    square: false,
    stripe: false,
    clover: false,
  },
];

const faqItems = [
  {
    question: "Who is SalonTransact for?",
    answer:
      "Independent salons, multi-location salon groups, and salon franchises. We also serve barbershops, spas, lash and brow studios, and other appointment-based personal-care businesses. If you take credit cards and pay people commission, we fit.",
  },
  {
    question: "How long does approval take?",
    answer:
      "Most salons are approved within 24 hours. Higher-risk merchants (high chargeback history, large processing volume, certain MCC codes) may require additional underwriting documentation, which can extend approval to 3-5 business days.",
  },
  {
    question: "Do I need to switch hardware?",
    answer:
      "No. SalonTransact works with most existing card readers (Verifone, PAX, Ingenico) and tablet-based POS systems. If you don't have hardware yet, we can ship terminals at cost.",
  },
  {
    question: "What does pricing actually look like?",
    answer:
      "We publish our pricing transparently, see /pricing for full details. Plans start at $0/month with per-transaction fees, scaling to flat-rate or interchange-plus pricing for higher-volume merchants. We're typically 0.3-0.7% lower than Square or Stripe on equivalent volume.",
  },
  {
    question: "What's a chargeback evidence pack?",
    answer:
      "When a customer disputes a charge, the card network requires you (the merchant) to submit evidence, receipts, signatures, communication records, to defend the transaction. SalonTransact auto-compiles this evidence the moment a chargeback hits, including signed receipts, customer profile, and visit history. Pro and Enterprise plans get a dedicated rep to manage the dispute end-to-end.",
  },
  {
    question: "Can stylists see each other's commission data?",
    answer:
      "No. Each stylist sees only their own service revenue, tips, and commission attribution. Owners see everything. Managers see what owners grant them.",
  },
  {
    question: "Do you integrate with my booking software?",
    answer:
      "We have direct integrations with the major salon booking platforms and an open API for custom setups. Specific integration availability varies, book a call and we'll confirm yours.",
  },
  {
    question: "What happens if I want to leave?",
    answer:
      "No long-term contracts on Starter or Pro. 30-day notice to cancel. Your data exports cleanly to CSV. We don't hold your customer database hostage. Enterprise plans may have negotiated terms.",
  },
];

export default function SalonTransactPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "SalonTransact",
          description:
            "Payment processing platform built specifically for salons, card-on-file, stylist commission attribution, no-show automation, and transparent pricing.",
          url: "https://reynapay.com/salontransact",
        })}
      />
      <JsonLd data={faqPageSchema(faqItems)} />

      <HeroSection
        eyebrow="SalonTransact"
        headline="The payment platform built for salons."
        subheadline="Process cards, manage stylists, recognize regulars, fight chargebacks. All in one portal, built from the ground up for the way salons actually run."
        primaryCta={{ label: "Apply now", href: "/apply" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        visual={<ScreenshotPlaceholder label="PORTAL DASHBOARD SCREENSHOT" />}
      />

      {/* Alternating feature sections */}
      <Section variant="soft">
        <SectionHeader
          eyebrow="Features"
          title="Eight things every salon processor should do"
          description="None of these are gimmicks. Each one solves a real problem we've watched salon owners deal with."
        />
        <div className="space-y-16 mt-12">
          {features.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={f.title}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  reverse ? "lg:[&>:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <f.icon
                    size={32}
                    strokeWidth={1.5}
                    className="text-[var(--color-teal)] mb-4"
                    aria-hidden
                  />
                  <h3 className="text-2xl md:text-3xl mb-4">{f.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                    {f.description}
                  </p>
                </div>
                <ScreenshotPlaceholder
                  label={`${f.title.toUpperCase()} SCREENSHOT`}
                />
              </div>
            );
          })}
        </div>
      </Section>

      {/* Comparison */}
      <Section>
        <SectionHeader
          eyebrow="Compare"
          title="SalonTransact vs the alternatives"
          description="The honest version. We're not best at everything, we're best at salons."
        />
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[640px] text-left text-sm bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] overflow-hidden">
            <thead>
              <tr className="bg-[var(--color-card)] border-b border-[var(--color-border)]">
                <th className="p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold text-[var(--color-teal)]">
                  SalonTransact
                </th>
                <th className="p-4 font-semibold">Square</th>
                <th className="p-4 font-semibold">Stripe</th>
                <th className="p-4 font-semibold">Clover</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-[var(--color-border)] last:border-0"
                >
                  <td className="p-4 font-medium">{row.feature}</td>
                  <ComparisonCell value={row.salontransact} highlight />
                  <ComparisonCell value={row.square} />
                  <ComparisonCell value={row.stripe} />
                  <ComparisonCell value={row.clover} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Pricing teaser */}
      <Section variant="soft">
        <Card className="max-w-3xl mx-auto text-center !p-10">
          <h2 className="mb-4">Transparent pricing, zero gotchas</h2>
          <p className="text-[var(--color-text-secondary)] text-lg mb-2">
            Pricing starts at{" "}
            <span className="text-[var(--color-text-primary)] font-semibold">
              $0/month
            </span>
            {" + "}
            <span className="text-[var(--color-text-primary)] font-semibold">
              [PLACEHOLDER]% per transaction
            </span>
            .
          </p>
          <p className="text-[var(--color-text-muted)] text-sm mb-8">
            Volume discounts available. Custom pricing for multi-location and
            franchise groups.
          </p>
          <Button href="/pricing" size="lg">
            See full pricing
          </Button>
        </Card>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader eyebrow="FAQ" title="Common questions" />
        <FAQ items={faqItems} />
      </Section>

      {/* Final CTA */}
      <CTASection
        title="Stop guessing what your processor is charging you."
        description="Apply in minutes. Most salons approved within 24 hours."
        primaryLabel="Apply now"
        primaryHref="/apply"
        secondaryLabel="Talk to sales"
        secondaryHref="/contact"
      />
    </>
  );
}

function ComparisonCell({
  value,
  highlight = false,
}: {
  value: string | boolean;
  highlight?: boolean;
}) {
  const cls = highlight ? "p-4 bg-[var(--color-teal-light)]/40" : "p-4";
  if (value === true) {
    return (
      <td className={cls}>
        <Check
          size={18}
          className="text-[var(--color-teal)]"
          aria-label="Yes"
        />
      </td>
    );
  }
  if (value === false) {
    return (
      <td className={cls}>
        <X
          size={18}
          className="text-[var(--color-text-muted)]"
          aria-label="No"
        />
      </td>
    );
  }
  return (
    <td className={cls}>
      <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]">
        <Minus size={12} aria-hidden />
        {value}
      </span>
    </td>
  );
}
