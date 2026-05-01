import { Check, Minus } from "lucide-react";
import { Button } from "./button";

export interface PricingTier {
  name: string;
  price: string;
  priceDetail?: string;
  description: string;
  cta: { label: string; href: string };
  features: Array<{ label: string; included: boolean | string }>;
  popular?: boolean;
}

export function PricingTable({ tiers }: { tiers: PricingTier[] }) {
  return (
    <div
      className={`grid gap-6 grid-cols-1 ${tiers.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}
    >
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`relative bg-white rounded-[var(--radius-card)] p-8 ${
            tier.popular
              ? "border-2 border-[var(--color-teal)] shadow-[var(--shadow-card)]"
              : "shadow-[var(--shadow-card)]"
          }`}
        >
          {tier.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-teal)] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
              Most popular
            </div>
          )}
          <h3 className="text-xl mb-2">{tier.name}</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6 min-h-[2.5rem]">
            {tier.description}
          </p>
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight">
                {tier.price}
              </span>
              {tier.priceDetail && (
                <span className="text-sm text-[var(--color-text-muted)]">
                  {tier.priceDetail}
                </span>
              )}
            </div>
          </div>
          <Button
            href={tier.cta.href}
            variant={tier.popular ? "primary" : "secondary"}
            className="w-full"
          >
            {tier.cta.label}
          </Button>
          <ul className="mt-8 space-y-3">
            {tier.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                {f.included === false ? (
                  <Minus
                    size={18}
                    className="text-[var(--color-text-muted)] flex-shrink-0 mt-0.5"
                    aria-hidden
                  />
                ) : (
                  <Check
                    size={18}
                    strokeWidth={2}
                    className="text-[var(--color-teal)] flex-shrink-0 mt-0.5"
                    aria-hidden
                  />
                )}
                <span className="text-[var(--color-text-secondary)]">
                  {f.label}
                  {typeof f.included === "string" && (
                    <span className="text-[var(--color-text-primary)] font-medium">
                      {" — "}
                      {f.included}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
