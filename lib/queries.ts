/**
 * Centralised content queries for page templates.
 * Pages should use these instead of embedding query logic.
 */

import { getCities as getCitiesList, cities } from "@/data/cities";
import { guides } from "@/data/guides";
import { venues } from "@/data/venues";
import { itineraries } from "@/data/itineraries";
import { travelTips } from "@/data/travelTips";
import { getGuidesByCategory, getGuidesByCity, getGuidesByNeighbourhood, getGuidesByAuthor } from "@/data/guides";
import { getVenuesByCity, getVenuesByNeighbourhood, getVenuesByCategory } from "@/data/venues";
import { getItinerariesByAuthor, getItinerariesByCity } from "@/data/itineraries";
import { getTravelTipsByAuthor, getFeaturedEditorialTravelTips } from "@/data/travelTips";
import { getCategoryBySlug } from "@/data/categories";
import { getNeighbourhoodsByCity } from "@/data/neighbourhoods";
import type { Guide } from "@/types";
import type { Venue } from "@/types";
import type { Itinerary } from "@/types";
import type { TravelTip } from "@/types";
import type { Neighbourhood } from "@/types";

export function getCities() {
  return getCitiesList();
}

export function getFeaturedCities(limit = 5) {
  return cities.slice(0, limit);
}

export function getFeaturedGuides(limit = 6) {
  return guides.slice(0, limit);
}

export function getFeaturedGuidesForHome(limit = 9) {
  return guides.slice(0, limit);
}

export { getFeaturedEditorialTravelTips };

export function getPopularVenuesByCity(citySlug: string, limit = 6) {
  return venues.filter((v) => v.citySlug === citySlug).slice(0, limit);
}

export function getGuidesByAuthorForPage(authorSlug: string): Guide[] {
  return getGuidesByAuthor(authorSlug);
}

export function getItinerariesByAuthorForPage(authorSlug: string): Itinerary[] {
  return getItinerariesByAuthor(authorSlug);
}

export function getTravelTipsByAuthorForPage(authorSlug: string): TravelTip[] {
  return getTravelTipsByAuthor(authorSlug);
}

export function getGuidesByNeighbourhoodForPage(neighbourhoodSlug: string): Guide[] {
  return getGuidesByNeighbourhood(neighbourhoodSlug);
}

export function getGuidesByCityForPage(citySlug: string): Guide[] {
  return getGuidesByCity(citySlug);
}

export function getVenuesByCityForPage(citySlug: string): Venue[] {
  return getVenuesByCity(citySlug);
}

export function getVenuesByNeighbourhoodForPage(neighbourhoodSlug: string): Venue[] {
  return getVenuesByNeighbourhood(neighbourhoodSlug);
}

export interface CityCategoryContent {
  guides: Guide[];
  venues: Venue[];
  itineraries: Itinerary[];
  neighbourhoods: Neighbourhood[];
  travelTips: TravelTip[];
  categoryLabel: string;
}

export interface NeighbourhoodCategoryContent {
  guides: Guide[];
  venues: Venue[];
  categoryLabel: string;
}

const neighbourhoodVenueCategoryMap: Record<string, string[]> = {
  bars: ["bar", "club"],
  restaurants: ["restaurant"],
  cafes: ["cafe"],
  "things-to-do": ["attraction"],
};

const neighbourhoodGuideCategoryMap: Record<string, string> = {
  bars: "nightlife",
  restaurants: "food",
  cafes: "food",
  "things-to-do": "things-to-do",
};

export function getNeighbourhoodCategoryContent(
  neighbourhoodSlug: string,
  categorySlug: string
): NeighbourhoodCategoryContent {
  const category = getCategoryBySlug(categorySlug);
  const categoryLabel = category?.label ?? categorySlug;
  const guideCategory = neighbourhoodGuideCategoryMap[categorySlug];
  const venueCats = neighbourhoodVenueCategoryMap[categorySlug] ?? [];
  const guides = getGuidesByNeighbourhood(neighbourhoodSlug).filter(
    (g) => guideCategory && g.category === guideCategory
  );
  const allVenues = getVenuesByNeighbourhood(neighbourhoodSlug);
  const venues = venueCats.length
    ? allVenues.filter((v) => venueCats.includes(v.category))
    : [];
  return { guides, venues, categoryLabel };
}

const venueCategoryMap: Record<string, string[]> = {
  bars: ["bar", "club"],
  restaurants: ["restaurant"],
  cafes: ["cafe"],
  nightlife: ["bar", "club"],
  food: ["restaurant", "cafe"],
  "things-to-do": ["attraction"],
};

const guideCategoryMap: Record<string, string> = {
  bars: "nightlife",
  restaurants: "food",
  cafes: "food",
};

export function getCityCategoryContent(
  citySlug: string,
  categorySlug: string
): CityCategoryContent {
  const category = getCategoryBySlug(categorySlug);
  const categoryLabel = category?.label ?? categorySlug;

  if (categorySlug === "itineraries") {
    return {
      guides: [],
      venues: [],
      itineraries: getItinerariesByCity(citySlug),
      neighbourhoods: [],
      travelTips: [],
      categoryLabel,
    };
  }

  if (categorySlug === "neighbourhoods") {
    return {
      guides: [],
      venues: [],
      itineraries: [],
      neighbourhoods: getNeighbourhoodsByCity(citySlug),
      travelTips: [],
      categoryLabel,
    };
  }

  if (categorySlug === "travel-tips") {
    return {
      guides: [],
      venues: [],
      itineraries: [],
      neighbourhoods: [],
      travelTips,
      categoryLabel,
    };
  }

  const guideCategory = guideCategoryMap[categorySlug] ?? categorySlug;
  const guidesList = getGuidesByCategory(guideCategory, citySlug);
  const venueCats = venueCategoryMap[categorySlug] ?? [];
  const venuesList = venueCats.flatMap((c) => getVenuesByCategory(c, citySlug));

  return {
    guides: guidesList,
    venues: venuesList,
    itineraries: [],
    neighbourhoods: [],
    travelTips: [],
    categoryLabel,
  };
}
