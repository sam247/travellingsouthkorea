/**
 * Global search index for the site. Builds a flat list of all content with canonical hrefs
 * (via lib/canonical helpers only). SearchOverlay uses getSearchIndex/searchQuery for
 * grouped, prioritised results. Result order: cities, neighbourhoods, guides, venues,
 * itineraries, travel tips.
 */

import { getCityPath, getNeighbourhoodPath, getCityCategoryPath, getNeighbourhoodCategoryPath, getGuidePath, getVenuePath, getItineraryPath, getTravelTipPath } from "@/lib/canonical";
import { cities } from "@/data/cities";
import { neighbourhoods } from "@/data/neighbourhoods";
import { guides } from "@/data/guides";
import { getProgrammaticGuideSpecs, buildProgrammaticGuide } from "@/lib/programmaticGuides";
import { venues } from "@/data/venues";
import { itineraries } from "@/data/itineraries";
import { travelTips } from "@/data/travelTips";
import { getCategoryBySlug } from "@/data/categories";

export type SearchResultType = "city" | "neighbourhood" | "guide" | "venue" | "itinerary" | "travel-tip" | "category";

export type ContentType = "city" | "neighbourhood" | "guide" | "venue" | "itinerary" | "travel-tip" | "category";

export interface SearchEntry {
  type: SearchResultType;
  contentType: ContentType;
  title: string;
  slug: string;
  citySlug?: string;
  href: string;
  subtitle?: string;
  image?: string;
}

function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  cities.forEach((c) => {
    entries.push({
      type: "city",
      contentType: "city",
      title: c.name,
      slug: c.slug,
      href: getCityPath(c.slug),
      citySlug: c.slug,
      subtitle: c.tagline,
      image: c.image,
    });
  });

  neighbourhoods.forEach((n) => {
    entries.push({
      type: "neighbourhood",
      contentType: "neighbourhood",
      title: n.name,
      slug: n.slug,
      citySlug: n.citySlug,
      href: getNeighbourhoodPath(n.citySlug, n.slug),
      subtitle: n.vibe,
      image: n.image,
    });
  });

  guides.forEach((g) => {
    entries.push({
      type: "guide",
      contentType: "guide",
      title: g.title,
      slug: g.slug,
      citySlug: g.city,
      href: getGuidePath(g.city, g.slug),
      subtitle: g.neighbourhood,
      image: g.image,
    });
  });

  getProgrammaticGuideSpecs().forEach((spec) => {
    const guide = buildProgrammaticGuide(spec);
    entries.push({
      type: "guide",
      contentType: "guide",
      title: guide.title,
      slug: spec.guideSlug,
      citySlug: spec.citySlug,
      href: getGuidePath(spec.citySlug, spec.guideSlug),
      subtitle: spec.categoryLabel,
      image: guide.image,
    });
  });

  venues.forEach((v) => {
    entries.push({
      type: "venue",
      contentType: "venue",
      title: v.name,
      slug: v.slug,
      citySlug: v.citySlug,
      href: getVenuePath(v.citySlug, v.slug),
      subtitle: v.category,
      image: v.image,
    });
  });

  itineraries.forEach((i) => {
    entries.push({
      type: "itinerary",
      contentType: "itinerary",
      title: i.title,
      slug: i.slug,
      citySlug: i.citySlug,
      href: getItineraryPath(i.slug),
      subtitle: `${i.days} days`,
      image: i.image,
    });
  });

  travelTips.forEach((t) => {
    entries.push({
      type: "travel-tip",
      contentType: "travel-tip",
      title: t.title,
      slug: t.slug,
      href: getTravelTipPath(t.slug),
      subtitle: t.summary.slice(0, 60),
      image: t.image,
    });
  });

  const cityCategorySlugs = ["bars", "restaurants", "cafes", "things-to-do", "itineraries", "travel-tips", "neighbourhoods"];
  cities.forEach((c) => {
    cityCategorySlugs.forEach((categorySlug) => {
      const category = getCategoryBySlug(categorySlug);
      const label = category?.label ?? categorySlug;
      entries.push({
        type: "category",
        contentType: "category",
        title: `${label} in ${c.name}`,
        slug: `${c.slug}-${categorySlug}`,
        citySlug: c.slug,
        href: getCityCategoryPath(c.slug, categorySlug),
      });
    });
  });

  const neighbourhoodCategorySlugs = ["bars", "restaurants", "cafes", "things-to-do"];
  neighbourhoods.forEach((n) => {
    neighbourhoodCategorySlugs.forEach((categorySlug) => {
      const category = getCategoryBySlug(categorySlug);
      const label = category?.label ?? categorySlug;
      entries.push({
        type: "category",
        contentType: "category",
        title: `${label} in ${n.name}`,
        slug: `${n.citySlug}-${n.slug}-${categorySlug}`,
        citySlug: n.citySlug,
        href: getNeighbourhoodCategoryPath(n.citySlug, n.slug, categorySlug),
      });
    });
  });

  return entries;
}

let cachedIndex: SearchEntry[] | null = null;

export function getSearchIndex(): SearchEntry[] {
  if (!cachedIndex) cachedIndex = buildSearchIndex();
  return cachedIndex;
}

/** Priority order: cities, neighbourhoods, guides, venues, itineraries, travel tips, category */
const typeOrder: Record<SearchResultType, number> = {
  city: 0,
  neighbourhood: 1,
  guide: 2,
  venue: 3,
  itinerary: 4,
  "travel-tip": 5,
  category: 6,
};

export function searchQuery(query: string, limitPerType: number = 4): Map<SearchResultType, SearchEntry[]> {
  const q = query.toLowerCase().trim();
  const index = getSearchIndex();
  const results = new Map<SearchResultType, SearchEntry[]>();

  if (!q) return results;

  const byType: Record<SearchResultType, SearchEntry[]> = {
    city: [],
    neighbourhood: [],
    guide: [],
    venue: [],
    itinerary: [],
    "travel-tip": [],
    category: [],
  };

  for (const entry of index) {
    const match =
      entry.title.toLowerCase().includes(q) ||
      (entry.subtitle?.toLowerCase().includes(q));
    if (match) {
      const list = byType[entry.type];
      if (list.length < limitPerType) list.push(entry);
    }
  }

  const order: SearchResultType[] = [
    "city",
    "neighbourhood",
    "guide",
    "venue",
    "itinerary",
    "travel-tip",
    "category",
  ];
  order.forEach((type) => {
    if (byType[type].length > 0) results.set(type, byType[type]);
  });

  return results;
}
