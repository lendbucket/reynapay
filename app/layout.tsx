import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import StickyApplyCTA from "@/components/sticky-apply-cta";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#017ea7",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://reynapay.com"),
  title: {
    default: "Reyna Pay — Payment processing built for salons",
    template: "%s | Reyna Pay",
  },
  description:
    "SalonTransact gives salons the tools they need to grow — card-on-file, instant payouts, and real merchant transparency. Powered by Reyna Pay's partner network.",
  applicationName: "Reyna Pay",
  authors: [{ name: "Reyna Pay LLC" }],
  generator: "Next.js",
  keywords: [
    "salon payment processing",
    "salon credit card processor",
    "payment processor for salons",
    "white label payment processor",
    "payment processor reseller program",
    "salon POS",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reynapay.com",
    siteName: "Reyna Pay",
    title: "Reyna Pay — Payment processing built for salons",
    description:
      "SalonTransact and the Reyna Pay partner network. Transparent, vertical-first payment processing.",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Reyna Pay" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reyna Pay — Payment processing built for salons",
    description:
      "Transparent, vertical-first payment processing. SalonTransact + the Reyna Pay partner network.",
    images: ["/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://reynapay.com" },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <StickyApplyCTA />
        <Analytics />
      </body>
    </html>
  );
}
