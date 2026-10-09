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
 * Our own placeholder container is capped to ~15vh (.tsk-sticky-ad-cap) so it
 * cannot dominate the viewport (Sam GO on QA-2026-10-05-10 density).
 */
export function GuideSidebarAdPlaceholder({
  slot,
  title,
  description,
}: GuideSidebarAdPlaceholderProps) {
  if (slot) {
    // Real AdSense unit: rendered unmodified. The 15vh cap is NOT applied
    // here because it would only work by clipping or resizing the
    // Google-served ad (policy risk). See QA-2026-10-05-10 proposal.
    return <AdSenseUnit slot={slot} />;
  }

  return (
    <div className="tsk-sticky-ad-cap mb-6 rounded-lg border border-border bg-secondary/40 p-4">
      {title && (
        <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
      )}
      {description && (
        <p className="text-xs text-muted-foreground mb-3">{description}</p>
      )}
    </div>
  );
}
