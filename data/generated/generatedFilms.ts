import type { GeneratedFilmContent } from "@/lib/ai/generateNarrative";

/**
 * AI-generated narrative for film pages. Populated by scripts. Key = film.slug
 */
export const generatedFilms: Record<string, GeneratedFilmContent> = {};
