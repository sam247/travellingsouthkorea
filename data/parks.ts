import type { Park } from "@/types";

const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=1200&q=80`;

export const parks: Park[] = [
  {
    name: "Seoraksan",
    slug: "seoraksan",
    regionSlug: "gangwon",
    description: "Korea's most famous mountain and national park. Dramatic peaks, Ulsanbawi and Biryong Falls. Cable car from Sokcho, autumn foliage and year-round hiking. A must for nature lovers.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Jirisan",
    slug: "jirisan",
    regionSlug: "south-jeolla",
    description: "Mainland Korea's highest peak and largest national park. Multi-day trails, temples including Hwaeomsa and Ssanggyesa, and the famous Nogodan ridge. Straddles North and South Jeolla.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Bukhansan",
    slug: "bukhansan",
    regionSlug: "seoul-metropolitan",
    description: "Mountain park on Seoul's northern edge. Baegundae and Insubong peaks, temples and fortress walls. Easily accessible by metro; one of the world's most visited national parks per unit area.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Hallasan",
    slug: "hallasan",
    regionSlug: "jeju-do",
    description: "Jeju's shield volcano and South Korea's highest peak. Crater lake, multiple trails and UNESCO natural heritage. Summit hikes and lower trails through forests and wetlands.",
    heroImage: img("1600002415506-dd06090d3480"),
  },
  {
    name: "Odaesan",
    slug: "odaesan",
    regionSlug: "gangwon",
    description: "Part of the Baekdudaegan range. Woljeongsa and Sangwonsa temples, dense forests and gentle slopes. Popular for autumn colours and temple stays.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Songnisan",
    slug: "songnisan",
    regionSlug: "north-chungcheong",
    description: "Central mountain park with the great Beopjusa Temple and the 33-metre Golden Buddha. Hiking, temple stays and a serene escape in North Chungcheong.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Naejangsan",
    slug: "naejangsan",
    regionSlug: "south-jeolla",
    description: "Famous for autumn foliage. Naejangsa Temple and crimson maple forests. One of Korea's top fall destinations; busy in peak season.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Gayasan",
    slug: "gayasan",
    regionSlug: "south-gyeongsang",
    description: "Home to Haeinsa Temple, which houses the Tripitaka Koreana woodblocks (UNESCO). Mountain trails and one of Korea's three jewel temples.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Deogyusan",
    slug: "deogyusan",
    regionSlug: "north-jeolla",
    description: "Peaks and ski resorts. Muju's ski slopes and the scenic ridge of Hyangjeokbong. Four-season destination for hiking and winter sports.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
  {
    name: "Wolchulsan",
    slug: "wolchulsan",
    regionSlug: "south-jeolla",
    description: "Compact park with the Cloud Bridge (Gureumdarak) and dramatic ridges. Accessible from Mokpo or Gwangju; a rewarding day hike.",
    heroImage: img("1544735716-392fe2489ffa"),
  },
];

export const getParkBySlug = (slug: string) => parks.find((p) => p.slug === slug);

export const getParksByRegion = (regionSlug: string) =>
  parks.filter((p) => p.regionSlug === regionSlug);
