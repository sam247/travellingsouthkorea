"use client";

import { useEffect, useState } from "react";

/**
 * No poster image: a static poster flashes the old asset before the video decodes.
 * Reduced motion: dark gradient placeholder instead of a separate hero image.
 */
export function HomeHeroVideo({ videoSrc }: { videoSrc: string }) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (reduceMotion) {
    return (
      <div
        className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black"
        aria-hidden
      />
    );
  }

  return (
    <div className="absolute inset-0 bg-neutral-950">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
