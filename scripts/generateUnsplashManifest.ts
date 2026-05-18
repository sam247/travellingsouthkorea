import * as fs from "fs";
import * as path from "path";
import { cities } from "../data/cities";
import { regions } from "../data/regions";
import { neighbourhoods } from "../data/neighbourhoods";
import { venues } from "../data/venues";
import {
  UNSPLASH_IMAGE_MANIFEST,
  type UnsplashAttribution,
  type UnsplashImageManifestEntry,
} from "../data/unsplashImageManifest";
import {
  buildCityUnsplashQuery,
  buildNeighbourhoodUnsplashQuery,
  buildRegionUnsplashQuery,
  buildVenueUnsplashQuery,
} from "../lib/unsplashKeywords";

type UnsplashPhotoResolution = {
  url: string;
  attribution: UnsplashAttribution;
};

const UNSPLASH_API = "https://api.unsplash.com";

async function searchPhotosOnce(query: string): Promise<UnsplashPhotoResolution | null> {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key?.trim()) return null;

  const params = new URLSearchParams({
    query: query.trim().slice(0, 200),
    per_page: "1",
    orientation: "landscape",
    content_filter: "high",
  });

  const res = await fetch(`${UNSPLASH_API}/search/photos?${params.toString()}`, {
    headers: {
      Authorization: `Client-ID ${key.trim()}`,
      "Accept-Version": "v1",
    },
  });

  if (!res.ok) return null;

  const data = (await res.json()) as {
    results?: Array<{
      urls?: { regular?: string };
      links?: { html?: string };
      user?: { name?: string; links?: { html?: string } };
    }>;
  };

  const photo = data.results?.[0];
  if (!photo?.urls?.regular) return null;

  const url = photo.urls.regular;
  const userName = photo.user?.name ?? "Photographer";
  const userHtml = photo.user?.links?.html ?? "https://unsplash.com";
  const photoHtml = photo.links?.html ?? url;

  return { url, attribution: { userName, userHtml, photoHtml } };
}

function buildNextManifest({
  refresh,
}: {
  refresh: boolean;
}): Record<string, UnsplashImageManifestEntry> {
  const next: Record<string, UnsplashImageManifestEntry> = { ...UNSPLASH_IMAGE_MANIFEST };

  for (const c of cities) {
    const key = `city:${c.slug}`;
    if (!refresh && next[key]) continue;
    next[key] = { url: "", query: buildCityUnsplashQuery(c.name) };
  }

  for (const r of regions) {
    const key = `region:${r.slug}`;
    if (!refresh && next[key]) continue;
    next[key] = { url: "", query: buildRegionUnsplashQuery(r.name) };
  }

  for (const n of neighbourhoods) {
    const cityName = cities.find((c) => c.slug === n.citySlug)?.name ?? n.citySlug;
    const key = `neighbourhood:${n.citySlug}:${n.slug}`;
    if (!refresh && next[key]) continue;
    next[key] = {
      url: "",
      query: buildNeighbourhoodUnsplashQuery(cityName, n.name, n.vibe),
    };
  }

  for (const v of venues) {
    const cityName = cities.find((c) => c.slug === v.citySlug)?.name ?? v.citySlug;
    const key = `venue:${v.slug}`;
    if (!refresh && next[key]) continue;
    next[key] = {
      url: "",
      query: buildVenueUnsplashQuery(v.name, cityName, v.category),
    };
  }

  return next;
}

async function hydrateUrls(
  manifest: Record<string, UnsplashImageManifestEntry>,
  refresh: boolean
): Promise<Record<string, UnsplashImageManifestEntry>> {
  const keys = Object.keys(manifest).sort();
  const out: Record<string, UnsplashImageManifestEntry> = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const entry = manifest[key];
    process.stdout.write(`  [${i + 1}/${keys.length}] ${key} ... `);

    if (!refresh && entry.url?.trim()) {
      out[key] = entry;
      console.log("keep");
      continue;
    }

    const query = entry.query?.trim() ?? "";
    if (!query) {
      console.log("skip (no query)");
      continue;
    }

    const photo = await searchPhotosOnce(query);
    if (!photo) {
      if (entry.url?.trim()) {
        out[key] = entry;
        console.log("keep (no result)");
      } else {
        console.log("skip (no result)");
      }
      continue;
    }

    out[key] = { url: photo.url, attribution: photo.attribution, query };
    console.log("ok");
  }

  return out;
}

function emitTs(manifest: Record<string, UnsplashImageManifestEntry>): string {
  const keys = Object.keys(manifest).sort();
  const ordered: Record<string, UnsplashImageManifestEntry> = {};
  for (const k of keys) ordered[k] = manifest[k];

  return [
    "export type UnsplashAttribution = {",
    "  userName: string;",
    "  userHtml: string;",
    "  photoHtml: string;",
    "};",
    "",
    "export type UnsplashImageManifestEntry = {",
    "  url: string;",
    "  attribution?: UnsplashAttribution;",
    "  query?: string;",
    "};",
    "",
    `export const UNSPLASH_IMAGE_MANIFEST: Record<string, UnsplashImageManifestEntry> = ${JSON.stringify(ordered, null, 2)};`,
    "",
  ].join("\n");
}

async function main() {
  const refresh = process.argv.includes("--refresh");
  const root = process.cwd();
  const outPath = path.join(root, "data", "unsplashImageManifest.ts");

  if (!process.env.UNSPLASH_ACCESS_KEY?.trim()) {
    console.error("Missing UNSPLASH_ACCESS_KEY in environment.");
    process.exit(1);
  }

  const scaffold = buildNextManifest({ refresh });
  const hydrated = await hydrateUrls(scaffold, refresh);
  const ts = emitTs(hydrated);

  fs.writeFileSync(outPath, ts, "utf8");
  console.log(`\nWrote ${Object.keys(hydrated).length} entries to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
