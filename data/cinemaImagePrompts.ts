/**
 * Image generation prompts for cinema section. Used for AI-generated or placeholder imagery.
 * Convention: hero and supporting prompts per film/location/article slug.
 */

export interface CinemaImagePrompt {
  slug: string;
  heroPrompt: string;
  supportingPrompts?: [string?, string?];
}

export const cinemaImagePrompts: CinemaImagePrompt[] = [
  {
    slug: "parasite",
    heroPrompt:
      "Cinematic modern Seoul neighbourhood with luxury house architecture and city skyline, dramatic lighting, film still style, photorealistic",
    supportingPrompts: [
      "Semi-basement residential street in Seoul with stairs and narrow alley, overcast day, photorealistic",
      "Korean suburban street with mix of old and new buildings, cinematic mood, photorealistic",
    ],
  },
  {
    slug: "train-to-busan",
    heroPrompt:
      "High speed train platform in South Korea with cinematic tension lighting and dramatic atmosphere, photorealistic",
    supportingPrompts: [
      "KTX train interior South Korea, passengers, dramatic lighting, photorealistic",
      "Busan Station exterior at night, South Korea, cinematic, photorealistic",
    ],
  },
  {
    slug: "oldboy",
    heroPrompt:
      "Seoul urban alley at night, neon signs, moody atmosphere, film noir style, photorealistic",
    supportingPrompts: [
      "Korean city street at night, rain-slicked pavement, dramatic lighting, photorealistic",
      "Concrete corridor with fluorescent light, minimalist, cinematic, photorealistic",
    ],
  },
  {
    slug: "the-handmaiden",
    heroPrompt:
      "1930s Korean-Japanese estate with traditional and colonial architecture, period drama lighting, photorealistic",
    supportingPrompts: [
      "Elegant interior with Korean and Japanese design elements, soft natural light, photorealistic",
      "Garden with traditional Asian architecture, misty morning, cinematic, photorealistic",
    ],
  },
  {
    slug: "memories-of-murder",
    heroPrompt:
      "Rural South Korean landscape, 1980s atmosphere, rice fields and country road, overcast, photorealistic",
    supportingPrompts: [
      "Small town South Korea at dusk, street with old buildings, photorealistic",
      "Korean countryside with telegraph poles and open fields, cinematic, photorealistic",
    ],
  },
  {
    slug: "decision-to-leave",
    heroPrompt:
      "Busan coastal cliff and sea view, misty atmosphere, romantic noir mood, photorealistic",
    supportingPrompts: [
      "Busan cityscape with ocean view, evening light, photorealistic",
      "Korean coastal road with dramatic scenery, cinematic, photorealistic",
    ],
  },
];

export function getCinemaImagePromptBySlug(slug: string): CinemaImagePrompt | undefined {
  return cinemaImagePrompts.find((p) => p.slug === slug);
}
