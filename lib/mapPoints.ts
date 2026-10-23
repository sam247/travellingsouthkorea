import { venues } from "@/data/venues";
import type { City, Guide, Venue } from "@/types";

/** A point that already has coordinates in the content data. */
export interface MapPoint {
  name: string;
  lat: number;
  lng: number;
}

function coord(
  lat: number | undefined,
  lng: number | undefined
): { lat: number; lng: number } | null {
  if (typeof lat !== "number" || typeof lng !== "number") return null;
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  return { lat, lng };
}

function normalizeName(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}

/** Coordinates already stored on the venue dataset, keyed by city and name. */
const venueCoordsByCityAndName = new Map<string, { lat: number; lng: number }>();
for (const venue of venues) {
  const point = coord(venue.lat, venue.lng);
  if (!point) continue;
  venueCoordsByCityAndName.set(`${venue.citySlug}|${normalizeName(venue.name)}`, point);
}

function dedupe(points: MapPoint[]): MapPoint[] {
  const seen = new Set<string>();
  const out: MapPoint[] = [];
  for (const point of points) {
    const key = `${point.name}|${point.lat.toFixed(5)}|${point.lng.toFixed(5)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(point);
  }
  return out;
}

/** City centre (when stored) plus venues in that city that already have coordinates. */
export function mapPointsForCity(city: City, cityVenues: Venue[]): MapPoint[] {
  const points: MapPoint[] = [];
  const centre = coord(city.lat, city.lng);
  if (centre) points.push({ name: city.name, ...centre });
  for (const venue of cityVenues) {
    const point = coord(venue.lat, venue.lng);
    if (point) points.push({ name: venue.name, ...point });
  }
  return dedupe(points);
}

/**
 * Guide venues that already store lat/lng, otherwise the same-named venue
 * in that city when the venue dataset already has coordinates.
 * Unmatched venues are left off the map. Empty when nothing resolves.
 */
export function mapPointsForGuide(guide: Guide): MapPoint[] {
  const points: MapPoint[] = [];
  for (const venue of guide.venues) {
    const point =
      coord(venue.lat, venue.lng) ??
      venueCoordsByCityAndName.get(`${guide.city}|${normalizeName(venue.name)}`) ??
      null;
    if (point) points.push({ name: venue.name, ...point });
  }
  return dedupe(points);
}
