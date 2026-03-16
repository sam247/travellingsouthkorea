/**
 * Image prompts for culture articles. Used for batch image generation.
 * Local output: public/images/culture/{articleSlug}-hero.jpg, -1.jpg, -2.jpg
 */

export interface CultureImagePrompt {
  articleSlug: string;
  heroPrompt: string;
  supportingPrompts: string[];
}

export const cultureImagePrompts: CultureImagePrompt[] = [
  {
    articleSlug: "korean-bikini-models",
    heroPrompt:
      "Editorial fashion photography, Korean beach lifestyle, summer vibes, photorealistic, professional lighting, travel magazine style",
    supportingPrompts: [
      "Korean coastal resort atmosphere, lifestyle editorial, photorealistic",
      "Fitness and wellness scene in Korea, editorial style, photorealistic",
    ],
  },
  {
    articleSlug: "k-pop-male-idols",
    heroPrompt:
      "K-pop concert atmosphere in Seoul, stage lights, crowd, editorial music photography, photorealistic, vibrant colors",
    supportingPrompts: [
      "Seoul music district, Gangnam or Hongdae, K-pop culture, photorealistic editorial",
    ],
  },
  {
    articleSlug: "korean-street-fashion",
    heroPrompt:
      "Stylish young adults in Seoul streetwear district, Hongdae or Garosu-gil, editorial fashion photography, urban Korea, photorealistic",
    supportingPrompts: [
      "Seoul street style, independent boutiques, autumn fashion, photorealistic",
    ],
  },
  {
    articleSlug: "korean-nightlife-culture",
    heroPrompt:
      "Busy nightlife street in Seoul with neon lights, crowds, bars and clubs, Hongdae or Itaewon, photorealistic travel editorial style",
    supportingPrompts: [
      "Rooftop bar Seoul at night, city lights, photorealistic editorial",
    ],
  },
  {
    articleSlug: "korean-drinking-culture",
    heroPrompt:
      "Korean pub or pocha scene, soju and beer, group dining, Seoul nightlife, warm lighting, photorealistic editorial",
    supportingPrompts: [
      "Street food stall at night in Seoul, casual drinking culture, photorealistic",
    ],
  },
  {
    articleSlug: "korean-cafe-culture",
    heroPrompt:
      "Stylish Korean cafe interior with desserts and coffee, Seoul cafe culture, editorial travel photography, photorealistic",
    supportingPrompts: [
      "Cafe in Gangnam or Hongdae, minimalist design, photorealistic",
    ],
  },
  {
    articleSlug: "korean-beauty-standards",
    heroPrompt:
      "Korean beauty and skincare retail, Myeongdong or Gangnam, clean aesthetic, editorial lifestyle photography, photorealistic",
    supportingPrompts: [
      "K-beauty product display, Seoul shopping district, photorealistic",
    ],
  },
  {
    articleSlug: "korean-summer-festivals",
    heroPrompt:
      "Korean summer festival, crowds, stage, outdoor event, Busan or Seoul, vibrant, photorealistic editorial",
    supportingPrompts: [
      "Beach festival Korea, Haeundae or similar, summer vibes, photorealistic",
    ],
  },
  {
    articleSlug: "cherry-blossom-festivals-korea",
    heroPrompt:
      "Cherry blossom trees in full bloom, Seoul or Jinhae, spring festival, editorial travel photography, photorealistic",
    supportingPrompts: [
      "Han River or palace with cherry blossoms, Korea spring, photorealistic",
    ],
  },
  {
    articleSlug: "korean-fitness-models",
    heroPrompt:
      "Korean fitness and gym culture, Seoul, athletic lifestyle, editorial photography, photorealistic",
    supportingPrompts: [
      "Outdoor workout or running in Seoul, urban fitness, photorealistic",
    ],
  },
];
