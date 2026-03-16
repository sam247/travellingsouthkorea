import type { City } from "@/types";
import type { Neighbourhood } from "@/types";
import type { Category } from "@/types";
import type { ContentSection } from "./cityContent";

export interface CityCategoryContentSummary {
  categoryLabel: string;
  guides: { length: number };
  venues: { length: number };
  neighbourhoods?: { length: number };
  itineraries?: { length: number };
  travelTips?: { length: number };
}

export interface NeighbourhoodCategoryContentSummary {
  categoryLabel: string;
  guides: { length: number };
  venues: { length: number };
}

export function getCategoryContentForCity(
  city: City,
  category: Category,
  content: CityCategoryContentSummary
): ContentSection[] {
  const cityName = city.name;
  const label = content.categoryLabel;
  const labelLower = label.toLowerCase();
  const guideCount = content.guides.length;
  const venueCount = content.venues.length;
  const hasListings = guideCount > 0 || venueCount > 0;

  return [
    {
      heading: `Types of ${labelLower} in ${cityName}`,
      paragraphs: [
        `${label} in ${cityName} covers a wide range of experiences. Whether you're looking for specific venues, neighbourhood guides or practical tips, this section points you to the best ${labelLower} the city has to offer.`,
        hasListings
          ? `Below you'll find curated guides and venue recommendations for ${labelLower} in ${cityName}. We've selected spots that capture the local character and suit different budgets and styles. Use the filters and links to dive into neighbourhoods and individual places.`
          : `We're still adding more ${labelLower} recommendations for ${cityName}. In the meantime, explore our city guide and neighbourhood pages for general advice and related categories like food, nightlife and things to do.`,
      ],
    },
    {
      heading: "Local highlights",
      paragraphs: [
        city.bestFor?.length
          ? `${cityName} is especially strong in ${city.bestFor.slice(0, 2).join(" and ")}, so ${labelLower} here often reflects that. Look for neighbourhoods and venues that match the city's tagline: "${city.tagline}".`
          : `The best ${labelLower} in ${cityName} tend to cluster in certain neighbourhoods. Check our area guides to see which districts specialise in what you're after, then use this category to find specific spots.`,
        `Season and day of the week can affect opening hours and crowds. For restaurants and bars, consider booking or arriving early at popular places. For attractions and outdoor activities, check local events and weather.`,
      ],
    },
    {
      heading: "Travel tips",
      paragraphs: [
        `When exploring ${labelLower} in ${cityName}, carry a T-Money card for transport and have some cash for smaller vendors. Download Naver Map or KakaoMap for directions and opening hours.`,
        `Respect local customs and opening times. Many places close on one weekday or have seasonal hours. Our travel tips section has general advice on visiting South Korea; combine that with this category for a smooth trip in ${cityName}.`,
        `The best ${labelLower} in ${cityName} often cluster in specific neighbourhoods. Use the links below to jump to area guides and individual venues; we've organised this page so you can plan by district or by type of experience.`,
      ],
    },
  ];
}

export function getCategoryContentForNeighbourhood(
  neighbourhood: Neighbourhood,
  city: City,
  category: Category,
  content: NeighbourhoodCategoryContentSummary
): ContentSection[] {
  const name = neighbourhood.name;
  const cityName = city.name;
  const label = content.categoryLabel;
  const labelLower = label.toLowerCase();
  const metro = neighbourhood.nearestMetro;
  const hasListings = content.guides.length > 0 || content.venues.length > 0;

  return [
    {
      heading: `Types of ${labelLower} in ${name}`,
      paragraphs: [
        `${name} is one of ${cityName}'s most popular neighbourhoods for ${labelLower}. The area's ${neighbourhood.vibe.toLowerCase()} vibe shows in its mix of venues and experiences, from casual spots to destination-worthy places.`,
        hasListings
          ? `Below we've listed guides and venues for ${labelLower} in ${name}. Use them to plan your visit; many spots are within walking distance of ${metro}.`
          : `We're building out more ${labelLower} recommendations for ${name}. Meanwhile, our neighbourhood overview and ${cityName} category pages can help you plan your time here.`,
      ],
    },
    {
      heading: "Local highlights",
      paragraphs: [
        `${name} is known for ${neighbourhood.bestFor?.slice(0, 2).join(" and ") ?? "its mix of dining, nightlife and culture"}. The best ${labelLower} here reflect that — look for places that fit the neighbourhood's character and your budget (typically ${neighbourhood.priceRange} in ${name}).`,
        `Getting to ${name} is easy via ${metro}. Once you're in the area, most places are walkable. Weekdays are often less crowded than weekends; check individual venues for opening hours and reservations.`,
      ],
    },
    {
      heading: "Travel tips",
      paragraphs: [
        `When visiting ${name} for ${labelLower}, bring cash for small vendors and some cafes. Respect local etiquette and opening times. If you're combining with other neighbourhoods, the metro and buses in ${cityName} make it easy to hop between areas.`,
        `For more ideas in ${cityName}, see our city-wide ${labelLower} category and other neighbourhood guides. Our travel tips section has practical advice for getting around and making the most of your trip.`,
        `Opening hours in ${name} vary: some venues open late morning, others in the afternoon. Weekends are busier than weekdays. Check individual listings for reservations and seasonal changes.`,
      ],
    },
  ];
}
