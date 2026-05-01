import { ArrowRight } from "lucide-react";
import { Button } from "./button";

interface HeroSectionProps {
  eyebrow?: string;
  headline: React.ReactNode;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: React.ReactNode;
  trustline?: string;
}

export function HeroSection({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  visual,
  trustline,
}: HeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden gradient-mesh-cream"
      style={{ paddingTop: "4.5rem", paddingBottom: "4.5rem" }}
    >
      <div className="absolute inset-0 bg-grid opacity-40 -z-10" />
      <div className="container-page relative">
        <div className="md:pt-4 lg:pt-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div
              className={
                visual ? "lg:col-span-6" : "lg:col-span-9 mx-auto text-center"
              }
            >
              {eyebrow && <div className="eyebrow mb-6">{eyebrow}</div>}
              <h1 className="mb-5 text-balance">{headline}</h1>
              <p className="text-[1.0625rem] md:text-xl text-[var(--color-ink-muted)] leading-relaxed mb-8 max-w-xl">
                {subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label} <ArrowRight size={16} />
                </Button>
                {secondaryCta && (
                  <Button
                    href={secondaryCta.href}
                    variant="secondary"
                    size="lg"
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
              {trustline && (
                <p className="text-xs text-[var(--color-ink-subtle)] font-medium">
                  {trustline}
                </p>
              )}
            </div>
            {visual && <div className="lg:col-span-6">{visual}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="relative bg-[var(--color-card)] rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)] border border-[var(--color-border)] overflow-hidden">
        <div className="bg-[var(--color-surface-2)] border-b border-[var(--color-border)] p-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-strong)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-strong)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-strong)]" />
          </div>
          <div className="ml-3 text-xs text-[var(--color-ink-subtle)] font-mono">
            app.reynapay.com/dashboard
          </div>
        </div>
        <div className="p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-[var(--color-ink-subtle)] uppercase tracking-wider">
                Today's volume
              </div>
              <div className="text-3xl font-bold tracking-tight mt-1">
                $12,847.50
              </div>
              <div className="text-xs text-[var(--color-success)] font-medium mt-1">
                ↑ 18.2% vs. yesterday
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-[var(--color-ink-subtle)]">
                Effective rate
              </div>
              <div className="text-lg font-semibold text-[var(--color-brand)]">
                2.31%
              </div>
            </div>
          </div>
          <div className="h-24 bg-gradient-to-t from-[var(--color-brand-tint)] to-transparent rounded-[var(--radius-md)] relative">
            <svg
              viewBox="0 0 400 100"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 Q50,60 100,55 T200,40 T300,30 T400,15"
                stroke="var(--color-brand)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0,80 Q50,60 100,55 T200,40 T300,30 T400,15 L400,100 L0,100 Z"
                fill="var(--color-brand)"
                opacity="0.08"
              />
            </svg>
          </div>
          <div className="space-y-2.5">
            <TxRow merchant="Salon Envy, Stylist: Maria" amount="$185.00" />
            <TxRow merchant="Mateo's Coffee, Tip included" amount="$24.50" />
            <TxRow merchant="Ironclad Auto, Service" amount="$1,240.00" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 hidden md:block">
        <div className="bg-[var(--color-brand)] text-[var(--color-accent)] rounded-[var(--radius-lg)] p-4 shadow-[var(--shadow-lg)] max-w-[200px]">
          <div className="text-xs uppercase tracking-wider opacity-80 mb-1">
            Saved this month
          </div>
          <div className="text-2xl font-bold">$1,847</div>
          <div className="text-xs opacity-80 mt-1">vs. previous processor</div>
        </div>
      </div>
    </div>
  );
}

function TxRow({ merchant, amount }: { merchant: string; amount: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[var(--color-border)] last:border-0">
      <span className="text-xs text-[var(--color-ink-muted)] truncate pr-3">
        {merchant}
      </span>
      <span className="text-sm font-semibold tracking-tight">{amount}</span>
    </div>
  );
}

export function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="aspect-[4/3] rounded-[var(--radius-lg)] bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center text-xs text-[var(--color-ink-subtle)] uppercase tracking-wider font-mono">
      [{label}]
    </div>
  );
}
