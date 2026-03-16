import Link from "next/link";
import {
  getCityPath,
  getGuidePath,
  getItineraryPath,
  getCategoryPath,
} from "@/lib/canonical";

const cityLinks = [
  { label: "Seoul", slug: "seoul" },
  { label: "Busan", slug: "busan" },
  { label: "Jeju", slug: "jeju" },
  { label: "Incheon", slug: "incheon" },
  { label: "Gyeongju", slug: "gyeongju" },
  { label: "Gangneung", slug: "gangneung" },
];

const guideLinks = [
  { label: "Best Bars In Hongdae", citySlug: "seoul", guideSlug: "best-bars-hongdae" },
  { label: "Best Street Food In Myeongdong", citySlug: "seoul", guideSlug: "best-street-food-myeongdong" },
  { label: "3 Days In Seoul", itinerarySlug: "3-days-in-seoul" },
  { label: "Haeundae Beach Guide", citySlug: "busan", guideSlug: "haeundae-beach-guide" },
];

const categoryLinks = [
  { label: "Food", slug: "food" },
  { label: "Nightlife", slug: "nightlife" },
  { label: "Things To Do", slug: "things-to-do" },
  { label: "Itineraries", slug: "itineraries" },
  { label: "Travel Tips", slug: "travel-tips" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-secondary/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Travelling South Korea
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Curated travel guides, neighbourhood insights, food spots and
              itineraries for exploring South Korea.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Cities
            </h4>
            <div className="flex flex-col gap-2">
              {cityLinks.map((link) => (
                <Link
                  key={link.slug}
                  href={getCityPath(link.slug)}
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Popular Guides
            </h4>
            <div className="flex flex-col gap-2">
              {guideLinks.map((link) => {
                const href = "itinerarySlug" in link && link.itinerarySlug
                  ? getItineraryPath(link.itinerarySlug)
                  : getGuidePath(link.citySlug!, link.guideSlug!);
                return (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Explore
            </h4>
            <div className="flex flex-col gap-2">
              {categoryLinks.map((link) => (
                <Link
                  key={link.slug}
                  href={getCategoryPath(link.slug)}
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/50 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Travelling South Korea. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
