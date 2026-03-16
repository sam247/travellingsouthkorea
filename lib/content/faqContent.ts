import type { City } from "@/types";
import type { Neighbourhood } from "@/types";
import type { Category } from "@/types";
import type { Guide } from "@/types";
import type { Itinerary } from "@/types";

export type FAQItem = { question: string; answer: string };

export function getFAQForCity(city: City): FAQItem[] {
  const name = city.name;
  return [
    {
      question: `Is ${name} expensive to visit?`,
      answer: `${name} can suit a range of budgets. Street food and casual meals are affordable; mid-range restaurants and cafes are moderate. Transport is cheap with a T-Money card. Accommodation costs vary by area and season. Overall, ${name} is less expensive than many major Asian cities for food and transport, while hotels can be pricey in peak periods.`,
    },
    {
      question: `How many days do you need in ${name}?`,
      answer: `We recommend at least three to four days to see the main sights and a few neighbourhoods. If you want to explore further, add a day for day trips or extra districts. First-time visitors often spend four to five days in ${name} to balance landmarks, food and neighbourhood exploration.`,
    },
    {
      question: `What is the best area to stay in ${name}?`,
      answer: `It depends on your priorities. Central areas near the metro give easy access to sights and nightlife. Quieter neighbourhoods suit travellers who prefer a local feel. Check our neighbourhood guides for character and transport links; staying near a main metro line makes getting around ${name} much easier.`,
    },
    {
      question: `Is ${name} safe for tourists?`,
      answer: `Yes. ${name} is generally very safe for tourists. Petty crime is rare, and violent crime is uncommon. Use normal precautions: keep an eye on belongings in crowded areas and at night. Emergency services are reliable; tap water is safe to drink in most of South Korea.`,
    },
    {
      question: `What is the best time to visit ${name}?`,
      answer: `Spring (March–May) and autumn (September–November) offer the best weather and seasonal highlights like cherry blossoms and fall foliage. Summer is hot and humid but good for beaches and festivals; winter is cold and dry with winter markets and skiing nearby. Book accommodation early for spring and autumn.`,
    },
  ];
}

export function getFAQForNeighbourhood(neighbourhood: Neighbourhood, city: City): FAQItem[] {
  const name = neighbourhood.name;
  const cityName = city.name;
  const metro = neighbourhood.nearestMetro;
  const vibe = neighbourhood.vibe.toLowerCase();
  const bestFor = neighbourhood.bestFor?.slice(0, 2).join(" and ") ?? "exploring";
  return [
    {
      question: `Is ${name} worth visiting?`,
      answer: `Yes. ${name} is one of ${cityName}'s most distinctive areas — ${vibe}. Visitors come for ${bestFor}, and the neighbourhood has a character that stands out from the rest of the city. Even a half-day here gives you a good sense of what makes ${name} special.`,
    },
    {
      question: `What is ${name} known for?`,
      answer: `${name} is known for its ${vibe} atmosphere and for ${bestFor}. The area draws a mix of locals, students, expats and tourists. Depending on the time of day, you'll find different crowds and vibes; explore the main streets and side alleys to get the full picture.`,
    },
    {
      question: `Is ${name} good for nightlife?`,
      answer: neighbourhood.bestFor?.some(
        (b) =>
          b.toLowerCase().includes("bar") ||
          b.toLowerCase().includes("nightlife") ||
          b.toLowerCase().includes("club")
      )
        ? `Yes. ${name} is one of ${cityName}'s main nightlife hubs. Bars, clubs and late-night food spots line the area. Most places stay open until 2 or 3 AM. The subway runs until around midnight, so plan your return or use taxis and ride apps.`
        : `${name} has bars and casual spots rather than a big club scene. It's better for a relaxed evening than a late night out. For more nightlife options, check our ${cityName} nightlife category and other neighbourhood guides.`,
    },
    {
      question: `How do you get to ${name}?`,
      answer: `The easiest way is by metro: ${metro}. From the station, most of the action is within a 10- to 15-minute walk. Buses also serve ${name} from other parts of ${cityName}. Use Naver Map or KakaoMap for real-time directions and bus times.`,
    },
  ];
}

export function getFAQForCategory(
  cityOrNeighbourhoodName: string,
  categoryLabel: string,
  context: "city" | "neighbourhood"
): FAQItem[] {
  const labelLower = categoryLabel.toLowerCase();
  return [
    {
      question: `What are the best ${labelLower} in ${cityOrNeighbourhoodName}?`,
      answer: `Our guides and venue listings for ${labelLower} in ${cityOrNeighbourhoodName} are curated to match different tastes and budgets. Use the filters and links on this page to find spots that suit you. Popular areas often have the most options; check opening hours and book where possible.`,
    },
    {
      question: `When is the best time to visit ${labelLower} in ${cityOrNeighbourhoodName}?`,
      answer: context === "city"
        ? `It depends on the type of ${labelLower}. Restaurants and bars are busiest at lunch and dinner; attractions and outdoor spots can be seasonal. Weekdays are often less crowded than weekends. Check individual venue pages for opening hours and seasonal events in ${cityOrNeighbourhoodName}.`
        : `Weekdays are usually quieter than weekends. For ${labelLower}, lunch and early evening are often the busiest. Check opening hours — some places in ${cityOrNeighbourhoodName} close one day a week or have seasonal hours.`,
    },
    {
      question: `Do I need to book ahead for ${labelLower} in ${cityOrNeighbourhoodName}?`,
      answer: `Some popular restaurants and experiences in ${cityOrNeighbourhoodName} recommend or require reservations. Casual ${labelLower} spots often accept walk-ins. When in doubt, check the venue listing or call ahead, especially for fine dining or small spaces.`,
    },
  ];
}

export function getFAQForGuide(guide: Guide, city: City): FAQItem[] {
  const title = guide.title;
  const neighbourhood = guide.neighbourhood;
  const cityName = city.name;
  const category = guide.category;
  const metro = guide.nearestMetro;
  const priceRange = guide.priceRange;
  return [
    {
      question: `What is this guide about?`,
      answer: `This guide covers ${title} — hand-picked ${category.replace(/-/g, " ")} in ${neighbourhood || cityName}. Each spot includes a description, tips and practical details. Use it to plan a single visit or string several places together for a full day or evening.`,
    },
    {
      question: neighbourhood
        ? `How do I get to the spots in ${neighbourhood}?`
        : `How do I get to the areas in this guide?`,
      answer: metro
        ? `The nearest metro is ${metro}. From there, most venues in this guide are within walking distance. Use Naver Map or KakaoMap for directions. Public transport runs until around midnight; after that use taxis or ride apps.`
        : `Use the metro or buses to reach the areas covered. Each venue listing includes location details. Download Naver Map or KakaoMap for directions and real-time transport options in ${cityName}.`,
    },
    {
      question: `What should I budget for this guide?`,
      answer: `Expect to spend in the ${priceRange} range for a typical visit to the spots in this guide. That might be a single drink or meal, or a full evening depending on the place. Tipping is not expected in South Korea. Some venues are cash-only; carry some won.`,
    },
  ];
}

export function getFAQForItinerary(itinerary: Itinerary, city: City | null): FAQItem[] {
  const title = itinerary.title;
  const days = itinerary.days;
  const cityName = city?.name ?? itinerary.citySlug;
  const budget = itinerary.budget;
  return [
    {
      question: `How many days is the ${title} itinerary?`,
      answer: `This is a ${days}-day itinerary. It's designed to cover the main sights and neighbourhoods of ${cityName} without rushing. You can follow it day by day or pick sections that match your interests and schedule.`,
    },
    {
      question: `What is the budget for the ${title} itinerary?`,
      answer: `We suggest planning for around ${budget}. That covers transport, meals, entry fees and casual spending. Your actual spend will depend on where you eat, whether you add paid attractions and your accommodation. A T-Money card keeps transport costs low.`,
    },
    {
      question: `Do I need to book anything in advance for this itinerary?`,
      answer: `For popular restaurants and some attractions in ${cityName}, booking ahead is wise. Palaces and major sights can be visited on the day; check opening hours and holidays. Get a T-Money card when you arrive for stress-free transport.`,
    },
    {
      question: `What is the best time of year to follow this itinerary?`,
      answer: `Spring and autumn offer the best weather and seasonal highlights in ${cityName}. Summer and winter are still rewarding; pack for heat or cold and plan for earlier sunsets in winter. Avoid major holidays if you want fewer crowds.`,
    },
  ];
}
