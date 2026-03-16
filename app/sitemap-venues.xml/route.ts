import { NextResponse } from "next/server";
import { getVenuePath } from "@/lib/canonical";
import { venues } from "@/data/venues";
import {
  urlEntry,
  URLSET_HEADER,
  URLSET_FOOTER,
} from "@/lib/sitemapHelpers";

const lastMod = new Date();

export function GET() {
  const entries = venues.map((v) =>
    urlEntry(getVenuePath(v.citySlug, v.slug), lastMod)
  );
  const body = URLSET_HEADER + entries.join("") + URLSET_FOOTER;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
