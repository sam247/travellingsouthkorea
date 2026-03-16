/**
 * Cinema narrative resolver: AI-generated when available, else fallback from datasets.
 * Used by cinema pages only. Never calls AI at runtime.
 */

import type { Film } from "@/types";
import type { Director } from "@/types";
import type { FilmLocation } from "@/types";
import type { CinemaArticle } from "@/types";
import { generatedFilms } from "@/data/generated/generatedFilms";
import { generatedDirectors } from "@/data/generated/generatedDirectors";
import { generatedFilmLocations } from "@/data/generated/generatedFilmLocations";
import { generatedCinemaArticles } from "@/data/generated/generatedCinemaArticles";
import type { ContentSection } from "@/lib/content/cityContent";

export function getFilmContentSections(
  film: Film,
  director: Director | null
): ContentSection[] {
  const gen = generatedFilms[film.slug];
  if (gen) {
    return [
      { heading: "Film overview", paragraphs: [gen.overview] },
      { heading: "Plot summary", paragraphs: [gen.plotSummary] },
      { heading: "Cultural impact of the film", paragraphs: [gen.culturalImpact] },
      { heading: "Director background", paragraphs: [gen.directorBackground] },
      {
        heading: "Filming locations in Korea",
        paragraphs: [gen.filmingLocationsInKorea],
      },
      {
        heading: "Why the film matters in Korean cinema",
        paragraphs: [gen.whyFilmMatters],
      },
      {
        heading: "Travel relevance",
        paragraphs: [gen.travelRelevance],
      },
    ];
  }
  const fallback: ContentSection[] = [
    {
      heading: "Film overview",
      paragraphs: [film.summary],
    },
  ];
  if (director) {
    fallback.push({
      heading: "Director",
      paragraphs: [director.bio],
    });
  }
  if (film.notableFacts.length > 0) {
    fallback.push({
      heading: "Notable facts",
      paragraphs: [film.notableFacts.join(" ")],
    });
  }
  return fallback;
}

export function getDirectorContentSections(
  director: Director
): ContentSection[] {
  const gen = generatedDirectors[director.slug];
  if (gen) {
    return [
      { heading: "Biography", paragraphs: [gen.biography] },
      { heading: "Directing style", paragraphs: [gen.directingStyle] },
      { heading: "Major films", paragraphs: [gen.majorFilms] },
      {
        heading: "Awards and recognition",
        paragraphs: [gen.awardsAndRecognition],
      },
      {
        heading: "Influence on Korean cinema",
        paragraphs: [gen.influenceOnKoreanCinema],
      },
    ];
  }
  return [
    { heading: "Biography", paragraphs: [director.bio] },
    {
      heading: "Notable films",
      paragraphs: [director.notableFilms.join(", ")],
    },
  ];
}

export function getFilmLocationContentSections(
  location: FilmLocation
): ContentSection[] {
  const gen = generatedFilmLocations[location.slug];
  if (gen) {
    return [
      {
        heading: "Overview of the filming locations",
        paragraphs: [gen.overview],
      },
      {
        heading: "Where each scene was filmed",
        paragraphs: [gen.whereScenesWereFilmed],
      },
      {
        heading: "Neighbourhoods used in the film",
        paragraphs: [gen.neighbourhoodsUsed],
      },
      {
        heading: "How to visit the locations today",
        paragraphs: [gen.howToVisitToday],
      },
    ];
  }
  const fallback: ContentSection[] = [
    {
      heading: "Overview",
      paragraphs: [location.summary],
    },
    {
      heading: "Scenes",
      paragraphs: location.scenes.map(
        (s) =>
          `${s.sceneDescription}${s.addressOrArea ? ` — ${s.addressOrArea}` : ""}`
      ),
    },
  ];
  return fallback;
}

export function getCinemaArticleContentSections(
  article: CinemaArticle
): ContentSection[] {
  const gen = generatedCinemaArticles[article.slug];
  if (gen) {
    return [
      { heading: "Introduction", paragraphs: [gen.intro] },
      { heading: "Top films", paragraphs: [gen.topFilms] },
      { heading: "Cultural context", paragraphs: [gen.culturalContext] },
      {
        heading: "Influence on Korean pop culture",
        paragraphs: [gen.influenceOnPopCulture],
      },
      {
        heading: "Related films and directors",
        paragraphs: [gen.relatedFilmsAndDirectors],
      },
    ];
  }
  const fallback: ContentSection[] = [
    { heading: "Introduction", paragraphs: [article.intro] },
    ...article.sections.map((s) => ({
      heading: s.heading,
      paragraphs: [s.body],
    })),
  ];
  return fallback;
}
