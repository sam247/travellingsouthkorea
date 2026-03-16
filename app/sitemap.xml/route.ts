import { NextResponse } from "next/server";
import {
  fullUrl,
  sitemapIndexEntry,
  SITEMAP_INDEX_HEADER,
  SITEMAP_INDEX_FOOTER,
} from "@/lib/sitemapHelpers";

const lastMod = new Date();

const CHILD_SITEMAPS = [
  "/sitemap-cities.xml",
  "/sitemap-neighbourhoods.xml",
  "/sitemap-guides.xml",
  "/sitemap-itineraries.xml",
  "/sitemap-venues.xml",
  "/sitemap-culture.xml",
  "/sitemap-cinema.xml",
  "/sitemap-categories.xml",
];

export function GET() {
  const body =
    SITEMAP_INDEX_HEADER +
    CHILD_SITEMAPS.map((path) => sitemapIndexEntry(path, lastMod)).join("") +
    SITEMAP_INDEX_FOOTER;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
