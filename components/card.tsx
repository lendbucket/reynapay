import { type HTMLAttributes, type ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padded?: boolean;
  variant?: "default" | "ghost";
}

export function Card({ children, padded = true, variant = "default", className = "", ...rest }: CardProps) {
  const base = variant === "default" ? "card-base" : "bg-transparent";
  return (
    <div className={`${base} ${padded ? "p-6 md:p-8" : ""} ${className}`} {...rest}>
      {children}
    </div>
  );
}
