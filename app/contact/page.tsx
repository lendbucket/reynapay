import { Mail, Phone, MapPin } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { ContactForm } from "@/components/contact-form";
import { JsonLd, organizationSchema } from "@/lib/schema";
import { SITE, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Reyna Pay",
  description:
    "Get in touch with Reyna Pay. Apply as a salon, apply as a partner, ask a press question, or talk to our team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <HeroSection
        eyebrow="Contact"
        headline="Talk to a human."
        subheadline="Apply as a salon, apply as a partner, or ask us anything. We respond within one business day."
        primaryCta={{ label: "Apply as a salon", href: "/apply" }}
        secondaryCta={{ label: "Apply as a partner", href: "#form" }}
      />

      <Section variant="soft">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2" id="form">
            <Card className="!p-8 md:!p-10">
              <h2 className="text-2xl mb-2">Send us a message</h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Fill out the form and we'll respond within one business day.
              </p>
              <ContactForm />
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <Mail
                size={20}
                strokeWidth={1.5}
                className="text-[var(--color-teal)] mb-3"
                aria-hidden
              />
              <h3 className="text-base mb-1">Email us</h3>
              <a
                href={`mailto:${SITE.email}`}
                className="text-[var(--color-text-secondary)] text-[0.9375rem] hover:text-[var(--color-teal)] transition-colors"
              >
                {SITE.email}
              </a>
            </Card>
            <Card>
              <Phone
                size={20}
                strokeWidth={1.5}
                className="text-[var(--color-teal)] mb-3"
                aria-hidden
              />
              <h3 className="text-base mb-1">Call us</h3>
              <p className="text-[var(--color-text-secondary)] text-[0.9375rem]">
                {SITE.phone}
              </p>
            </Card>
            <Card>
              <MapPin
                size={20}
                strokeWidth={1.5}
                className="text-[var(--color-teal)] mb-3"
                aria-hidden
              />
              <h3 className="text-base mb-1">Mail us</h3>
              <p className="text-[var(--color-text-secondary)] text-[0.9375rem] leading-relaxed">
                Reyna Pay LLC
                <br />
                {SITE.address.street}
                <br />
                {SITE.address.locality}, {SITE.address.region}{" "}
                {SITE.address.postalCode}
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
