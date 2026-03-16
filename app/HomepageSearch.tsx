"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { getGuidePath } from "@/lib/canonical";
import { guides } from "@/data/guides";

export function HomepageSearch() {
  const [search, setSearch] = useState("");

  const filteredGuides = search.trim()
    ? guides.filter(
        (g) =>
          g.title.toLowerCase().includes(search.toLowerCase()) ||
          g.neighbourhood.toLowerCase().includes(search.toLowerCase()) ||
          g.city.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="mt-8 relative max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search Seoul guides, neighbourhoods, bars..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-12 pl-11 pr-4 rounded-xl bg-background/95 backdrop-blur-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border/50"
        />
      </div>
      {search.trim() && (
        <div
          className="absolute top-full mt-2 left-0 right-0 bg-card rounded-xl border border-border/50 overflow-hidden max-h-64 overflow-y-auto z-20"
          style={{ boxShadow: "var(--shadow-hover)" }}
        >
          {filteredGuides.length > 0 ? (
            filteredGuides.map((g) => (
              <Link
                key={g.slug}
                href={getGuidePath(g.city, g.slug)}
                onClick={() => setSearch("")}
                className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors"
              >
                <Image
                  src={g.image}
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">{g.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {g.neighbourhood}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="px-4 py-3 text-sm text-muted-foreground">
              No results found
            </p>
          )}
        </div>
      )}
    </div>
  );
}
