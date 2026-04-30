---
title: "How to start a payment processing business legally in 2026"
slug: "how-to-start-a-payments-company"
excerpt: "Starting a payments business has fewer barriers than you think — and more legal landmines than you'd expect. Here's the path most successful operators actually take in 2026."
date: "2026-04-04"
category: "industry"
author: "Robert Reyna"
ogImage: "/og/start-payments-company.png"
---

Every few months I get a call from someone who wants to start their own payment processing company. They've usually got two things going for them: experience selling something (insurance, software, professional services), and a network that includes business owners. They've heard payments is a high-margin recurring revenue business and they want in.

Then I tell them the path and most of them realize they don't want what they thought they wanted.

This post is the honest version. It walks through the four routes to a payments business, the regulatory and capital requirements for each, and which one actually makes sense for most aspiring operators in 2026.

## Route 1: Become a registered ISO

An Independent Sales Organization (ISO) is a registered third-party agent of a sponsor bank. You're authorized to sell merchant services on behalf of the sponsor bank, you can set merchant pricing within agreed bands, and you typically take 50-80% of the net processing margin.

The barriers to entry:

- **Sponsor bank relationship.** You need a sponsor bank willing to register you. Some banks accept new ISOs; many don't. The ones that do usually require a track record (years of payments industry experience) or significant working capital ($250k-$1M+).
- **Card network registration.** Visa and Mastercard each require registration as an ISO. The annual fees are roughly $5,000-$10,000 per network. Plus background checks on principals. Plus ongoing compliance reporting.
- **Compliance infrastructure.** AML/KYC programs, sanctions screening, dispute management, PCI compliance. You can outsource pieces of this but you're still on the hook.
- **Capital requirements.** Sponsor banks may require minimum capital reserves and bonding. Plus working capital to absorb chargebacks and merchant fraud risk before you can collect on residuals.

Realistic timeline: 6-12 months from "I want to start" to "I'm a registered ISO selling deals." Realistic upfront capital: $100k-$500k depending on sponsor bank requirements. Ongoing operating cost: meaningful — compliance, ops staff, risk management.

This route makes sense if you've worked in payments for years, have sponsor bank relationships already, and have access to capital. For most people reading this, it doesn't.

## Route 2: Become a payment facilitator (PayFac)

A PayFac aggregates merchants under a single master merchant agreement with a sponsor bank. Stripe, Square, and Toast are PayFacs. Sub-merchants don't sign their own merchant agreement with a sponsor bank — they sign with the PayFac, who handles underwriting, settlement, and risk.

The barriers to entry:

- **Sponsor bank.** Even harder to get than for an ISO. Banks are picky about who they'll sponsor as a PayFac.
- **Capital.** Significantly more than an ISO. PayFacs hold reserves against sub-merchant risk. Realistic capital requirement: $1M-$5M+.
- **Operations.** You need real-time underwriting, fraud screening, chargeback handling. This is a software business as much as a payments business.
- **Regulatory complexity.** Even more than an ISO. State money transmitter licensing may apply depending on how you handle settlement.

Realistic timeline: 12-24 months. Realistic capital: $1M minimum, $5M comfortable. Realistic team: payments engineers, compliance officer, risk team, finance team.

This route makes sense if you're building a software platform with payments embedded (vertical SaaS, marketplace), you have institutional capital, and you're committed to building a payments operation as a core competency. For solo operators or small teams, this is not the move.

## Route 3: Be an independent agent of an existing ISO

An "independent agent" sells merchant accounts on behalf of an existing ISO. You don't have your own ISO registration; you operate under the existing ISO's relationship.

The barriers:

- Sign an agent agreement with an ISO
- Possibly some sales training
- Get out and sell

The economics: typically 10-30% of net margin, paid as residuals on accounts you sell. Some ISOs offer up-front bonuses on closed accounts.

Realistic timeline: weeks. Realistic capital: $0 to a few thousand for marketing materials.

This route makes sense for sales-focused individuals who want to sell payments without owning the infrastructure. The downside: you don't control the brand, the technology, or the merchant experience. You're a salesperson for someone else's product.

## Route 4: Be a partner / reseller of a vertical-specific platform

This is the route that's emerged most prominently in the last few years and is the right answer for most aspiring payments operators in 2026.

You partner with a payments platform that has a built-in white-label or partner program. You get a branded portal, marketing materials, and recurring commission on every transaction your merchants process. The platform handles compliance, underwriting, support, and infrastructure.

The barriers:

- Apply to the partner program
- Get approved (most partners are approved if they have a reasonable network and sales background)
- Start bringing merchants

The economics: typically 20-35% of net margin. Better than being an independent agent at a generic ISO because the platform is more differentiated and you're branded.

Realistic timeline: weeks. Realistic capital: a few hundred dollars in marketing materials, plus a small monthly software fee for the branded portal.

This is what we built [the Reyna Pay Partner Program](/partners) for. Partners get a Level 3 white-label experience (see [our post on white-label processors](/blog/white-label-payment-processor) for what the levels mean), 25% of net processing margin, and infrastructure handled. Most partners can launch in 30 days from application.

## Which route makes sense for you?

A simple decision tree.

**Do you have $1M+ in capital, payments industry experience, and a sponsor bank relationship?** Become an ISO or PayFac. Build a real payments business. Long timeline, big upside.

**Do you have $0-$10k in capital and want to sell payments without owning infrastructure?** Become an independent agent at a generic ISO, or — better — become a partner at a vertical-specific platform. Faster launch, smaller commission per deal, much lower operational complexity.

**Are you a developer/founder building a vertical SaaS where payments is core to the product?** Consider becoming a PayFac long-term. In the short term, embed an existing payments platform's API.

For most operators reading this — people with sales experience and a network, but not deep payments expertise or institutional capital — Route 4 (vertical-specific partner program) is the right answer in 2026. The economics are good, the operational complexity is manageable, and you can actually launch and start earning within weeks instead of years.

## The legal landmines

Three things that trip up new payments operators consistently.

**State money transmitter licensing.** If you ever take possession of customer funds (even briefly, before remitting them to the merchant), you may trigger state money transmitter licensing in 49 states. Each state has its own application, its own bond requirement, and its own timeline. Getting licensed in all 49 takes 18-36 months and costs $1M+ in legal fees and bonding. This is one of the main reasons to operate as a partner under an existing entity — they hold the licenses, you don't have to.

**FTC Business Opportunity Rule.** If you sell a "business opportunity" (something that helps the buyer start a business in exchange for an upfront payment), you may trigger FTC disclosure requirements. This is why payments partner programs typically structure as $0 upfront enrollment with a monthly SaaS fee — the SaaS fee is for software, not for selling a business opportunity. We talk about this directly in [our partner program FAQ](/partners).

**Misrepresenting your legal status.** If you tell merchants you're "their payment processor" but you're actually a referrer or sub-agent, you may have misrepresented your role. This can trigger state consumer protection laws and card network sanctions. Always be clear about who's actually holding the merchant agreement.

For more on the legal structure of agent vs. ISO vs. PayFac relationships, [the Conference of State Bank Supervisors maintains a money transmission database](https://www.csbs.org/) that's useful for researching state-level requirements.

## How to evaluate a partner program

If Route 4 is what you're considering, here are the things to evaluate when choosing a partner program.

**The platform's differentiation.** Is the underlying platform actually better than generic processors? Vertical-specific, modern UX, real customer love? If the platform is undifferentiated, you'll have a hard time winning deals against incumbents.

**The branding control.** What level of white-label are you actually getting? (See [our post on white-label processors](/blog/white-label-payment-processor) for the framework.)

**The economics.** What's the commission rate? Is it transparent (a clear formula on net margin)? Or is it murky (some opaque revenue share that's hard to verify)?

**The partner support.** Who do you call when a merchant has an issue? Are you on your own, or is there a real partner success team?

**The exit terms.** If you ever want to leave the program, do you continue earning residuals on existing merchants, or does the platform claw them back?

The best partner programs are transparent on all five. The worst hide one or more.

## How Reyna Pay's program is structured

[The Reyna Pay Partner Program](/partners) is structured as a Level 3 white-label partnership:

- $0 upfront enrollment
- $99/month for the branded portal infrastructure
- 25% of net processing margin per transaction, paid monthly via ACH
- Branded portal at your-business.reynapay.com (or custom subdomain)
- Marketing toolkit included
- Underwriting, compliance, chargeback management handled by Reyna Pay
- 30-day notice to exit, with continued residuals on existing merchants per the partner agreement

If you want to talk through whether the program fits what you're trying to build, [book a call](/contact). We'll be honest about whether you're a fit — some applicants we approve, some we don't, and some we tell to do something else entirely.
