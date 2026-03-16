/**
 * Development-time guard: city/region slug collision.
 * If a slug exists in both cities and regions, throw a clear error.
 */

export function assertNoCityRegionSlugCollision(
  citySlugs: string[],
  regionSlugs: string[]
): void {
  const citySet = new Set(citySlugs);
  for (const slug of regionSlugs) {
    if (citySet.has(slug)) {
      throw new Error(
        `Slug conflict detected: '${slug}' exists as both region and city. Slugs must be unique.`
      );
    }
  }
}
