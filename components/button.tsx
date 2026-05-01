import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "white" | "cream";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-dark)] active:bg-[var(--color-brand-dark)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]",
  secondary:
    "bg-white text-[var(--color-ink)] border border-[var(--color-border-strong)] hover:bg-[var(--color-surface-2)] hover:border-[var(--color-ink-subtle)]",
  ghost:
    "bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-surface-2)]",
  white:
    "bg-white text-[var(--color-brand)] hover:bg-[var(--color-accent)] shadow-[var(--shadow-sm)]",
  cream:
    "bg-[var(--color-accent)] text-[var(--color-brand)] hover:bg-[var(--color-accent-dark)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[0.8125rem]",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-12 px-6 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-semibold transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap tracking-tight";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { variant = "primary", size = "md", children, className = "" } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    const isExternal = props.external || props.href.startsWith("http");
    if (isExternal) {
      return (
        <a href={props.href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, children: _c, className: _cn, ...rest } = props as ButtonAsButton;
  return (
    <button ref={ref} className={classes} {...rest}>
      {children}
    </button>
  );
});
