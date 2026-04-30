import type { Metadata } from "next";

const BASE_URL = "https://reynapay.com";

export interface PageSEO {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage = "/og/default.png",
  noindex = false,
}: PageSEO): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "Reyna Pay",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export const SITE = {
  url: BASE_URL,
  name: "Reyna Pay",
  legalName: "Reyna Pay LLC",
  description:
    "Vertical-first payment processing infrastructure. SalonTransact for salons, plus a partner network for entrepreneurs building branded payments businesses.",
  email: "support@reynapay.com",
  phone: "[PLACEHOLDER — Robert to replace]",
  address: {
    street: "[PLACEHOLDER — Wyoming address]",
    locality: "[PLACEHOLDER]",
    region: "WY",
    postalCode: "[PLACEHOLDER]",
    country: "US",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/reyna-pay",
    twitter: "https://twitter.com/reynapay",
  },
};
