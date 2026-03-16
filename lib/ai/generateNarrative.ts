/**
 * AI narrative generation from dataset objects. Used only by scripts; never at runtime.
 */

import { callDeepSeek } from "@/lib/ai/deepseek";
import type { City } from "@/types";
import type { Guide, GuideVenue } from "@/types";
import type { Itinerary } from "@/types";
import type { Neighbourhood } from "@/types";
import type { Film } from "@/types";
import type { Director } from "@/types";
import type { FilmLocation } from "@/types";
import type { CinemaArticle } from "@/types";

// --- Generated content types (stored in data/generated/) ---

export interface GeneratedGuideContent {
  overview: string;
  localInsights: string;
  bestTimesToVisit: string;
  priceExpectations: string;
  transportInfo: string;
  whyVisit: string;
  localEtiquette: string;
}

export interface GeneratedCityContent {
  overview: string;
  localInsights: string;
  bestTimesToVisit: string;
  priceExpectations: string;
  transportInfo: string;
  whyVisit: string;
  localEtiquette: string;
}

export interface GeneratedNeighbourhoodContent {
  overview: string;
  localInsights: string;
  bestTimesToVisit: string;
  priceExpectations: string;
  transportInfo: string;
  whyVisit: string;
  localEtiquette: string;
}

export interface GeneratedItineraryContent {
  overview: string;
  localInsights: string;
  bestTimesToVisit: string;
  priceExpectations: string;
  transportInfo: string;
  whyVisit: string;
  localEtiquette: string;
}

/** Cinema: film page narrative (~1200 words total) */
export interface GeneratedFilmContent {
  overview: string;
  plotSummary: string;
  culturalImpact: string;
  directorBackground: string;
  filmingLocationsInKorea: string;
  whyFilmMatters: string;
  travelRelevance: string;
}

/** Cinema: director page (~1000 words) */
export interface GeneratedDirectorContent {
  biography: string;
  directingStyle: string;
  majorFilms: string;
  awardsAndRecognition: string;
  influenceOnKoreanCinema: string;
}

/** Cinema: filming location guide */
export interface GeneratedFilmLocationContent {
  overview: string;
  whereScenesWereFilmed: string;
  neighbourhoodsUsed: string;
  howToVisitToday: string;
}

/** Cinema: editorial article (~1500 words) */
export interface GeneratedCinemaArticleContent {
  intro: string;
  topFilms: string;
  culturalContext: string;
  influenceOnPopCulture: string;
  relatedFilmsAndDirectors: string;
}

const GUIDE_KEYS: (keyof GeneratedGuideContent)[] = [
  "overview",
  "localInsights",
  "bestTimesToVisit",
  "priceExpectations",
  "transportInfo",
  "whyVisit",
  "localEtiquette",
];

function stripJsonFences(text: string): string {
  let s = text.trim();
  const match = s.match(/^```(?:json)?\s*([\s\S]*?)```$/);
  if (match) s = match[1].trim();
  return s;
}

function parseGuideResponse(text: string): GeneratedGuideContent | null {
  try {
    const raw = JSON.parse(stripJsonFences(text)) as Record<string, unknown>;
    const out: Record<string, string> = {};
    for (const key of GUIDE_KEYS) {
      const v = raw[key];
      if (typeof v !== "string") return null;
      out[key] = v;
    }
    return out as unknown as GeneratedGuideContent;
  } catch {
    return null;
  }
}

function buildGuidePrompt(guide: Guide, city: City): string {
  const location = guide.neighbourhood
    ? `${guide.neighbourhood}, ${city.name}`
    : city.name;
  const venueNames =
    guide.venues.length > 0
      ? guide.venues.map((v: GuideVenue) => v.name).join(", ")
      : "various venues";

  return `Write a travel guide about this location in South Korea. Use the following information only as context.

Location: ${guide.title} — ${location}
City: ${city.name}
Category: ${guide.category}
Nearby venues: ${venueNames}
Price range: ${guide.priceRange}
Nearest metro: ${guide.nearestMetro}
Opening hours: ${guide.openingHours}

Write informative travel content in the style of Lonely Planet or Time Out. Avoid generic filler. Each section should be 150–200 words.

Respond with a JSON object only. No other text. Use exactly these keys (each value is one paragraph, 150–200 words):
- overview: what the area is known for and what this guide covers
- localInsights: local culture and atmosphere
- bestTimesToVisit: best times to visit (time of day, season)
- priceExpectations: typical prices and budget
- transportInfo: how to get there, transport access
- whyVisit: why travellers visit this location
- localEtiquette: local etiquette and practical tips

Total guide length should be roughly 1000–1400 words across all sections.`;
}

export async function generateGuideNarrative(
  guide: Guide,
  city: City
): Promise<GeneratedGuideContent | null> {
  const prompt = buildGuidePrompt(guide, city);
  const text = await callDeepSeek({
    prompt,
    temperature: 0.6,
    maxTokens: 4096,
  });
  if (!text) return null;
  return parseGuideResponse(text);
}

function buildCityPrompt(city: City, neighbourhoodNames: string): string {
  return `Write a travel guide about ${city.name}, South Korea. Use the following as context.

City: ${city.name}
Tagline: ${city.tagline}
Best for: ${city.bestFor?.join(", ") ?? "culture, food, exploration"}
Neighbourhoods: ${neighbourhoodNames}

Write in the style of Lonely Planet or Time Out. Avoid generic filler. Each section 150–200 words. Total length roughly 1000–1300 words.

Respond with a JSON object only. Use exactly these keys (each value one paragraph, 150–200 words):
- overview
- localInsights
- bestTimesToVisit
- priceExpectations
- transportInfo
- whyVisit
- localEtiquette`;
}

function parseGenericResponse(
  text: string,
  keys: (keyof GeneratedCityContent)[]
): GeneratedCityContent | null {
  try {
    const raw = JSON.parse(stripJsonFences(text)) as Record<string, unknown>;
    const out: Record<string, string> = {};
    for (const key of keys) {
      const v = raw[key];
      if (typeof v !== "string") return null;
      out[key] = v;
    }
    return out as unknown as GeneratedCityContent;
  } catch {
    return null;
  }
}

const GENERIC_KEYS: (keyof GeneratedCityContent)[] = [
  "overview",
  "localInsights",
  "bestTimesToVisit",
  "priceExpectations",
  "transportInfo",
  "whyVisit",
  "localEtiquette",
];

export async function generateCityNarrative(
  city: City,
  neighbourhoods: Neighbourhood[]
): Promise<GeneratedCityContent | null> {
  const names =
    neighbourhoods.length > 0
      ? neighbourhoods.slice(0, 5).map((n) => n.name).join(", ")
      : "key districts";
  const prompt = buildCityPrompt(city, names);
  const text = await callDeepSeek({
    prompt,
    temperature: 0.6,
    maxTokens: 4096,
  });
  if (!text) return null;
  return parseGenericResponse(text, GENERIC_KEYS);
}

export async function generateNeighbourhoodNarrative(
  neighbourhood: Neighbourhood,
  city: City
): Promise<GeneratedNeighbourhoodContent | null> {
  const prompt = `Write a travel guide about ${neighbourhood.name}, ${city.name}, South Korea.

Neighbourhood: ${neighbourhood.name}
City: ${city.name}
Vibe: ${neighbourhood.vibe}
Best for: ${neighbourhood.bestFor.join(", ")}
Price range: ${neighbourhood.priceRange}
Nearest metro: ${neighbourhood.nearestMetro}

Write in the style of Lonely Planet or Time Out. Avoid generic filler. Each section 150–200 words. Total length roughly 900–1200 words.

Respond with a JSON object only. Use exactly these keys (each value one paragraph, 150–200 words):
- overview
- localInsights
- bestTimesToVisit
- priceExpectations
- transportInfo
- whyVisit
- localEtiquette`;

  const text = await callDeepSeek({
    prompt,
    temperature: 0.6,
    maxTokens: 4096,
  });
  if (!text) return null;
  return parseGenericResponse(text, GENERIC_KEYS) as GeneratedNeighbourhoodContent | null;
}

export async function generateItineraryNarrative(
  itinerary: Itinerary,
  city: City | null
): Promise<GeneratedItineraryContent | null> {
  const cityName = city?.name ?? itinerary.citySlug;
  const prompt = `Write a travel guide section about this itinerary in South Korea.

Itinerary: ${itinerary.title}
City: ${cityName}
Days: ${itinerary.days}
Budget: ${itinerary.budget}
Summary: ${itinerary.summary}

Write in the style of Lonely Planet or Time Out. Avoid generic filler. Each section 150–200 words. Total length roughly 1200–1500 words.

Respond with a JSON object only. Use exactly these keys (each value one paragraph, 150–200 words):
- overview
- localInsights
- bestTimesToVisit
- priceExpectations
- transportInfo
- whyVisit
- localEtiquette`;

  const text = await callDeepSeek({
    prompt,
    temperature: 0.6,
    maxTokens: 4096,
  });
  if (!text) return null;
  return parseGenericResponse(text, GENERIC_KEYS) as GeneratedItineraryContent | null;
}

// --- Cinema narrative generators ---

const FILM_KEYS: (keyof GeneratedFilmContent)[] = [
  "overview",
  "plotSummary",
  "culturalImpact",
  "directorBackground",
  "filmingLocationsInKorea",
  "whyFilmMatters",
  "travelRelevance",
];

function parseFilmResponse(text: string): GeneratedFilmContent | null {
  try {
    const raw = JSON.parse(stripJsonFences(text)) as Record<string, unknown>;
    const out: Record<string, string> = {};
    for (const key of FILM_KEYS) {
      const v = raw[key];
      if (typeof v !== "string") return null;
      out[key] = v;
    }
    return out as unknown as GeneratedFilmContent;
  } catch {
    return null;
  }
}

export async function generateFilmNarrative(
  film: Film,
  director: Director | null
): Promise<GeneratedFilmContent | null> {
  const directorInfo = director
    ? `Director: ${director.name}. Bio: ${director.bio}. Notable films: ${director.notableFilms.join(", ")}.`
    : "Director details not provided.";
  const prompt = `Write editorial content for a South Korea travel site about the film "${film.title}" (${film.year}).

${directorInfo}

Film summary: ${film.summary}
Genres: ${film.genres.join(", ")}
Filming locations (slugs): ${film.filmingLocations.join(", ")}
Related city slugs for travel: ${film.relatedCitySlugs.join(", ")}
Notable facts: ${film.notableFacts.join(" ")}

Write informative, travel-aware content. Target total length approximately 1200 words. Each section should be 150–250 words.

Respond with a JSON object only. Use exactly these keys (each value one paragraph):
- overview: film overview and why it matters
- plotSummary: plot summary without major spoilers
- culturalImpact: cultural impact of the film
- directorBackground: director background and style
- filmingLocationsInKorea: filming locations in Korea and travel relevance
- whyFilmMatters: why the film matters in Korean cinema
- travelRelevance: travel relevance if locations appear in Seoul, Busan or other cities`;

  const text = await callDeepSeek({
    prompt,
    temperature: 0.6,
    maxTokens: 4096,
  });
  if (!text) return null;
  return parseFilmResponse(text);
}

const DIRECTOR_KEYS: (keyof GeneratedDirectorContent)[] = [
  "biography",
  "directingStyle",
  "majorFilms",
  "awardsAndRecognition",
  "influenceOnKoreanCinema",
];

function parseDirectorResponse(text: string): GeneratedDirectorContent | null {
  try {
    const raw = JSON.parse(stripJsonFences(text)) as Record<string, unknown>;
    const out: Record<string, string> = {};
    for (const key of DIRECTOR_KEYS) {
      const v = raw[key];
      if (typeof v !== "string") return null;
      out[key] = v;
    }
    return out as unknown as GeneratedDirectorContent;
  } catch {
    return null;
  }
}

export async function generateDirectorNarrative(
  director: Director
): Promise<GeneratedDirectorContent | null> {
  const prompt = `Write editorial content for a South Korea travel site about the film director ${director.name}.

Bio: ${director.bio}
Notable films: ${director.notableFilms.join(", ")}

Include: biography, directing style, major films, awards and recognition, influence on Korean cinema. Target total length approximately 1000 words. Each section 150–250 words.

Respond with a JSON object only. Use exactly these keys (each value one paragraph):
- biography
- directingStyle
- majorFilms
- awardsAndRecognition
- influenceOnKoreanCinema`;

  const text = await callDeepSeek({
    prompt,
    temperature: 0.6,
    maxTokens: 4096,
  });
  if (!text) return null;
  return parseDirectorResponse(text);
}

const FILM_LOCATION_KEYS: (keyof GeneratedFilmLocationContent)[] = [
  "overview",
  "whereScenesWereFilmed",
  "neighbourhoodsUsed",
  "howToVisitToday",
];

function parseFilmLocationResponse(
  text: string
): GeneratedFilmLocationContent | null {
  try {
    const raw = JSON.parse(stripJsonFences(text)) as Record<string, unknown>;
    const out: Record<string, string> = {};
    for (const key of FILM_LOCATION_KEYS) {
      const v = raw[key];
      if (typeof v !== "string") return null;
      out[key] = v;
    }
    return out as unknown as GeneratedFilmLocationContent;
  } catch {
    return null;
  }
}

export async function generateFilmingLocationNarrative(
  location: FilmLocation
): Promise<GeneratedFilmLocationContent | null> {
  const scenesText = location.scenes
    .map(
      (s) =>
        `${s.sceneDescription}${s.addressOrArea ? ` — ${s.addressOrArea}` : ""}`
    )
    .join("\n");
  const prompt = `Write a filming location travel guide for a South Korea travel site.

Title: ${location.title}
Summary: ${location.summary}
Film slug: ${location.filmSlug}
City: ${location.citySlug}
Scenes:
${scenesText}

Sections: overview of filming locations, where each scene was filmed, neighbourhoods used, how to visit the locations today. Target length suitable for a travel guide. Link conceptually to neighbourhoods and travel.

Respond with a JSON object only. Use exactly these keys (each value one or more paragraphs):
- overview
- whereScenesWereFilmed
- neighbourhoodsUsed
- howToVisitToday`;

  const text = await callDeepSeek({
    prompt,
    temperature: 0.6,
    maxTokens: 4096,
  });
  if (!text) return null;
  return parseFilmLocationResponse(text);
}

const CINEMA_ARTICLE_KEYS: (keyof GeneratedCinemaArticleContent)[] = [
  "intro",
  "topFilms",
  "culturalContext",
  "influenceOnPopCulture",
  "relatedFilmsAndDirectors",
];

function parseCinemaArticleResponse(
  text: string
): GeneratedCinemaArticleContent | null {
  try {
    const raw = JSON.parse(stripJsonFences(text)) as Record<string, unknown>;
    const out: Record<string, string> = {};
    for (const key of CINEMA_ARTICLE_KEYS) {
      const v = raw[key];
      if (typeof v !== "string") return null;
      out[key] = v;
    }
    return out as unknown as GeneratedCinemaArticleContent;
  } catch {
    return null;
  }
}

export async function generateCinemaArticleNarrative(
  article: CinemaArticle
): Promise<GeneratedCinemaArticleContent | null> {
  const sectionsText = article.sections
    .map((s) => `${s.heading}: ${s.body}`)
    .join("\n");
  const prompt = `Write an editorial cinema article for a South Korea travel site.

Title: ${article.title}
Summary: ${article.summary}
Intro: ${article.intro}
Existing sections (use as context):
${sectionsText}
Related film slugs: ${article.relatedFilmSlugs?.join(", ") ?? "none"}
Related director slugs: ${article.relatedDirectorSlugs?.join(", ") ?? "none"}
Related city slugs: ${article.relatedCitySlugs?.join(", ") ?? "none"}

Sections: intro, top films, cultural context, influence on Korean pop culture, related films and directors. Target length approximately 1500 words.

Respond with a JSON object only. Use exactly these keys (each value one or more paragraphs):
- intro
- topFilms
- culturalContext
- influenceOnPopCulture
- relatedFilmsAndDirectors`;

  const text = await callDeepSeek({
    prompt,
    temperature: 0.6,
    maxTokens: 4096,
  });
  if (!text) return null;
  return parseCinemaArticleResponse(text);
}
