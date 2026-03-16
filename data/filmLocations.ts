import type { FilmLocation } from "@/types";
import { getCinemaImageUrl } from "@/lib/cinemaImages";

function location(
  slug: string,
  data: Omit<FilmLocation, "heroImage" | "slug">
): FilmLocation {
  return {
    ...data,
    slug,
    heroImage: getCinemaImageUrl(slug, "hero"),
  };
}

export const filmLocations: FilmLocation[] = [
  location("parasite-filming-locations", {
    title: "Parasite Filming Locations in Seoul",
    filmSlug: "parasite",
    citySlug: "seoul",
    summary:
      "Where Bong Joon-ho shot Parasite in Seoul: the luxury Park house, the semi-basement neighbourhood, and key streets that defined the film's class divide.",
    scenes: [
      {
        sceneDescription: "The Park family house (exterior and interior sets)",
        citySlug: "seoul",
        addressOrArea: "Purpose-built set; inspired by Gangnam architecture",
      },
      {
        sceneDescription: "Semi-basement neighbourhood and stairways",
        neighbourhoodSlug: "jongno",
        citySlug: "seoul",
        addressOrArea: "Jongno and similar older residential areas",
      },
      {
        sceneDescription: "Street and subway scenes",
        citySlug: "seoul",
        addressOrArea: "Seoul metro and streets",
      },
    ],
    relatedGuideSlugs: [
      { citySlug: "seoul", guideSlug: "cafes-gangnam" },
      { citySlug: "seoul", guideSlug: "best-bars-hongdae" },
    ],
  }),
  location("train-to-busan-filming-locations", {
    title: "Train to Busan Filming Locations",
    filmSlug: "train-to-busan",
    citySlug: "busan",
    summary:
      "The KTX from Seoul to Busan and Busan Station feature in one of Korea's most successful zombie films. Here's where key scenes were filmed.",
    scenes: [
      {
        sceneDescription: "KTX train interiors",
        citySlug: "seoul",
        addressOrArea: "KTX trains and stations",
      },
      {
        sceneDescription: "Busan Station and final sequence",
        citySlug: "busan",
        addressOrArea: "Busan Station",
      },
    ],
    relatedGuideSlugs: [{ citySlug: "busan", guideSlug: "haeundae-beach-guide" }],
  }),
  location("oldboy-filming-locations", {
    title: "Oldboy Filming Locations in Seoul",
    filmSlug: "oldboy",
    citySlug: "seoul",
    summary:
      "Park Chan-wook's Oldboy used Seoul's urban landscape for its iconic fight scenes and moody atmosphere.",
    scenes: [
      {
        sceneDescription: "Corridor fight and imprisonment",
        citySlug: "seoul",
        addressOrArea: "Studio and location shoots in Seoul",
      },
      {
        sceneDescription: "Nightlife and city streets",
        neighbourhoodSlug: "itaewon",
        citySlug: "seoul",
        addressOrArea: "Itaewon and similar districts",
      },
    ],
    relatedGuideSlugs: [
      { citySlug: "seoul", guideSlug: "nightlife-itaewon" },
      { citySlug: "seoul", guideSlug: "best-bars-hongdae" },
    ],
  }),
  location("the-handmaiden-filming-locations", {
    title: "The Handmaiden Filming Locations",
    filmSlug: "the-handmaiden",
    citySlug: "seoul",
    summary:
      "Elaborate period sets and Korean locations used for Park Chan-wook's The Handmaiden.",
    scenes: [
      {
        sceneDescription: "Japanese-style mansion and estate",
        citySlug: "seoul",
        addressOrArea: "Built sets in Korea",
      },
    ],
    relatedGuideSlugs: [],
  }),
  location("memories-of-murder-filming-locations", {
    title: "Memories of Murder Filming Locations",
    filmSlug: "memories-of-murder",
    citySlug: "seoul",
    summary:
      "Rural Gyeonggi and small-town Korea stood in for the 1980s Hwaseong area in Bong Joon-ho's crime masterpiece.",
    scenes: [
      {
        sceneDescription: "Rural roads and fields",
        citySlug: "seoul",
        addressOrArea: "Gyeonggi Province",
      },
    ],
    relatedGuideSlugs: [],
  }),
  location("decision-to-leave-filming-locations", {
    title: "Decision to Leave Filming Locations",
    filmSlug: "decision-to-leave",
    citySlug: "busan",
    summary:
      "Busan and coastal locations in Park Chan-wook's romantic noir Decision to Leave.",
    scenes: [
      {
        sceneDescription: "Busan coast and investigation",
        citySlug: "busan",
        addressOrArea: "Busan and Ipo",
      },
    ],
    relatedGuideSlugs: [{ citySlug: "busan", guideSlug: "haeundae-beach-guide" }],
  }),
];

export function getFilmLocationBySlug(slug: string): FilmLocation | undefined {
  return filmLocations.find((l) => l.slug === slug);
}

export function getAllFilmLocations(): FilmLocation[] {
  return filmLocations;
}

export function getFilmLocationsByFilm(filmSlug: string): FilmLocation[] {
  return filmLocations.filter((l) => l.filmSlug === filmSlug);
}
