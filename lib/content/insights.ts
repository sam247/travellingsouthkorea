import type { City } from "@/types";
import type { Neighbourhood } from "@/types";
import type { Guide } from "@/types";
import type { Itinerary } from "@/types";

export type InsightSection = { heading: string; paragraphs: string[] };
export type TipsSection = { heading: string; tips: string[] };

function hasNightlife(bestFor: string[] | undefined): boolean {
  if (!bestFor) return false;
  return bestFor.some((b) => b.toLowerCase().includes("nightlife") || b === "bars");
}
function hasCulture(bestFor: string[] | undefined): boolean {
  if (!bestFor) return false;
  return bestFor.some((b) => ["culture", "art", "history", "traditional"].includes(b.toLowerCase()));
}

export function getLocalInsightsForCity(
  city: City,
  neighbourhoods: Neighbourhood[] = []
): InsightSection {
  const name = city.name;
  const bestFor = city.bestFor ?? [];
  const tagline = city.tagline;
  const isNightlife = hasNightlife(bestFor);
  const isCulture = hasCulture(bestFor);
  const nhNames = neighbourhoods.length > 0
    ? neighbourhoods.slice(0, 3).map((n) => n.name).join(", ")
    : "key districts";

  const paragraphs: string[] = [];
  paragraphs.push(
    `${name} has a distinct local culture that varies by neighbourhood. ${tagline}. Visitors often notice the mix of modern life and tradition, and the way different areas attract different crowds — from students and creatives to business travellers and long-term expats.`
  );
  if (isNightlife) {
    paragraphs.push(
      `Nightlife in ${name} ranges from student-heavy areas with cheap drinks and live music to expat hangouts and late-night street food culture. Some neighbourhoods stay busy until the early hours; others wind down by midnight. The crowd types and typical atmosphere depend on the area — ${nhNames} each have their own character.`
    );
  }
  if (isCulture) {
    paragraphs.push(
      `Cultural highlights in ${name} include traditional markets, historic streets and heritage sites. Temples and palaces sit alongside contemporary galleries and performance spaces. Locals and visitors mix at markets and in cafe districts; the area is known for a blend of quiet tradition and busy modern life.`
    );
  }
  if (paragraphs.length === 1) {
    paragraphs.push(
      `What ${name} is known for depends on the neighbourhood. Explore a few areas to get a sense of who usually visits — from day-trippers to residents — and the typical atmosphere that makes each district unique.`
    );
  }
  return { heading: "Local insights", paragraphs };
}

export function getLocalInsightsForNeighbourhood(
  neighbourhood: Neighbourhood,
  city: City
): InsightSection {
  const name = neighbourhood.name;
  const cityName = city.name;
  const vibe = neighbourhood.vibe;
  const bestFor = neighbourhood.bestFor ?? [];
  const isNightlife = bestFor.some(
    (b) =>
      b.toLowerCase().includes("bar") ||
      b.toLowerCase().includes("nightlife") ||
      b.toLowerCase().includes("club")
  );
  const isCulture = bestFor.some(
    (b) =>
      b.toLowerCase().includes("culture") ||
      b.toLowerCase().includes("art") ||
      b.toLowerCase().includes("historic")
  );

  const paragraphs: string[] = [];
  paragraphs.push(
    `${name} is one of ${cityName}'s most recognisable areas — ${vibe.toLowerCase()}. The local culture here reflects who usually visits: a mix of locals, students, expats and tourists depending on the time of day and part of the neighbourhood. The typical atmosphere is what draws people back.`
  );
  if (isNightlife) {
    paragraphs.push(
      `After dark, ${name} offers student nightlife, expat hangouts and late-night street food culture. Crowds vary by day and venue; some spots are tourist-heavy while others feel like local secrets. The area is known for its energy and variety.`
    );
  }
  if (isCulture) {
    paragraphs.push(
      `By day, ${name} is known for traditional markets, historic streets or temple and heritage areas. The crowd is often a mix of shoppers, culture-seekers and residents. What the area is known for shapes the atmosphere — expect a balance of activity and local character.`
    );
  }
  return { heading: "Local insights", paragraphs };
}

export function getLocalInsightsForGuide(guide: Guide, city: City): InsightSection {
  const title = guide.title;
  const neighbourhood = guide.neighbourhood;
  const cityName = city.name;
  const category = guide.category;
  const isNightlife = category === "nightlife" || title.toLowerCase().includes("bar");
  const isNeighbourhood = Boolean(neighbourhood);

  const paragraphs: string[] = [];
  if (isNeighbourhood) {
    paragraphs.push(
      `In ${neighbourhood}, the local culture and crowd types reflect the neighbourhood's place in ${cityName}. The typical atmosphere here — from student nightlife to expat hangouts and late-night street food — is what the area is known for. Who usually visits varies by venue and time of day.`
    );
  } else {
    paragraphs.push(
      `Across ${cityName}, the spots in this guide reflect the city's mix of local culture and visitor favourites. Crowd types and typical atmosphere vary by area; what each place is known for shapes who usually visits.`
    );
  }
  if (isNightlife) {
    paragraphs.push(
      `Nightlife in this area ranges from casual bars to clubs and late-night eats. Student areas tend to be busiest on weekends; expat hangouts and tourist spots can be busy any night. The best time to visit depends on the vibe you're after.`
    );
  }
  return { heading: "Local insights", paragraphs };
}

export function getWhenToVisitForCity(city: City): InsightSection {
  const name = city.name;
  return {
    heading: "When to visit",
    paragraphs: [
      `The best months to visit ${name} are March–May (spring) and September–November (autumn). Spring brings cherry blossom season and mild weather; autumn offers clear skies and fall foliage. Both periods are popular, so book accommodation early.`,
      `Summer (June–August) in ${name} is hot and humid but ideal for beaches and outdoor festivals. Winter (December–February) is cold and dry; expect winter street food markets, skiing nearby and fewer tourists. Peak tourist seasons align with school holidays and cherry blossom; consider shoulder months for fewer crowds.`,
    ],
  };
}

export function getWhenToVisitForNeighbourhood(
  neighbourhood: Neighbourhood,
  city: City
): InsightSection {
  const name = neighbourhood.name;
  const cityName = city.name;
  return {
    heading: "When to visit",
    paragraphs: [
      `The best time to visit ${name} depends on what you want to do. For daytime exploring and markets, spring and autumn in ${cityName} are ideal. For nightlife, weekends are busiest; weekdays are quieter.`,
      `Weather in ${cityName} follows the same pattern as the rest of Korea: hot summers, cold winters, pleasant spring and autumn. Local festivals and events can affect crowds; check what's on when you plan your trip.`,
    ],
  };
}

export function getWhenToVisitForItinerary(
  itinerary: Itinerary,
  city: City | null
): InsightSection {
  const cityName = city?.name ?? itinerary.citySlug;
  return {
    heading: "When to visit",
    paragraphs: [
      `The best months for this itinerary in ${cityName} are spring (March–May) and autumn (September–November): comfortable weather, cherry blossom or foliage, and long daylight hours. Summer and winter are still rewarding but pack and plan for heat or cold.`,
      `Peak tourist seasons mean busier sights and higher accommodation prices. Shoulder months (April, October) often offer a good balance. Local festivals and events can add to the experience — check the calendar for ${cityName}.`,
    ],
  };
}

export function getGettingAroundForCity(city: City): InsightSection {
  const name = city.name;
  return {
    heading: "Getting around",
    paragraphs: [
      `${name} is well served by public transport. The subway system is fast, clean and easy to use with a T-Money card — buy one at any convenience store or station and tap in and out. Taxis are plentiful and affordable for shorter trips.`,
      `T-Money works on subways, buses and some taxis. Top up at convenience stores or station machines. Walking is often the best way to explore individual neighbourhoods once you've arrived by metro or bus. Typical travel times between districts are 20–40 minutes by subway.`,
    ],
  };
}

export function getGettingAroundForItinerary(
  itinerary: Itinerary,
  city: City | null
): InsightSection {
  const cityName = city?.name ?? itinerary.citySlug;
  return {
    heading: "Getting around",
    paragraphs: [
      `For this itinerary, use the subway and your feet. A T-Money card is essential — use it for metro and buses. Taxis are useful for late-night returns when the subway has closed.`,
      `Subway convenience in ${cityName} means most stops are within a short walk of the areas in this plan. Allow 20–40 minutes between neighbourhoods by metro. Late-night travel may require taxis or night buses.`,
    ],
  };
}

export function getBudgetGuideForCity(city: City): InsightSection {
  const name = city.name;
  return {
    heading: "Budget expectations",
    paragraphs: [
      `Typical spending in ${name} varies by style. Food can range from roughly ₩10,000–15,000 for a casual meal to ₩30,000+ per person for a sit-down dinner. Street food and market eats are at the lower end; restaurants and cafes in the middle.`,
      `Transport costs are low with a T-Money card: a few thousand won per trip. Nightlife spending depends on the area — expect roughly ₩5,000–15,000 per drink in most bars; clubs may have cover. Entry to palaces and many attractions is often under ₩5,000. These are approximate ranges; prices vary by venue and season.`,
    ],
  };
}

export function getBudgetGuideForGuide(guide: Guide, city: City): InsightSection {
  const priceRange = guide.priceRange;
  const neighbourhood = guide.neighbourhood;
  return {
    heading: "Budget expectations",
    paragraphs: [
      `Spots in this guide typically sit in the ${priceRange} range for a visit — whether that's a drink, a meal or an activity. Food and drink prices vary by venue; nightlife spending depends on how long you stay and what you order.`,
      `Entry tickets and cover charges are usually modest. Approximate ranges rather than exact prices: plan for the middle of ${priceRange} per person for a typical evening or meal in ${neighbourhood || city.name}.`,
    ],
  };
}

export function getBudgetGuideForItinerary(
  itinerary: Itinerary,
  city: City | null
): InsightSection {
  const budget = itinerary.budget;
  const cityName = city?.name ?? itinerary.citySlug;
  return {
    heading: "Budget expectations",
    paragraphs: [
      `This itinerary works with a budget of around ${budget}. That covers transport, meals, entry tickets and casual spending. Food prices in ${cityName} range from street food and casual eats to sit-down restaurants; mix both to stay within range.`,
      `Transport costs are low with a T-Money card. Set aside a bit extra for nightlife, souvenirs or the odd taxi. These are approximate ranges; your actual spend will depend on choices and season.`,
    ],
  };
}

export function getLocalEtiquetteForCity(city: City): InsightSection {
  const name = city.name;
  return {
    heading: "Local etiquette",
    paragraphs: [
      `In ${name}, as elsewhere in Korea, restaurant etiquette matters: wait to be seated where indicated, don't stick chopsticks upright in rice, and pour drinks for others at shared meals. Tipping is not customary; leave nothing extra.`,
      `On public transport, give up priority seats for the elderly and pregnant. Keep noise down in residential areas and on late-night buses. Bar behaviour is generally relaxed, but avoid being loud in traditional or quiet neighbourhoods.`,
    ],
  };
}

export function getLocalEtiquetteForGuide(guide: Guide, city: City): InsightSection {
  const neighbourhood = guide.neighbourhood;
  const cityName = city.name;
  return {
    heading: "Local etiquette",
    paragraphs: [
      `In ${neighbourhood || cityName}, follow local norms: remove shoes where asked, don't stick chopsticks upright in rice, and pour drinks for others when sharing. Tipping is not expected in Korea.`,
      `Quiet residential areas deserve respect — keep noise down when walking through at night. On public transport, offer priority seats. Restaurant and bar behaviour is generally relaxed; follow the lead of the venue.`,
    ],
  };
}

export function getTravelTipsForGuide(guide: Guide, city: City): TipsSection {
  const neighbourhood = guide.neighbourhood;
  const metro = guide.nearestMetro;
  const category = guide.category;
  const tips: string[] = [];
  tips.push(
    neighbourhood && metro
      ? `Best time of day: visit after the area wakes up; ${neighbourhood} is often liveliest from late afternoon. Nearest metro: ${metro}.`
      : `Check opening hours before you go; many venues open in the afternoon or evening.`
  );
  tips.push("Crowd avoidance: weekdays are quieter than weekends; arrive earlier for popular spots.");
  tips.push("Transport shortcut: use Naver Map or KakaoMap for real-time directions and bus options.");
  if (category === "nightlife" || guide.title.toLowerCase().includes("bar")) {
    tips.push("Subway closes around midnight; plan your return or use taxis and ride apps.");
  }
  tips.push("Food ordering: point at the menu or use a translation app; staff are used to helping visitors.");
  return { heading: "Pro tips", tips };
}

export function getTravelTipsForItinerary(
  itinerary: Itinerary,
  city: City | null
): TipsSection {
  const cityName = city?.name ?? itinerary.citySlug;
  const tips: string[] = [];
  tips.push("Best time of day: start sights early to beat crowds; save markets and nightlife for afternoon and evening.");
  tips.push("Crowd avoidance: weekdays are quieter at palaces and main attractions; book or arrive early for popular spots.");
  tips.push("Transport: buy a T-Money card on day one; use it for all subway and bus legs.");
  tips.push(`${cityName} subway is easy to navigate; allow 20–40 minutes between neighbourhoods.`);
  tips.push("Food: mix street food and sit-down meals to balance cost and experience.");
  return { heading: "Pro tips", tips };
}

export function getTravelTipsForNeighbourhood(
  neighbourhood: Neighbourhood,
  city: City
): TipsSection {
  const name = neighbourhood.name;
  const metro = neighbourhood.nearestMetro;
  const tips: string[] = [];
  tips.push(`Best time of day: ${name} is often busiest from late afternoon; mornings are quieter for walking and cafes.`);
  tips.push("Crowd avoidance: visit on weekdays for fewer tourists; weekends are livelier but busier.");
  tips.push(`Transport: ${metro} is the easiest way in; most of the action is within a 10–15 minute walk.`);
  tips.push("Use Naver Map or KakaoMap for walking directions and bus times.");
  tips.push("Food: many places are cash-friendly; carry some won for small vendors.");
  return { heading: "Pro tips", tips };
}

export function getAuthorPerspective(
  authorSlug: string,
  locationName: string,
  pageType: "guide" | "itinerary" | "city" | "neighbourhood"
): string | null {
  if (authorSlug === "james-jeong") {
    if (pageType === "guide" || pageType === "neighbourhood") {
      return `${locationName} is one of the areas James knows best after years of exploring Seoul's neighbourhoods and nightlife. These recommendations reflect spots he'd suggest to friends visiting for the first time.`;
    }
    if (pageType === "itinerary") {
      return `James has walked this itinerary countless times and tweaked it for first-time visitors. His picks balance must-sees with local favourites.`;
    }
  }
  if (authorSlug === "mina-park") {
    if (pageType === "guide" || pageType === "neighbourhood") {
      return `Mina has spent years covering Korea's food and culture; her picks in ${locationName} focus on character and quality over hype.`;
    }
    if (pageType === "itinerary") {
      return `Mina's itinerary draws on her experience of Korea's quieter, more beautiful side — expect a mix of culture, food and local insight.`;
    }
  }
  return null;
}
