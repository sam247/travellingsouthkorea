import type { GeneratedCinemaArticleContent } from "@/lib/ai/generateNarrative";

/**
 * AI-generated narrative for cinema editorial articles. Key = article.slug
 */
export const generatedCinemaArticles: Record<
  string,
  GeneratedCinemaArticleContent
> = {};
