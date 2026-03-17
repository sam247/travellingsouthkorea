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
    {
      heading: "What to pack and prepare",
      paragraphs: [
        `Before you go: get a T-Money card at any convenience store or station — it works on metro, buses and some taxis. Download Naver Map or KakaoMap for directions; Google Maps is less reliable in Korea. Comfortable walking shoes are essential; you'll cover a lot on foot.`,
        `Have some cash on you; many street food stalls and smaller restaurants are cash-only. English is spoken in tourist areas but not everywhere; a few Korean phrases and a translation app help. Check opening hours for palaces and museums; some close on certain weekdays.`,
      ],
    },
    {
      heading: "When to go",
      paragraphs: [
        `Spring (March–May) and autumn (September–November) are the most comfortable for this itinerary: mild weather and long daylight hours. Cherry blossom and fall foliage draw bigger crowds, so book accommodation early. Summer and winter are still rewarding; pack for heat or cold and plan indoor options for the hottest or coldest parts of the day.`,
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
