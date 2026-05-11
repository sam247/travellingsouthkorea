"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { BreweryMarker } from "./BreweryMap";

const REGION_COLORS: Record<string, string> = {
  Seoul: "#e11d48",
  Busan: "#2563eb",
  Jeju: "#16a34a",
  Gangneung: "#d97706",
};

function makeIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="width:28px;height:28px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11h1a3 3 0 0 1 0 6h-1"/><path d="M9 12v6"/><path d="M13 12v6"/><path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1 3 1 1.5-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5z"/></svg>
    </div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

interface Props {
  markers: BreweryMarker[];
  flyTarget: { lat: number; lng: number } | null;
}

export default function BreweryMapLeaflet({ markers, flyTarget }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
      center: [36.0, 127.8],
      zoom: 7,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    markers.forEach((m) => {
      const color = REGION_COLORS[m.region] ?? "#6366f1";
      const marker = L.marker([m.lat, m.lng], { icon: makeIcon(color) }).addTo(map);
      const directionsUrl = `https://map.naver.com/v5/directions/-/-/-/transit?c=${m.lng},${m.lat},15,0,0,0,dh`;
      marker.bindPopup(
        `<div style="font-family:system-ui;min-width:180px">
          <strong style="font-size:14px">${m.name}</strong>
          <div style="color:#6b7280;font-size:12px;margin-top:2px">${m.region}</div>
          ${m.description ? `<div style="font-size:12px;margin-top:6px;color:#374151">${m.description}</div>` : ""}
          ${m.address ? `<div style="font-size:11px;margin-top:6px;color:#6b7280">${m.address}</div>` : ""}
          <a href="${directionsUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:8px;font-size:12px;font-weight:500;color:#2563eb;text-decoration:none">Get Directions →</a>
        </div>`
      );
    });

    mapRef.current = map;

    const timer = setTimeout(() => map.invalidateSize(), 200);
    return () => clearTimeout(timer);
  }, [markers]);

  useEffect(() => {
    if (!flyTarget || !mapRef.current) return;
    mapRef.current.flyTo([flyTarget.lat, flyTarget.lng], 14, { duration: 0.8 });
  }, [flyTarget]);

  return <div ref={containerRef} className="h-[400px] sm:h-[500px] w-full" />;
}
