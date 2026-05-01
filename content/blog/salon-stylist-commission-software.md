---
title: "Stylist commission tracking: Why your POS is making payroll harder than it needs to be"
slug: "salon-stylist-commission-software"
excerpt: "If your salon reconciles commissions by hand every two weeks, you're losing eight hours of admin time per pay cycle, and probably making mistakes. Here's how modern salon platforms handle stylist attribution automatically."
date: "2026-04-22"
category: "product"
author: "Robert Reyna"
ogImage: "/og/stylist-commissions.png"
---

There's a specific kind of pain that hits every multi-stylist salon owner around the 14th and 28th of each month. Pull the credit card report. Pull the cash deposit log. Pull the booking system's report of who serviced whom. Open a spreadsheet. Match service charges to stylists. Calculate commission percentages. Subtract product costs. Add tips. Cross-check against the booking system's tip pool report. Print, sign, and hand to the bookkeeper.

It usually takes four to eight hours per pay period. It's the kind of work that gets done at 11pm because there's no time during business hours. It's also the kind of work where mistakes hide for months, a stylist gets undercut by 3% on a few transactions, doesn't notice for six pay periods, and then suddenly there's a tense conversation about back pay.

This post is about why the problem exists, how modern salon-specific platforms solve it, and what to look for when comparing software.

## Why generic POS systems can't do this well

The fundamental problem is that most POS systems were built for retail. In retail, a transaction has one seller (the store) and one buyer (the customer). The transaction amount goes to the store, minus processing fees. End of story.

Salons are different. A single transaction at a salon involves up to four parties:

- The customer (paying)
- The stylist who performed the service (earning commission)
- The salon (taking its share of revenue)
- Sometimes a second stylist (for color or extended services performed jointly)

A retail POS has no concept of "the person who performed this service." The transaction is owned by the cashier or terminal. To attribute commission, the salon owner has to manually re-tie every transaction back to the stylist who did the work, usually by cross-referencing a booking system or paper appointment book.

Square's salon-specific tools added some of this. So did some Clover apps. But the architecture is still bolted on to a retail-first foundation. The handoffs between booking, service rendering, payment, and commission calculation are clunky and error-prone.

## What "stylist attribution" actually requires

A real stylist commission system needs three things working together.

**Stylist identity.** Each stylist has a profile in the system. They log in to clock services as "theirs."

**Service-level attribution.** Each line item in a transaction is associated with a stylist. A customer getting a cut from one stylist and a color from another should generate two service line items, each attributed correctly.

**Commission calculation rules.** Different stylists may have different commission structures. Junior stylists might be at 40%. Senior stylists at 55%. Commission may be straight percentage, or it may be a tiered structure based on monthly service revenue. Tips are usually 100% to the stylist. Product sales might have a different commission rate. Some salons have booth rental stylists who keep 100% of service revenue and pay rent, those need entirely different math.

**Tip handling.** Tips on credit card transactions need to be tracked separately from service charges. Tip-out (where service stylists tip out shampoo assistants and front desk staff) needs to be supported.

If your processor or POS doesn't handle all four of these natively, you're either doing manual reconciliation or you're using a separate platform layered on top.

## How modern salon platforms handle it

The cleanest implementations work like this.

When a customer books an appointment, the booking system records which stylist will perform the service. When the customer arrives and the appointment starts, the stylist's identity is already attached to the transaction-in-progress.

When the customer checks out, the POS terminal knows the stylist (because it inherited that data from booking). The stylist's commission percentage is applied automatically. Tips are flagged as 100% stylist revenue. Product sales attached to the service are commissioned at the product rate.

At pay period close, the system generates a payroll report broken out by stylist. Service revenue. Tips. Product commission. Tip-out adjustments. Hold for taxes. Net pay. Sign off, send to payroll provider, done.

Total time at pay period close: about 15 minutes for a typical multi-stylist salon. Compared to 4-8 hours of manual reconciliation. Compounded over 26 pay periods a year, that's 100-200 hours of admin time recovered annually, or roughly $5,000 to $10,000 in owner / manager labor cost, depending on hourly rate.

## What to look for when evaluating software

Three things to test before you commit.

**Stylist login flow.** Have a stylist actually log into the system. How fast does it work? Can they easily see their own services for the day? Can they tap into a booking and clock the start and end of the service?

**Mid-transaction stylist switch.** What happens if a stylist starts a service and a different stylist takes over halfway through (color set time, then a different stylist does the cut)? The system should handle this gracefully, either by splitting the service or by re-attributing the line item.

**Commission report transparency.** Pull a sample commission report. Can you (or the stylist) see exactly how every dollar was calculated? If a stylist disputes a number, can you click into the transaction and see the math?

If any of those three feel clunky in a demo, they will be 10x worse in production. Ask the vendor to walk you through real-world examples.

## A note on booth rental salons

Booth rental salons have a different problem. Stylists are independent contractors. The "salon" is essentially a real estate company that rents chairs. Each stylist runs their own book, takes their own payments, and pays the salon a flat monthly rent.

Most generic POS systems don't handle this model at all, they assume an employer-employee structure. Booth rental salons either run multiple separate merchant accounts (one per stylist) or use a salon-as-marketplace platform that splits payments at the transaction level.

For salons running a hybrid model, some stylists employed, some on booth rental, the software has to handle both. Few platforms do this well. ChairScore, the booth rental marketplace we're building under the StyleSuite umbrella, is specifically designed for this hybrid model.

## How SalonTransact handles it

[SalonTransact](/salontransact) was built around stylist attribution from day one. Every transaction line item carries a stylist ID. Every stylist has their own login and dashboard. Commission calculation happens automatically. Tips, product sales, and tip-out are tracked separately. Payroll exports cleanly to Gusto, Run, ADP, or any other major provider.

For multi-location and franchise groups, the system rolls up commission data across locations while keeping each MID separate for accounting purposes. Owners see everything; managers see what owners grant; stylists see only their own data.

If you're tired of the bi-weekly spreadsheet ritual, [apply to SalonTransact](/apply) or [book a demo](/contact). We'll show you exactly how the commission flow works and we'll set you up with sample data so you can test it before committing.

For more on how salon payments differ from retail, read [why every salon is overpaying for credit card processing](/blog/why-salons-overpay-credit-card-processing) and [the complete guide to choosing a salon payment processor in 2026](/blog/best-payment-processor-for-salons-2026).
