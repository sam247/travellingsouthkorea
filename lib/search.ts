/**
 * Global search index for the site. Builds a flat list of all content with canonical hrefs
 * (via lib/canonical helpers only). SearchOverlay uses getSearchIndex/searchQuery for
 * grouped, prioritised results. Result order: cities, neighbourhoods, guides, venues,
 * itineraries, travel tips.
 */

import {
  getCityPath,
  getNeighbourhoodPath,
  getCityCategoryPath,
  getNeighbourhoodCategoryPath,
  getGuidePath,
  getVenuePath,
  getItineraryPath,
  getTravelTipPath,
  getCultureArticlePath,
  getCinemaPath,
  getCinemaFilmPath,
  getCinemaDirectorPath,
  getCinemaLocationPath,
  getCinemaArticlePath,
} from "@/lib/canonical";
import { cities } from "@/data/cities";
import { getAllCultureArticles } from "@/data/cultureArticles";
import { neighbourhoods } from "@/data/neighbourhoods";
import { guides } from "@/data/guides";
import { getProgrammaticGuideSpecs, buildProgrammaticGuide } from "@/lib/programmaticGuides";
import { venues } from "@/data/venues";
import { itineraries } from "@/data/itineraries";
import { travelTips } from "@/data/travelTips";
import { getCategoryBySlug } from "@/data/categories";
import { getAllFilms } from "@/data/films";
import { getAllDirectors } from "@/data/directors";
import { getAllFilmLocations } from "@/data/filmLocations";
import { getAllCinemaArticles } from "@/data/cinemaArticles";

export type SearchResultType = "city" | "neighbourhood" | "guide" | "venue" | "itinerary" | "travel-tip" | "category" | "culture" | "cinema";

export type ContentType = "city" | "neighbourhood" | "guide" | "venue" | "itinerary" | "travel-tip" | "category" | "culture" | "cinema";

export interface SearchEntry {
  type: SearchResultType;
  contentType: ContentType;
  title: string;
  slug: string;
  citySlug?: string;
  href: string;
  subtitle?: string;
  image?: string;
  /** Extra text used for matching only (tags, summary keywords, slug); not shown in UI */
  matchText?: string;
}

/** Display label for a search result type (short list UI, overlays). */
export const SEARCH_TYPE_LABELS: Record<SearchResultType, string> = {
  city: "Cities",
  neighbourhood: "Neighbourhoods",
  guide: "Guides",
  venue: "Venues",
  itinerary: "Itineraries",
  "travel-tip": "Travel Tips",
  culture: "Culture",
  cinema: "Cinema",
  category: "Categories",
};

function matchesEntry(entry: SearchEntry, q: string): boolean {
  const ql = q.toLowerCase();
  return (
    entry.title.toLowerCase().includes(ql) ||
    !!entry.subtitle?.toLowerCase().includes(ql) ||
    !!entry.matchText?.toLowerCase().includes(ql)
  );
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
      matchText: `${g.summary} ${g.tags.join(" ")} ${g.category} ${g.city}`,
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
      matchText: `${guide.summary} ${guide.tags.join(" ")} ${spec.categoryLabel}`,
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
      subtitle: t.tags.length > 0 ? t.tags.join(" · ") : t.summary.slice(0, 72),
      image: t.image,
      matchText: `${t.slug} ${t.summary} ${t.tags.join(" ")}`,
    });
  });

  getAllCultureArticles().forEach((a) => {
    entries.push({
      type: "culture",
      contentType: "culture",
      title: a.title,
      slug: a.slug,
      href: getCultureArticlePath(a.slug),
      subtitle: a.category,
      image: a.heroImage,
    });
  });

  entries.push({
    type: "cinema",
    contentType: "cinema",
    title: "Cinema",
    slug: "cinema",
    href: getCinemaPath(),
    subtitle: "Korean film, directors and filming locations",
  });
  getAllFilms().forEach((f) => {
    entries.push({
      type: "cinema",
      contentType: "cinema",
      title: f.title,
      slug: f.slug,
      href: getCinemaFilmPath(f.slug),
      subtitle: `${f.year} · ${f.genres.slice(0, 2).join(", ")}`,
      image: f.heroImage,
    });
  });
  getAllDirectors().forEach((d) => {
    entries.push({
      type: "cinema",
      contentType: "cinema",
      title: d.name,
      slug: d.slug,
      href: getCinemaDirectorPath(d.slug),
      subtitle: "Director",
      image: undefined,
    });
  });
  getAllFilmLocations().forEach((l) => {
    entries.push({
      type: "cinema",
      contentType: "cinema",
      title: l.title,
      slug: l.slug,
      href: getCinemaLocationPath(l.slug),
      subtitle: l.summary.slice(0, 60),
      image: l.heroImage,
    });
  });
  getAllCinemaArticles().forEach((a) => {
    entries.push({
      type: "cinema",
      contentType: "cinema",
      title: a.title,
      slug: a.slug,
      href: getCinemaArticlePath(a.slug),
      subtitle: a.summary.slice(0, 60),
      image: a.heroImage,
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

/** Flat list of matches across all types, in display priority order (for homepage search bar). */
export function searchQueryFlat(query: string, maxResults: number = 12): SearchEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const index = getSearchIndex();
  const order: SearchResultType[] = [
    "city",
    "neighbourhood",
    "guide",
    "venue",
    "itinerary",
    "travel-tip",
    "culture",
    "cinema",
    "category",
  ];
  const out: SearchEntry[] = [];
  for (const type of order) {
    for (const entry of index) {
      if (entry.type !== type || !matchesEntry(entry, q)) continue;
      out.push(entry);
      if (out.length >= maxResults) return out;
    }
  }
  return out;
}

/** Priority order: cities, neighbourhoods, guides, venues, itineraries, travel tips, culture, cinema, category */
const typeOrder: Record<SearchResultType, number> = {
  city: 0,
  neighbourhood: 1,
  guide: 2,
  venue: 3,
  itinerary: 4,
  "travel-tip": 5,
  culture: 6,
  cinema: 7,
  category: 8,
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
    culture: [],
    cinema: [],
    category: [],
  };

  for (const entry of index) {
    if (matchesEntry(entry, q)) {
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
    "culture",
    "cinema",
    "category",
  ];
  order.forEach((type) => {
    if (byType[type].length > 0) results.set(type, byType[type]);
  });

  return results;
}
