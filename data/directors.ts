import type { Director } from "@/types";

export const directors: Director[] = [
  {
    name: "Bong Joon-ho",
    slug: "bong-joon-ho",
    bio: "Academy Award-winning director known for Parasite, Memories of Murder, and The Host. His work blends genre with sharp social commentary.",
    notableFilms: ["parasite", "memories-of-murder", "the-host", "snowpiercer"],
  },
  {
    name: "Park Chan-wook",
    slug: "park-chan-wook",
    bio: "Director of Oldboy, The Handmaiden, and Decision to Leave. Master of psychological thrillers and visually striking cinema.",
    notableFilms: ["oldboy", "the-handmaiden", "decision-to-leave", "sympathy-for-mr-vengeance"],
  },
  {
    name: "Kim Jee-woon",
    slug: "kim-jee-woon",
    bio: "Genre-spanning director of A Tale of Two Sisters, I Saw the Devil, and The Good, the Bad, the Weird.",
    notableFilms: ["a-tale-of-two-sisters", "i-saw-the-devil", "the-good-the-bad-the-weird"],
  },
  {
    name: "Lee Chang-dong",
    slug: "lee-chang-dong",
    bio: "Acclaimed auteur of Burning, Poetry, and Secret Sunshine. His films explore class, desire, and moral ambiguity.",
    notableFilms: ["burning", "poetry", "secret-sunshine"],
  },
  {
    name: "Na Hong-jin",
    slug: "na-hong-jin",
    bio: "Director of The Wailing and The Chaser. Known for intense thrillers and horror with deep thematic layers.",
    notableFilms: ["the-wailing", "the-chaser"],
  },
  {
    name: "Yeon Sang-ho",
    slug: "yeon-sang-ho",
    bio: "Director of Train to Busan and Peninsula. Pioneered Korean zombie cinema with a focus on social dynamics under pressure.",
    notableFilms: ["train-to-busan", "peninsula"],
  },
];

export function getDirectorBySlug(slug: string): Director | undefined {
  return directors.find((d) => d.slug === slug);
}

export function getAllDirectors(): Director[] {
  return directors;
}
