/**
 * Ping search engines after deploy to accelerate sitemap recrawling.
 *
 * Usage:
 *   SITE_URL=https://travellingsouthkorea.com npx tsx scripts/pingSitemaps.ts
 */

const siteUrl = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "").trim();

if (!siteUrl) {
  console.error("SITE_URL or NEXT_PUBLIC_SITE_URL is required.");
  process.exit(1);
}

const sitemap = `${siteUrl.replace(/\/$/, "")}/sitemap.xml`;
const endpoints = [
  `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`,
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`,
];

async function main() {
  for (const url of endpoints) {
    try {
      const res = await fetch(url, { method: "GET" });
      console.log(`${res.ok ? "OK" : "WARN"} ${res.status} ${url}`);
    } catch (err) {
      console.log(`ERROR ${url} ${(err as Error).message}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

