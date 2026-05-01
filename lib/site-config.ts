export const SITE_CONFIG = {
  name: "Reyna Pay",
  legalName: "Reyna Pay LLC",
  domain: "reynapay.com",
  url: "https://reynapay.com",
  email: "support@reynapay.com",
  description:
    "Vertical-first payment processing infrastructure. We power SalonTransact, KasseApp, RunMySalon, and a network of branded payment products across dozens of industries.",
  tagline: "Payment processing built for every industry.",
};

export const PRODUCTS = [
  {
    name: "SalonTransact",
    slug: "salontransact",
    domain: "salontransact.com",
    url: "https://salontransact.com",
    logoFile: "/products/salontransact.png",
    tagline:
      "Payment processing for salons, barbers, and beauty professionals.",
    description:
      "Card-on-file, stylist commission attribution, no-show automation, and booking integration, built for salons.",
    industries: [
      "salons",
      "barbershops",
      "med-spas",
      "tattoo-studios",
      "lash-and-brow",
      "nail-salons",
    ],
  },
  {
    name: "KasseApp",
    slug: "kasseapp",
    domain: "kasseapp.com",
    url: "https://kasseapp.com",
    logoFile: "/products/kasseapp.png",
    tagline: "POS and payments for restaurants, bars, and food service.",
    description:
      "Cloud POS with table management, tip pools, kitchen ticketing, and integrated payments. Built for restaurants and bars.",
    industries: [
      "restaurants",
      "bars",
      "coffee-shops",
      "food-trucks",
      "quick-service",
    ],
  },
  {
    name: "RunMySalon",
    slug: "runmysalon",
    domain: "runmysalon.com",
    url: "https://runmysalon.com",
    logoFile: "/products/runmysalon.png",
    tagline: "Booking and management for the modern salon.",
    description:
      "Online booking, calendar management, client records, and integrated payments, the operations layer for salons.",
    industries: ["salons", "barbershops", "med-spas"],
  },
  {
    name: "Reyna Pay Platform",
    slug: "platform",
    domain: "reynapay.com",
    url: "https://reynapay.com",
    logoFile: "/logo.png",
    tagline: "The infrastructure powering it all.",
    description:
      "PCI-compliant, card-network-certified processing platform. Powers SalonTransact, KasseApp, RunMySalon, and our partner network.",
    industries: ["all"],
  },
] as const;

export const INDUSTRIES = [
  {
    slug: "salons",
    name: "Salons",
    category: "Beauty & Personal Care",
    primaryProduct: "salontransact",
  },
  {
    slug: "barbershops",
    name: "Barbershops",
    category: "Beauty & Personal Care",
    primaryProduct: "salontransact",
  },
  {
    slug: "med-spas",
    name: "Med Spas",
    category: "Beauty & Personal Care",
    primaryProduct: "salontransact",
  },
  {
    slug: "tattoo-studios",
    name: "Tattoo Studios",
    category: "Beauty & Personal Care",
    primaryProduct: "salontransact",
  },
  {
    slug: "nail-salons",
    name: "Nail Salons",
    category: "Beauty & Personal Care",
    primaryProduct: "salontransact",
  },
  {
    slug: "lash-and-brow",
    name: "Lash & Brow Studios",
    category: "Beauty & Personal Care",
    primaryProduct: "salontransact",
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    category: "Food & Beverage",
    primaryProduct: "kasseapp",
  },
  {
    slug: "bars",
    name: "Bars",
    category: "Food & Beverage",
    primaryProduct: "kasseapp",
  },
  {
    slug: "coffee-shops",
    name: "Coffee Shops",
    category: "Food & Beverage",
    primaryProduct: "kasseapp",
  },
  {
    slug: "food-trucks",
    name: "Food Trucks",
    category: "Food & Beverage",
    primaryProduct: "kasseapp",
  },
  {
    slug: "gyms-and-fitness",
    name: "Gyms & Fitness Studios",
    category: "Health & Fitness",
    primaryProduct: "platform",
  },
  {
    slug: "yoga-studios",
    name: "Yoga & Pilates Studios",
    category: "Health & Fitness",
    primaryProduct: "platform",
  },
  {
    slug: "auto-repair",
    name: "Auto Repair Shops",
    category: "Auto & Service",
    primaryProduct: "platform",
  },
  {
    slug: "pet-grooming",
    name: "Pet Grooming & Boarding",
    category: "Pet Services",
    primaryProduct: "platform",
  },
  {
    slug: "retail",
    name: "Retail Stores",
    category: "Retail",
    primaryProduct: "platform",
  },
  {
    slug: "ecommerce",
    name: "E-Commerce",
    category: "Retail",
    primaryProduct: "platform",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    category: "B2B Services",
    primaryProduct: "platform",
  },
] as const;

export const SOLUTIONS = [
  {
    slug: "card-on-file",
    name: "Card-on-file payments",
    description: "Securely store cards for repeat customers.",
  },
  {
    slug: "no-show-fees",
    name: "No-show fee automation",
    description: "Charge cancellation fees automatically.",
  },
  {
    slug: "stylist-commission-tracking",
    name: "Stylist commission tracking",
    description: "Auto-attribute service revenue and tips to stylists.",
  },
  {
    slug: "tip-pools",
    name: "Tip pool management",
    description: "Split tips across staff fairly and transparently.",
  },
  {
    slug: "multi-location-reporting",
    name: "Multi-location reporting",
    description: "Roll up reporting across locations with separate MIDs.",
  },
  {
    slug: "white-label-payments",
    name: "White-label payment processing",
    description: "Launch your own branded payments business.",
  },
  {
    slug: "interchange-plus-pricing",
    name: "Interchange-plus pricing",
    description: "Transparent, line-item processing fees.",
  },
  {
    slug: "chargeback-protection",
    name: "Chargeback evidence packs",
    description: "Auto-built dispute evidence to win chargebacks.",
  },
  {
    slug: "same-day-payouts",
    name: "Same-day payouts",
    description: "Get funds today instead of waiting T+1.",
  },
  {
    slug: "recurring-billing",
    name: "Recurring billing & memberships",
    description: "Subscription billing with retry logic and dunning.",
  },
  {
    slug: "booking-integration",
    name: "Booking integration",
    description: "Pre-authorize cards at booking time.",
  },
  {
    slug: "pos-integration",
    name: "POS integration",
    description: "Embed Reyna Pay into any POS or vertical SaaS.",
  },
] as const;

export type Industry = (typeof INDUSTRIES)[number];
export type Solution = (typeof SOLUTIONS)[number];
export type Product = (typeof PRODUCTS)[number];
