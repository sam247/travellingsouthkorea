import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";
import type { TimeSlot } from "@/types";
import { getVenuePath } from "@/lib/canonical";
import { getGuidePath } from "@/lib/canonical";
import { getVenueBySlug } from "@/data/venues";
import { getGuideBySlug } from "@/data/guides";

const labelColors: Record<string, string> = {
  Morning: "bg-amber-100 text-amber-800",
  Afternoon: "bg-sky-100 text-sky-800",
  Evening: "bg-indigo-100 text-indigo-800",
};

export function ItineraryTimeSlot({ slot }: { slot: TimeSlot }) {
  const venueHref =
    slot.venueSlug &&
    (() => {
      const v = getVenueBySlug(slot.venueSlug);
      return v ? getVenuePath(v.citySlug, v.slug) : null;
    })();
  const guideHref =
    slot.guideSlug &&
    (() => {
      const g = getGuideBySlug(slot.guideSlug!);
      return g ? getGuidePath(g.city, g.slug) : null;
    })();

  return (
    <div className="flex gap-4 sm:gap-6">
      <div className="flex-shrink-0 w-20 sm:w-24 pt-1">
        <span
          className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${
            labelColors[slot.label] ?? "bg-secondary text-muted-foreground"
          }`}
        >
          {slot.label}
        </span>
      </div>
      <div className="flex-1 pb-8 border-l border-border/50 pl-4 sm:pl-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <h4 className="text-base font-semibold text-foreground">
              {slot.title}
            </h4>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
              {slot.description}
            </p>
            {slot.tip && (
              <div className="mt-3 px-3 py-2.5 rounded-lg bg-primary/5 border border-primary/10">
                <p className="text-xs font-medium text-primary mb-0.5">Tip</p>
                <p className="text-xs text-foreground leading-relaxed font-editorial">
                  {slot.tip}
                </p>
              </div>
            )}
            <div className="flex gap-2 mt-3">
              {venueHref && (
                <Link
                  href={venueHref}
                  className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View venue →
                </Link>
              )}
              {guideHref && (
                <Link
                  href={guideHref}
                  className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Read guide →
                </Link>
              )}
            </div>
          </div>
          <div className="w-full sm:w-32 h-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
            <SafeImage
              src={slot.image}
              alt={slot.title}
              width={128}
              height={96}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
