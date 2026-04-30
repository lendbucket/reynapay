import { Card } from "./card";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  isPlaceholder?: boolean;
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Card>
      <blockquote className="text-[var(--color-text-primary)] text-lg leading-relaxed mb-6">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[var(--color-teal-light)] flex items-center justify-center text-[var(--color-teal)] font-semibold text-sm">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <div className="font-semibold text-sm">{t.name}</div>
          <div className="text-xs text-[var(--color-text-muted)]">
            {t.role}, {t.company}
          </div>
        </div>
      </div>
      {t.isPlaceholder && (
        <div className="mt-4 text-[10px] text-[var(--color-warning)] uppercase tracking-wider">
          [PLACEHOLDER — Robert to replace]
        </div>
      )}
    </Card>
  );
}
