import type { Region } from "@/types";

const placeholder = "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80";

export const regions: Region[] = [
  {
    slug: "seoul-metropolitan",
    name: "Seoul",
    description: "The capital metropolitan area — a megacity of 10 million blending ancient palaces, cutting-edge technology, world-class food and non-stop nightlife.",
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&q=80",
    citySlugs: ["seoul"],
  },
  {
    slug: "busan-metropolitan",
    name: "Busan",
    description: "South Korea's second-largest city and a major port. Beaches, temples, seafood markets and a vibrant film culture.",
    image: "https://images.unsplash.com/photo-1596478573744-0d1af41d9c09?w=1200&q=80",
    citySlugs: ["busan"],
  },
  {
    slug: "daegu-metropolitan",
    name: "Daegu",
    description: "Korea's fourth-largest city. Known for searing summers, textile markets, excellent food and growing cafe culture.",
    image: "https://images.unsplash.com/photo-1573057284059-827a26b093f4?w=1200&q=80",
    citySlugs: ["daegu"],
  },
  {
    slug: "incheon-metropolitan",
    name: "Incheon",
    description: "Gateway to Korea — international airport, Chinatown, Art Deco architecture and a waterfront reinventing itself as a cultural hub.",
    image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=1200&q=80",
    citySlugs: ["incheon"],
  },
  {
    slug: "gwangju-metropolitan",
    name: "Gwangju",
    description: "The cultural capital of the southwest. World-class art biennale, thriving food scene and a powerful sense of identity rooted in the democracy movement.",
    image: "https://images.unsplash.com/photo-1600002415506-dd06090d3480?w=1200&q=80",
    citySlugs: ["gwangju"],
  },
  {
    slug: "daejeon-metropolitan",
    name: "Daejeon",
    description: "Korea's science capital. Hot springs, a massive expo park and easy access to the mountains of South Chungcheong.",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1200&q=80",
    citySlugs: ["daejeon"],
  },
  {
    slug: "ulsan-metropolitan",
    name: "Ulsan",
    description: "Industrial powerhouse and gateway to the east coast. Hyundai's hometown with nearby beaches and the UNESCO-listed Bangudae petroglyphs.",
    image: placeholder,
    citySlugs: ["ulsan"],
  },
  {
    slug: "sejong-metropolitan",
    name: "Sejong",
    description: "Korea's administrative capital since 2012. A planned city with government offices, research institutes and a growing cultural scene.",
    image: placeholder,
    citySlugs: ["sejong"],
  },
  {
    slug: "gyeonggi",
    name: "Gyeonggi",
    description: "The province surrounding Seoul. DMZ, Suwon's Hwaseong Fortress and sprawling satellite cities with their own character.",
    image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=1200&q=80",
    citySlugs: ["suwon", "yongin", "goyang", "seongnam", "bucheon", "anyang", "ansan", "pyeongtaek"],
  },
  {
    slug: "gangwon",
    name: "Gangwon",
    description: "Mountains, ski resorts and pristine coastline. Seoraksan National Park, Gangneung's coffee street and the laid-back surf town of Sokcho.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
    citySlugs: ["chuncheon", "gangneung", "wonju", "sokcho"],
  },
  {
    slug: "north-chungcheong",
    name: "North Chungcheong",
    description: "Korea's only landlocked province. Suanbo hot springs, Songnisan National Park and the laid-back city of Cheongju.",
    image: "https://images.unsplash.com/photo-1596478573744-0d1af41d9c09?w=1200&q=80",
    citySlugs: ["cheongju", "chungju", "jecheon"],
  },
  {
    slug: "south-chungcheong",
    name: "South Chungcheong",
    description: "Historic Baekje sites around Buyeo and Gongju. Coastal Boryeong mud festival and the gateway cities of Cheonan and Asan.",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1200&q=80",
    citySlugs: ["cheonan", "asan", "gongju", "boryeong"],
  },
  {
    slug: "north-jeolla",
    name: "North Jeolla",
    description: "The food capital of Korea. Jeonju's bibimbap and hanok villages, plus Gunsan's port heritage and the literary town of Namwon.",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200&q=80",
    citySlugs: ["jeonju", "gunsan", "iksan", "namwon"],
  },
  {
    slug: "south-jeolla",
    name: "South Jeolla",
    description: "Tea fields of Boseong, island-hopping along the southwestern coast. Mokpo, Yeosu and Suncheon anchor the region.",
    image: "https://images.unsplash.com/photo-1600002415506-dd06090d3480?w=1200&q=80",
    citySlugs: ["mokpo", "yeosu", "suncheon"],
  },
  {
    slug: "north-gyeongsang",
    name: "North Gyeongsang",
    description: "Ancient Silla kingdom territory. Gyeongju is an open-air museum; Pohang, Gumi and Andong offer industry, history and tradition.",
    image: "https://images.unsplash.com/photo-1573057284059-827a26b093f4?w=1200&q=80",
    citySlugs: ["pohang", "gyeongju", "gumi", "andong", "yeongju"],
  },
  {
    slug: "south-gyeongsang",
    name: "South Gyeongsang",
    description: "Coastal province with Changwon's industry, Jinju's fortress, and the island gems of Geoje and Tongyeong.",
    image: "https://images.unsplash.com/photo-1596478573744-0d1af41d9c09?w=1200&q=80",
    citySlugs: ["changwon", "jinju", "geoje", "tongyeong"],
  },
  {
    slug: "jeju-do",
    name: "Jeju",
    description: "Volcanic island paradise. Lava tubes, tangerine orchards, waterfalls and the haenyeo diving culture. Jeju City and Seogwipo anchor the island.",
    image: "https://images.unsplash.com/photo-1600002415506-dd06090d3480?w=1200&q=80",
    citySlugs: ["jeju", "seogwipo"],
  },
];

export const getRegionBySlug = (slug: string) => regions.find((r) => r.slug === slug);

export const getRegionByCity = (citySlug: string) =>
  regions.find((r) => r.citySlugs.includes(citySlug));
