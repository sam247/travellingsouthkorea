/**
 * Slug-based image paths for all content types.
 * Convention: local files under public/images/{type}/; fallback applied in UI.
 */

export type ContentImageType =
  | "city"
  | "neighbourhood"
  | "guide"
  | "culture"
  | "cinema"
  | "venue";

export type ImageVariant = "hero" | "1" | "2";

/** Hero path for cities: /images/cities/{citySlug}.jpg */
export function getCityImagePath(citySlug: string): string {
  return `/images/cities/${citySlug}.jpg`;
}

/** Hero path for neighbourhoods: /images/neighbourhoods/{citySlug}-{neighbourhoodSlug}.jpg */
export function getNeighbourhoodImagePath(
  citySlug: string,
  neighbourhoodSlug: string
): string {
  return `/images/neighbourhoods/${citySlug}-${neighbourhoodSlug}.jpg`;
}

/** Guide: hero = -hero.jpg, supporting = -1.jpg, -2.jpg */
export function getGuideImagePath(
  guideSlug: string,
  variant: "hero" | "1" | "2" = "hero"
): string {
  const suffix = variant === "hero" ? "hero" : variant;
  return `/images/guides/${guideSlug}-${suffix}.jpg`;
}

/** Culture article: -hero.jpg, -1.jpg, -2.jpg */
export function getCultureImagePath(
  cultureSlug: string,
  variant: "hero" | "1" | "2" = "hero"
): string {
  const suffix = variant === "hero" ? "hero" : variant;
  return `/images/culture/${cultureSlug}-${suffix}.jpg`;
}

/** Cinema (film/location/article): -hero.jpg, -1.jpg, -2.jpg */
export function getCinemaImagePath(
  cinemaSlug: string,
  variant: "hero" | "1" | "2" = "hero"
): string {
  const suffix = variant === "hero" ? "hero" : variant;
  return `/images/cinema/${cinemaSlug}-${suffix}.jpg`;
}

/** Venue thumbnail: /images/venues/{venueSlug}.jpg */
export function getVenueImagePath(venueSlug: string): string {
  return `/images/venues/${venueSlug}.jpg`;
}

/** Region hero: /images/regions/{regionSlug}.jpg */
export function getRegionImagePath(regionSlug: string): string {
  return `/images/regions/${regionSlug}.jpg`;
}

/** Location (park or island) hero: /images/locations/{locationSlug}.jpg */
export function getLocationImagePath(locationSlug: string): string {
  return `/images/locations/${locationSlug}.jpg`;
}

/** Itinerary hero: /images/itineraries/{itinerarySlug}.jpg */
export function getItineraryImagePath(itinerarySlug: string): string {
  return `/images/itineraries/${itinerarySlug}.jpg`;
}

/** Travel tip hero: /images/travel-tips/{tipSlug}.jpg */
export function getTravelTipImagePath(tipSlug: string): string {
  return `/images/travel-tips/${tipSlug}.jpg`;
}

/** Central helper: get path by type and slug(s). For neighbourhoods pass citySlug as first slug and neighbourhoodSlug as second. */
export function getContentImageUrl(
  type: ContentImageType,
  slugOrCitySlug: string,
  variant?: ImageVariant,
  neighbourhoodSlug?: string
): string {
  switch (type) {
    case "city":
      return getCityImagePath(slugOrCitySlug);
    case "neighbourhood":
      if (!neighbourhoodSlug) return getNeighbourhoodImagePath(slugOrCitySlug, slugOrCitySlug);
      return getNeighbourhoodImagePath(slugOrCitySlug, neighbourhoodSlug);
    case "guide":
      return getGuideImagePath(slugOrCitySlug, variant ?? "hero");
    case "culture":
      return getCultureImagePath(slugOrCitySlug, variant ?? "hero");
    case "cinema":
      return getCinemaImagePath(slugOrCitySlug, variant ?? "hero");
    case "venue":
      return getVenueImagePath(slugOrCitySlug);
    default:
      return getCityImagePath(slugOrCitySlug);
  }
}
