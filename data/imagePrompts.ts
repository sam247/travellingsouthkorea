/**
 * Unified image prompts for batch generation.
 * Paths: public/images/{cities|neighbourhoods|guides|culture|cinema}/{slug}.jpg or -hero.jpg, -1.jpg, -2.jpg
 */

export interface CityImagePrompt {
  contentType: "city";
  citySlug: string;
  heroPrompt: string;
}

export interface NeighbourhoodImagePrompt {
  contentType: "neighbourhood";
  citySlug: string;
  neighbourhoodSlug: string;
  heroPrompt: string;
}

export interface GuideImagePrompt {
  contentType: "guide";
  citySlug: string;
  guideSlug: string;
  heroPrompt: string;
  supportingPrompts?: [string?, string?];
}

export interface CultureImagePrompt {
  contentType: "culture";
  cultureSlug: string;
  heroPrompt: string;
  supportingPrompts?: [string?, string?];
}

export interface CinemaImagePrompt {
  contentType: "cinema";
  cinemaSlug: string;
  heroPrompt: string;
  supportingPrompts?: [string?, string?];
}

export type ImagePromptEntry =
  | CityImagePrompt
  | NeighbourhoodImagePrompt
  | GuideImagePrompt
  | CultureImagePrompt
  | CinemaImagePrompt;

export const imagePrompts: {
  cities: CityImagePrompt[];
  neighbourhoods: NeighbourhoodImagePrompt[];
  guides: GuideImagePrompt[];
  culture: CultureImagePrompt[];
  cinema: CinemaImagePrompt[];
} = {
  cities: [
    { contentType: "city", citySlug: "seoul", heroPrompt: "Seoul skyline with modern skyscrapers and traditional palaces, Han River, golden hour, photorealistic travel editorial" },
    { contentType: "city", citySlug: "busan", heroPrompt: "Busan coastline with beaches and cliffs, Haeundae or Gamcheon, vibrant, photorealistic travel editorial" },
    { contentType: "city", citySlug: "incheon", heroPrompt: "Incheon Chinatown and port city atmosphere, Korea gateway, photorealistic travel editorial" },
    { contentType: "city", citySlug: "daegu", heroPrompt: "Daegu cityscape, textile markets and urban Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "daejeon", heroPrompt: "Daejeon science city and green spaces, central Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "gwangju", heroPrompt: "Gwangju city, art and culture, photorealistic travel editorial" },
    { contentType: "city", citySlug: "ulsan", heroPrompt: "Ulsan industrial coast and nature, South Korea east coast, photorealistic travel editorial" },
    { contentType: "city", citySlug: "sejong", heroPrompt: "Sejong administrative capital, modern planned city Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "suwon", heroPrompt: "Suwon Hwaseong Fortress and historic city, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "yongin", heroPrompt: "Yongin theme parks and nature, Gyeonggi Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "goyang", heroPrompt: "Goyang flowers and festivals, satellite city Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "seongnam", heroPrompt: "Seongnam tech hub and trails, Bundang Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "bucheon", heroPrompt: "Bucheon film festival city, urban Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "anyang", heroPrompt: "Anyang art park and stream, green city Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "ansan", heroPrompt: "Ansan multicultural food street, diverse Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "pyeongtaek", heroPrompt: "Pyeongtaek port and coastal city, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "chuncheon", heroPrompt: "Chuncheon lake and dakgalbi, Gangwon Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "gangneung", heroPrompt: "Gangneung coffee street and coastline, Korea east coast, photorealistic travel editorial" },
    { contentType: "city", citySlug: "wonju", heroPrompt: "Wonju historic city and mountains, Gangwon Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "sokcho", heroPrompt: "Sokcho coast and Seoraksan gateway, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "cheongju", heroPrompt: "Cheongju printing heritage and historic centre, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "chungju", heroPrompt: "Chungju Lake and fortress, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "jecheon", heroPrompt: "Jecheon hot springs and lake, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "cheonan", heroPrompt: "Cheonan transport hub and Independence Hall, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "asan", heroPrompt: "Asan hot springs and folk village, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "gongju", heroPrompt: "Gongju Baekje capital and fortress, UNESCO Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "boryeong", heroPrompt: "Boryeong mud festival and coast, Korea beaches, photorealistic travel editorial" },
    { contentType: "city", citySlug: "jeonju", heroPrompt: "Jeonju hanok village and bibimbap, traditional Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "gunsan", heroPrompt: "Gunsan historic port and colonial district, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "iksan", heroPrompt: "Iksan temple and Baekje heritage, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "namwon", heroPrompt: "Namwon Chunhyang and Jirisan foothills, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "mokpo", heroPrompt: "Mokpo port and islands gateway, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "yeosu", heroPrompt: "Yeosu coastal city and cable car, Korea south coast, photorealistic travel editorial" },
    { contentType: "city", citySlug: "suncheon", heroPrompt: "Suncheon Bay wetland and gardens, Korea eco-tourism, photorealistic travel editorial" },
    { contentType: "city", citySlug: "pohang", heroPrompt: "Pohang steel city and Homigot sunrise, Korea east coast, photorealistic travel editorial" },
    { contentType: "city", citySlug: "gyeongju", heroPrompt: "Gyeongju Silla tombs and Anapji Pond, ancient Korea capital, photorealistic travel editorial" },
    { contentType: "city", citySlug: "gumi", heroPrompt: "Gumi electronics hub and Nakdong River, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "andong", heroPrompt: "Andong Hahoe Village and soju, traditional Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "yeongju", heroPrompt: "Yeongju mountains and Buseoksa Temple, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "changwon", heroPrompt: "Changwon planned city and Jinhae cherry blossoms, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "jinju", heroPrompt: "Jinju Fortress and lantern festival, Korea, photorealistic travel editorial" },
    { contentType: "city", citySlug: "geoje", heroPrompt: "Geoje island beaches and shipyards, Korea south coast, photorealistic travel editorial" },
    { contentType: "city", citySlug: "tongyeong", heroPrompt: "Tongyeong cable car and Admiral Yi heritage, Korea coast, photorealistic travel editorial" },
    { contentType: "city", citySlug: "jeju", heroPrompt: "Jeju Island volcanic landscape and coast, Korea island escape, photorealistic travel editorial" },
    { contentType: "city", citySlug: "seogwipo", heroPrompt: "Seogwipo waterfalls and Olle trails, Jeju south, photorealistic travel editorial" },
  ],

  neighbourhoods: [
    { contentType: "neighbourhood", citySlug: "seoul", neighbourhoodSlug: "itaewon", heroPrompt: "Itaewon Seoul nightlife and international district, neon and rooftops, photorealistic travel editorial" },
    { contentType: "neighbourhood", citySlug: "seoul", neighbourhoodSlug: "hongdae", heroPrompt: "Hongdae Seoul indie culture, street art and bars, youthful energy, photorealistic travel editorial" },
    { contentType: "neighbourhood", citySlug: "seoul", neighbourhoodSlug: "gangnam", heroPrompt: "Gangnam Seoul luxury district, skyscrapers and cafes, photorealistic travel editorial" },
    { contentType: "neighbourhood", citySlug: "seoul", neighbourhoodSlug: "myeongdong", heroPrompt: "Myeongdong Seoul shopping and street food, neon and crowds, photorealistic travel editorial" },
    { contentType: "neighbourhood", citySlug: "seoul", neighbourhoodSlug: "insadong", heroPrompt: "Insadong Seoul traditional teahouses and hanok, cultural heart, photorealistic travel editorial" },
    { contentType: "neighbourhood", citySlug: "seoul", neighbourhoodSlug: "apgujeong", heroPrompt: "Apgujeong Seoul fashion and Rodeo, trendy district, photorealistic travel editorial" },
    { contentType: "neighbourhood", citySlug: "seoul", neighbourhoodSlug: "jamsil", heroPrompt: "Jamsil Seoul Lotte World and Olympic Park, family entertainment, photorealistic travel editorial" },
    { contentType: "neighbourhood", citySlug: "seoul", neighbourhoodSlug: "garosu-gil", heroPrompt: "Garosu-gil Seoul tree-lined street, cafes and boutiques, photorealistic travel editorial" },
    { contentType: "neighbourhood", citySlug: "seoul", neighbourhoodSlug: "seongsu", heroPrompt: "Seongsu Seoul industrial cafes and galleries, Brooklyn of Seoul, photorealistic travel editorial" },
    { contentType: "neighbourhood", citySlug: "seoul", neighbourhoodSlug: "yeonnam", heroPrompt: "Yeonnam-dong Seoul hip cafes and Yeontral Park, relaxed vibe, photorealistic travel editorial" },
    { contentType: "neighbourhood", citySlug: "seoul", neighbourhoodSlug: "jongno", heroPrompt: "Jongno Seoul traditional and palace area, photorealistic travel editorial" },
    { contentType: "neighbourhood", citySlug: "seoul", neighbourhoodSlug: "dongdaemun", heroPrompt: "Dongdaemun Seoul design and markets, photorealistic travel editorial" },
    { contentType: "neighbourhood", citySlug: "busan", neighbourhoodSlug: "haeundae", heroPrompt: "Haeundae Busan beach and high-rises, summer scene, photorealistic travel editorial" },
    { contentType: "neighbourhood", citySlug: "jeju", neighbourhoodSlug: "seogwipo", heroPrompt: "Seogwipo Jeju waterfalls and coastal scenery, photorealistic travel editorial" },
  ],

  guides: [
    { contentType: "guide", citySlug: "seoul", guideSlug: "best-bars-hongdae", heroPrompt: "Hongdae Seoul bar scene, craft cocktails and soju dives, nightlife, photorealistic travel editorial", supportingPrompts: ["Moody cocktail bar interior Seoul", "Hongdae street at night with neon"] },
    { contentType: "guide", citySlug: "seoul", guideSlug: "nightlife-itaewon", heroPrompt: "Itaewon Seoul rooftop bars and clubs, international nightlife, photorealistic travel editorial", supportingPrompts: ["Rooftop bar Seoul city lights", "Itaewon street at night"] },
    { contentType: "guide", citySlug: "seoul", guideSlug: "best-street-food-myeongdong", heroPrompt: "Myeongdong Seoul street food vendors, tteokbokki and hotteok, photorealistic travel editorial", supportingPrompts: ["Korean street food stall", "Myeongdong shopping street"] },
    { contentType: "guide", citySlug: "seoul", guideSlug: "cafes-gangnam", heroPrompt: "Gangnam Seoul specialty coffee and minimalist cafes, photorealistic travel editorial", supportingPrompts: ["Korean cafe interior design", "Gangnam coffee shop"] },
    { contentType: "guide", citySlug: "seoul", guideSlug: "hiking-bukhansan", heroPrompt: "Bukhansan National Park Seoul granite peaks and trails, photorealistic travel editorial", supportingPrompts: ["Mountain trail Korea", "Seoul from Bukhansan summit"] },
    { contentType: "guide", citySlug: "seoul", guideSlug: "streetwear-hongdae", heroPrompt: "Hongdae Seoul streetwear and vintage shopping, photorealistic travel editorial", supportingPrompts: ["Vintage clothing store Seoul", "Hongdae fashion district"] },
    { contentType: "guide", citySlug: "seoul", guideSlug: "pc-bang-gaming-seoul", heroPrompt: "PC bang gaming cafe Seoul, high-spec rigs and gaming culture, photorealistic travel editorial", supportingPrompts: ["Gaming cafe interior Korea", "PC bang Seoul"] },
    { contentType: "guide", citySlug: "busan", guideSlug: "haeundae-beach-guide", heroPrompt: "Haeundae Beach Busan wide sand and high-rises, summer, photorealistic travel editorial", supportingPrompts: ["Busan beach sunset", "Haeundae market seafood"] },
    { contentType: "guide", citySlug: "jeju", guideSlug: "jeju-waterfalls", heroPrompt: "Jeju Island waterfalls Jeongbang and Cheonjiyeon, photorealistic travel editorial", supportingPrompts: ["Waterfall into sea Jeju", "Jeju forest cascade"] },
    { contentType: "guide", citySlug: "seoul", guideSlug: "best-bars-gangnam", heroPrompt: "Gangnam Seoul upscale bars and nightlife, photorealistic travel editorial", supportingPrompts: ["Lounge bar Gangnam", "Seoul nightlife Gangnam"] },
    { contentType: "guide", citySlug: "seoul", guideSlug: "best-bars-itaewon", heroPrompt: "Itaewon bars and clubs Seoul, photorealistic travel editorial", supportingPrompts: ["Itaewon bar interior", "Seoul international district night"] },
    { contentType: "guide", citySlug: "seoul", guideSlug: "best-bars-myeongdong", heroPrompt: "Myeongdong area bars Seoul, photorealistic travel editorial", supportingPrompts: ["Myeongdong at night", "Seoul bar district"] },
    { contentType: "guide", citySlug: "seoul", guideSlug: "best-restaurants-hongdae", heroPrompt: "Hongdae Seoul restaurants and food scene, photorealistic travel editorial", supportingPrompts: ["Korean restaurant Hongdae", "Seoul dining interior"] },
    { contentType: "guide", citySlug: "seoul", guideSlug: "best-restaurants-gangnam", heroPrompt: "Gangnam Seoul fine dining and restaurants, photorealistic travel editorial", supportingPrompts: ["Upscale restaurant Seoul", "Gangnam food scene"] },
    { contentType: "guide", citySlug: "seoul", guideSlug: "best-restaurants-itaewon", heroPrompt: "Itaewon Seoul international restaurants, photorealistic travel editorial", supportingPrompts: ["Itaewon restaurant street", "Seoul multicultural dining"] },
    { contentType: "guide", citySlug: "seoul", guideSlug: "best-restaurants-myeongdong", heroPrompt: "Myeongdong Seoul food and restaurants, photorealistic travel editorial", supportingPrompts: ["Myeongdong food alley", "Seoul restaurant scene"] },
    { contentType: "guide", citySlug: "busan", guideSlug: "best-restaurants-busan", heroPrompt: "Busan seafood and restaurant scene, photorealistic travel editorial", supportingPrompts: ["Busan seafood market", "Busan dining"] },
    { contentType: "guide", citySlug: "busan", guideSlug: "best-bars-busan", heroPrompt: "Busan bar and nightlife scene, photorealistic travel editorial", supportingPrompts: ["Busan beach bar", "Busan nightlife"] },
  ],

  culture: [
    { contentType: "culture", cultureSlug: "korean-bikini-models", heroPrompt: "Editorial fashion photography, Korean beach lifestyle, summer vibes, photorealistic, professional lighting, travel magazine style", supportingPrompts: ["Korean coastal resort atmosphere, lifestyle editorial, photorealistic", "Fitness and wellness scene in Korea, editorial style, photorealistic"] },
    { contentType: "culture", cultureSlug: "most-popular-korean-bikini-models-2025", heroPrompt: "Korean fitness and beach lifestyle editorial, photorealistic, travel magazine style", supportingPrompts: ["Korean summer beach vibes", "Lifestyle editorial Korea"] },
    { contentType: "culture", cultureSlug: "k-pop-male-idols", heroPrompt: "K-pop concert atmosphere in Seoul, stage lights, crowd, editorial music photography, photorealistic, vibrant colors", supportingPrompts: ["Seoul music district, Gangnam or Hongdae, K-pop culture, photorealistic editorial"] },
    { contentType: "culture", cultureSlug: "korean-street-fashion", heroPrompt: "Stylish young adults in Seoul streetwear district, Hongdae or Garosu-gil, editorial fashion photography, urban Korea, photorealistic", supportingPrompts: ["Seoul street style, independent boutiques, autumn fashion, photorealistic"] },
    { contentType: "culture", cultureSlug: "korean-nightlife-culture", heroPrompt: "Busy nightlife street in Seoul with neon lights, crowds, bars and clubs, Hongdae or Itaewon, photorealistic travel editorial style", supportingPrompts: ["Rooftop bar Seoul at night, city lights, photorealistic editorial"] },
    { contentType: "culture", cultureSlug: "korean-drinking-culture", heroPrompt: "Korean pub or pocha scene, soju and beer, group dining, Seoul nightlife, warm lighting, photorealistic editorial", supportingPrompts: ["Street food stall at night in Seoul, casual drinking culture, photorealistic"] },
    { contentType: "culture", cultureSlug: "korean-cafe-culture", heroPrompt: "Stylish Korean cafe interior with desserts and coffee, Seoul cafe culture, editorial travel photography, photorealistic", supportingPrompts: ["Cafe in Gangnam or Hongdae, minimalist design, photorealistic"] },
    { contentType: "culture", cultureSlug: "korean-beauty-standards", heroPrompt: "Korean beauty and skincare retail, Myeongdong or Gangnam, clean aesthetic, editorial lifestyle photography, photorealistic", supportingPrompts: ["K-beauty product display, Seoul shopping district, photorealistic"] },
    { contentType: "culture", cultureSlug: "korean-summer-festivals", heroPrompt: "Korean summer festival, crowds, stage, outdoor event, Busan or Seoul, vibrant, photorealistic editorial", supportingPrompts: ["Beach festival Korea, Haeundae or similar, summer vibes, photorealistic"] },
    { contentType: "culture", cultureSlug: "cherry-blossom-festivals-korea", heroPrompt: "Cherry blossom trees in full bloom, Seoul or Jinhae, spring festival, editorial travel photography, photorealistic", supportingPrompts: ["Han River or palace with cherry blossoms, Korea spring, photorealistic"] },
    { contentType: "culture", cultureSlug: "korean-fitness-models", heroPrompt: "Korean fitness and gym culture, Seoul, athletic lifestyle, editorial photography, photorealistic", supportingPrompts: ["Outdoor workout or running in Seoul, urban fitness, photorealistic"] },
  ],

  cinema: [
    { contentType: "cinema", cinemaSlug: "parasite", heroPrompt: "Cinematic modern Seoul neighbourhood with luxury house architecture and city skyline, dramatic lighting, film still style, photorealistic", supportingPrompts: ["Semi-basement residential street in Seoul with stairs and narrow alley, overcast day, photorealistic", "Korean suburban street with mix of old and new buildings, cinematic mood, photorealistic"] },
    { contentType: "cinema", cinemaSlug: "train-to-busan", heroPrompt: "High speed train platform in South Korea with cinematic tension lighting and dramatic atmosphere, photorealistic", supportingPrompts: ["KTX train interior South Korea, passengers, dramatic lighting, photorealistic", "Busan Station exterior at night, South Korea, cinematic, photorealistic"] },
    { contentType: "cinema", cinemaSlug: "oldboy", heroPrompt: "Seoul urban alley at night, neon signs, moody atmosphere, film noir style, photorealistic", supportingPrompts: ["Korean city street at night, rain-slicked pavement, dramatic lighting, photorealistic", "Concrete corridor with fluorescent light, minimalist, cinematic, photorealistic"] },
    { contentType: "cinema", cinemaSlug: "the-handmaiden", heroPrompt: "1930s Korean-Japanese estate with traditional and colonial architecture, period drama lighting, photorealistic", supportingPrompts: ["Elegant interior with Korean and Japanese design elements, soft natural light, photorealistic", "Garden with traditional Asian architecture, misty morning, cinematic, photorealistic"] },
    { contentType: "cinema", cinemaSlug: "memories-of-murder", heroPrompt: "Rural South Korean landscape, 1980s atmosphere, rice fields and country road, overcast, photorealistic", supportingPrompts: ["Small town South Korea at dusk, street with old buildings, photorealistic", "Korean countryside with telegraph poles and open fields, cinematic, photorealistic"] },
    { contentType: "cinema", cinemaSlug: "decision-to-leave", heroPrompt: "Busan coastal cliff and sea view, misty atmosphere, romantic noir mood, photorealistic", supportingPrompts: ["Busan cityscape with ocean view, evening light, photorealistic", "Korean coastal road with dramatic scenery, cinematic, photorealistic"] },
    { contentType: "cinema", cinemaSlug: "parasite-filming-locations", heroPrompt: "Parasite filming locations Seoul, luxury house and semi-basement neighbourhood, cinematic, photorealistic", supportingPrompts: ["Seoul Gangnam-style residential area", "Seoul stairway and alley class divide"] },
    { contentType: "cinema", cinemaSlug: "train-to-busan-filming-locations", heroPrompt: "KTX train and Busan Station South Korea, cinematic tension, photorealistic", supportingPrompts: ["KTX interior Korea", "Busan Station at night"] },
    { contentType: "cinema", cinemaSlug: "oldboy-filming-locations", heroPrompt: "Oldboy filming locations Seoul urban alley and corridor, film noir, photorealistic", supportingPrompts: ["Seoul alley at night", "Minimalist corridor cinematic"] },
    { contentType: "cinema", cinemaSlug: "the-handmaiden-filming-locations", heroPrompt: "The Handmaiden period estate and garden Korea, cinematic, photorealistic", supportingPrompts: ["Korean traditional estate", "Colonial architecture garden"] },
    { contentType: "cinema", cinemaSlug: "memories-of-murder-filming-locations", heroPrompt: "Memories of Murder rural Korea 1980s, rice fields and small town, photorealistic", supportingPrompts: ["Korean countryside road", "Small town Korea dusk"] },
    { contentType: "cinema", cinemaSlug: "decision-to-leave-filming-locations", heroPrompt: "Decision to Leave Busan coast and cliff, romantic noir, photorealistic", supportingPrompts: ["Busan coastal view", "Korean cliff and sea"] },
    { contentType: "cinema", cinemaSlug: "best-korean-horror-movies", heroPrompt: "Korean horror cinema atmosphere, dark and atmospheric, film still style, photorealistic", supportingPrompts: ["Korean horror film mood", "Seoul or rural Korea eerie"] },
    { contentType: "cinema", cinemaSlug: "best-korean-thriller-movies", heroPrompt: "Korean thriller cinema Seoul urban tension, cinematic, photorealistic", supportingPrompts: ["Korean thriller atmosphere", "Seoul noir mood"] },
    { contentType: "cinema", cinemaSlug: "the-rise-of-korean-cinema", heroPrompt: "South Korean cinema global influence, film reels and Seoul, editorial, photorealistic", supportingPrompts: ["Korean film industry", "Seoul cinema culture"] },
    { contentType: "cinema", cinemaSlug: "korean-zombie-movies", heroPrompt: "Korean zombie film atmosphere, train and Busan, cinematic tension, photorealistic", supportingPrompts: ["KTX train Korea", "Busan apocalyptic mood"] },
    { contentType: "cinema", cinemaSlug: "korean-crime-films", heroPrompt: "Korean crime film noir Seoul, urban night, photorealistic", supportingPrompts: ["Seoul crime drama mood", "Korean urban night"] },
  ],
};

export function getImagePromptByCitySlug(citySlug: string): CityImagePrompt | undefined {
  return imagePrompts.cities.find((p) => p.citySlug === citySlug);
}

export function getImagePromptByNeighbourhood(
  citySlug: string,
  neighbourhoodSlug: string
): NeighbourhoodImagePrompt | undefined {
  return imagePrompts.neighbourhoods.find(
    (p) => p.citySlug === citySlug && p.neighbourhoodSlug === neighbourhoodSlug
  );
}

export function getImagePromptByGuide(
  citySlug: string,
  guideSlug: string
): GuideImagePrompt | undefined {
  return imagePrompts.guides.find(
    (p) => p.citySlug === citySlug && p.guideSlug === guideSlug
  );
}

export function getImagePromptByCultureSlug(cultureSlug: string): CultureImagePrompt | undefined {
  return imagePrompts.culture.find((p) => p.cultureSlug === cultureSlug);
}

export function getImagePromptByCinemaSlug(cinemaSlug: string): CinemaImagePrompt | undefined {
  return imagePrompts.cinema.find((p) => p.cinemaSlug === cinemaSlug);
}
