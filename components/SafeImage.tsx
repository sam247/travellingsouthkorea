"use client";

import { useState } from "react";
import Image from "next/image";
import { DEFAULT_PLACEHOLDER_IMAGE } from "@/lib/imageConfig";

interface SafeImageProps {
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

export function SafeImage({
  src,
  fallbackSrc = DEFAULT_PLACEHOLDER_IMAGE,
  alt,
  fill,
  width = 800,
  height = 533,
  className,
  sizes,
  priority,
  loading,
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

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
      onError={handleError}
    />
  );
}
