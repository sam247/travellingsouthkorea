"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { MapPin } from "lucide-react";

export interface BreweryMarker {
  name: string;
  lat: number;
  lng: number;
  region: string;
  description?: string;
}

const REGION_DOT_COLORS: Record<string, string> = {
  Seoul: "bg-rose-600",
  Busan: "bg-blue-600",
  Jeju: "bg-green-600",
  Gangneung: "bg-amber-600",
};

const LeafletMap = dynamic(() => import("./BreweryMapLeaflet"), { ssr: false });

export function BreweryMap({ markers }: { markers: BreweryMarker[] }) {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const [flyTarget, setFlyTarget] = useState<{ lat: number; lng: number } | null>(null);

  const regions = Array.from(new Set(markers.map((m) => m.region)));

  function handleFly(m: BreweryMarker) {
    setActiveMarker(m.name);
    setFlyTarget({ lat: m.lat, lng: m.lng });
  }

  return (
    <div className="not-prose my-10">
      <div className="rounded-xl overflow-hidden border border-border shadow-sm">
        <LeafletMap markers={markers} flyTarget={flyTarget} />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        {regions.map((r) => (
          <div key={r} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className={`inline-block w-2.5 h-2.5 rounded-full ${REGION_DOT_COLORS[r] ?? "bg-indigo-500"}`} />
            {r}
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {markers.map((m) => (
          <button
            key={m.name}
            type="button"
            onClick={() => handleFly(m)}
            className={`flex items-start gap-2.5 text-left px-3 py-2.5 rounded-lg border transition-colors ${
              activeMarker === m.name
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50 hover:bg-secondary/50"
            }`}
          >
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
            <div>
              <span className="text-sm font-medium text-foreground">{m.name}</span>
              <span className="block text-xs text-muted-foreground">{m.region}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
