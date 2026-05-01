"use client";

import Link from "next/link";

export default function FooterLogo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Reyna Pay home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="Reyna Pay" className="h-6 w-auto" />
    </Link>
  );
}
