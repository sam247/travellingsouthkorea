/**
 * Cinema section image paths. Delegates to central imagePaths + imageConfig.
 */

import { DEFAULT_PLACEHOLDER_IMAGE } from "@/lib/imageConfig";
import { getCinemaImagePath } from "@/lib/imagePaths";

export const DEFAULT_CINEMA_IMAGE = DEFAULT_PLACEHOLDER_IMAGE;

export function getCinemaImageUrl(
  slug: string,
  type: "hero" | "1" | "2"
): string {
  return getCinemaImagePath(slug, type);
}
