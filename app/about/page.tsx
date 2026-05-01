import { ShieldCheck, Compass, Wrench } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { Section, SectionHeader } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { Card } from "@/components/card";
import { LogoCloud } from "@/components/logo-cloud";
import { JsonLd, organizationSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Reyna Pay — Why we exist",
  description:
    "Reyna Pay was founded by salon operators tired of opaque pricing, mediocre support, and tools built for everything-shops instead of salons. This is the story.",
  path: "/about",
});

const values = [
  { icon: ShieldCheck, title: "Transparency", description: "We show you exactly what you pay. Every transaction. Every line item. The processing industry has been opaque for forty years. We're done with that." },
  { icon: Compass, title: "Vertical depth", description: "We go deep on one industry, not wide on all of them. Salons first. The features in our platform exist because a salon owner asked for them — not because a product manager imagined them." },
  { icon: Wrench, title: "Operator-led", description: "Reyna Pay is built by people who actually run salons. Robert owns Salon Envy. He uses the product daily. If something doesn't work, he hears about it before you do." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />

      <HeroSection
        eyebrow="About"
        headline="Payments shouldn't be opaque."
        subheadline="Reyna Pay was founded by Robert Reyna, CEO of Salon Envy®, a multi-location franchise. After years of fighting his own processor's hidden fees, mediocre support, and tools built for everything-shops instead of salons, he built what he wished he had."
        primaryCta={{ label: "Talk to us", href: "/contact" }}
        secondaryCta={{ label: "See SalonTransact", href: "/salontransact" }}
      />

      <Section variant="soft">
        <div className="max-w-3xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-wider text-[var(--color-teal)] mb-4">Founder story</div>
          <h2 className="mb-8">A processor I'd actually want to work with.</h2>
          <div className="space-y-6 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            <p>I've spent the better part of a decade running salons. Multi-location, franchise-ready, operationally complex. The kind of business where you've got 25 stylists, three locations, two MIDs, and a processing statement that requires forensic accounting to understand.</p>
            <p>For most of that time, I was on industry-standard processors. The ones every small business uses. Square. The big ISO that's been calling my managers for years. The hardware-locked one with the "free" terminal that costs $89/month for 36 months.</p>
            <p>And I was getting absolutely fleeced — and worse, I couldn't even tell where the fleecing was happening. My effective rate would creep up 0.05% one month, 0.08% the next. Why? "Interchange adjustments." "Network fee changes." "Tier reclassification." The statements were 14 pages of footnotes, none of which mapped to actual transactions I could verify. I asked my rep for a line-item breakdown and was told "that's not available."</p>
            <p>Meanwhile, my stylists' commissions were being reconciled by hand every two weeks. Card-on-file was a feature I'd asked three different processors about, and three different times the answer was "yeah, you can sort of do that, but you'd need to integrate with X and Y and we don't really support that workflow." Chargebacks would come in and we'd lose them because nobody on my team knew how to assemble an evidence pack.</p>
            <p>I started looking around for a salon-first processor. There wasn't one. Square is built for everyone-shops. Stripe is built for tech companies. Clover wants to lock you into a hardware contract. None of them understood how a salon actually runs — and none of them seemed to care.</p>
            <p>So I built one. SalonTransact came first — the platform I wished my old processor had been. Then Reyna Pay, the parent infrastructure that powers SalonTransact and lets other operators do the same thing in their own verticals under their own brand.</p>
            <p>The vision is simple. There's a generation of vertical-first payment processors that don't exist yet — for restaurants, for gyms, for medspas, for franchise concepts — because the underlying infrastructure to launch one has been locked up by giants and ISOs. Reyna Pay opens that infrastructure to operators who already know their vertical, already have the merchant relationships, and just need rails that don't hide their math.</p>
            <p>That's what we're building. If that resonates, get in touch. We'd love to talk to you.</p>
            <p className="text-base text-[var(--color-text-primary)] font-semibold">— Robert Reyna, Founder & CEO</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="What we believe" title="Three values, lived daily" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <Card key={v.title}>
              <v.icon size={28} strokeWidth={1.5} className="text-[var(--color-teal)] mb-4" aria-hidden />
              <h3 className="text-xl mb-3">{v.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">{v.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="soft">
        <SectionHeader eyebrow="Team" title="Operators, not consultants" />
        <div className="max-w-2xl mx-auto">
          <Card className="!p-10">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-[var(--color-teal-light)] flex items-center justify-center text-[var(--color-teal)] font-bold text-2xl flex-shrink-0">RR</div>
              <div>
                <h3 className="text-xl mb-1">Robert Reyna</h3>
                <p className="text-sm text-[var(--color-teal)] font-semibold mb-3">Founder & CEO</p>
                <p className="text-[var(--color-text-secondary)] text-[0.9375rem] leading-relaxed">Robert is a multi-industry operator based in Texas. He owns and operates Salon Envy®, a multi-location salon franchise, alongside other businesses across real estate lending, commercial contracting, and software. He founded Reyna Pay to build the payment processor he wished he'd had as a salon owner.</p>
              </div>
            </div>
          </Card>
          <p className="text-center text-xs text-[var(--color-text-muted)] mt-6">[PLACEHOLDER — More team members will be added as Reyna Pay grows.]</p>
        </div>
      </Section>

      <Section>
        <LogoCloud label="[PLACEHOLDER — Press coverage and recognition logos coming soon]" count={5} />
      </Section>

      <CTASection
        title="Want to talk?"
        description="Whether you're a salon owner, a partner candidate, or just curious — we'd love to hear from you."
        primaryLabel="Get in touch"
        primaryHref="/contact"
      />
    </>
  );
}
