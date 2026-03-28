/**
 * Unsplash API (public auth). See https://unsplash.com/documentation
 *
 * We return `urls.regular` as-is for embedding. UI uses `isUnsplashImageUrl()` +
 * `next/image` `unoptimized` so the browser loads images directly from images.unsplash.com
 * (required hotlinking), not via Next’s image optimizer.
 */

import { unstable_cache } from "next/cache";

const UNSPLASH_API = "https://api.unsplash.com";

export type UnsplashAttribution = {
  userName: string;
  userHtml: string;
  photoHtml: string;
};

export type UnsplashPhotoResolution = {
  url: string;
  attribution: UnsplashAttribution;
};

async function searchPhotosOnce(
  query: string
): Promise<UnsplashPhotoResolution | null> {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key?.trim()) return null;

  const params = new URLSearchParams({
    query: query.trim().slice(0, 200),
    per_page: "1",
    orientation: "landscape",
    content_filter: "high",
  });

  const res = await fetch(`${UNSPLASH_API}/search/photos?${params}`, {
    headers: {
      Authorization: `Client-ID ${key.trim()}`,
      "Accept-Version": "v1",
    },
    next: { revalidate: 86400 },
  });

  if (!res.ok) return null;

  const data = (await res.json()) as {
    results?: Array<{
      urls?: { regular?: string; small?: string };
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

  return {
    url,
    attribution: { userName, userHtml, photoHtml },
  };
}

/**
 * Cached per normalized query string. Reduces JSON API calls (rate limits).
 */
export const getCachedUnsplashPhoto = unstable_cache(
  async (query: string): Promise<UnsplashPhotoResolution | null> => {
    return searchPhotosOnce(query);
  },
  ["unsplash-search-photo"],
  { revalidate: 86400 }
);
