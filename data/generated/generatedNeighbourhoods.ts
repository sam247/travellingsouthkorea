import type { GeneratedNeighbourhoodContent } from "@/lib/ai/generateNarrative";

/**
 * AI-generated narrative content for neighbourhood pages.
 * Populated by a future generate-neighbourhoods script.
 * Key = `${citySlug}:${neighbourhoodSlug}` or neighbourhood.slug if unique.
 */
export const generatedNeighbourhoods: Record<
  string,
  GeneratedNeighbourhoodContent
> = {};
