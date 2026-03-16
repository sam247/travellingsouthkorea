import type { Author } from "@/types";

export const authors: Author[] = [
  {
    slug: "james-jeong",
    name: "James Jeong",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    location: "Seoul, South Korea",
    bio: "Seoul-based writer covering neighbourhoods, nightlife and food culture. Originally from London, James has lived in Korea for six years and spends most evenings exploring bars, restaurants and backstreets across the city.",
    topics: ["Nightlife", "Bars", "Neighbourhoods", "Street Food"],
    expertise: "Neighbourhoods, nightlife and food culture",
    yearsInKorea: 6,
  },
  {
    slug: "mina-park",
    name: "Mina Park",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    location: "Busan, South Korea",
    bio: "Travel writer and photographer based in Busan. Mina covers Korea's food scene, coastal destinations and off-the-beaten-path experiences. Her work focuses on the quieter, more beautiful side of Korean travel.",
    topics: ["Food", "Cafes", "Nature", "Photography"],
    expertise: "Food, coastal destinations and off-the-beaten-path travel",
    yearsInKorea: 4,
  },
];

export const getAuthorBySlug = (slug: string) => authors.find((a) => a.slug === slug);
