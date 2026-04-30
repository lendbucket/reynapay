import { type HTMLAttributes, type ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: "default" | "surface" | "teal";
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
    surface: "bg-[var(--color-surface)]",
    teal: "bg-[var(--color-teal)] text-white",
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
    <div className={`${centered ? "text-center mx-auto" : ""} max-w-3xl mb-12`}>
      {eyebrow && (
        <div
          className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
            inverted ? "text-white/80" : "text-[var(--color-teal)]"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2 className={inverted ? "text-white" : ""}>{title}</h2>
      {description && (
        <p
          className={`mt-4 text-lg ${
            inverted ? "text-white/90" : "text-[var(--color-text-secondary)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
