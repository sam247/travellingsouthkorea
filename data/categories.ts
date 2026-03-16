import type { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "bars",
    label: "Bars",
    description: "Bars, clubs and nightlife spots",
    filters: ["All", "Rooftops", "Speakeasies", "Dive Bars"],
  },
  {
    slug: "restaurants",
    label: "Restaurants",
    description: "Where to eat — from street food to fine dining",
    filters: ["All", "Street Food", "Fine Dining", "Budget"],
  },
  {
    slug: "cafes",
    label: "Cafes",
    description: "Coffee shops, brunch and casual eats",
    filters: ["All", "Specialty Coffee", "Brunch", "Dessert"],
  },
  {
    slug: "nightlife",
    label: "Nightlife",
    description: "Bars, clubs, rooftops and everything after dark",
    filters: ["All", "Rooftops", "Speakeasies", "Dance Clubs", "Karaoke", "Dive Bars"],
  },
  {
    slug: "food",
    label: "Food",
    description: "Street food, restaurants, cafes and where to eat",
    filters: ["All", "Street Food", "Fine Dining", "Cafes", "Brunch", "Budget"],
  },
  {
    slug: "things-to-do",
    label: "Things To Do",
    description: "Sights, hikes, culture and experiences",
    filters: ["All", "Hiking", "Culture", "Free", "Photography", "Markets"],
  },
  {
    slug: "neighbourhoods",
    label: "Neighbourhoods",
    description: "Area guides and local insights",
    filters: ["All", "Hip", "Historic", "Foodie", "Nightlife"],
  },
  {
    slug: "itineraries",
    label: "Itineraries",
    description: "Day plans and multi-day trip routes",
    filters: ["All", "1 Day", "3 Days", "1 Week", "Budget"],
  },
  {
    slug: "travel-tips",
    label: "Travel Tips",
    description: "Practical advice for visiting South Korea",
    filters: ["All", "Transport", "Money", "Language", "SIM & WiFi"],
  },
];

export const getCategoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
