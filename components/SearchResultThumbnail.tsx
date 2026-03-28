"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DEFAULT_PLACEHOLDER_IMAGE } from "@/lib/imageConfig";
import { isUnsplashImageUrl } from "@/lib/unsplashHotlink";
import type { SearchEntry } from "@/lib/search";

export function SearchResultThumbnail({ entry }: { entry: SearchEntry }) {
  const [src, setSrc] = useState<string>(
    entry.image ?? DEFAULT_PLACEHOLDER_IMAGE
  );

  useEffect(() => {
    if (!entry.unsplashQuery) {
      setSrc(entry.image ?? DEFAULT_PLACEHOLDER_IMAGE);
      return;
    }

    let cancelled = false;
    const q = encodeURIComponent(entry.unsplashQuery);

    fetch(`/api/unsplash/image?q=${q}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { url?: string } | null) => {
        if (!cancelled && data?.url) setSrc(data.url);
        else if (!cancelled) setSrc(entry.image ?? DEFAULT_PLACEHOLDER_IMAGE);
      })
      .catch(() => {
        if (!cancelled) setSrc(entry.image ?? DEFAULT_PLACEHOLDER_IMAGE);
      });

    return () => {
      cancelled = true;
    };
  }, [entry.unsplashQuery, entry.image]);

  return (
    <Image
      src={src}
      alt=""
      width={40}
      height={40}
      className="w-10 h-10 rounded-lg object-cover shrink-0"
      unoptimized={isUnsplashImageUrl(src)}
    />
  );
}
