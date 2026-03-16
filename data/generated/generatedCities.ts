import type { GeneratedCityContent } from "@/lib/ai/generateNarrative";

/**
 * AI-generated narrative content for city pages.
 * Populated by a future generate-cities script. Key = city.slug
 */
export const generatedCities: Record<string, GeneratedCityContent> = {};
