export type UnsplashAttribution = {
  userName: string;
  userHtml: string;
  photoHtml: string;
};

export type UnsplashImageManifestEntry = {
  url: string;
  attribution?: UnsplashAttribution;
  query?: string;
};

export const UNSPLASH_IMAGE_MANIFEST: Record<
  string,
  UnsplashImageManifestEntry
> = {};

