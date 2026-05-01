import type { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureGrid({ features, columns = 3 }: { features: Feature[]; columns?: 2 | 3 | 4 }) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];
  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-5`}>
      {features.map((f) => (
        <div key={f.title} className="card-base p-6">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-brand-tint)] mb-4">
            <f.icon size={20} strokeWidth={1.75} className="text-[var(--color-brand)]" aria-hidden />
          </div>
          <h3 className="text-[1.0625rem] mb-2 font-semibold">{f.title}</h3>
          <p className="text-[var(--color-ink-muted)] text-[0.9375rem] leading-relaxed">{f.description}</p>
        </div>
      ))}
    </div>
  );
}
