/**
 * Culture section image paths and fallback.
 * Local convention: public/images/culture/{articleSlug}-hero.jpg, -1.jpg, -2.jpg
 */

export const DEFAULT_CULTURE_IMAGE =
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80";

export function getCultureImageUrl(
  articleSlug: string,
  type: "hero" | "1" | "2"
): string {
  const suffix = type === "hero" ? "hero" : type;
  return `/images/culture/${articleSlug}-${suffix}.jpg`;
}
