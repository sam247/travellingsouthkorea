import { getItineraryImagePath } from "@/lib/imagePaths";
import type { Itinerary } from "@/types";

export const itineraries: Itinerary[] = [
  {
    slug: "3-days-in-seoul",
    title: "3 Days In Seoul",
    citySlug: "seoul",
    days: 3,
    image: getItineraryImagePath("3-days-in-seoul"),
    summary: "The essential Seoul itinerary — palaces, street food, nightlife and neighbourhood exploration packed into three unforgettable days.",
    intro: "Three days isn't enough for Seoul — but it's enough to fall in love. This itinerary covers the must-see sights, the best food experiences and the neighbourhoods that define the city's character. Follow it loosely, get lost often, and eat everything.",
    budget: "₩150,000 – ₩300,000 per day",
    authorSlug: "james-jeong",
    updatedDate: "2026-03-14",
    contentType: "itinerary",
    dayPlans: [
      {
        dayNumber: 1,
        title: "Jongno & The Old City",
        timeSlots: [
          { label: "Morning", title: "Gyeongbokgung Palace & Bukchon Hanok Village", description: "Start at Seoul's grandest palace. Arrive for the 10 AM guard changing ceremony, then wander through the grounds before heading to the traditional hanok village streets of Bukchon.", image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80", tip: "Wearing hanbok (traditional dress) gets you free palace entry. Rental shops are everywhere nearby." },
          { label: "Afternoon", title: "Insadong & Samgyetang Lunch", description: "Explore the traditional art galleries and teahouses of Insadong. Have lunch at Tosokchon for the city's best samgyetang (ginseng chicken soup).", venueSlug: "tosokchon", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80", tip: "Queue at Tosokchon moves fast. The black chicken version is worth the extra." },
          { label: "Evening", title: "Myeongdong Street Food", description: "Hit Myeongdong's street food stalls as they fire up in the late afternoon. Tteokbokki, hotteok, tornado potatoes — eat your way through the neon-lit streets.", guideSlug: "best-street-food-myeongdong", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80" },
        ],
      },
      {
        dayNumber: 2,
        title: "Gangnam & The South Side",
        timeSlots: [
          { label: "Morning", title: "Fritz Coffee & Gangnam Cafes", description: "Start the day with Seoul's best specialty coffee at Fritz, then explore Gangnam's design-forward cafe scene. The multi-storey spaces here are an experience in themselves.", venueSlug: "fritz-coffee", guideSlug: "cafes-gangnam", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" },
          { label: "Afternoon", title: "COEX & Starfield Library", description: "The massive COEX underground mall houses the famous Starfield Library — floor-to-ceiling bookshelves in a soaring atrium. Browse the shops, catch a film at the IMAX, or explore the aquarium.", image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80" },
          { label: "Evening", title: "Korean BBQ in Gangnam", description: "End the day with a proper Korean BBQ feast. Gangnam has some of Seoul's best samgyeopsal (pork belly) restaurants — order the meat, the sides come endlessly.", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80", tip: "Most BBQ restaurants don't take reservations — arrive before 7 PM to avoid the wait." },
        ],
      },
      {
        dayNumber: 3,
        title: "Hongdae & Itaewon — The Night Side",
        timeSlots: [
          { label: "Morning", title: "Bukhansan Sunrise Hike", description: "If you're feeling adventurous, catch a sunrise hike on Bukhansan. The Baegundae Peak trail offers stunning views of Seoul waking up. Otherwise, sleep in — you'll need the energy tonight.", venueSlug: "baegundae-peak", guideSlug: "hiking-bukhansan", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80" },
          { label: "Afternoon", title: "Hongdae Street Culture", description: "Explore Hongdae's graffiti alleys, indie boutiques and street performers. Grab a late lunch at one of the neighbourhood's countless casual restaurants.", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80" },
          { label: "Evening", title: "Hongdae Bars & Itaewon Nightlife", description: "Start the evening at Café Abyss or Vault 82 in Hongdae, then hop a taxi to Itaewon for rooftop cocktails at Southside Parlor. End the night at Cakeshop if electronic music is your thing.", guideSlug: "best-bars-hongdae", image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80", tip: "Seoul's subway closes at midnight. After that, it's taxis or night buses — or just stay out until it reopens at 5:30 AM." },
        ],
      },
    ],
  },
  {
    slug: "3-days-in-busan",
    title: "3 Days In Busan",
    citySlug: "busan",
    days: 3,
    image: getItineraryImagePath("3-days-in-busan"),
    summary: "Beaches, temples, seafood and coastal views — the best of Busan in three days.",
    intro: "Busan rewards slow exploration. This itinerary balances the city's famous beaches with cliffside temples, bustling markets and enough seafood to remember for years. Spend your days by the water and your evenings in the city's laid-back neighbourhoods.",
    budget: "₩120,000 – ₩250,000 per day",
    authorSlug: "mina-park",
    updatedDate: "2026-03-14",
    contentType: "itinerary",
    dayPlans: [
      {
        dayNumber: 1,
        title: "Haeundae & the Coast",
        timeSlots: [
          { label: "Morning", title: "Haeundae Beach", description: "Start with Busan's most famous beach. Walk the crescent of sand, grab a coffee at a beachfront cafe and watch the city wake up.", guideSlug: "haeundae-beach-guide", image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80" },
          { label: "Afternoon", title: "Haeundae Traditional Market", description: "Dive into the covered market for fresh seafood, dried fish and street snacks. The second floor has some of the best raw fish sets in Busan.", image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80", tip: "Head upstairs for cheap, fresh hoe (sashimi) with banchan." },
          { label: "Evening", title: "Beachfront Dinner", description: "Choose one of the seafood restaurants along the beach strip for grilled fish, shellfish and sea views as the lights come on.", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80" },
        ],
      },
      {
        dayNumber: 2,
        title: "Temples & the Hills",
        timeSlots: [
          { label: "Morning", title: "Haedong Yonggungsa Temple", description: "One of the few seaside temples in Korea. Arrive early to beat the crowds and enjoy the dragon sculptures and ocean views.", image: "https://images.unsplash.com/photo-1573057284059-827a26b093f4?w=800&q=80" },
          { label: "Afternoon", title: "Gamcheon Culture Village", description: "Wander the colourful hillside village with its murals, galleries and steep alleys. Allow time to get lost and find the best viewpoints.", image: "https://images.unsplash.com/photo-1573057284059-827a26b093f4?w=800&q=80" },
          { label: "Evening", title: "Seomyeon or Gwangalli", description: "Seomyeon for busy streets and casual eats, or Gwangalli for beach vibes and the lit-up bridge. Both offer a relaxed Busan evening.", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80" },
        ],
      },
      {
        dayNumber: 3,
        title: "Markets & Farewell",
        timeSlots: [
          { label: "Morning", title: "Jagalchi Market", description: "Korea's largest seafood market. Browse the stalls, pick your fish and have it prepared upstairs — an essential Busan experience.", image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80" },
          { label: "Afternoon", title: "Yongdusan Park & BIFF Square", description: "Quick climb to Busan Tower for city views, then stroll BIFF Square for street food and cinema history.", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80" },
          { label: "Evening", title: "Final Seafood Feast", description: "One more round of hoe or grilled shellfish near Jagalchi or at a favourite spot before you go.", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80" },
        ],
      },
    ],
  },
  {
    slug: "2-days-in-jeju",
    title: "2 Days In Jeju",
    citySlug: "jeju",
    days: 2,
    image: getItineraryImagePath("2-days-in-jeju"),
    summary: "A short Jeju hit list: coast, waterfalls and the island's best food in two days.",
    intro: "Two days on Jeju is a taste, not the full feast — but you can still hit the highlights. This itinerary focuses on the south coast, iconic waterfalls and enough black pork and seafood to justify the trip.",
    budget: "₩100,000 – ₩220,000 per day",
    authorSlug: "mina-park",
    updatedDate: "2026-03-14",
    contentType: "itinerary",
    dayPlans: [
      {
        dayNumber: 1,
        title: "South Coast & Waterfalls",
        timeSlots: [
          { label: "Morning", title: "Jeongbang & Cheonjiyeon", description: "Visit Jeongbang — one of the few waterfalls in Asia that drops into the ocean — then Cheonjiyeon for a gentler cascade in a forest setting.", guideSlug: "jeju-waterfalls", image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80" },
          { label: "Afternoon", title: "Seogwipo & Coastal Drive", description: "Explore Seogwipo's harbour and cafes, or drive the coastal road for cliff views and quiet beaches.", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80" },
          { label: "Evening", title: "Black Pork & Seafood", description: "Jeju black pork barbecue is a must. Pair it with local soju and finish with fresh abalone or seafood if you have room.", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80" },
        ],
      },
      {
        dayNumber: 2,
        title: "Hallasan or the East",
        timeSlots: [
          { label: "Morning", title: "Hallasan or Seongsan", description: "If you're fit and early, a Hallasan trail rewards with crater views. Otherwise, Seongsan Ilchulbong (Sunrise Peak) is a shorter, iconic climb.", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80" },
          { label: "Afternoon", title: "Cafes & Coast", description: "Jeju's cafe scene is legendary. Pick an ocean-view spot for coffee and cake, or explore the east coast's lava formations and beaches.", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" },
          { label: "Evening", title: "Last Supper", description: "One more seafood feast or a relaxed dinner in Jeju City before your flight. Save time for the airport's local snacks and gifts.", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80" },
        ],
      },
    ],
  },
];

export const getItineraryBySlug = (slug: string) => itineraries.find((i) => i.slug === slug);
export const getItinerariesByCity = (citySlug: string) =>
  itineraries.filter((i) => i.citySlug === citySlug);
export const getItinerariesByAuthor = (authorSlug: string) =>
  itineraries.filter((i) => i.authorSlug === authorSlug);
