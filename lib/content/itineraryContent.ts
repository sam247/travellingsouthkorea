import type { Itinerary } from "@/types";
import type { City } from "@/types";
import type { TopHighlightsSection } from "./cityContent";
import type { ContentSection } from "./cityContent";

export function getItineraryNarrative(
  itinerary: Itinerary,
  city: City | null
): ContentSection[] {
  const cityName = city?.name ?? itinerary.citySlug;
  const days = itinerary.days;
  return [
    {
      heading: "How to use this itinerary",
      paragraphs: [
        `This ${days}-day plan is designed to be flexible. Follow it day by day for a structured introduction to ${cityName}, or pick the days and activities that match your interests. Each day balances sights, neighbourhood exploration and food.`,
        `Start early to make the most of opening hours and avoid the busiest crowds at palaces and popular areas. Build in buffer time for travel between neighbourhoods — the metro is reliable but allow 20–40 minutes for cross-town trips.`,
        `Evenings are reserved for food and nightlife where relevant. If you prefer early nights, you can substitute a quieter dinner or neighbourhood stroll. The itinerary works for different energy levels; adjust the pace to suit you.`,
      ],
    },
  ];
}

export function getTopHighlightsForItinerary(
  itinerary: Itinerary,
  city: City | null
): TopHighlightsSection {
  const title = itinerary.title;
  const days = itinerary.days;
  const cityName = city?.name ?? itinerary.citySlug;
  const dayTitles = itinerary.dayPlans?.slice(0, 3).map((d) => d.title) ?? [];
  const highlights: string[] = [];
  highlights.push(`A ${days}-day itinerary covering the best of ${cityName}`);
  if (dayTitles.length > 0) {
    highlights.push(`Explore ${dayTitles.join(", ")} and more`);
  }
  highlights.push(`Mix of historic sights, neighbourhoods, food and nightlife`);
  highlights.push(`Practical budget: around ${itinerary.budget} per day`);
  highlights.push(`Use the subway and a T-Money card for transport between areas`);
  return { heading: `Top highlights: ${title}`, highlights };
}
