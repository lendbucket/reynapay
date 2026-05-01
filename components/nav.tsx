"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "./button";
import { PRODUCTS, INDUSTRIES, SOLUTIONS } from "@/lib/site-config";

interface MenuItem {
  label: string;
  href?: string;
  mega?: "products" | "solutions" | "industries";
}

const NAV_ITEMS: MenuItem[] = [
  { label: "Products", mega: "products" },
  { label: "Solutions", mega: "solutions" },
  { label: "Industries", mega: "industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMega(null);
  }, [pathname]);

  function openMenu(name: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMega(name);
  }
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMega(null), 120);
  }

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-brand)] text-[var(--color-accent)] shadow-[var(--shadow-sm)]">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="flex items-center" aria-label="Reyna Pay home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Reyna Pay" className="h-5 w-auto md:h-6" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            if (item.mega) {
              const isOpen = openMega === item.mega;
              return (
                <div
                  key={item.label}
                  onMouseEnter={() => openMenu(item.mega!)}
                  onMouseLeave={scheduleClose}
                  className="relative"
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-3 py-2 text-[0.9375rem] rounded-[var(--radius-md)] transition-colors ${
                      isOpen
                        ? "text-[var(--color-accent)] bg-white/10"
                        : "text-[var(--color-accent)]/85 hover:text-[var(--color-accent)] hover:bg-white/5"
                    }`}
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
              );
            }
            const active = item.href && (pathname === item.href || pathname.startsWith(item.href + "/"));
            return (
              <Link
                key={item.href}
                href={item.href!}
                className={`px-3 py-2 text-[0.9375rem] rounded-[var(--radius-md)] transition-colors ${
                  active
                    ? "text-[var(--color-accent)] font-semibold bg-white/10"
                    : "text-[var(--color-accent)]/85 hover:text-[var(--color-accent)] hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link href="/contact" className="text-[0.9375rem] text-[var(--color-accent)]/85 hover:text-[var(--color-accent)] px-3 py-2">
            Talk to sales
          </Link>
          <Button href="/apply" variant="cream" size="sm">
            Get started <ArrowRight size={14} />
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-[var(--color-accent)]"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mega menus — cream panel below brand nav */}
      {openMega && (
        <div
          onMouseEnter={() => openMenu(openMega)}
          onMouseLeave={scheduleClose}
          className="hidden lg:block absolute left-0 right-0 top-full bg-[var(--color-surface)] border-t border-[var(--color-brand-dark)] shadow-[var(--shadow-lg)]"
        >
          <div className="container-page py-10">
            {openMega === "products" && <MegaProducts />}
            {openMega === "solutions" && <MegaSolutions />}
            {openMega === "industries" && <MegaIndustries />}
          </div>
        </div>
      )}

      {/* Mobile drawer — emerald with cream text */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--color-brand-dark)] text-[var(--color-accent)] max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10">
          <div className="container-page py-4">
            <MobileSection title="Products" items={PRODUCTS.map((p) => ({ label: p.name, href: p.url, external: !p.url.includes("reynapay.com") }))} />
            <MobileSection
              title="Solutions"
              items={SOLUTIONS.slice(0, 8).map((s) => ({ label: s.name, href: `/solutions/${s.slug}` }))}
            />
            <MobileSection
              title="Industries"
              items={INDUSTRIES.slice(0, 10).map((i) => ({ label: i.name, href: `/who-we-serve/${i.slug}` }))}
            />
            <div className="border-t border-white/10 my-4" />
            <Link href="/pricing" className="block py-3 text-base font-medium text-[var(--color-accent)]">Pricing</Link>
            <Link href="/partners" className="block py-3 text-base font-medium text-[var(--color-accent)]">Partners</Link>
            <Link href="/blog" className="block py-3 text-base font-medium text-[var(--color-accent)]">Blog</Link>
            <Link href="/about" className="block py-3 text-base font-medium text-[var(--color-accent)]">About</Link>
            <Link href="/contact" className="block py-3 text-base font-medium text-[var(--color-accent)]">Contact</Link>
            <div className="pt-4 pb-4">
              <Button href="/apply" variant="cream" className="w-full">Get started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaProducts() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {PRODUCTS.map((p) => {
        const isExternal = !p.url.includes("reynapay.com");
        return (
          <a
            key={p.slug}
            href={p.url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener" : undefined}
            className="group p-5 rounded-[var(--radius-lg)] bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:shadow-[var(--shadow-md)] transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] transition-colors">{p.name}</h4>
              <ArrowRight size={14} className="text-[var(--color-ink-subtle)] group-hover:text-[var(--color-brand)] group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">{p.tagline}</p>
            <div className="mt-3 text-xs text-[var(--color-ink-subtle)] font-mono">{p.domain}</div>
          </a>
        );
      })}
    </div>
  );
}

function MegaSolutions() {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-2">
      {SOLUTIONS.map((s) => (
        <Link
          key={s.slug}
          href={`/solutions/${s.slug}`}
          className="group flex items-start gap-3 p-3 rounded-[var(--radius-md)] hover:bg-[var(--color-card)] transition-colors"
        >
          <div>
            <div className="font-medium text-[var(--color-ink)] group-hover:text-[var(--color-brand)] transition-colors text-[0.9375rem]">{s.name}</div>
            <div className="text-xs text-[var(--color-ink-muted)] mt-0.5">{s.description}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function MegaIndustries() {
  const grouped = INDUSTRIES.reduce<Record<string, typeof INDUSTRIES[number][]>>((acc, ind) => {
    if (!acc[ind.category]) acc[ind.category] = [];
    acc[ind.category].push(ind);
    return acc;
  }, {});
  return (
    <div className="grid grid-cols-4 gap-8">
      {Object.entries(grouped).map(([cat, items]) => (
        <div key={cat}>
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-subtle)] mb-3">{cat}</div>
          <ul className="space-y-1.5">
            {items.map((ind) => (
              <li key={ind.slug}>
                <Link
                  href={`/who-we-serve/${ind.slug}`}
                  className="text-[0.9375rem] text-[var(--color-ink-muted)] hover:text-[var(--color-brand)] transition-colors"
                >
                  {ind.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function MobileSection({ title, items }: { title: string; items: Array<{ label: string; href: string; external?: boolean }> }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-3.5 text-base font-medium text-[var(--color-accent)]"
      >
        {title}
        <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-3 space-y-1">
          {items.map((item) =>
            item.external ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener" className="block py-2 pl-3 text-sm text-[var(--color-accent)]/75">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="block py-2 pl-3 text-sm text-[var(--color-accent)]/75">
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}
