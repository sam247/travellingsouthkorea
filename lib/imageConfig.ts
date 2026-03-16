/**
 * Single default placeholder for all content images.
 * Used when slug-based image file is missing; eliminates repeated placeholders.
 */

export const DEFAULT_PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80";

const heroBase = "/images/hero";
const heroV = "?v=2"; // bump after changing hero images so caches refresh
/** Hero images for home/section landing pages. Each is a distinct South Korea scene (nature, Seoul cityscape, cinema, culture). */
export const HERO_IMAGES = {
  home: `${heroBase}/hero-home.jpg${heroV}`,
  southKorea: `${heroBase}/hero-south-korea.jpg${heroV}`,
  cinema: `${heroBase}/hero-cinema.jpg${heroV}`,
  culture: `${heroBase}/hero-culture.jpg${heroV}`,
} as const;
