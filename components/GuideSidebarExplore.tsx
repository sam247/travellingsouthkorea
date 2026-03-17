import Link from "next/link";
import type { City } from "@/types";
import type { Neighbourhood } from "@/types";

interface ExploreLink {
  label: string;
  href: string;
}

interface GuideSidebarExploreProps {
  city: City;
  neighbourhoods: Neighbourhood[];
  getNeighbourhoodPath: (citySlug: string, neighbourhoodSlug: string) => string;
  getCityCategoryPath: (citySlug: string, categorySlug: string) => string;
}

const CATEGORY_LINKS: { label: string; slug: string }[] = [
  { label: "Restaurants", slug: "restaurants" },
  { label: "Nightlife", slug: "nightlife" },
  { label: "Things to do", slug: "things-to-do" },
  { label: "Bars", slug: "bars" },
  { label: "Cafes", slug: "cafes" },
  { label: "Itineraries", slug: "itineraries" },
  { label: "Travel tips", slug: "travel-tips" },
  { label: "Neighbourhoods", slug: "neighbourhoods" },
];

export function GuideSidebarExplore({
  city,
  neighbourhoods,
  getNeighbourhoodPath,
  getCityCategoryPath,
}: GuideSidebarExploreProps) {
  const neighbourhoodLinks: ExploreLink[] = neighbourhoods
    .slice(0, 5)
    .map((n) => ({
      label: n.name,
      href: getNeighbourhoodPath(city.slug, n.slug),
    }));
  const categoryLinks: ExploreLink[] = CATEGORY_LINKS.map(({ label, slug }) => ({
    label,
    href: getCityCategoryPath(city.slug, slug),
  }));
  const hasNeighbourhoods = neighbourhoodLinks.length > 0;
  if (!hasNeighbourhoods && categoryLinks.length === 0) return null;
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
        Explore {city.name}
      </h3>
      <ul className="space-y-2">
        {hasNeighbourhoods &&
          neighbourhoodLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        {categoryLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
