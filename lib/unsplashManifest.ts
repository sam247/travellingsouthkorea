import {
  UNSPLASH_IMAGE_MANIFEST,
  type UnsplashAttribution,
} from "@/data/unsplashImageManifest";

export function getManifestImageUrl(key: string): string | undefined {
  return UNSPLASH_IMAGE_MANIFEST[key]?.url;
}

export function getManifestAttribution(
  key: string
): UnsplashAttribution | undefined {
  return UNSPLASH_IMAGE_MANIFEST[key]?.attribution;
}

