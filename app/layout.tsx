import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import StickyApplyCTA from "@/components/sticky-apply-cta";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#004643",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://reynapay.com"),
  title: {
    default: "Reyna Pay — Vertical-first payment processing infrastructure",
    template: "%s | Reyna Pay",
  },
  description:
    "Reyna Pay powers vertical-specific payment processing for salons, restaurants, gyms, retail, and dozens more industries. SalonTransact, KasseApp, RunMySalon, and our partner network — all on one transparent infrastructure.",
  applicationName: "Reyna Pay",
  authors: [{ name: "Reyna Pay LLC" }],
  generator: "Next.js",
  keywords: [
    "payment processing",
    "vertical payment processor",
    "salon payment processing",
    "restaurant payment processing",
    "gym payment processing",
    "white label payment processor",
    "payment processor reseller program",
    "POS payment processing",
    "merchant services",
    "transparent payment processing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reynapay.com",
    siteName: "Reyna Pay",
    title: "Reyna Pay — Vertical-first payment processing infrastructure",
    description: "Vertical-specific payment processing. SalonTransact, KasseApp, RunMySalon, and a partner network — on one transparent infrastructure.",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Reyna Pay" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reyna Pay — Vertical-first payment processing",
    description: "Vertical-specific payment processing for salons, restaurants, gyms, retail, and more.",
    images: ["/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://reynapay.com" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <StickyApplyCTA />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
