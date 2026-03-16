import { NextResponse } from "next/server";
import { getGuidePath } from "@/lib/canonical";
import { guides } from "@/data/guides";
import { getProgrammaticGuideSpecs } from "@/lib/programmaticGuides";
import {
  urlEntry,
  URLSET_HEADER,
  URLSET_FOOTER,
} from "@/lib/sitemapHelpers";

const lastMod = new Date();

export function GET() {
  const seen = new Set<string>();
  const entries: string[] = [];

  guides.forEach((g) => {
    const path = getGuidePath(g.city, g.slug);
    if (!seen.has(path)) {
      seen.add(path);
      entries.push(urlEntry(path, lastMod));
    }
  });

  getProgrammaticGuideSpecs().forEach((s) => {
    const path = getGuidePath(s.citySlug, s.guideSlug);
    if (!seen.has(path)) {
      seen.add(path);
      entries.push(urlEntry(path, lastMod));
    }
  });

  const body = URLSET_HEADER + entries.join("") + URLSET_FOOTER;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
