import type { Film } from "@/types";
import { getCinemaImageUrl } from "@/lib/cinemaImages";

function film(
  slug: string,
  data: Omit<Film, "heroImage" | "slug">
): Film {
  return {
    ...data,
    slug,
    heroImage: getCinemaImageUrl(slug, "hero"),
  };
}

export const films: Film[] = [
  film("parasite", {
    title: "Parasite",
    year: 2019,
    directorSlug: "bong-joon-ho",
    genres: ["Thriller", "Drama", "Dark Comedy"],
    summary:
      "A poor family infiltrates a wealthy household by posing as unrelated professionals. Bong Joon-ho's Oscar-winning masterpiece explores class inequality in Seoul.",
    filmingLocations: ["parasite-filming-locations"],
    notableFacts: [
      "First South Korean film to win the Palme d'Or and Oscar Best Picture",
      "Key locations in Seoul including the luxury house set and semi-basement neighbourhood",
    ],
    relatedCitySlugs: ["seoul"],
  }),
  film("train-to-busan", {
    title: "Train to Busan",
    year: 2016,
    directorSlug: "yeon-sang-ho",
    genres: ["Horror", "Thriller", "Zombie"],
    summary:
      "A zombie outbreak spreads on a high-speed train from Seoul to Busan. A father and daughter fight to survive the journey.",
    filmingLocations: ["train-to-busan-filming-locations"],
    notableFacts: [
      "One of the highest-grossing Korean films of all time",
      "Filmed on KTX and at Busan Station",
    ],
    relatedCitySlugs: ["seoul", "busan"],
  }),
  film("oldboy", {
    title: "Oldboy",
    year: 2003,
    directorSlug: "park-chan-wook",
    genres: ["Thriller", "Drama", "Mystery"],
    summary:
      "A man is imprisoned for 15 years without explanation, then released and given five days to discover why. Park Chan-wook's brutal, iconic revenge thriller.",
    filmingLocations: ["oldboy-filming-locations"],
    notableFacts: [
      "Won the Grand Prix at Cannes",
      "Seoul locations include nightlife districts and modernist architecture",
    ],
    relatedCitySlugs: ["seoul"],
  }),
  film("the-handmaiden", {
    title: "The Handmaiden",
    year: 2016,
    directorSlug: "park-chan-wook",
    genres: ["Drama", "Thriller", "Romance"],
    summary:
      "A Korean con man hires a pickpocket to pose as a handmaiden to a Japanese heiress. Adapted from Sarah Waters' Fingersmith, set in 1930s Korea under Japanese rule.",
    filmingLocations: ["the-handmaiden-filming-locations"],
    notableFacts: [
      "Filmed in Korea with elaborate period sets",
      "Multiple twists and sumptuous visual design",
    ],
    relatedCitySlugs: ["seoul"],
  }),
  film("memories-of-murder", {
    title: "Memories of Murder",
    year: 2003,
    directorSlug: "bong-joon-ho",
    genres: ["Crime", "Drama", "Thriller"],
    summary:
      "Based on Korea's first serial killer case. Two detectives and a forensics expert hunt a murderer in a rural province in the 1980s.",
    filmingLocations: ["memories-of-murder-filming-locations"],
    notableFacts: [
      "Based on the Hwaseong serial murders",
      "Shot in rural Gyeonggi and small-town Korea",
    ],
    relatedCitySlugs: ["seoul"],
  }),
  film("decision-to-leave", {
    title: "Decision to Leave",
    year: 2022,
    directorSlug: "park-chan-wook",
    genres: ["Romance", "Mystery", "Drama"],
    summary:
      "A detective investigating a man's death becomes obsessed with the widow. Park Chan-wook's romantic noir set in Busan and Ipo.",
    filmingLocations: ["decision-to-leave-filming-locations"],
    notableFacts: [
      "Won Best Director at Cannes",
      "Busan and coastal locations feature prominently",
    ],
    relatedCitySlugs: ["busan"],
  }),
];

export function getFilmBySlug(slug: string): Film | undefined {
  return films.find((f) => f.slug === slug);
}

export function getAllFilms(): Film[] {
  return films;
}

export function getFilmsByDirector(directorSlug: string): Film[] {
  return films.filter((f) => f.directorSlug === directorSlug);
}
