import type { Island } from "@/types";

const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=1200&q=80`;

export const islands: Island[] = [
  {
    name: "Jeju Island",
    slug: "jeju-island",
    regionSlug: "jeju-do",
    description: "South Korea's largest island and a UNESCO World Heritage site. Volcanic landscapes, lava tubes, tangerine orchards, haenyeo divers and the peak of Hallasan. Beaches, waterfalls and the Olle trails make it the country's top escape.",
    heroImage: img("1600002415506-dd06090d3480"),
  },
  {
    name: "Ulleungdo",
    slug: "ulleungdo",
    regionSlug: "north-gyeongsang",
    description: "Remote volcanic island in the East Sea. Dramatic cliffs, fresh seafood and hiking to Seonginbong Peak. Reached by ferry from Pohang or Mukho; no cars for tourists — explore by bus or on foot.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Dokdo",
    slug: "dokdo",
    regionSlug: "north-gyeongsang",
    description: "Small islets in the East Sea, administered by Korea and a symbol of national identity. Access is restricted; most visitors view from Ulleungdo. The surrounding waters are rich in marine life.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Ganghwa Island",
    slug: "ganghwa-island",
    regionSlug: "gyeonggi",
    description: "Large island in the Han River estuary, connected by bridge. Historic sites including Ganghwa Dolmen and fortifications, plus tidal flats, ginseng and peaceful countryside. Easy day trip from Seoul.",
    heroImage: img("1548115184-bc6544d06a58"),
  },
  {
    name: "Geoje Island",
    slug: "geoje-island",
    regionSlug: "south-gyeongsang",
    description: "Korea's second-largest island. Beaches, Haegeumgang and Oedo Botania, shipbuilding heritage and the Oryukdo skywalk. Popular for coastal drives and island hopping.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Jindo Island",
    slug: "jindo-island",
    regionSlug: "south-jeolla",
    description: "Connected by bridge to the mainland. Famous for the annual Jindo Sea Parting Festival and the native Jindo dog. Folklore, seafood and a quieter island vibe.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Namhae Island",
    slug: "namhae-island",
    regionSlug: "south-gyeongsang",
    description: "Scenic island with German Village, Boriam Temple and terraced rice fields. Coastal roads, beaches and the Namhae Bridge linking to the mainland.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Udo Island",
    slug: "udo-island",
    regionSlug: "jeju-do",
    description: "Small island off Jeju's east coast. Rent a scooter or take the bus to beaches, peanut ice cream and coastal views. A relaxed half-day or day trip from Jeju City or Seogwipo.",
    heroImage: img("1600002415506-dd06090d3480"),
  },
  {
    name: "Baengnyeong Island",
    slug: "baengnyeong-island",
    regionSlug: "incheon-metropolitan",
    description: "Westernmost island in the Yellow Sea. Remote, with dramatic cliffs and a small fishing community. Access by ferry from Incheon; weather-dependent.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Deokjeok Island",
    slug: "deokjeok-island",
    regionSlug: "gyeonggi",
    description: "Part of the Ongjin Islands, reachable by ferry from Incheon. Beaches, hiking and a quiet escape from the city. Popular for weekend getaways.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Oedo Island",
    slug: "oedo-island",
    regionSlug: "south-gyeongsang",
    description: "Botanical garden island near Geoje. Terraced gardens, sculptures and sea views. Visited by ferry from Geoje or Tongyeong as part of island tours.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
];

export const getIslandBySlug = (slug: string) => islands.find((i) => i.slug === slug);

export const getIslandsByRegion = (regionSlug: string) =>
  islands.filter((i) => i.regionSlug === regionSlug);
