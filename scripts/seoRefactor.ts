/**
 * Seoul-only SEO refactor tooling (dry-run/report/snapshot).
 *
 * Usage:
 *   npx tsx scripts/seoRefactor.ts preview --limit 5
 *   npx tsx scripts/seoRefactor.ts report --out scripts/reports/seo-baseline.json
 *   npx tsx scripts/seoRefactor.ts snapshot --out scripts/reports/seo-snapshot.json
 */

import * as fs from "fs";
import * as path from "path";
import { guides } from "@/data/guides";
import { categories } from "@/data/categories";
import { getNeighbourhoodsByCity } from "@/data/neighbourhoods";
import { getCityBySlug } from "@/data/cities";
import {
  getCityCategoryPath,
  getGuidePath,
  getNeighbourhoodCategoryPath,
} from "@/lib/canonical";
import {
  buildAreaIntentSections,
  buildCategorySeoTitle,
  buildGuideIntentSections,
  buildGuideSeoTitle,
  buildSeoulScopedLinksForCategory,
  buildSeoulScopedLinksForGuide,
  computeSeoScore,
} from "@/lib/seo/refactor";

type Mode = "preview" | "report" | "snapshot";

interface PageCheck {
  route: string;
  pageType: "guides" | "activity" | "category";
  titleOld: string;
  titleNew: string;
  titleSimilarity: number;
  titleSimilaritySafe: boolean;
  intentSectionCount: number;
  lowSpecificityCount: number;
  internalLinkCount: number;
  hasNextStep: boolean;
  hasItineraryOrMoney: boolean;
  contentScore: number;
  contentBand: "weak" | "acceptable" | "strong";
  warnings: string[];
  sample?: {
    intentSections: { heading: string; paragraphs: string[] }[];
    links: { label: string; href: string; tier: string }[];
    relatedBlocks: {
      youMightAlsoLike: { label: string; href: string }[];
      nearbyThings: { label: string; href: string }[];
      planYourTrip: { label: string; href: string }[];
    };
  };
}

function parseArgs() {
  const [modeRaw, ...rest] = process.argv.slice(2);
  const mode: Mode = modeRaw === "snapshot" || modeRaw === "report" ? modeRaw : "preview";
  let limit = 5;
  let out = "";
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === "--limit" && rest[i + 1]) {
      limit = Math.max(1, Number(rest[i + 1]) || 5);
      i++;
    } else if (rest[i] === "--out" && rest[i + 1]) {
      out = rest[i + 1];
      i++;
    }
  }
  return { mode, limit, out };
}

function collectChecks(): PageCheck[] {
  const city = getCityBySlug("seoul");
  if (!city) throw new Error("Seoul city not found.");
  const checks: PageCheck[] = [];

  const seoulGuides = guides.filter((g) => g.city === "seoul");
  for (const guide of seoulGuides) {
    const route = getGuidePath("seoul", guide.slug);
    const title = buildGuideSeoTitle(guide, city.name);
    const intentSections = buildGuideIntentSections(guide, city.name);
    const linkPlan = buildSeoulScopedLinksForGuide(guide);
    const hasItineraryOrMoney = linkPlan.relatedBlocks.planYourTrip.some((l) =>
      l.href.includes("/itineraries/") || l.href.includes("/where-to-stay") || l.href.includes("/travel-costs")
    );
    const score = computeSeoScore({
      intentSections: intentSections.length,
      hasNextStep: linkPlan.relatedBlocks.planYourTrip.length > 0,
      hasItineraryOrMoney,
      internalLinkCount: linkPlan.allLinks.length,
      uniquenessSignals: 80,
    });
    const warnings: string[] = [];
    if (!title.isSimilaritySafe) warnings.push("title_similarity_low");
    if (intentSections.some((s) => s.lowSpecificity)) warnings.push("low_specificity");
    if (linkPlan.allLinks.length < 3) warnings.push("low_link_count");
    checks.push({
      route,
      pageType: "guides",
      titleOld: title.baselineTitle,
      titleNew: title.title,
      titleSimilarity: title.similarity,
      titleSimilaritySafe: title.isSimilaritySafe,
      intentSectionCount: intentSections.length,
      lowSpecificityCount: intentSections.filter((s) => s.lowSpecificity).length,
      internalLinkCount: linkPlan.allLinks.length,
      hasNextStep: linkPlan.relatedBlocks.planYourTrip.length > 0,
      hasItineraryOrMoney,
      contentScore: score.score,
      contentBand: score.band,
      warnings,
      sample: {
        intentSections: intentSections.map((s) => ({
          heading: s.heading,
          paragraphs: s.paragraphs,
        })),
        links: linkPlan.allLinks.map((l) => ({ ...l })),
        relatedBlocks: {
          youMightAlsoLike: linkPlan.relatedBlocks.youMightAlsoLike.map((l) => ({ label: l.label, href: l.href })),
          nearbyThings: linkPlan.relatedBlocks.nearbyThings.map((l) => ({ label: l.label, href: l.href })),
          planYourTrip: linkPlan.relatedBlocks.planYourTrip.map((l) => ({ label: l.label, href: l.href })),
        },
      },
    });
  }

  const cityCategorySlugs = categories
    .filter((c) => ["bars", "restaurants", "cafes", "things-to-do"].includes(c.slug))
    .map((c) => c.slug);
  for (const categorySlug of cityCategorySlugs) {
    const category = categories.find((c) => c.slug === categorySlug)!;
    const route = getCityCategoryPath("seoul", categorySlug);
    const title = buildCategorySeoTitle(city.name, category.label, `seoul:${categorySlug}`);
    const intentSections = buildAreaIntentSections(city.name, city.name, category.label, `seoul:${categorySlug}`);
    const linkPlan = buildSeoulScopedLinksForCategory({
      citySlug: "seoul",
      cityName: city.name,
      categorySlug,
    });
    const hasItineraryOrMoney = linkPlan.relatedBlocks.planYourTrip.some((l) =>
      l.href.includes("/itineraries/") || l.href.includes("/where-to-stay") || l.href.includes("/travel-costs")
    );
    const score = computeSeoScore({
      intentSections: intentSections.length,
      hasNextStep: linkPlan.relatedBlocks.planYourTrip.length > 0,
      hasItineraryOrMoney,
      internalLinkCount: linkPlan.allLinks.length,
      uniquenessSignals: 75,
    });
    const warnings: string[] = [];
    if (!title.isSimilaritySafe) warnings.push("title_similarity_low");
    if (intentSections.some((s) => s.lowSpecificity)) warnings.push("low_specificity");
    if (linkPlan.allLinks.length < 3) warnings.push("low_link_count");
    checks.push({
      route,
      pageType: "category",
      titleOld: title.baselineTitle,
      titleNew: title.title,
      titleSimilarity: title.similarity,
      titleSimilaritySafe: title.isSimilaritySafe,
      intentSectionCount: intentSections.length,
      lowSpecificityCount: intentSections.filter((s) => s.lowSpecificity).length,
      internalLinkCount: linkPlan.allLinks.length,
      hasNextStep: linkPlan.relatedBlocks.planYourTrip.length > 0,
      hasItineraryOrMoney,
      contentScore: score.score,
      contentBand: score.band,
      warnings,
      sample: {
        intentSections: intentSections.map((s) => ({
          heading: s.heading,
          paragraphs: s.paragraphs,
        })),
        links: linkPlan.allLinks.map((l) => ({ ...l })),
        relatedBlocks: {
          youMightAlsoLike: linkPlan.relatedBlocks.youMightAlsoLike.map((l) => ({ label: l.label, href: l.href })),
          nearbyThings: linkPlan.relatedBlocks.nearbyThings.map((l) => ({ label: l.label, href: l.href })),
          planYourTrip: linkPlan.relatedBlocks.planYourTrip.map((l) => ({ label: l.label, href: l.href })),
        },
      },
    });
  }

  for (const n of getNeighbourhoodsByCity("seoul")) {
    for (const categorySlug of ["bars", "restaurants", "cafes", "things-to-do"] as const) {
      const category = categories.find((c) => c.slug === categorySlug)!;
      const route = getNeighbourhoodCategoryPath("seoul", n.slug, categorySlug);
      const title = buildCategorySeoTitle(
        city.name,
        `Best ${category.label} in ${n.name}`,
        `seoul:${n.slug}:${categorySlug}`
      );
      const intentSections = buildAreaIntentSections(city.name, n.name, category.label, `seoul:${n.slug}:${categorySlug}`);
      const linkPlan = buildSeoulScopedLinksForCategory({
        citySlug: "seoul",
        cityName: city.name,
        categorySlug,
        neighbourhoodSlug: n.slug,
      });
      const hasItineraryOrMoney = linkPlan.relatedBlocks.planYourTrip.some((l) =>
        l.href.includes("/itineraries/") || l.href.includes("/where-to-stay") || l.href.includes("/travel-costs")
      );
      const score = computeSeoScore({
        intentSections: intentSections.length,
        hasNextStep: linkPlan.relatedBlocks.planYourTrip.length > 0,
        hasItineraryOrMoney,
        internalLinkCount: linkPlan.allLinks.length,
        uniquenessSignals: 72,
      });
      const warnings: string[] = [];
      if (!title.isSimilaritySafe) warnings.push("title_similarity_low");
      if (intentSections.some((s) => s.lowSpecificity)) warnings.push("low_specificity");
      if (linkPlan.allLinks.length < 3) warnings.push("low_link_count");
      checks.push({
        route,
        pageType: "activity",
        titleOld: title.baselineTitle,
        titleNew: title.title,
        titleSimilarity: title.similarity,
        titleSimilaritySafe: title.isSimilaritySafe,
        intentSectionCount: intentSections.length,
        lowSpecificityCount: intentSections.filter((s) => s.lowSpecificity).length,
        internalLinkCount: linkPlan.allLinks.length,
        hasNextStep: linkPlan.relatedBlocks.planYourTrip.length > 0,
        hasItineraryOrMoney,
        contentScore: score.score,
        contentBand: score.band,
        warnings,
      });
    }
  }
  return checks;
}

function ensureOutPath(outPath: string) {
  const dir = path.dirname(outPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function main() {
  const { mode, limit, out } = parseArgs();
  const checks = collectChecks();
  if (mode === "preview") {
    const preview = checks.slice(0, limit).map((x) => ({
      route: x.route,
      pageType: x.pageType,
      titleOld: x.titleOld,
      titleNew: x.titleNew,
      titleSimilarity: Number(x.titleSimilarity.toFixed(3)),
      intentSections: x.sample?.intentSections ?? [],
      links: x.sample?.links ?? [],
      relatedBlocks: x.sample?.relatedBlocks ?? {},
      warnings: x.warnings,
    }));
    console.log(JSON.stringify({ mode, city: "seoul", preview }, null, 2));
    return;
  }

  const counts = {
    total: checks.length,
    weak: checks.filter((x) => x.contentBand === "weak").length,
    acceptable: checks.filter((x) => x.contentBand === "acceptable").length,
    strong: checks.filter((x) => x.contentBand === "strong").length,
    lowSpecificity: checks.filter((x) => x.warnings.includes("low_specificity")).length,
    lowLinkCount: checks.filter((x) => x.warnings.includes("low_link_count")).length,
    lowTitleSimilarity: checks.filter((x) => x.warnings.includes("title_similarity_low")).length,
  };
  const payload = {
    mode,
    generatedAt: new Date().toISOString(),
    scope: "/seoul/*",
    pageTypes: ["activity", "guides", "category"],
    indexing: (() => {
      const indexedRaw = process.env.INDEXED_PAGES;
      const indexedPages = indexedRaw ? Number(indexedRaw) : null;
      const totalPages = checks.length;
      const ratio =
        indexedPages != null && Number.isFinite(indexedPages) && totalPages > 0
          ? Number((indexedPages / totalPages).toFixed(4))
          : null;
      return { indexedPages, totalPages, indexedRatio: ratio };
    })(),
    counts,
    pages: checks,
  };

  if (mode === "snapshot") {
    const output = out || "scripts/reports/seo-snapshot.json";
    ensureOutPath(output);
    fs.writeFileSync(output, JSON.stringify(payload, null, 2), "utf8");
    console.log(`Snapshot written: ${output}`);
    return;
  }

  const output = out || "scripts/reports/seo-report.json";
  ensureOutPath(output);
  fs.writeFileSync(output, JSON.stringify(payload, null, 2), "utf8");
  console.table([
    { metric: "total", value: counts.total },
    { metric: "weak", value: counts.weak },
    { metric: "acceptable", value: counts.acceptable },
    { metric: "strong", value: counts.strong },
    { metric: "lowSpecificity", value: counts.lowSpecificity },
    { metric: "lowLinkCount", value: counts.lowLinkCount },
    { metric: "lowTitleSimilarity", value: counts.lowTitleSimilarity },
  ]);
  console.log(`Report written: ${output}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
