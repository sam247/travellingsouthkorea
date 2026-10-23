"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { MapPoint } from "@/lib/mapPoints";

const OsmMapCanvas = dynamic(() => import("./OsmMapCanvas"), { ssr: false });

/**
 * Reserves the map box immediately, then loads Leaflet only when the box
 * is near the viewport. The aspect ratio stays constant so tiles do not shift layout.
 */
export function LazyOsmMap({
  markers,
  label,
}: {
  markers: MapPoint[];
  label: string;
}) {
  const holderRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = holderRef.current;
    if (!node || markers.length === 0) return;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [markers.length]);

  if (markers.length === 0) return null;

  return (
    <div
      ref={holderRef}
      className="relative z-0 aspect-[16/9] w-full overflow-hidden rounded-xl bg-secondary sm:aspect-[21/9]"
    >
      {active ? (
        <OsmMapCanvas markers={markers} label={label} />
      ) : (
        <span className="sr-only">{label}</span>
      )}
    </div>
  );
}
