"use client";

import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";
import { getTravelTipPath } from "@/lib/canonical";
import type { TravelTip } from "@/types";

export function FeaturedTravelTipCard({ tip }: { tip: TravelTip }) {
  const href = getTravelTipPath(tip.slug);
  const eyebrow =
    tip.tags.slice(0, 2).join(" · ") || "Travel tip";

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-xl bg-card transition-all duration-240"
      style={{ boxShadow: "var(--shadow-card)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-card)";
      }}
    >
      <div className="aspect-[3/2] overflow-hidden">
        <SafeImage
          src={tip.image}
          alt={tip.title}
          width={800}
          height={533}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1.5">
          {eyebrow}
        </p>
        <h3 className="text-base font-semibold text-foreground leading-snug">
          {tip.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
          {tip.summary}
        </p>
      </div>
    </Link>
  );
}
