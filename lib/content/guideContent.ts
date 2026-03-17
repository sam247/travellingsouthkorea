import type { City } from "@/types";
import type { Guide } from "@/types";
import type { ContentSection, TopHighlightsSection } from "./cityContent";

export function getGuideContent(guide: Guide, city: City): ContentSection[] {
  const title = guide.title;
  const neighbourhood = guide.neighbourhood;
  const cityName = city.name;
  const priceRange = guide.priceRange;
  const category = guide.category;
  const tags = guide.tags ?? [];
  const isNeighbourhoodGuide = Boolean(neighbourhood && guide.neighbourhoodSlug);

  return [
    {
      heading: "Overview of the area or theme",
      paragraphs: [
        isNeighbourhoodGuide
          ? `This guide focuses on ${neighbourhood}, one of ${cityName}'s most visited neighbourhoods. The spots we've chosen reflect the area's character and the kind of ${category.replace(/-/g, " ")} experiences that make ${neighbourhood} worth a trip.`
          : `This guide covers the best ${category.replace(/-/g, " ")} across ${cityName}. We've selected venues and experiences that capture what the city does well, from well-known favourites to local gems.`,
        guide.venues.length > 0
          ? `The list below includes our top picks: a mix of places that suit different tastes and budgets. Use the descriptions and tips to plan your visit and combine a few spots into a single trip.`
          : `Below you'll find our curated selection for this theme. Check opening hours and locations before you go; some places recommend reservations or have seasonal hours.`,
      ],
    },
    {
      heading: "Local culture and atmosphere",
      paragraphs: [
        isNeighbourhoodGuide
          ? `In ${neighbourhood}, the atmosphere is shaped by the local crowd, the mix of venues and the neighbourhood's place in ${cityName}. Expect a distinct vibe that differs from other parts of the city — part of what makes exploring by neighbourhood so rewarding.`
          : `Across ${cityName}, ${category.replace(/-/g, " ")} varies by area. Some neighbourhoods are busier at night; others are better for a daytime visit. The venues in this guide give you a cross-section of what the city offers.`,
        tags.length > 0
          ? `The spots we've included often reflect themes like ${tags.slice(0, 3).join(", ")}. Use those as a rough guide to the kind of experience you'll get in each place.`
          : "Each venue has its own character; read the descriptions to see which ones match the kind of experience you're after.",
      ],
    },
    {
      heading: "Price expectations",
      paragraphs: [
        `Budget-wise, expect to spend in the ${priceRange} range for a typical visit to the spots in this guide. That can mean a single drink or meal, or a full evening depending on the place.`,
        `Some venues are more casual and affordable; others are splurge-worthy. We've noted price levels where relevant so you can plan according to your budget. Tipping is not customary in South Korea.`,
      ],
    },
    {
      heading: "Tips for visitors",
      paragraphs: [
        isNeighbourhoodGuide && guide.nearestMetro
          ? `Getting to ${neighbourhood} is straightforward: the nearest metro is ${guide.nearestMetro}. From there, most venues are within walking distance. Public transport runs until around midnight, so plan your return or use taxis and ride apps.`
          : `Use the metro or buses to reach the areas covered in this guide. Check Naver Map or KakaoMap for directions and current opening hours. Many places are cash-friendly; some take cards.`,
        `Respect local customs: don't stick chopsticks upright in rice, pour drinks for others at shared tables, and keep noise down in residential areas. Carry ID if you're drinking; the legal age is 19.`,
      ],
    },
    {
      heading: "Best times to visit",
      paragraphs: [
        category === "nightlife" || title.toLowerCase().includes("bar") || title.toLowerCase().includes("nightlife")
          ? `For bars and nightlife, most spots in this guide come alive after 9 or 10 PM. Weekends are busiest; weekdays can be more relaxed. Arrive earlier if you want a table or a specific seat.`
          : `Opening hours vary by venue — some open late morning, others in the afternoon. For cafes and restaurants, lunch and early evening are often the busiest. Check individual listings for the latest hours.`,
        `Spring and autumn are the most comfortable seasons for exploring ${cityName}; summer and winter are fine too but pack and plan for the weather. Festivals and holidays can affect opening times and crowds.`,
        `You can cover several spots in this guide in one trip if you plan by area. Group venues that are close together and allow time for walking and queueing at popular places. Many visitors use this guide to build a full day or evening in ${neighbourhood || cityName}.`,
      ],
    },
    {
      heading: "Don't miss",
      paragraphs: [
        isNeighbourhoodGuide
          ? `If you only have time for one or two stops, pick the venues that best match your mood — whether that's a quiet coffee, a lively bar or a standout meal. ${neighbourhood} rewards a slow wander; leave room to discover something not on the list.`
          : `Our top tip: start with one or two venues that appeal most, then add more if time allows. The best ${category.replace(/-/g, " ")} experiences in ${cityName} often come from going deep rather than rushing through the list. Save the guide for later and revisit when you're planning your next trip.`,
      ],
    },
  ];
}

export function getTopHighlightsForGuide(guide: Guide, city: City): TopHighlightsSection {
  const title = guide.title;
  const neighbourhood = guide.neighbourhood;
  const cityName = city.name;
  const category = guide.category;
  const tags = guide.tags ?? [];
  const isNightlife = category === "nightlife" || title.toLowerCase().includes("bar");
  const highlights: string[] = [];
  if (neighbourhood) {
    highlights.push(`Curated spots in ${neighbourhood}, one of ${cityName}'s most visited areas`);
  } else {
    highlights.push(`Best ${category.replace(/-/g, " ")} across ${cityName}`);
  }
  if (guide.venues.length > 0) {
    highlights.push(`${guide.venues.length} hand-picked venues with descriptions and practical tips`);
  }
  if (tags.length > 0) {
    highlights.push(`Themes include ${tags.slice(0, 3).join(", ")}`);
  }
  if (isNightlife) {
    highlights.push(`Nightlife-friendly: bars, late-night eats and transport tips`);
  }
  highlights.push(`Price guidance: ${guide.priceRange} — plan your budget before you go`);
  if (guide.nearestMetro) {
    highlights.push(`Nearest metro: ${guide.nearestMetro} — easy to reach by public transport`);
  }
  return { heading: `Top highlights: ${title}`, highlights };
}
