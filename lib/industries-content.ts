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

export interface IndustryContent {
  hero: {
    headline: string;
    subheadline: string;
  };
  whyUs: {
    title: string;
    description: string;
  };
  features: Array<{
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedSolutions: string[]; // slugs from SOLUTIONS
  relatedIndustries: string[]; // slugs from INDUSTRIES
  relatedBlogPosts: string[]; // slugs from /content/blog
  icon: LucideIcon;
  seoKeywords: string[];
}

export const INDUSTRY_CONTENT: Record<string, IndustryContent> = {
  salons: {
    icon: Scissors,
    hero: {
      headline: "Payment processing built for salons.",
      subheadline:
        "Card-on-file, stylist commission attribution, no-show fee automation, and booking integration. Reyna Pay's salon platform — SalonTransact — is the processor we built because none of the existing options fit how salons actually run.",
    },
    whyUs: {
      title: "Built by salon operators, for salon operators.",
      description:
        "Robert Reyna, our founder, runs Salon Envy® — a multi-location salon franchise. Every feature in SalonTransact exists because we needed it ourselves. We built the processor we wished we'd had.",
    },
    features: [
      {
        title: "Stylist commission attribution",
        description:
          "Every transaction auto-attributes service revenue and tips to the stylist who performed the work. Payday closes in 15 minutes, not four hours of spreadsheet reconciliation.",
      },
      {
        title: "Card-on-file with no-show automation",
        description:
          "Customers tap once, the system remembers them. No-show? The system charges your published cancellation fee automatically. Real reduction in lost chair time.",
      },
      {
        title: "Booking integration",
        description:
          "Pre-authorize cards at booking time. When the customer doesn't show, you've already got the authorization in place. Direct integrations with major salon booking platforms.",
      },
      {
        title: "Multi-location reporting with separate MIDs",
        description:
          "Own three salons? See all three in one dashboard, with each location's MID isolated for clean accounting. Roll up to the group, drill into any single chair.",
      },
    ],
    faqs: [
      {
        question: "How much does salon payment processing cost with Reyna Pay?",
        answer:
          "Pricing starts at $0/month + 2.9% + $0.30 per transaction on the Starter plan, or $49/month + 2.4% + $0.20 per transaction on Pro. Higher-volume salons typically save 0.4-0.7% with our interchange-plus pricing on Enterprise. See our pricing page for full details.",
      },
      {
        question: "Will SalonTransact work with my existing booking software?",
        answer:
          "We integrate directly with the major salon booking platforms and offer an open API for custom setups. Specific integration availability varies — book a call and we'll confirm yours.",
      },
      {
        question: "What hardware do I need to switch?",
        answer:
          "Most existing card readers (Verifone, PAX, Ingenico) work with SalonTransact. If you don't have hardware yet, we can ship terminals at cost. No multi-year hardware leases like Clover.",
      },
      {
        question: "How long does approval take?",
        answer:
          "Most salons are approved within 24 hours. High-risk merchants or those with prior chargeback issues may require additional underwriting documentation.",
      },
      {
        question: "What about chargeback support?",
        answer:
          "Pro and Enterprise plans get assisted chargeback support — we auto-build evidence packs from your transaction data, customer profiles, and signed receipts. Salons running this end-to-end on SalonTransact see win rates above 75% on disputed fees.",
      },
    ],
    relatedSolutions: ["stylist-commission-tracking", "card-on-file", "no-show-fees", "booking-integration"],
    relatedIndustries: ["barbershops", "med-spas", "nail-salons", "lash-and-brow"],
    relatedBlogPosts: ["why-salons-overpay-credit-card-processing", "salon-stylist-commission-software", "salon-card-on-file"],
    seoKeywords: ["salon payment processing", "salon credit card processor", "salon POS", "salon payment system", "best payment processor for salons"],
  },

  barbershops: {
    icon: Scissors,
    hero: {
      headline: "Payment processing built for barbershops.",
      subheadline:
        "Walk-ins, regulars, tip culture, multi-chair reporting. Reyna Pay's SalonTransact platform handles the realities of barbershop operations — including the chair-rental hybrid models most processors can't.",
    },
    whyUs: {
      title: "Barbershops aren't salons. Don't use a salon-only processor.",
      description:
        "Most generic processors treat every personal-care business identically. Barbershops have unique workflows — high cash mix shifting to card, walk-in volume, mixed employee/booth-rental staffing — that need real attention.",
    },
    features: [
      {
        title: "Mixed staffing model support",
        description:
          "Some barbers are W-2, some rent the chair. Reyna Pay handles both — including transaction-level splits where chair renters keep 100% of service revenue and the shop charges them rent separately.",
      },
      {
        title: "Tip-out tracking",
        description:
          "Senior barbers tip out shampoo assistants and shoeshine staff in many shops. Reyna Pay tracks tip-out chains so payday math is accurate and disputes are rare.",
      },
      {
        title: "Walk-in optimization",
        description:
          "Most barbershop revenue is walk-ins, not appointments. The terminal flow is optimized for fast checkout — under 15 seconds for a regular paying with card-on-file.",
      },
      {
        title: "Multi-shop reporting",
        description:
          "Own multiple shops? See all of them in one view, with separate MIDs for clean accounting per entity. Compare revenue per chair across shops to spot underperformers.",
      },
    ],
    faqs: [
      {
        question: "Do you support booth rental barbershops?",
        answer:
          "Yes. Booth rental barbers can have their own profile with 100% service attribution, while you (the shop owner) collect rent separately through ACH. Each barber sees only their own data.",
      },
      {
        question: "Will Reyna Pay work for a barbershop with W-2 employees and chair renters mixed?",
        answer:
          "Yes — this hybrid model is one of the things we built for. Each barber is configured with their own commission/rental structure, and reports separate per-barber totals.",
      },
      {
        question: "What's the best payment processor for a barbershop in 2026?",
        answer:
          "It depends on your volume. Solo barbers under $50k/year often do fine with Square. Multi-chair shops, especially with chair renters, typically save money on Reyna Pay's interchange-plus pricing and get vertical-specific features generic processors don't offer.",
      },
      {
        question: "Can my barbers see their own daily totals?",
        answer:
          "Yes. Each barber gets their own login showing just their own services, tips, and earnings for the day, week, or pay period. Owners see everything.",
      },
    ],
    relatedSolutions: ["stylist-commission-tracking", "tip-pools", "card-on-file", "multi-location-reporting"],
    relatedIndustries: ["salons", "med-spas", "nail-salons"],
    relatedBlogPosts: ["why-salons-overpay-credit-card-processing", "salon-stylist-commission-software"],
    seoKeywords: ["barbershop payment processing", "barbershop POS", "barbershop credit card processor", "best payment processor for barbershops"],
  },

  "med-spas": {
    icon: Sparkles,
    hero: {
      headline: "Payment processing for med spas.",
      subheadline:
        "High-ticket services, recurring memberships, prepaid packages, regulated treatments. Med spas need a processor that handles ticket sizes most generic processors flag as suspicious — without the underwriting drama.",
    },
    whyUs: {
      title: "We understand med spa MCC underwriting.",
      description:
        "Med spas frequently get hit with high-risk classification by generic processors because of the ticket sizes and the regulated nature of some services. Our underwriting team knows the vertical and approves med spas that other processors decline or hold reserves on.",
    },
    features: [
      {
        title: "High-ticket transaction support",
        description:
          "Single transactions of $2,000-$10,000 are routine for med spas. We don't flag, hold, or pause high-ticket transactions when the customer profile is consistent.",
      },
      {
        title: "Membership and recurring billing",
        description:
          "Monthly membership programs with automatic billing, retry logic on failed payments, and clean dunning workflows. Card-on-file is mandatory for membership programs and we handle it natively.",
      },
      {
        title: "Prepaid package management",
        description:
          "Customers pre-pay for a 6-pack of laser sessions, redeem one at a time. Reyna Pay tracks the package balance, attributes redemption to the technician, and alerts you when the customer is due for a renewal.",
      },
      {
        title: "Provider-level commission tracking",
        description:
          "Just like stylist commission attribution, but for med spa techs and injectors. Track service revenue by provider for accurate commission and bonus calculation.",
      },
    ],
    faqs: [
      {
        question: "Does Reyna Pay handle high-risk med spa underwriting?",
        answer:
          "Most med spa categories qualify for our standard underwriting. Some advanced regulated services may require additional documentation but typically still approve. We're more flexible than most large processors on med spa MCCs.",
      },
      {
        question: "Can I run a membership program through Reyna Pay?",
        answer:
          "Yes. Recurring billing is built in, with automatic retry on failed payments, customer-facing pause/cancel flows, and clean accounting separation between membership revenue and service revenue.",
      },
      {
        question: "How does prepaid package tracking work?",
        answer:
          "Customers pre-pay for a package (e.g., 6 laser sessions). Each redemption decrements the balance. Reports show outstanding package liability, redemption velocity, and which customers are due for a renewal pitch.",
      },
      {
        question: "What's typical processing cost for a med spa?",
        answer:
          "Med spas with $50k+/month in volume typically qualify for interchange-plus pricing, which usually lands at 2.4-2.7% all-in depending on card mix. Memberships paid via stored card hit lower rates than card-not-present web transactions.",
      },
    ],
    relatedSolutions: ["card-on-file", "recurring-billing", "stylist-commission-tracking", "interchange-plus-pricing"],
    relatedIndustries: ["salons", "nail-salons", "tattoo-studios"],
    relatedBlogPosts: ["why-salons-overpay-credit-card-processing", "salon-card-on-file"],
    seoKeywords: ["med spa payment processing", "med spa credit card processor", "medical spa POS", "med spa membership billing"],
  },

  "tattoo-studios": {
    icon: Pen,
    hero: {
      headline: "Payment processing for tattoo studios.",
      subheadline:
        "Deposits at booking, artist commission attribution, mixed cash and card culture, no-show fee enforcement. Reyna Pay handles tattoo studio payment workflows the way they actually happen.",
    },
    whyUs: {
      title: "Tattoo shops have unique payment realities.",
      description:
        "Most processors treat tattoo studios like generic retailers. They miss the booking deposit flow, the artist-as-independent-contractor structure, the cash-to-card transition, and the chargeback risk profile. We don't.",
    },
    features: [
      {
        title: "Booking deposit collection",
        description:
          "Take a deposit when the appointment is booked, applied to the final bill at checkout. If the customer no-shows or cancels late, the deposit converts to a cancellation fee automatically.",
      },
      {
        title: "Artist commission attribution",
        description:
          "Each artist has their own profile. Service revenue and tips auto-attribute. Independent-contractor artists see their own earnings only; shop owners see everything.",
      },
      {
        title: "Cash-to-card friendly reporting",
        description:
          "Many tattoo shops still run a meaningful cash mix. Our reports separate cash, card, and ACH revenue clearly so accounting and tax filings are clean.",
      },
      {
        title: "Chargeback evidence packs",
        description:
          "Tattoo chargebacks are notoriously contested. We auto-compile signed waivers, deposit consent records, photos of finished work, and customer communication into the dispute submission.",
      },
    ],
    faqs: [
      {
        question: "How do you handle independent-contractor artists?",
        answer:
          "Each artist gets their own profile and login. They can see their own services, tips, and pay totals. The shop tracks the artist's revenue for 1099 reporting at year-end.",
      },
      {
        question: "Can I require a booking deposit and apply it to the final bill?",
        answer:
          "Yes. Deposits are stored against the appointment record. At checkout, the deposit is automatically credited toward the final price. No-shows convert the deposit to a forfeited fee per your published policy.",
      },
      {
        question: "What's the chargeback risk for tattoo studios?",
        answer:
          "Tattoo studios face higher-than-average chargeback rates because the service is permanent and customer regret happens. Our chargeback evidence packs are built specifically for this — signed waiver records, consent at booking, finished-work photos all assembled automatically.",
      },
      {
        question: "Will Reyna Pay approve a tattoo studio merchant application?",
        answer:
          "Yes — we approve tattoo studios as standard merchants. Some processors classify them as high-risk; we don't, as long as your chargeback rate is reasonable and your business is established.",
      },
    ],
    relatedSolutions: ["card-on-file", "no-show-fees", "stylist-commission-tracking", "chargeback-protection"],
    relatedIndustries: ["salons", "barbershops", "med-spas"],
    relatedBlogPosts: ["salon-card-on-file", "salon-no-show-fee"],
    seoKeywords: ["tattoo studio payment processing", "tattoo shop credit card processor", "tattoo POS"],
  },

  "nail-salons": {
    icon: Sparkles,
    hero: {
      headline: "Payment processing for nail salons.",
      subheadline:
        "Walk-in flow, technician commission tracking, retail product sales, package services. Reyna Pay's SalonTransact platform handles nail salon operations end-to-end.",
    },
    whyUs: {
      title: "Nail salon ops aren't generic retail.",
      description:
        "Walk-ins, technicians, retail product sales, gift cards, packages — nail salons run more like full-service salons than retail stores. Most generic processors miss the workflow.",
    },
    features: [
      {
        title: "Technician attribution",
        description:
          "Service revenue, tips, and product commission attribute to the tech who did the work. Pay periods close cleanly, no manual reconciliation needed.",
      },
      {
        title: "Retail product sales tracking",
        description:
          "Selling polish, files, lotions retail? Track inventory, attribute commission to the tech who sold the product, and report retail margin separately from service revenue.",
      },
      {
        title: "Package and gift card support",
        description:
          "Customers pre-pay for a 5-visit package or buy a gift card. Reyna Pay tracks the balance, redeems against future visits, and handles unused balance liability for accounting.",
      },
      {
        title: "Walk-in friendly checkout",
        description:
          "Most nail salons see walk-ins more than appointments. Optimized terminal flow, sub-15-second checkout for regulars on card-on-file.",
      },
    ],
    faqs: [
      {
        question: "Will Reyna Pay handle gift cards for my nail salon?",
        answer:
          "Yes. Gift cards are first-class — sell them, track outstanding balance, redeem against future services, and report unused balance liability for accounting purposes.",
      },
      {
        question: "Can I track which technician sold a polish bottle?",
        answer:
          "Yes. Retail product sales attribute to the tech who rang up the sale. Commission rules apply automatically per the rates you configure.",
      },
      {
        question: "What if a customer pre-pays for a 5-visit package?",
        answer:
          "Reyna Pay stores the package balance against the customer profile. Each visit decrements one. Reports show outstanding package liability and visit redemption rates.",
      },
    ],
    relatedSolutions: ["stylist-commission-tracking", "card-on-file", "tip-pools"],
    relatedIndustries: ["salons", "lash-and-brow", "barbershops"],
    relatedBlogPosts: ["salon-stylist-commission-software", "why-salons-overpay-credit-card-processing"],
    seoKeywords: ["nail salon payment processing", "nail salon POS", "nail salon credit card processor"],
  },

  "lash-and-brow": {
    icon: Sparkles,
    hero: {
      headline: "Payment processing for lash and brow studios.",
      subheadline:
        "Membership programs, fill appointments, tech commission, prepaid lash sets. Reyna Pay's SalonTransact handles the recurring-revenue patterns lash and brow studios live on.",
    },
    whyUs: {
      title: "Lash studios run on memberships and fills.",
      description:
        "Unlike one-off services, lash and brow businesses depend on recurring fill appointments and membership programs. Reyna Pay handles the recurring billing and retention math native to the platform.",
    },
    features: [
      {
        title: "Membership program management",
        description:
          "Monthly fill memberships with automatic billing, member-only pricing, and clean retention analytics. Card-on-file is required for memberships and works natively.",
      },
      {
        title: "Fill appointment tracking",
        description:
          "When was the customer's last full set? Their last fill? Reyna Pay tracks the cadence and alerts staff if a customer is overdue for a fill.",
      },
      {
        title: "Tech commission attribution",
        description: "Service revenue and tips attribute to the lash/brow tech. Junior vs. senior commission rates supported.",
      },
      {
        title: "Prepaid set bundles",
        description:
          "Customer prepays for a full set + 3 fills. The system tracks the bundle balance, redeems against each visit, and surfaces renewal prompts at the right time.",
      },
    ],
    faqs: [
      {
        question: "Can I run a monthly fill membership program?",
        answer:
          "Yes. Recurring billing is built in. Members get auto-charged on their renewal date, with retry logic on failed payments and member-only pricing applied to their visits.",
      },
      {
        question: "How do I track which customers are due for a fill?",
        answer:
          "Customer profiles show last visit date and visit type. Reports surface customers who haven't been in within their typical fill cadence so you can proactively reach out.",
      },
      {
        question: "What about retail products and lash extension supplies?",
        answer: "Inventory tracking and retail commission supported. Track which tech sold which product and commission accordingly.",
      },
    ],
    relatedSolutions: ["recurring-billing", "card-on-file", "stylist-commission-tracking"],
    relatedIndustries: ["salons", "nail-salons", "med-spas"],
    relatedBlogPosts: ["salon-card-on-file", "why-salons-overpay-credit-card-processing"],
    seoKeywords: ["lash studio payment processing", "lash extension POS", "brow studio credit card processor"],
  },

  restaurants: {
    icon: Coffee,
    hero: {
      headline: "Payment processing for restaurants.",
      subheadline:
        "Table management, tip pooling, kitchen ticketing, integrated payments. Reyna Pay's restaurant platform — KasseApp — is built around how restaurants actually operate.",
    },
    whyUs: {
      title: "Restaurants need real restaurant infrastructure.",
      description:
        "Generic processors don't understand table holds, course pacing, server tip pools, or 86'd menu items. KasseApp is restaurant-first — and Reyna Pay's processing rails make it transparent and affordable.",
    },
    features: [
      {
        title: "Table management",
        description:
          "Visual floor plan, table holds, course pacing, split checks, transfer tabs. Built around how front-of-house actually flows.",
      },
      {
        title: "Tip pool management",
        description:
          "Configure your tip pool — by hours worked, by section, custom rules. Tips auto-distribute at end of shift. No more hand-calculation at midnight.",
      },
      {
        title: "Kitchen ticket integration",
        description: "Orders flow from POS to kitchen printers or KDS automatically. Modifiers, course timing, and 86 alerts handled.",
      },
      {
        title: "Integrated payments",
        description: "Same provider for POS and processing means clean reconciliation at end of day. No third-party payment integration drift.",
      },
    ],
    faqs: [
      {
        question: "Will KasseApp work for a full-service restaurant?",
        answer: "Yes — full-service is the primary use case. Tables, courses, modifiers, server attribution, tip pools — all native.",
      },
      {
        question: "What about quick-service and counter ordering?",
        answer: "Quick-service mode supported with simplified counter flows, fast cashier turnover, and no table assignment required.",
      },
      {
        question: "Does KasseApp integrate with delivery platforms?",
        answer:
          "Yes — direct integrations with major delivery platforms route orders into KasseApp, attribute revenue correctly, and handle the commission accounting on delivery transactions.",
      },
      {
        question: "What's the typical processing cost for a restaurant?",
        answer:
          "Restaurants with $30k+/month in volume typically save 0.3-0.6% on interchange-plus pricing vs. flat-rate. Tip processing fees vary slightly because tips have unique interchange treatment.",
      },
    ],
    relatedSolutions: ["tip-pools", "multi-location-reporting", "interchange-plus-pricing", "pos-integration"],
    relatedIndustries: ["bars", "coffee-shops", "food-trucks"],
    relatedBlogPosts: ["franchise-salon-payment-processing"],
    seoKeywords: ["restaurant payment processing", "restaurant POS", "restaurant credit card processor", "restaurant payments"],
  },

  bars: {
    icon: GlassWater,
    hero: {
      headline: "Payment processing for bars.",
      subheadline:
        "Open tabs, tip pooling, late-night reconciliation, age-verified inventory. Reyna Pay's KasseApp handles bar-specific workflows that generic restaurant POS systems flatten.",
    },
    whyUs: {
      title: "Bars aren't restaurants. The POS shouldn't pretend they are.",
      description:
        "Pre-authorized open tabs, drink-by-drink ordering, batch close-out at end of night, mandatory ID verification logs — bars have specific needs. KasseApp handles them natively.",
    },
    features: [
      {
        title: "Open tab management",
        description:
          "Pre-authorize a card, run drinks against the tab all night, close out cleanly at last call. Auto-close on closing time prevents stuck open tabs.",
      },
      {
        title: "Tip pool by shift",
        description: "Bartender tip pools, server tip outs to bar-backs and runners. Configure once, distributes automatically at shift close.",
      },
      {
        title: "Age verification logs",
        description:
          "Optional ID-check capture and log for compliance. Age-restricted items can require ID re-verification after a configurable interval.",
      },
      {
        title: "Late-night reconciliation",
        description: "End-of-night reports for cash handling, card batches, tip distribution. Owner sees the whole night's math in one view.",
      },
    ],
    faqs: [
      {
        question: "How do open tabs work?",
        answer:
          "Bartender pre-authorizes the customer's card (a small hold). Drinks ring to the open tab through the night. At last call, the tab closes and the final amount is captured against the pre-auth.",
      },
      {
        question: "Can I split a tab between multiple cards?",
        answer: "Yes. Tabs split by amount, by item, by percentage, or even by individual drink. The bartender chooses how to allocate at close.",
      },
      {
        question: "What about happy hour pricing?",
        answer: "Time-based menu pricing supported. Happy hour rules trigger automatically during the configured window.",
      },
    ],
    relatedSolutions: ["tip-pools", "card-on-file", "interchange-plus-pricing"],
    relatedIndustries: ["restaurants", "coffee-shops", "food-trucks"],
    relatedBlogPosts: [],
    seoKeywords: ["bar payment processing", "bar POS", "nightclub credit card processor", "bar tab POS"],
  },

  "coffee-shops": {
    icon: Coffee,
    hero: {
      headline: "Payment processing for coffee shops.",
      subheadline:
        "Quick-service flow, mobile ordering, loyalty programs, fast checkout. Reyna Pay's KasseApp handles coffee shop volume the way it actually flows — fast.",
    },
    whyUs: {
      title: "Coffee is high-volume, low-ticket. Speed matters.",
      description:
        "A coffee shop processor needs to handle 200+ transactions during a 90-minute morning rush without choking. Card-on-file, mobile ordering, and loyalty programs are table stakes. KasseApp handles all three.",
    },
    features: [
      {
        title: "Sub-10-second checkout",
        description:
          "Optimized terminal flow for the morning rush. Card-on-file regulars check out in seconds. New customers in under 15 seconds including receipt.",
      },
      {
        title: "Loyalty programs",
        description: "Buy 9 coffees, get the 10th free. Or points-based programs. Built-in, no third-party app needed.",
      },
      {
        title: "Mobile ordering integration",
        description:
          "Customers order ahead through your branded mobile app. Order routes to your espresso bar. Customer gets a notification when ready.",
      },
      {
        title: "Multi-location reporting",
        description:
          "Three coffee shops? See all three in one dashboard, with separate MIDs per location. Compare avg ticket and morning rush volume across stores.",
      },
    ],
    faqs: [
      {
        question: "How fast is checkout during a morning rush?",
        answer:
          "Card-on-file regulars check out in 8-10 seconds. New customers in 12-15 seconds including receipt. KasseApp's flow is optimized specifically for high-throughput coffee.",
      },
      {
        question: "Do you support tip prompts on the customer terminal?",
        answer: "Yes. Configure tip suggestions ($1, $2, custom), or percent-based prompts. Disable for very small transactions if you prefer.",
      },
      {
        question: "Can I run a loyalty program without a third-party app?",
        answer: "Yes. Built-in loyalty supports stamp cards, points, and member-only pricing. No third-party SaaS required.",
      },
    ],
    relatedSolutions: ["card-on-file", "multi-location-reporting", "pos-integration"],
    relatedIndustries: ["restaurants", "bars", "food-trucks"],
    relatedBlogPosts: [],
    seoKeywords: ["coffee shop payment processing", "coffee shop POS", "cafe credit card processor"],
  },

  "food-trucks": {
    icon: Truck,
    hero: {
      headline: "Payment processing for food trucks.",
      subheadline:
        "Mobile-first, offline-capable, fast checkout. Reyna Pay's KasseApp handles food truck operations including the unique connectivity and event-based realities of mobile food.",
    },
    whyUs: {
      title: "Food trucks have unique operational realities.",
      description:
        "Spotty connectivity at events. Multiple staff at once during rushes. Multi-truck operations. Tax considerations for cross-jurisdiction operations. KasseApp handles them.",
    },
    features: [
      {
        title: "Offline capability",
        description:
          "Connection drops? Transactions queue locally and sync when connectivity returns. No lost sales because of bad event WiFi.",
      },
      {
        title: "Multi-truck reporting",
        description: "Run two or three trucks? See each truck's revenue separately and rolled up. Compare event performance across trucks.",
      },
      {
        title: "Sub-10-second checkout",
        description: "Lines move fast. Optimized for one-handed operation while service workers prep food.",
      },
      {
        title: "Cross-jurisdiction tax handling",
        description:
          "Operating across city or state lines? Configure tax rates per location. KasseApp applies the correct rate based on where the truck is parked that day.",
      },
    ],
    faqs: [
      {
        question: "What happens when connectivity drops at an event?",
        answer:
          "Transactions process locally and queue for sync. When connectivity returns, queued transactions submit. Customers see no difference; you don't lose a sale.",
      },
      {
        question: "How do I switch between event tax rates?",
        answer:
          "Configure each event location with its tax rate. When you arrive, switch the truck to that location and the right tax applies automatically.",
      },
      {
        question: "Will the platform work on a tablet over cellular?",
        answer: "Yes. KasseApp is optimized for tablets on cellular. The offline capability handles intermittent connectivity gracefully.",
      },
    ],
    relatedSolutions: ["card-on-file", "interchange-plus-pricing", "pos-integration"],
    relatedIndustries: ["restaurants", "bars", "coffee-shops"],
    relatedBlogPosts: [],
    seoKeywords: ["food truck payment processing", "food truck POS", "mobile food credit card processor"],
  },

  "gyms-and-fitness": {
    icon: Dumbbell,
    hero: {
      headline: "Payment processing for gyms and fitness studios.",
      subheadline:
        "Membership billing, class packages, retention dunning, multi-location reporting. Reyna Pay's payment infrastructure handles fitness business economics natively.",
    },
    whyUs: {
      title: "Fitness is recurring revenue. The processor has to nail dunning.",
      description:
        "When a member's card declines, the difference between losing them and recovering them is good dunning logic. Most processors don't think about this. We do.",
    },
    features: [
      {
        title: "Membership billing with retry logic",
        description:
          "Failed payments retry on a smart schedule. Member receives a retention email. Configurable grace period before access is suspended. Recovery rate matters.",
      },
      {
        title: "Class package management",
        description:
          "Customer buys a 10-class pack. Each visit decrements one. Reports show outstanding package liability and renewal pacing.",
      },
      {
        title: "Drop-in and day-pass support",
        description:
          "Non-members paying for a single class? Day passes for visiting customers? Both supported alongside the membership program.",
      },
      {
        title: "Multi-location member access",
        description:
          "Member at one location, visiting another in your group? They check in seamlessly. Reports attribute the visit to the location they used.",
      },
    ],
    faqs: [
      {
        question: "What happens when a member's card declines?",
        answer:
          "Reyna Pay retries on a smart schedule (immediately, then 3 days later, then 7 days). Member receives a polite retention email. After a configurable grace period, access is suspended until payment is resolved.",
      },
      {
        question: "Can I sell class packages alongside memberships?",
        answer: "Yes. Both work side by side. Customers can be members, package buyers, or drop-ins — all in the same system.",
      },
      {
        question: "How does multi-location member access work?",
        answer:
          "A member of your downtown location can check in at your suburban location. The visit attributes to the actual location used; revenue stays with the home location.",
      },
    ],
    relatedSolutions: ["recurring-billing", "card-on-file", "multi-location-reporting"],
    relatedIndustries: ["yoga-studios", "professional-services"],
    relatedBlogPosts: [],
    seoKeywords: ["gym payment processing", "fitness studio POS", "gym membership billing", "fitness credit card processor"],
  },

  "yoga-studios": {
    icon: Activity,
    hero: {
      headline: "Payment processing for yoga and pilates studios.",
      subheadline:
        "Class packages, memberships, drop-ins, teacher commissions. Reyna Pay handles boutique fitness payments at margins that make small studios viable.",
    },
    whyUs: {
      title: "Boutique fitness is high-margin if processing isn't bleeding you.",
      description:
        "Studios with thin margins can't afford 3% flat-rate processing. Our interchange-plus pricing typically saves 0.4-0.6%, meaningful money over a year of class packs and memberships.",
    },
    features: [
      {
        title: "Class package and membership flexibility",
        description:
          "Mix-and-match: monthly unlimited, 10-class packs, drop-ins, intro-week packages. All in one system, all reportable cleanly.",
      },
      {
        title: "Teacher commission attribution",
        description: "Track which teacher led which class, attribute revenue accordingly, calculate teacher pay automatically.",
      },
      {
        title: "Class booking integration",
        description:
          "Customers book through your scheduling tool, pay via Reyna Pay, and the class is held. No-show fees enforceable per your policy.",
      },
      {
        title: "Studio-specific reporting",
        description:
          "Class fill rate, package burn-down, member retention — reports built for the metrics studios actually care about.",
      },
    ],
    faqs: [
      {
        question: "What's the typical processing cost for a yoga studio?",
        answer:
          "Studios doing $20k+/month typically qualify for interchange-plus pricing, landing at 2.4-2.7% all-in vs. 2.9% flat-rate. Over a year, that's $1,200-$1,500 in recovered margin.",
      },
      {
        question: "Can I track which teacher's classes have the highest fill rate?",
        answer:
          "Yes. Teacher reports show class count, total revenue, attendance per class, and revenue per teacher. Use it for pay decisions and class scheduling.",
      },
      {
        question: "How does a 10-class pack work technically?",
        answer: "Customer pays once, gets a balance of 10 classes. Each visit decrements one. When zero remaining, prompt for renewal.",
      },
    ],
    relatedSolutions: ["recurring-billing", "card-on-file", "stylist-commission-tracking"],
    relatedIndustries: ["gyms-and-fitness", "professional-services"],
    relatedBlogPosts: [],
    seoKeywords: ["yoga studio payment processing", "pilates studio POS", "boutique fitness credit card processor"],
  },

  "auto-repair": {
    icon: Wrench,
    hero: {
      headline: "Payment processing for auto repair shops.",
      subheadline:
        "Estimate-to-invoice flow, parts vs. labor breakdown, deposit collection, fleet account billing. Reyna Pay handles auto shop economics most generic processors get wrong.",
    },
    whyUs: {
      title: "Auto shop tickets are large and complex. The processor needs to support that.",
      description:
        "Average ticket of $400-$1,200, parts and labor on every invoice, occasional 5-figure tickets, fleet customers paying by net-30 — auto shops have specific needs that we handle natively.",
    },
    features: [
      {
        title: "Estimate-to-invoice flow",
        description:
          "Customer approves the estimate, deposit captured against card-on-file, work begins. When work completes, invoice converts and final balance charges. No re-typing card numbers.",
      },
      {
        title: "Parts vs. labor breakdown",
        description: "Reports split parts and labor revenue separately. Labor commission attribution per technician supported.",
      },
      {
        title: "Fleet account net-30 billing",
        description:
          "Fleet customers (trucking companies, rental fleets, dealer service contracts) pay net-30. Invoice tracking, aging reports, and ACH or card autopay supported.",
      },
      {
        title: "Diagnostic deposit handling",
        description:
          "Some shops charge a diagnostic fee that's credited toward repair if approved. Reyna Pay tracks it and applies the credit cleanly.",
      },
    ],
    faqs: [
      {
        question: "Can I take a deposit when the customer approves the estimate?",
        answer:
          "Yes. Card-on-file gets pre-authorized at estimate approval. When work completes, the final invoice charges against that card. No re-collection needed.",
      },
      {
        question: "Do you handle fleet customers on net-30 billing?",
        answer:
          "Yes. Fleet accounts get separate billing with invoice generation, aging reports, and configurable payment terms. Auto-pay via ACH or card available.",
      },
      {
        question: "Can I track which technician did which job?",
        answer:
          "Yes. Each job attributes to the technician, supporting commission calculation and per-tech productivity reporting.",
      },
    ],
    relatedSolutions: ["card-on-file", "recurring-billing", "interchange-plus-pricing"],
    relatedIndustries: ["pet-grooming", "professional-services"],
    relatedBlogPosts: [],
    seoKeywords: ["auto repair payment processing", "auto shop POS", "mechanic credit card processor", "auto repair payments"],
  },

  "pet-grooming": {
    icon: PawPrint,
    hero: {
      headline: "Payment processing for pet grooming and boarding.",
      subheadline:
        "Recurring grooming appointments, boarding deposits, multi-pet accounts, owner-not-pet records. Reyna Pay handles pet care business workflows natively.",
    },
    whyUs: {
      title: "Pet care has unique workflows generic processors miss.",
      description:
        "Recurring grooming on a 4-6 week cadence, boarding requiring deposits, multiple pets per owner — pet care needs specific software, not generic retail POS.",
    },
    features: [
      {
        title: "Multi-pet customer profiles",
        description:
          "One owner, three dogs each with different grooming needs and history. Reyna Pay tracks each pet separately under one billing account.",
      },
      {
        title: "Recurring grooming reminders",
        description:
          "Customer profile shows last groom date and typical cadence. System alerts staff to reach out when a customer is overdue.",
      },
      {
        title: "Boarding deposit collection",
        description: "Boarding requires a deposit at booking. Card-on-file, configurable deposit percentage, balance collected at pickup.",
      },
      {
        title: "Groomer commission attribution",
        description:
          "Track which groomer worked which dog. Commission calculation per groomer with separate rates for grooming vs. baths supported.",
      },
    ],
    faqs: [
      {
        question: "Can one customer account have multiple pets?",
        answer:
          "Yes. Each customer account has unlimited pet profiles, each with their own service history, special instructions, and visit cadence.",
      },
      {
        question: "How do boarding deposits work?",
        answer:
          "At booking, the system pre-authorizes a deposit (configurable amount). At pickup, the balance is charged against the same card-on-file. No re-collection needed.",
      },
      {
        question: "Can I send recurring grooming reminders?",
        answer:
          "Yes. The system tracks each pet's last groom and typical cadence (every 4 weeks, 6 weeks, etc.). Staff get a list of overdue customers each week to call.",
      },
    ],
    relatedSolutions: ["card-on-file", "recurring-billing", "stylist-commission-tracking"],
    relatedIndustries: ["salons", "auto-repair", "professional-services"],
    relatedBlogPosts: ["salon-card-on-file", "salon-no-show-fee"],
    seoKeywords: ["pet grooming payment processing", "dog grooming POS", "pet boarding credit card processor"],
  },

  retail: {
    icon: ShoppingBag,
    hero: {
      headline: "Payment processing for retail stores.",
      subheadline:
        "Inventory tracking, multi-location reporting, gift cards, loyalty programs. Reyna Pay handles retail operations with transparent pricing the giants don't offer.",
    },
    whyUs: {
      title: "Retail margins are tight. Don't lose them to opaque processing fees.",
      description:
        "A specialty retailer with $400k/year in card volume on tiered pricing typically pays $4,000-$8,000 in markup that interchange-plus pricing would eliminate. We pass that math through transparently.",
    },
    features: [
      {
        title: "Inventory tracking",
        description: "Real-time inventory by SKU, with low-stock alerts and reorder points. Sales decrement inventory automatically.",
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
        description: "Points-based or stamp-card-style loyalty programs built in. No third-party app needed.",
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
    relatedSolutions: ["interchange-plus-pricing", "multi-location-reporting", "card-on-file"],
    relatedIndustries: ["ecommerce", "professional-services", "auto-repair"],
    relatedBlogPosts: [],
    seoKeywords: ["retail payment processing", "retail POS", "specialty retail credit card processor"],
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
        "Card-not-present transactions carry higher interchange and chargeback risk than retail. Our infrastructure handles online payment realities — including 3DS authentication, BIN-level fraud screening, and clean PCI scope reduction.",
    },
    features: [
      {
        title: "Hosted checkout and embedded forms",
        description: "Embed our checkout iframe in your store, or send customers to a hosted checkout page. PCI scope stays minimal.",
      },
      {
        title: "Recurring billing",
        description:
          "Subscription products, monthly box services, membership billing — recurring transactions with retry logic and dunning workflows.",
      },
      {
        title: "Fraud screening",
        description: "Velocity controls, BIN-level checks, AVS, CVV verification. Configurable thresholds let you tune for your risk tolerance.",
      },
      {
        title: "Developer API",
        description: "Full REST API for custom integrations. Webhooks for transaction events. SDKs for major platforms.",
      },
    ],
    faqs: [
      {
        question: "Will Reyna Pay work with my Shopify or WooCommerce store?",
        answer: "Direct integrations available for major platforms. Custom integrations supported via API.",
      },
      {
        question: "What's typical processing cost for e-commerce?",
        answer:
          "Card-not-present transactions carry higher interchange than card-present. Typical effective rate for e-commerce is 2.7-3.0% all-in. AmEx, international, and high-risk MCCs may differ.",
      },
      {
        question: "Do you support 3D Secure authentication?",
        answer: "Yes. 3DS 2.0 supported, including frictionless flow when issuer allows. Required for some EU transactions under PSD2.",
      },
    ],
    relatedSolutions: ["recurring-billing", "card-on-file", "chargeback-protection", "interchange-plus-pricing"],
    relatedIndustries: ["retail", "professional-services"],
    relatedBlogPosts: [],
    seoKeywords: ["ecommerce payment processing", "online payment processor", "e-commerce credit card processing"],
  },

  "professional-services": {
    icon: Briefcase,
    hero: {
      headline: "Payment processing for professional services.",
      subheadline:
        "Invoicing, retainer billing, ACH and card support, recurring engagement billing. Reyna Pay handles the payment patterns of consulting, legal, accounting, and agency work.",
    },
    whyUs: {
      title: "Service businesses don't get retail-style POS. They get invoiced billing.",
      description:
        "Most generic processors are built for retail or food service. Professional services need invoicing, recurring retainer billing, ACH support, and clean expense splits. We deliver all of it.",
    },
    features: [
      {
        title: "Invoice-to-payment flow",
        description: "Send a branded invoice, customer pays via card or ACH. Reconciliation auto-marks the invoice paid.",
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
    relatedSolutions: ["recurring-billing", "interchange-plus-pricing", "card-on-file"],
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
