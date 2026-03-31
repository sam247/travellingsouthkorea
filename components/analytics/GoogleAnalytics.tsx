"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ensureGoogleAnalyticsLoaded,
  getMeasurementId,
  trackGaPageView,
} from "@/lib/analytics/googleAnalyticsClient";

export function GoogleAnalytics() {
  const pathname = usePathname();
  const measurementId = getMeasurementId();
  const [gaReady, setGaReady] = useState(false);
  const lastTrackedPathRef = useRef<string | null>(null);
  const listenersRemovedRef = useRef(false);

  useEffect(() => {
    if (!measurementId) return;

    const activate = () => {
      if (listenersRemovedRef.current) return;
      listenersRemovedRef.current = true;
      window.removeEventListener("scroll", activate, scrollOpts);
      document.removeEventListener("click", activate, captureOpts);
      document.removeEventListener("keydown", activate, captureOpts);

      void ensureGoogleAnalyticsLoaded()
        .then(() => setGaReady(true))
        .catch(() => {
          /* script blocked or offline — stay inactive */
        });
    };

    const scrollOpts: AddEventListenerOptions = {
      passive: true,
      capture: true,
    };
    const captureOpts: AddEventListenerOptions = { capture: true };

    window.addEventListener("scroll", activate, scrollOpts);
    document.addEventListener("click", activate, captureOpts);
    document.addEventListener("keydown", activate, captureOpts);

    return () => {
      window.removeEventListener("scroll", activate, scrollOpts);
      document.removeEventListener("click", activate, captureOpts);
      document.removeEventListener("keydown", activate, captureOpts);
    };
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId || !gaReady) return;

    const path = pathname ?? (typeof window !== "undefined" ? window.location.pathname : "");
    if (!path || lastTrackedPathRef.current === path) return;

    lastTrackedPathRef.current = path;
    trackGaPageView(path);
  }, [measurementId, pathname, gaReady]);

  return null;
}
