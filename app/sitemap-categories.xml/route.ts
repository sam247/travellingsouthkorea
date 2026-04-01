import { NextResponse } from "next/server";
import {
  getCountryPath,
  getRegionPath,
  getCityCategoryPath,
  getNeighbourhoodCategoryPath,
  getCategoryPath,
  getTravelTipPath,
  getAuthorPath,
  getMapPath,
  getLocationPath,
} from "@/lib/canonical";
import { regions } from "@/data/regions";
import { cities } from "@/data/cities";
import { neighbourhoods } from "@/data/neighbourhoods";
import { categories } from "@/data/categories";
import { travelTips } from "@/data/travelTips";
import { authors } from "@/data/authors";
import { getAllLocationSlugs } from "@/lib/locations";
import { MONEY_CATEGORY_SLUGS } from "@/lib/content/moneyPages";
import {
  urlEntry,
  URLSET_HEADER,
  URLSET_FOOTER,
} from "@/lib/sitemapHelpers";

const lastMod = new Date();
const NEIGHBOURHOOD_CATEGORY_SLUGS = ["bars", "restaurants", "cafes", "things-to-do"];

export function GET() {
  const entries: string[] = [];

  entries.push(urlEntry(getCountryPath(), lastMod));
  regions.forEach((r) => entries.push(urlEntry(getRegionPath(r.slug), lastMod)));

  categories.forEach((c) =>
    entries.push(urlEntry(getCategoryPath(c.slug), lastMod))
  );

  cities.forEach((city) => {
    categories.forEach((cat) =>
      entries.push(
        urlEntry(getCityCategoryPath(city.slug, cat.slug), lastMod)
      )
    );
    if (city.slug === "seoul") {
      MONEY_CATEGORY_SLUGS.forEach((slug) =>
        entries.push(urlEntry(getCityCategoryPath(city.slug, slug), lastMod))
      );
    }
    entries.push(urlEntry(getMapPath(city.slug), lastMod));
  });

  neighbourhoods.forEach((n) => {
    NEIGHBOURHOOD_CATEGORY_SLUGS.forEach((categorySlug) =>
      entries.push(
        urlEntry(
          getNeighbourhoodCategoryPath(n.citySlug, n.slug, categorySlug),
          lastMod
        )
      )
    );
  });

  travelTips.forEach((t) =>
    entries.push(urlEntry(getTravelTipPath(t.slug), lastMod))
  );
  authors.forEach((a) =>
    entries.push(urlEntry(getAuthorPath(a.slug), lastMod))
  );
  getAllLocationSlugs().forEach((slug) =>
    entries.push(urlEntry(getLocationPath(slug), lastMod))
  );

  const body = URLSET_HEADER + entries.join("") + URLSET_FOOTER;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
