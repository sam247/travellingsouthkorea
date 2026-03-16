import type { GeneratedGuideContent } from "@/lib/ai/generateNarrative";

/**
 * AI-generated narrative content for guide pages.
 * Populated by running: npm run generate-content
 * Key = guide.slug
 */
export const generatedGuides: Record<string, GeneratedGuideContent> = {};
