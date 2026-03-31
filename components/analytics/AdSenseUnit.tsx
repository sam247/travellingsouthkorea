"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const ADSENSE_CLIENT = "ca-pub-3865452541027172";

type AdFormat = "auto" | "fluid" | "rectangle" | "vertical" | "horizontal";

interface AdSenseUnitProps {
  slot: string;
  format?: AdFormat;
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Inner component intentionally has no stable identity — when its `key`
 * changes React fully unmounts/remounts it, giving us a fresh <ins> element
 * that AdSense treats as a brand-new slot. This is the only reliable way
 * to re-initialise AdSense on client-side navigation.
 *
 * Push is deferred until the element enters the viewport via IntersectionObserver,
 * avoiding unnecessary API calls for off-screen ads (improves LCP and reduces
 * wasted requests on mobile).
 */
function AdSenseSlot({
  slot,
  format,
  fullWidthResponsive,
  className,
  style,
}: AdSenseUnitProps & { format: AdFormat }) {
  const insRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ins = insRef.current;
    if (!ins) return;

    function pushAd() {
      if (!ins) return;
      if (ins.getAttribute("data-adsbygoogle-status") === "done") return;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // Script not loaded yet or ad blocked — fail silently.
      }
    }

    if (!("IntersectionObserver" in window)) {
      // Fallback for environments without IntersectionObserver support.
      pushAd();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect();
          pushAd();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(ins);
    return () => observer.disconnect();
  }, []);

  return (
    <ins
      ref={insRef as React.RefObject<HTMLModElement>}
      className={`adsbygoogle block${className ? ` ${className}` : ""}`}
      style={style}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
    />
  );
}

/**
 * Route-aware AdSense ad unit.
 *
 * On every client-side navigation the inner <ins> element is unmounted and
 * remounted with a fresh key, then `adsbygoogle.push({})` is called once on
 * the new element. This prevents duplicate-push errors while ensuring ads
 * appear on every page view including mobile.
 *
 * Usage:
 *   <AdSenseUnit slot="1234567890" />
 *
 * Slot IDs are created in your AdSense dashboard under Ad Units.
 * The publisher ID (data-ad-client) is shared across all units and comes
 * from the script already loaded in app/layout.tsx.
 */
export function AdSenseUnit({
  slot,
  format = "auto",
  fullWidthResponsive = true,
  className,
  style,
}: AdSenseUnitProps) {
  const pathname = usePathname();
  const [renderKey, setRenderKey] = useState(0);
  const prevPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    if (prevPathnameRef.current === null) {
      prevPathnameRef.current = pathname;
      return;
    }
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setRenderKey((k) => k + 1);
    }
  }, [pathname]);

  return (
    <AdSenseSlot
      key={renderKey}
      slot={slot}
      format={format}
      fullWidthResponsive={fullWidthResponsive}
      className={className}
      style={style}
    />
  );
}
