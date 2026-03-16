import type { City } from "@/types";
import type { Neighbourhood } from "@/types";

export type ContentSection = { heading: string; paragraphs: string[] };
export type TopHighlightsSection = { heading: string; highlights: string[] };

function joinNames(names: string[], lastJoin = " and "): string {
  if (names.length <= 1) return names[0] ?? "";
  if (names.length === 2) return `${names[0]}${lastJoin}${names[1]}`;
  return `${names.slice(0, -1).join(", ")}${lastJoin}${names[names.length - 1]}`;
}

export function getCityContent(
  city: City,
  neighbourhoods: Neighbourhood[] = []
): ContentSection[] {
  const name = city.name;
  const tagline = city.tagline;
  const bestFor = city.bestFor ?? [];
  const bestForText = bestFor.length > 0 ? joinNames(bestFor.slice(0, 3)) : "culture, food and exploration";
  const neighbourhoodNames =
    neighbourhoods.length > 0
      ? joinNames(neighbourhoods.slice(0, 5).map((n) => n.name))
      : "key districts";

  return [
    {
      heading: "Why visit this city",
      paragraphs: [
        `${name} is one of South Korea's most compelling destinations — ${tagline.toLowerCase()}. Whether you're drawn by ${bestForText}, the city offers a mix of experiences that's hard to find elsewhere in the country.`,
        `Travellers choose ${name} for its distinct character: the blend of modern life and tradition, the quality of food and drink, and the ease of getting around once you know the basics. From morning markets to late-night neighbourhoods, ${name} rewards visitors who take time to explore beyond the main sights.`,
        `First-time visitors often underestimate how much there is to do in ${name}. Give yourself at least three or four days to cover the essentials and still have time to wander. The city works well as a standalone destination or as part of a longer Korea trip.`,
      ],
    },
    {
      heading: "Best neighbourhoods to explore",
      paragraphs: [
        neighbourhoods.length > 0
          ? `Some of the most rewarding time in ${name} is spent in its neighbourhoods. Areas like ${neighbourhoodNames} each have their own vibe — from nightlife and street food to cafes, shopping and cultural spots. We recommend picking two or three that match your interests and spending at least a half-day in each.`
          : `Exploring ${name} by neighbourhood is the best way to feel the city. Different areas specialise in nightlife, food, shopping or culture; planning your days around a few key districts will give you a clearer picture of what makes ${name} unique.`,
        `Use the metro or local buses to move between areas. Many neighbourhoods are walkable once you arrive, with compact streets full of restaurants, bars and small shops. Check our neighbourhood guides for detailed recommendations in ${name}.`,
      ],
    },
    {
      heading: "Food scene overview",
      paragraphs: [
        `The food scene in ${name} reflects the city's character: expect everything from street stalls and casual eateries to upscale restaurants. Korean staples — barbecue, stews, noodles and banchan — are everywhere, and in ${name} you'll also find regional specialities and modern takes on classic dishes.`,
        bestFor.includes("food")
          ? `Food is one of the main reasons visitors come to ${name}. Budget travellers can eat very well at markets and local joints; those splurging will find inventive dining and excellent service. Reserve ahead for popular spots and don't skip the street food in busy areas.`
          : `Even if ${name} isn't primarily known as a food city, you'll eat well here. Follow local crowds at lunch, try the city's signature dishes and ask your accommodation for neighbourhood recommendations.`,
        `Meal times in ${name} follow local habits: lunch from around noon, dinner from 6 PM. Many restaurants close between lunch and dinner or have limited afternoon hours. Street food and convenience stores fill the gaps. In busy districts you'll find places open late for post-nightlife snacks.`,
      ],
    },
    {
      heading: "Nightlife overview",
      paragraphs: [
        bestFor.some((b) => b.includes("nightlife") || b === "nightlife")
          ? `${name} has a lively nightlife scene, with bars, clubs and late-night eats concentrated in certain neighbourhoods. Most action starts after 9 or 10 PM and runs until the early hours. Areas known for nightlife are well connected by metro or taxi.`
          : `Nightlife in ${name} is more low-key than in Seoul but still present. You'll find bars, pubs and the occasional club, plus late-night food spots. It's a good place to wind down with a drink and local company rather than party until dawn.`,
        `Tipping isn't expected in South Korea. Cover charges may apply at some clubs. Always carry ID; the legal drinking age is 19. Public transport stops around midnight in most cities, so plan your return or use taxis and ride apps.`,
      ],
    },
    {
      heading: "Getting around the city",
      paragraphs: [
        `Getting around ${name} is straightforward. Most visitors use the metro or bus system; T-Money cards work across public transport and are available at convenience stores and stations. Taxis and ride-hailing apps are also widely used.`,
        `Central ${name} is often walkable once you're in a neighbourhood. For longer trips, check metro and bus maps (Naver Maps or KakaoMap work well in Korea). If you're heading to the outskirts or nearby towns, intercity buses and trains are usually efficient and affordable.`,
      ],
    },
    {
      heading: "Best time to visit",
      paragraphs: [
        `Spring (March–May) and autumn (September–November) are the most comfortable times to visit ${name}: mild weather, clear skies and seasonal festivals. Cherry blossoms in spring and fall foliage draw big crowds, so book accommodation early.`,
        `Summer in ${name} can be hot and humid; winter is cold and dry. Both seasons have their appeal — summer beaches and festivals, winter skiing and warming food — but pack and plan accordingly. Check local events and holidays when you book.`,
      ],
    },
    {
      heading: "Travel tips for visitors",
      paragraphs: [
        `Before you go: get a T-Money card for transport, download Naver Map or KakaoMap, and have some cash (many small places are cash-only). English is spoken in tourist areas but not everywhere; a few Korean phrases and a translation app help.`,
        `In ${name} respect local customs: remove shoes where indicated, don't stick chopsticks upright in rice, and pour drinks for others at shared meals. Tap water is generally safe; bottled water is cheap if you prefer. Keep our neighbourhood and category guides handy for day-by-day ideas in ${name}.`,
      ],
    },
    {
      heading: "What makes this city unique",
      paragraphs: [
        `${name} stands out for the way it balances scale and intimacy. You can spend a morning in a centuries-old district and an evening in a neon-lit neighbourhood; the contrast is part of the appeal. Locals are used to visitors and generally helpful when asked.`,
        `Seasonal events — cherry blossom festivals, autumn foliage, winter markets, summer beach culture — add another layer to a visit. Check what's on during your dates and build in time for spontaneity. ${name} rewards travellers who leave room to get lost and discover their own favourite spots.`,
      ],
    },
  ];
}

export function getTopHighlightsForCity(
  city: City,
  neighbourhoods: Neighbourhood[] = []
): TopHighlightsSection {
  const name = city.name;
  const bestFor = city.bestFor ?? [];
  const hasNightlife = bestFor.some((b) => b.toLowerCase().includes("nightlife") || b === "bars");
  const hasCulture = bestFor.some((b) => ["culture", "art", "history", "temples"].some((k) => b.toLowerCase().includes(k)));
  const hasFood = bestFor.some((b) => b.toLowerCase().includes("food"));
  const nhNames = neighbourhoods.length > 0 ? neighbourhoods.slice(0, 3).map((n) => n.name) : [];
  const highlights: string[] = [];
  if (hasCulture || name === "Seoul") {
    highlights.push(`Explore historic palaces, hanok villages and traditional markets`);
  }
  if (nhNames.length > 0) {
    highlights.push(`Discover distinct neighbourhoods such as ${nhNames.join(", ")}`);
  }
  if (hasNightlife) {
    highlights.push(`Experience lively nightlife districts with bars, clubs and late-night street food`);
  }
  if (hasFood) {
    highlights.push(`Enjoy Korean BBQ, street food markets and regional specialities`);
  }
  highlights.push(`Visit iconic landmarks and viewpoints — from towers to temples`);
  if (name === "Seoul") {
    highlights.push(`Ride the efficient subway and use a T-Money card for easy transport`);
  } else {
    highlights.push(`Get around easily with local transport and walkable districts`);
  }
  return { heading: `Top highlights in ${name}`, highlights };
}
