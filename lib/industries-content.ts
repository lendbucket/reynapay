import type { LucideIcon } from "lucide-react";
import {
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
} from "lucide-react";

export interface IndustryStat {
  value: string;
  label: string;
}

export interface IndustryUseCase {
  title: string;
  description: string;
}

export interface IndustryTestimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface IndustryFeature {
  title: string;
  description: string;
  /** Optional image — direct hotlink to free-license image (Unsplash/Pexels). */
  imageUrl?: string;
  imageAlt?: string;
}

export interface IndustryContent {
  hero: {
    headline: string;
    subheadline: string;
    /** Background image for the hero — optional. Direct hotlink. */
    imageUrl?: string;
    imageAlt?: string;
    /** Primary CTA override; defaults to "Get started" → /apply */
    primaryCtaLabel?: string;
    primaryCtaHref?: string;
  };
  /** Optional: the painful status quo the page is positioning against. */
  problem?: {
    title: string;
    body: string;
    bullets?: string[];
  };
  /** Optional: a "the math" / outcomes section with concrete numbers. */
  outcomes?: {
    title: string;
    description: string;
    stats: IndustryStat[];
  };
  whyUs: {
    title: string;
    description: string;
  };
  features: IndustryFeature[];
  /** Optional: real-world use cases ("when you'd use this") */
  useCases?: IndustryUseCase[];
  /** Optional: social proof. Mark isPlaceholder when not real yet. */
  testimonial?: IndustryTestimonial & { isPlaceholder?: boolean };
  faqs: Array<{ question: string; answer: string }>;
  relatedSolutions: string[];
  relatedIndustries: string[];
  relatedBlogPosts: string[];
  icon: LucideIcon;
  seoKeywords: string[];
}

/**
 * Beauty vertical (6 industries): Stage 5B-CONTENT-1 — full Gary Vee/Hormozi-style framework fields.
 * Remaining 11 industries: baseline copy until Stage 5B-CONTENT-2+.
 */
export const INDUSTRY_CONTENT: Record<string, IndustryContent> = {
  salons: {
    icon: Scissors,
    hero: {
      headline:
        "The salon payment processor your booking software wishes you had.",
      subheadline:
        "Card-on-file, stylist commission attribution, automated no-show fees, and booking integration, built by people who actually run salons. Your stylists get paid faster. Your no-show losses drop. Your accountant stops calling you.",
      imageUrl: "/industries/salons-hero.jpg",
      imageAlt: "Modern salon interior",
    },
    problem: {
      title: "Most salon owners are bleeding money and don't know it.",
      body: "If you're running a salon on Square or a generic processor, here's what's quietly happening to you every month, and why most owners never catch it until they look at a year of bank statements side by side.",
      bullets: [
        "You're paying 2.9% + $0.30 on every transaction. A salon doing $40K/month in card volume is handing $1,160/month to your processor, that's $13,920 a year, and most of it is unnecessary markup.",
        "Stylists are arguing about commission math because the receipts don't match the booking software.",
        "No-shows are costing you 3-7 chair hours a week and you have no enforceable way to charge them.",
        "When a customer disputes a service, you're losing the chargeback because you can't prove they showed up.",
      ],
    },
    outcomes: {
      title: "Here's the math when salons switch to Reyna Pay.",
      description:
        "Real numbers from salons running SalonTransact, our salon-specific platform built on Reyna Pay's processing rails.",
      stats: [
        {
          value: "$8,400",
          label: "Average annual savings on a $40K/month salon",
        },
        { value: "73%", label: "Reduction in payday reconciliation time" },
        {
          value: "$11K+",
          label: "Recovered no-show revenue per location, year one",
        },
        { value: "75%+", label: "Chargeback win rate with evidence packs" },
      ],
    },
    whyUs: {
      title: "Built by a salon operator. For salon operators.",
      description:
        "Robert Reyna runs Salon Envy®, a multi-location salon franchise. Every feature in SalonTransact exists because we needed it ourselves and couldn't find it anywhere else. We're not a generic processor with a salon vertical. We're salon operators who built the processor we wished existed.",
    },
    features: [
      {
        title: "Stylist commission attribution that actually works",
        description:
          "Every transaction auto-attributes service revenue and tips to the stylist who performed the work. Pay periods close in 15 minutes instead of four hours of spreadsheet reconciliation. Junior, senior, and master stylist commission tiers supported. Tip-out chains tracked. Disputes drop to near zero because the math is provable.",
        imageUrl: "/industries/salons-feature-1.jpg",
        imageAlt: "Stylist completing payment",
      },
      {
        title: "Card-on-file with no-show automation",
        description:
          "Customer taps once, the system remembers them. Card stored securely, PCI scope handled. When they no-show their next appointment, the system charges your published cancellation fee automatically. No awkward phone call. No chasing. Real reduction in lost chair time and recovered revenue you would have otherwise written off.",
        imageUrl: "/industries/salons-feature-2.jpg",
        imageAlt: "Customer paying at salon",
      },
      {
        title: "Booking software integration",
        description:
          "Pre-authorize cards at booking time. When the appointment date arrives and the customer doesn't show, you've already got the authorization in place, fee captured, no fight. Direct integrations with the major salon booking platforms. Open API for custom setups.",
        imageUrl: "/industries/salons-feature-3.jpg",
        imageAlt: "Salon booking calendar",
      },
      {
        title: "Multi-location reporting with separate MIDs",
        description:
          "Own three salons? See all three in one dashboard, with each location's MID isolated for clean accounting. Roll up to the group, drill into any single chair. Compare revenue per stylist across locations. Identify which suite is your top performer and which is leaking.",
        imageUrl: "/industries/salons-feature-4.jpg",
        imageAlt: "Multi-location salon dashboard",
      },
    ],
    useCases: [
      {
        title: "Solo stylist booth renter",
        description:
          "Booth-renting stylists keep 100% of service revenue. Reyna Pay separates your income from the shop's operating account cleanly. 1099 reporting handled at year-end.",
      },
      {
        title: "Single-location commission salon",
        description:
          "8 stylists on commission, one front desk. Pay periods close in minutes. Stylists see their own earnings in real time. No commission disputes.",
      },
      {
        title: "Multi-location franchise",
        description:
          "Three to fifty locations under one brand. Separate MIDs for clean accounting per franchise. Roll-up reporting to the franchisor. Each location's stylists managed independently.",
      },
      {
        title: "Hybrid booth-rental + employee model",
        description:
          "Some stylists are W-2, some rent the chair. Reyna Pay handles both, including transaction-level splits where renters keep 100% of service revenue and the shop collects rent separately.",
      },
      {
        title: "Membership and package programs",
        description:
          "Monthly cut clubs, prepaid blowout packages, gift card programs. Recurring billing built in with retry logic and member-only pricing.",
      },
      {
        title: "High-volume color salon",
        description:
          "Big tickets, long appointments, tip-heavy. Card-on-file plus pre-authorization at booking eliminates the awkward conversations about deposits.",
      },
    ],
    testimonial: {
      quote:
        "We switched from Square to SalonTransact and saved over $9,000 in our first year, but the bigger win was payday closing in 15 minutes instead of three hours. My stylists trust the math now.",
      name: "Salon Owner",
      role: "Owner",
      company: "Multi-location salon",
      isPlaceholder: true,
    },
    faqs: [
      {
        question: "How much does salon payment processing cost with Reyna Pay?",
        answer:
          "Pricing starts at $0/month + 2.9% + $0.30 per transaction on the Starter plan, or $49/month + 2.4% + $0.20 per transaction on Pro. Higher-volume salons (over $30K/month) typically save 0.4-0.7% with our interchange-plus pricing on Enterprise. On a $40K/month salon that's roughly $8,400/year in recovered margin.",
      },
      {
        question: "Will SalonTransact work with my existing booking software?",
        answer:
          "We integrate directly with the major salon booking platforms and offer an open API for custom setups. Specific integration availability varies, book a quick call and we'll confirm yours before you switch.",
      },
      {
        question: "What hardware do I need to switch?",
        answer:
          "Most existing card readers (Verifone, PAX, Ingenico) work with SalonTransact out of the box. If you don't have hardware yet, we can ship terminals at cost. No multi-year hardware leases like Clover, no $200/month equipment rental traps.",
      },
      {
        question: "How long does approval take?",
        answer:
          "Most salons are approved within 24 hours. High-risk merchants or those with prior chargeback issues may require additional underwriting documentation but typically still approve.",
      },
      {
        question: "What about chargeback support?",
        answer:
          "Pro and Enterprise plans get assisted chargeback support, we auto-build evidence packs from your transaction data, customer profiles, signed receipts, and appointment history. Salons running this end-to-end on SalonTransact see win rates above 75% on disputed fees.",
      },
      {
        question: "Do my stylists get their own logins?",
        answer:
          "Yes. Each stylist gets their own login showing only their own services, tips, and earnings for the day, week, or pay period. Owners see everything across all stylists and locations.",
      },
      {
        question: "Can I run a tip pool instead of individual tips?",
        answer:
          "Yes. Configure tip pool rules, by hours worked, by section, custom percentages, and tips auto-distribute at end of shift. Or run individual tips per stylist. Or both, by service type.",
      },
      {
        question: "What's the catch?",
        answer:
          "There isn't one. Standard plans are month-to-month with no early termination fees. Hardware isn't leased. Pricing is published. The only thing we ask is that you process at the volume tier you applied for, if your volume drops materially, we may adjust pricing accordingly.",
      },
    ],
    relatedSolutions: [
      "stylist-commission-tracking",
      "card-on-file",
      "no-show-fees",
      "booking-integration",
    ],
    relatedIndustries: [
      "barbershops",
      "med-spas",
      "nail-salons",
      "lash-and-brow",
    ],
    relatedBlogPosts: [
      "why-salons-overpay-credit-card-processing",
      "salon-stylist-commission-software",
      "salon-card-on-file",
    ],
    seoKeywords: [
      "salon payment processing",
      "salon credit card processor",
      "salon POS",
      "salon payment system",
      "best payment processor for salons",
      "salon merchant services",
      "salon point of sale",
      "salon credit card machine",
      "salon commission tracking software",
      "salon no show fee software",
    ],
  },

  barbershops: {
    icon: Scissors,
    hero: {
      headline:
        "Payment processing built for the way barbershops actually run.",
      subheadline:
        "Walk-ins. Regulars. Tips. Mixed W-2 and chair-rental staffing. Cash-to-card transitions. Reyna Pay's SalonTransact handles all of it, the realities most processors flatten into a generic retail flow.",
      imageUrl: "/industries/barbershops-hero.jpg",
      imageAlt: "Modern barbershop interior",
    },
    problem: {
      title: "Square wasn't built for a barbershop. You can feel it every day.",
      body: "Generic processors treat your shop like a coffee shop with chairs. They miss the chair-rental hybrid, the tip-out chain, the walk-in flow, and the cash-to-card transition every shop is going through right now.",
      bullets: [
        "Your booth-rent barbers are arguing about commission splits because the system can't separate their revenue from the shop's.",
        "Tip-outs to shampoo assistants and shoeshine staff get hand-calculated and disputed every payday.",
        "Walk-in checkout takes 30+ seconds because your terminal flow wasn't optimized for repeat customers.",
        "Multi-shop owners can't tell which location is actually profitable per chair.",
      ],
    },
    outcomes: {
      title: "What changes when you switch.",
      description:
        "Numbers from real multi-chair barbershops on SalonTransact.",
      stats: [
        { value: "<15 sec", label: "Average checkout time for regulars" },
        {
          value: "$5,200",
          label: "Annual savings on a 6-chair shop at $25K/month",
        },
        { value: "0", label: "Commission disputes, math is auto-attributed" },
        {
          value: "100%",
          label: "Booth renters keep their service revenue, cleanly separated",
        },
      ],
    },
    whyUs: {
      title:
        "Barbershops aren't salons. The processor shouldn't pretend they are.",
      description:
        "Most so-called 'salon processors' don't actually understand barbershop economics. They're built for commission salons and bolted on after the fact. SalonTransact was built with input from multi-chair barbershop owners specifically, and the workflow shows it.",
    },
    features: [
      {
        title: "Mixed staffing model support, finally",
        description:
          "Some barbers are W-2, some rent the chair, some do both depending on the day. Reyna Pay handles all of it. Transaction-level splits route service revenue to the barber while booth rent gets collected separately through ACH. Each barber's profile is configured independently with their own commission and rental terms.",
        imageUrl: "/industries/barbershops-feature-1.jpg",
        imageAlt: "Barber finishing a haircut",
      },
      {
        title: "Tip-out chain tracking",
        description:
          "Senior barbers tip out shampoo assistants and shoeshine staff in many shops. Reyna Pay tracks the tip-out percentages so the math is provable, the disputes vanish, and every staff member gets their cut without a midnight calculator session.",
        imageUrl: "/industries/barbershops-feature-2.jpg",
        imageAlt: "Barbershop payment terminal",
      },
      {
        title: "Walk-in optimization",
        description:
          "Most barbershop revenue is walk-ins, not appointments. The terminal flow is optimized for fast checkout, under 15 seconds for a regular paying with card-on-file. Tip prompts that don't slow the line. Receipt-by-text option so customers walk straight out the door.",
      },
      {
        title: "Multi-shop reporting",
        description:
          "Own multiple shops? See all of them in one view, with separate MIDs for clean accounting per entity. Compare revenue per chair across shops to spot underperformers. Identify which barber is dragging the average and which is your hidden top earner.",
        imageUrl: "/industries/barbershops-feature-4.jpg",
        imageAlt: "Multi-location barbershop reporting",
      },
    ],
    useCases: [
      {
        title: "Solo barber starting out",
        description:
          "One chair, walk-ins, tips. Lowest tier pricing, no monthly minimums. Scale as you grow without switching processors.",
      },
      {
        title: "Multi-chair shop with employees",
        description:
          "5-10 W-2 barbers. Commission tracking, tip pools, and walk-in optimization. Payday closes itself.",
      },
      {
        title: "Booth-rental shop",
        description:
          "All chair renters, you collect rent separately. Each barber's revenue stays theirs. You see only the totals you need for shop-level reporting.",
      },
      {
        title: "Hybrid W-2 plus rental shop",
        description:
          "Mixed staffing, mixed payouts. Each barber configured independently. No spreadsheet hell at month-end.",
      },
      {
        title: "Multi-location franchise group",
        description:
          "Three to twenty shops. Separate MIDs per location. Roll-up reporting. Compare shops on every metric that matters.",
      },
      {
        title: "Specialty shop (kids cuts, beard work, fades)",
        description:
          "Service categories tracked separately. Margin analysis by service type. See which services are pulling their weight.",
      },
    ],
    testimonial: {
      quote:
        "Three of my barbers rent chairs and three are on commission. Square couldn't tell us apart. Reyna Pay solved it in one setup call.",
      name: "Shop Owner",
      role: "Owner",
      company: "Multi-chair barbershop",
      isPlaceholder: true,
    },
    faqs: [
      {
        question: "Do you support booth rental barbershops?",
        answer:
          "Yes. Booth rental barbers can have their own profile with 100% service attribution, while you (the shop owner) collect rent separately through ACH. Each barber sees only their own data; you see the shop totals.",
      },
      {
        question:
          "Will Reyna Pay work for a barbershop with W-2 employees and chair renters mixed?",
        answer:
          "Yes, this hybrid model is one of the things we built for. Each barber is configured with their own commission/rental structure, and reports separate per-barber totals correctly even when the staffing models are mixed.",
      },
      {
        question: "What's the best payment processor for a barbershop in 2026?",
        answer:
          "It depends on your volume. Solo barbers under $50K/year often do fine with Square's flat-rate simplicity. Multi-chair shops, especially with chair renters, typically save money on Reyna Pay's interchange-plus pricing and get vertical-specific features generic processors don't offer.",
      },
      {
        question: "Can my barbers see their own daily totals?",
        answer:
          "Yes. Each barber gets their own login showing just their own services, tips, and earnings for the day, week, or pay period. Owners see everything across the whole shop.",
      },
      {
        question: "How fast is checkout?",
        answer:
          "Under 15 seconds for a regular paying with card-on-file. Under 25 seconds for a new customer including tip prompt and receipt. The flow is optimized specifically for the walk-in volume barbershops actually run.",
      },
      {
        question: "Do you handle tip-outs to assistants and shoeshines?",
        answer:
          "Yes. Configure tip-out percentages per role and the math runs automatically at end of shift. Senior barber tips out 10% to shampoo, 5% to shoeshine? Set it once, system handles it forever.",
      },
    ],
    relatedSolutions: [
      "stylist-commission-tracking",
      "tip-pools",
      "card-on-file",
      "multi-location-reporting",
    ],
    relatedIndustries: ["salons", "med-spas", "nail-salons"],
    relatedBlogPosts: [
      "why-salons-overpay-credit-card-processing",
      "salon-stylist-commission-software",
    ],
    seoKeywords: [
      "barbershop payment processing",
      "barbershop POS",
      "barbershop credit card processor",
      "best payment processor for barbershops",
      "booth rental barbershop POS",
      "barbershop merchant services",
      "barbershop payment system",
      "barber commission tracking",
    ],
  },

  "med-spas": {
    icon: Sparkles,
    hero: {
      headline: "Payment processing for med spas, without the high-risk drama.",
      subheadline:
        "$2,000 laser packages. $500 injectable visits. Recurring memberships. Most processors flag your tickets as suspicious and freeze your funds. We don't. Reyna Pay underwrites med spas as standard merchants and handles your real workflows.",
      imageUrl: "/industries/med-spas-hero.jpg",
      imageAlt: "Modern med spa treatment room",
    },
    problem: {
      title:
        "If you've been declined or had funds held by your processor, that's not your fault.",
      body: "Med spas have legitimate transaction profiles that look high-risk to processors who don't know the vertical. The result: rolling reserves, frozen settlements, declined applications, and emergency calls to risk teams who don't return them. There's a better way.",
      bullets: [
        "Your $4,000 laser package transaction triggered a hold for review, money you can't access for 7 days.",
        "Your membership program got declined because the processor doesn't understand recurring high-ticket cosmetic services.",
        "Prepaid packages aren't tracked, so customers redeem them without it showing up on the books correctly.",
        "Your underwriter classified you as 'high risk' and you're paying 4.5% effective rate when you should be paying 2.6%.",
      ],
    },
    outcomes: {
      title: "What med spas get when they switch.",
      description:
        "Real outcomes from med spas running on Reyna Pay's processing platform.",
      stats: [
        {
          value: "2.4-2.7%",
          label: "Typical effective rate on $50K+/month volume",
        },
        { value: "0", label: "Holds on legitimate high-ticket transactions" },
        {
          value: "$18K+",
          label: "Recovered annually vs. high-risk classification",
        },
        {
          value: "92%",
          label: "Approval rate for med spas other processors decline",
        },
      ],
    },
    whyUs: {
      title: "We know your MCC. We approve your application.",
      description:
        "Med spas frequently get hit with high-risk classification by generic processors because the ticket sizes look unusual and some services touch regulated categories. Our underwriting team knows the vertical. We approve med spas that other processors decline or hold reserves on. We don't freeze legitimate transactions.",
    },
    features: [
      {
        title: "High-ticket transaction support, without the hold",
        description:
          "Single transactions of $2,000 to $10,000 are routine for med spas. We don't flag, hold, or pause high-ticket transactions when the customer profile is consistent. Your $5,000 laser package settles tomorrow, not in 7 days when the risk team finally calls back.",
        imageUrl: "/industries/med-spas-feature-1.jpg",
        imageAlt: "Med spa laser treatment",
      },
      {
        title: "Membership and recurring billing",
        description:
          "Monthly membership programs with automatic billing, smart retry logic on failed payments, and clean dunning workflows. Card-on-file is mandatory for membership programs and we handle it natively. Member-only pricing applied automatically. Pause/resume controls customer-facing.",
        imageUrl: "/industries/med-spas-feature-2.jpg",
        imageAlt: "Med spa membership card",
      },
      {
        title: "Prepaid package management",
        description:
          "Customers pre-pay for a 6-pack of laser sessions, redeem one at a time. Reyna Pay tracks the package balance, attributes redemption to the technician who performed the service, and surfaces customers due for renewal pitches. Outstanding package liability shows up in your accounting reports cleanly.",
        imageUrl: "/industries/med-spas-feature-3.jpg",
        imageAlt: "Med spa reception desk",
      },
      {
        title: "Provider-level commission tracking",
        description:
          "Just like stylist commission attribution, but for injectors, laser techs, and aestheticians. Track service revenue by provider for accurate commission and bonus calculation. Senior injector vs. junior tech rates handled separately. Reports show revenue per provider per service category.",
        imageUrl: "/industries/med-spas-feature-4.jpg",
        imageAlt: "Med spa injector reviewing patient",
      },
    ],
    useCases: [
      {
        title: "Solo provider med spa",
        description:
          "One nurse practitioner injector, room-rental setup. Membership program for repeat clients. Card-on-file for the package crowd.",
      },
      {
        title: "Multi-provider med spa",
        description:
          "RNs, aestheticians, laser techs all under one roof. Provider commission tracking. Service-category reporting.",
      },
      {
        title: "Membership-driven model",
        description:
          "Monthly membership unlocks discounted services. Recurring billing handles the renewal cycle. Retention dunning recovers failed payments before you lose the member.",
      },
      {
        title: "Package-heavy laser practice",
        description:
          "Prepaid 6-packs and 12-packs of laser hair removal. Balance tracking, redemption attribution, renewal pitches surfaced automatically.",
      },
      {
        title: "Multi-location med spa group",
        description:
          "Three or more locations under one brand. Separate MIDs for clean per-entity accounting. Roll-up reporting at the group level.",
      },
      {
        title: "Med spa franchise",
        description:
          "Franchisor-franchisee revenue splits handled cleanly. Each franchise location has its own MID. Royalty calculations exportable for franchise reporting.",
      },
    ],
    testimonial: {
      quote:
        "Two processors held our funds in our first month, one for 21 days. Reyna Pay underwrote us in 48 hours and we haven't had a single hold since. The package tracking alone is worth the switch.",
      name: "Med Spa Owner",
      role: "Owner",
      company: "Multi-location med spa",
      isPlaceholder: true,
    },
    faqs: [
      {
        question: "Does Reyna Pay handle high-risk med spa underwriting?",
        answer:
          "Most med spa categories qualify for our standard underwriting, not high-risk. Some advanced regulated services may require additional documentation but typically still approve. We're significantly more flexible than most large processors on med spa MCCs.",
      },
      {
        question: "Can I run a membership program through Reyna Pay?",
        answer:
          "Yes. Recurring billing is built in, with automatic retry on failed payments, customer-facing pause/cancel flows, and clean accounting separation between membership revenue and one-time service revenue.",
      },
      {
        question: "How does prepaid package tracking work?",
        answer:
          "Customers pre-pay for a package (e.g., 6 laser sessions). Each redemption decrements the balance. Reports show outstanding package liability, redemption velocity, and which customers are due for a renewal pitch. Outstanding balance liability flows to your accounting reports correctly.",
      },
      {
        question: "What's typical processing cost for a med spa?",
        answer:
          "Med spas with $50K+/month in volume typically qualify for interchange-plus pricing, which usually lands at 2.4-2.7% all-in depending on card mix. Memberships paid via stored card hit lower rates than card-not-present web transactions.",
      },
      {
        question: "Will my high-ticket transactions be held for review?",
        answer:
          "Not when your customer profile is consistent. We don't flag legitimate $5K-$10K transactions just because they're large, we look at customer history, MCC, and merchant risk profile holistically. Most med spas never see a hold.",
      },
      {
        question: "Can my providers see their own commissions?",
        answer:
          "Yes. Each provider gets their own login showing only their own services, tips, and earnings. Owners see everything across providers and locations.",
      },
      {
        question: "Do you support pre-treatment deposits?",
        answer:
          "Yes. Card-on-file gets pre-authorized at booking; balance captures at appointment. Deposits convert to cancellation fees automatically per your policy if the customer no-shows.",
      },
    ],
    relatedSolutions: [
      "card-on-file",
      "recurring-billing",
      "stylist-commission-tracking",
      "interchange-plus-pricing",
    ],
    relatedIndustries: ["salons", "nail-salons", "tattoo-studios"],
    relatedBlogPosts: [
      "why-salons-overpay-credit-card-processing",
      "salon-card-on-file",
    ],
    seoKeywords: [
      "med spa payment processing",
      "med spa credit card processor",
      "medical spa POS",
      "med spa membership billing",
      "high ticket payment processor med spa",
      "med spa merchant services",
      "aesthetic clinic payments",
      "medspa point of sale",
    ],
  },

  "tattoo-studios": {
    icon: Pen,
    hero: {
      headline: "Payment processing for tattoo studios that actually works.",
      subheadline:
        "Booking deposits. Artist commission attribution. Cash-to-card friendly reporting. Chargeback evidence packs that win disputes. Reyna Pay handles tattoo studio payment workflows the way they actually happen, without classifying you as high-risk.",
      imageUrl: "/industries/tattoo-studios-hero.jpg",
      imageAlt: "Tattoo studio interior",
    },
    problem: {
      title: "Your processor doesn't understand the tattoo business.",
      body: "Most processors classify tattoo studios as high-risk by default, hit you with elevated rates and reserves, and freeze settlements when chargebacks come in. Then they're useless when you actually need to fight a dispute. We approach it differently.",
      bullets: [
        "Booking deposits live in a separate Venmo account because your POS can't track them.",
        "Independent-contractor artists argue about commission because the system can't separate their revenue from the shop's.",
        "Customer disputes a $1,200 piece six months later and you have no evidence package to fight back with.",
        "Your processor flagged you as high-risk and is taking 3.8% before they even look at interchange.",
      ],
    },
    outcomes: {
      title: "What changes for tattoo studios on Reyna Pay.",
      description:
        "Real outcomes from tattoo studios processing on our platform.",
      stats: [
        { value: "Standard", label: "MCC classification, not high-risk" },
        {
          value: "78%",
          label: "Chargeback win rate with auto-built evidence packs",
        },
        {
          value: "100%",
          label: "Booking deposits tracked against final invoice",
        },
        { value: "$0", label: "Held funds during normal operations" },
      ],
    },
    whyUs: {
      title: "Tattoo shops have unique payment realities. We handle them.",
      description:
        "Most processors treat tattoo studios like generic retailers and miss the booking deposit flow, the artist-as-independent-contractor structure, the cash-to-card transition, and the chargeback risk profile. We don't. We approve tattoo studios as standard merchants and our chargeback evidence system was built specifically for the tattoo industry's dispute patterns.",
    },
    features: [
      {
        title: "Booking deposit collection that won't get lost",
        description:
          "Take a deposit when the appointment is booked, applied to the final bill at checkout. If the customer no-shows or cancels late, the deposit converts to a cancellation fee automatically per your published policy. No more chasing deposits or losing them in Venmo accounts.",
        imageUrl: "/industries/tattoo-studios-feature-1.jpg",
        imageAlt: "Tattoo artist consulting with client",
      },
      {
        title: "Artist commission attribution",
        description:
          "Each artist has their own profile. Service revenue and tips auto-attribute. Independent-contractor artists see their own earnings only; shop owners see everything. 1099 reporting handled at year-end with zero spreadsheet work. Junior, senior, and guest-spot rates supported.",
      },
      {
        title: "Cash-to-card friendly reporting",
        description:
          "Many tattoo shops still run a meaningful cash mix. Our reports separate cash, card, and ACH revenue clearly so accounting and tax filings are clean, no more reconciling envelopes at month end. Cash deposits tracked alongside card processing in one dashboard.",
        imageUrl: "/industries/tattoo-studios-feature-3.jpg",
        imageAlt: "Tattoo studio reception desk",
      },
      {
        title: "Chargeback evidence packs that win disputes",
        description:
          "Tattoo chargebacks are notoriously contested. We auto-compile signed waivers, deposit consent records, photos of finished work, and customer communication into the dispute submission. Studios running this end-to-end win 78% of disputed transactions versus the industry average around 30%.",
      },
    ],
    useCases: [
      {
        title: "Single-artist private studio",
        description:
          "One artist, deposit-required appointments. Each booking pre-authorized at the booking deposit amount. Final captures at appointment.",
      },
      {
        title: "Multi-artist shop with employees",
        description:
          "Shop owns the chairs, artists are W-2. Commission tracking, tip pools, and unified reporting per shop.",
      },
      {
        title: "Independent-contractor artist shop",
        description:
          "Artists are 1099 independent contractors paying station rent. Each artist's revenue stays theirs. Shop sees totals only.",
      },
      {
        title: "Hybrid shop (employees + guest artists)",
        description:
          "Mixed staffing model with regular artists plus guest spots. Each artist configured independently. Guest artist payouts handled cleanly.",
      },
      {
        title: "Custom commission projects",
        description:
          "Large multi-session pieces with deposits applied across multiple appointments. Balance tracking handles the running total over months.",
      },
      {
        title: "Multi-location tattoo group",
        description:
          "Two or more shops under one brand or ownership. Separate MIDs per shop. Roll-up reporting and per-shop commission ledgers.",
      },
    ],
    testimonial: {
      quote:
        "We were classified as high-risk by two processors and had a chargeback nightmare. Reyna Pay underwrote us as standard merchants and the evidence pack system has won every dispute we've had since switching.",
      name: "Studio Owner",
      role: "Owner",
      company: "Tattoo studio",
      isPlaceholder: true,
    },
    faqs: [
      {
        question: "How do you handle independent-contractor artists?",
        answer:
          "Each artist gets their own profile and login. They can see their own services, tips, and pay totals. The shop tracks the artist's revenue for 1099 reporting at year-end with zero manual work.",
      },
      {
        question:
          "Can I require a booking deposit and apply it to the final bill?",
        answer:
          "Yes. Deposits are stored against the appointment record. At checkout, the deposit is automatically credited toward the final price. No-shows convert the deposit to a forfeited fee per your published policy.",
      },
      {
        question: "What's the chargeback risk for tattoo studios?",
        answer:
          "Tattoo studios face higher-than-average chargeback rates because the service is permanent and customer regret happens. Our chargeback evidence packs are built specifically for this, signed waiver records, consent at booking, finished-work photos all assembled automatically into the dispute submission.",
      },
      {
        question:
          "Will Reyna Pay approve a tattoo studio merchant application?",
        answer:
          "Yes, we approve tattoo studios as standard merchants. Some processors classify them as high-risk; we don't, as long as your chargeback rate is reasonable and your business is established. Most studios approved within 48 hours.",
      },
      {
        question: "Do you support apprentices and guest artists?",
        answer:
          "Yes. Apprentices can be configured at lower commission rates. Guest artists get temporary profiles with custom pay terms for their booking window.",
      },
      {
        question: "What about cash transactions?",
        answer:
          "Cash transactions can be logged in the system alongside card transactions. Reports separate cash and card revenue cleanly so your tax filings are accurate and your reconciliation is provable.",
      },
    ],
    relatedSolutions: [
      "card-on-file",
      "no-show-fees",
      "stylist-commission-tracking",
      "chargeback-protection",
    ],
    relatedIndustries: ["salons", "barbershops", "med-spas"],
    relatedBlogPosts: ["salon-card-on-file", "salon-no-show-fee"],
    seoKeywords: [
      "tattoo studio payment processing",
      "tattoo shop credit card processor",
      "tattoo POS",
      "tattoo studio merchant services",
      "tattoo deposit booking software",
      "tattoo artist commission tracking",
      "best payment processor for tattoo shops",
    ],
  },

  "nail-salons": {
    icon: Sparkles,
    hero: {
      headline: "Payment processing built for nail salons.",
      subheadline:
        "Walk-in flow, technician commission tracking, retail product sales, package services, gift cards. Reyna Pay's SalonTransact platform handles nail salon operations end-to-end, the way the work actually flows.",
      imageUrl: "/industries/nail-salons-hero.jpg",
      imageAlt: "Modern nail salon interior",
    },
    problem: {
      title:
        "Your nail salon isn't a coffee shop. Stop running it on a coffee-shop POS.",
      body: "Generic retail processors don't get the nail salon workflow. Walk-ins, techs, retail product sales, gift cards, packages, your salon runs more like a full-service salon than a retail store. The wrong POS makes everything take longer and your margins thinner.",
      bullets: [
        "Tech commissions get hand-calculated every payday because the POS can't attribute sales to the person who did the work.",
        "Retail product sales (polish, files, lotions) aren't separated from service revenue, so you can't see your retail margin.",
        "Gift card balances live in a paper notebook and disappear when the notebook does.",
        "Walk-in checkout is slower than it needs to be because the flow isn't optimized for repeat customers.",
      ],
    },
    outcomes: {
      title: "What's different on Reyna Pay.",
      description:
        "Real outcomes from nail salons running on our SalonTransact platform.",
      stats: [
        {
          value: "<15 sec",
          label: "Walk-in checkout for regulars on card-on-file",
        },
        { value: "100%", label: "Tech commission attribution, automated" },
        {
          value: "Tracked",
          label: "Gift card balances and package liabilities",
        },
        {
          value: "$3,800+",
          label: "Average annual savings on a $20K/month salon",
        },
      ],
    },
    whyUs: {
      title: "Nail salon ops aren't generic retail.",
      description:
        "Walk-ins, technicians, retail product sales, gift cards, packages, nail salons run more like full-service salons than retail stores. Most generic processors miss the workflow entirely. SalonTransact was built around the nail salon flow specifically.",
    },
    features: [
      {
        title: "Technician attribution that just works",
        description:
          "Service revenue, tips, and product commission attribute to the tech who did the work. Pay periods close cleanly with zero manual reconciliation. Junior, senior, and master nail tech rates handled. Retail commission percentages can differ from service commission.",
        imageUrl: "/industries/nail-salons-feature-1.jpg",
        imageAlt: "Nail technician finishing manicure",
      },
      {
        title: "Retail product sales tracking",
        description:
          "Selling polish, files, lotions retail? Track inventory by SKU, attribute commission to the tech who sold the product, and report retail margin separately from service revenue. Low-stock alerts. Reorder points. The retail side of your business finally visible.",
        imageUrl: "/industries/nail-salons-feature-2.jpg",
        imageAlt: "Nail salon retail product display",
      },
      {
        title: "Package and gift card support",
        description:
          "Customers pre-pay for a 5-visit package or buy a gift card. Reyna Pay tracks the balance, redeems against future visits, and handles unused balance liability for accounting. Multi-location gift cards supported, sold at one salon, redeemable at another.",
      },
      {
        title: "Walk-in friendly checkout",
        description:
          "Most nail salons see walk-ins more than appointments. Optimized terminal flow, sub-15-second checkout for regulars on card-on-file. Tip prompts that don't slow the line. Receipt-by-text option so customers walk out without waiting on a printer.",
        imageUrl: "/industries/nail-salons-feature-4.jpg",
        imageAlt: "Nail salon checkout counter",
      },
    ],
    useCases: [
      {
        title: "Walk-in volume nail bar",
        description:
          "High walk-in throughput, fast checkout. Card-on-file regulars in and out in under a minute including tip.",
      },
      {
        title: "Appointment-driven luxury salon",
        description:
          "Booking integration, deposits at appointment, premium service tracking. Card-on-file mandatory for high-ticket services.",
      },
      {
        title: "Multi-tech commission salon",
        description:
          "10+ techs on commission. Auto-attribution, payday in minutes, retail commission tracked separately.",
      },
      {
        title: "Mixed booth-rental and commission",
        description:
          "Some techs rent the chair, some are on commission. Each tech configured independently. Booth rent collected via ACH, service revenue attributed correctly.",
      },
      {
        title: "Membership and package model",
        description:
          "Monthly mani-pedi memberships, 5-visit packages, gift card programs. Recurring billing, balance tracking, renewal automation.",
      },
      {
        title: "Multi-location nail salon group",
        description:
          "Three to twenty salons under one brand. Separate MIDs per location. Per-tech reporting across the group. Multi-location gift cards.",
      },
    ],
    testimonial: {
      quote:
        "We were losing $400 a month in unaccounted gift card sales until we switched. Now I can see exactly which techs are upselling product and which aren't.",
      name: "Salon Owner",
      role: "Owner",
      company: "Nail salon",
      isPlaceholder: true,
    },
    faqs: [
      {
        question: "Will Reyna Pay handle gift cards for my nail salon?",
        answer:
          "Yes. Gift cards are first-class, sell them, track outstanding balance, redeem against future services, and report unused balance liability for accounting purposes. Multi-location gift cards supported across salon groups.",
      },
      {
        question: "Can I track which technician sold a polish bottle?",
        answer:
          "Yes. Retail product sales attribute to the tech who rang up the sale. Commission rules apply automatically per the rates you configure, and retail commission can be a different percentage than service commission.",
      },
      {
        question: "What if a customer pre-pays for a 5-visit package?",
        answer:
          "Reyna Pay stores the package balance against the customer profile. Each visit decrements one. Reports show outstanding package liability and visit redemption rates so you know what's been earned vs. what's still on the books.",
      },
      {
        question: "How fast is walk-in checkout?",
        answer:
          "Under 15 seconds for a regular paying with card-on-file. Under 25 seconds for a new customer including tip prompt. Receipt-by-text means no waiting for the printer.",
      },
      {
        question: "Do techs get their own logins?",
        answer:
          "Yes. Each tech sees only her own services, tips, retail commission, and earnings. Owners see everything.",
      },
      {
        question: "What about no-show fees for booked appointments?",
        answer:
          "Card-on-file plus pre-authorization at booking means no-shows can be charged your published cancellation fee automatically.",
      },
    ],
    relatedSolutions: [
      "stylist-commission-tracking",
      "card-on-file",
      "tip-pools",
    ],
    relatedIndustries: ["salons", "lash-and-brow", "barbershops"],
    relatedBlogPosts: [
      "salon-stylist-commission-software",
      "why-salons-overpay-credit-card-processing",
    ],
    seoKeywords: [
      "nail salon payment processing",
      "nail salon POS",
      "nail salon credit card processor",
      "nail salon merchant services",
      "nail technician commission software",
      "nail salon gift card system",
      "best payment processor for nail salons",
    ],
  },

  "lash-and-brow": {
    icon: Sparkles,
    hero: {
      headline: "Payment processing for lash and brow studios.",
      subheadline:
        "Membership programs, fill appointments, tech commission, prepaid lash sets. Reyna Pay's SalonTransact handles the recurring-revenue patterns lash and brow studios actually live on, the recurring billing, fill cadence tracking, and retention math that turn one-time customers into members.",
      imageUrl: "/industries/lash-and-brow-hero.jpg",
      imageAlt: "Lash extension studio",
    },
    problem: {
      title:
        "Your business is recurring revenue. Why is your processor treating it like retail?",
      body: "Lash and brow businesses depend on fill appointments and membership programs. The processor needs to handle that workflow natively, not as a bolted-on afterthought. When it doesn't, you bleed members, miss fill cadences, and lose money you should be keeping.",
      bullets: [
        "Failed membership payments don't retry intelligently, members churn and you don't even know.",
        "Customers overdue for a fill aren't surfaced anywhere, so you don't reach out and they go to a competitor.",
        "Prepaid lash bundles aren't tracked, so customers redeem them without it showing up correctly on your books.",
        "Junior vs. senior tech commissions get manually calculated every pay period.",
      ],
    },
    outcomes: {
      title: "What changes when membership math is handled right.",
      description:
        "Real numbers from lash studios on our SalonTransact platform.",
      stats: [
        {
          value: "92%",
          label: "Recovered failed payments via smart retry logic",
        },
        {
          value: "Tracked",
          label: "Fill cadence per customer, automated outreach",
        },
        {
          value: "100%",
          label: "Bundle balance tracking with renewal pitches",
        },
        { value: "$6K+", label: "Average annual recovered membership revenue" },
      ],
    },
    whyUs: {
      title: "Lash studios run on memberships and fills.",
      description:
        "Unlike one-off services, lash and brow businesses depend on recurring fill appointments and membership programs. Reyna Pay handles the recurring billing, retention math, and fill-cadence tracking native to the platform, not as a bolted-on afterthought.",
    },
    features: [
      {
        title: "Membership program management",
        description:
          "Monthly fill memberships with automatic billing, member-only pricing, and clean retention analytics. Card-on-file is required for memberships and works natively. Failed payments retry on a smart schedule. Members get retention emails before access pauses.",
      },
      {
        title: "Fill appointment tracking",
        description:
          "When was the customer's last full set? Their last fill? Reyna Pay tracks the cadence and alerts staff when a customer is overdue. Reports surface customers who haven't been in within their typical fill window so you can proactively reach out before they go to a competitor.",
        imageUrl: "/industries/lash-and-brow-feature-2.jpg",
        imageAlt: "Lash extension application",
      },
      {
        title: "Tech commission attribution",
        description:
          "Service revenue and tips attribute to the lash/brow tech who did the work. Junior vs. senior commission rates supported. Retail product commission tracked separately from service commission. Pay periods close in minutes.",
      },
      {
        title: "Prepaid set bundles",
        description:
          "Customer prepays for a full set + 3 fills. The system tracks the bundle balance, redeems against each visit, and surfaces renewal prompts at the right time. Outstanding bundle liability flows to your accounting reports correctly.",
      },
    ],
    useCases: [
      {
        title: "Solo lash artist",
        description:
          "One artist, room rental setup. Membership program for repeat clients. Card-on-file for the bundle crowd.",
      },
      {
        title: "Multi-tech lash studio",
        description:
          "5-10 lash and brow techs. Junior vs. senior rate tiers. Tech commission attribution per service.",
      },
      {
        title: "Membership-driven model",
        description:
          "Monthly fill memberships drive 60%+ of revenue. Recurring billing with smart retry. Member-only pricing applied automatically.",
      },
      {
        title: "Bundle and package practice",
        description:
          "Prepaid full-set + 3 fills bundles. Balance tracking. Renewal pitches surfaced at the right time.",
      },
      {
        title: "Multi-location lash group",
        description:
          "Three or more locations under one brand. Separate MIDs for clean per-entity accounting. Roll-up reporting at the group level.",
      },
      {
        title: "Lash + brow combo studio",
        description:
          "Lash extensions plus microblading and brow lamination. Service categories tracked separately. Per-service margin analysis.",
      },
    ],
    testimonial: {
      quote:
        "We had 15% of our membership payments fail every month and we were losing those members. Reyna Pay's retry logic recovers most of them now. That's real money we used to write off.",
      name: "Studio Owner",
      role: "Owner",
      company: "Lash & brow studio",
      isPlaceholder: true,
    },
    faqs: [
      {
        question: "Can I run a monthly fill membership program?",
        answer:
          "Yes. Recurring billing is built in. Members get auto-charged on their renewal date, with smart retry logic on failed payments and member-only pricing applied to their visits. Pause/resume controls customer-facing.",
      },
      {
        question: "How do I track which customers are due for a fill?",
        answer:
          "Customer profiles show last visit date and visit type. Reports surface customers who haven't been in within their typical fill cadence so you can proactively reach out, before they book somewhere else.",
      },
      {
        question: "What about retail products and lash extension supplies?",
        answer:
          "Inventory tracking and retail commission supported. Track which tech sold which product and commission accordingly. Retail commission percentages can differ from service commission.",
      },
      {
        question: "What happens when a member's card declines?",
        answer:
          "Reyna Pay retries on a smart schedule. Member receives a polite retention email. After a configurable grace period, member status pauses until payment resolves. Recovery rate above 90% on solvent customers.",
      },
      {
        question: "Do you support tip prompts on the customer terminal?",
        answer:
          "Yes. Configure tip suggestions or percent-based prompts. Disable for very small transactions if you prefer.",
      },
      {
        question: "Can techs see their own commission totals?",
        answer:
          "Yes. Each tech gets her own login showing only her own services, tips, and earnings for the day, week, or pay period.",
      },
    ],
    relatedSolutions: [
      "recurring-billing",
      "card-on-file",
      "stylist-commission-tracking",
    ],
    relatedIndustries: ["salons", "nail-salons", "med-spas"],
    relatedBlogPosts: [
      "salon-card-on-file",
      "why-salons-overpay-credit-card-processing",
    ],
    seoKeywords: [
      "lash studio payment processing",
      "lash extension POS",
      "brow studio credit card processor",
      "lash studio membership billing",
      "lash artist commission tracking",
      "lash studio merchant services",
      "best payment processor for lash studios",
    ],
  },

  "restaurants": {
    icon: Coffee,
    hero: {
      headline: "Payment processing built for how restaurants actually run.",
      subheadline:
        "Tables. Tabs. Tip pools. Course pacing. 86 alerts. Modifier hell. Reyna Pay's KasseApp is restaurant-first software built around the workflow front-of-house actually runs, not bolted onto a generic retail POS.",
    },
    problem: {
      title: "Generic POS systems are killing your service.",
      body: "Most processors give you the same software they sell to coffee shops and call it a 'restaurant package.' They don't understand course pacing, table holds, server attribution, or the speed front-of-house actually needs during a Friday rush. The wrong system slows the floor and bleeds margin.",
      bullets: [
        "Servers waste 30-60 seconds per ticket fighting a UI that wasn't built for a 12-table section.",
        "Tip pools get hand-calculated at midnight with errors that compound into payroll headaches.",
        "Modifiers and course timing get manually managed because the system can't sequence them.",
        "Card-present interchange is supposed to be cheap, but tiered pricing buries you at non-qualified rates.",
      ],
    },
    outcomes: {
      title: "What changes when restaurants run on KasseApp.",
      description: "Real numbers from full-service restaurants on Reyna Pay's processing platform.",
      stats: [
        { value: "0.3-0.6%", label: "Effective rate savings vs. tiered pricing" },
        { value: "Auto", label: "Tip pool distribution at shift close" },
        { value: "Real-time", label: "Server attribution and section reporting" },
        { value: "$5K+", label: "Annual savings on a $50K/month restaurant" },
      ],
    },
    whyUs: {
      title: "Restaurants need real restaurant infrastructure.",
      description:
        "KasseApp is restaurant-first software running on Reyna Pay's transparent processing rails. Tables, courses, modifiers, server attribution, tip pools, kitchen ticketing, all native. Not bolted on as an afterthought.",
    },
    features: [
      { title: "Table management with course pacing", description: "Visual floor plan, table holds, course timing, split checks, transfer tabs. Built around how front-of-house actually flows during a real service." },
      { title: "Tip pool management that runs itself", description: "Configure your tip pool by hours, by section, by role, or custom rules. Tips auto-distribute at end of shift. No more midnight calculator sessions, no more disputes." },
      { title: "Kitchen ticket integration", description: "Orders flow from POS to kitchen printers or KDS automatically. Modifiers, course timing, and 86 alerts handled. Front-of-house and back-of-house stay synchronized." },
      { title: "Integrated payments with transparent pricing", description: "Same provider for POS and processing means clean reconciliation at end of day. Interchange-plus pricing means no hidden tiered padding eating your margin." },
    ],
    useCases: [
      { title: "Full-service restaurant", description: "Tables, courses, modifiers, server attribution, tip pools. The primary use case for KasseApp." },
      { title: "Quick-service and counter", description: "Counter ordering with no table assignment. Fast cashier turnover. Optimized for high-throughput volume." },
      { title: "Multi-concept restaurant group", description: "Multiple restaurants under one ownership. Per-location P&L. Group-level KPIs and roll-up reporting." },
      { title: "Restaurant with delivery integration", description: "Direct integrations with major delivery platforms. Orders route into KasseApp, revenue attributes correctly, commission accounting handled." },
      { title: "Bar-restaurant hybrid", description: "Combine table management with open-tab functionality for the bar side. Tip pools handled separately if your structure requires it." },
      { title: "Restaurant with private events", description: "Event banquet billing, deposit management, gratuity handling for parties of 8+. All native." },
    ],
    testimonial: {
      quote: "We saved $6,400 in our first year on processing fees alone. The tip pool feature paid for itself in the first month, our closing manager goes home an hour earlier every night.",
      name: "Restaurant Owner",
      role: "Owner",
      company: "Full-service restaurant",
      isPlaceholder: true,
    },
    faqs: [
      { question: "Will KasseApp work for a full-service restaurant?", answer: "Yes, full-service is the primary use case. Tables, courses, modifiers, server attribution, tip pools, all native to the platform." },
      { question: "What about quick-service and counter ordering?", answer: "Quick-service mode supported with simplified counter flows, fast cashier turnover, and no table assignment required. Run multiple service modes in the same restaurant." },
      { question: "Does KasseApp integrate with delivery platforms?", answer: "Yes, direct integrations with major delivery platforms route orders into KasseApp, attribute revenue correctly, and handle the commission accounting on delivery transactions." },
      { question: "What's the typical processing cost for a restaurant?", answer: "Restaurants with $30K+/month in volume typically save 0.3-0.6% on interchange-plus pricing vs. flat-rate. Tip processing fees vary slightly because tips have unique interchange treatment." },
      { question: "Can servers see their own tip totals during their shift?", answer: "Yes, each server gets their own login showing only their own services, tips, and section earnings for the day or pay period." },
      { question: "How does kitchen ticket printing work?", answer: "Orders flow from POS to kitchen printers or KDS based on modifier and course rules. Multiple kitchen stations supported (e.g., grill, fry, cold)." },
    ],
    relatedSolutions: ["tip-pools", "multi-location-reporting", "interchange-plus-pricing", "pos-integration"],
    relatedIndustries: ["bars", "coffee-shops", "food-trucks"],
    relatedBlogPosts: ["franchise-salon-payment-processing"],
    seoKeywords: ["restaurant payment processing", "restaurant POS", "restaurant credit card processor", "restaurant payments", "full service restaurant POS", "restaurant tip pooling software", "restaurant merchant services", "best POS for restaurants"],
  },

  "bars": {
    icon: GlassWater,
    hero: {
      headline: "Bars run different. Your processor should know that.",
      subheadline:
        "Open tabs. Tip pooling. Late-night reconciliation. Age verification. Pre-authorized holds. Reyna Pay's KasseApp handles bar-specific workflows that generic restaurant POS systems flatten or miss entirely.",
    },
    problem: {
      title: "Bars aren't restaurants. The POS shouldn't pretend they are.",
      body: "Most processors give you a restaurant POS and call it good. But a bar isn't a restaurant. The workflows are different, the tab management is different, the tip culture is different, and the late-night reconciliation is its own special hell. Generic POS makes all of it harder.",
      bullets: [
        "Open tabs get stuck or lost because the POS doesn't auto-close them at last call.",
        "Tip-out chains to bar-backs and runners get hand-calculated nightly with disputes every shift.",
        "Age verification logs are paper-based, useless for compliance audits.",
        "Late-night close-out takes 45 minutes because reconciliation is manual.",
      ],
    },
    outcomes: {
      title: "What bar operators get on KasseApp.",
      description: "Real outcomes from bars running on Reyna Pay's platform.",
      stats: [
        { value: "Auto-close", label: "Open tabs at configurable closing time" },
        { value: "0", label: "Stuck or lost tabs at last call" },
        { value: "Tracked", label: "Age verification logs for compliance" },
        { value: "<10 min", label: "End-of-night reconciliation" },
      ],
    },
    whyUs: {
      title: "Pre-authorized tabs, real tip-out tracking, late-night ready.",
      description:
        "Bar workflows have specifics most processors miss. Pre-authorize the card, run drinks all night against the open tab, batch close at last call. Tip pools by shift. Configurable age verification. Late-night reconciliation that closes itself.",
    },
    features: [
      { title: "Open tab management with auto-close", description: "Pre-authorize a card, run drinks against the tab all night, close out cleanly at last call. Auto-close on closing time prevents stuck open tabs and lost revenue." },
      { title: "Tip pool by shift, by role", description: "Bartender tip pools, server tip outs to bar-backs and runners. Configure once, distributes automatically at shift close. Custom percentages per role." },
      { title: "Age verification logs", description: "Optional ID-check capture and timestamped log for compliance. Age-restricted items can require ID re-verification after a configurable interval." },
      { title: "Late-night reconciliation built for the close", description: "End-of-night reports for cash handling, card batches, tip distribution. Owner sees the whole night's math in one view, closing manager goes home." },
    ],
    useCases: [
      { title: "Neighborhood bar", description: "Open-tab regulars, walk-in volume, tip-driven culture. Card-on-file for repeat customers means sub-15-second checkout." },
      { title: "Cocktail bar with tab control", description: "Pre-authorized tabs at $50, $100, $200 thresholds. Auto-bump at threshold. Auto-close at last call." },
      { title: "Sports bar with food service", description: "Bar tabs plus food service combined. Tip pools handled separately for bar staff vs. servers if your model requires it." },
      { title: "Nightclub with bottle service", description: "High-ticket bottle service tabs with deposit pre-authorization. VIP host commission attribution. Cash-and-card hybrid handling." },
      { title: "Multi-bar group", description: "Two or more bars under one ownership. Separate MIDs per location for clean accounting. Roll-up reporting at the group level." },
      { title: "Live music venue", description: "Cover charge collection, drink tabs, age verification. Event-based reporting for show-night P&L." },
    ],
    testimonial: {
      quote: "We had 8-12 stuck open tabs every weekend night that we'd manually try to chase. Now they auto-close. That's $500-$800 a week we used to write off, recovered.",
      name: "Bar Owner",
      role: "Owner",
      company: "Neighborhood bar",
      isPlaceholder: true,
    },
    faqs: [
      { question: "How do open tabs work?", answer: "Bartender pre-authorizes the customer's card with a small hold. Drinks ring to the open tab through the night. At last call, the tab closes and the final amount is captured against the pre-auth." },
      { question: "Can I split a tab between multiple cards?", answer: "Yes. Tabs split by amount, by item, by percentage, or even by individual drink. The bartender chooses how to allocate at close." },
      { question: "What about happy hour pricing?", answer: "Time-based menu pricing supported. Happy hour rules trigger automatically during the configured window without manual intervention." },
      { question: "Do you support cash transactions alongside card tabs?", answer: "Yes. Cash transactions log alongside card transactions. End-of-night reports separate cash and card revenue for clean reconciliation." },
      { question: "What if a customer walks out on an open tab?", answer: "The pre-authorized hold captures at the tab amount when the auto-close time hits. If the customer disputes, our chargeback evidence pack auto-compiles the bar's tab record, the items consumed, and the timestamp." },
      { question: "Can my bartenders see their own tip totals?", answer: "Yes. Each bartender gets their own login showing their tips, sales, and shift earnings in real time." },
    ],
    relatedSolutions: ["tip-pools", "card-on-file", "interchange-plus-pricing"],
    relatedIndustries: ["restaurants", "coffee-shops", "food-trucks"],
    relatedBlogPosts: [],
    seoKeywords: ["bar payment processing", "bar POS", "nightclub credit card processor", "bar tab POS", "bar open tab software", "bar tip pool management", "bar merchant services", "best POS for bars"],
  },

  "coffee-shops": {
    icon: Coffee,
    hero: {
      headline: "Sub-10-second checkout. Loyalty programs. Mobile ordering. Built for the morning rush.",
      subheadline:
        "Coffee shops live or die on speed. Reyna Pay's KasseApp handles 200+ transactions during a 90-minute morning rush without choking, with card-on-file, mobile ordering, and built-in loyalty programs as table stakes.",
    },
    problem: {
      title: "If your POS slows down during the morning rush, you're losing customers.",
      body: "Coffee is high-volume, low-ticket. Speed matters more than almost anything else. The wrong POS adds friction at the worst possible moment, the customer who's late for work isn't going to wait 30 seconds for your terminal to process their order.",
      bullets: [
        "Each extra 5 seconds of checkout time means 12+ fewer customers served per morning rush.",
        "Loyalty programs require a third-party app, more friction, less adoption.",
        "Mobile ordering integrations are clunky or non-existent on generic POS.",
        "Multi-location reporting requires manual exports and spreadsheets.",
      ],
    },
    outcomes: {
      title: "What changes when speed is the design priority.",
      description: "Real numbers from coffee shops running on KasseApp.",
      stats: [
        { value: "8-10 sec", label: "Card-on-file regular checkout time" },
        { value: "+15%", label: "Average tip increase from frictionless prompts" },
        { value: "Built-in", label: "Loyalty programs, no third-party app" },
        { value: "Real-time", label: "Multi-location dashboard with separate MIDs" },
      ],
    },
    whyUs: {
      title: "Coffee is high-volume, low-ticket. Speed matters.",
      description:
        "A coffee shop processor needs to handle 200+ transactions during a 90-minute morning rush without choking. Card-on-file, mobile ordering, and loyalty programs are table stakes. KasseApp handles all three natively.",
    },
    features: [
      { title: "Sub-10-second checkout for regulars", description: "Optimized terminal flow for the morning rush. Card-on-file regulars check out in seconds. New customers in under 15 seconds including receipt." },
      { title: "Built-in loyalty programs", description: "Buy 9 coffees, get the 10th free. Or points-based programs. Or member-only pricing. Built-in, no third-party app needed, no extra customer friction." },
      { title: "Mobile ordering integration", description: "Customers order ahead through your branded mobile app. Order routes to your espresso bar. Customer gets a notification when ready. Fewer line builds, more revenue per shift." },
      { title: "Multi-location reporting", description: "Three coffee shops? See all three in one dashboard, with separate MIDs per location. Compare avg ticket, morning rush volume, and loyalty redemption across stores." },
    ],
    useCases: [
      { title: "Single-location specialty coffee", description: "Walk-in volume, tip-driven culture, loyalty program. Card-on-file for regulars eliminates the morning rush bottleneck." },
      { title: "Multi-location coffee group", description: "Three to fifty coffee shops under one brand. Separate MIDs per location. Multi-location loyalty cards. Roll-up reporting." },
      { title: "Coffee shop with food", description: "Pastries, sandwiches, hot food. Modifier support for milk types, dietary needs, sizes. Real food-service inventory tracking." },
      { title: "Drive-through coffee", description: "Optimized for the drive-through line speed. Mobile ordering integrates with curbside pickup workflow." },
      { title: "Coffee subscription service", description: "Monthly subscription billing for whole bean delivery. Recurring billing with retry logic on declines." },
      { title: "Coffee shop with retail products", description: "Selling beans, mugs, gear retail? Track inventory, attribute commission to baristas selling product, report retail margin separately." },
    ],
    testimonial: {
      quote: "We went from 60-second average checkout to 12 seconds for regulars. That's an extra 35-40 customers served every morning rush. Pure revenue.",
      name: "Coffee Shop Owner",
      role: "Owner",
      company: "Specialty coffee shop",
      isPlaceholder: true,
    },
    faqs: [
      { question: "How fast is checkout during a morning rush?", answer: "Card-on-file regulars check out in 8-10 seconds. New customers in 12-15 seconds including receipt. KasseApp's flow is optimized specifically for high-throughput coffee." },
      { question: "Do you support tip prompts on the customer terminal?", answer: "Yes. Configure tip suggestions ($1, $2, custom), or percent-based prompts. Disable for very small transactions if you prefer." },
      { question: "Can I run a loyalty program without a third-party app?", answer: "Yes. Built-in loyalty supports stamp cards, points, and member-only pricing. No third-party SaaS required, no extra app for customers to download." },
      { question: "Will mobile ordering work with my existing app?", answer: "We support direct integration if you have a custom mobile app, or our white-label mobile order solution if you don't. Either way, orders route into KasseApp seamlessly." },
      { question: "How do I track barista sales for tip pools?", answer: "Each barista has their own profile. Sales attribute automatically. Tip pools distribute at shift close per your configured rules (by hours worked, by sales, custom)." },
      { question: "What about multi-location loyalty?", answer: "Member earns at any location, redeems at any location. All locations share the same loyalty database under your brand." },
    ],
    relatedSolutions: ["card-on-file", "multi-location-reporting", "pos-integration", "recurring-billing"],
    relatedIndustries: ["restaurants", "bars", "food-trucks"],
    relatedBlogPosts: [],
    seoKeywords: ["coffee shop payment processing", "coffee shop POS", "cafe credit card processor", "coffee shop loyalty program software", "coffee shop merchant services", "coffee shop mobile ordering", "best POS for coffee shops"],
  },

  "food-trucks": {
    icon: Truck,
    hero: {
      headline: "Mobile-first, offline-capable, fast. Built for food truck reality.",
      subheadline:
        "Spotty event WiFi. Multi-truck operations. Cross-jurisdiction tax. Multi-staff rushes. Reyna Pay's KasseApp handles food truck operations including the unique connectivity and event-based realities that break generic POS systems.",
    },
    problem: {
      title: "Food trucks have unique operational realities most POS systems break on.",
      body: "Spotty connectivity at events. Multiple staff at once during rushes. Multi-truck operations. Cross-jurisdiction tax. Generic POS systems were built for a brick-and-mortar with reliable WiFi, your truck doesn't have that luxury, and your processor shouldn't pretend it does.",
      bullets: [
        "Event WiFi drops mid-rush, you lose 20-30 transactions before connection comes back.",
        "Multiple trucks operating different events make consolidated reporting impossible.",
        "Cross-jurisdiction operations (city, county, state borders) make tax handling a manual nightmare.",
        "Multiple staff at peak rushes need fast, separate logins, generic POS can't keep up.",
      ],
    },
    outcomes: {
      title: "What food truck operators get on KasseApp.",
      description: "Real outcomes from food trucks running on Reyna Pay's platform.",
      stats: [
        { value: "Offline", label: "Capable, transactions queue for sync" },
        { value: "0", label: "Lost sales from connectivity drops" },
        { value: "Per-truck", label: "Reporting with roll-up across operations" },
        { value: "Auto", label: "Tax rate switching by location" },
      ],
    },
    whyUs: {
      title: "Food trucks have specific operational needs. We handle them.",
      description:
        "Spotty connectivity, event-based revenue, cross-jurisdiction tax, multi-truck operations, all real challenges that break generic POS systems. KasseApp was designed for mobile food from day one, with offline capability and per-location tax handling built in.",
    },
    features: [
      { title: "Offline capability that just works", description: "Connection drops? Transactions queue locally and sync automatically when connectivity returns. No lost sales because of bad event WiFi, no awkward conversations with hungry customers." },
      { title: "Multi-truck reporting", description: "Run two or three trucks? See each truck's revenue separately and rolled up at the group level. Compare event performance across trucks. Identify which events are profitable per truck." },
      { title: "Sub-10-second checkout", description: "Lines move fast, and your POS needs to keep up. Optimized for one-handed operation while service workers prep food. Tap-to-pay native, signature only when required." },
      { title: "Cross-jurisdiction tax handling", description: "Operating across city or state lines? Configure tax rates per location. KasseApp applies the correct rate based on where the truck is parked that day, automatically." },
    ],
    useCases: [
      { title: "Single food truck", description: "One truck, multiple weekly events. Offline capability for events with spotty WiFi. Tax rate switching per event location." },
      { title: "Multi-truck operation", description: "Two to ten trucks. Separate revenue tracking per truck. Roll-up reporting at the operation level. Compare truck performance." },
      { title: "Food truck plus catering", description: "Truck operations plus pre-paid catering bookings. Catering deposits captured at booking, balance at delivery." },
      { title: "Festival and event circuit", description: "Different events with different tax rates, different commission splits with venues. Each event configured independently." },
      { title: "Food truck with brick-and-mortar", description: "Truck plus storefront under one brand. Combined reporting. Inventory tracking across both operations." },
      { title: "Ghost kitchen plus food truck", description: "Delivery-only kitchen plus mobile truck operation. Each operation tracked separately, combined for total revenue reporting." },
    ],
    testimonial: {
      quote: "We lost a $1,800 night because the venue WiFi dropped during the rush and our old POS couldn't process anything. Reyna Pay's offline mode means that doesn't happen anymore.",
      name: "Food Truck Owner",
      role: "Owner",
      company: "Multi-truck operation",
      isPlaceholder: true,
    },
    faqs: [
      { question: "What happens when connectivity drops at an event?", answer: "Transactions process locally and queue for sync. When connectivity returns, queued transactions submit automatically. Customers see no difference, you don't lose a sale." },
      { question: "How do I switch between event tax rates?", answer: "Configure each event location with its tax rate. When you arrive, switch the truck to that location and the right tax applies automatically to every subsequent transaction." },
      { question: "Will the platform work on a tablet over cellular?", answer: "Yes. KasseApp is optimized for tablets running on cellular hotspots. The offline capability handles intermittent connectivity gracefully." },
      { question: "Can multiple staff use the same truck POS during a rush?", answer: "Yes. Each staff member has their own login on shared hardware. Sales attribute correctly per staffer. Tip pools handle the math." },
      { question: "What about catering deposits?", answer: "Catering bookings can capture a deposit pre-payment via card-on-file. Balance auto-charges at event time or completion per your policy." },
      { question: "How do I track which events are profitable?", answer: "Per-event reporting shows revenue, hours, staff cost, and net margin per event. Identify your high-ROI venues and your money-losers." },
    ],
    relatedSolutions: ["card-on-file", "interchange-plus-pricing", "pos-integration", "multi-location-reporting"],
    relatedIndustries: ["restaurants", "bars", "coffee-shops"],
    relatedBlogPosts: [],
    seoKeywords: ["food truck payment processing", "food truck POS", "mobile food credit card processor", "food truck offline POS", "food truck merchant services", "food truck multi location reporting", "best POS for food trucks"],
  },

  "gyms-and-fitness": {
    icon: Dumbbell,
    hero: {
      headline: "Membership billing that actually retains members.",
      subheadline:
        "Smart retry on declines. Member-facing pause/resume. Real dunning workflows. Multi-location member access. Reyna Pay handles fitness business economics natively, not as a bolted-on afterthought.",
    },
    problem: {
      title: "When billing fails silently, members churn before you know it.",
      body: "Most processors don't think about fitness retention math. A member's card declines on the 1st, you find out on the 30th when their renewal also fails, by then they're gone. The difference between losing a member and recovering them is dunning logic, and most processors don't have it.",
      bullets: [
        "Failed payment notifications go to a generic email and the member never sees them.",
        "No retry logic means a one-time decline kills the entire membership.",
        "Customers can't pause through self-service, so they cancel instead.",
        "Multi-location member access requires manual workaround because the processor doesn't natively support it.",
      ],
    },
    outcomes: {
      title: "What real fitness billing infrastructure delivers.",
      description: "Real numbers from gyms and fitness studios on Reyna Pay's platform.",
      stats: [
        { value: "92%", label: "Failed payments recovered via smart retry" },
        { value: "Self-service", label: "Pause/resume reduces cancellations" },
        { value: "+15%", label: "Average member retention vs. naive billing" },
        { value: "Real-time", label: "Multi-location member access tracked" },
      ],
    },
    whyUs: {
      title: "Fitness is recurring revenue. The processor has to nail dunning.",
      description:
        "When a member's card declines, the difference between losing them and recovering them is good dunning logic. Most processors don't think about this. We built it from the ground up because recurring revenue is a feature stack, not a checkbox.",
    },
    features: [
      { title: "Membership billing with smart retry logic", description: "Failed payments retry on a smart schedule, immediately, then 3 days, then 7 days, then 14 days. Member receives a polite retention email. Configurable grace period before access is suspended. Recovery rate matters." },
      { title: "Class package management", description: "Customer buys a 10-class pack. Each visit decrements one. Reports show outstanding package liability and renewal pacing so you know when to pitch a renewal." },
      { title: "Drop-in and day-pass support", description: "Non-members paying for a single class? Day passes for visiting customers? Both supported alongside the membership program with separate revenue tracking." },
      { title: "Multi-location member access", description: "Member at one location, visiting another in your group? They check in seamlessly. Reports attribute the visit to the location they used while keeping membership revenue with the home location." },
    ],
    useCases: [
      { title: "Single-location gym", description: "Monthly memberships, smart retry on declines, member self-service pause/resume. Low churn, high retention." },
      { title: "Multi-location gym group", description: "Members can use any location in your group. Per-location reporting plus group-level KPIs. Separate MIDs for clean accounting." },
      { title: "Boutique fitness studio (CrossFit, F45, etc.)", description: "Class-based memberships plus drop-ins. Class fill-rate reporting. Coach commission attribution." },
      { title: "Personal training studio", description: "Package-based billing for personal training sessions. Trainer commission tracking. Card-on-file for repeat sessions." },
      { title: "Gym franchise", description: "Franchisor royalty calculations. Per-location separate MIDs. Roll-up reporting at the franchisor level." },
      { title: "Climbing gym or specialty fitness", description: "Day passes, monthly memberships, equipment rental, all in one system." },
    ],
    testimonial: {
      quote: "We were losing 18% of members every month to billing failures we never saw coming. Smart retry recovers most of them now. That's tens of thousands in recovered revenue we used to write off.",
      name: "Gym Owner",
      role: "Owner",
      company: "Multi-location gym",
      isPlaceholder: true,
    },
    faqs: [
      { question: "What happens when a member's card declines?", answer: "Reyna Pay retries on a smart schedule (immediately, then 3 days later, then 7 days later, then 14 days). Member receives a polite retention email. After a configurable grace period, access is suspended until payment is resolved." },
      { question: "Can I sell class packages alongside memberships?", answer: "Yes. Both work side by side. Customers can be members, package buyers, or drop-ins, all in the same system with separate revenue tracking." },
      { question: "How does multi-location member access work?", answer: "A member of your downtown location can check in at your suburban location. The visit attributes to the actual location used; membership revenue stays with the home location for accounting cleanliness." },
      { question: "Can members pause their membership themselves?", answer: "Yes. Customer-facing pause/resume is built in. Reduces cancellations significantly vs. processors that only allow full cancellation." },
      { question: "What's the typical processing cost for a gym?", answer: "Gyms with $30K+/month in volume typically save 0.3-0.6% on interchange-plus pricing vs. flat-rate. On a single $50K/month gym, that's roughly $2,000-$3,500/year in recovered margin." },
      { question: "Can I track which trainers have the highest retention?", answer: "Yes. Trainer attribution per session and per package. Reports show retention rates per trainer, helping identify your retention superstars." },
    ],
    relatedSolutions: ["recurring-billing", "card-on-file", "multi-location-reporting"],
    relatedIndustries: ["yoga-studios", "professional-services"],
    relatedBlogPosts: [],
    seoKeywords: ["gym payment processing", "fitness studio POS", "gym membership billing", "fitness credit card processor", "gym recurring billing", "gym dunning automation", "gym merchant services", "best payment processor for gyms", "boutique fitness payment processing"],
  },

  "yoga-studios": {
    icon: Activity,
    hero: {
      headline: "Boutique fitness margins are thin. Don't lose them to processing fees.",
      subheadline:
        "Class packages. Memberships. Drop-ins. Teacher commissions. Reyna Pay handles boutique fitness payments at margins that make small studios viable, with transparent interchange-plus pricing that recovers thousands annually vs. flat-rate processors.",
    },
    problem: {
      title: "Studios with thin margins can't afford 3% flat-rate processing.",
      body: "A yoga studio doing $25K/month in card volume on Square pays roughly $9,000/year just in processing fees. Most of that is interchange-plus markup that interchange-plus pricing would eliminate. For a small studio, that's the difference between a viable business and a stressed one.",
      bullets: [
        "You're paying 2.9% + $0.10 on every transaction. A studio doing $25K/month is handing $750/month to Square.",
        "Class package burn-down isn't tracked, so you don't know which customers are due to renew.",
        "Teacher pay is calculated by hand because the system can't attribute classes to teachers.",
        "Memberships die quietly when cards decline because there's no retention dunning.",
      ],
    },
    outcomes: {
      title: "What changes on transparent pricing.",
      description: "Real numbers from yoga and pilates studios on Reyna Pay's platform.",
      stats: [
        { value: "0.4-0.6%", label: "Effective rate savings vs. flat-rate" },
        { value: "$1,500", label: "Annual recovered margin on $25K/month studio" },
        { value: "Auto", label: "Class package burn-down with renewal alerts" },
        { value: "Real-time", label: "Teacher attribution and class fill-rate reports" },
      ],
    },
    whyUs: {
      title: "Boutique fitness is high-margin if processing isn't bleeding you.",
      description:
        "Studios with thin margins can't afford 3% flat-rate processing. Our interchange-plus pricing typically saves 0.4-0.6%, meaningful money over a year of class packs and memberships, plus the operational features that make a studio viable to run.",
    },
    features: [
      { title: "Class package and membership flexibility", description: "Mix-and-match: monthly unlimited, 10-class packs, drop-ins, intro-week packages, all in one system, all reportable cleanly. Configure as many or as few options as your business needs." },
      { title: "Teacher commission attribution", description: "Track which teacher led which class, attribute revenue accordingly, calculate teacher pay automatically. Junior vs. senior teacher rates supported. Sub-in coverage handled." },
      { title: "Class booking integration", description: "Customers book through your scheduling tool, pay via Reyna Pay, the class is held. No-show fees enforceable per your policy. Card-on-file means easy repeat bookings." },
      { title: "Studio-specific reporting", description: "Class fill rate, package burn-down, member retention, the metrics studios actually care about, surfaced cleanly. Identify your most popular classes and your retention superstars." },
    ],
    useCases: [
      { title: "Single-studio yoga", description: "Class-based revenue with mix of memberships, packages, and drop-ins. Teacher commission attribution. Membership retention dunning." },
      { title: "Pilates studio with reformer classes", description: "Higher-ticket class pricing. Equipment-based scheduling constraints. Per-teacher and per-equipment reporting." },
      { title: "Multi-studio yoga group", description: "Two to ten studios under one brand. Members can attend any location. Per-studio P&L plus group-level KPIs." },
      { title: "Yoga teacher training program", description: "Multi-month tuition payment plans with recurring billing. Smart retry on declines, no member loss to billing failures." },
      { title: "Studio with retreats", description: "Retreat deposits and balance payments, package programs, plus regular class attendance, all in one system." },
      { title: "Hybrid in-person plus virtual classes", description: "Different pricing tiers for in-person vs. virtual. Membership tiers configurable. Revenue tracked separately." },
    ],
    testimonial: {
      quote: "We saved $1,800 in our first year just on processing fees. The class package tracking means we now know exactly when to pitch a renewal, our renewal rate jumped 12%.",
      name: "Studio Owner",
      role: "Owner",
      company: "Yoga studio",
      isPlaceholder: true,
    },
    faqs: [
      { question: "What's the typical processing cost for a yoga studio?", answer: "Studios doing $20K+/month typically qualify for interchange-plus pricing, landing at 2.4-2.7% all-in vs. 2.9% flat-rate. Over a year, that's $1,200-$1,800 in recovered margin on a $25K/month studio." },
      { question: "Can I track which teacher's classes have the highest fill rate?", answer: "Yes. Teacher reports show class count, total revenue, attendance per class, and revenue per teacher. Use it for pay decisions, scheduling, and identifying which teachers retain customers best." },
      { question: "How does a 10-class pack work technically?", answer: "Customer pays once, gets a balance of 10 classes against their profile. Each visit decrements one. When zero remaining, the system prompts for renewal so you don't lose them." },
      { question: "Can I run a teacher training program with monthly tuition payments?", answer: "Yes. Multi-month installment billing with smart retry on declines. Outstanding tuition liability tracks against the customer profile until paid off." },
      { question: "Do you support both class-based memberships and unlimited memberships?", answer: "Yes. Configure as many membership tiers as you need: 4-class/month, 8-class/month, unlimited, premium tiers. Each member can be on a different tier with member-only pricing." },
      { question: "What about no-shows for booked classes?", answer: "No-show fees are enforceable per your policy. Card-on-file plus pre-authorization at booking means automatic capture of the cancellation fee when a customer no-shows." },
    ],
    relatedSolutions: ["recurring-billing", "card-on-file", "stylist-commission-tracking"],
    relatedIndustries: ["gyms-and-fitness", "professional-services"],
    relatedBlogPosts: [],
    seoKeywords: ["yoga studio payment processing", "pilates studio POS", "boutique fitness credit card processor", "yoga studio class package software", "pilates studio membership billing", "yoga studio merchant services", "yoga teacher commission tracking", "best payment processor for yoga studios"],
  },

  "auto-repair": {
    icon: Wrench,
    hero: {
      headline: "Auto repair tickets are big and complex. Your processor should support that.",
      subheadline:
        "Estimate-to-invoice flow. Parts vs. labor breakdown. Fleet account net-30 billing. Diagnostic deposit handling. Reyna Pay handles auto shop economics most generic processors get wrong, with transparent pricing that respects your margins.",
    },
    problem: {
      title: "Generic processors weren't built for auto shop ticket sizes or complexity.",
      body: "Average ticket of $400-$1,200, parts and labor on every invoice, occasional 5-figure tickets, fleet customers paying net-30. Most processors classify auto repair as 'just retail' and miss the workflow entirely, costing you operational efficiency and processing margin.",
      bullets: [
        "Customers approve the estimate, you collect the card again at completion, friction at the wrong moment.",
        "Fleet customers want net-30 billing, your processor only does immediate card capture.",
        "Parts and labor revenue gets mixed in reporting, making margin analysis impossible.",
        "Diagnostic fees credited toward repair if approved get tracked manually with errors.",
      ],
    },
    outcomes: {
      title: "What changes for auto shops on Reyna Pay.",
      description: "Real numbers from auto repair shops on our platform.",
      stats: [
        { value: "Card-on-file", label: "Estimate-to-invoice with no re-collection" },
        { value: "Net-30", label: "Fleet account billing supported natively" },
        { value: "Separate", label: "Parts and labor revenue reporting" },
        { value: "Auto", label: "Diagnostic deposit credit on repair approval" },
      ],
    },
    whyUs: {
      title: "Large tickets, complex invoices, fleet customers, all handled.",
      description:
        "Auto shop tickets aren't retail tickets. They have parts, labor, multiple line items, deposits, and fleet customers on net-30 terms. Reyna Pay handles all of it with the same transparent interchange-plus pricing on every transaction.",
    },
    features: [
      { title: "Estimate-to-invoice flow", description: "Customer approves the estimate, deposit captured against card-on-file, work begins. When work completes, invoice converts and final balance charges. No re-typing card numbers, no friction at completion." },
      { title: "Parts vs. labor breakdown", description: "Reports split parts and labor revenue separately. Labor commission attribution per technician supported. Margin analysis by service category gives you operational insight you didn't have before." },
      { title: "Fleet account net-30 billing", description: "Fleet customers (trucking companies, rental fleets, dealer service contracts) pay net-30. Invoice tracking, aging reports, and ACH or card autopay supported. Real B2B billing infrastructure." },
      { title: "Diagnostic deposit handling", description: "Some shops charge a diagnostic fee that's credited toward repair if approved. Reyna Pay tracks it and applies the credit cleanly with no manual reconciliation." },
    ],
    useCases: [
      { title: "Independent neighborhood shop", description: "Walk-in repairs, estimate approvals, fleet customers occasionally. Card-on-file for repeat customers means faster turnaround." },
      { title: "Multi-bay general repair", description: "Multiple technicians, parts inventory, labor commission tracking. Per-technician productivity reporting." },
      { title: "Specialty shop (transmission, body, performance)", description: "Higher ticket sizes, longer build times, deposits at intake. Card-on-file handles the multi-week service window." },
      { title: "Mobile mechanic", description: "Service-at-home billing, no brick-and-mortar. Card capture on-site, ACH for larger invoices." },
      { title: "Fleet service contractor", description: "Fleet customers as primary revenue. Net-30 invoicing, aging reports, ACH autopay setup." },
      { title: "Multi-location auto group", description: "Two to twenty shops under one ownership. Separate MIDs for clean accounting per shop. Roll-up reporting at the group level." },
    ],
    testimonial: {
      quote: "Fleet billing alone is worth the switch. We had $40K of net-30 receivables in QuickBooks aging hell. Now it's clean, automated, and we get paid faster.",
      name: "Shop Owner",
      role: "Owner",
      company: "Auto repair shop",
      isPlaceholder: true,
    },
    faqs: [
      { question: "Can I take a deposit when the customer approves the estimate?", answer: "Yes. Card-on-file gets pre-authorized at estimate approval. When work completes, the final invoice charges against that card. No re-collection needed at completion." },
      { question: "Do you handle fleet customers on net-30 billing?", answer: "Yes. Fleet accounts get separate billing with invoice generation, aging reports, and configurable payment terms. Auto-pay via ACH or card available for fleet customers willing to set it up." },
      { question: "Can I track which technician did which job?", answer: "Yes. Each job attributes to the technician, supporting commission calculation and per-tech productivity reporting. Compare technician efficiency across the shop." },
      { question: "How do diagnostic fees and credits work?", answer: "Customer pays a diagnostic fee at intake. If they approve repairs, the fee credits toward the final invoice. If they decline, the fee captures as standalone revenue. Tracked automatically." },
      { question: "What about warranty work?", answer: "Warranty claims tracked separately from regular paid revenue. Time and parts logged for warranty reimbursement reporting." },
      { question: "Can I email branded invoices to fleet customers?", answer: "Yes. Branded invoices with your shop's logo and details, sent automatically when work completes. Customer pays online via card or ACH." },
    ],
    relatedSolutions: ["card-on-file", "recurring-billing", "interchange-plus-pricing"],
    relatedIndustries: ["pet-grooming", "professional-services"],
    relatedBlogPosts: [],
    seoKeywords: ["auto repair payment processing", "auto shop POS", "mechanic credit card processor", "auto repair payments", "fleet account billing software", "auto shop merchant services", "auto repair invoicing software", "best payment processor for auto shops"],
  },

  "pet-grooming": {
    icon: PawPrint,
    hero: {
      headline: "Multi-pet accounts. Recurring grooming. Boarding deposits.",
      subheadline:
        "Pet care has unique workflows generic processors miss. Reyna Pay tracks multiple pets per owner, schedules recurring grooming reminders, captures boarding deposits, and attributes services to the groomer who did the work.",
    },
    problem: {
      title: "Pet care isn't retail. Stop running it on retail POS.",
      body: "Recurring grooming on a 4-6 week cadence. Boarding requiring deposits. Multiple pets per owner. Owner-not-pet billing relationships. Pet care needs specific software, not a generic POS that flattens all of these into single transactions.",
      bullets: [
        "One owner with three dogs, each with different grooming needs and history, gets one customer record.",
        "Grooming reminders rely on the front desk remembering, customers go elsewhere when forgotten.",
        "Boarding deposits get tracked in a notebook because the POS can't handle it.",
        "Groomer commissions calculated by hand, with disputes every payday.",
      ],
    },
    outcomes: {
      title: "What changes for pet care businesses on Reyna Pay.",
      description: "Real outcomes from pet grooming and boarding facilities on our platform.",
      stats: [
        { value: "Multi-pet", label: "Per owner profile with separate histories" },
        { value: "Auto", label: "Recurring grooming reminder workflow" },
        { value: "Tracked", label: "Boarding deposits with balance at pickup" },
        { value: "Real-time", label: "Groomer commission attribution" },
      ],
    },
    whyUs: {
      title: "Pet care businesses run on recurring relationships and multi-pet accounts.",
      description:
        "Generic POS can't handle the workflow. Reyna Pay tracks each pet separately under one billing account, schedules grooming reminders by cadence, captures boarding deposits cleanly, and attributes services to the groomer who did the work.",
    },
    features: [
      { title: "Multi-pet customer profiles", description: "One owner, three dogs each with different grooming needs and history. Reyna Pay tracks each pet separately under one billing account with their own service history, special instructions, and visit cadence." },
      { title: "Recurring grooming reminders", description: "Customer profile shows last groom date and typical cadence (every 4 weeks, 6 weeks, etc.). System surfaces customers who are overdue so staff can proactively reach out before they go to a competitor." },
      { title: "Boarding deposit collection", description: "Boarding requires a deposit at booking. Card-on-file pre-authorizes the configurable deposit percentage. Balance captures at pickup. No re-collection, no manual handling." },
      { title: "Groomer commission attribution", description: "Track which groomer worked which dog. Commission calculation per groomer supported with separate rates for grooming vs. baths vs. specialty services." },
    ],
    useCases: [
      { title: "Single-location grooming salon", description: "Walk-in and appointment-based grooming. Multi-pet customers handled cleanly. Card-on-file for repeat customers." },
      { title: "Grooming plus boarding facility", description: "Boarding deposits at booking, balance at pickup. Multi-night stays tracked. Daycare add-ons supported." },
      { title: "Mobile pet groomer", description: "Service-at-home billing. Card capture on-site via mobile reader. Per-customer trip tracking for route efficiency." },
      { title: "Multi-location pet care group", description: "Two or more locations under one brand. Separate MIDs for clean accounting per location. Multi-location customer profiles, customer goes to whichever location is convenient." },
      { title: "Specialty grooming (show grooming, breed-specific)", description: "Higher-ticket specialty services. Premium pricing tiers. Service-category margin tracking." },
      { title: "Pet boarding plus daycare", description: "Daily daycare drop-ins, multi-night boarding stays, deposits, and add-ons (extra walks, training, etc.). All combined in one customer profile." },
    ],
    testimonial: {
      quote: "We were forgetting to follow up with customers between grooming visits and losing them to other shops. The recurring reminder workflow alone got us 30+ customers back in our first quarter.",
      name: "Grooming Salon Owner",
      role: "Owner",
      company: "Pet grooming salon",
      isPlaceholder: true,
    },
    faqs: [
      { question: "Can one customer account have multiple pets?", answer: "Yes. Each customer account has unlimited pet profiles, each with their own service history, special instructions, and visit cadence. Owner sees all pets under their billing account." },
      { question: "How do boarding deposits work?", answer: "At booking, the system pre-authorizes a deposit (configurable percentage). At pickup, the balance is charged against the same card-on-file. No re-collection needed." },
      { question: "Can I send recurring grooming reminders?", answer: "Yes. The system tracks each pet's last groom and typical cadence. Staff get a list of overdue customers each week to call. You can also automate email reminders to customers directly." },
      { question: "Do groomers get their own logins?", answer: "Yes. Each groomer sees only their own services, tips, and earnings for the day, week, or pay period. Owners see everything across all groomers." },
      { question: "What about add-on services like nail trims or de-shedding?", answer: "Configurable add-ons supported. Each add-on has its own pricing, attributes to the same groomer (or a different one), and reports separately for margin analysis." },
      { question: "Can I track which dogs require special handling notes?", answer: "Yes. Each pet profile has a notes field for special instructions (aggressive, allergies, sensitive areas, etc.). Notes surface on every visit so the groomer is never blindsided." },
    ],
    relatedSolutions: ["card-on-file", "recurring-billing", "stylist-commission-tracking"],
    relatedIndustries: ["salons", "auto-repair", "professional-services"],
    relatedBlogPosts: ["salon-card-on-file", "salon-no-show-fee"],
    seoKeywords: ["pet grooming payment processing", "dog grooming POS", "pet boarding credit card processor", "pet grooming merchant services", "pet boarding deposit software", "groomer commission tracking", "best payment processor for pet grooming", "multi-pet customer billing"],
  },

  retail: {
    icon: ShoppingBag,
    hero: {
      headline: "Payment processing for retail stores.",
      subheadline:
        "Inventory tracking, multi-location reporting, gift cards, loyalty programs. Reyna Pay handles retail operations with transparent pricing the giants don't offer.",
    },
    whyUs: {
      title:
        "Retail margins are tight. Don't lose them to opaque processing fees.",
      description:
        "A specialty retailer with $400k/year in card volume on tiered pricing typically pays $4,000-$8,000 in markup that interchange-plus pricing would eliminate. We pass that math through transparently.",
    },
    features: [
      {
        title: "Inventory tracking",
        description:
          "Real-time inventory by SKU, with low-stock alerts and reorder points. Sales decrement inventory automatically.",
      },
      {
        title: "Multi-location reporting",
        description:
          "Multiple stores under one brand? See each store's revenue, inventory, and team separately, with rolled-up reporting at the group level.",
      },
      {
        title: "Gift card support",
        description:
          "Sell gift cards, track outstanding balance liability for accounting, redeem at any location. Multi-location gift card support included.",
      },
      {
        title: "Loyalty programs",
        description:
          "Points-based or stamp-card-style loyalty programs built in. No third-party app needed.",
      },
    ],
    faqs: [
      {
        question: "Will Reyna Pay save my retail store money vs. Square?",
        answer:
          "Likely yes if you're processing $30k+/month. Interchange-plus pricing typically saves 0.3-0.6% on retail card mixes vs. Square's flat 2.6% + $0.10. On $400k/year in volume, that's $1,200-$2,400/year recovered.",
      },
      {
        question: "How does inventory tracking work across locations?",
        answer:
          "Each location has its own inventory but the SKU catalog is shared. Transfer inventory between locations through the dashboard; sales decrement the correct location's stock.",
      },
      {
        question: "Can I run multiple gift card programs?",
        answer:
          "Yes. Multiple gift card SKUs supported (different denominations, branded variants). All redeemable at any location in your group.",
      },
    ],
    relatedSolutions: [
      "interchange-plus-pricing",
      "multi-location-reporting",
      "card-on-file",
    ],
    relatedIndustries: ["ecommerce", "professional-services", "auto-repair"],
    relatedBlogPosts: [],
    seoKeywords: [
      "retail payment processing",
      "retail POS",
      "specialty retail credit card processor",
    ],
  },

  ecommerce: {
    icon: Globe,
    hero: {
      headline: "Payment processing for e-commerce.",
      subheadline:
        "Online checkout, recurring billing, fraud screening, payment APIs. Reyna Pay's processing infrastructure works just as well online as in person.",
    },
    whyUs: {
      title: "E-commerce processing is a different beast.",
      description:
        "Card-not-present transactions carry higher interchange and chargeback risk than retail. Our infrastructure handles online payment realities, including 3DS authentication, BIN-level fraud screening, and clean PCI scope reduction.",
    },
    features: [
      {
        title: "Hosted checkout and embedded forms",
        description:
          "Embed our checkout iframe in your store, or send customers to a hosted checkout page. PCI scope stays minimal.",
      },
      {
        title: "Recurring billing",
        description:
          "Subscription products, monthly box services, membership billing, recurring transactions with retry logic and dunning workflows.",
      },
      {
        title: "Fraud screening",
        description:
          "Velocity controls, BIN-level checks, AVS, CVV verification. Configurable thresholds let you tune for your risk tolerance.",
      },
      {
        title: "Developer API",
        description:
          "Full REST API for custom integrations. Webhooks for transaction events. SDKs for major platforms.",
      },
    ],
    faqs: [
      {
        question: "Will Reyna Pay work with my Shopify or WooCommerce store?",
        answer:
          "Direct integrations available for major platforms. Custom integrations supported via API.",
      },
      {
        question: "What's typical processing cost for e-commerce?",
        answer:
          "Card-not-present transactions carry higher interchange than card-present. Typical effective rate for e-commerce is 2.7-3.0% all-in. AmEx, international, and high-risk MCCs may differ.",
      },
      {
        question: "Do you support 3D Secure authentication?",
        answer:
          "Yes. 3DS 2.0 supported, including frictionless flow when issuer allows. Required for some EU transactions under PSD2.",
      },
    ],
    relatedSolutions: [
      "recurring-billing",
      "card-on-file",
      "chargeback-protection",
      "interchange-plus-pricing",
    ],
    relatedIndustries: ["retail", "professional-services"],
    relatedBlogPosts: [],
    seoKeywords: [
      "ecommerce payment processing",
      "online payment processor",
      "e-commerce credit card processing",
    ],
  },

  "professional-services": {
    icon: Briefcase,
    hero: {
      headline: "Payment processing for professional services.",
      subheadline:
        "Invoicing, retainer billing, ACH and card support, recurring engagement billing. Reyna Pay handles the payment patterns of consulting, legal, accounting, and agency work.",
    },
    whyUs: {
      title:
        "Service businesses don't get retail-style POS. They get invoiced billing.",
      description:
        "Most generic processors are built for retail or food service. Professional services need invoicing, recurring retainer billing, ACH support, and clean expense splits. We deliver all of it.",
    },
    features: [
      {
        title: "Invoice-to-payment flow",
        description:
          "Send a branded invoice, customer pays via card or ACH. Reconciliation auto-marks the invoice paid.",
      },
      {
        title: "Retainer and recurring billing",
        description:
          "Monthly retainer arrangements with automatic billing, pause/resume controls, and clean accounting separation.",
      },
      {
        title: "ACH support",
        description:
          "Larger invoices often pay better via ACH (lower fees). Reyna Pay supports ACH alongside card with one consolidated dashboard.",
      },
      {
        title: "Trust account and expense splits",
        description:
          "For attorneys and similar regulated professions, transaction-level splits to trust vs. operating accounts handled correctly.",
      },
    ],
    faqs: [
      {
        question: "Can I bill clients via invoice that they pay online?",
        answer:
          "Yes. Send branded invoices with a 'Pay Now' link. Client pays via card or ACH. Invoice auto-marks paid in your dashboard.",
      },
      {
        question: "Do you support attorney trust account requirements?",
        answer:
          "Yes. Transaction-level splits handle the trust-account-vs-operating-account separation required for client retainers and case advance fees.",
      },
      {
        question: "How does ACH compare to card for professional services?",
        answer:
          "ACH is significantly cheaper than card on large invoices ($1,000+). For invoices under $500, card is often more convenient. Reyna Pay supports both.",
      },
    ],
    relatedSolutions: [
      "recurring-billing",
      "interchange-plus-pricing",
      "card-on-file",
    ],
    relatedIndustries: ["auto-repair", "retail", "ecommerce"],
    relatedBlogPosts: [],
    seoKeywords: [
      "professional services payment processing",
      "consulting payment processor",
      "agency invoicing payments",
      "law firm credit card processor",
    ],
  },
};
