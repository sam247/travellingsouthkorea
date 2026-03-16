import Link from "next/link";
import Image from "next/image";
import { getVenuePath } from "@/lib/canonical";
import type { Venue } from "@/types";

export function VenueListCard({ venue }: { venue: Venue }) {
  const href = getVenuePath(venue.citySlug, venue.slug);
  return (
    <Link
      href={href}
      className="group flex gap-3 sm:gap-4 p-3 rounded-xl bg-card transition-all duration-200 hover:bg-secondary/50"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={venue.image}
          alt={venue.name}
          width={96}
          height={96}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-foreground truncate">
          {venue.name}
        </h3>
        <p className="text-xs text-primary font-medium mt-0.5 capitalize">
          {venue.category}
        </p>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
          {venue.description}
        </p>
        {(venue.priceLevel != null || venue.neighbourhoodSlug != null) && (
          <div className="flex items-center gap-2 mt-1.5">
            {venue.priceLevel != null && (
              <span className="text-[10px] text-muted-foreground">{venue.priceLevel}</span>
            )}
            {venue.priceLevel != null && venue.neighbourhoodSlug != null && (
              <span className="text-[10px] text-muted-foreground">·</span>
            )}
            {venue.neighbourhoodSlug != null && (
              <span className="text-[10px] text-muted-foreground">{venue.neighbourhoodSlug}</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
