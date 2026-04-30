"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const HIDE_ON = ["/contact", "/apply", "/login"];

export default function StickyApplyCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (HIDE_ON.some((p) => pathname.startsWith(p))) {
      setShow(false);
      return;
    }
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (!show) return null;

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-30">
      <Link
        href="/apply"
        className="block w-full text-center bg-[var(--color-teal)] text-white font-semibold py-3.5 rounded-[var(--radius-input)] shadow-lg hover:bg-[var(--color-teal-dark)] transition-colors"
      >
        Apply to accept payments
      </Link>
    </div>
  );
}
