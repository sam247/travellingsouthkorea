# Image directory structure

Slug-based paths for content images. Missing files fall back to placeholder in UI.

- **cities/** — `{citySlug}.jpg`
- **neighbourhoods/** — `{citySlug}-{neighbourhoodSlug}.jpg`
- **guides/** — `{guideSlug}-hero.jpg`, `{guideSlug}-1.jpg`, `{guideSlug}-2.jpg`
- **culture/** — `{articleSlug}-hero.jpg`, `-1.jpg`, `-2.jpg`
- **cinema/** — `{slug}-hero.jpg`, `-1.jpg`, `-2.jpg` (films, locations, articles)
- **venues/** — `{venueSlug}.jpg` (thumbnail only)
- **regions/** — `{regionSlug}.jpg`
- **locations/** — `{locationSlug}.jpg` (parks and islands)
- **itineraries/** — `{itinerarySlug}.jpg`
- **travel-tips/** — `{tipSlug}.jpg`

Prompts for batch generation: `data/imagePrompts.ts`

**Generating the first 50 hero images:** Run `npm run generate-images` (or `npx tsx scripts/generateImages.ts --limit 50`). Requires `OPENAI_API_KEY` in the environment. The script skips any path that already has a file and writes new images under `public/images/`. Optional: `--types city,neighbourhood,guide,culture,cinema` to limit which content types to generate.
