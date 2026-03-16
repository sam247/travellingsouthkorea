"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";
import { ChevronDown } from "lucide-react";
import { getCityPath, getCountryPath, getNeighbourhoodPath, getGuidePath, getCategoryPath } from "@/lib/canonical";
import { getFeaturedCities } from "@/lib/queries";
import { getFeaturedGuides } from "@/lib/queries";
import { getNeighbourhoodsByCity } from "@/data/neighbourhoods";

const categories = [
  { label: "Food", slug: "food" },
  { label: "Nightlife", slug: "nightlife" },
  { label: "Things To Do", slug: "things-to-do" },
  { label: "Itineraries", slug: "itineraries" },
  { label: "Travel Tips", slug: "travel-tips" },
];

export function MegaNav() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, []);

  const topCities = getFeaturedCities(5);
  const featuredGuides = getFeaturedGuides(4);
  const seoulNeighbourhoods = getNeighbourhoodsByCity("seoul").slice(0, 5);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
          open ? "text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Explore
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-5xl bg-card rounded-xl border border-border/50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
          style={{ boxShadow: "var(--shadow-hover)" }}
        >
          <div className="grid grid-cols-4 gap-6 p-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Cities
              </h4>
              <div className="flex flex-col gap-1.5">
                {topCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={getCityPath(city.slug)}
                    onClick={() => setOpen(false)}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
                <Link
                  href={getCountryPath()}
                  onClick={() => setOpen(false)}
                  className="text-xs text-primary font-medium mt-1"
                >
                  All cities →
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Seoul Neighbourhoods
              </h4>
              <div className="flex flex-col gap-1.5">
                {seoulNeighbourhoods.map((n) => (
                  <Link
                    key={n.slug}
                    href={getNeighbourhoodPath("seoul", n.slug)}
                    onClick={() => setOpen(false)}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {n.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Categories
              </h4>
              <div className="flex flex-col gap-1.5">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={getCategoryPath(cat.slug)}
                    onClick={() => setOpen(false)}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Popular Guides
              </h4>
              <div className="flex flex-col gap-2">
                {featuredGuides.map((g) => (
                  <Link
                    key={g.slug}
                    href={getGuidePath(g.city, g.slug)}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 group"
                  >
                    <SafeImage
                      src={g.image}
                      alt=""
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-md object-cover"
                    />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {g.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
