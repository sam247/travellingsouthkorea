import { NextResponse } from "next/server";
import { getItineraryPath } from "@/lib/canonical";
import { itineraries } from "@/data/itineraries";
import {
  urlEntry,
  URLSET_HEADER,
  URLSET_FOOTER,
} from "@/lib/sitemapHelpers";

const lastMod = new Date();

export function GET() {
  const entries = itineraries.map((i) =>
    urlEntry(getItineraryPath(i.slug), lastMod)
  );
  const body = URLSET_HEADER + entries.join("") + URLSET_FOOTER;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
