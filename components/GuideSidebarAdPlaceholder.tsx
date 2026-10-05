import { AdSenseUnit } from "@/components/analytics/AdSenseUnit";

interface GuideSidebarAdPlaceholderProps {
  /** AdSense ad-unit slot ID from your AdSense dashboard. When omitted the
   *  component renders a styled placeholder so the layout still looks correct
   *  before you have a real slot configured. */
  slot?: string;
  title?: string;
  description?: string;
}

/**
 * Sidebar ad slot used inside sticky asides.
 * Caps rendered height to ~15vh so sticky/overlay ads cannot dominate the
 * viewport (Sam GO on QA-2026-10-05-10 density).
 */
export function GuideSidebarAdPlaceholder({
  slot,
  title,
  description,
}: GuideSidebarAdPlaceholderProps) {
  if (slot) {
    return (
      <div className="tsk-sticky-ad-cap max-h-[15vh] overflow-hidden">
        <AdSenseUnit
          slot={slot}
          format="rectangle"
          fullWidthResponsive={false}
          className="max-h-[15vh]"
          style={{ display: "block", maxHeight: "15vh", overflow: "hidden" }}
        />
      </div>
    );
  }

  return (
    <div className="mb-6 rounded-lg border border-border bg-secondary/40 p-4 max-h-[15vh] overflow-hidden">
      {title && (
        <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
      )}
      {description && (
        <p className="text-xs text-muted-foreground mb-3">{description}</p>
      )}
    </div>
  );
}
