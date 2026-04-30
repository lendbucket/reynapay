import { Button } from "./button";
import { Section } from "./section";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <Section variant="teal" containerClassName="text-center">
      <h2 className="text-white max-w-2xl mx-auto">{title}</h2>
      {description && (
        <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">{description}</p>
      )}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button href={primaryHref} variant="white" size="lg">
          {primaryLabel}
        </Button>
        {secondaryLabel && secondaryHref && (
          <Button
            href={secondaryHref}
            variant="ghost"
            size="lg"
            className="!text-white hover:!bg-white/10"
          >
            {secondaryLabel}
          </Button>
        )}
      </div>
    </Section>
  );
}
