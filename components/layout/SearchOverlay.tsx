"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";
import { Search, X } from "lucide-react";
import {
  searchQuery,
  SEARCH_TYPE_LABELS,
  type SearchResultType,
} from "@/lib/search";
import { trackSearch } from "@/lib/analytics/gaEvents";
import { DEFAULT_PLACEHOLDER_IMAGE } from "@/lib/imageConfig";

const popularSearches = [
  "Seoul nightlife",
  "AREX",
  "Hongdae bars",
  "PC bang",
  "3 days in Seoul",
];

export function SearchOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

  const results = searchQuery(query, 4);
  const hasResults = results.size > 0;
  const order: SearchResultType[] = [
    "city",
    "neighbourhood",
    "guide",
    "venue",
    "itinerary",
    "travel-tip",
    "culture",
    "cinema",
    "category",
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-w-2xl mx-auto mt-20 mx-4 sm:mx-auto bg-card rounded-xl border border-border/50 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200"
        style={{ boxShadow: "var(--shadow-hover)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 border-b border-border/50">
          <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, travel tips, neighbourhoods, cities..."
            className="flex-1 h-12 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {!query && (
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    type="button"
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && !hasResults && (
            <p className="px-4 py-8 text-sm text-muted-foreground text-center">
              No results found
            </p>
          )}

          {query &&
            order.map((type) => {
              const entries = results.get(type);
              if (!entries?.length) return null;
              return (
                <div key={type} className="p-4 pt-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    {SEARCH_TYPE_LABELS[type]}
                  </p>
                  {entries.map((entry) => (
                    <Link
                      key={entry.href}
                      href={entry.href}
                      onClick={() => {
                        if (query.trim()) trackSearch(query.trim());
                        onClose();
                      }}
                      className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      <SafeImage
                        src={entry.image ?? DEFAULT_PLACEHOLDER_IMAGE}
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-lg object-cover shrink-0"
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {entry.title}
                        </p>
                        {entry.subtitle && (
                          <p className="text-xs text-muted-foreground">
                            {entry.subtitle}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
