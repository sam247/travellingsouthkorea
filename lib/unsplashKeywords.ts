/**
 * Search-query guidance for Unsplash: anchor each query in South Korea / Korean context
 * so results stay on-topic (travel, culture, cinema) rather than generic stock.
 */

import type {
  CinemaArticle,
  CultureArticle,
  CultureArticleCategory,
  FilmLocation,
  TravelTip,
} from "@/types";

const CATEGORY_KEYWORDS: Record<CultureArticleCategory, string> = {
  fashion: "Korean fashion street style Seoul",
  beauty: "Korean beauty skincare Seoul",
  "k-pop": "K-pop concert stage lights Korea",
  nightlife: "Seoul nightlife street neon South Korea",
  food: "Korean food traditional market",
  festivals: "Korean traditional festival lantern",
  lifestyle: "South Korea urban lifestyle Seoul",
};

function compactWords(s: string, maxWords: number): string {
  const words = s
    .replace(/[|/\\]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2)
    .slice(0, maxWords);
  return words.join(" ");
}

/** Travel tips: tags + title nouns + explicit travel anchor */
export function buildTravelTipUnsplashQuery(t: TravelTip): string {
  const tagPart = t.tags.slice(0, 4).join(" ");
  const titlePart = compactWords(t.title, 6);
  return [tagPart, titlePart, "South Korea travel"].filter(Boolean).join(" ").trim();
}

/** Culture articles: category anchor + title fragment */
export function buildCultureArticleUnsplashQuery(a: CultureArticle): string {
  const anchor = CATEGORY_KEYWORDS[a.category] ?? "Korean culture";
  const titlePart = compactWords(a.title, 5);
  return `${anchor} ${titlePart}`.trim();
}

/** Cinema editorial articles (not individual films) */
export function buildCinemaArticleUnsplashQuery(a: CinemaArticle): string {
  const titlePart = compactWords(a.title, 6);
  return `${titlePart} Korean film cinema movie`.trim();
}

export function buildFilmLocationUnsplashQuery(l: FilmLocation): string {
  const titlePart = compactWords(l.title, 7);
  return `${titlePart} Korea film location travel`.trim();
}

export function buildDirectorUnsplashQuery(name: string): string {
  return `${name} Korean film director portrait cinema`.trim();
}

/** City “Explore” category tiles */
export function buildCityCategoryTileQuery(
  cityName: string,
  label: string,
  categorySlug: string
): string {
  const labelLower = label.toLowerCase();
  const city = cityName.trim();

  if (categorySlug === "food") {
    if (labelLower.includes("cafe")) {
      return `${city} cafe coffee interior South Korea`;
    }
    return `${city} Korean restaurant dining South Korea`;
  }

  const byCategory: Record<string, string> = {
    "things-to-do": `${city} tourist attractions landmarks South Korea`,
    nightlife: `${city} nightlife bar street evening South Korea`,
    "travel-tips": `${city} hotel travel accommodation South Korea`,
    itineraries: `${city} travel itinerary South Korea`,
    neighbourhoods: `${city} neighbourhood streets South Korea`,
    bars: `${city} bar nightlife South Korea`,
    restaurants: `${city} Korean restaurant dining South Korea`,
    cafes: `${city} cafe coffee South Korea`,
  };

  return (
    byCategory[categorySlug] ??
    `${city} ${labelLower} travel South Korea`
  );
}

/** Search index: city category rows (no image) */
export function buildSearchCategoryUnsplashQuery(
  title: string,
  cityName?: string
): string {
  const city = cityName?.trim() ?? "South Korea";
  return `${compactWords(title, 8)} ${city} travel`.trim();
}
