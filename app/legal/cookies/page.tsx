import { Section } from "@/components/section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: "Cookie Policy for reynapay.com.",
  path: "/legal/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <DraftBanner />
      <article className="container-page max-w-3xl pt-8 md:pt-12 pb-16">
        <h1 className="mb-2">Cookie Policy</h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-10">
          Last updated: April 29, 2026
        </p>
        <div className="prose-blog">
          <p>
            This Cookie Policy explains how Reyna Pay LLC ("Reyna Pay") uses
            cookies and similar technologies on reynapay.com and our merchant
            and partner portals.
          </p>
          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a
            website. They allow the site to recognize your browser, remember
            preferences, and analyze usage. Similar technologies include local
            storage, pixels, and SDKs.
          </p>
          <h2>2. Types of cookies we use</h2>
          <ul>
            <li>
              <strong>Strictly necessary cookies:</strong> required for core
              functionality, session management, authentication, security, and
              form submission. These cannot be disabled without breaking the
              site.
            </li>
            <li>
              <strong>Performance cookies:</strong> help us understand how
              visitors use the site so we can improve it. We use Vercel
              Analytics, which is privacy-first and does not collect personal
              data or cross-site identifiers.
            </li>
            <li>
              <strong>Functional cookies:</strong> remember preferences like
              language or saved form entries.
            </li>
          </ul>
          <p>
            We do <strong>not</strong> use advertising or third-party tracking
            cookies on reynapay.com.
          </p>
          <h2>3. Managing cookies</h2>
          <p>
            Most browsers let you block or delete cookies through settings. If
            you block strictly necessary cookies, parts of the site (login,
            forms) may not work.
          </p>
          <h2>4. Do Not Track</h2>
          <p>
            We do not respond to Do Not Track signals because there is no
            industry consensus on how to do so. Our minimal cookie practices
            apply regardless.
          </p>
          <h2>5. Changes to this policy</h2>
          <p>
            We may update this Cookie Policy as our practices evolve. The "Last
            updated" date indicates the most recent revision.
          </p>
          <h2>6. Contact</h2>
          <p>
            Questions? Email{" "}
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
        <strong>DRAFT, PENDING LEGAL REVIEW.</strong> This cookie policy is
        placeholder language and will be updated by counsel before deployment.
      </p>
    </Section>
  );
}
