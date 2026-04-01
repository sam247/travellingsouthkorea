/**
 * GA4 custom event helpers. No-op when NEXT_PUBLIC_GA_MEASUREMENT_ID is missing.
 * All events use gtag and do not block rendering.
 */

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function getPageLocation(): string {
  if (typeof window === "undefined") return "";
  return window.location.origin + window.location.pathname;
}

function sendEvent(
  eventName: string,
  params: Record<string, string | number>
): void {
  if (!MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
}

export type InternalLinkTier = "tier1" | "tier2" | "tier3";
export type InternalLinkBlockType =
  | "you_might_also_like"
  | "nearby_things"
  | "plan_your_trip"
  | "recently_updated";

/** Scroll depth: 50%, 75%, 100%. Fire each once per page (caller tracks). */
export function trackScrollDepth(scrollPercent: number): void {
  sendEvent("scroll_depth", {
    page_location: getPageLocation(),
    scroll_percent: scrollPercent,
  });
}

/** Search overlay: when user performs a search. */
export function trackSearch(searchTerm: string): void {
  sendEvent("search", {
    search_term: searchTerm,
    page_location: getPageLocation(),
  });
}

/** Clicks that leave the site (external links). */
export function trackOutboundClick(linkUrl: string, linkText: string): void {
  sendEvent("outbound_click", {
    link_url: linkUrl,
    link_text: linkText,
    page_location: getPageLocation(),
  });
}

/** Guide page: venue links, related guides, map sections. */
export function trackGuideInteraction(
  guideSlug: string,
  interactionType: "venue_link" | "related_guide" | "map_section"
): void {
  sendEvent("guide_engagement", {
    guide_slug: guideSlug,
    interaction_type: interactionType,
  });
}

/** City page: neighbourhood cards, guide cards, category cards. */
export function trackCityNavigation(citySlug: string, destinationSlug: string): void {
  sendEvent("city_navigation", {
    city_slug: citySlug,
    destination_slug: destinationSlug,
  });
}

/** Venue card or venue link click. */
export function trackVenueView(
  venueSlug: string,
  citySlug: string,
  guideSlug?: string
): void {
  sendEvent("venue_view", {
    venue_slug: venueSlug,
    city_slug: citySlug,
    ...(guideSlug != null && guideSlug !== "" && { guide_slug: guideSlug }),
  });
}

/** Image click in galleries or article content. */
export function trackImageView(imageContext: string): void {
  sendEvent("image_view", {
    image_context: imageContext,
    page_location: getPageLocation(),
  });
}

/** Normalized internal link click tracking for SEO blocks. */
export function trackInternalLinkClick(params: {
  blockType: InternalLinkBlockType;
  sourcePage: string;
  targetPage: string;
  linkTier: InternalLinkTier;
}): void {
  sendEvent("internal_link_click", {
    block_type: params.blockType,
    source_page: params.sourcePage,
    target_page: params.targetPage,
    link_tier: params.linkTier,
  });
}
