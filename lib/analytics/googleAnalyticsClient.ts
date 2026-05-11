/**
 * Client-only GA4 helpers.
 * The gtag script is loaded via next/script in GoogleAnalytics.tsx.
 * These helpers fire page views on client-side navigations and expose
 * the measurement ID for conditional rendering.
 */

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function getMeasurementId(): string | undefined {
  return MEASUREMENT_ID;
}

export function trackGaPageView(pathname: string): void {
  if (!MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return;

  const page = pathname || window.location.pathname;
  const fullUrl = window.location.origin + page;

  window.gtag("event", "page_view", {
    page_path: page,
    page_location: fullUrl,
  });
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
