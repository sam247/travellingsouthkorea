"use client";

import { useState } from "react";
import { VenueListCard } from "@/components/VenueListCard";
import { MapPlaceholder, type MapMarker } from "@/components/MapPlaceholder";
import type { Venue } from "@/types";

const filterOptions = ["All", "Bars", "Clubs", "Restaurants", "Cafes", "Attractions"] as const;
const categoryMap: Record<string, string[]> = {
  All: [],
  Bars: ["bar"],
  Clubs: ["club"],
  Restaurants: ["restaurant"],
  Cafes: ["cafe"],
  Attractions: ["attraction"],
};

interface MapDiscoveryClientProps {
  cityName: string;
  citySlug: string;
  venues: Venue[];
}

export function MapDiscoveryClient({ cityName, citySlug, venues }: MapDiscoveryClientProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredVenues =
    activeFilter === "All"
      ? venues
      : venues.filter((v) => categoryMap[activeFilter]?.includes(v.category));

  const markers: MapMarker[] = filteredVenues
    .filter((v): v is Venue & { lat: number; lng: number } => v.lat != null && v.lng != null)
    .map((v) => ({
      name: v.name,
      lat: v.lat,
      lng: v.lng,
      category: v.category,
    }));

  return (
    <div className="pt-14 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{cityName} Map</h1>
      </div>

      <div className="sticky top-14 sm:top-16 z-30 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-3/5 h-[50vh] lg:h-[calc(100vh-8rem)] lg:sticky lg:top-28 flex items-center justify-center">
          <MapPlaceholder
            label="Interactive map coming soon"
            venueMarkers={markers}
          />
        </div>

        <div className="lg:w-2/5 p-4 sm:p-6">
          <p className="text-sm text-muted-foreground mb-4">
            {filteredVenues.length} venue{filteredVenues.length !== 1 ? "s" : ""}
          </p>
          <div className="flex flex-col gap-3">
            {filteredVenues.length > 0 ? (
              filteredVenues.map((v) => <VenueListCard key={v.slug} venue={v} />)
            ) : (
              <p className="text-sm text-muted-foreground py-10 text-center">
                No venues found for this filter.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
