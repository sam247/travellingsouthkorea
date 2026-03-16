"use client";

import Link from "next/link";
import Image from "next/image";
import { getNeighbourhoodPath } from "@/lib/canonical";
import type { Neighbourhood } from "@/types";

export function NeighbourhoodCard({ neighbourhood }: { neighbourhood: Neighbourhood }) {
  const href = getNeighbourhoodPath(neighbourhood.citySlug, neighbourhood.slug);
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-xl bg-card transition-all duration-240"
      style={{ boxShadow: "var(--shadow-card)" }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-hover)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-card)"; }}
    >
      <div className="aspect-[3/2] overflow-hidden">
        <Image
          src={neighbourhood.image}
          alt={neighbourhood.name}
          width={800}
          height={533}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-base font-semibold text-foreground">
          {neighbourhood.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 font-editorial">
          {neighbourhood.vibe}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {neighbourhood.bestFor.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
