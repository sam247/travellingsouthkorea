import type { City } from "@/types";
import type { Neighbourhood } from "@/types";
import type { ContentSection, TopHighlightsSection } from "./cityContent";

export function getNeighbourhoodContent(
  neighbourhood: Neighbourhood,
  city: City
): ContentSection[] {
  const name = neighbourhood.name;
  const cityName = city.name;
  const vibe = neighbourhood.vibe;
  const bestFor = neighbourhood.bestFor ?? [];
  const bestForText = bestFor.length > 0 ? bestFor.slice(0, 3).join(", ") : "exploring";
  const metro = neighbourhood.nearestMetro;
  const priceRange = neighbourhood.priceRange;

  return [
    {
      heading: "What the neighbourhood is known for",
      paragraphs: [
        `${name} is one of ${cityName}'s most distinctive areas — ${vibe.toLowerCase()}. Visitors and locals alike come here for ${bestForText}, and the neighbourhood has built a reputation that goes well beyond the city.`,
        `Spend a few hours walking the main streets and side alleys to get a feel for the place. ${name} often comes alive in the afternoon and evening, so timing your visit can make a big difference. Check our guides and venue listings for specific spots in ${name}.`,
        `The area's identity has developed over years of students, creatives, expats and tourists mixing with long-term residents. That blend is what gives ${name} its character: expect a busy, sometimes chaotic energy that varies by time of day and season.`,
      ],
    },
    {
      heading: "Food and cafe culture",
      paragraphs: [
        `Eating and drinking in ${name} ranges from quick street bites to sit-down meals and specialty coffee. The neighbourhood's character shows in its mix of local joints, chains and independent cafes. Expect a spread of Korean staples and, in ${name}, often a few international options.`,
        `Price levels in ${name} sit roughly in the ${priceRange} range for a typical meal or coffee. Busy times are lunch and early evening; if you want a quieter cafe or a table at a popular restaurant, plan accordingly or book where possible.`,
      ],
    },
    {
      heading: "Nightlife overview",
      paragraphs: [
        bestFor.some(
          (b) =>
            b.toLowerCase().includes("bar") ||
            b.toLowerCase().includes("nightlife") ||
            b.toLowerCase().includes("club")
        )
          ? `${name} is a major nightlife hub in ${cityName}. Bars, clubs and late-night spots line the main strips; the vibe is ${vibe.toLowerCase()}. Most places stay open until 2 or 3 AM, with some going later.`
          : `Nightlife in ${name} is more understated but still present. You'll find bars and pubs suited to the area's ${vibe.toLowerCase()} character. It's a good base for a relaxed evening rather than a big night out.`,
        `Public transport from ${name} typically runs until around midnight. After that, taxis and ride apps are the usual options. Always carry ID; the legal drinking age in South Korea is 19.`,
      ],
    },
    {
      heading: "Shopping and attractions",
      paragraphs: [
        bestFor.some(
          (b) =>
            b.toLowerCase().includes("shop") ||
            b.toLowerCase().includes("art") ||
            b.toLowerCase().includes("culture")
        )
          ? `Shopping and culture are a big part of ${name}. From independent boutiques and vintage stores to galleries and street art, the neighbourhood offers plenty to see and buy. Allow time to wander; many of the best spots are off the main drag.`
          : `Even if ${name} isn't primarily a shopping or sightseeing district, you'll find local shops, markets and the odd landmark. The area is best explored on foot so you can dip into whatever catches your eye.`,
        `Combine a visit to ${name} with nearby neighbourhoods if you have a full day — many of ${cityName}'s districts are a short metro or bus ride apart. Our city and category pages list more things to do in and around ${cityName}.`,
      ],
    },
    {
      heading: "How to get there",
      paragraphs: [
        `The easiest way to reach ${name} is by metro: ${metro}. From the station, most of the action is within a 10- to 15-minute walk. Follow the crowds or use Naver Map / KakaoMap to navigate.`,
        `Buses also serve ${name} from other parts of ${cityName}. If you're coming from the airport or another city, check train and bus routes that connect to ${metro} or the neighbourhood. Taxis and ride-hailing apps are reliable for door-to-door trips.`,
      ],
    },
    {
      heading: "Tips for visiting",
      paragraphs: [
        `Wear comfortable shoes — ${name} is best explored on foot. Bring cash for small vendors and some cafes; not every place takes cards. Weekdays are generally less crowded than weekends.`,
        `Respect local etiquette: keep noise down in residential alleys, don't litter, and be mindful of opening hours (some spots close on certain days). For the latest recommendations in ${name}, check our guides and venue list for ${cityName}.`,
        `If you're combining ${name} with other parts of ${cityName}, the metro makes it easy to hop between neighbourhoods. Allow at least a half-day here to do the area justice; many visitors return for a second visit once they've seen how much there is to discover.`,
      ],
    },
  ];
}

export function getTopHighlightsForNeighbourhood(
  neighbourhood: Neighbourhood,
  city: City
): TopHighlightsSection {
  const name = neighbourhood.name;
  const cityName = city.name;
  const bestFor = neighbourhood.bestFor ?? [];
  const vibe = neighbourhood.vibe.toLowerCase();
  const hasNightlife = bestFor.some(
    (b) =>
      b.toLowerCase().includes("bar") ||
      b.toLowerCase().includes("nightlife") ||
      b.toLowerCase().includes("club")
  );
  const hasFood = bestFor.some(
    (b) =>
      b.toLowerCase().includes("food") ||
      b.toLowerCase().includes("restaurant") ||
      b.toLowerCase().includes("street food")
  );
  const hasCulture = bestFor.some(
    (b) =>
      b.toLowerCase().includes("culture") ||
      b.toLowerCase().includes("art") ||
      b.toLowerCase().includes("traditional")
  );
  const highlights: string[] = [];
  highlights.push(`Experience ${name}'s ${vibe} atmosphere in the heart of ${cityName}`);
  if (hasNightlife) {
    highlights.push(`Enjoy bars, live music and late-night eats in one of ${cityName}'s nightlife hubs`);
  }
  if (hasFood) {
    highlights.push(`Try local street food, cafes and restaurants that define the area`);
  }
  if (hasCulture) {
    highlights.push(`Browse galleries, teahouses and traditional streets`);
  }
  highlights.push(`Reach the area easily via ${neighbourhood.nearestMetro}`);
  highlights.push(`Walk the main strips and side alleys to discover hidden spots`);
  return { heading: `Top highlights in ${name}`, highlights };
}
