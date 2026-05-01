import Link from "next/link";
import { SITE } from "@/lib/seo";
import { PRODUCTS, INDUSTRIES, SOLUTIONS } from "@/lib/site-config";
import FooterLogo from "./footer-logo";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand)] text-[var(--color-accent)]">
      <div className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-4">
            <FooterLogo />
            <p className="mt-5 text-[0.9375rem] text-[var(--color-accent)]/75 leading-relaxed max-w-sm">
              Vertical-first payment processing infrastructure. SalonTransact, KasseApp, and a partner network — on one transparent platform.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={SITE.social.linkedin} target="_blank" rel="noopener" className="text-sm text-[var(--color-accent)]/65 hover:text-[var(--color-accent)]">LinkedIn</a>
              <span className="text-[var(--color-accent)]/40">·</span>
              <a href={SITE.social.twitter} target="_blank" rel="noopener" className="text-sm text-[var(--color-accent)]/65 hover:text-[var(--color-accent)]">Twitter</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <a
                    href={p.url}
                    target={p.url.startsWith("http") && !p.url.includes("reynapay.com") ? "_blank" : undefined}
                    rel="noopener"
                    className="text-[0.9375rem] text-[var(--color-accent)]/75 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
              <li><Link href="/pricing" className="text-[0.9375rem] text-[var(--color-accent)]/75 hover:text-[var(--color-accent)]">Pricing</Link></li>
              <li><Link href="/partners" className="text-[0.9375rem] text-[var(--color-accent)]/75 hover:text-[var(--color-accent)]">Partner Program</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {SOLUTIONS.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link href={`/solutions/${s.slug}`} className="text-[0.9375rem] text-[var(--color-accent)]/75 hover:text-[var(--color-accent)]">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {INDUSTRIES.slice(0, 8).map((i) => (
                <li key={i.slug}>
                  <Link href={`/who-we-serve/${i.slug}`} className="text-[0.9375rem] text-[var(--color-accent)]/75 hover:text-[var(--color-accent)]">
                    {i.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/who-we-serve" className="text-[0.9375rem] text-[var(--color-accent)] font-medium">
                  See all industries →
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-[0.9375rem] text-[var(--color-accent)]/75 hover:text-[var(--color-accent)]">About</Link></li>
              <li><Link href="/blog" className="text-[0.9375rem] text-[var(--color-accent)]/75 hover:text-[var(--color-accent)]">Blog</Link></li>
              <li><Link href="/contact" className="text-[0.9375rem] text-[var(--color-accent)]/75 hover:text-[var(--color-accent)]">Contact</Link></li>
              <li><Link href="/sitemap" className="text-[0.9375rem] text-[var(--color-accent)]/75 hover:text-[var(--color-accent)]">Sitemap</Link></li>
              <li><Link href="/legal/terms" className="text-[0.9375rem] text-[var(--color-accent)]/75 hover:text-[var(--color-accent)]">Terms</Link></li>
              <li><Link href="/legal/privacy" className="text-[0.9375rem] text-[var(--color-accent)]/75 hover:text-[var(--color-accent)]">Privacy</Link></li>
              <li><Link href="/legal/cookies" className="text-[0.9375rem] text-[var(--color-accent)]/75 hover:text-[var(--color-accent)]">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-accent)]/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-[var(--color-accent)]/60">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved. Powered by Reyna Pay LLC.
          </p>
          <div className="flex gap-6 text-xs text-[var(--color-accent)]/60">
            <a href={`mailto:${SITE.email}`} className="hover:text-[var(--color-accent)]">{SITE.email}</a>
          </div>
        </div>

        <p className="mt-6 text-[11px] text-[var(--color-accent)]/50 leading-relaxed max-w-4xl">
          Reyna Pay LLC is the merchant services provider for all merchants on the platform. Partners are independent referrers, not licensed money transmitters. Card processing is subject to underwriting approval. Rates and terms vary based on merchant category, processing volume, and risk profile.
        </p>
      </div>
    </footer>
  );
}
