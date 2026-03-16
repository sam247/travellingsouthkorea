import type { CultureArticle, CultureArticleSection } from "@/types";

export interface DisplaySection extends CultureArticleSection {
  imageUrl?: string;
}

/**
 * Returns sections with optional image URLs resolved from article slug and supportingImages index.
 */
export function getArticleDisplaySections(article: CultureArticle): DisplaySection[] {
  return article.sections.map((section, index) => ({
    ...section,
    imageUrl: section.image
      ? section.image
      : article.supportingImages?.[index]
        ? article.supportingImages[index]
        : index === 0 && article.supportingImages?.[0]
          ? article.supportingImages[0]
          : undefined,
  }));
}
