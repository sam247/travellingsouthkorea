import {
  getCountryPath,
  getRegionPath,
  getCityPath,
  getNeighbourhoodPath,
  getCityCategoryPath,
  getGuidePath,
  getVenuePath,
  getItineraryPath,
  getTravelTipPath,
  getAuthorPath,
  getMapPath,
  getCategoryPath,
  getLocationPath,
} from "@/lib/canonical";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function breadcrumbsCountry(): BreadcrumbItem[] {
  return [{ label: "Home", href: "/" }, { label: "South Korea" }];
}

export function breadcrumbsRegion(regionName: string, regionSlug: string): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label: "South Korea", href: getCountryPath() },
    { label: regionName },
  ];
}

export function breadcrumbsCity(cityName: string, citySlug: string): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label: "South Korea", href: getCountryPath() },
    { label: cityName },
  ];
}

export function breadcrumbsNeighbourhood(
  cityName: string,
  citySlug: string,
  neighbourhoodName: string,
  neighbourhoodSlug: string
): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label: "South Korea", href: getCountryPath() },
    { label: cityName, href: getCityPath(citySlug) },
    { label: neighbourhoodName },
  ];
}

export function breadcrumbsCityCategory(
  cityName: string,
  citySlug: string,
  categoryLabel: string,
  categorySlug: string
): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label: "South Korea", href: getCountryPath() },
    { label: cityName, href: getCityPath(citySlug) },
    { label: categoryLabel },
  ];
}

export function breadcrumbsNeighbourhoodCategory(
  cityName: string,
  citySlug: string,
  neighbourhoodName: string,
  neighbourhoodSlug: string,
  categoryLabel: string
): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label: "South Korea", href: getCountryPath() },
    { label: cityName, href: getCityPath(citySlug) },
    { label: neighbourhoodName, href: getNeighbourhoodPath(citySlug, neighbourhoodSlug) },
    { label: categoryLabel },
  ];
}

export function breadcrumbsCityGuide(
  cityName: string,
  citySlug: string,
  guideTitle: string
): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label: "South Korea", href: getCountryPath() },
    { label: cityName, href: getCityPath(citySlug) },
    { label: guideTitle },
  ];
}

export function breadcrumbsGuide(
  cityName: string,
  citySlug: string,
  neighbourhoodName: string,
  neighbourhoodSlug: string,
  guideTitle: string,
  guideSlug: string
): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label: "South Korea", href: getCountryPath() },
    { label: cityName, href: getCityPath(citySlug) },
    { label: neighbourhoodName, href: getNeighbourhoodPath(citySlug, neighbourhoodSlug) },
    { label: guideTitle },
  ];
}

export function breadcrumbsVenue(
  cityName: string,
  citySlug: string,
  neighbourhoodName: string | null,
  neighbourhoodSlug: string | null,
  venueName: string,
  venueSlug: string
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "South Korea", href: getCountryPath() },
    { label: cityName, href: getCityPath(citySlug) },
  ];
  if (neighbourhoodName && neighbourhoodSlug) {
    items.push({
      label: neighbourhoodName,
      href: getNeighbourhoodPath(citySlug, neighbourhoodSlug),
    });
  }
  items.push({ label: venueName });
  return items;
}

export function breadcrumbsItinerary(
  cityName: string | null,
  citySlug: string | null,
  itineraryTitle: string,
  itinerarySlug: string
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ label: "Home", href: "/" }];
  if (cityName && citySlug) {
    items.push({ label: "South Korea", href: getCountryPath() });
    items.push({ label: cityName, href: getCityPath(citySlug) });
  }
  items.push({ label: itineraryTitle });
  return items;
}

export function breadcrumbsTravelTip(
  tipTitle: string,
  tipSlug: string
): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label: "Travel Tips", href: getCategoryPath("travel-tips") },
    { label: tipTitle },
  ];
}

export function breadcrumbsAuthor(authorName: string): BreadcrumbItem[] {
  return [{ label: "Home", href: "/" }, { label: authorName }];
}

export function breadcrumbsMap(cityName: string | null, citySlug: string | null): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ label: "Home", href: "/" }];
  if (cityName && citySlug) {
    items.push({ label: cityName, href: getCityPath(citySlug) });
  }
  items.push({ label: "Map" });
  return items;
}

export function breadcrumbsGlobalCategory(categoryLabel: string): BreadcrumbItem[] {
  return [{ label: "Home", href: "/" }, { label: categoryLabel }];
}

export function breadcrumbsLocation(locationName: string): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label: "South Korea", href: getCountryPath() },
    { label: locationName },
  ];
}
