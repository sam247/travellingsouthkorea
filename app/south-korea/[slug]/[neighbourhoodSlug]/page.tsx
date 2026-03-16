import { notFound } from "next/navigation";
import { SafeImage } from "@/components/SafeImage";
import { MapPin, Zap, Star, DollarSign } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuickFacts } from "@/components/QuickFacts";
import { GuideCard } from "@/components/GuideCard";
import { VenueListCard } from "@/components/VenueListCard";
import { NeighbourhoodCard } from "@/components/NeighbourhoodCard";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { ContentSection } from "@/components/ContentSection";
import { TopHighlights } from "@/components/TopHighlights";
import { LocalInsights } from "@/components/LocalInsights";
import { WhenToVisit } from "@/components/WhenToVisit";
import { ProTips } from "@/components/ProTips";
import { FAQSection } from "@/components/FAQSection";
import { ExploreMore } from "@/components/ExploreMore";
import { getNeighbourhoodBySlug, getNeighbourhoodsByCity } from "@/data/neighbourhoods";
import { getNeighbourhoodContent, getTopHighlightsForNeighbourhood } from "@/lib/content/neighbourhoodContent";
import { getFAQForNeighbourhood } from "@/lib/content/faqContent";
import {
  getLocalInsightsForNeighbourhood,
  getWhenToVisitForNeighbourhood,
  getTravelTipsForNeighbourhood,
} from "@/lib/content/insights";
import { getGuidesByNeighbourhood } from "@/data/guides";
import { getVenuesByNeighbourhood } from "@/data/venues";
import { getCityBySlug } from "@/data/cities";
import Link from "next/link";
import { breadcrumbsNeighbourhood } from "@/lib/breadcrumbs";
import { getNeighbourhoodPath, getNeighbourhoodCategoryPath, getGuidePath, getCityCategoryPath, getCityPath } from "@/lib/canonical";

interface PageProps {
  params: Promise<{ slug: string; neighbourhoodSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug: citySlug, neighbourhoodSlug } = await params;
  const neighbourhood = getNeighbourhoodBySlug(neighbourhoodSlug);
  const city = getCityBySlug(citySlug);
  if (!neighbourhood || !city || neighbourhood.citySlug !== citySlug) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = base + getNeighbourhoodPath(citySlug, neighbourhoodSlug);
  return {
    title: `${neighbourhood.name} | ${city.name} | South Korea Travel`,
    description: neighbourhood.intro.slice(0, 160),
    alternates: { canonical },
    openGraph: { title: neighbourhood.name, description: neighbourhood.vibe },
  };
}

export async function generateStaticParams() {
  const { cities } = await import("@/data/cities");
  const { getNeighbourhoodsByCity } = await import("@/data/neighbourhoods");
  const params: { slug: string; neighbourhoodSlug: string }[] = [];
  for (const city of cities) {
    const cityNeighbourhoods = getNeighbourhoodsByCity(city.slug);
    for (const n of cityNeighbourhoods) {
      params.push({ slug: city.slug, neighbourhoodSlug: n.slug });
    }
  }
  return params;
}

export default async function NeighbourhoodPage({ params }: PageProps) {
  const { slug: citySlug, neighbourhoodSlug } = await params;
  const neighbourhood = getNeighbourhoodBySlug(neighbourhoodSlug);
  const city = getCityBySlug(citySlug);

  if (!neighbourhood || !city || neighbourhood.citySlug !== citySlug) {
    notFound();
  }

  const nhGuides = getGuidesByNeighbourhood(neighbourhood.slug);
  const nhVenues = getVenuesByNeighbourhood(neighbourhood.slug);
  const relatedNeighbourhoods = getNeighbourhoodsByCity(city.slug).filter(
    (n) => n.slug !== neighbourhood.slug
  );

  const guidesByCategory = {
    "Things To Do": nhGuides.filter((g) => g.category === "things-to-do"),
    Restaurants: nhGuides.filter((g) => g.category === "food"),
    Bars: nhGuides.filter((g) => g.category === "nightlife"),
    Cafes: nhGuides.filter((g) =>
      g.tags.some(
        (t) =>
          t.toLowerCase().includes("coffee") || t.toLowerCase().includes("cafe")
      )
    ),
  };

  const barVenues = nhVenues.filter((v) => v.category === "bar" || v.category === "club");
  const cafeVenues = nhVenues.filter((v) => v.category === "cafe");
  const restaurantVenues = nhVenues.filter((v) => v.category === "restaurant");
  const attractionVenues = nhVenues.filter((v) => v.category === "attraction");

  const factItems = [
    { icon: MapPin, label: "Nearest Metro", value: neighbourhood.nearestMetro },
    { icon: Zap, label: "Vibe", value: neighbourhood.vibe },
    {
      icon: Star,
      label: "Best For",
      value: neighbourhood.bestFor.slice(0, 2).join(", "),
    },
    { icon: DollarSign, label: "Price Range", value: neighbourhood.priceRange },
  ];

  const breadcrumbItems = breadcrumbsNeighbourhood(
    city.name,
    city.slug,
    neighbourhood.name,
    neighbourhood.slug
  );

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <SafeImage
          src={neighbourhood.image}
          alt={neighbourhood.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            {neighbourhood.name}
          </h1>
          <p className="mt-2 text-base sm:text-lg text-white/80 font-editorial">
            {city.name}, South Korea
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 relative z-20">
        <QuickFacts items={factItems} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <Breadcrumbs items={breadcrumbItems} />
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-6">
          {neighbourhood.intro}
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {[
            { label: "Bars", slug: "bars" },
            { label: "Restaurants", slug: "restaurants" },
            { label: "Cafes", slug: "cafes" },
            { label: "Things to do", slug: "things-to-do" },
          ].map(({ label, slug }) => (
            <Link
              key={slug}
              href={getNeighbourhoodCategoryPath(city.slug, neighbourhood.slug, slug)}
              className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <TopHighlights {...getTopHighlightsForNeighbourhood(neighbourhood, city)} />
          {getNeighbourhoodContent(neighbourhood, city).map((section) => (
            <ContentSection
              key={section.heading}
              heading={section.heading}
              paragraphs={section.paragraphs}
            />
          ))}
          <LocalInsights {...getLocalInsightsForNeighbourhood(neighbourhood, city)} />
          <WhenToVisit {...getWhenToVisitForNeighbourhood(neighbourhood, city)} />
        </div>
      </section>

      {Object.entries(guidesByCategory).map(
        ([title, categoryGuides]) =>
          categoryGuides.length > 0 && (
            <section
              key={title}
              className="max-w-4xl mx-auto px-4 sm:px-6 py-8"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                {title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {categoryGuides.map((g) => (
                  <GuideCard key={g.slug} guide={g} />
                ))}
              </div>
            </section>
          )
      )}

      {barVenues.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Bars & Clubs
          </h2>
          <div className="flex flex-col gap-3">
            {barVenues.map((v) => (
              <VenueListCard key={v.slug} venue={v} />
            ))}
          </div>
        </section>
      )}

      {restaurantVenues.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Restaurants
          </h2>
          <div className="flex flex-col gap-3">
            {restaurantVenues.map((v) => (
              <VenueListCard key={v.slug} venue={v} />
            ))}
          </div>
        </section>
      )}

      {cafeVenues.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Cafes
          </h2>
          <div className="flex flex-col gap-3">
            {cafeVenues.map((v) => (
              <VenueListCard key={v.slug} venue={v} />
            ))}
          </div>
        </section>
      )}

      {attractionVenues.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Things To Do
          </h2>
          <div className="flex flex-col gap-3">
            {attractionVenues.map((v) => (
              <VenueListCard key={v.slug} venue={v} />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <ProTips {...getTravelTipsForNeighbourhood(neighbourhood, city)} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          Map
        </h2>
        <MapPlaceholder
          label={`${nhVenues.length} venues in ${neighbourhood.name}`}
        />
      </section>

      {relatedNeighbourhoods.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            More {city.name} Neighbourhoods
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3">
            {relatedNeighbourhoods.map((n) => (
              <div key={n.slug} className="flex-shrink-0 w-64 sm:w-auto">
                <NeighbourhoodCard neighbourhood={n} />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
        <FAQSection items={getFAQForNeighbourhood(neighbourhood, city)} />
        <ExploreMore
          links={[
            ...relatedNeighbourhoods.slice(0, 4).map((n) => ({
              label: n.name,
              href: getNeighbourhoodPath(city.slug, n.slug),
            })),
            ...nhGuides.slice(0, 4).map((g) => ({
              label: g.title,
              href: getGuidePath(city.slug, g.slug),
            })),
            { label: "Things to do", href: getCityCategoryPath(city.slug, "things-to-do") },
            { label: "Nightlife", href: getCityCategoryPath(city.slug, "nightlife") },
            { label: `${city.name} guide`, href: getCityPath(city.slug) },
          ].filter((l) => l.href)}
        />
      </section>
    </div>
  );
}
