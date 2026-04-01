import type { ContentSection } from "@/lib/content/cityContent";

export const MONEY_CATEGORY_SLUGS = [
  "where-to-stay",
  "travel-costs",
  "comparisons",
] as const;

export type MoneyCategorySlug = (typeof MONEY_CATEGORY_SLUGS)[number];

export interface MoneyPageContent {
  slug: MoneyCategorySlug;
  label: string;
  description: string;
  intro: string;
  quickPick: string[];
  localTip: string;
  sections: ContentSection[];
}

const SEOUL_AREAS = ["Hongdae", "Myeongdong", "Gangnam", "Itaewon", "Jamsil"] as const;

function whereToStaySeoul(): MoneyPageContent {
  return {
    slug: "where-to-stay",
    label: "Where To Stay",
    description:
      "Compare Seoul neighborhoods for first-time visitors, nightlife, food trips, and family stays with practical trade-offs.",
    intro:
      "Choosing where to stay in Seoul changes how smooth your entire trip feels. Hongdae works well for nightlife and younger travelers, Myeongdong is practical for first-timers and shopping, Gangnam suits comfort and premium hotels, and Jamsil is easier for families. Use this page to match your budget, vibe, and daily transport time before you book.",
    quickPick: [
      "Best first-time base: Myeongdong for central access and easy airport transport.",
      "Best nightlife base: Hongdae if you want late nights and younger energy.",
      "Best comfort base: Gangnam for modern hotels and polished neighborhoods.",
    ],
    localTip:
      "In Seoul, subway convenience often matters more than hotel star rating. Pick lodging within a short walk of a Line 2 or transfer station to save time every day.",
    sections: [
      {
        heading: "Area comparison: Hongdae vs Myeongdong vs Gangnam",
        paragraphs: [
          "Hongdae is strongest for bars, live music, and casual late-night food. It is usually a better fit for social trips and flexible schedules, especially if you plan to stay out past midnight.",
          "Myeongdong is better for first-time visitors who want straightforward transport and dense sightseeing options. You can combine shopping, street food, and central access without long detours.",
          "Gangnam has stronger premium hotel inventory, cleaner wide streets, and convenient business-style comfort. Expect higher room prices, but often better modern room quality and quieter night stays.",
        ],
      },
      {
        heading: "Pros and cons by traveler type",
        paragraphs: [
          "Budget-focused travelers: Hongdae and parts of Myeongdong usually offer more budget-friendly options and better value per night, but room size can be smaller during peak demand.",
          "Couples and style-focused trips: Gangnam and select boutique areas in Hongdae can feel more curated, but transport to northern attractions may take longer from the south side.",
          "Family trips: Jamsil and calmer edges of Myeongdong tend to be easier for strollers, malls, and predictable evenings, though nightlife variety is lower than Hongdae or Itaewon.",
        ],
      },
      {
        heading: "Who each area is best for",
        paragraphs: [
          "Pick Hongdae if your priority is nightlife, music, and social energy. Pick Myeongdong if you want efficient sightseeing and shopping in one walkable base.",
          "Pick Gangnam if hotel quality and upscale convenience matter more than being near older central landmarks. Pick Jamsil if your group prefers family-friendly logistics and quieter evenings.",
          "If your itinerary mixes multiple city zones, choose the area with the easiest first and last day transfers rather than only the cheapest room rate.",
        ],
      },
      {
        heading: "Recommendation summary",
        paragraphs: [
          "For most first-time Seoul trips, start by comparing Myeongdong and Hongdae, then only move to Gangnam if your budget and preferences justify it. This keeps transport simple and improves day-to-day pacing.",
          "Before booking, map one sample day from your hotel to two attractions and one dinner stop. That quick test usually reveals whether your area choice is practical for your trip style.",
        ],
      },
    ],
  };
}

function travelCostsSeoul(): MoneyPageContent {
  return {
    slug: "travel-costs",
    label: "Travel Costs",
    description:
      "Understand realistic Seoul daily budgets, transport costs, and spending trade-offs by travel style.",
    intro:
      "Seoul can be affordable or expensive depending on where you stay and how often you use premium nightlife and dining. A practical baseline is to budget by day type: transport-heavy sightseeing days, food-focused evenings, and one premium splurge day. This page helps you estimate costs before booking.",
    quickPick: [
      "Budget traveler baseline: target lower-cost stays plus local food streets.",
      "Mid-range traveler baseline: central hotel + mixed casual and premium meals.",
      "Premium traveler baseline: Gangnam/Myeongdong stays + top restaurants + bars.",
    ],
    localTip:
      "Use a T-Money card from day one. Seoul transfer discounts and route flexibility usually lower transport costs compared with relying on taxis for short hops.",
    sections: [
      {
        heading: "How Seoul costs usually break down",
        paragraphs: [
          "Your largest variable is accommodation area: Gangnam generally trends higher than Hongdae or budget pockets near Myeongdong. Booking location often has bigger impact than trimming food spend.",
          "Transport is relatively predictable if you use subway and bus with T-Money. Food costs vary most between street/casual options and premium dining zones.",
          "Nightlife spend can escalate quickly in Hongdae, Itaewon, and Gangnam. Plan a cap per evening so one late night does not distort your full-trip budget.",
        ],
      },
      {
        heading: "Pros and cons of budget strategies",
        paragraphs: [
          "Pros of area-based budgeting: if you stay where you spend time, you reduce transport and late taxi usage. This usually saves more than hunting marginally cheaper meals.",
          "Cons of over-optimizing price: very cheap rooms far from your main activities can increase commuting fatigue and hidden costs across the trip.",
          "Best balance for many travelers is a mid-priced base near good transit plus one or two pre-planned splurge experiences.",
        ],
      },
      {
        heading: "Who this budget model is best for",
        paragraphs: [
          "First-timers should choose simpler logistics over absolute cheapest rates, especially for short trips. Central positioning improves itinerary completion and reduces stress.",
          "Repeat visitors can optimize by district and purpose: nightlife stays in Hongdae, shopping-focused stays in Myeongdong, and premium comfort in Gangnam.",
          "Family groups benefit from stability: choose predictable neighborhoods with easy station access and fewer late-night transfers.",
        ],
      },
      {
        heading: "Recommendation summary",
        paragraphs: [
          "Set a daily floor-and-ceiling budget before arrival, then allocate flex spend to one highlight meal or experience per two days. This keeps your Seoul trip balanced while leaving room for spontaneity.",
          "For better control, pair this page with where-to-stay and itinerary links so you budget around real routes, not generic averages.",
        ],
      },
    ],
  };
}

function comparisonsSeoul(): MoneyPageContent {
  return {
    slug: "comparisons",
    label: "Travel Comparisons",
    description:
      "Compare Seoul travel choices side by side: areas, spending styles, and trip structures that affect value.",
    intro:
      "Travel value in Seoul comes from choosing the right combination of area, pace, and spending style. This comparison page helps you decide between common options before you commit money to hotels and reservations.",
    quickPick: [
      "Best value route: Myeongdong or Hongdae base with one premium night out.",
      "Best convenience route: central area plus compact itinerary days.",
      "Best comfort route: Gangnam base with planned transport buffers.",
    ],
    localTip:
      "If you are deciding between two neighborhoods, compare last-train convenience and first-attraction transit time. That usually predicts trip quality better than room photos.",
    sections: [
      {
        heading: "Area vs area: what changes your trip most",
        paragraphs: [
          "Hongdae vs Myeongdong is usually a nightlife-versus-centrality decision. Hongdae is stronger for late social plans, while Myeongdong simplifies daytime access and first-time logistics.",
          "Gangnam vs Myeongdong is often comfort-versus-location efficiency. Gangnam offers polished hotel stock, while Myeongdong often cuts cross-city transfers for classic attractions.",
          "Jamsil vs Hongdae is a family-versus-nightlife trade-off. Jamsil is calmer and structured; Hongdae is denser and more active into late hours.",
        ],
      },
      {
        heading: "Pros and cons by trip style",
        paragraphs: [
          "Fast 3-day trips benefit from central routing and reduced transfers, even if nightly room price is slightly higher. Time saved can outweigh small booking savings.",
          "Longer 7-day trips can optimize by vibe: split days by district and mix spending. This supports better value without sacrificing key experiences.",
          "Food-focused travelers should prioritize areas with late operating hours and reliable transit links, especially if dinner and nightlife run back-to-back.",
        ],
      },
      {
        heading: "Who each comparison path fits",
        paragraphs: [
          "Choose convenience-first comparisons if this is your first Seoul visit or your trip is short. Choose comfort-first comparisons if hotel quality and slower pacing matter more than attraction density.",
          "Budget travelers should compare total day cost, not only room rates. Add expected transport and dinner patterns when evaluating options.",
          "Groups should favor consistency over extreme optimization to reduce friction in daily coordination.",
        ],
      },
      {
        heading: "Recommendation summary",
        paragraphs: [
          "For most travelers, pick one strong base area and build a coherent route around it. Over-switching between distant districts is where budget and time are usually lost.",
          "Use this comparison with where-to-stay and travel-cost pages to make one integrated decision rather than three separate guesses.",
        ],
      },
    ],
  };
}

export function isMoneyCategorySlug(slug: string): slug is MoneyCategorySlug {
  return MONEY_CATEGORY_SLUGS.includes(slug as MoneyCategorySlug);
}

export function getMoneyPageContent(
  citySlug: string,
  categorySlug: string
): MoneyPageContent | null {
  if (citySlug !== "seoul" || !isMoneyCategorySlug(categorySlug)) return null;
  if (categorySlug === "where-to-stay") return whereToStaySeoul();
  if (categorySlug === "travel-costs") return travelCostsSeoul();
  if (categorySlug === "comparisons") return comparisonsSeoul();
  return null;
}

export function getMoneyQuickAreaNames(): string[] {
  return [...SEOUL_AREAS];
}

