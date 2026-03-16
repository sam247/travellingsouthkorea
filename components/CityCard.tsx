"use client";

import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";
import { getCityPath } from "@/lib/canonical";
import type { City } from "@/types";

export function CityCard({ city }: { city: City }) {
  const href = getCityPath(city.slug);
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-xl bg-card transition-all duration-240"
      style={{ boxShadow: "var(--shadow-card)" }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-hover)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-card)"; }}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <SafeImage
          src={city.image}
          alt={`${city.name}, South Korea`}
          width={800}
          height={450}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-semibold text-foreground">{city.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 font-editorial">
          {city.tagline}
        </p>
      </div>
    </Link>
  );
}
