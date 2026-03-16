"use client";

import { useEffect } from "react";
import { trackOutboundClick } from "@/lib/analytics/gaEvents";

export function OutboundClickTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor?.href) return;
      try {
        const url = new URL(anchor.href);
        if (url.origin === window.location.origin) return;
        if (url.protocol !== "http:" && url.protocol !== "https:") return;
        const linkText =
          anchor.textContent?.trim().slice(0, 100) || anchor.href;
        trackOutboundClick(anchor.href, linkText);
      } catch {
        // ignore invalid URLs
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
