# Plan: Replace Placeholder Images via Unsplash Manifest

## Summary

Replace repeated placeholder imagery (currently the single fallback `DEFAULT_PLACEHOLDER_IMAGE`) with real Unsplash images across the site by generating and committing a **static Unsplash URL manifest** for content types that currently point at missing local images.

This keeps images **stable** (no random changes over time) and avoids large volumes of Unsplash API calls during `next build` / static generation.

## Current State Analysis (Grounded)

- A single placeholder is used across the UI: `DEFAULT_PLACEHOLDER_IMAGE` in [imageConfig.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/lib/imageConfig.ts#L6-L8).
- Many content items reference slug-based local image paths (e.g. `/images/neighbourhoods/seoul-itaewon.jpg`) via [imagePaths.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/lib/imagePaths.ts). When files are missing, [SafeImage.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/components/SafeImage.tsx#L21-L38) falls back to `DEFAULT_PLACEHOLDER_IMAGE`.
- The repo currently contains only a small subset of local images:
  - `public/images/cities/` has 3 files (seoul, busan, incheon); most cities are missing.
  - `public/images/neighbourhoods/`, `public/images/regions/`, and `public/images/venues/` are not present, so those lists will fall back frequently.
- Unsplash is already integrated:
  - API fetch + caching: [unsplashApi.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/lib/unsplashApi.ts)
  - Server route for client usage: [app/api/unsplash/image/route.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/app/api/unsplash/image/route.ts)
  - Query builders for some types (travel tips, culture, cinema, city explore tiles): [unsplashKeywords.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/lib/unsplashKeywords.ts)
- City/region pages are statically generated (`generateStaticParams`) in [south-korea/[slug]/page.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/app/south-korea/%5Bslug%5D/page.tsx#L30-L38), so doing per-item Unsplash lookups at render time would multiply Unsplash calls during builds.

## Proposed Changes

### 1) Add a committed Unsplash image manifest (stable URLs)

- **Add** `data/unsplashImageManifest.ts`
  - Export a single mapping object of content IDs to:
    - `url` (the `images.unsplash.com` URL used by `next/image` with `unoptimized`)
    - `attribution` (optional, stored for future use even if not displayed on card grids)
    - `query` (optional, for maintenance/regeneration)
  - Key format (decision-complete):
    - `city:{citySlug}`
    - `region:{regionSlug}`
    - `neighbourhood:{citySlug}:{neighbourhoodSlug}`
    - `venue:{venueSlug}`

- **Add** `lib/unsplashManifest.ts`
  - Tiny helpers:
    - `getManifestImageUrl(key: string): string | undefined`
    - `getManifestAttribution(key: string): UnsplashAttribution | undefined`
  - This stays “data-only” and is safe to import from `data/*.ts` without Next server constraints.

### 2) Generate the manifest via a script that calls Unsplash once per item

- **Add** `scripts/generateUnsplashManifest.ts` (run via `tsx`)
  - Inputs (grounded from repo):
    - Cities: [data/cities.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/data/cities.ts)
    - Regions: [data/regions.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/data/regions.ts)
    - Neighbourhoods: [data/neighbourhoods.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/data/neighbourhoods.ts)
    - Venues: [data/venues.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/data/venues.ts)
  - Behavior:
    - For each item, build a query string and call `https://api.unsplash.com/search/photos?…` with `UNSPLASH_ACCESS_KEY`.
    - Choose `results[0]` with `orientation=landscape`, `content_filter=high`, `per_page=1` (same as [unsplashApi.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/lib/unsplashApi.ts#L30-L44)).
    - Write/overwrite `data/unsplashImageManifest.ts` deterministically (stable ordering by key).
    - Skip items that already have a manifest entry unless a `--refresh` flag is provided.

- **Update** `package.json` scripts:
  - Add `generate-unsplash-manifest`: `tsx scripts/generateUnsplashManifest.ts`

### 3) Expand Unsplash query builders for the missing content types

- **Update** [unsplashKeywords.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/lib/unsplashKeywords.ts)
  - Add functions used by the manifest generator:
    - `buildCityUnsplashQuery(cityName: string): string`
    - `buildRegionUnsplashQuery(regionName: string): string`
    - `buildNeighbourhoodUnsplashQuery(cityName: string, neighbourhoodName: string, vibe?: string): string`
    - `buildVenueUnsplashQuery(venueName: string, cityName: string, category: string): string`
  - Query conventions (decision-complete):
    - Always anchor to Korea context to reduce irrelevant stock:
      - City: `"{cityName} skyline street South Korea"`
      - Region: `"{regionName} landscape nature South Korea"`
      - Neighbourhood: `"{neighbourhoodName} {cityName} streets cafes nightlife South Korea"` (include `vibe` compacted when present)
      - Venue: `"{venueName} {cityName} {category} interior South Korea"`

### 4) Use the manifest for images in data modules (no UI changes)

Goal: ensure list cards no longer pass missing local `/images/...` paths that 404 and trigger the placeholder fallback.

- **Update** these data files to prefer manifest URLs:
  - [data/cities.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/data/cities.ts)
    - `image: getManifestImageUrl(\`city:${slug}\`) ?? getCityImagePath(slug)`
  - [data/regions.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/data/regions.ts)
    - `image: getManifestImageUrl(\`region:${slug}\`) ?? getRegionImagePath(slug)`
  - [data/neighbourhoods.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/data/neighbourhoods.ts)
    - `image: getManifestImageUrl(\`neighbourhood:${citySlug}:${slug}\`) ?? getNeighbourhoodImagePath(citySlug, slug)`
  - [data/venues.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/data/venues.ts)
    - `image: getManifestImageUrl(\`venue:${slug}\`) ?? getVenueImagePath(slug)`

No component changes are required because `SafeImage` already supports Unsplash hotlinks via [unsplashHotlink.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/lib/unsplashHotlink.ts).

### 5) Add a “no placeholders” validation script (system-level safety net)

- **Add** `scripts/validateImages.ts`
  - Checks:
    - No `City.image`, `Region.image`, `Neighbourhood.image`, `Venue.image` equals `DEFAULT_PLACEHOLDER_IMAGE`
    - If an image is a local `/images/...` path, verify the file exists under `public/`
    - If an image is an Unsplash URL, verify it matches `images.unsplash.com`
  - Exit non-zero on failure for CI/build guard.

- **Update** `package.json` scripts:
  - Add `validate-images`: `tsx scripts/validateImages.ts`

### 6) Documentation + roadmap

- **Update** [public/images/README.md](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/public/images/README.md)
  - Add a section describing the manifest approach and how to regenerate it.
- A `ROADMAP.MD` file is not present in the repo; during execution either:
  - Create `ROADMAP.md` (preferred) and add a completed entry for the image-manifest rollout, or
  - Confirm the intended roadmap filename/location and update accordingly.

## Assumptions & Decisions

- Use a **static manifest** with **stable** URLs (per user preference).
- Do **not** change UI to add attribution overlays on card grids (per user preference); attribution is still captured in the manifest for later use.
- Keep existing Unsplash runtime usage where it already exists (e.g. [resolveUnsplashHero.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/travellingsouthkorea/lib/resolveUnsplashHero.ts)), but avoid expanding runtime lookups to high-volume pages.

## Verification Steps

- Run `npm run generate-unsplash-manifest` with `UNSPLASH_ACCESS_KEY` set.
- Run `npm run validate-images` and confirm it passes.
- Run `npm run build` and confirm no image 404s for the updated content types.
- Manual smoke-check:
  - `/south-korea/seoul` neighbourhood grid no longer shows the repeated placeholder.
  - `/south-korea` “Regions” and “Major Cities” sections no longer show the repeated placeholder.
  - A guide page with venue cards no longer shows the repeated placeholder images.

