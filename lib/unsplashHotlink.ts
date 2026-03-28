/**
 * Unsplash API guidelines require hotlinking: use the image URLs they return as the
 * browser `src` (their Imgix CDN at images.unsplash.com), not re-hosted copies.
 * Next.js `<Image>` normally proxies remotes via `/_next/image`, which breaks that rule.
 *
 * For any `images.unsplash.com` URL, pass `unoptimized` to `next/image` so the real
 * hotlink URL is used. Preserve query params (especially `ixid`) when changing `w`/`q`/`fit`.
 *
 * @see https://unsplash.com/documentation#hotlinking
 * @see https://unsplash.com/documentation#dynamically-resizable-images
 */

export function isUnsplashImageUrl(src: string): boolean {
  if (!src || typeof src !== "string") return false;
  if (src.startsWith("/")) return false;
  try {
    return new URL(src).hostname === "images.unsplash.com";
  } catch {
    return false;
  }
}
