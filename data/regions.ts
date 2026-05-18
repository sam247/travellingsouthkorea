import { getRegionImagePath } from "@/lib/imagePaths";
import { getManifestImageUrl } from "@/lib/unsplashManifest";
import type { Region } from "@/types";

const regionsBase: Region[] = [
  {
    slug: "seoul-metropolitan",
    name: "Seoul",
    description: "The capital metropolitan area — a megacity of 10 million blending ancient palaces, cutting-edge technology, world-class food and non-stop nightlife.",
    image: getRegionImagePath("seoul-metropolitan"),
    citySlugs: ["seoul"],
  },
  {
    slug: "busan-metropolitan",
    name: "Busan",
    description: "South Korea's second-largest city and a major port. Beaches, temples, seafood markets and a vibrant film culture.",
    image: getRegionImagePath("busan-metropolitan"),
    citySlugs: ["busan"],
  },
  {
    slug: "daegu-metropolitan",
    name: "Daegu",
    description: "Korea's fourth-largest city. Known for searing summers, textile markets, excellent food and growing cafe culture.",
    image: getRegionImagePath("daegu-metropolitan"),
    citySlugs: ["daegu"],
  },
  {
    slug: "incheon-metropolitan",
    name: "Incheon",
    description: "Gateway to Korea — international airport, Chinatown, Art Deco architecture and a waterfront reinventing itself as a cultural hub.",
    image: getRegionImagePath("incheon-metropolitan"),
    citySlugs: ["incheon"],
  },
  {
    slug: "gwangju-metropolitan",
    name: "Gwangju",
    description: "The cultural capital of the southwest. World-class art biennale, thriving food scene and a powerful sense of identity rooted in the democracy movement.",
    image: getRegionImagePath("gwangju-metropolitan"),
    citySlugs: ["gwangju"],
  },
  {
    slug: "daejeon-metropolitan",
    name: "Daejeon",
    description: "Korea's science capital. Hot springs, a massive expo park and easy access to the mountains of South Chungcheong.",
    image: getRegionImagePath("daejeon-metropolitan"),
    citySlugs: ["daejeon"],
  },
  {
    slug: "ulsan-metropolitan",
    name: "Ulsan",
    description: "Industrial powerhouse and gateway to the east coast. Hyundai's hometown with nearby beaches and the UNESCO-listed Bangudae petroglyphs.",
    image: getRegionImagePath("ulsan-metropolitan"),
    citySlugs: ["ulsan"],
  },
  {
    slug: "sejong-metropolitan",
    name: "Sejong",
    description: "Korea's administrative capital since 2012. A planned city with government offices, research institutes and a growing cultural scene.",
    image: getRegionImagePath("sejong-metropolitan"),
    citySlugs: ["sejong"],
  },
  {
    slug: "gyeonggi",
    name: "Gyeonggi",
    description: "The province surrounding Seoul. DMZ, Suwon's Hwaseong Fortress and sprawling satellite cities with their own character.",
    image: getRegionImagePath("gyeonggi"),
    citySlugs: ["suwon", "yongin", "goyang", "seongnam", "bucheon", "anyang", "ansan", "pyeongtaek"],
  },
  {
    slug: "gangwon",
    name: "Gangwon",
    description: "Mountains, ski resorts and pristine coastline. Seoraksan National Park, Gangneung's coffee street and the laid-back surf town of Sokcho.",
    image: getRegionImagePath("gangwon"),
    citySlugs: ["chuncheon", "gangneung", "wonju", "sokcho"],
  },
  {
    slug: "north-chungcheong",
    name: "North Chungcheong",
    description: "Korea's only landlocked province. Suanbo hot springs, Songnisan National Park and the laid-back city of Cheongju.",
    image: getRegionImagePath("north-chungcheong"),
    citySlugs: ["cheongju", "chungju", "jecheon"],
  },
  {
    slug: "south-chungcheong",
    name: "South Chungcheong",
    description: "Historic Baekje sites around Buyeo and Gongju. Coastal Boryeong mud festival and the gateway cities of Cheonan and Asan.",
    image: getRegionImagePath("south-chungcheong"),
    citySlugs: ["cheonan", "asan", "gongju", "boryeong"],
  },
  {
    slug: "north-jeolla",
    name: "North Jeolla",
    description: "The food capital of Korea. Jeonju's bibimbap and hanok villages, plus Gunsan's port heritage and the literary town of Namwon.",
    image: getRegionImagePath("north-jeolla"),
    citySlugs: ["jeonju", "gunsan", "iksan", "namwon"],
  },
  {
    slug: "south-jeolla",
    name: "South Jeolla",
    description: "Tea fields of Boseong, island-hopping along the southwestern coast. Mokpo, Yeosu and Suncheon anchor the region.",
    image: getRegionImagePath("south-jeolla"),
    citySlugs: ["mokpo", "yeosu", "suncheon"],
  },
  {
    slug: "north-gyeongsang",
    name: "North Gyeongsang",
    description: "Ancient Silla kingdom territory. Gyeongju is an open-air museum; Pohang, Gumi and Andong offer industry, history and tradition.",
    image: getRegionImagePath("north-gyeongsang"),
    citySlugs: ["pohang", "gyeongju", "gumi", "andong", "yeongju"],
  },
  {
    slug: "south-gyeongsang",
    name: "South Gyeongsang",
    description: "Coastal province with Changwon's industry, Jinju's fortress, and the island gems of Geoje and Tongyeong.",
    image: getRegionImagePath("south-gyeongsang"),
    citySlugs: ["changwon", "jinju", "geoje", "tongyeong"],
  },
  {
    slug: "jeju-do",
    name: "Jeju",
    description: "Volcanic island paradise. Lava tubes, tangerine orchards, waterfalls and the haenyeo diving culture. Jeju City and Seogwipo anchor the island.",
    image: getRegionImagePath("jeju-do"),
    citySlugs: ["jeju", "seogwipo"],
  },
];

export const regions: Region[] = regionsBase.map((r) => ({
  ...r,
  image: getManifestImageUrl(`region:${r.slug}`) ?? r.image,
}));

export const getRegionBySlug = (slug: string) => regions.find((r) => r.slug === slug);

export const getRegionByCity = (citySlug: string) =>
  regions.find((r) => r.citySlugs.includes(citySlug));
