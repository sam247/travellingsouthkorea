/**
 * Shared helpers for sitemap index and child sitemaps.
 * Used by app/sitemap.xml/route.ts and app/sitemap-*.xml/route.ts handlers.
 */

const BASE =
  process.env.NEXT_PUBLIC_SITE_URL || "https://travellingsouthkorea.com";

export function fullUrl(path: string): string {
  return `${BASE}${path}`;
}

export function urlEntry(path: string, lastModified: Date): string {
  const loc = fullUrl(path);
  const lastmod = lastModified.toISOString().split("T")[0];
  return `<url><loc>${escapeXml(loc)}</loc><lastmod>${lastmod}</lastmod></url>`;
}

export function sitemapIndexEntry(sitemapPath: string, lastModified: Date): string {
  const loc = fullUrl(sitemapPath);
  const lastmod = lastModified.toISOString().split("T")[0];
  return `<sitemap><loc>${escapeXml(loc)}</loc><lastmod>${lastmod}</lastmod></sitemap>`;
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const SITEMAP_INDEX_HEADER = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

export const SITEMAP_INDEX_FOOTER = `</sitemapindex>`;

export const URLSET_HEADER = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

export const URLSET_FOOTER = `</urlset>`;
