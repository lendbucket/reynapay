import { Section } from "@/components/section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Reyna Pay LLC and its products, including SalonTransact.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <DraftBanner />
      <article className="container-page max-w-3xl pt-8 md:pt-12 pb-16">
        <h1 className="mb-2">Privacy Policy</h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-10">
          Last updated: April 29, 2026
        </p>
        <div className="prose-blog">
          <p>
            This Privacy Policy explains how Reyna Pay LLC ("Reyna Pay," "we,"
            "us," or "our") collects, uses, shares, and protects information
            when you visit reynapay.com or use our products and services,
            including SalonTransact and the Reyna Pay Partner Program.
          </p>
          <h2>1. Information we collect</h2>
          <p>We collect information in three ways:</p>
          <ul>
            <li>
              <strong>Information you provide:</strong> name, email, phone
              number, business name, government-issued IDs (for merchant
              onboarding), bank account information (for settlement), and any
              content you submit through forms or the platform.
            </li>
            <li>
              <strong>Information collected automatically:</strong> IP address,
              browser type, device identifiers, pages visited, referrer URL, and
              aggregated usage analytics.
            </li>
            <li>
              <strong>Information from third parties:</strong> identity
              verification services, card networks, sponsor banks, fraud
              prevention vendors, and credit bureaus (with your consent for
              underwriting).
            </li>
          </ul>
          <h2>2. How we use information</h2>
          <p>We use information to:</p>
          <ul>
            <li>Provide, operate, and improve our services</li>
            <li>Underwrite merchant applications and onboard partners</li>
            <li>Process transactions and settle funds</li>
            <li>Detect and prevent fraud, abuse, and security incidents</li>
            <li>
              Communicate with you (transactional emails, product updates,
              support)
            </li>
            <li>Comply with legal, regulatory, and card network obligations</li>
          </ul>
          <h2>3. How we share information</h2>
          <p>We share information with:</p>
          <ul>
            <li>
              <strong>Sponsor banks and card networks</strong> to process
              transactions
            </li>
            <li>
              <strong>Service providers</strong> who help us run the platform
              (cloud hosting, fraud screening, customer support tools), under
              confidentiality and data protection agreements
            </li>
            <li>
              <strong>Government authorities</strong> when required by law
              (court orders, subpoenas, AML/KYC obligations)
            </li>
            <li>
              <strong>In a corporate transaction</strong> (merger, acquisition,
              or asset sale), subject to standard confidentiality protections
            </li>
          </ul>
          <p>We do not sell personal information.</p>
          <h2>4. Data retention</h2>
          <p>
            We retain personal information as long as your account is active and
            as required by applicable law (typically 7 years for transaction
            records under federal recordkeeping requirements). After that, we
            delete or anonymize it.
          </p>
          <h2>5. Your rights</h2>
          <p>
            Depending on where you live, you may have rights to access, correct,
            delete, or port your personal information, and to opt out of certain
            uses. Specifically:
          </p>
          <ul>
            <li>
              <strong>California residents (CCPA/CPRA):</strong> right to know,
              delete, correct, and opt out of sale/sharing (we don't sell).
              Submit requests at support@reynapay.com.
            </li>
            <li>
              <strong>EU/UK residents (GDPR/UK GDPR):</strong> rights of access,
              rectification, erasure, restriction, portability, and objection.
              Lawful bases include contract performance, legal obligation, and
              legitimate interest.
            </li>
            <li>
              <strong>Other states:</strong> rights under VCDPA, CPA, CTDPA, and
              similar laws.
            </li>
          </ul>
          <h2>6. Security</h2>
          <p>
            We maintain technical, administrative, and physical safeguards
            designed to protect personal information, including encryption in
            transit and at rest, access controls, and annual SOC 2 audits.
            However, no system is 100% secure. Notify us immediately at
            support@reynapay.com if you suspect a security incident.
          </p>
          <h2>7. Children</h2>
          <p>
            Our services are not directed to children under 18. We do not
            knowingly collect personal information from children. If you believe
            a child has provided us with personal information, contact us and we
            will delete it.
          </p>
          <h2>8. International transfers</h2>
          <p>
            We are based in the United States. If you access our services from
            outside the U.S., your information will be transferred to and
            processed in the U.S. We rely on Standard Contractual Clauses or
            other lawful transfer mechanisms where required.
          </p>
          <h2>9. Cookies</h2>
          <p>
            We use cookies and similar technologies as described in our{" "}
            <a href="/legal/cookies">Cookie Policy</a>.
          </p>
          <h2>10. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be communicated by email or by a banner on the website.
            The "Last updated" date at the top indicates when the policy was
            last revised.
          </p>
          <h2>11. Contact</h2>
          <p>
            Privacy questions or rights requests? Email{" "}
            <a href="mailto:support@reynapay.com">support@reynapay.com</a>.
          </p>
        </div>
      </article>
    </>
  );
}

function DraftBanner() {
  return (
    <Section
      variant="default"
      className="!py-4 bg-[var(--color-warning-bg)] border-b border-[var(--color-warning)]/20"
    >
      <p className="text-xs text-[var(--color-warning)] text-center">
        <strong>DRAFT, PENDING LEGAL REVIEW.</strong> This privacy policy is
        placeholder language and will be updated by counsel before any binding
        agreement is signed.
      </p>
    </Section>
  );
}
