import { type HTMLAttributes, type ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padded?: boolean;
}

export function Card({ children, padded = true, className = "", ...rest }: CardProps) {
  return (
    <div
      className={`bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] ${
        padded ? "p-6 md:p-8" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
