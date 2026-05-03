import type { LucideIcon } from "lucide-react";
import {
  CreditCard,
  Calendar,
  Users,
  MapPin,
  Repeat,
  Shield,
  Zap,
  BarChart3,
  Layers,
  Receipt,
} from "lucide-react";

export interface SolutionStat {
  value: string;
  label: string;
}

export interface SolutionFeature {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface SolutionContent {
  hero: {
    headline: string;
    subheadline: string;
    imageUrl?: string;
    imageAlt?: string;
  };
  problem?: {
    title: string;
    body: string;
    bullets?: string[];
  };
  outcomes?: {
    title: string;
    description: string;
    stats: SolutionStat[];
  };
  whyUs: {
    title: string;
    description: string;
  };
  features: SolutionFeature[];
  useCases?: Array<{ title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedSolutions: string[];
  relatedIndustries: string[];
  relatedBlogPosts: string[];
  icon: LucideIcon;
  seoKeywords: string[];
}

export const SOLUTION_CONTENT: Record<string, SolutionContent> = {
  "card-on-file": {
    icon: CreditCard,
    hero: {
      headline: "Card-on-file payments that pay for themselves.",
      subheadline:
        "Store cards securely the first visit. Charge them automatically for the next one. No-show fees become enforceable. Repeat customers check out in seconds. Reyna Pay handles the PCI scope so you don't have to.",
      imageUrl:
        "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imageAlt: "Customer paying with card",
    },
    problem: {
      title: "If your customers retype their card every visit, you're losing money.",
      body: "Every additional friction point at checkout costs you a no-show, a tip, or a returning customer. Card-on-file removes the friction permanently and gives you the operational leverage to charge no-show fees, run memberships, and process repeat customers in seconds.",
      bullets: [
        "Customer types their card number every visit, that's 30+ seconds of unpaid time per checkout.",
        "No-show fee policies are unenforceable because you can't actually charge anyone.",
        "Membership programs require manual card chasing every renewal cycle.",
        "Tips are smaller because the customer is rushed at checkout, not relaxed.",
      ],
    },
    outcomes: {
      title: "What card-on-file delivers.",
      description: "Real numbers from businesses running card-on-file on Reyna Pay.",
      stats: [
        { value: "8 sec", label: "Average checkout for card-on-file regulars" },
        { value: "100%", label: "No-show fees enforceable per published policy" },
        { value: "PCI", label: "Compliance scope handled by Reyna Pay" },
        { value: "+18%", label: "Typical tip increase, less rushed checkout" },
      ],
    },
    whyUs: {
      title: "Card-on-file done right is more than just storing a card.",
      description:
        "It's the foundation for every recurring-revenue feature you'd ever want, memberships, no-show fees, deposit pre-authorization, automatic invoice payment. We built it to be easy to set up, secure by default, and compliant out of the box.",
    },
    features: [
      {
        title: "PCI-compliant tokenization",
        description:
          "Card numbers never touch your systems. Tokens are stored in our PCI Level 1 vault. You charge the token, we handle the actual card data. Your PCI scope drops to near zero.",
        imageUrl:
          "https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Secure payment terminal",
      },
      {
        title: "One-tap repeat checkout",
        description:
          "Customer's card is on file. Next visit: open their profile, confirm amount, charge. Eight seconds. They walk out before the receipt prints.",
        imageUrl:
          "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Customer checkout at counter",
      },
      {
        title: "Automated no-show fees",
        description:
          "Customer no-shows? System charges the published cancellation fee against the card on file. No phone call. No awkward email. The fee captures and you move on.",
        imageUrl:
          "https://images.pexels.com/photos/3768910/pexels-photo-3768910.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Empty appointment chair",
      },
      {
        title: "Membership and recurring billing foundation",
        description:
          "Card-on-file is required infrastructure for memberships. Built in, retry logic on failed payments, dunning workflows, member-facing pause/cancel controls.",
        imageUrl:
          "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Membership card on phone",
      },
    ],
    useCases: [
      {
        title: "Salon no-show enforcement",
        description:
          "Pre-auth at booking, charge fee on no-show, deposit credits to next visit.",
      },
      {
        title: "Medspa membership program",
        description: "Monthly memberships billed against stored cards, smart retry on declines.",
      },
      {
        title: "Restaurant tab pre-authorization",
        description:
          "Bartender pre-auths card, drinks ring against tab all night, capture at close.",
      },
      {
        title: "Pet boarding deposits",
        description:
          "Boarding deposit captured at booking, balance auto-collected at pickup.",
      },
      {
        title: "Auto repair estimate to invoice",
        description:
          "Customer approves estimate, deposit captures, balance charges when work completes.",
      },
      {
        title: "Gym membership retention",
        description:
          "Failed payment retries on smart schedule, member retention emails before access pause.",
      },
    ],
    faqs: [
      {
        question: "Is card-on-file PCI compliant?",
        answer:
          "Yes. We tokenize the card number and store it in our PCI Level 1 vault. Your business never touches the card data, which means your PCI scope drops dramatically and your audit costs drop with it.",
      },
      {
        question: "What happens if a customer disputes a card-on-file charge?",
        answer:
          "Standard chargeback process. Our evidence packs auto-compile the consent records, prior charge history, and any signed agreements (e.g., cancellation policies) for your dispute submission.",
      },
      {
        question: "Can customers remove their card themselves?",
        answer:
          "Yes. Customer-facing card management is supported, customers can view stored cards, update them, or remove them through your customer portal.",
      },
      {
        question: "How is card-on-file different from saving the card on a POS?",
        answer:
          "Saving a card on a POS often means actually storing the card data on the POS, which puts you in PCI scope. Reyna Pay's card-on-file uses tokens, the actual card data lives in our vault, your POS just holds a token.",
      },
    ],
    relatedSolutions: ["no-show-fees", "recurring-billing", "chargeback-protection"],
    relatedIndustries: ["salons", "barbershops", "med-spas", "lash-and-brow"],
    relatedBlogPosts: ["salon-card-on-file", "salon-no-show-fee"],
    seoKeywords: [
      "card on file payments",
      "card on file POS",
      "card on file PCI compliance",
      "stored card payments",
      "card on file no show fees",
    ],
  },

  "no-show-fees": {
    icon: Calendar,
    hero: {
      headline: "Stop eating no-show losses. Charge them automatically.",
      subheadline:
        "Pre-authorize cards at booking. When customers no-show, the system charges your published cancellation fee, no phone call, no awkwardness, no chasing. Real recovered revenue every month.",
      imageUrl:
        "https://images.pexels.com/photos/3768910/pexels-photo-3768910.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imageAlt: "Empty appointment chair",
    },
    problem: {
      title: "No-shows are the silent margin killer.",
      body: "Every no-show is unrecoverable revenue, the chair sat empty, the stylist's commission window was wasted, the inventory you held got moved to nothing. Most businesses publish a no-show fee policy but never actually charge it because the workflow is too painful.",
      bullets: [
        "Customer no-shows, you call to chase the fee, conversation gets uncomfortable, you let it go.",
        "3 to 7 hours of empty chair time per stylist per week, that's $300 to $700 weekly.",
        "Your published cancellation policy is meaningless if you can't enforce it.",
        "Manual cancellation fee processing takes longer than the fee is worth.",
      ],
    },
    outcomes: {
      title: "What automated no-show enforcement gets you.",
      description: "Numbers from businesses running automated no-show fees on Reyna Pay.",
      stats: [
        { value: "$11K+", label: "Average annual recovered no-show revenue per location" },
        { value: "82%", label: "Reduction in actual no-shows (deterrent effect)" },
        { value: "0", label: "Phone calls required to charge a fee" },
        { value: "100%", label: "Policy enforceability per published terms" },
      ],
    },
    whyUs: {
      title: "Automated no-show fees fix two problems at once.",
      description:
        "First, you actually charge the no-shows that happen. Second, the existence of automatic enforcement deters customers from no-showing in the first place. The deterrent value usually exceeds the recovered fees.",
    },
    features: [
      {
        title: "Pre-authorization at booking",
        description:
          "Customer books an appointment, system pre-authorizes a hold against their card per your policy. Hold releases automatically when they show up. Captures as fee if they don't.",
        imageUrl:
          "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Booking calendar on tablet",
      },
      {
        title: "Configurable fee policy",
        description:
          "Set fee amount as a flat dollar value or percentage of service. Set the cancellation window (24h, 48h, custom). Different policies per service category if you need them.",
        imageUrl:
          "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Policy configuration interface",
      },
      {
        title: "Customer-facing reminders",
        description:
          "Automated reminders sent 24h before and the morning of the appointment. Includes the cancellation policy. Customer either confirms, reschedules, or cancels with notice, no surprise fee, real reduction in actual no-shows.",
        imageUrl:
          "https://images.pexels.com/photos/4350107/pexels-photo-4350107.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Customer receiving appointment reminder",
      },
      {
        title: "Auto-capture and notification",
        description:
          "Customer no-shows? At the appointment time, the pre-auth converts to a captured charge per your policy. Customer receives notification with the charge details and the policy reference.",
        imageUrl:
          "https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Notification confirming captured fee",
      },
    ],
    useCases: [
      {
        title: "Hair salons",
        description:
          "Pre-auth at booking, fee captures on no-show, deposit credits toward next visit when customer reschedules.",
      },
      {
        title: "Med spas",
        description:
          "Higher-ticket no-shows (laser packages, injectables) need real enforcement. Automatic capture is mandatory at this ticket size.",
      },
      {
        title: "Tattoo studios",
        description:
          "Booking deposits work as both no-show insurance and trust signal. Deposit applies to final invoice or forfeits on no-show.",
      },
      {
        title: "Restaurants (large parties)",
        description: "Reservation deposits for parties of 8+ on weekends. Captures as fee if party no-shows.",
      },
      {
        title: "Auto repair",
        description:
          "Diagnostic deposits hold a slot. Forfeits if customer doesn't show, applies to repair if they approve work.",
      },
    ],
    faqs: [
      {
        question: "How does pre-authorization work technically?",
        answer:
          "When the customer books, we place a hold on their card for the cancellation fee amount. The hold doesn't capture (no money moves) until either the appointment time passes (capture as fee) or the appointment is honored (release the hold).",
      },
      {
        question: "What if my customer disputes the no-show fee?",
        answer:
          "Our chargeback evidence pack auto-compiles the booking record, the cancellation policy they agreed to at booking, the appointment reminder messages, and the no-show timestamp, sent automatically with the dispute response.",
      },
      {
        question: "Can I waive the fee for first-time customers or VIPs?",
        answer:
          "Yes. Manual override available, you can release the hold or refund the captured fee with one click for any customer.",
      },
      {
        question: "Do customers actually agree to this at booking?",
        answer:
          "Yes. The booking flow includes the cancellation policy as a required acknowledgment. Customers see the fee amount, the cancellation window, and have to accept the terms before completing the booking.",
      },
    ],
    relatedSolutions: ["card-on-file", "booking-integration", "chargeback-protection"],
    relatedIndustries: [
      "salons",
      "barbershops",
      "med-spas",
      "tattoo-studios",
      "lash-and-brow",
    ],
    relatedBlogPosts: ["salon-no-show-fee", "salon-card-on-file"],
    seoKeywords: [
      "no show fee automation",
      "salon no show fee",
      "automated cancellation fee",
      "appointment no show software",
      "no show fee enforcement",
    ],
  },

  "stylist-commission-tracking": {
    icon: Users,
    hero: {
      headline: "Payday in 15 minutes, not three hours of spreadsheets.",
      subheadline:
        "Every transaction auto-attributes service revenue and tips to the stylist who did the work. Junior, senior, master rates handled. Tip-out chains tracked. Disputes drop to zero because the math is provable.",
      imageUrl:
        "https://images.pexels.com/photos/7440054/pexels-photo-7440054.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imageAlt: "Stylist completing payment",
    },
    problem: {
      title: "Manual commission math is killing you on payday.",
      body: "Every two weeks, you spend half a day calculating commission. Stylists argue about specific tickets. Tips get miscounted. The booking software doesn't talk to the POS. By the time payday closes, you've spent three hours doing math that should have taken fifteen minutes.",
      bullets: [
        "Receipts don't match the booking software, you reconcile them by hand.",
        "Junior stylist made 40% on services + 100% on tips, senior made 50% + 100%, you can never remember the exact splits.",
        "Tip-outs to assistants get hand-calculated and disputed every cycle.",
        "Stylists don't trust the math because they have no way to verify it.",
      ],
    },
    outcomes: {
      title: "What commission automation gets you.",
      description: "Real outcomes from salons running commission attribution on Reyna Pay.",
      stats: [
        { value: "73%", label: "Reduction in payday reconciliation time" },
        { value: "0", label: "Commission disputes per pay period" },
        { value: "Real-time", label: "Stylists see their own earnings live" },
        { value: "100%", label: "Service plus tip attribution accuracy" },
      ],
    },
    whyUs: {
      title: "We built this because we needed it ourselves.",
      description:
        "Robert Reyna runs a multi-location salon franchise. Commission attribution was the #1 source of stylist friction and owner frustration. We built it the way we'd want it as operators, real-time, transparent, dispute-proof.",
    },
    features: [
      {
        title: "Per-service auto-attribution",
        description:
          "Every service ticket attributes to the stylist who performed the work. Service revenue and tips routed automatically. Pay period closes on schedule with zero manual reconciliation.",
        imageUrl:
          "https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Stylist completing service",
      },
      {
        title: "Tiered commission rates",
        description:
          "Junior, senior, master, custom. Per-stylist rates configured once. Different rates for service vs. retail product sales. Different rates for first-time clients vs. repeat. Whatever your structure, it's supported.",
        imageUrl:
          "https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Salon team consultation",
      },
      {
        title: "Tip-out chain tracking",
        description:
          "Senior tips out 10% to shampoo assistant, 5% to shoeshine. Set the chain once, system distributes automatically at shift close. No more midnight calculator sessions, no more disputes.",
        imageUrl:
          "https://images.pexels.com/photos/3993124/pexels-photo-3993124.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Salon assistant at shampoo bowl",
      },
      {
        title: "Stylist self-service portal",
        description:
          "Each stylist gets their own login. They see their services, tips, retail commission, total earnings for the day, the week, the pay period. The number they see is the number you pay.",
        imageUrl:
          "https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Stylist viewing earnings on tablet",
      },
    ],
    useCases: [
      {
        title: "Single-location commission salon",
        description:
          "8 stylists, varied tiers, walk-ins plus appointments. Payday closes itself.",
      },
      {
        title: "Multi-location franchise",
        description: "Per-location commission ledgers. Roll-up to franchisor. Per-stylist reporting.",
      },
      {
        title: "Hybrid commission + booth rental",
        description: "Some stylists on commission, others rent the chair. Each configured independently.",
      },
      {
        title: "Booth rental shop with retail sales",
        description:
          "Booth renters keep service revenue, shop tracks retail product attribution and commission.",
      },
      {
        title: "Apprentice and assistant tip-outs",
        description:
          "Senior tips out junior at configurable percentages, system handles the chain.",
      },
      {
        title: "Multi-tier commission with promotions",
        description:
          "Stylist hits a service revenue threshold, commission rate auto-promotes.",
      },
    ],
    faqs: [
      {
        question: "What if a service is shared between two stylists?",
        answer:
          "Split attribution supported. Configure the split percentage at the ticket level (e.g., color and cut by different stylists, 60/40 split).",
      },
      {
        question: "Can I track retail commission separately from service commission?",
        answer:
          "Yes. Retail commission is separate from service commission, with its own rate per stylist. Reports show both broken out.",
      },
      {
        question: "What about tip pooling?",
        answer:
          "Configure tip pool rules (by hours worked, by section, custom percentages) and tips auto-distribute at end of shift. Or run individual tips per stylist. Or both, by service type.",
      },
      {
        question: "How do I handle commission promotions and bonuses?",
        answer:
          "Configure threshold-based bonuses (e.g., once stylist hits $5K/month service revenue, commission rate increases). Bonuses calculate automatically.",
      },
    ],
    relatedSolutions: ["tip-pools", "card-on-file", "multi-location-reporting"],
    relatedIndustries: [
      "salons",
      "barbershops",
      "nail-salons",
      "med-spas",
      "tattoo-studios",
      "lash-and-brow",
    ],
    relatedBlogPosts: ["salon-stylist-commission-software"],
    seoKeywords: [
      "stylist commission tracking",
      "salon commission software",
      "stylist commission attribution",
      "salon payroll commission",
      "automatic commission calculation",
    ],
  },

  "tip-pools": {
    icon: Receipt,
    hero: {
      headline: "Tip pools that close themselves.",
      subheadline:
        "Configure your rules once, by hours, by section, by role, by custom percentage. Tips auto-distribute at shift close. No more midnight calculator sessions. No more disputes.",
      imageUrl:
        "https://images.pexels.com/photos/6816354/pexels-photo-6816354.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imageAlt: "Server pulling tip pool",
    },
    problem: {
      title: "Manual tip pooling is a nightly tax on your closing manager.",
      body: "If your business runs a tip pool and you're calculating it by hand, you're losing 30-60 minutes every close, generating disputes every shift, and probably making errors that compound into bigger payroll issues.",
      bullets: [
        "Closing manager spends 30+ minutes calculating tip pools every night.",
        "Servers argue about whose tips counted toward the pool and whose didn't.",
        "Tip-outs to bar-backs, runners, and bussers get inconsistent, generating turnover.",
        "Errors compound into payroll headaches that surface a week later.",
      ],
    },
    outcomes: {
      title: "What tip pool automation gets you.",
      description:
        "Real outcomes from restaurants and bars running tip pools on Reyna Pay.",
      stats: [
        { value: "0 min", label: "Manual tip calculation at shift close" },
        { value: "100%", label: "Distribution accuracy per published rules" },
        { value: "Auto", label: "Distribution by configured rule set" },
        { value: "Lower", label: "Staff turnover from pay disputes" },
      ],
    },
    whyUs: {
      title: "Tip pooling is math, math should be automated.",
      description:
        "Once you set your rules, the system handles every shift, every cycle, every staffer. The closing manager closes out the night and goes home. Servers see their distribution in their portal. Disputes vanish.",
    },
    features: [
      {
        title: "Flexible rule configuration",
        description:
          "By hours worked. By section. By role (server vs. bar-back vs. runner). Custom percentages. Different rules for different shifts. Whatever your model, it's supported.",
        imageUrl:
          "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Configuration interface",
      },
      {
        title: "Automatic distribution at shift close",
        description:
          "Manager closes the shift, system distributes tips per rules, every staffer's portal updates with their share. Closing manager goes home.",
        imageUrl:
          "https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Restaurant manager closing register",
      },
      {
        title: "Staff transparency",
        description:
          "Each staffer sees their own distribution per shift, per pay period. The math is provable. Disputes drop to near zero because everyone can see exactly how their share was calculated.",
        imageUrl:
          "https://images.pexels.com/photos/4350107/pexels-photo-4350107.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Server viewing earnings on phone",
      },
      {
        title: "Section, role, and custom rules",
        description:
          "Different sections of the floor on different rules? Different roles getting different percentages? Bar-backs vs. servers vs. food runners? Configure each independently.",
        imageUrl:
          "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Restaurant floor with multiple sections",
      },
    ],
    useCases: [
      {
        title: "Full-service restaurant",
        description:
          "Servers pool tips, share with bar-backs and runners by configured percentages.",
      },
      {
        title: "Bar with multiple bartenders",
        description: "Bartenders pool tips, share with bar-backs by hours worked.",
      },
      {
        title: "Coffee shop",
        description: "Counter tip jar distributes by hours worked across shift.",
      },
      {
        title: "Salon shampoo and shoeshine tip-outs",
        description:
          "Senior stylists tip out junior staff at configured percentages.",
      },
      {
        title: "Hotel banquet shifts",
        description: "Banquet servers pool tips by event, distribute by hours worked.",
      },
      {
        title: "Multi-section steakhouse",
        description:
          "Different sections (bar, dining, private) pool separately or together per management policy.",
      },
    ],
    faqs: [
      {
        question: "Can I run individual tips and a pool at the same time?",
        answer:
          "Yes. Some service types contribute to the pool, others go directly to the server. Configurable per service category.",
      },
      {
        question: "What about credit card tip processing fees?",
        answer:
          "Some businesses pass the credit card processing fee on the tip portion to the staffer; others absorb it. Both supported, configurable per the rules you set.",
      },
      {
        question: "Can staff opt out of the pool?",
        answer:
          "By role, yes (some roles are pool-required, others optional). By individual, generally no, but custom configurations are possible.",
      },
      {
        question: "What about kitchen staff (BOH) tips?",
        answer:
          "Some jurisdictions allow tip pooling between FOH and BOH; others don't. The system supports either model. We don't provide legal advice on what's allowed in your jurisdiction.",
      },
    ],
    relatedSolutions: ["stylist-commission-tracking", "card-on-file"],
    relatedIndustries: ["restaurants", "bars", "coffee-shops", "salons", "barbershops"],
    relatedBlogPosts: [],
    seoKeywords: [
      "tip pool management",
      "automated tip distribution",
      "restaurant tip pooling software",
      "bar tip pool calculator",
      "tip pool POS",
    ],
  },
  "multi-location-reporting": {
    icon: MapPin,
    hero: {
      headline: "See every location in one dashboard. Drill into any chair.",
      subheadline:
        "Separate MIDs per location for clean accounting. Roll-up reporting at the group level. Compare revenue per stylist, per chair, per shop. Spot underperformers and top earners across your group.",
      imageUrl:
        "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imageAlt: "Multi-location dashboard analytics",
    },
    problem: {
      title: "Running multiple locations on one MID is a nightmare.",
      body: "Generic processors give you one merchant ID for all locations, which means clean per-entity accounting is impossible, comparing locations is approximate at best, and franchise structures are awkward to support.",
      bullets: [
        "One MID across multiple LLCs creates accounting and tax filing chaos.",
        "You can't tell which location is actually profitable per chair.",
        "Per-location performance comparisons require manual data exports.",
        "Franchise reporting (franchisor royalties) is a quarterly spreadsheet hell.",
      ],
    },
    outcomes: {
      title: "What multi-location reporting unlocks.",
      description:
        "Real outcomes from multi-location operators on Reyna Pay.",
      stats: [
        {
          value: "Per location",
          label: "Separate MID and clean accounting",
        },
        { value: "Real-time", label: "Roll-up across all locations" },
        {
          value: "Per chair",
          label: "Revenue, commission, and utilization",
        },
        {
          value: "Auto",
          label: "Franchise royalty calculations exportable",
        },
      ],
    },
    whyUs: {
      title: "Multi-location operators have specific needs. We deliver them.",
      description:
        "Separate MIDs per location keep your accounting clean. Roll-up reporting gives you the group-level view. Drill-down lets you see any chair, any stylist, any service category. Built for operators who actually run multiple locations.",
    },
    features: [
      {
        title: "Separate MIDs per location",
        description:
          "Each location has its own merchant ID, its own settlement, its own accounting trail. Clean tax reporting per LLC. No more mixing revenues across entities.",
        imageUrl:
          "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Location dashboard view",
      },
      {
        title: "Group-level roll-up reporting",
        description:
          "See total group revenue, growth rates, comparable-location performance. The dashboard you'd build yourself if you had the engineering time.",
        imageUrl:
          "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Roll-up group reporting view",
      },
      {
        title: "Drill-down to any chair, any stylist",
        description:
          "Top-line group revenue down to a specific stylist's last week of services. Identify your top earners across locations and what's working in your strongest shops.",
        imageUrl:
          "https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Detailed drill-down report",
      },
      {
        title: "Franchise reporting",
        description:
          "If you're a franchisor, royalty calculations roll up by location and export cleanly. If you're a franchisee, your reporting stays scoped to your locations only.",
        imageUrl:
          "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Franchise royalty report",
      },
    ],
    useCases: [
      {
        title: "Multi-location salon franchise",
        description:
          "3 to 50 locations, separate MIDs, royalty reporting to franchisor, per-stylist drill-down.",
      },
      {
        title: "Restaurant group",
        description:
          "Multiple concepts under one ownership. Per-location P&L. Group-level KPIs.",
      },
      {
        title: "Multi-shop barbershop",
        description:
          "Compare revenue per chair across shops, identify top-performing locations.",
      },
      {
        title: "Med spa group",
        description:
          "Per-location separate accounting, group-level KPI reporting, provider-level performance.",
      },
      {
        title: "Auto repair group",
        description:
          "Per-shop revenue, parts vs. labor breakdown per location, fleet customer billing per shop.",
      },
    ],
    faqs: [
      {
        question: "Do I need separate businesses for separate MIDs?",
        answer:
          "Not necessarily. Separate MIDs can be issued under the same legal entity if appropriate, or under separate LLCs for clean per-entity tax reporting. We help structure based on your accounting needs.",
      },
      {
        question:
          "What about chargebacks at one location, do they affect the others?",
        answer:
          "Each location's MID has its own chargeback profile and risk score. One location's issue doesn't affect another's underwriting.",
      },
      {
        question: "Can I close a location and add a new one without re-applying?",
        answer:
          "Yes. Adding/removing locations is a simple update on your existing master account, no full re-application required.",
      },
      {
        question: "How does franchise royalty calculation work?",
        answer:
          "Configure royalty as a percentage of gross revenue, configurable per franchise location. System calculates and exports a royalty report on your defined cadence (weekly, monthly, etc.).",
      },
    ],
    relatedSolutions: [
      "interchange-plus-pricing",
      "card-on-file",
      "stylist-commission-tracking",
    ],
    relatedIndustries: ["salons", "restaurants", "med-spas", "gyms-and-fitness"],
    relatedBlogPosts: ["franchise-salon-payment-processing"],
    seoKeywords: [
      "multi location payment processing",
      "franchise payment processor",
      "multi location POS reporting",
      "separate MID per location",
      "franchise royalty reporting",
    ],
  },

  "white-label-payments": {
    icon: Layers,
    hero: {
      headline: "Launch your own branded payments business.",
      subheadline:
        "We provide the infrastructure, compliance, and processing rails. You bring the merchants, brand the portal, and earn 25% of net processing margin paid monthly. Your customers think it's your platform. We make sure it works.",
      imageUrl:
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imageAlt: "Modern team meeting",
    },
    problem: {
      title: "Payments is a great business, but only if you have the rails.",
      body: "Building a payments business from scratch requires bank sponsorship, card-network certifications, PCI compliance infrastructure, fraud monitoring, settlement processing, and a customer support operation that knows interchange categories. That's a multi-million-dollar setup. Or you can white-label our infrastructure and start tomorrow.",
      bullets: [
        "Direct ISO setup costs $1M+ and takes 18 months minimum.",
        "Card-network certifications (Visa, Mastercard, AmEx, Discover) are gated and slow.",
        "PCI Level 1 compliance is an annual six-figure audit.",
        "Without the infrastructure, you can't capture meaningful processing margin.",
      ],
    },
    outcomes: {
      title: "What white-label gets you.",
      description: "What partners on Reyna Pay's platform earn and operate.",
      stats: [
        { value: "25%", label: "of net processing margin, paid monthly" },
        {
          value: "Branded",
          label: "portal at your subdomain, your logo",
        },
        {
          value: "Day 1",
          label: "Live, ready to onboard merchants",
        },
        {
          value: "Full",
          label: "compliance and rails handled by us",
        },
      ],
    },
    whyUs: {
      title: "We do the boring infrastructure. You do the customer relationships.",
      description:
        "Compliance, fraud monitoring, settlement, chargebacks, support tooling, all on us. You focus on what you're good at, finding merchants and serving them. Recurring revenue grows with your portfolio.",
    },
    features: [
      {
        title: "Branded merchant portal",
        description:
          "Your logo, your colors, your domain (subdomain). Your merchants see your brand, not ours. They sign up through your URL, log in through your URL, manage their account through your URL.",
        imageUrl:
          "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Branded merchant portal",
      },
      {
        title: "25% of net processing margin",
        description:
          "Recurring revenue. Paid monthly. Calculated transparently per merchant on your portfolio. No clawbacks on chargebacks (that's our cost, not yours). Your portfolio grows, your revenue compounds.",
        imageUrl:
          "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Earnings dashboard",
      },
      {
        title: "Underwriting and compliance handled",
        description:
          "We approve or decline merchant applications. We handle the PCI scope. We deal with the network rules. You focus on bringing merchants in, we keep them processing.",
        imageUrl:
          "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Compliance and underwriting team",
      },
      {
        title: "Marketing and sales toolkit",
        description:
          "Pitch decks, pricing calculators, ROI sheets, comparison tables, your subdomain landing page. Everything you need to sign your first 50 merchants quickly.",
        imageUrl:
          "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Marketing toolkit on tablet",
      },
    ],
    useCases: [
      {
        title: "Vertical SaaS company adding payments",
        description:
          "Embed payments into your software. Capture margin on every transaction your customers process.",
      },
      {
        title: "Industry consultant",
        description:
          "You serve a specific vertical, you know what they need. Bring them onto a payments platform you brand.",
      },
      {
        title: "Franchise group",
        description:
          "Brand the payments platform with your franchise name, all franchisees process through 'your' system.",
      },
      {
        title: "Independent sales organization (ISO)",
        description:
          "You already sell payments. Get better margin, better tooling, vertical-specific products.",
      },
      {
        title: "Industry association",
        description:
          "Endorse a payments platform branded with your association. Members get a better deal, you earn margin.",
      },
    ],
    faqs: [
      {
        question: "How much does the white-label program cost?",
        answer:
          "There's no upfront cost for our standard partner tier. We provide the infrastructure and you keep 25% of net processing margin. Higher tiers with custom branding and dedicated support are available.",
      },
      {
        question: "How fast can I launch?",
        answer:
          "Most partners are live within 2 weeks, most of which is your team configuring the brand assets and onboarding flow. Underlying infrastructure is ready immediately.",
      },
      {
        question: "What happens if a merchant chargebacks me?",
        answer:
          "Chargebacks are our cost, not yours. We handle the dispute process and absorb the risk on standard programs.",
      },
      {
        question: "Can I sell payment processing nationwide?",
        answer:
          "Yes. Our processing rails work everywhere in the US. International expansion case-by-case.",
      },
    ],
    relatedSolutions: [
      "interchange-plus-pricing",
      "multi-location-reporting",
      "pos-integration",
    ],
    relatedIndustries: [
      "professional-services",
      "ecommerce",
      "salons",
      "restaurants",
    ],
    relatedBlogPosts: ["white-label-payment-processor", "how-to-start-a-payments-company"],
    seoKeywords: [
      "white label payment processor",
      "white label merchant services",
      "payment processing partner program",
      "ISO payment processing",
      "white label ISO program",
      "branded payment processing",
    ],
  },

  "interchange-plus-pricing": {
    icon: BarChart3,
    hero: {
      headline: "See what you actually pay. Not what they tell you to pay.",
      subheadline:
        "Interchange-plus pricing means every transaction itemizes interchange, network assessments, and our markup separately. No tiered shenanigans. No hidden padding. The math is provable.",
      imageUrl:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imageAlt: "Pricing transparency report",
    },
    problem: {
      title: "Tiered pricing is how your processor pads margin invisibly.",
      body: "Tiered pricing buckets transactions into 'qualified, mid-qualified, non-qualified' with different rates for each. The processor controls which transactions go in which bucket. You have no way to verify the math. Result: average effective rate is 0.4% to 0.8% higher than interchange-plus pricing on the exact same transactions.",
      bullets: [
        "Your statement says '2.45%' but your effective rate is actually 3.10% because most transactions land in non-qualified.",
        "There's no way to audit which transactions got bucketed where, the processor decides.",
        "Card-not-present and AmEx routinely get bucketed at higher tiers regardless of their actual interchange cost.",
        "On $400K/year in volume, tiered pricing typically costs $1,600 to $3,200 more than interchange-plus.",
      ],
    },
    outcomes: {
      title: "What interchange-plus saves you.",
      description:
        "Real cost difference between tiered and interchange-plus on the same business.",
      stats: [
        {
          value: "0.4-0.8%",
          label: "Typical effective-rate savings vs. tiered",
        },
        { value: "$2K+", label: "Annual savings on $400K/year volume" },
        {
          value: "Itemized",
          label: "Every transaction shows interchange separately",
        },
        {
          value: "Auditable",
          label:
            "Math you can verify against published interchange tables",
        },
      ],
    },
    whyUs: {
      title: "Transparent pricing isn't a feature. It's how it should be done.",
      description:
        "Every transaction shows you the actual interchange (set by the card networks), the network assessments (set by the networks), and our markup (the only thing we control). You can verify our markup against the published interchange tables. We don't make money you can't see.",
    },
    features: [
      {
        title: "Itemized statements",
        description:
          "Every transaction line shows interchange, assessments, and our markup separately. Add them up, that's what you paid. No hidden buckets.",
        imageUrl:
          "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Itemized transaction statement",
      },
      {
        title: "Real interchange pass-through",
        description:
          "When Visa or Mastercard updates interchange, your costs update. When a transaction is rewards-card vs. debit, you see the actual interchange difference. No bucketing, no padding.",
        imageUrl:
          "https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Card network rate tables",
      },
      {
        title: "Published markup",
        description:
          "Our markup is published per pricing tier and never adjusted without notification. No surprise rate increases. No mystery 'PCI fees' or 'network access fees' that are really just margin.",
        imageUrl:
          "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Pricing transparency document",
      },
      {
        title: "Volume-based tier upgrades",
        description:
          "Hit volume thresholds, get better markup automatically. We don't make you renegotiate. We don't hide it. The tier you qualify for is the tier you get.",
        imageUrl:
          "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Volume tier dashboard",
      },
    ],
    useCases: [
      {
        title: "$30K+/month merchants",
        description:
          "Volume threshold typically required to qualify for interchange-plus, savings start to materialize.",
      },
      {
        title: "High-ticket businesses",
        description:
          "Med spas, auto repair, professional services, single transactions in the thousands benefit most from transparent pricing.",
      },
      {
        title: "Multi-location groups",
        description:
          "Aggregate volume across locations to qualify for better tier markup.",
      },
      {
        title: "B2B businesses",
        description:
          "Larger ticket sizes, fewer transactions, interchange-plus saves more than flat-rate.",
      },
      {
        title: "Mature businesses moving off Square",
        description:
          "Square's flat 2.6% + $0.10 is convenient but expensive at scale, interchange-plus saves once you cross $30K/month.",
      },
    ],
    faqs: [
      {
        question: "How is interchange-plus different from flat-rate (Square)?",
        answer:
          "Flat-rate charges one rate regardless of transaction type. Interchange-plus passes through actual interchange (which varies by card type) plus a fixed markup. Higher-volume businesses save with interchange-plus; very-low-volume businesses sometimes pay more.",
      },
      {
        question: "What's the minimum volume to qualify?",
        answer:
          "Generally $30K/month is the threshold where interchange-plus saves money over flat-rate. Below that, the simplicity of flat-rate may win even at slightly higher cost.",
      },
      {
        question: "How do I verify my interchange-plus is real?",
        answer:
          "Card networks publish interchange tables. Pick any transaction on your statement, look up that card type's published interchange, add our markup, that should match what you paid.",
      },
      {
        question: "Can my markup change without notice?",
        answer:
          "No. Our markup is set per pricing tier and changes are communicated 30+ days in advance. Network interchange and assessments can change with shorter notice (those are set by the networks, not us).",
      },
    ],
    relatedSolutions: [
      "multi-location-reporting",
      "white-label-payments",
      "card-on-file",
    ],
    relatedIndustries: [
      "salons",
      "restaurants",
      "auto-repair",
      "professional-services",
      "med-spas",
      "retail",
    ],
    relatedBlogPosts: [
      "why-salons-overpay-credit-card-processing",
      "best-payment-processor-for-salons-2026",
      "reyna-pay-vs-square-vs-clover",
    ],
    seoKeywords: [
      "interchange plus pricing",
      "interchange plus credit card processing",
      "transparent payment processing",
      "interchange plus vs tiered",
      "wholesale interchange pricing",
    ],
  },

  "chargeback-protection": {
    icon: Shield,
    hero: {
      headline: "Win more chargebacks. Auto-built evidence packs.",
      subheadline:
        "Customer disputes a charge. We auto-compile signed receipts, transaction logs, customer history, appointment records, and any signed policies into the dispute response. Win rates above 75% on disputes that would otherwise lose.",
      imageUrl:
        "https://images.pexels.com/photos/5466818/pexels-photo-5466818.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imageAlt: "Document evidence preparation",
    },
    problem: {
      title: "Most businesses lose 70% of chargebacks they could've won.",
      body: "Chargebacks have a tight response window (usually 7 to 14 days) and a specific evidence format the issuing bank wants. Most businesses don't have the time or the systems to build a strong response, so they take the loss. Auto-built evidence packs flip that ratio.",
      bullets: [
        "Customer disputes a $400 service 30 days later, you have 7 days to respond.",
        "You have to dig through booking records, signed receipts, customer communication, photos, manually.",
        "By the time you compile evidence, the response window is closed and you've already lost the dispute.",
        "Industry-average chargeback win rate without good evidence is around 30%.",
      ],
    },
    outcomes: {
      title: "What automated evidence packs deliver.",
      description:
        "Numbers from businesses on Reyna Pay running chargeback evidence pack automation.",
      stats: [
        { value: "75%+", label: "Chargeback win rate (industry avg ~30%)" },
        { value: "Auto", label: "Evidence pack compilation on dispute notification" },
        { value: "7-day", label: "Response window handled by the system" },
        {
          value: "Per industry",
          label: "Custom evidence templates by vertical",
        },
      ],
    },
    whyUs: {
      title: "Chargeback responses are a workflow problem. We automated the workflow.",
      description:
        "When a chargeback comes in, our system grabs the transaction record, the customer profile, the signed receipt, the appointment record, the cancellation policy they agreed to, the finished-work photos (for tattoos), the chat history, all of it. Compiles it into the response format the issuing bank wants. You review, you submit, you usually win.",
    },
    features: [
      {
        title: "Automatic evidence compilation",
        description:
          "Chargeback notification arrives, system pulls every relevant record into a structured response template. You get an alert with the draft. You review, edit if needed, submit.",
        imageUrl:
          "https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Evidence compilation interface",
      },
      {
        title: "Industry-specific evidence templates",
        description:
          "Tattoo studios need finished-work photos and signed waivers. Salons need cancellation policy acknowledgments. Restaurants need signed checks. Auto shops need parts-and-labor itemization. Templates per vertical.",
        imageUrl:
          "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Industry-specific dispute template",
      },
      {
        title: "Response window automation",
        description:
          "Tight 7-14 day windows are the biggest reason businesses lose disputes they could've won. The system tracks the window, surfaces alerts, ensures responses go in on time.",
        imageUrl:
          "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Calendar showing response deadline",
      },
      {
        title: "Win-rate tracking",
        description:
          "See your chargeback rate, your win rate, your loss reasons over time. Identify systemic issues (e.g., 'we're losing all our laser package disputes because we don't get signed package agreements') and fix them.",
        imageUrl:
          "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Chargeback analytics dashboard",
      },
    ],
    useCases: [
      {
        title: "Tattoo studios (high dispute rate vertical)",
        description:
          "Auto-compile signed waivers, deposit consent, finished-work photos, customer chat history.",
      },
      {
        title: "Salon no-show fees disputed",
        description:
          "Pull booking record, cancellation policy acknowledgment, reminder messages, no-show timestamp.",
      },
      {
        title: "Med spa packages disputed",
        description:
          "Pull package agreement, redemption history, treatment notes, customer signature on consent forms.",
      },
      {
        title: "Auto repair invoice disputed",
        description:
          "Itemized parts and labor, signed estimate approval, completion photos, post-service customer notification.",
      },
      {
        title: "Professional services retainer disputed",
        description:
          "Engagement agreement, retainer balance ledger, work-product evidence, client communication.",
      },
    ],
    faqs: [
      {
        question: "Does this cover all chargeback types?",
        answer:
          "Most. Friendly fraud, service-not-rendered, defective merchandise, etc., all supported. Genuine fraud (stolen card, true unauthorized use) typically loses regardless of evidence, that's the system working as intended.",
      },
      {
        question: "What happens if I lose a chargeback?",
        answer:
          "You lose the transaction amount plus a chargeback fee. We don't charge punitive fees, but the issuing bank's fee passes through. Most businesses see far fewer losses with auto-compiled evidence.",
      },
      {
        question: "Can I edit the auto-compiled response before submitting?",
        answer:
          "Yes. The system drafts the response, you review and customize before submission. Many businesses just review and submit, the auto-compilation is usually complete.",
      },
      {
        question: "Do you fight pre-arbitration?",
        answer:
          "Yes. If the issuer rules against you initially, you can escalate to pre-arbitration with additional evidence. Our system supports that flow on Pro and Enterprise plans.",
      },
    ],
    relatedSolutions: ["card-on-file", "no-show-fees"],
    relatedIndustries: [
      "tattoo-studios",
      "med-spas",
      "salons",
      "auto-repair",
      "professional-services",
    ],
    relatedBlogPosts: ["salon-no-show-fee", "salon-pci-compliance"],
    seoKeywords: [
      "chargeback protection",
      "chargeback evidence pack",
      "win chargebacks",
      "chargeback dispute software",
      "chargeback management",
    ],
  },
  "same-day-payouts": {
    icon: Zap,
    hero: {
      headline: "Need cash today? Toggle on, money lands by 5pm.",
      subheadline:
        "Standard T+1 settlement is fine for most businesses. When payroll can't wait or vendors need paying, same-day payouts get processed funds into your bank by end of business day. Toggle per batch.",
      imageUrl:
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imageAlt: "Bank transfer dashboard",
    },
    problem: {
      title: "T+1 is fine until payday is tomorrow and your account is short.",
      body: "Standard processing settlements take one business day. That's normally fine. But when payroll runs Friday morning and you need today's revenue available, T+1 means waiting until Monday. Same-day payouts solve the cash-timing problem on the days that matter.",
      bullets: [
        "Friday morning payroll, Friday batch settlement won't land until Monday.",
        "Vendor invoice due today, you have the money in pending settlement but can't access it.",
        "Slow week, you need every dollar accessible right now.",
        "Cash flow surprise, you're caught between when revenue settles and when payments are due.",
      ],
    },
    outcomes: {
      title: "What same-day payouts deliver.",
      description:
        "Real-world same-day funding outcomes for Reyna Pay merchants.",
      stats: [
        { value: "Today", label: "Same business day funding by 5pm" },
        { value: "Toggle", label: "Per batch, no commitment to all-or-nothing" },
        { value: "Selective", label: "Use it on the days you need it" },
        { value: "+0.25%", label: "Surcharge per batch (no monthly fee)" },
      ],
    },
    whyUs: {
      title: "Same-day shouldn't require switching processors.",
      description:
        "We don't make you commit to same-day funding for everything. Toggle per batch when you need it. The rest of the time, standard T+1 settlement at the standard rate. Pay the surcharge only when you use it.",
    },
    features: [
      {
        title: "Per-batch toggle",
        description:
          "Need today's revenue today? Toggle on for this batch. Surcharge applies to that batch only. Tomorrow's batch goes back to standard T+1 unless you toggle again.",
        imageUrl:
          "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Toggle settings interface",
      },
      {
        title: "5pm cutoff for same-day funding",
        description:
          "Submit your batch before 5pm Eastern, funds land in your bank by end of day. After 5pm, batch processes for next-day same-day funding.",
        imageUrl:
          "https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Clock showing 5pm cutoff",
      },
      {
        title: "Configurable per location",
        description:
          "Multi-location group? Each location can have its own same-day funding policy. Maybe payroll runs at one location and the others use standard funding.",
        imageUrl:
          "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Multi-location settings",
      },
      {
        title: "Bank-grade transfer rails",
        description:
          "Same-day ACH or RTP rails depending on your bank's capabilities. We route through the fastest available method per transaction.",
        imageUrl:
          "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Bank transfer infrastructure",
      },
    ],
    useCases: [
      {
        title: "Friday payroll",
        description:
          "Toggle Friday morning batch to same-day, payroll runs from today's settlement instead of waiting for Monday.",
      },
      {
        title: "Big purchase day",
        description:
          "Inventory restock or equipment purchase, today's revenue funds today's expense.",
      },
      {
        title: "Cash flow squeeze",
        description:
          "Slow weekend recovery on Monday morning, get the revenue accessible immediately.",
      },
      {
        title: "Vendor net-30 net-15 timing",
        description:
          "Vendor invoice due today, today's revenue covers it without dipping into operating capital.",
      },
      {
        title: "Staff bonus or tip distribution",
        description:
          "Cash-out bonuses or large tips on the day they're earned, not three days later.",
      },
    ],
    faqs: [
      {
        question: "How much does same-day funding cost?",
        answer:
          "Typically a small per-batch surcharge (around 0.25% of the batch). No monthly fee, you only pay when you use it.",
      },
      {
        question: "What's the cutoff?",
        answer:
          "5pm Eastern, the batch needs to be submitted before then for same-day funding. Specific cutoffs may vary by bank rails.",
      },
      {
        question: "Does my bank support same-day ACH?",
        answer:
          "Most major US banks support same-day ACH or instant RTP transfers. We route to the fastest method available for your bank.",
      },
      {
        question: "Can I always have same-day funding?",
        answer:
          "Yes. Some plans support 'always-on' same-day funding for a flat monthly fee. Talk to us about whether the math works for your business.",
      },
    ],
    relatedSolutions: ["interchange-plus-pricing", "card-on-file"],
    relatedIndustries: ["restaurants", "salons", "barbershops", "auto-repair"],
    relatedBlogPosts: [],
    seoKeywords: [
      "same day payout payment processing",
      "instant funding merchant",
      "same day ACH funding",
      "fast settlement payment processor",
    ],
  },

  "recurring-billing": {
    icon: Repeat,
    hero: {
      headline:
        "Memberships, subscriptions, and recurring revenue, automated.",
      subheadline:
        "Card-on-file, smart retry on declines, customer-facing pause/resume, dunning workflows, member-only pricing. Recurring billing built into the processor, not bolted on.",
      imageUrl:
        "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imageAlt: "Recurring subscription dashboard",
    },
    problem: {
      title: "Recurring revenue dies when billing fails silently.",
      body: "When a member's card declines, you don't know about it for 30 days, by then they're gone. Most processors don't retry intelligently, don't notify the member, don't dunning the recovery, and don't tell you which members are about to churn from billing failures.",
      bullets: [
        "Member card declines on the 1st, you find out on the 30th when their renewal also fails.",
        "Failed payment notifications go to a generic email and the member never sees them.",
        "No retry logic means a one-time decline kills the entire membership.",
        "Customers can't pause their membership through self-service, so they cancel instead.",
      ],
    },
    outcomes: {
      title: "What real recurring billing infrastructure delivers.",
      description:
        "Numbers from membership-driven businesses on Reyna Pay.",
      stats: [
        {
          value: "92%",
          label: "Failed payments recovered via smart retry",
        },
        {
          value: "Self-service",
          label: "Customer pause/resume reduces cancellations",
        },
        { value: "Real-time", label: "Member retention dashboard" },
        {
          value: "+15%",
          label: "Average member retention vs. naive billing",
        },
      ],
    },
    whyUs: {
      title: "Recurring revenue is a feature stack, not a checkbox.",
      description:
        "Card-on-file infrastructure, smart retry timing (3 days, 7 days, 14 days), customer-facing pause/resume, dunning email automation, member self-service portal, real-time retention analytics. All native, no third-party SaaS required.",
    },
    features: [
      {
        title: "Smart retry on declines",
        description:
          "Card declines, retry immediately, then 3 days, then 7 days, then 14 days. Most failures are transient (insufficient funds clear, card replaced, etc.). Smart retry recovers most.",
        imageUrl:
          "https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Retry schedule timeline",
      },
      {
        title: "Customer pause/resume",
        description:
          "Member can pause their membership for a month or two through self-service. They don't cancel, they pause. When they're ready to come back, they un-pause. Massive retention improvement vs. cancel-or-stay binary.",
        imageUrl:
          "https://images.pexels.com/photos/4350107/pexels-photo-4350107.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Customer membership pause control",
      },
      {
        title: "Dunning automation",
        description:
          "Polite, branded retention emails when a payment fails. Customer guidance to update card. Pre-suspension warning. Post-recovery confirmation. All automated, all branded.",
        imageUrl:
          "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Email composition interface",
      },
      {
        title: "Member-only pricing",
        description:
          "Members get auto-applied member rates on services. Non-members pay rack rate. Promotional periods supported. Tiered membership levels with different price points.",
        imageUrl:
          "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Member pricing tiers",
      },
    ],
    useCases: [
      {
        title: "Med spa membership",
        description:
          "Monthly memberships unlock discounted services, prepaid package add-ons, member-only product pricing.",
      },
      {
        title: "Lash studio fill memberships",
        description:
          "Monthly fills auto-billed, fill cadence tracked, members alerted when they're due for an appointment.",
      },
      {
        title: "Gym memberships",
        description:
          "Monthly memberships, smart retry, 90%+ recovery rate, retention dashboards.",
      },
      {
        title: "Yoga studio packages and memberships",
        description:
          "Mix monthly unlimited, 10-class packs, drop-ins, all reportable separately.",
      },
      {
        title: "Subscription box business",
        description:
          "Monthly product subscriptions, auto-renewal, customer self-service pause/resume.",
      },
      {
        title: "Professional services retainer",
        description:
          "Monthly retainer billing, automatic invoice generation, ACH or card autopay.",
      },
    ],
    faqs: [
      {
        question: "What happens when a member's card expires?",
        answer:
          "We attempt the charge, the bank declines for 'expired card,' we email the member to update, smart retry on a delayed schedule. Most members update within 7 days.",
      },
      {
        question: "Can members pause their membership themselves?",
        answer:
          "Yes. Customer-facing pause/resume is built in. Reduces cancellations significantly vs. processors that only allow full cancellation.",
      },
      {
        question: "How does pro-rata billing work?",
        answer:
          "Configure per-membership-tier pro-rata logic. Some businesses bill mid-cycle joiners pro-rata, others bill the full month. Both supported.",
      },
      {
        question: "Can I do annual memberships with monthly billing?",
        answer:
          "Yes. Annual commitment with monthly billing is supported. Members commit for 12 months, get billed monthly.",
      },
    ],
    relatedSolutions: ["card-on-file", "chargeback-protection"],
    relatedIndustries: [
      "med-spas",
      "lash-and-brow",
      "gyms-and-fitness",
      "yoga-studios",
      "ecommerce",
      "professional-services",
    ],
    relatedBlogPosts: [],
    seoKeywords: [
      "recurring billing software",
      "membership billing automation",
      "subscription payment processor",
      "dunning automation",
      "smart retry payment recovery",
    ],
  },

  "booking-integration": {
    icon: Calendar,
    hero: {
      headline: "Pre-authorize at booking. Capture at appointment. No-shows convert.",
      subheadline:
        "Direct integrations with major salon, spa, and appointment booking platforms. Open API for custom systems. Cards pre-authorize when the appointment is booked, no more deposit chasing.",
      imageUrl:
        "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imageAlt: "Online booking calendar",
    },
    problem: {
      title: "Your booking software and your processor should talk to each other.",
      body: "When booking and processing are disconnected, you re-type customer info, re-collect cards, fight no-show fees that never had pre-authorization, and reconcile two separate systems every night.",
      bullets: [
        "Customer books online, but card collection happens at the appointment, friction at the wrong moment.",
        "No-show fee policy is unenforceable because there's no card on file from the booking flow.",
        "Booking software shows a customer but the POS shows nothing until they walk in.",
        "Reconciliation between booking records and POS receipts is a nightly manual exercise.",
      ],
    },
    outcomes: {
      title: "What integrated booking + processing delivers.",
      description:
        "Real outcomes when booking and processing share infrastructure.",
      stats: [
        {
          value: "100%",
          label: "No-show fee enforceability per published policy",
        },
        { value: "Auto", label: "Card pre-authorization at booking time" },
        {
          value: "Real-time",
          label: "Booking-to-POS sync",
        },
        {
          value: "Zero",
          label: "Manual reconciliation between booking and POS",
        },
      ],
    },
    whyUs: {
      title:
        "We integrate with the major platforms and provide an API for custom setups.",
      description:
        "Direct, supported integrations with the major salon and appointment booking platforms. Open API for in-house booking software. The integration captures card-on-file at booking and runs through the same processing rails as your POS.",
    },
    features: [
      {
        title: "Direct integrations with major platforms",
        description:
          "We integrate directly with the major salon and appointment booking platforms. Specific availability varies, talk to us about your platform.",
        imageUrl:
          "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Booking integration screen",
      },
      {
        title: "Card capture at booking time",
        description:
          "Customer books, card captures, card pre-authorizes the cancellation fee or deposit. When they show up, the hold releases. When they don't, the fee converts.",
        imageUrl:
          "https://images.pexels.com/photos/4350107/pexels-photo-4350107.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Card capture during online booking",
      },
      {
        title: "Real-time sync between booking and POS",
        description:
          "Customer books, POS sees them. Customer arrives, POS already has their profile, their card-on-file, their service history, ready to check them in.",
        imageUrl:
          "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Booking and POS sync interface",
      },
      {
        title: "Open API for custom integrations",
        description:
          "Built your own booking software? Use our open API to capture cards, manage pre-authorizations, sync customer profiles, and process payments through Reyna Pay.",
        imageUrl:
          "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Developer API documentation",
      },
    ],
    useCases: [
      {
        title: "Salons with appointment booking",
        description:
          "Booking captures card, deposit pre-authorizes, fee converts on no-show, automatic.",
      },
      {
        title: "Med spas with consultation booking",
        description:
          "Pre-treatment consultation booked online, deposit captured, applied to treatment cost.",
      },
      {
        title: "Tattoo studios with deposit booking",
        description:
          "Booking deposit captured, applied to final invoice, forfeits on no-show.",
      },
      {
        title: "Auto repair with diagnostic booking",
        description:
          "Customer books slot, diagnostic deposit captured, applied to repair if approved.",
      },
      {
        title: "Pet grooming with multi-pet appointments",
        description:
          "Booking handles multiple pets per appointment, deposit per slot, multi-pet billing aggregated.",
      },
    ],
    faqs: [
      {
        question: "Which booking platforms do you integrate with?",
        answer:
          "Direct integrations with the major salon and appointment booking platforms. Specific availability varies, talk to us about your specific platform before switching.",
      },
      {
        question: "What if my booking software isn't supported directly?",
        answer:
          "Our open API supports custom integrations. Most modern booking platforms can integrate via API in a few hours of developer time.",
      },
      {
        question:
          "Does the integration capture the card on file or just authorize a hold?",
        answer:
          "Both, depending on configuration. Card-on-file is captured (token stored). Pre-authorization holds are placed for cancellation fee or deposit amounts. Hold releases on appointment completion or converts on no-show.",
      },
      {
        question: "Can different services have different deposit amounts?",
        answer:
          "Yes. Configure deposit and cancellation fee per service category. Higher-ticket services get higher deposits if you want.",
      },
    ],
    relatedSolutions: ["card-on-file", "no-show-fees", "pos-integration"],
    relatedIndustries: [
      "salons",
      "med-spas",
      "tattoo-studios",
      "auto-repair",
      "pet-grooming",
    ],
    relatedBlogPosts: ["salon-card-on-file", "salon-no-show-fee"],
    seoKeywords: [
      "booking integration payment processor",
      "salon booking software integration",
      "appointment booking POS",
      "online booking with deposit",
    ],
  },

  "pos-integration": {
    icon: Layers,
    hero: {
      headline: "Embed Reyna Pay into any POS or vertical SaaS.",
      subheadline:
        "Open API, modern SDKs, webhook events for transactions. Embed payment processing into your existing POS, vertical SaaS product, or custom software. Compliant, scalable, transparent.",
      imageUrl:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imageAlt: "Developer API integration",
    },
    problem: {
      title: "Built your own POS or SaaS? Your processor should be easy to embed.",
      body: "Most processors are designed for end-merchants, not for software developers embedding payments. Their APIs are crusty, their docs are outdated, and their support engineers don't know what a webhook is. We built Reyna Pay's API for developers first.",
      bullets: [
        "You built a vertical SaaS, payments are an afterthought integrated badly.",
        "Your existing POS works fine but the processor's SDK is from 2014.",
        "API documentation is incomplete, you spend more time guessing than building.",
        "Webhooks are unreliable, you end up polling for transaction status.",
      ],
    },
    outcomes: {
      title: "What developer-first processing infrastructure delivers.",
      description:
        "Real outcomes from POS and SaaS companies embedding Reyna Pay.",
      stats: [
        { value: "REST", label: "Modern API with comprehensive docs" },
        {
          value: "Webhooks",
          label: "Real-time event delivery, retried on failure",
        },
        { value: "PCI", label: "Scope reduction via tokenization" },
        {
          value: "SDKs",
          label: "Major languages and platforms supported",
        },
      ],
    },
    whyUs: {
      title: "Modern, well-documented, developer-friendly.",
      description:
        "Our API is REST. Our docs include working code examples. Our SDKs are maintained. Our webhooks deliver reliably (with retries). Our support engineers can answer technical questions. We treat developers like customers, because you are.",
    },
    features: [
      {
        title: "REST API with comprehensive docs",
        description:
          "Modern HTTP API. JSON payloads. Bearer auth. Idempotency keys. Comprehensive docs with working code examples. The API a developer would want to use.",
        imageUrl:
          "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "API documentation",
      },
      {
        title: "Webhook event delivery",
        description:
          "Transaction events, chargeback events, settlement events, all delivered via webhooks. Retried on failure. Signed for verification. The event-driven integration you'd build yourself.",
        imageUrl:
          "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Webhook event flow diagram",
      },
      {
        title: "Hosted checkout iframe",
        description:
          "Embed our checkout iframe in your product, PCI scope drops to near zero. Customer card data never touches your systems. Tokens come back to you for storage.",
        imageUrl:
          "https://images.pexels.com/photos/11035366/pexels-photo-11035366.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Hosted checkout interface",
      },
      {
        title: "SDKs for major languages",
        description:
          "Server-side SDKs for the languages developers actually use. Client-side SDKs for web and mobile. Sample apps for common integration patterns.",
        imageUrl:
          "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Code editor with SDK",
      },
    ],
    useCases: [
      {
        title: "Vertical SaaS adding payments",
        description:
          "Embed payments into your industry-specific software, capture margin on every transaction your customers process.",
      },
      {
        title: "Custom POS for a specific niche",
        description:
          "Built your own POS for a vertical, integrate Reyna Pay for the payment processing layer.",
      },
      {
        title: "E-commerce platform",
        description:
          "Hosted checkout iframe on your storefront, customer pays, you don't touch card data.",
      },
      {
        title: "Marketplace with split payments",
        description:
          "Take payment from buyer, split to multiple sellers, all through the same API integration.",
      },
      {
        title: "Internal enterprise software",
        description:
          "B2B platform that handles invoicing and payment, integrate processing through API.",
      },
    ],
    faqs: [
      {
        question: "What languages do your SDKs support?",
        answer:
          "Server-side SDKs for major languages including Node.js, Python, Ruby, Java, PHP, and Go. Client-side SDKs for web (JS) and mobile (iOS, Android).",
      },
      {
        question: "How do webhooks work?",
        answer:
          "We POST signed JSON payloads to your endpoint URL on transaction events, chargeback events, settlement events, etc. Failed deliveries retry on an exponential backoff schedule.",
      },
      {
        question: "Is the API rate-limited?",
        answer:
          "Yes, but generously. Standard rate limits are 100 req/sec per merchant. Higher limits available for high-volume integrations.",
      },
      {
        question: "Do you support tokenization for repeat charges?",
        answer:
          "Yes. Card data tokenizes once, you store the token, charge it as many times as needed without re-collecting card data. PCI scope drops dramatically.",
      },
    ],
    relatedSolutions: [
      "white-label-payments",
      "card-on-file",
      "interchange-plus-pricing",
    ],
    relatedIndustries: ["ecommerce", "professional-services", "retail"],
    relatedBlogPosts: ["how-to-start-a-payments-company"],
    seoKeywords: [
      "payment processing API",
      "POS integration payment processor",
      "embedded payments SDK",
      "white label payment API",
      "developer payment processing",
    ],
  },
};
