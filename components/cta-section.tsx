import { ArrowRight } from "lucide-react";
import { Button } from "./button";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="section relative overflow-hidden bg-[var(--color-brand)] text-white">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-accent)" }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "var(--color-brand-light)" }}
      />
      <div className="container-page relative">
        <div className="max-w-3xl mx-auto text-center">
          {eyebrow && <div className="eyebrow eyebrow-on-dark mb-5">{eyebrow}</div>}
          <h2 className="text-white mb-5 text-balance">{title}</h2>
          {description && <p className="text-white/85 text-lg mb-8 leading-relaxed">{description}</p>}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href={primaryHref} variant="white" size="lg">
              {primaryLabel} <ArrowRight size={16} />
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="ghost" size="lg" className="!text-white hover:!bg-white/10">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
