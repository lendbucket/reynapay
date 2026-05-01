import { Section } from "@/components/section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for Reyna Pay LLC and its products, including SalonTransact.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <>
      <DraftBanner />
      <article className="container-page max-w-3xl pt-8 md:pt-12 pb-16">
        <h1 className="mb-2">Terms of Service</h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-10">
          Last updated: April 29, 2026
        </p>
        <div className="prose-blog">
          <p>
            These Terms of Service ("Terms") govern your access to and use of
            the websites, products, and services provided by Reyna Pay LLC
            ("Reyna Pay," "we," "us," or "our"), including the marketing website
            at reynapay.com, the SalonTransact merchant platform, and the Reyna
            Pay Partner Program. By accessing or using any of our services, you
            agree to be bound by these Terms.
          </p>
          <h2>1. Eligibility</h2>
          <p>
            You must be at least 18 years old and capable of entering into a
            legally binding agreement to use our services. If you are using the
            services on behalf of a business or entity, you represent that you
            have authority to bind that entity to these Terms.
          </p>
          <h2>2. Accounts and registration</h2>
          <p>
            To use most features, you must create an account and provide
            accurate, current information. You are responsible for maintaining
            the confidentiality of your account credentials and for all activity
            under your account. Notify us immediately at support@reynapay.com if
            you suspect unauthorized access.
          </p>
          <h2>3. Merchant services</h2>
          <p>
            SalonTransact and other merchant-facing products are payment
            processing services provided by Reyna Pay LLC in conjunction with
            sponsor banks and card networks. Acceptance of merchant applications
            is subject to underwriting approval, which may require additional
            documentation. Approved merchants are bound by a separate Merchant
            Services Agreement that supersedes these Terms with respect to
            processing services.
          </p>
          <h2>4. Partner program</h2>
          <p>
            The Reyna Pay Partner Program is a referral and reseller
            arrangement. Partners are independent contractors and are not
            employees, agents, money transmitters, or franchisees of Reyna Pay.
            Partner relationships are governed by a separate Partner Agreement
            that supersedes these Terms with respect to the partner
            relationship.
          </p>
          <h2>5. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the services to process payments for illegal goods or services
            </li>
            <li>Misrepresent your identity, business, or transactions</li>
            <li>
              Attempt to circumvent security or technical limitations of the
              platform
            </li>
            <li>Reverse engineer or scrape the services</li>
            <li>
              Submit false chargeback evidence or engage in friendly fraud
            </li>
            <li>
              Violate any applicable law, regulation, or card network rule
            </li>
          </ul>
          <h2>6. Fees and payment</h2>
          <p>
            Fees for merchant services and partner platform access are described
            at reynapay.com/pricing or in your individual agreement. Fees may
            change with at least 30 days' notice. You authorize Reyna Pay (and
            its sponsor banks) to deduct applicable fees from your settlement
            account or charge them to your designated payment method.
          </p>
          <h2>7. Intellectual property</h2>
          <p>
            Reyna Pay LLC owns all rights to the platform, software, brand,
            content, and documentation. We grant you a limited, non-exclusive,
            revocable license to use the services in accordance with these
            Terms. You retain ownership of content you upload or transactions
            you process.
          </p>
          <h2>8. Disclaimers</h2>
          <p>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM
            EXTENT PERMITTED BY LAW, REYNA PAY DISCLAIMS ALL WARRANTIES, EXPRESS
            OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <h2>9. Limitation of liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, REYNA PAY'S TOTAL AGGREGATE
            LIABILITY UNDER THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE
            FEES YOU PAID TO REYNA PAY IN THE 12 MONTHS PRECEDING THE CLAIM OR
            (B) $1,000.
          </p>
          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Reyna Pay LLC, its
            officers, employees, and affiliates from any claims, damages,
            losses, or expenses (including attorneys' fees) arising from your
            breach of these Terms or your use of the services.
          </p>
          <h2>11. Termination</h2>
          <p>
            We may suspend or terminate your access to the services at any time
            for breach of these Terms, suspected fraud, or risk to the platform.
            You may terminate your account at any time by notifying us at
            support@reynapay.com. Termination does not relieve you of
            obligations accrued prior to termination.
          </p>
          <h2>12. Governing law and dispute resolution</h2>
          <p>
            These Terms are governed by the laws of the State of Wyoming,
            without regard to its conflict of laws provisions. Any dispute
            arising under these Terms shall be resolved through binding
            arbitration administered by the American Arbitration Association in
            Wyoming, except that either party may bring claims for injunctive
            relief in court.
          </p>
          <h2>13. Changes to these Terms</h2>
          <p>
            We may update these Terms periodically. Material changes will be
            communicated by email or by a banner on the website at least 30 days
            before they take effect. Continued use of the services after the
            effective date constitutes acceptance.
          </p>
          <h2>14. Contact</h2>
          <p>
            Questions about these Terms? Email{" "}
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
        <strong>DRAFT, PENDING LEGAL REVIEW.</strong> These terms are
        placeholder language and will be updated by counsel before any binding
        agreement is signed.
      </p>
    </Section>
  );
}
