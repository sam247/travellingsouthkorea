"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { getMeasurementId, trackGaPageView } from "@/lib/analytics/googleAnalyticsClient";

export function GoogleAnalytics() {
  const pathname = usePathname();
  const measurementId = getMeasurementId();
  const hasFiredInitialRef = useRef(false);

  useEffect(() => {
    if (!measurementId || !pathname) return;

    if (!hasFiredInitialRef.current) {
      hasFiredInitialRef.current = true;
      return;
    }

    trackGaPageView(pathname);
  }, [measurementId, pathname]);

  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
