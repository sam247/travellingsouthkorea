import type { MetadataRoute } from "next";
import {
  getCountryPath,
  getRegionPath,
  getCityPath,
  getNeighbourhoodPath,
  getCityCategoryPath,
  getNeighbourhoodCategoryPath,
  getGuidePath,
  getVenuePath,
  getItineraryPath,
  getTravelTipPath,
  getAuthorPath,
  getMapPath,
  getCategoryPath,
  getLocationPath,
  getCulturePath,
  getCultureArticlePath,
} from "@/lib/canonical";
import { regions } from "@/data/regions";
import { cities } from "@/data/cities";
import { neighbourhoods } from "@/data/neighbourhoods";
import { guides } from "@/data/guides";
import { venues } from "@/data/venues";
import { itineraries } from "@/data/itineraries";
import { travelTips } from "@/data/travelTips";
import { authors } from "@/data/authors";
import { categories } from "@/data/categories";
import { getAllLocationSlugs } from "@/lib/locations";
import { getAllCultureArticles } from "@/data/cultureArticles";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://travellingsouthkorea.com";
const lastMod = new Date();

function url(path: string): string {
  return `${base}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  entries.push({ url: url(getCountryPath()), lastModified: lastMod });
  entries.push({ url: url(getCulturePath()), lastModified: lastMod });
  getAllCultureArticles().forEach((article) => {
    entries.push({
      url: url(getCultureArticlePath(article.slug)),
      lastModified: lastMod,
    });
  });

  regions.forEach((r) => {
    entries.push({ url: url(getRegionPath(r.slug)), lastModified: lastMod });
  });

  cities.forEach((c) => {
    entries.push({ url: url(getCityPath(c.slug)), lastModified: lastMod });
  });

  neighbourhoods.forEach((n) => {
    entries.push({
      url: url(getNeighbourhoodPath(n.citySlug, n.slug)),
      lastModified: lastMod,
    });
  });

  guides.forEach((g) => {
    entries.push({
      url: url(getGuidePath(g.city, g.slug)),
      lastModified: lastMod,
    });
  });

  venues.forEach((v) => {
    entries.push({
      url: url(getVenuePath(v.citySlug, v.slug)),
      lastModified: lastMod,
    });
  });

  itineraries.forEach((i) => {
    entries.push({
      url: url(getItineraryPath(i.slug)),
      lastModified: lastMod,
    });
  });

  travelTips.forEach((t) => {
    entries.push({
      url: url(getTravelTipPath(t.slug)),
      lastModified: lastMod,
    });
  });

  authors.forEach((a) => {
    entries.push({
      url: url(getAuthorPath(a.slug)),
      lastModified: lastMod,
    });
  });

  cities.forEach((c) => {
    entries.push({
      url: url(getMapPath(c.slug)),
      lastModified: lastMod,
    });
  });

  categories.forEach((c) => {
    entries.push({
      url: url(getCategoryPath(c.slug)),
      lastModified: lastMod,
    });
  });

  getAllLocationSlugs().forEach((slug) => {
    entries.push({ url: url(getLocationPath(slug)), lastModified: lastMod });
  });

  cities.forEach((city) => {
    categories.forEach((cat) => {
      entries.push({
        url: url(getCityCategoryPath(city.slug, cat.slug)),
        lastModified: lastMod,
      });
    });
  });

  const neighbourhoodCategorySlugs = ["bars", "restaurants", "cafes", "things-to-do"];
  neighbourhoods.forEach((n) => {
    neighbourhoodCategorySlugs.forEach((categorySlug) => {
      entries.push({
        url: url(getNeighbourhoodCategoryPath(n.citySlug, n.slug, categorySlug)),
        lastModified: lastMod,
      });
    });
  });

  return entries;
}
