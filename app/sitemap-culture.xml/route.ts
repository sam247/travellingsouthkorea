import { NextResponse } from "next/server";
import { getCulturePath, getCultureArticlePath } from "@/lib/canonical";
import { getAllCultureArticles } from "@/data/cultureArticles";
import {
  urlEntry,
  URLSET_HEADER,
  URLSET_FOOTER,
} from "@/lib/sitemapHelpers";

const lastMod = new Date();

export function GET() {
  const entries: string[] = [
    urlEntry(getCulturePath(), lastMod),
    ...getAllCultureArticles().map((a) =>
      urlEntry(getCultureArticlePath(a.slug), lastMod)
    ),
  ];
  const body = URLSET_HEADER + entries.join("") + URLSET_FOOTER;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
