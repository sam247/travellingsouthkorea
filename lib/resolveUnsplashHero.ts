import type { CinemaArticle, CultureArticle, FilmLocation, TravelTip } from "@/types";
import { DEFAULT_PLACEHOLDER_IMAGE } from "@/lib/imageConfig";
import { getCachedUnsplashPhoto, type UnsplashAttribution } from "@/lib/unsplashApi";
import {
  buildCinemaArticleUnsplashQuery,
  buildCityCategoryTileQuery,
  buildCultureArticleUnsplashQuery,
  buildFilmLocationUnsplashQuery,
  buildTravelTipUnsplashQuery,
} from "@/lib/unsplashKeywords";

export function isEditorialBlogImage(src: string): boolean {
  return src.includes("/images/blogs/");
}

export type ResolvedHero = {
  src: string;
  attribution?: UnsplashAttribution;
};

export async function resolveTravelTipHero(t: TravelTip): Promise<ResolvedHero> {
  if (isEditorialBlogImage(t.image)) {
    return { src: t.image };
  }
  const query = buildTravelTipUnsplashQuery(t);
  const photo = await getCachedUnsplashPhoto(query);
  if (!photo) {
    return { src: t.image };
  }
  return { src: photo.url, attribution: photo.attribution };
}

export async function resolveCultureArticleHero(a: CultureArticle): Promise<ResolvedHero> {
  const query = buildCultureArticleUnsplashQuery(a);
  const photo = await getCachedUnsplashPhoto(query);
  if (!photo) {
    return { src: a.heroImage };
  }
  return { src: photo.url, attribution: photo.attribution };
}

export async function resolveCinemaArticleHero(a: CinemaArticle): Promise<ResolvedHero> {
  const query = buildCinemaArticleUnsplashQuery(a);
  const photo = await getCachedUnsplashPhoto(query);
  if (!photo) {
    return { src: a.heroImage };
  }
  return { src: photo.url, attribution: photo.attribution };
}

export async function resolveFilmLocationHero(l: FilmLocation): Promise<ResolvedHero> {
  const query = buildFilmLocationUnsplashQuery(l);
  const photo = await getCachedUnsplashPhoto(query);
  if (!photo) {
    return { src: l.heroImage };
  }
  return { src: photo.url, attribution: photo.attribution };
}

/** Featured cards / related tips: reuse same query as full page */
export async function resolveTravelTipThumbnail(t: TravelTip): Promise<string> {
  const r = await resolveTravelTipHero(t);
  return r.src;
}

export type CityExploreCard = { label: string; category: string; image: string };

const DEFAULT_ACTION_LABELS: { label: string; category: string }[] = [
  { label: "Things To Do", category: "things-to-do" },
  { label: "Nightlife", category: "nightlife" },
  { label: "Restaurants", category: "food" },
  { label: "Cafes", category: "food" },
  { label: "Where To Stay", category: "travel-tips" },
  { label: "Travel Tips", category: "travel-tips" },
];

export async function resolveCityExploreCategoryImages(
  cityName: string
): Promise<CityExploreCard[]> {
  const out: CityExploreCard[] = [];
  for (const row of DEFAULT_ACTION_LABELS) {
    const query = buildCityCategoryTileQuery(cityName, row.label, row.category);
    const photo = await getCachedUnsplashPhoto(query);
    out.push({
      label: row.label,
      category: row.category,
      image: photo?.url ?? DEFAULT_PLACEHOLDER_IMAGE,
    });
  }
  return out;
}
