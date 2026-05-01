"use client";

import Link from "next/link";

export function FooterLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 mb-5 font-semibold text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" alt="Reyna Pay" className="h-8 w-auto invert" onError={(e) => { (e.target as HTMLImageElement).src = "/logo.png"; }} />
      <span className="text-base">Reyna Pay</span>
    </Link>
  );
}
