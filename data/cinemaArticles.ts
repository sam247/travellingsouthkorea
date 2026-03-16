import type { CinemaArticle } from "@/types";
import { getCinemaImageUrl } from "@/lib/cinemaImages";

function article(
  slug: string,
  data: Omit<CinemaArticle, "heroImage" | "slug">
): CinemaArticle {
  return {
    ...data,
    slug,
    heroImage: getCinemaImageUrl(slug, "hero"),
  };
}

export const cinemaArticles: CinemaArticle[] = [
  article("best-korean-horror-movies", {
    title: "Best Korean Horror Movies",
    summary:
      "From supernatural folklore to psychological terror, the best Korean horror films and where they connect to travel in Korea.",
    intro:
      "Korean horror has gained a global following for its blend of tradition, social commentary, and sheer dread. This guide covers essential titles and how they link to places you can visit.",
    sections: [
      {
        heading: "Classics and breakout hits",
        body: "A Tale of Two Sisters, The Wailing, and Train to Busan have defined Korean horror for international audiences. Each draws on different tropes—family trauma, shamanic ritual, zombie survival—while remaining distinctly Korean in setting and tone.",
      },
      {
        heading: "Cultural context",
        body: "Many Korean horrors tap into folklore, Confucian family pressure, and the rapid change of modern society. Filming locations often span rural villages, Seoul neighbourhoods, and coastal cities like Busan, making them a natural bridge to travel.",
      },
      {
        heading: "Where to explore",
        body: "Fans can visit filming locations and regions that inspired these films—from rural Gyeonggi (Memories of Murder, The Wailing) to Seoul nightlife districts (Oldboy) and Busan (Train to Busan). Our filming location guides link cinema to travel.",
      },
    ],
    relatedFilmSlugs: ["train-to-busan", "oldboy", "the-wailing"],
    relatedDirectorSlugs: ["park-chan-wook", "na-hong-jin", "kim-jee-woon"],
    relatedCitySlugs: ["seoul", "busan"],
  }),
  article("best-korean-thriller-movies", {
    title: "Best Korean Thriller Movies",
    summary:
      "The best Korean thrillers—from crime and revenge to psychological suspense—and their connection to Korean travel.",
    intro:
      "Korean thrillers have set a high bar for tension, twist endings, and moral complexity. This guide highlights must-see films and the places that feature in them.",
    sections: [
      {
        heading: "Essential thrillers",
        body: "Parasite, Oldboy, Memories of Murder, and Decision to Leave represent the peak of Korean thriller filmmaking. They mix social critique, genre play, and unforgettable set pieces.",
      },
      {
        heading: "Themes and style",
        body: "Class conflict, revenge, and the unreliability of memory recur across these films. Directors like Bong Joon-ho and Park Chan-wook use Seoul and other Korean locations as characters in themselves.",
      },
      {
        heading: "Travel links",
        body: "Seoul's neighbourhoods, Busan's coast, and rural Korea appear throughout. Use our film and filming location pages to plan cinema-themed trips.",
      },
    ],
    relatedFilmSlugs: ["parasite", "oldboy", "memories-of-murder", "decision-to-leave"],
    relatedDirectorSlugs: ["bong-joon-ho", "park-chan-wook"],
    relatedCitySlugs: ["seoul", "busan"],
  }),
  article("the-rise-of-korean-cinema", {
    title: "The Rise of Korean Cinema",
    summary:
      "How South Korean film became a global force—from the Korean New Wave to Parasite and beyond.",
    intro:
      "South Korean cinema has evolved from local industry to international powerhouse. This article traces key moments and the films that put Korea on the map.",
    sections: [
      {
        heading: "From local to global",
        body: "The 2000s saw breakout hits like Oldboy and The Host. The 2010s and 2020s brought Parasite's historic Oscars, streaming hits, and a steady flow of genre and auteur films that travel well.",
      },
      {
        heading: "Directors and movements",
        body: "Bong Joon-ho, Park Chan-wook, and Lee Chang-dong are among the names that define Korean cinema abroad. Their work is deeply rooted in Korean society and landscape.",
      },
      {
        heading: "Why it matters for travellers",
        body: "Korean film has made Seoul, Busan, and rural Korea familiar to audiences worldwide. Visiting filming locations and understanding the culture behind the stories enriches a trip.",
      },
    ],
    relatedFilmSlugs: ["parasite", "oldboy", "train-to-busan"],
    relatedDirectorSlugs: ["bong-joon-ho", "park-chan-wook"],
    relatedCitySlugs: ["seoul", "busan"],
  }),
  article("korean-zombie-movies", {
    title: "Korean Zombie Movies",
    summary:
      "From Train to Busan to Kingdom—how Korean zombie cinema redefined the genre and where it was filmed.",
    intro:
      "Korean zombie films and series have become a subgenre of their own, blending action, social commentary, and horror. This guide covers the best and where to go in Korea.",
    sections: [
      {
        heading: "Train to Busan and beyond",
        body: "Train to Busan set the template: confined spaces, emotional stakes, and a critique of selfishness under pressure. Peninsula and the series Kingdom extended the world.",
      },
      {
        heading: "Genre and culture",
        body: "Korean zombie stories often reflect collective trauma, hierarchy, and survival ethics. The KTX and Busan have become iconic settings for global audiences.",
      },
      {
        heading: "Visit the locations",
        body: "Busan Station and the Seoul–Busan corridor are real places you can visit. Our Train to Busan filming locations guide connects the film to travel.",
      },
    ],
    relatedFilmSlugs: ["train-to-busan"],
    relatedDirectorSlugs: ["yeon-sang-ho"],
    relatedCitySlugs: ["seoul", "busan"],
  }),
  article("korean-crime-films", {
    title: "Korean Crime Films",
    summary:
      "The best Korean crime and procedural films—Memories of Murder, The Chaser, and more—and their real-world roots.",
    intro:
      "Korean crime cinema is known for gritty realism, moral ambiguity, and roots in true events. This guide highlights key films and the places that inspired them.",
    sections: [
      {
        heading: "Landmark crime films",
        body: "Memories of Murder, The Chaser, and I Saw the Devil have defined Korean crime cinema. They blend procedural detail with deep character study and social critique.",
      },
      {
        heading: "True crime and society",
        body: "Many of these films draw on real cases and regional history. Rural and urban Korea feature as more than backdrop—they shape the stories.",
      },
      {
        heading: "Exploring Korea through crime cinema",
        body: "Fans can trace filming locations and regions tied to the real events. Our film pages link to travel guides for Seoul, Busan, and beyond.",
      },
    ],
    relatedFilmSlugs: ["memories-of-murder"],
    relatedDirectorSlugs: ["bong-joon-ho", "na-hong-jin"],
    relatedCitySlugs: ["seoul"],
  }),
];

export function getCinemaArticleBySlug(slug: string): CinemaArticle | undefined {
  return cinemaArticles.find((a) => a.slug === slug);
}

export function getAllCinemaArticles(): CinemaArticle[] {
  return cinemaArticles;
}
