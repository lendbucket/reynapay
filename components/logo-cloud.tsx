export function LogoCloud({
  label = "[PLACEHOLDER — Robert to replace with real press logos]",
  count = 5,
}: {
  label?: string;
  count?: number;
}) {
  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-6">
        {label}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-28 bg-[var(--color-border)] rounded flex items-center justify-center text-[10px] text-[var(--color-text-muted)]"
          >
            LOGO {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
