export interface Region {
  slug: string;
  name: string;
  description: string;
  image: string;
  citySlugs: string[];
}

export interface City {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  regionSlug: string;
  /** Optional location for maps and schema */
  lat?: number;
  lng?: number;
  /** Short intro for cards and schema */
  intro?: string;
  /** e.g. nightlife, food, shopping */
  bestFor?: string[];
}

export interface Neighbourhood {
  slug: string;
  name: string;
  citySlug: string;
  image: string;
  intro: string;
  nearestMetro: string;
  vibe: string;
  bestFor: string[];
  priceRange: string;
}

export interface Category {
  slug: string;
  label: string;
  description: string;
  filters: string[];
}

/** Inline venue within a guide (no slug) */
export interface GuideVenue {
  name: string;
  image: string;
  description: string;
  address: string;
  tip: string;
  priceLevel: string;
  lat?: number;
  lng?: number;
}

export interface Guide {
  slug: string;
  title: string;
  city: string;
  category: string;
  neighbourhood: string;
  neighbourhoodSlug: string;
  priceRange: string;
  nearestMetro: string;
  openingHours: string;
  image: string;
  summary: string;
  intro: string;
  venues: GuideVenue[];
  relatedSlugs: string[];
  tags: string[];
  authorSlug: string;
  updatedDate: string;
  contentType: "guide";
}

export type VenueCategory = "bar" | "restaurant" | "cafe" | "attraction" | "club";

export interface Venue {
  slug: string;
  name: string;
  citySlug: string;
  neighbourhoodSlug?: string;
  category: VenueCategory;
  image: string;
  description: string;
  address?: string;
  nearestMetro?: string;
  priceLevel?: string;
  openingHours?: string;
  overview?: string;
  whyVisit?: string;
  tips?: string[];
  lat?: number;
  lng?: number;
  contentType: "venue";
}

export interface TimeSlot {
  label: "Morning" | "Afternoon" | "Evening";
  title: string;
  description: string;
  venueSlug?: string;
  guideSlug?: string;
  image: string;
  tip?: string;
}

export interface DayPlan {
  dayNumber: number;
  title: string;
  timeSlots: TimeSlot[];
}

export interface Itinerary {
  slug: string;
  title: string;
  citySlug: string;
  days: number;
  image: string;
  summary: string;
  intro: string;
  budget: string;
  authorSlug: string;
  updatedDate: string;
  dayPlans: DayPlan[];
  contentType: "itinerary";
}

export interface TravelTip {
  slug: string;
  title: string;
  image: string;
  summary: string;
  content: string;
  tags: string[];
  authorSlug: string;
  updatedDate: string;
  contentType: "travel-tip";
}

export interface Author {
  slug: string;
  name: string;
  image: string;
  location: string;
  bio: string;
  topics: string[];
  expertise?: string;
  yearsInKorea?: number;
}

/** Shared shape for islands and parks (location pages) */
export interface Island {
  name: string;
  slug: string;
  regionSlug: string;
  description: string;
  heroImage: string;
}

export interface Park {
  name: string;
  slug: string;
  regionSlug: string;
  description: string;
  heroImage: string;
}

export type LocationType = "island" | "park";

export type Location = (Island | Park) & { locationType: LocationType };

/** Culture editorial section */
export type CultureArticleCategory =
  | "fashion"
  | "beauty"
  | "k-pop"
  | "nightlife"
  | "food"
  | "festivals"
  | "lifestyle";

export interface CultureArticleSection {
  heading: string;
  body: string;
  image?: string;
}

export interface CultureArticleFAQ {
  question: string;
  answer: string;
}

export interface CultureArticleRelatedGuide {
  citySlug: string;
  guideSlug: string;
}

export interface CultureArticleTopCta {
  heading: string;
  body: string;
  ctaText: string;
  ctaHref: string;
}

export interface CultureArticle {
  title: string;
  slug: string;
  summary: string;
  category: CultureArticleCategory;
  heroImage: string;
  supportingImages?: string[];
  authorSlug: string;
  updatedDate: string;
  intro: string;
  sections: CultureArticleSection[];
  faq: CultureArticleFAQ[];
  relatedArticleSlugs?: string[];
  relatedGuides?: CultureArticleRelatedGuide[];
  relatedCitySlugs?: string[];
  /** Optional CTA block shown at top of article body (e.g. invite readers to be featured). */
  topCta?: CultureArticleTopCta;
}

/** Cinema section */
export interface Film {
  title: string;
  slug: string;
  year: number;
  directorSlug: string;
  genres: string[];
  summary: string;
  filmingLocations: string[];
  notableFacts: string[];
  heroImage: string;
  relatedCitySlugs: string[];
}

export interface Director {
  name: string;
  slug: string;
  bio: string;
  notableFilms: string[];
}

export interface FilmLocationScene {
  sceneDescription: string;
  neighbourhoodSlug?: string;
  citySlug: string;
  addressOrArea?: string;
}

export interface FilmLocation {
  slug: string;
  title: string;
  filmSlug: string;
  citySlug: string;
  summary: string;
  scenes: FilmLocationScene[];
  heroImage: string;
  relatedGuideSlugs?: { citySlug: string; guideSlug: string }[];
}

export interface CinemaArticleSection {
  heading: string;
  body: string;
}

export interface CinemaArticle {
  title: string;
  slug: string;
  summary: string;
  intro: string;
  sections: CinemaArticleSection[];
  heroImage: string;
  relatedFilmSlugs?: string[];
  relatedDirectorSlugs?: string[];
  relatedCitySlugs?: string[];
}
