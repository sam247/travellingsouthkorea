"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  const pathname = usePathname();
  const initialPathRef = useRef<string | null>(null);

  useEffect(() => {
    if (!MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return;

    const page = pathname ?? window.location.pathname;
    const fullUrl = window.location.origin + page;

    if (initialPathRef.current === null) {
      initialPathRef.current = page;
    }

    window.gtag("config", MEASUREMENT_ID, {
      page_path: page,
      page_location: fullUrl,
    });
  }, [pathname]);

  if (!MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}

declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      targetId: string,
      params?: Record<string, unknown>
    ) => void;
  }
}
