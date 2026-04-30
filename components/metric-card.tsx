export interface Metric {
  value: string;
  label: string;
  isPlaceholder?: boolean;
}

export function MetricCard({ m }: { m: Metric }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[var(--color-teal)] mb-2 tracking-tight">
        {m.value}
      </div>
      <div className="text-sm text-[var(--color-text-secondary)]">{m.label}</div>
      {m.isPlaceholder && (
        <div className="mt-1 text-[10px] text-[var(--color-warning)] uppercase tracking-wider">
          [PLACEHOLDER]
        </div>
      )}
    </div>
  );
}
