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
    <div onClick={() => trackGuideInteraction(guideSlug, "map_section")}>
      {children}
    </div>
  );
}
