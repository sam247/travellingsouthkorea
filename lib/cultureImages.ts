/**
 * Culture section image paths and fallback.
 * Delegates to central imagePaths + imageConfig.
 */

import { DEFAULT_PLACEHOLDER_IMAGE } from "@/lib/imageConfig";
import { getCultureImagePath } from "@/lib/imagePaths";

export const DEFAULT_CULTURE_IMAGE = DEFAULT_PLACEHOLDER_IMAGE;

export function getCultureImageUrl(
  articleSlug: string,
  type: "hero" | "1" | "2"
): string {
  return getCultureImagePath(articleSlug, type);
}
