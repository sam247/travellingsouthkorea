"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import {
  searchQueryFlat,
  SEARCH_TYPE_LABELS,
  type SearchEntry,
} from "@/lib/search";
import { SearchResultThumbnail } from "@/components/SearchResultThumbnail";
import { trackSearch } from "@/lib/analytics/gaEvents";

export function HomepageSearch() {
  const [search, setSearch] = useState("");

  const q = search.trim();
  const results: SearchEntry[] = q ? searchQueryFlat(q, 12) : [];

  return (
    <div className="mt-8 relative max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search guides, travel tips, neighbourhoods, cities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-12 pl-11 pr-4 rounded-xl bg-background/95 backdrop-blur-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border/50"
        />
      </div>
      {q && (
        <div
          className="absolute top-full mt-2 left-0 right-0 bg-card rounded-xl border border-border/50 overflow-hidden max-h-64 overflow-y-auto z-20"
          style={{ boxShadow: "var(--shadow-hover)" }}
        >
          {results.length > 0 ? (
            results.map((entry) => (
              <Link
                key={`${entry.type}-${entry.href}`}
                href={entry.href}
                onClick={() => {
                  if (q) trackSearch(q);
                  setSearch("");
                }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors"
              >
                <SearchResultThumbnail entry={entry} />
                <div className="text-left min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {entry.title}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {entry.subtitle ?? SEARCH_TYPE_LABELS[entry.type]}
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
