/**
 * Programmatic guides generated from the venue dataset.
 * City guide: only when >= 5 venues for that category in the city.
 * Neighbourhood guide: only when >= 4 venues for that category in the neighbourhood.
 */

import type { Guide, GuideVenue } from "@/types";
import { getCities } from "@/data/cities";
import { getNeighbourhoodsByCity, getNeighbourhoodBySlug } from "@/data/neighbourhoods";
import { getVenuesByCity, getVenuesByNeighbourhood } from "@/data/venues";
import { getCityBySlug } from "@/data/cities";
import type { Venue } from "@/types";

const CITY_MIN_VENUES = 5;
const NEIGHBOURHOOD_MIN_VENUES = 4;

export type ProgrammaticGuideType =
  | "best-bars"
  | "best-restaurants"
  | "best-cafes"
  | "things-to-do";

const GUIDE_TYPES: ProgrammaticGuideType[] = [
  "best-bars",
  "best-restaurants",
  "best-cafes",
  "things-to-do",
];

/** Venue categories per guide type */
const VENUE_CATEGORIES: Record<ProgrammaticGuideType, ("bar" | "club" | "restaurant" | "cafe" | "attraction")[]> = {
  "best-bars": ["bar", "club"],
  "best-restaurants": ["restaurant"],
  "best-cafes": ["cafe"],
  "things-to-do": ["attraction"],
};

const CATEGORY_LABELS: Record<ProgrammaticGuideType, string> = {
  "best-bars": "Bars",
  "best-restaurants": "Restaurants",
  "best-cafes": "Cafes",
  "things-to-do": "Things to Do",
};

/** Map programmatic type to existing Guide category for related lookups */
const TO_GUIDE_CATEGORY: Record<ProgrammaticGuideType, string> = {
  "best-bars": "nightlife",
  "best-restaurants": "food",
  "best-cafes": "food",
  "things-to-do": "things-to-do",
};

export interface ProgrammaticGuideSpec {
  citySlug: string;
  guideSlug: string;
  type: "city" | "neighbourhood";
  guideType: ProgrammaticGuideType;
  categoryLabel: string;
  neighbourhoodSlug?: string;
}

function countCityVenues(citySlug: string, guideType: ProgrammaticGuideType): number {
  const cityVenues = getVenuesByCity(citySlug);
  const cats = VENUE_CATEGORIES[guideType];
  return cityVenues.filter((v) => cats.includes(v.category)).length;
}

function countNeighbourhoodVenues(
  neighbourhoodSlug: string,
  guideType: ProgrammaticGuideType
): number {
  const nhVenues = getVenuesByNeighbourhood(neighbourhoodSlug);
  const cats = VENUE_CATEGORIES[guideType];
  return nhVenues.filter((v) => cats.includes(v.category)).length;
}

function getVenuesForSpec(spec: ProgrammaticGuideSpec): Venue[] {
  const cats = VENUE_CATEGORIES[spec.guideType];
  if (spec.type === "city") {
    return getVenuesByCity(spec.citySlug).filter((v) => cats.includes(v.category));
  }
  return getVenuesByNeighbourhood(spec.neighbourhoodSlug!).filter((v) =>
    cats.includes(v.category)
  );
}

/** All programmatic guide specs that meet venue thresholds */
export function getProgrammaticGuideSpecs(): ProgrammaticGuideSpec[] {
  const specs: ProgrammaticGuideSpec[] = [];
  const cities = getCities();

  for (const city of cities) {
    for (const guideType of GUIDE_TYPES) {
      const cityCount = countCityVenues(city.slug, guideType);
      if (cityCount >= CITY_MIN_VENUES) {
        const slug =
          guideType === "best-bars"
            ? `best-bars-${city.slug}`
            : guideType === "best-restaurants"
              ? `best-restaurants-${city.slug}`
              : guideType === "best-cafes"
                ? `best-cafes-${city.slug}`
                : `things-to-do-${city.slug}`;
        specs.push({
          citySlug: city.slug,
          guideSlug: slug,
          type: "city",
          guideType,
          categoryLabel: CATEGORY_LABELS[guideType],
        });
      }
    }

    const neighbourhoods = getNeighbourhoodsByCity(city.slug);
    for (const nh of neighbourhoods) {
      for (const guideType of GUIDE_TYPES) {
        const nhCount = countNeighbourhoodVenues(nh.slug, guideType);
        if (nhCount >= NEIGHBOURHOOD_MIN_VENUES) {
          const slug =
            guideType === "best-bars"
              ? `best-bars-${nh.slug}`
              : guideType === "best-restaurants"
                ? `best-restaurants-${nh.slug}`
                : guideType === "best-cafes"
                  ? `best-cafes-${nh.slug}`
                  : `things-to-do-${nh.slug}`;
          specs.push({
            citySlug: city.slug,
            guideSlug: slug,
            type: "neighbourhood",
            guideType,
            categoryLabel: CATEGORY_LABELS[guideType],
            neighbourhoodSlug: nh.slug,
          });
        }
      }
    }
  }

  return specs;
}

export function getProgrammaticGuideSpec(
  citySlug: string,
  guideSlug: string
): ProgrammaticGuideSpec | null {
  const specs = getProgrammaticGuideSpecs();
  return specs.find((s) => s.citySlug === citySlug && s.guideSlug === guideSlug) ?? null;
}

import { getGuideImagePath } from "@/lib/imagePaths";

function venueToGuideVenue(v: Venue): GuideVenue {
  return {
    name: v.name,
    image: v.image,
    description: v.description,
    address: v.address ?? "",
    tip: v.overview ?? v.whyVisit ?? "",
    priceLevel: v.priceLevel ?? "₩₩",
    lat: v.lat,
    lng: v.lng,
  };
}

/** Build a Guide-compatible object for the programmatic guide page */
export function buildProgrammaticGuide(spec: ProgrammaticGuideSpec): Guide {
  const city = getCityBySlug(spec.citySlug);
  const cityName = city?.name ?? spec.citySlug;
  const neighbourhood =
    spec.neighbourhoodSlug != null
      ? getNeighbourhoodBySlug(spec.neighbourhoodSlug)
      : null;
  const neighbourhoodName = neighbourhood?.name ?? spec.neighbourhoodSlug ?? "";
  const venues = getVenuesForSpec(spec);
  const guideVenues: GuideVenue[] = venues.map(venueToGuideVenue);

  const isCity = spec.type === "city";
  const title = isCity
    ? `Best ${spec.categoryLabel} in ${cityName}`
    : `Best ${spec.categoryLabel} in ${neighbourhoodName}, ${cityName}`;
  const summary =
    isCity
      ? `Discover the best ${spec.categoryLabel.toLowerCase()} in ${cityName}. Curated spots from our venue list.`
      : `Discover the best ${spec.categoryLabel.toLowerCase()} in ${neighbourhoodName}, one of ${cityName}'s most popular neighbourhoods.`;
  const intro =
    isCity
      ? `${cityName} has a thriving scene for ${spec.categoryLabel.toLowerCase()}. From local favourites to standout spots, here are our top picks based on the venues we track.`
      : `${neighbourhoodName} is one of ${cityName}'s best areas for ${spec.categoryLabel.toLowerCase()}. Here are the top spots worth visiting.`;

  return {
    slug: spec.guideSlug,
    title,
    city: spec.citySlug,
    category: TO_GUIDE_CATEGORY[spec.guideType],
    neighbourhood: neighbourhoodName,
    neighbourhoodSlug: spec.neighbourhoodSlug ?? "",
    priceRange: "Varies",
    nearestMetro: neighbourhood?.nearestMetro ?? city?.name ?? "—",
    openingHours: "Varies",
    image: getGuideImagePath(spec.guideSlug, "hero"),
    summary,
    intro,
    venues: guideVenues,
    relatedSlugs: [],
    tags: [spec.categoryLabel],
    authorSlug: "editors",
    updatedDate: "2026-03-16",
    contentType: "guide",
  };
}
