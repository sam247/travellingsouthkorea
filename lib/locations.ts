import { islands, getIslandBySlug } from "@/data/islands";
import { parks, getParkBySlug } from "@/data/parks";
import type { Location, LocationType } from "@/types";

function withType<T extends { slug: string }>(item: T, locationType: LocationType): T & { locationType: LocationType } {
  return { ...item, locationType };
}

export function getLocationBySlug(slug: string): Location | null {
  const island = getIslandBySlug(slug);
  if (island) return withType(island, "island");
  const park = getParkBySlug(slug);
  if (park) return withType(park, "park");
  return null;
}

export function getAllLocationSlugs(): string[] {
  return [...islands.map((i) => i.slug), ...parks.map((p) => p.slug)];
}
