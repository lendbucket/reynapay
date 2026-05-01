import { type HTMLAttributes, type ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: "default" | "soft" | "deep" | "card" | "brand" | "brand-dark";
  containerClassName?: string;
}

export function Section({
  children,
  variant = "default",
  className = "",
  containerClassName = "",
  ...rest
}: SectionProps) {
  const bg = {
    default: "bg-[var(--color-surface)]",        // cream
    soft: "bg-[var(--color-surface-2)]",          // softer cream
    deep: "bg-[var(--color-surface-3)]",          // deeper cream
    card: "bg-[var(--color-card)]",               // warm off-white
    brand: "bg-[var(--color-brand)] text-[var(--color-accent)]",
    "brand-dark": "bg-[var(--color-brand-dark)] text-[var(--color-accent)]",
  }[variant];
  return (
    <section className={`section ${bg} ${className}`} {...rest}>
      <div className={`container-page ${containerClassName}`}>{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  inverted = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  inverted?: boolean;
}) {
  return (
    <div className={`${centered ? "text-center mx-auto" : ""} max-w-3xl mb-12 md:mb-16`}>
      {eyebrow && (
        <div className={`mb-4 inline-block ${inverted ? "eyebrow eyebrow-on-brand" : "eyebrow"}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`text-balance ${inverted ? "text-[var(--color-accent)]" : ""}`}>{title}</h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${inverted ? "text-[var(--color-accent)]/85" : "text-[var(--color-ink-muted)]"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
