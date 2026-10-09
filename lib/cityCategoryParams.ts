/**
 * Shared city×category param gates (travel-tips + neighbourhoods).
 *
 * ONE predicate — used by generateStaticParams, page permanentRedirect,
 * sitemap, hub/sidebar links, and search discovery. Do not duplicate.
 *
 * Policy (Sam 5 Oct 2026 via Eggbot):
 * - travel-tips: emit only when ≥1 tip is scoped to the city via TravelTip.citySlugs
 *   (none tagged today → gate all 45). Gated URLs permanentRedirect → city hub.
 * - neighbourhoods: emit only when getNeighbourhoodsByCity(city).length > 0.
 *   Empty shells permanentRedirect → city hub (consistency / softer UX).
 */
import { cities } from "@/data/cities";
import { categories } from "@/data/categories";
import { getNeighbourhoodsByCity } from "@/data/neighbourhoods";
import { travelTips } from "@/data/travelTips";
import { MONEY_CATEGORY_SLUGS } from "@/lib/content/moneyPages";
import type { TravelTip } from "@/types";

/** Tips explicitly scoped to a city (optional citySlugs on TravelTip). */
export function getTravelTipsForCity(citySlug: string): TravelTip[] {
  return travelTips.filter(
    (tip) => Array.isArray(tip.citySlugs) && tip.citySlugs.includes(citySlug)
  );
}

export function hasCityTravelTipContent(citySlug: string): boolean {
  return getTravelTipsForCity(citySlug).length > 0;
}

export function hasCityNeighbourhoodContent(citySlug: string): boolean {
  return getNeighbourhoodsByCity(citySlug).length > 0;
}

/**
 * Shared predicate: should this city×category pair be emitted as a live route?
 * Returns true for all non-gated categories (bars, restaurants, …).
 */
export function shouldEmitCityCategoryParam(
  citySlug: string,
  categorySlug: string
): boolean {
  if (categorySlug === "travel-tips") {
    return hasCityTravelTipContent(citySlug);
  }
  if (categorySlug === "neighbourhoods") {
    return hasCityNeighbourhoodContent(citySlug);
  }
  return true;
}

/** Static params for city×category pages (money slugs for Seoul included). */
export function getCityCategoryStaticParams(): {
  slug: string;
  categorySlug: string;
}[] {
  const pairs: { slug: string; categorySlug: string }[] = [];
  for (const city of cities) {
    for (const cat of categories) {
      if (shouldEmitCityCategoryParam(city.slug, cat.slug)) {
        pairs.push({ slug: city.slug, categorySlug: cat.slug });
      }
    }
    if (city.slug === "seoul") {
      for (const slug of MONEY_CATEGORY_SLUGS) {
        pairs.push({ slug: city.slug, categorySlug: slug });
      }
    }
  }
  return pairs;
}

/**
 * Gated city×category URLs that must soft-land on the city hub.
 * Used for docs / next.config optional mirrors; runtime uses permanentRedirect.
 */
export function getGatedCityCategoryRedirects(): {
  source: string;
  destination: string;
  permanent: true;
}[] {
  const redirects: {
    source: string;
    destination: string;
    permanent: true;
  }[] = [];
  for (const city of cities) {
    for (const cat of categories) {
      if (!shouldEmitCityCategoryParam(city.slug, cat.slug)) {
        redirects.push({
          source: `/south-korea/${city.slug}/category/${cat.slug}`,
          destination: `/south-korea/${city.slug}`,
          permanent: true,
        });
      }
    }
  }
  return redirects;
}
