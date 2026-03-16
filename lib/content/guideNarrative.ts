/**
 * Resolves guide narrative content: AI-generated when available, otherwise fallback.
 * Used by the guide page only. Never calls AI at runtime.
 */

import type { City } from "@/types";
import type { Guide } from "@/types";
import { generatedGuides } from "@/data/generated/generatedGuides";
import { getGuideContent } from "@/lib/content/guideContent";
import {
  getLocalInsightsForGuide,
  getBudgetGuideForGuide,
  getLocalEtiquetteForGuide,
} from "@/lib/content/insights";
import type { ContentSection } from "@/lib/content/cityContent";
import type { InsightSection } from "@/lib/content/insights";

export function getGuideContentSections(
  guide: Guide,
  city: City
): ContentSection[] {
  const gen = generatedGuides[guide.slug];
  if (!gen) return getGuideContent(guide, city);

  return [
    { heading: "Overview of the area", paragraphs: [gen.overview] },
    {
      heading: "Best times to visit",
      paragraphs: [gen.bestTimesToVisit],
    },
    {
      heading: "Getting there",
      paragraphs: [gen.transportInfo],
    },
    {
      heading: "Why visit this location",
      paragraphs: [gen.whyVisit],
    },
  ];
}

export function getLocalInsightsForGuideResolved(
  guide: Guide,
  city: City
): InsightSection {
  const gen = generatedGuides[guide.slug];
  if (!gen) return getLocalInsightsForGuide(guide, city);
  return {
    heading: "Local insights",
    paragraphs: [gen.localInsights],
  };
}

export function getBudgetGuideForGuideResolved(
  guide: Guide,
  city: City
): InsightSection {
  const gen = generatedGuides[guide.slug];
  if (!gen) return getBudgetGuideForGuide(guide, city);
  return {
    heading: "Budget expectations",
    paragraphs: [gen.priceExpectations],
  };
}

export function getLocalEtiquetteForGuideResolved(
  guide: Guide,
  city: City
): InsightSection {
  const gen = generatedGuides[guide.slug];
  if (!gen) return getLocalEtiquetteForGuide(guide, city);
  return {
    heading: "Local etiquette",
    paragraphs: [gen.localEtiquette],
  };
}
