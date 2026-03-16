"use client";

import { useState } from "react";
import { GuideCard } from "@/components/GuideCard";
import { NeighbourhoodCard } from "@/components/NeighbourhoodCard";
import type { Category } from "@/types";
import type { Guide } from "@/types";
import type { Neighbourhood } from "@/types";

type Mode = "guides" | "neighbourhoods";

interface CategoryDiscoveryClientProps {
  mode: Mode;
  category: Category;
  guides?: Guide[];
  neighbourhoods?: Neighbourhood[];
}

export function CategoryDiscoveryClient({
  mode,
  category,
  guides = [],
  neighbourhoods = [],
}: CategoryDiscoveryClientProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredGuides =
    mode === "guides" && guides
      ? activeFilter === "All"
        ? guides
        : guides.filter((g) =>
            g.tags.some((t) => t.toLowerCase() === activeFilter.toLowerCase())
          )
      : [];

  const filteredNeighbourhoods =
    mode === "neighbourhoods" && neighbourhoods
      ? activeFilter === "All"
        ? neighbourhoods
        : neighbourhoods.filter(
            (n) =>
              n.bestFor.some((b) => b.toLowerCase() === activeFilter.toLowerCase()) ||
              n.vibe.toLowerCase().includes(activeFilter.toLowerCase())
          )
      : [];

  const list = mode === "guides" ? filteredGuides : filteredNeighbourhoods;
  const isEmpty = mode === "guides" ? filteredGuides.length === 0 : filteredNeighbourhoods.length === 0;

  return (
    <>
      <section className="sticky top-14 sm:top-16 z-30 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto">
          {category.filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {!isEmpty ? (
          mode === "guides" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredGuides.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredNeighbourhoods.map((n) => (
                <NeighbourhoodCard key={n.slug} neighbourhood={n} />
              ))}
            </div>
          )
        ) : (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">
              {mode === "guides"
                ? "No guides found for this filter yet. Check back soon!"
                : "No neighbourhoods found for this filter."}
            </p>
          </div>
        )}
      </section>
    </>
  );
}
