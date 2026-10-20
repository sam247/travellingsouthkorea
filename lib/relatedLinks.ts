/**
 * Related-link blocks for city and guide pages.
 *
 * Every href is a page that is generated and is not a redirect:
 * city hubs, city×category pairs that pass shouldEmitCityCategoryParam
 * (plus Seoul money categories), and guide URLs whose own city path is live.
 * Gated city×category URLs and neighbourhood URLs are not emitted.
 */
import { categories, getCategoryBySlug } from "@/data/categories";
import { cities, getCityBySlug } from "@/data/cities";
import { getGuideBySlug, getGuidesByCity } from "@/data/guides";
import { getNeighbourhoodBySlug } from "@/data/neighbourhoods";
import { getCityCategoryPath, getCityPath, getGuidePath } from "@/lib/canonical";
import { shouldEmitCityCategoryParam } from "@/lib/cityCategoryParams";
import { getMoneyPageContent, MONEY_CATEGORY_SLUGS } from "@/lib/content/moneyPages";
import {
  getProgrammaticGuideSpecs,
  type ProgrammaticGuideSpec,
} from "@/lib/programmaticGuides";

export interface RelatedLink {
  label: string;
  href: string;
}

/** Paths that next.config redirects, so they do not return 200. */
const REDIRECT_SOURCES = new Set<string>([
  "/south-korea/seoul/guides/pc-bang-gaming-seoul",
]);

const GUIDE_FOCUS: Record<string, string[]> = {
  nightlife: ["nightlife", "bars"],
  food: ["restaurants", "food", "cafes"],
  "things-to-do": ["things-to-do"],
};

const BEST_FOR_CATEGORIES: Record<string, string[]> = {
  nightlife: ["nightlife", "bars"],
  food: ["restaurants", "food", "cafes"],
  cafes: ["cafes", "food"],
  shopping: ["things-to-do"],
  culture: ["things-to-do"],
  beaches: ["things-to-do"],
  temples: ["things-to-do"],
  history: ["things-to-do"],
  nature: ["things-to-do"],
  hiking: ["things-to-do"],
  art: ["things-to-do"],
  festivals: ["things-to-do"],
  views: ["things-to-do"],
  family: ["things-to-do", "itineraries"],
  transport: ["itineraries"],
};

const CORE_CATEGORY_SLUGS = [
  "things-to-do",
  "restaurants",
  "cafes",
  "bars",
  "nightlife",
  "food",
  "itineraries",
  "where-to-stay",
  "travel-costs",
  "comparisons",
  "neighbourhoods",
  "travel-tips",
];

let specCache: ProgrammaticGuideSpec[] | null = null;

function programmaticSpecs(): ProgrammaticGuideSpec[] {
  if (!specCache) specCache = getProgrammaticGuideSpecs();
  return specCache;
}

export function liveCityPath(citySlug: string): string | null {
  if (!getCityBySlug(citySlug)) return null;
  const href = getCityPath(citySlug);
  if (REDIRECT_SOURCES.has(href)) return null;
  return href;
}

/** City×category URL only when the page is generated and does not redirect. */
export function liveCityCategoryPath(citySlug: string, categorySlug: string): string | null {
  const category = getCategoryBySlug(categorySlug);
  const money = getMoneyPageContent(citySlug, categorySlug);
  if (!category && !money) return null;
  if (category && !shouldEmitCityCategoryParam(citySlug, categorySlug)) return null;
  const href = getCityCategoryPath(citySlug, categorySlug);
  if (REDIRECT_SOURCES.has(href)) return null;
  return href;
}

/** Guide URL for the guide's own city. Null when the guide is missing or redirected. */
export function liveGuidePath(citySlug: string, guideSlug: string): string | null {
  const href = getGuidePath(citySlug, guideSlug);
  if (REDIRECT_SOURCES.has(href)) return null;
  const guide = getGuideBySlug(guideSlug);
  if (guide?.city === citySlug) return href;
  if (programmaticSpecs().some((spec) => spec.citySlug === citySlug && spec.guideSlug === guideSlug)) {
    return href;
  }
  return null;
}

function naturalCategoryLabel(label: string): string {
  if (!label) return label;
  return label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
}

function categoryLabel(citySlug: string, categorySlug: string): string | null {
  const city = getCityBySlug(citySlug);
  if (!city) return null;
  const category = categories.find((item) => item.slug === categorySlug);
  const money = getMoneyPageContent(citySlug, categorySlug);
  const raw = category?.label ?? money?.label;
  if (!raw) return null;
  return `${naturalCategoryLabel(raw)} in ${city.name}`;
}

function unique(slugs: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const slug of slugs) {
    if (seen.has(slug)) continue;
    seen.add(slug);
    out.push(slug);
  }
  return out;
}

export function relatedCityLinks(citySlug: string, limit = 6): RelatedLink[] {
  const city = getCityBySlug(citySlug);
  if (!city) return [];
  const others = cities.filter((item) => item.slug !== city.slug);
  const interests = new Set(city.bestFor ?? []);
  const sameRegion = others.filter((item) => item.regionSlug === city.regionSlug);
  const sharedInterest = others.filter(
    (item) =>
      item.regionSlug !== city.regionSlug &&
      (item.bestFor ?? []).some((tag) => interests.has(tag))
  );
  const links: RelatedLink[] = [];
  for (const candidate of [...sameRegion, ...sharedInterest]) {
    if (links.length >= limit) break;
    const href = liveCityPath(candidate.slug);
    if (!href) continue;
    links.push({ label: `${candidate.name} travel guide`, href });
  }
  return links;
}

export function relatedCategoryLinks(
  citySlug: string,
  options?: { focusCategory?: string; limit?: number }
): RelatedLink[] {
  const city = getCityBySlug(citySlug);
  if (!city) return [];
  const limit = options?.limit ?? 6;
  const focus = options?.focusCategory ? GUIDE_FOCUS[options.focusCategory] ?? [] : [];
  const fromBestFor = (city.bestFor ?? []).flatMap((tag) => BEST_FOR_CATEGORIES[tag] ?? []);
  const ordered = unique([...focus, ...fromBestFor, ...CORE_CATEGORY_SLUGS, ...MONEY_CATEGORY_SLUGS]);
  const links: RelatedLink[] = [];
  for (const categorySlug of ordered) {
    if (links.length >= limit) break;
    const href = liveCityCategoryPath(citySlug, categorySlug);
    const label = categoryLabel(citySlug, categorySlug);
    if (!href || !label) continue;
    links.push({ label, href });
  }
  return links;
}

function programmaticTitle(spec: ProgrammaticGuideSpec): string {
  const cityName = getCityBySlug(spec.citySlug)?.name ?? spec.citySlug;
  if (spec.type === "city" || !spec.neighbourhoodSlug) {
    return `Best ${spec.categoryLabel} in ${cityName}`;
  }
  const neighbourhoodName =
    getNeighbourhoodBySlug(spec.neighbourhoodSlug)?.name ?? spec.neighbourhoodSlug;
  return `Best ${spec.categoryLabel} in ${neighbourhoodName}, ${cityName}`;
}

interface GuideRef {
  citySlug: string;
  guideSlug: string;
  title: string;
}

function staticGuideRef(slug: string): GuideRef | null {
  const guide = getGuideBySlug(slug);
  if (!guide || !liveGuidePath(guide.city, guide.slug)) return null;
  return { citySlug: guide.city, guideSlug: guide.slug, title: guide.title };
}

function programmaticGuideRef(spec: ProgrammaticGuideSpec): GuideRef | null {
  if (!liveGuidePath(spec.citySlug, spec.guideSlug)) return null;
  return {
    citySlug: spec.citySlug,
    guideSlug: spec.guideSlug,
    title: programmaticTitle(spec),
  };
}

export function relatedGuideLinks(options: {
  citySlug: string;
  currentGuideSlug?: string;
  preferredSlugs?: string[];
  limit?: number;
}): RelatedLink[] {
  const limit = options.limit ?? 6;
  const links: RelatedLink[] = [];
  const seen = new Set<string>();

  const push = (ref: GuideRef | null) => {
    if (!ref || links.length >= limit) return;
    if (ref.guideSlug === options.currentGuideSlug && ref.citySlug === options.citySlug) return;
    const href = liveGuidePath(ref.citySlug, ref.guideSlug);
    if (!href || seen.has(href)) return;
    seen.add(href);
    links.push({ label: ref.title, href });
  };

  for (const slug of options.preferredSlugs ?? []) {
    const spec = programmaticSpecs().find((item) => item.guideSlug === slug);
    push(staticGuideRef(slug) ?? (spec ? programmaticGuideRef(spec) : null));
  }

  for (const guide of getGuidesByCity(options.citySlug)) {
    push(staticGuideRef(guide.slug));
  }
  for (const spec of programmaticSpecs()) {
    if (spec.citySlug !== options.citySlug) continue;
    push(programmaticGuideRef(spec));
  }

  return links;
}
