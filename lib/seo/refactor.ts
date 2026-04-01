import { getCityBySlug } from "@/data/cities";
import { getGuidesByCity, guides } from "@/data/guides";
import { getNeighbourhoodsByCity } from "@/data/neighbourhoods";
import { getItinerariesByCity } from "@/data/itineraries";
import {
  getCityCategoryPath,
  getCityPath,
  getGuidePath,
  getItineraryPath,
  getNeighbourhoodCategoryPath,
  getNeighbourhoodPath,
} from "@/lib/canonical";
import type { Guide } from "@/types";
import { MONEY_CATEGORY_SLUGS, isMoneyCategorySlug } from "@/lib/content/moneyPages";

export type ScopedPageType = "guides" | "activity" | "category";
export type LinkTier = "tier1" | "tier2" | "tier3";
export type RelatedBlockType =
  | "you_might_also_like"
  | "nearby_things"
  | "plan_your_trip"
  | "recently_updated";

export interface SeoIntentSection {
  heading: string;
  paragraphs: string[];
  lowSpecificity: boolean;
}

export interface InternalLinkCandidate {
  href: string;
  label: string;
  tier: LinkTier;
}

export interface RelatedBlockLink extends InternalLinkCandidate {
  blockType: RelatedBlockType;
}

export interface SeoRelatedBlocks {
  youMightAlsoLike: RelatedBlockLink[];
  nearbyThings: RelatedBlockLink[];
  planYourTrip: RelatedBlockLink[];
}

export interface SeoTitleResult {
  baselineTitle: string;
  title: string;
  similarity: number;
  isSimilaritySafe: boolean;
}

export interface SeoScoreResult {
  score: number;
  band: "weak" | "acceptable" | "strong";
  detail: {
    intentCoverage: number;
    internalLinks: number;
    uniquenessSignals: number;
    nextStepPresence: number;
  };
}

const DEFAULT_SCOPE_PREFIX = "/south-korea/seoul/";
const CATEGORY_SLUGS = ["bars", "restaurants", "cafes", "things-to-do"] as const;

const titleStopWords = new Set([
  "the",
  "a",
  "an",
  "in",
  "for",
  "and",
  "to",
  "of",
  "south",
  "korea",
  "travel",
  "guide",
]);

function envOn(name: string, fallback = false): boolean {
  const raw = process.env[name];
  if (raw == null) return fallback;
  const value = raw.trim().toLowerCase();
  return value === "1" || value === "true" || value === "yes" || value === "on";
}

function parsePageTypes(raw: string | undefined): Set<ScopedPageType> {
  const source = raw ?? "activity,guides,category";
  return new Set(
    source
      .split(",")
      .map((x) => x.trim())
      .filter((x): x is ScopedPageType => x === "activity" || x === "guides" || x === "category")
  );
}

export function isSeoRefactorEnabledForPath(
  path: string,
  citySlug: string,
  pageType: ScopedPageType
): boolean {
  if (!envOn("ENABLE_SEO_REFACTOR", false)) return false;
  if (citySlug !== "seoul") return false;
  const scopePrefix = process.env.SEO_REFACTOR_SCOPE_PREFIX ?? DEFAULT_SCOPE_PREFIX;
  if (!path.startsWith(scopePrefix)) return false;
  const enabledTypes = parsePageTypes(process.env.SEO_REFACTOR_PAGE_TYPES);
  return enabledTypes.has(pageType);
}

function hash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function pickByHash<T>(seed: string, arr: readonly T[]): T {
  return arr[hash(seed) % arr.length]!;
}

function titleTokens(input: string): Set<string> {
  return new Set(
    input
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((t) => t.length > 1 && !titleStopWords.has(t))
  );
}

export function titleSimilarity(a: string, b: string): number {
  const ta = titleTokens(a);
  const tb = titleTokens(b);
  if (ta.size === 0 || tb.size === 0) return 0;
  let intersection = 0;
  Array.from(ta).forEach((tok) => {
    if (tb.has(tok)) intersection++;
  });
  const union = ta.size + tb.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

function buildTitleFromVariants(seed: string, variants: string[]): string {
  return pickByHash(seed, variants);
}

export function buildGuideSeoTitle(guide: Guide, cityName: string): SeoTitleResult {
  const baselineTitle = `${guide.title} | ${cityName} | South Korea Travel`;
  const keyword = guide.title;
  const variants = [
    `${keyword} in ${cityName} - Prices, Tips & Is It Worth It? | South Korea Travel`,
    `${keyword} in ${cityName} - What It Costs, How It Works & Local Tips | South Korea Travel`,
    `${keyword} in ${cityName} - Is It Worth It for Travelers? | South Korea Travel`,
  ];
  const title = buildTitleFromVariants(`guide:${guide.slug}`, variants);
  const similarity = titleSimilarity(baselineTitle, title);
  const isSimilaritySafe = similarity >= 0.38;
  return {
    baselineTitle,
    title: isSimilaritySafe ? title : baselineTitle,
    similarity,
    isSimilaritySafe,
  };
}

export function buildCategorySeoTitle(
  cityName: string,
  categoryLabel: string,
  slugKey: string
): SeoTitleResult {
  const baselineTitle = `${categoryLabel} in ${cityName} | South Korea Travel`;
  const keyword = `${categoryLabel} in ${cityName}`;
  const variants = [
    `${keyword} - Prices, Local Tips & What to Expect | South Korea Travel`,
    `${keyword} - Is It Worth It? Costs, Areas & Tips | South Korea Travel`,
    `${keyword} - How It Works, Budget Tips & Best Picks | South Korea Travel`,
  ];
  const title = buildTitleFromVariants(`category:${slugKey}`, variants);
  const similarity = titleSimilarity(baselineTitle, title);
  const isSimilaritySafe = similarity >= 0.38;
  return {
    baselineTitle,
    title: isSimilaritySafe ? title : baselineTitle,
    similarity,
    isSimilaritySafe,
  };
}

function includesEntityToken(line: string, tokens: string[]): boolean {
  const text = line.toLowerCase();
  return tokens.some((tok) => text.includes(tok.toLowerCase()));
}

function makeIntentSection(
  heading: string,
  seed: string,
  sentenceA: string[],
  sentenceB: string[],
  entityTokens: string[]
): SeoIntentSection {
  const first = pickByHash(`${seed}:a`, sentenceA);
  const second = pickByHash(`${seed}:b`, sentenceB);
  const paragraphs = [first, second];
  const lowSpecificity = !paragraphs.some((p) => includesEntityToken(p, entityTokens));
  return { heading, paragraphs, lowSpecificity };
}

export function buildGuideIntentSections(guide: Guide, cityName: string): SeoIntentSection[] {
  const area = guide.neighbourhood || cityName;
  const tag = guide.tags[0] ?? "travel";
  const entityTokens = [cityName, area, guide.priceRange, tag, guide.nearestMetro];
  return [
    makeIntentSection(
      `Pricing for ${guide.title}`,
      `guide-pricing:${guide.slug}`,
      [
        `${guide.title} in ${area} usually sits in the ${guide.priceRange} range, with premium spots in ${cityName} costing more at peak hours.`,
        `For ${guide.title}, most travelers in ${cityName} spend within ${guide.priceRange}, especially around ${area}.`,
      ],
      [
        `If you're budgeting, plan weekday visits in ${area} and reserve busier nights for one standout venue.`,
        `A practical split is one flagship stop plus one lower-cost option near ${guide.nearestMetro}.`,
      ],
      entityTokens
    ),
    makeIntentSection(
      `Tips for ${guide.title}`,
      `guide-tips:${guide.slug}`,
      [
        `Start near ${guide.nearestMetro} and walk through ${area} so you can compare atmosphere before committing.`,
        `In ${area}, opening times vary by venue, so verify hours before moving between stops.`,
      ],
      [
        `Use this guide as a shortlist, then prioritize places that match your ${tag.toLowerCase()} preferences.`,
        `For smoother routing in ${cityName}, group nearby venues and avoid cross-city hops at night.`,
      ],
      entityTokens
    ),
    makeIntentSection(
      `Is ${guide.title} worth it?`,
      `guide-worth:${guide.slug}`,
      [
        `Yes for most visitors: ${guide.title} reflects the core ${tag.toLowerCase()} experience people look for in ${cityName}.`,
        `${guide.title} is worth it if you want a focused ${tag.toLowerCase()} route in ${area} without trial-and-error.`,
      ],
      [
        `If you prefer quieter alternatives, use the nearby links below to branch into less crowded districts.`,
        `If your budget is tight, combine one top pick with lower-cost options in the same area.`,
      ],
      entityTokens
    ),
    makeIntentSection(
      `How ${guide.title} works`,
      `guide-how:${guide.slug}`,
      [
        `This page is designed as a step-by-step shortlist: review highlights, shortlist venues, then map your route from ${guide.nearestMetro}.`,
        `Use this guide in three steps: pick the vibe, filter by ${guide.priceRange} budget, then cluster stops around ${area}.`,
      ],
      [
        `After this page, move to nearby things and plan-your-trip links to keep your Seoul itinerary connected.`,
        `Follow the related blocks to add itineraries and category pages before finalizing your day plan.`,
      ],
      entityTokens
    ),
  ];
}

export function buildAreaIntentSections(
  cityName: string,
  areaName: string,
  categoryLabel: string,
  seedKey: string
): SeoIntentSection[] {
  const entityTokens = [cityName, areaName, categoryLabel];
  return [
    makeIntentSection(
      `Best things to do in ${areaName}`,
      `area-best:${seedKey}`,
      [
        `${areaName} is strongest for ${categoryLabel.toLowerCase()} around its busiest streets, so start with the highest-density pockets first.`,
        `For ${categoryLabel.toLowerCase()}, ${areaName} has the best options near the most walkable strips and transit links.`,
      ],
      [
        `A good sequence is one anchor stop, one nearby backup, and one optional add-on if timing allows.`,
        `Use the nearby block mid-page to expand into adjacent options without leaving ${cityName}.`,
      ],
      entityTokens
    ),
    makeIntentSection(
      `Where to stay near ${areaName}`,
      `area-stay:${seedKey}`,
      [
        `If ${categoryLabel.toLowerCase()} is your focus, stay within easy transit reach of ${areaName} to reduce evening transfer time.`,
        `For travelers prioritizing ${categoryLabel.toLowerCase()}, areas close to ${areaName} keep your schedule efficient.`,
      ],
      [
        `Compare nightlife-heavy vs quieter streets depending on your return time and comfort level.`,
        `Pair your stay choice with the plan-your-trip links so your route stays concentrated.`,
      ],
      entityTokens
    ),
    makeIntentSection(
      `Is ${areaName} worth visiting?`,
      `area-worth:${seedKey}`,
      [
        `Yes for most visitors: ${areaName} delivers one of the clearest ${categoryLabel.toLowerCase()} clusters in ${cityName}.`,
        `${areaName} is worth visiting when you want reliable options in one area without long transit gaps.`,
      ],
      [
        `If crowds are a concern, use weekday slots and rotate to secondary options from the related links.`,
        `For broader trip value, combine this area with one itinerary and one money page before final planning.`,
      ],
      entityTokens
    ),
  ];
}

function dedupeLinks(links: InternalLinkCandidate[]): InternalLinkCandidate[] {
  const seen = new Set<string>();
  const out: InternalLinkCandidate[] = [];
  for (const link of links) {
    if (seen.has(link.href)) continue;
    seen.add(link.href);
    out.push(link);
  }
  return out;
}

function supportsCategorySlug(slug: string): boolean {
  return CATEGORY_SLUGS.includes(slug as (typeof CATEGORY_SLUGS)[number]) || isMoneyCategorySlug(slug);
}

function cityCoreGuide(citySlug: string): Guide | undefined {
  return getGuidesByCity(citySlug)[0];
}

function buildAnchor(keyword: string, city: string, area?: string): string {
  const variants = area
    ? [`best ${keyword} in ${area}`, `${keyword} in ${city}`, `best ${keyword} in ${city}`]
    : [`${keyword} in ${city}`, `best ${keyword} in ${city}`, `${keyword} in ${city}`];
  return pickByHash(`${keyword}:${city}:${area ?? "none"}`, variants);
}

function deriveClusterKey(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  return parts.slice(0, 5).join("/");
}

export function buildSeoulScopedLinksForGuide(guide: Guide): {
  allLinks: InternalLinkCandidate[];
  relatedBlocks: SeoRelatedBlocks;
} {
  const citySlug = guide.city;
  const city = getCityBySlug(citySlug);
  const cityName = city?.name ?? citySlug;
  const currentHref = getGuidePath(citySlug, guide.slug);
  const coreGuide = cityCoreGuide(citySlug);
  const clusterKey = deriveClusterKey(currentHref);

  const tier1: InternalLinkCandidate[] = [];
  tier1.push({
    href: getCityPath(citySlug),
    label: buildAnchor("things to do", cityName),
    tier: "tier1",
  });
  if (coreGuide && coreGuide.slug !== guide.slug) {
    tier1.push({
      href: getGuidePath(citySlug, coreGuide.slug),
      label: buildAnchor(coreGuide.tags[0]?.toLowerCase() ?? "guide", cityName, coreGuide.neighbourhood),
      tier: "tier1",
    });
  }
  for (const g of getGuidesByCity(citySlug)) {
    const href = getGuidePath(citySlug, g.slug);
    if (href === currentHref) continue;
    if (tier1.length >= 4) break;
    tier1.push({
      href,
      label: buildAnchor(g.category.replace(/-/g, " "), cityName, g.neighbourhood),
      tier: "tier1",
    });
  }

  const tier2: InternalLinkCandidate[] = getItinerariesByCity(citySlug).map((it) => ({
    href: getItineraryPath(it.slug),
    label: buildAnchor("itinerary", cityName),
    tier: "tier2",
  }));

  const tier3: InternalLinkCandidate[] = guides
    .filter((g) => g.city === citySlug && g.slug !== guide.slug)
    .slice(0, 6)
    .map((g) => ({
      href: getGuidePath(citySlug, g.slug),
      label: buildAnchor(g.tags[0]?.toLowerCase() ?? "activities", cityName, g.neighbourhood),
      tier: "tier3",
    }));

  const moneyLinks: InternalLinkCandidate[] = MONEY_CATEGORY_SLUGS.map((slug) => ({
    href: getCityCategoryPath(citySlug, slug),
    label:
      slug === "where-to-stay"
        ? `where to stay in ${cityName.toLowerCase()}`
        : slug === "travel-costs"
          ? `cost of travelling in ${cityName.toLowerCase()}`
          : `travel comparisons in ${cityName.toLowerCase()}`,
    tier: "tier1",
  }));

  const all = dedupeLinks([
    ...tier1.slice(0, 2),
    ...tier2.slice(0, 2),
    ...tier3.slice(0, 2),
    ...moneyLinks.slice(0, 1),
  ]).filter((l) => l.href !== currentHref && l.href.includes("/south-korea/"));

  const used = new Set<string>();
  const pickPool = (pool: InternalLinkCandidate[], count: number, blockType: RelatedBlockType): RelatedBlockLink[] => {
    const out: RelatedBlockLink[] = [];
    for (const link of pool) {
      if (link.href === currentHref) continue;
      if (used.has(link.href)) continue;
      if (out.length >= count) break;
      used.add(link.href);
      out.push({ ...link, blockType });
    }
    return out;
  };

  const youMightAlsoLike = pickPool(
    tier3.concat(tier1.filter((l) => deriveClusterKey(l.href).includes(clusterKey.slice(0, 12)))),
    3,
    "you_might_also_like"
  );
  const nearbyThings = pickPool(tier1, 3, "nearby_things");
  const planYourTrip = pickPool(moneyLinks.concat(tier2, tier3), 4, "plan_your_trip");

  return {
    allLinks: all.slice(0, 5),
    relatedBlocks: { youMightAlsoLike, nearbyThings, planYourTrip },
  };
}

export function buildSeoulScopedLinksForCategory(args: {
  citySlug: string;
  cityName: string;
  categorySlug: string;
  neighbourhoodSlug?: string;
}): {
  allLinks: InternalLinkCandidate[];
  relatedBlocks: SeoRelatedBlocks;
} {
  const { citySlug, cityName, categorySlug, neighbourhoodSlug } = args;
  const currentHref = neighbourhoodSlug
    ? getNeighbourhoodCategoryPath(citySlug, neighbourhoodSlug, categorySlug)
    : getCityCategoryPath(citySlug, categorySlug);
  const tier1: InternalLinkCandidate[] = [];
  tier1.push({
    href: getCityPath(citySlug),
    label: buildAnchor("things to do", cityName),
    tier: "tier1",
  });

  const coreGuide = cityCoreGuide(citySlug);
  if (coreGuide) {
    tier1.push({
      href: getGuidePath(citySlug, coreGuide.slug),
      label: buildAnchor(coreGuide.tags[0]?.toLowerCase() ?? "guide", cityName, coreGuide.neighbourhood),
      tier: "tier1",
    });
  }

  for (const slug of CATEGORY_SLUGS) {
    if (!supportsCategorySlug(slug) || slug === categorySlug) continue;
    const href = neighbourhoodSlug
      ? getNeighbourhoodCategoryPath(citySlug, neighbourhoodSlug, slug)
      : getCityCategoryPath(citySlug, slug);
    tier1.push({
      href,
      label: neighbourhoodSlug
        ? buildAnchor(slug.replace(/-/g, " "), cityName, neighbourhoodSlug.replace(/-/g, " "))
        : buildAnchor(slug.replace(/-/g, " "), cityName),
      tier: "tier1",
    });
  }

  if (neighbourhoodSlug) {
    tier1.push({
      href: getNeighbourhoodPath(citySlug, neighbourhoodSlug),
      label: `best things to do in ${neighbourhoodSlug.replace(/-/g, " ")}`,
      tier: "tier1",
    });
  } else {
    for (const n of getNeighbourhoodsByCity(citySlug).slice(0, 3)) {
      tier1.push({
        href: getNeighbourhoodPath(citySlug, n.slug),
        label: buildAnchor("things to do", cityName, n.name),
        tier: "tier1",
      });
    }
  }

  const tier2: InternalLinkCandidate[] = getItinerariesByCity(citySlug).map((it) => ({
    href: getItineraryPath(it.slug),
    label: buildAnchor("itinerary", cityName),
    tier: "tier2",
  }));
  const tier3: InternalLinkCandidate[] = getGuidesByCity(citySlug).slice(0, 6).map((g) => ({
    href: getGuidePath(citySlug, g.slug),
    label: buildAnchor(g.category.replace(/-/g, " "), cityName, g.neighbourhood),
    tier: "tier3",
  }));
  const moneyLinks: InternalLinkCandidate[] = MONEY_CATEGORY_SLUGS
    .filter((slug) => slug !== categorySlug)
    .map((slug) => ({
      href: getCityCategoryPath(citySlug, slug),
      label:
        slug === "where-to-stay"
          ? `where to stay in ${cityName.toLowerCase()}`
          : slug === "travel-costs"
            ? `cost of travelling in ${cityName.toLowerCase()}`
            : `travel comparisons in ${cityName.toLowerCase()}`,
      tier: "tier1",
    }));

  const all = dedupeLinks([
    ...tier1.slice(0, 2),
    ...tier2.slice(0, 2),
    ...tier3.slice(0, 1),
    ...moneyLinks.slice(0, 1),
  ]).filter((l) => l.href !== currentHref && l.href.includes("/south-korea/"));

  const used = new Set<string>();
  const pickPool = (pool: InternalLinkCandidate[], count: number, blockType: RelatedBlockType): RelatedBlockLink[] => {
    const out: RelatedBlockLink[] = [];
    for (const link of pool) {
      if (link.href === currentHref) continue;
      if (used.has(link.href)) continue;
      if (out.length >= count) break;
      used.add(link.href);
      out.push({ ...link, blockType });
    }
    return out;
  };

  const youMightAlsoLike = pickPool(tier3.concat(tier1), 3, "you_might_also_like");
  const nearbyThings = pickPool(tier1, 3, "nearby_things");
  const planYourTrip = pickPool(moneyLinks.concat(tier2, tier3), 4, "plan_your_trip");
  return { allLinks: all.slice(0, 5), relatedBlocks: { youMightAlsoLike, nearbyThings, planYourTrip } };
}

export function computeSeoScore(input: {
  intentSections: number;
  hasNextStep: boolean;
  hasItineraryOrMoney: boolean;
  internalLinkCount: number;
  uniquenessSignals: number;
}): SeoScoreResult {
  const intentCoverage = Math.min(100, Math.round((input.intentSections / 4) * 100));
  const internalLinks = Math.min(100, Math.round((input.internalLinkCount / 5) * 100));
  const uniquenessSignals = Math.min(100, input.uniquenessSignals);
  const nextStepPresence =
    input.hasNextStep && input.hasItineraryOrMoney ? 100 : input.hasNextStep || input.hasItineraryOrMoney ? 50 : 0;
  const score =
    intentCoverage * 0.4 +
    internalLinks * 0.25 +
    uniquenessSignals * 0.2 +
    nextStepPresence * 0.15;
  const rounded = Math.round(score);
  const band: SeoScoreResult["band"] = rounded < 60 ? "weak" : rounded <= 80 ? "acceptable" : "strong";
  return {
    score: rounded,
    band,
    detail: {
      intentCoverage,
      internalLinks,
      uniquenessSignals,
      nextStepPresence,
    },
  };
}

export function recentlyUpdatedSeoulLinks(limit = 8): InternalLinkCandidate[] {
  const seoulGuides = getGuidesByCity("seoul").map((g) => ({
    href: getGuidePath("seoul", g.slug),
    label: g.title,
    tier: "tier3" as const,
    updatedDate: g.updatedDate,
  }));
  const seoulItineraries = getItinerariesByCity("seoul").map((it) => ({
    href: getItineraryPath(it.slug),
    label: it.title,
    tier: "tier2" as const,
    updatedDate: it.updatedDate,
  }));
  const money = MONEY_CATEGORY_SLUGS.map((slug) => ({
    href: getCityCategoryPath("seoul", slug),
    label:
      slug === "where-to-stay"
        ? "Where to stay in Seoul"
        : slug === "travel-costs"
          ? "Travel costs in Seoul"
          : "Seoul travel comparisons",
    tier: "tier1" as const,
    updatedDate: "2026-04-01",
  }));
  return [...money, ...seoulGuides, ...seoulItineraries]
    .sort((a, b) => (a.updatedDate < b.updatedDate ? 1 : -1))
    .slice(0, limit)
    .map(({ href, label, tier }) => ({ href, label, tier }));
}

export function isSupportedSeoulCategorySlug(slug: string): boolean {
  return supportsCategorySlug(slug);
}
