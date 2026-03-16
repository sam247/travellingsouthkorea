import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CityCard } from "@/components/CityCard";
import { GuideCard } from "@/components/GuideCard";
import { NeighbourhoodCard } from "@/components/NeighbourhoodCard";
import { VenueListCard } from "@/components/VenueListCard";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { ContentSection } from "@/components/ContentSection";
import { TopHighlights } from "@/components/TopHighlights";
import { LocalInsights } from "@/components/LocalInsights";
import { WhenToVisit } from "@/components/WhenToVisit";
import { GettingAround } from "@/components/GettingAround";
import { BudgetGuide } from "@/components/BudgetGuide";
import { LocalEtiquette } from "@/components/LocalEtiquette";
import { FAQSection } from "@/components/FAQSection";
import { ExploreMore } from "@/components/ExploreMore";
import { breadcrumbsRegion, breadcrumbsCity } from "@/lib/breadcrumbs";
import { getCityContent, getTopHighlightsForCity } from "@/lib/content/cityContent";
import { getFAQForCity } from "@/lib/content/faqContent";
import {
  getLocalInsightsForCity,
  getWhenToVisitForCity,
  getGettingAroundForCity,
  getBudgetGuideForCity,
  getLocalEtiquetteForCity,
} from "@/lib/content/insights";
import { getCityCategoryPath, getMapPath, getNeighbourhoodPath, getGuidePath, getItineraryPath } from "@/lib/canonical";
import { getCitiesByRegion } from "@/data/cities";
import { getGuidesByCity } from "@/data/guides";
import { getNeighbourhoodsByCity } from "@/data/neighbourhoods";
import { getVenuesByCity } from "@/data/venues";
import { getItinerariesByCity } from "@/data/itineraries";
import type { City } from "@/types";
import type { Region } from "@/types";

const actionCards = [
  { label: "Things To Do", category: "things-to-do", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80" },
  { label: "Nightlife", category: "nightlife", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=80" },
  { label: "Restaurants", category: "food", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&q=80" },
  { label: "Cafes", category: "food", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" },
  { label: "Where To Stay", category: "travel-tips", image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&q=80" },
  { label: "Travel Tips", category: "travel-tips", image: "https://images.unsplash.com/photo-1600002415506-dd06090d3480?w=400&q=80" },
];

export function RegionOrCityPage({
  type,
  city,
  region,
}: {
  type: "city";
  city: City;
  region?: never;
} | {
  type: "region";
  region: Region;
  city?: never;
}) {
  if (type === "region" && region) {
    const regionCities = getCitiesByRegion(region.slug);
    const guidesToShow = regionCities.flatMap((c) => getGuidesByCity(c.slug));

    return (
      <div className="min-h-screen bg-background">
        <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
          <Image
            src={region.image}
            alt={region.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
            <h1 className="text-3xl sm:text-5xl font-bold text-white">
              {region.name}
            </h1>
            <p className="mt-2 text-base sm:text-lg text-white/80 max-w-xl font-editorial">
              Province of South Korea
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
          <Breadcrumbs items={breadcrumbsRegion(region.name, region.slug)} />
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mt-6">
            {region.description}
          </p>
        </section>

        {regionCities.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Cities in {region.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {regionCities.map((c) => (
                <CityCard key={c.slug} city={c} />
              ))}
            </div>
          </section>
        )}

        {guidesToShow.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {guidesToShow.slice(0, 9).map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }

  if (type === "city" && city) {
    const cityGuides = getGuidesByCity(city.slug);
    const cityNeighbourhoods = getNeighbourhoodsByCity(city.slug);
    const cityVenues = getVenuesByCity(city.slug).slice(0, 6);
    const popularNeighbourhoods = cityNeighbourhoods.slice(0, 6);

    return (
      <div className="min-h-screen bg-background">
        <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
          <Image
            src={city.image}
            alt={city.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
            <h1 className="text-3xl sm:text-5xl font-bold text-white">
              {city.name} Travel Guide
            </h1>
            <p className="mt-2 text-base sm:text-lg text-white/80 max-w-xl font-editorial">
              {city.tagline}
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
          <Breadcrumbs items={breadcrumbsCity(city.name, city.slug)} />
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mt-6">
            {city.description}
          </p>
          <div className="max-w-7xl mt-10">
            <TopHighlights {...getTopHighlightsForCity(city, cityNeighbourhoods)} />
            {getCityContent(city, cityNeighbourhoods).map((section) => (
              <ContentSection
                key={section.heading}
                heading={section.heading}
                paragraphs={section.paragraphs}
              />
            ))}
            <LocalInsights {...getLocalInsightsForCity(city, cityNeighbourhoods)} />
            <WhenToVisit {...getWhenToVisitForCity(city)} />
            <GettingAround {...getGettingAroundForCity(city)} />
            <BudgetGuide {...getBudgetGuideForCity(city)} />
            <LocalEtiquette {...getLocalEtiquetteForCity(city)} />
          </div>
        </section>

        {popularNeighbourhoods.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Popular Neighbourhoods in {city.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {popularNeighbourhoods.map((n) => (
                <NeighbourhoodCard key={n.slug} neighbourhood={n} />
              ))}
            </div>
          </section>
        )}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Explore {city.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {actionCards.map((card) => (
              <Link
                key={card.label}
                href={getCityCategoryPath(city.slug, card.category)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {card.label}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {cityNeighbourhoods.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Neighbourhoods
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cityNeighbourhoods.map((n) => (
                <NeighbourhoodCard key={n.slug} neighbourhood={n} />
              ))}
            </div>
          </section>
        )}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            Explore {city.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Bars", slug: "bars" },
              { label: "Restaurants", slug: "restaurants" },
              { label: "Cafes", slug: "cafes" },
              { label: "Things to do", slug: "things-to-do" },
              { label: "Itineraries", slug: "itineraries" },
              { label: "Travel tips", slug: "travel-tips" },
              { label: "Neighbourhoods", slug: "neighbourhoods" },
            ].map(({ label, slug }) => (
              <Link
                key={slug}
                href={getCityCategoryPath(city.slug, slug)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        {cityGuides.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Featured Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cityGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
        )}

        {cityVenues.length > 0 ? (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Popular Venues
            </h2>
            <div className="flex flex-col gap-3">
              {cityVenues.map((v) => (
                <VenueListCard key={v.slug} venue={v} />
              ))}
            </div>
          </section>
        ) : (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Popular Venues
            </h2>
            <p className="text-muted-foreground">
              More recommendations coming soon.
            </p>
          </section>
        )}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
          <FAQSection items={getFAQForCity(city)} />
          <ExploreMore
            links={[
              ...cityNeighbourhoods.slice(0, 4).map((n) => ({
                label: n.name,
                href: getNeighbourhoodPath(city.slug, n.slug),
              })),
              ...cityGuides.slice(0, 4).map((g) => ({
                label: g.title,
                href: getGuidePath(city.slug, g.slug),
              })),
              ...getItinerariesByCity(city.slug).slice(0, 3).map((i) => ({
                label: i.title,
                href: getItineraryPath(i.slug),
              })),
              { label: "Things to do", href: getCityCategoryPath(city.slug, "things-to-do") },
              { label: "Nightlife", href: getCityCategoryPath(city.slug, "nightlife") },
              { label: "Restaurants", href: getCityCategoryPath(city.slug, "restaurants") },
            ]}
          />
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Map
          </h2>
          <MapPlaceholder label={`Explore ${city.name}`} />
          <div className="mt-3 text-center">
            <Link
              href={getMapPath(`${city.slug}-all`)}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Open full map →
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return null;
}
