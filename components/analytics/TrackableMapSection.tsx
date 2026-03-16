"use client";

import { trackGuideInteraction } from "@/lib/analytics/gaEvents";

export function TrackableMapSection({
  guideSlug,
  children,
}: {
  guideSlug: string;
  children: React.ReactNode;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => trackGuideInteraction(guideSlug, "map_section")}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          trackGuideInteraction(guideSlug, "map_section");
        }
      }}
      className="cursor-pointer"
    >
      {children}
    </div>
  );
}
