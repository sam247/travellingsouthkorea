/**
 * Single source for all internal URLs. Use these helpers everywhere:
 * navigation, breadcrumbs, cards, related content, search results, author pages.
 * No hardcoded URLs in components or pages.
 */

export function getCountryPath(): string {
  return "/south-korea";
}

export function getRegionPath(regionSlug: string): string {
  return `/south-korea/${regionSlug}`;
}

export function getCityPath(citySlug: string): string {
  return `/south-korea/${citySlug}`;
}

export function getNeighbourhoodPath(citySlug: string, neighbourhoodSlug: string): string {
  return `/south-korea/${citySlug}/${neighbourhoodSlug}`;
}

export function getCityCategoryPath(citySlug: string, categorySlug: string): string {
  return `/south-korea/${citySlug}/category/${categorySlug}`;
}

export function getNeighbourhoodCategoryPath(
  citySlug: string,
  neighbourhoodSlug: string,
  categorySlug: string
): string {
  return `/south-korea/${citySlug}/${neighbourhoodSlug}/category/${categorySlug}`;
}

export function getGuidePath(citySlug: string, guideSlug: string): string {
  return `/south-korea/${citySlug}/guides/${guideSlug}`;
}

export function getVenuePath(citySlug: string, venueSlug: string): string {
  return `/south-korea/${citySlug}/venues/${venueSlug}`;
}

export function getItineraryPath(slug: string): string {
  return `/itineraries/${slug}`;
}

export function getTravelTipPath(slug: string): string {
  return `/travel-tips/${slug}`;
}

export function getAuthorPath(slug: string): string {
  return `/authors/${slug}`;
}

export function getMapPath(slug: string): string {
  return `/map/${slug}`;
}

/** Global category (discovery) — not city-scoped */
export function getCategoryPath(categorySlug: string): string {
  return `/category/${categorySlug}`;
}

/** Island or national park location page */
export function getLocationPath(slug: string): string {
  return `/locations/${slug}`;
}
