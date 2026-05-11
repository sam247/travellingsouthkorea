"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

export interface BreweryMarker {
  name: string;
  lat: number;
  lng: number;
  region: string;
  description?: string;
}

interface BreweryMapProps {
  markers: BreweryMarker[];
}

export function BreweryMap({ markers }: BreweryMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [activeMarker, setActiveMarker] = useState<BreweryMarker | null>(null);
  const mapInstance = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || loaded) return;

    let cancelled = false;

    async function init() {
      const L = (await import("leaflet")).default;

      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      if (cancelled || !mapRef.current) return;

      const map = L.map(mapRef.current, {
        scrollWheelZoom: false,
      }).setView([36.0, 127.8], 7);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      const regionColors: Record<string, string> = {
        Seoul: "#e11d48",
        Busan: "#2563eb",
        Jeju: "#16a34a",
        Gangneung: "#d97706",
      };

      markers.forEach((m) => {
        const color = regionColors[m.region] ?? "#6366f1";
        const icon = L.divIcon({
          className: "",
          html: `<div style="width:28px;height:28px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11h1a3 3 0 0 1 0 6h-1"/><path d="M9 12v6"/><path d="M13 12v6"/><path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1 3 1 1.5-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5z"/></svg>
          </div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });

        const marker = L.marker([m.lat, m.lng], { icon }).addTo(map);
        marker.bindPopup(
          `<div style="font-family:system-ui;min-width:160px">
            <strong style="font-size:14px">${m.name}</strong>
            <div style="color:#6b7280;font-size:12px;margin-top:2px">${m.region}</div>
            ${m.description ? `<div style="font-size:12px;margin-top:6px;color:#374151">${m.description}</div>` : ""}
          </div>`
        );
      });

      mapInstance.current = map as unknown;
      setLoaded(true);

      setTimeout(() => map.invalidateSize(), 100);
    }

    init();

    return () => {
      cancelled = true;
      if (mapInstance.current && typeof (mapInstance.current as { remove?: () => void }).remove === "function") {
        (mapInstance.current as { remove: () => void }).remove();
      }
    };
  }, [markers, loaded]);

  const regions = Array.from(new Set(markers.map((m) => m.region)));
  const regionColors: Record<string, string> = {
    Seoul: "bg-rose-600",
    Busan: "bg-blue-600",
    Jeju: "bg-green-600",
    Gangneung: "bg-amber-600",
  };

  function flyTo(m: BreweryMarker) {
    setActiveMarker(m);
    const map = mapInstance.current as { flyTo?: (latlng: [number, number], zoom: number, opts?: { duration: number }) => void } | null;
    if (map?.flyTo) {
      map.flyTo([m.lat, m.lng], 14, { duration: 0.8 });
    }
  }

  return (
    <div className="not-prose my-10">
      <div className="rounded-xl overflow-hidden border border-border shadow-sm">
        <div ref={mapRef} className="h-[400px] sm:h-[500px] w-full bg-secondary" />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        {regions.map((r) => (
          <div key={r} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className={`inline-block w-2.5 h-2.5 rounded-full ${regionColors[r] ?? "bg-indigo-500"}`} />
            {r}
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {markers.map((m) => (
          <button
            key={m.name}
            type="button"
            onClick={() => flyTo(m)}
            className={`flex items-start gap-2.5 text-left px-3 py-2.5 rounded-lg border transition-colors ${
              activeMarker?.name === m.name
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
