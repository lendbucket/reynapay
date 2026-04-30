---
title: "PCI compliance for salons: What you actually need to know"
slug: "salon-pci-compliance"
excerpt: "PCI compliance sounds scary and bureaucratic. For most salons, it's actually pretty manageable — as long as you understand what your processor is doing for you and what you have to handle yourself."
date: "2026-03-25"
category: "compliance"
author: "Robert Reyna"
ogImage: "/og/pci-compliance.png"
---

If you've ever gotten a letter from your payment processor mentioning "PCI DSS compliance" and wondered whether you should be panicking, this post is for you. PCI sounds intimidating. For most salons, it's actually one of the more manageable compliance topics — as long as you know what your processor is doing for you and what you're responsible for.

This post explains what PCI is, why it exists, what salons specifically have to do, and the common mistakes that turn a manageable compliance task into a real liability.

## What PCI DSS is

PCI DSS stands for Payment Card Industry Data Security Standard. It's a set of security requirements created by the major card networks (Visa, Mastercard, Discover, American Express, JCB) to protect cardholder data. It applies to any business that stores, processes, or transmits credit card information.

If you take credit cards at your salon, you're subject to PCI DSS. There's no exemption for small businesses.

That said — the burden varies dramatically based on how your salon handles card data. A salon that takes cards through a modern processor with tokenization has very different PCI obligations than a salon that stores card numbers in an old POS system or writes them down on paper.

## The four merchant levels

PCI DSS classifies merchants into four levels based on annual transaction volume.

**Level 1: more than 6 million card transactions/year.** Major retailers. Annual on-site audit by a Qualified Security Assessor (QSA). Quarterly network scans by an Approved Scanning Vendor (ASV).

**Level 2: 1-6 million transactions/year.** Larger regional businesses. Annual self-assessment questionnaire (SAQ) plus quarterly ASV scans.

**Level 3: 20,000-1 million e-commerce transactions/year.** Mid-sized e-commerce businesses. Annual SAQ plus quarterly ASV scans.

**Level 4: under 20,000 e-commerce transactions, or up to 1 million card-present transactions/year.** Most small and medium businesses, including the vast majority of salons. Annual SAQ. Quarterly ASV scans only if you store, process, or transmit card data on your own systems.

If your salon is doing under 1 million card transactions a year (almost certainly true), you're a Level 4 merchant. Your PCI obligation is primarily completing an annual self-assessment questionnaire (SAQ) and following the basic security practices it covers.

## What the SAQ actually asks about

The PCI Security Standards Council publishes several different SAQs depending on how the merchant handles card data. For a salon using a modern processor with tokenization (where actual card data never touches the salon's systems), the relevant SAQ is usually SAQ A or SAQ A-EP.

SAQ A is the simplest. It applies if:

- Your salon does not store, process, or transmit any cardholder data on its own systems
- All payment processing is fully outsourced to a PCI-compliant third party (your processor)
- The only thing that happens at your salon is that the customer hands over their card and the terminal does the rest

For a typical salon using SalonTransact, Square, or any other modern processor with tokenization and PCI-compliant terminals, this is the world you're in. The SAQ is roughly 20 questions about basic security practices: do you have policies for password management, do you train staff on security, do you keep your terminal firmware up to date, etc.

It takes about 30 minutes to complete annually. Most processors guide merchants through the SAQ as part of their onboarding and renewal flow.

## What gets you in trouble

The salons that have real PCI problems are the ones that handle card data outside the protected processing flow. Common mistakes:

**Writing card numbers on paper.** Customer calls to book an appointment, gives card number over the phone, front desk writes it on a sticky note to charge later. The sticky note is now a PCI compliance disaster. Card data was stored on paper, accessed by anyone walking by, and probably thrown in the regular trash later.

**Storing card numbers in spreadsheets or POS systems.** "We keep regulars' card numbers in our customer database for convenience." If the actual card number (not a token) is stored in your salon's local system, you've expanded your PCI scope dramatically — and you're a data breach waiting to happen.

**Emailing card numbers.** "Just email me the card number and I'll run it." Email is unencrypted. Card data sent via email violates PCI DSS and creates real liability.

**Using non-compliant terminals.** Older terminals that don't support tokenization or end-to-end encryption can store card data in their memory. Modern PCI-compliant terminals don't. If you're using a 10-year-old terminal, it's probably not compliant.

**Saving photos of cards.** Customer texts a photo of their card to confirm a booking. The photo lives in the staff member's phone. The phone gets stolen six months later. Now you have a breach.

The fix for all of these is the same: **never let actual card numbers touch your systems.** Use tokenization (which every modern processor offers), use the terminal for card capture, never write or store the raw card number anywhere.

## What to do if you've been doing it wrong

If you read the list above and recognized your salon, here's the remediation path.

**Step one: stop the bleeding.** No more handwritten card numbers. No more storing cards in spreadsheets. No more emailing card numbers. This is the most important step and the easiest to do today.

**Step two: enroll customers in card-on-file properly.** If you've been keeping card numbers for convenience, stop. Instead, use your processor's card-on-file feature — which stores tokens, not actual card numbers. The customer experience is identical (faster checkout for regulars), but the legal posture is completely different. See [our post on card-on-file at the salon](/blog/salon-card-on-file) for the proper rollout.

**Step three: clean up the existing data.** If you have spreadsheets, sticky notes, or POS records with actual card numbers, get rid of them. Shred paper. Securely delete digital files (basic delete is not enough — use a tool that overwrites the data). Audit your team's phones and emails for stored card data.

**Step four: train your staff.** Front desk staff are the most common breach vector at salons. They need to know: never write down card numbers, never accept them via email, always use the terminal. Annual training is part of PCI DSS anyway.

**Step five: complete the annual SAQ.** Most processors will prompt you. Don't ignore it. Non-compliance fees from card networks can run $5,000-$10,000+ per occurrence.

## What happens if there's a breach

PCI compliance isn't just about avoiding fines. It's also about what happens when something goes wrong.

If your salon has a data breach involving cardholder data — say, a hacker compromises your POS system or a stolen laptop has card data on it — and you can demonstrate you were PCI compliant at the time, the financial consequences are usually limited to forensic investigation costs and customer notification.

If you can't demonstrate compliance, the consequences expand significantly: card brand fines, increased processing rates, potential merchant account termination, civil liability under state breach notification laws, and class action exposure.

The asymmetry is meaningful. Compliance is cheap (an hour a year for most salons). Non-compliance is potentially catastrophic.

## What your processor handles vs. what you handle

A clear breakdown of responsibilities.

**Your processor handles:**

- PCI compliance of the underlying processing infrastructure
- Tokenization of card data
- PCI-compliant terminals and encryption keys
- Card data storage in PCI-compliant data centers
- Annual audits of their own infrastructure
- Reporting and documentation of their compliance status

**You handle:**

- Annual self-assessment questionnaire (SAQ)
- Staff training on security practices
- Physical security of your salon terminals (don't leave them unlocked, don't let them get stolen)
- Network security of any salon-owned devices that connect to terminals (your iPad, your office computer)
- Password practices for staff logins
- Not storing card data outside the processor's tokenization system

Most salons that get this wrong get it wrong on the staff training and "don't store card data outside the processor" piece. Both are easy fixes.

## What to ask your processor

Five questions to ask any processor on PCI compliance.

**One.** What's your PCI compliance level? (Should be Level 1, the highest.)

**Two.** Do you handle the SAQ for me, or do I have to complete it myself? (Most processors guide you through it. Some good ones do it largely on your behalf.)

**Three.** Do you provide tokenization on every transaction? (Should be yes. If not, run.)

**Four.** What happens if there's a breach on your infrastructure? Are you the responsible party, or am I? (Should be them, not you, for breaches in their systems.)

**Five.** Do you provide PCI compliance documentation I can show to auditors or regulators if asked? (Should be yes.)

For deeper PCI DSS reference material, [the PCI Security Standards Council publishes the full standard and SAQ documentation publicly](https://www.pcisecuritystandards.org/). For most salons, the SAQ A or SAQ A-EP guide is the relevant reading.

## How SalonTransact handles PCI

[SalonTransact](/salontransact) operates on PCI DSS Level 1 infrastructure. Tokenization is built into every transaction. Salons on the platform are typically eligible for SAQ A (the simplest questionnaire). We guide merchants through annual SAQ completion and provide all required compliance documentation.

If you're worried your current setup isn't compliant — or if you've been doing some of the things in the "what gets you in trouble" list above — [book a call](/contact) and we'll walk you through what the cleanup looks like. Switching to a properly compliant processor is part of the fix; the rest is operational hygiene we can help you set up.

For related reading, see [card-on-file at the salon: how to set it up legally and without losing customers](/blog/salon-card-on-file).
