import { getLocationImagePath } from "@/lib/imagePaths";
import type { Park } from "@/types";

export const parks: Park[] = [
  {
    name: "Seoraksan",
    slug: "seoraksan",
    regionSlug: "gangwon",
    description: "Korea's most famous mountain and national park. Dramatic peaks, Ulsanbawi and Biryong Falls. Cable car from Sokcho, autumn foliage and year-round hiking. A must for nature lovers.",
    heroImage: getLocationImagePath("seoraksan"),
  },
  {
    name: "Jirisan",
    slug: "jirisan",
    regionSlug: "south-jeolla",
    description: "Mainland Korea's highest peak and largest national park. Multi-day trails, temples including Hwaeomsa and Ssanggyesa, and the famous Nogodan ridge. Straddles North and South Jeolla.",
    heroImage: getLocationImagePath("jirisan"),
  },
  {
    name: "Bukhansan",
    slug: "bukhansan",
    regionSlug: "seoul-metropolitan",
    description: "Mountain park on Seoul's northern edge. Baegundae and Insubong peaks, temples and fortress walls. Easily accessible by metro; one of the world's most visited national parks per unit area.",
    heroImage: getLocationImagePath("bukhansan"),
  },
  {
    name: "Hallasan",
    slug: "hallasan",
    regionSlug: "jeju-do",
    description: "Jeju's shield volcano and South Korea's highest peak. Crater lake, multiple trails and UNESCO natural heritage. Summit hikes and lower trails through forests and wetlands.",
    heroImage: getLocationImagePath("hallasan"),
  },
  {
    name: "Odaesan",
    slug: "odaesan",
    regionSlug: "gangwon",
    description: "Part of the Baekdudaegan range. Woljeongsa and Sangwonsa temples, dense forests and gentle slopes. Popular for autumn colours and temple stays.",
    heroImage: getLocationImagePath("odaesan"),
  },
  {
    name: "Songnisan",
    slug: "songnisan",
    regionSlug: "north-chungcheong",
    description: "Central mountain park with the great Beopjusa Temple and the 33-metre Golden Buddha. Hiking, temple stays and a serene escape in North Chungcheong.",
    heroImage: getLocationImagePath("songnisan"),
  },
  {
    name: "Naejangsan",
    slug: "naejangsan",
    regionSlug: "south-jeolla",
    description: "Famous for autumn foliage. Naejangsa Temple and crimson maple forests. One of Korea's top fall destinations; busy in peak season.",
    heroImage: getLocationImagePath("naejangsan"),
  },
  {
    name: "Gayasan",
    slug: "gayasan",
    regionSlug: "south-gyeongsang",
    description: "Home to Haeinsa Temple, which houses the Tripitaka Koreana woodblocks (UNESCO). Mountain trails and one of Korea's three jewel temples.",
    heroImage: getLocationImagePath("gayasan"),
  },
  {
    name: "Deogyusan",
    slug: "deogyusan",
    regionSlug: "north-jeolla",
    description: "Peaks and ski resorts. Muju's ski slopes and the scenic ridge of Hyangjeokbong. Four-season destination for hiking and winter sports.",
    heroImage: getLocationImagePath("deogyusan"),
  },
  {
    name: "Wolchulsan",
    slug: "wolchulsan",
    regionSlug: "south-jeolla",
    description: "Compact park with the Cloud Bridge (Gureumdarak) and dramatic ridges. Accessible from Mokpo or Gwangju; a rewarding day hike.",
    heroImage: getLocationImagePath("wolchulsan"),
  },
];

export const getParkBySlug = (slug: string) => parks.find((p) => p.slug === slug);

export const getParksByRegion = (regionSlug: string) =>
  parks.filter((p) => p.regionSlug === regionSlug);
