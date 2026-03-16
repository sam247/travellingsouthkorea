import { type LucideIcon } from "lucide-react";

interface QuickFactItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

export function QuickFacts({ items }: { items: QuickFactItem[] }) {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden bg-border/50"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {items.map((item) => (
        <div key={item.label} className="bg-card px-4 py-4 sm:py-5">
          <div className="flex items-center gap-1.5 mb-1">
            <item.icon className="w-3.5 h-3.5 text-primary" />
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {item.label}
            </p>
          </div>
          <p className="text-sm font-medium text-foreground">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
