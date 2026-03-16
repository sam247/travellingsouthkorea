/**
 * Single default placeholder for all content images.
 * Used when slug-based image file is missing; eliminates repeated placeholders.
 */

export const DEFAULT_PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80";

/** Hero images for home/section landing pages. Each is a distinct South Korea scene (nature, Seoul cityscape, cinema, culture). */
export const HERO_IMAGES = {
  home: "/images/hero/hero-home.jpg",
  southKorea: "/images/hero/hero-south-korea.jpg",
  cinema: "/images/hero/hero-cinema.jpg",
  culture: "/images/hero/hero-culture.jpg",
} as const;
