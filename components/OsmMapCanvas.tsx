"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { MapPoint } from "@/lib/mapPoints";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function pinIcon(): L.DivIcon {
  return L.divIcon({
    className: "",
    html: '<div style="width:16px;height:16px;border-radius:50%;background:#003d9b;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.35)"></div>',
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -10],
  });
}

export default function OsmMapCanvas({
  markers,
  label,
}: {
  markers: MapPoint[];
  label: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || mapRef.current || markers.length === 0) return;

    const map = L.map(container, {
      scrollWheelZoom: false,
      attributionControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    const icon = pinIcon();
    const latLngs: L.LatLngExpression[] = [];
    for (const marker of markers) {
      const latLng: L.LatLngExpression = [marker.lat, marker.lng];
      latLngs.push(latLng);
      L.marker(latLng, { icon, title: marker.name, keyboard: true })
        .addTo(map)
        .bindPopup(`<strong>${escapeHtml(marker.name)}</strong>`);
    }

    if (latLngs.length === 1) {
      map.setView(latLngs[0]!, 13);
    } else {
      map.fitBounds(L.latLngBounds(latLngs), { padding: [28, 28], maxZoom: 14 });
    }

    mapRef.current = map;
    const invalidate = () => map.invalidateSize();
    const soon = window.setTimeout(invalidate, 0);
    const later = window.setTimeout(invalidate, 250);
    window.addEventListener("resize", invalidate);

    return () => {
      window.clearTimeout(soon);
      window.clearTimeout(later);
      window.removeEventListener("resize", invalidate);
      map.remove();
      mapRef.current = null;
    };
  }, [markers]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full w-full"
      role="region"
      aria-label={label}
    />
  );
}
