import Link from "next/link";
import { SITE } from "@/lib/seo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "SalonTransact", href: "/salontransact" },
      { label: "Pricing", href: "/pricing" },
      { label: "Apply", href: "/apply" },
      { label: "Login", href: "/login" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Partner Program", href: "/partners" },
      { label: "How it works", href: "/partners#how-it-works" },
      { label: "Apply as a partner", href: "/apply" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Cookie Policy", href: "/legal/cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 font-bold">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Reyna Pay" className="h-7 w-auto" />
              <span>Reyna Pay</span>
            </Link>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Vertical-first payment processing infrastructure.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-teal)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved. Powered by Reyna Pay LLC.
          </p>
          <div className="flex gap-6 text-xs text-[var(--color-text-muted)]">
            <a href={`mailto:${SITE.email}`} className="hover:text-[var(--color-teal)]">
              {SITE.email}
            </a>
          </div>
        </div>

        <p className="mt-6 text-[11px] text-[var(--color-text-muted)] leading-relaxed max-w-4xl">
          Reyna Pay LLC is the merchant services provider for all merchants on the platform. Partners
          are independent referrers, not licensed money transmitters. Card processing is subject to
          underwriting approval. Rates and terms vary based on merchant category, processing volume,
          and risk profile.
        </p>
      </div>
    </footer>
  );
}
