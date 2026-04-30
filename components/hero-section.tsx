import { Button } from "./button";

interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: React.ReactNode;
}

export function HeroSection({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  visual,
}: HeroSectionProps) {
  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            {eyebrow && (
              <div className="inline-block text-xs font-semibold uppercase tracking-wider text-[var(--color-teal)] bg-[var(--color-teal-light)] px-3 py-1 rounded-full mb-5">
                {eyebrow}
              </div>
            )}
            <h1 className="mb-5">{headline}</h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-xl">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
          {visual && <div className="lg:col-span-6">{visual}</div>}
        </div>
      </div>
    </section>
  );
}

export function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="aspect-[4/3] rounded-[var(--radius-card)] bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-sm text-[var(--color-text-muted)] uppercase tracking-wider">
      [{label}]
    </div>
  );
}
