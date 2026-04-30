import type { LucideIcon } from "lucide-react";
import { Card } from "./card";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureGrid({
  features,
  columns = 3,
}: {
  features: Feature[];
  columns?: 2 | 3 | 4;
}) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];
  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
      {features.map((f) => (
        <Card key={f.title}>
          <f.icon
            size={24}
            strokeWidth={1.5}
            className="text-[var(--color-teal)] mb-4"
            aria-hidden
          />
          <h3 className="text-lg mb-2">{f.title}</h3>
          <p className="text-[var(--color-text-secondary)] text-[0.9375rem]">{f.description}</p>
        </Card>
      ))}
    </div>
  );
}
