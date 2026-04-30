import {
  forwardRef,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  type SelectHTMLAttributes,
  type ReactNode,
} from "react";

interface FieldProps {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
}

const inputBase =
  "w-full rounded-[var(--radius-input)] border border-[var(--color-border)] bg-white px-3.5 h-11 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[var(--color-teal)]/20 transition-colors";

export const Input = forwardRef<
  HTMLInputElement,
  FieldProps & InputHTMLAttributes<HTMLInputElement>
>(function Input({ label, hint, error, required, id, ...rest }, ref) {
  const inputId = id ?? rest.name;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-semibold text-[var(--color-text-primary)]">
        {label} {required && <span className="text-[var(--color-error)]">*</span>}
      </label>
      <input ref={ref} id={inputId} className={inputBase} aria-invalid={!!error} {...rest} />
      {hint && !error && <p className="text-xs text-[var(--color-text-muted)]">{hint}</p>}
      {error && <p className="text-xs text-[var(--color-error)]">{error}</p>}
    </div>
  );
});

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ label, hint, error, required, id, ...rest }, ref) {
  const inputId = id ?? rest.name;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-semibold text-[var(--color-text-primary)]">
        {label} {required && <span className="text-[var(--color-error)]">*</span>}
      </label>
      <textarea
        ref={ref}
        id={inputId}
        className={`${inputBase} h-32 py-3 resize-y`}
        aria-invalid={!!error}
        {...rest}
      />
      {hint && !error && <p className="text-xs text-[var(--color-text-muted)]">{hint}</p>}
      {error && <p className="text-xs text-[var(--color-error)]">{error}</p>}
    </div>
  );
});

export const Select = forwardRef<
  HTMLSelectElement,
  FieldProps & SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }
>(function Select({ label, hint, error, required, id, children, ...rest }, ref) {
  const inputId = id ?? rest.name;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-semibold text-[var(--color-text-primary)]">
        {label} {required && <span className="text-[var(--color-error)]">*</span>}
      </label>
      <select ref={ref} id={inputId} className={`${inputBase} pr-8`} aria-invalid={!!error} {...rest}>
        {children}
      </select>
      {hint && !error && <p className="text-xs text-[var(--color-text-muted)]">{hint}</p>}
      {error && <p className="text-xs text-[var(--color-error)]">{error}</p>}
    </div>
  );
});
