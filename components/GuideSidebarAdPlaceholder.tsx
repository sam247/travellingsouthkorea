import { AdSenseUnit } from "@/components/analytics/AdSenseUnit";

interface GuideSidebarAdPlaceholderProps {
  /** AdSense ad-unit slot ID from your AdSense dashboard. When omitted the
   *  component renders a styled placeholder so the layout still looks correct
   *  before you have a real slot configured. */
  slot?: string;
  title?: string;
  description?: string;
}

export function GuideSidebarAdPlaceholder({
  slot,
  title,
  description,
}: GuideSidebarAdPlaceholderProps) {
  if (slot) {
    return <AdSenseUnit slot={slot} />;
  }

  return (
    <div className="mb-6 rounded-lg border border-border bg-secondary/40 p-4">
      {title && (
        <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
      )}
      {description && (
        <p className="text-xs text-muted-foreground mb-3">{description}</p>
      )}
    </div>
  );
}
