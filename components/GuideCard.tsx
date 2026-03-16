"use client";

import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";
import { getGuidePath } from "@/lib/canonical";
import { trackCityNavigation, trackGuideInteraction } from "@/lib/analytics/gaEvents";
import type { Guide } from "@/types";

type AnalyticsContext =
  | { type: "city"; citySlug: string }
  | { type: "guide"; guideSlug: string };

export function GuideCard({
  guide,
  analyticsContext,
}: {
  guide: Guide;
  analyticsContext?: AnalyticsContext;
}) {
  const href = getGuidePath(guide.city, guide.slug);
  const handleClick = () => {
    if (!analyticsContext) return;
    if (analyticsContext.type === "city")
      trackCityNavigation(analyticsContext.citySlug, guide.slug);
    else trackGuideInteraction(analyticsContext.guideSlug, "related_guide");
  };
  return (
    <Link
      href={href}
      onClick={handleClick}
      className="group block overflow-hidden rounded-xl bg-card transition-all duration-240"
      style={{ boxShadow: "var(--shadow-card)" }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-hover)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-card)"; }}
    >
      <div className="aspect-[3/2] overflow-hidden">
        <SafeImage
          src={guide.image}
          alt={guide.title}
          width={800}
          height={533}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1.5">
          {guide.neighbourhood}
        </p>
        <h3 className="text-base font-semibold text-foreground leading-snug">
          {guide.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
          {guide.summary}
        </p>
      </div>
    </Link>
  );
}
