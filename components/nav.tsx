"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Scissors,
  Coffee,
  Dumbbell,
  Wrench,
  ShoppingBag,
  Briefcase,
  Sparkles,
  Pen,
  GlassWater,
  Truck,
  Activity,
  Globe,
  PawPrint,
  Building2,
  CreditCard,
  Calendar,
  Users,
  MapPin,
  Repeat,
  Shield,
  Zap,
  BarChart3,
  Layers,
  Receipt,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
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

const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  salons: Scissors,
  barbershops: Scissors,
  "med-spas": Sparkles,
  "tattoo-studios": Pen,
  "nail-salons": Sparkles,
  "lash-and-brow": Sparkles,
  restaurants: Coffee,
  bars: GlassWater,
  "coffee-shops": Coffee,
  "food-trucks": Truck,
  "gyms-and-fitness": Dumbbell,
  "yoga-studios": Activity,
  "auto-repair": Wrench,
  "pet-grooming": PawPrint,
  retail: ShoppingBag,
  ecommerce: Globe,
  "professional-services": Briefcase,
};

const SOLUTION_ICONS: Record<string, LucideIcon> = {
  "card-on-file": CreditCard,
  "no-show-fees": Calendar,
  "stylist-commission-tracking": Users,
  "tip-pools": Receipt,
  "multi-location-reporting": MapPin,
  "white-label-payments": Layers,
  "interchange-plus-pricing": BarChart3,
  "chargeback-protection": Shield,
  "same-day-payouts": Zap,
  "recurring-billing": Repeat,
  "booking-integration": Calendar,
  "pos-integration": Layers,
};

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMega(null);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  function openMenu(name: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMega(name);
  }
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMega(null), 160);
  }

  return (
    <header className="sticky top-0 z-40 relative bg-[var(--color-brand)] text-[var(--color-accent)] shadow-[var(--shadow-sm)]">
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
                    className={`flex items-center gap-1.5 px-3.5 py-2 text-[0.9375rem] rounded-[var(--radius-md)] transition-colors ${
                      isOpen ? "text-white bg-white/10" : "text-white/85 hover:text-white hover:bg-white/5"
                    }`}
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
              );
            }
            const active = item.href && (pathname === item.href || pathname.startsWith(item.href + "/"));
            return (
              <Link
                key={item.href}
                href={item.href!}
                className={`px-3.5 py-2 text-[0.9375rem] rounded-[var(--radius-md)] transition-colors ${
                  active ? "text-white font-semibold bg-white/10" : "text-white/85 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link href="/contact" className="text-[0.9375rem] text-white/85 hover:text-white px-3 py-2 transition-colors">
            Talk to sales
          </Link>
          <Button href="/apply" variant="cream" size="sm">
            Get started <ArrowRight size={14} />
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-white"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mega menus — refined cream panel */}
      {openMega && (
        <div
          onMouseEnter={() => openMenu(openMega)}
          onMouseLeave={scheduleClose}
          className="hidden lg:block absolute left-0 right-0 top-full"
        >
          <div className="bg-white border-t border-[var(--color-border)] shadow-[0_24px_48px_-12px_rgba(31,53,52,0.18)]">
            <div className="container-page py-12">
              {openMega === "products" && <MegaProducts />}
              {openMega === "solutions" && <MegaSolutions />}
              {openMega === "industries" && <MegaIndustries />}
            </div>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--color-brand-dark)] text-[var(--color-accent)] max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10">
          <div className="container-page py-4">
            <MobileSection
              title="Products"
              items={PRODUCTS.map((p) => ({ label: p.name, href: p.url, external: !p.url.includes("reynapay.com") }))}
            />
            <MobileSection title="Solutions" items={SOLUTIONS.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` }))} />
            <MobileSection title="Industries" items={INDUSTRIES.map((i) => ({ label: i.name, href: `/who-we-serve/${i.slug}` }))} />
            <div className="border-t border-white/10 my-4" />
            <Link href="/pricing" className="block py-3 text-base font-medium text-white">
              Pricing
            </Link>
            <Link href="/partners" className="block py-3 text-base font-medium text-white">
              Partners
            </Link>
            <Link href="/blog" className="block py-3 text-base font-medium text-white">
              Blog
            </Link>
            <Link href="/about" className="block py-3 text-base font-medium text-white">
              About
            </Link>
            <Link href="/contact" className="block py-3 text-base font-medium text-white">
              Contact
            </Link>
            <div className="pt-4 pb-4">
              <Button href="/apply" variant="cream" className="w-full">
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ============ PRODUCTS MEGA ============ */
function MegaProducts() {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-8">
        <div className="text-[0.6875rem] uppercase tracking-[0.08em] text-[var(--color-ink-subtle)] font-semibold mb-5">Our products</div>
        <div className="grid grid-cols-2 gap-3">
          {PRODUCTS.map((p) => {
            const isExternal = !p.url.includes("reynapay.com");
            return (
              <a
                key={p.slug}
                href={p.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener" : undefined}
                className="group p-5 rounded-[var(--radius-lg)] border border-transparent hover:border-[var(--color-border)] hover:bg-[var(--color-surface-2)] transition-all block"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[var(--color-ink)] text-[1rem] leading-tight">{p.name}</h4>
                    <p className="text-[0.875rem] text-[var(--color-ink-muted)] leading-relaxed mt-1.5">{p.tagline}</p>
                    <div className="mt-3 text-[0.75rem] text-[var(--color-brand)] font-mono font-semibold opacity-80">{p.domain}</div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[var(--color-ink-subtle)] group-hover:text-[var(--color-brand)] group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className="col-span-4">
        <div className="bg-[var(--color-brand)] rounded-[var(--radius-lg)] p-6 text-white h-full flex flex-col justify-between min-h-[220px] relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
          <div className="relative">
            <div className="text-[0.6875rem] uppercase tracking-[0.08em] text-white/70 font-semibold mb-2.5">Partner program</div>
            <h4 className="text-[1.0625rem] font-semibold mb-2 leading-tight">Launch your own branded payments business.</h4>
            <p className="text-[0.875rem] text-white/80 leading-relaxed">25% of net processing margin. Branded portal at your subdomain.</p>
          </div>
          <Link href="/partners" className="relative inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-white hover:gap-2 transition-all">
            Apply to be a partner <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ============ SOLUTIONS MEGA ============ */
function MegaSolutions() {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-9">
        <div className="text-[0.6875rem] uppercase tracking-[0.08em] text-[var(--color-ink-subtle)] font-semibold mb-5">Capabilities</div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-1">
          {SOLUTIONS.map((s) => {
            const Icon = SOLUTION_ICONS[s.slug];
            return (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group flex items-start gap-3 p-3 rounded-[var(--radius-md)] hover:bg-[var(--color-surface-2)] transition-colors"
              >
                {Icon && (
                  <div className="flex-shrink-0 w-9 h-9 rounded-[var(--radius-md)] bg-[var(--color-brand-tint)] flex items-center justify-center transition-colors group-hover:bg-[var(--color-brand)]">
                    <Icon size={16} strokeWidth={1.75} className="text-[var(--color-brand)] group-hover:text-white transition-colors" />
                  </div>
                )}
                <div className="min-w-0 pt-0.5">
                  <div className="font-semibold text-[var(--color-ink)] text-[0.875rem] leading-tight">{s.name}</div>
                  <div className="text-[0.75rem] text-[var(--color-ink-muted)] mt-0.5 leading-snug">{s.description}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="col-span-3">
        <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 h-full flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="text-[0.6875rem] uppercase tracking-[0.08em] text-[var(--color-brand)] font-semibold mb-2.5">Pricing</div>
            <h4 className="text-[1.0625rem] font-semibold mb-2 leading-tight text-[var(--color-ink)]">Transparent. No hidden markup.</h4>
            <p className="text-[0.875rem] text-[var(--color-ink-muted)] leading-relaxed">
              Interchange-plus pricing. No long-term contracts on standard plans.
            </p>
          </div>
          <Link href="/pricing" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[var(--color-brand)] hover:gap-2 transition-all">
            View pricing <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ============ INDUSTRIES MEGA ============ */
function MegaIndustries() {
  const grouped = INDUSTRIES.reduce<Record<string, (typeof INDUSTRIES)[number][]>>((acc, ind) => {
    if (!acc[ind.category]) acc[ind.category] = [];
    acc[ind.category].push(ind);
    return acc;
  }, {});
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-9">
        <div className="text-[0.6875rem] uppercase tracking-[0.08em] text-[var(--color-ink-subtle)] font-semibold mb-5">Industries we serve</div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-7">
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat}>
              <div className="text-[0.75rem] font-semibold text-[var(--color-brand)] mb-3 tracking-tight">{cat}</div>
              <ul className="space-y-0.5">
                {items.map((ind) => {
                  const Icon = INDUSTRY_ICONS[ind.slug] || Building2;
                  return (
                    <li key={ind.slug}>
                      <Link
                        href={`/who-we-serve/${ind.slug}`}
                        className="group flex items-center gap-2.5 py-1.5 px-2 -mx-2 rounded-[var(--radius-md)] hover:bg-[var(--color-surface-2)] transition-colors"
                      >
                        <Icon
                          size={15}
                          strokeWidth={1.75}
                          className="text-[var(--color-ink-subtle)] group-hover:text-[var(--color-brand)] transition-colors flex-shrink-0"
                        />
                        <span className="text-[0.875rem] text-[var(--color-ink)] group-hover:text-[var(--color-brand)] transition-colors leading-tight">
                          {ind.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-3">
        <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 h-full flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="text-[0.6875rem] uppercase tracking-[0.08em] text-[var(--color-brand)] font-semibold mb-2.5">Don't see yours?</div>
            <h4 className="text-[1.0625rem] font-semibold mb-2 leading-tight text-[var(--color-ink)]">We work with most verticals.</h4>
            <p className="text-[0.875rem] text-[var(--color-ink-muted)] leading-relaxed">
              Tell us what you do and we'll tell you honestly whether we're a fit.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2.5">
            <Link href="/who-we-serve" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)] hover:gap-2 transition-all">
              Browse all industries <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-brand)] transition-colors">
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============ MOBILE ============ */
function MobileSection({ title, items }: { title: string; items: Array<{ label: string; href: string; external?: boolean }> }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-3.5 text-base font-medium text-white"
      >
        {title}
        <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-3 space-y-1">
          {items.map((item) =>
            item.external ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener" className="block py-2 pl-3 text-sm text-white/75">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="block py-2 pl-3 text-sm text-white/75">
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}
