import type { Itinerary } from "@/types";

export const itineraries: Itinerary[] = [
  {
    slug: "3-days-in-seoul",
    title: "3 Days In Seoul",
    citySlug: "seoul",
    days: 3,
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&q=80",
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
];

export const getItineraryBySlug = (slug: string) => itineraries.find((i) => i.slug === slug);
export const getItinerariesByCity = (citySlug: string) =>
  itineraries.filter((i) => i.citySlug === citySlug);
export const getItinerariesByAuthor = (authorSlug: string) =>
  itineraries.filter((i) => i.authorSlug === authorSlug);
