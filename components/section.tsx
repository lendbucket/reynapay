import { type HTMLAttributes, type ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: "default" | "surface" | "cream" | "brand" | "ink";
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
    default: "bg-white",
    surface: "bg-[var(--color-surface-2)]",
    cream: "bg-[var(--color-accent)]",
    brand: "bg-[var(--color-brand)] text-white",
    ink: "bg-[var(--color-ink)] text-white",
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
        <div className={`mb-4 inline-block ${inverted ? "eyebrow eyebrow-on-dark" : "eyebrow"}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`text-balance ${inverted ? "text-white" : ""}`}>{title}</h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${inverted ? "text-white/85" : "text-[var(--color-ink-muted)]"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
