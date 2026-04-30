"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

const NAV_ITEMS = [
  { label: "SalonTransact", href: "/salontransact" },
  { label: "Partners", href: "/partners" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled || mobileOpen
          ? "bg-white shadow-[var(--shadow-nav)]"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-[var(--color-text-primary)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Reyna Pay" className="h-7 w-auto" />
          <span className="text-base">Reyna Pay</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.9375rem] transition-colors ${
                  active
                    ? "text-[var(--color-teal)] font-semibold"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/apply" size="sm">
            Apply now
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-white">
          <nav className="container-page flex flex-col py-3">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 text-base ${
                    active
                      ? "text-[var(--color-teal)] font-semibold"
                      : "text-[var(--color-text-primary)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button href="/apply" className="mt-3" size="md">
              Apply now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
