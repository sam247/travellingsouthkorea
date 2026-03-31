/**
 * Client-only GA4 helpers: load gtag after first user interaction, then track page views.
 * Avoids inflating Direct traffic from bots and non-engaged loads (no SSR / auto pageview).
 */

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

let loadPromise: Promise<void> | null = null;

function appendScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.async = true;
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(s);
  });
}

function injectGtagInit(): void {
  if (!MEASUREMENT_ID) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, {
    send_page_view: false,
  });
}

/**
 * Loads gtag.js + inline init once. Idempotent. Rejects on script error so callers can no-op.
 */
export function ensureGoogleAnalyticsLoaded(): Promise<void> {
  if (!MEASUREMENT_ID) return Promise.resolve();
  if (typeof window === "undefined") return Promise.resolve();

  if (loadPromise) return loadPromise;

  loadPromise = (async () => {
    await appendScript(
      `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`
    );
    injectGtagInit();
  })();

  return loadPromise.catch((err) => {
    loadPromise = null;
    throw err;
  });
}

export function getMeasurementId(): string | undefined {
  return MEASUREMENT_ID;
}

export function trackGaPageView(pathname: string): void {
  if (!MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return;

  const page = pathname || window.location.pathname;
  const fullUrl = window.location.origin + page;

  window.gtag("config", MEASUREMENT_ID, {
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
