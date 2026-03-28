"use client";

import { useState } from "react";
import Image from "next/image";
import { DEFAULT_CULTURE_IMAGE } from "@/lib/cultureImages";
import { isUnsplashImageUrl } from "@/lib/unsplashHotlink";

interface CultureImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
}

export function CultureImage({
  src,
  fallbackSrc = DEFAULT_CULTURE_IMAGE,
  alt,
  fill,
  width = 800,
  height = 533,
  className,
  sizes,
  priority,
  loading,
}: CultureImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const hotlink = isUnsplashImageUrl(currentSrc);

  const handleError = () => {
    setCurrentSrc(fallbackSrc);
  };

  if (fill) {
    return (
      <Image
        src={currentSrc}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
        loading={loading}
        unoptimized={hotlink}
        onError={handleError}
      />
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      priority={priority}
      loading={loading}
      unoptimized={hotlink}
      onError={handleError}
    />
  );
}
