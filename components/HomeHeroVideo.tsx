"use client";

import { useEffect, useState } from "react";
import { SafeImage } from "@/components/SafeImage";

export function HomeHeroVideo({
  videoSrc,
  posterSrc,
  alt,
}: {
  videoSrc: string;
  posterSrc: string;
  alt: string;
}) {
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
      <SafeImage
        src={posterSrc}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    );
  }

  return (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={posterSrc}
      aria-hidden
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
