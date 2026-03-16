import Image from "next/image";
import type { GuideVenue } from "@/types";

export function VenueCard({ venue }: { venue: GuideVenue }) {
  return (
    <div
      className="rounded-xl bg-card overflow-hidden"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-48 sm:min-w-48 aspect-[4/3] sm:aspect-auto overflow-hidden">
          <Image
            src={venue.image}
            alt={venue.name}
            width={192}
            height={144}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-4 sm:p-5 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-semibold text-foreground">
              {venue.name}
            </h3>
            <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
              {venue.priceLevel}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
            {venue.description}
          </p>
          <p className="text-xs text-muted-foreground mt-2">{venue.address}</p>
          {venue.tip && (
            <div className="mt-3 px-3 py-2.5 rounded-lg bg-primary/5 border border-primary/10">
              <p className="text-xs font-medium text-primary mb-0.5">
                Insider Tip
              </p>
              <p className="text-xs text-foreground leading-relaxed font-editorial">
                {venue.tip}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
