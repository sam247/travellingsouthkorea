import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin, DollarSign, Train, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorBadge } from "@/components/AuthorBadge";
import { QuickFacts } from "@/components/QuickFacts";
import { VenueCard } from "@/components/VenueCard";
import { GuideCard } from "@/components/GuideCard";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { ContentSection } from "@/components/ContentSection";
import { TopHighlights } from "@/components/TopHighlights";
import { LocalInsights } from "@/components/LocalInsights";
import { BudgetGuide } from "@/components/BudgetGuide";
import { LocalEtiquette } from "@/components/LocalEtiquette";
import { ProTips } from "@/components/ProTips";
import { FAQSection } from "@/components/FAQSection";
import { ExploreMore } from "@/components/ExploreMore";
import { getGuideBySlug, getGuidesByNeighbourhood, getGuidesByCity } from "@/data/guides";
import { getGuideContent, getTopHighlightsForGuide } from "@/lib/content/guideContent";
import { getFAQForGuide } from "@/lib/content/faqContent";
import {
  getLocalInsightsForGuide,
  getBudgetGuideForGuide,
  getLocalEtiquetteForGuide,
  getTravelTipsForGuide,
  getAuthorPerspective,
} from "@/lib/content/insights";
import { getCityBySlug } from "@/data/cities";
import { guides } from "@/data/guides";
import { breadcrumbsGuide, breadcrumbsCityGuide } from "@/lib/breadcrumbs";
import { getGuidePath, getNeighbourhoodPath, getCityCategoryPath, getCityPath } from "@/lib/canonical";
import {
  getProgrammaticGuideSpec,
  buildProgrammaticGuide,
  getProgrammaticGuideSpecs,
} from "@/lib/programmaticGuides";

interface PageProps {
  params: Promise<{ slug: string; guideSlug: string }>;
}

function resolveGuide(citySlug: string, guideSlug: string) {
  const staticGuide = getGuideBySlug(guideSlug);
  if (staticGuide && staticGuide.city === citySlug) return staticGuide;
  const spec = getProgrammaticGuideSpec(citySlug, guideSlug);
  if (spec) return buildProgrammaticGuide(spec);
  return null;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug: citySlug, guideSlug } = await params;
  const guide = resolveGuide(citySlug, guideSlug);
  const city = getCityBySlug(citySlug);
  if (!guide || !city) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = base + getGuidePath(citySlug, guideSlug);
  return {
    title: `${guide.title} | ${city.name} | South Korea Travel`,
    description: guide.summary,
    alternates: { canonical },
    openGraph: { title: guide.title, description: guide.summary },
  };
}

export async function generateStaticParams() {
  const { guides: gs } = await import("@/data/guides");
  const programmatic = getProgrammaticGuideSpecs();
  const staticParams = gs.map((g) => ({ slug: g.city, guideSlug: g.slug }));
  const programmaticParams = programmatic.map((s) => ({
    slug: s.citySlug,
    guideSlug: s.guideSlug,
  }));
  const seen = new Set(staticParams.map((p) => `${p.slug}:${p.guideSlug}`));
  for (const p of programmaticParams) {
    if (!seen.has(`${p.slug}:${p.guideSlug}`)) {
      seen.add(`${p.slug}:${p.guideSlug}`);
      staticParams.push(p);
    }
  }
  return staticParams;
}

export default async function GuidePage({ params }: PageProps) {
  const { slug: citySlug, guideSlug } = await params;
  const guide = resolveGuide(citySlug, guideSlug);
  const city = getCityBySlug(citySlug);

  if (!guide || !city) {
    notFound();
  }

  const isCityLevel = !guide.neighbourhoodSlug || guide.neighbourhoodSlug === "";
  const relatedGuides = guide.relatedSlugs
    .map((s) => guides.find((g) => g.slug === s))
    .filter(Boolean) as typeof guides;
  const nearbyGuides = isCityLevel
    ? getGuidesByCity(citySlug).filter((g) => g.slug !== guide.slug).slice(0, 4)
    : getGuidesByNeighbourhood(guide.neighbourhoodSlug)
        .filter((g) => g.slug !== guide.slug)
        .slice(0, 4);

  const factItems = isCityLevel
    ? [
        { icon: MapPin, label: "City", value: city.name },
        { icon: DollarSign, label: "Category", value: guide.tags[0] ?? guide.category },
        { icon: Train, label: "Area", value: "Various" },
        { icon: Clock, label: "Hours", value: guide.openingHours },
      ]
    : [
        { icon: MapPin, label: "Neighbourhood", value: guide.neighbourhood },
        { icon: DollarSign, label: "Price Range", value: guide.priceRange },
        { icon: Train, label: "Nearest Metro", value: guide.nearestMetro },
        { icon: Clock, label: "Opening Hours", value: guide.openingHours },
      ];

  const breadcrumbItems = isCityLevel
    ? breadcrumbsCityGuide(city.name, city.slug, guide.title)
    : breadcrumbsGuide(
        city.name,
        city.slug,
        guide.neighbourhood,
        guide.neighbourhoodSlug,
        guide.title,
        guide.slug
      );

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src={guide.image}
          alt={guide.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
          <div className="flex items-center gap-2 mb-3">
            {guide.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            {guide.title}
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 relative z-20">
        <QuickFacts items={factItems} />
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Breadcrumbs items={breadcrumbItems} />
        <AuthorBadge authorSlug={guide.authorSlug} updatedDate={guide.updatedDate} />
      </div>

      {getAuthorPerspective(guide.authorSlug, guide.neighbourhood || city.name, "guide") && (
        <p className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 text-sm text-muted-foreground leading-relaxed">
          {getAuthorPerspective(guide.authorSlug, guide.neighbourhood || city.name, "guide")}
        </p>
      )}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <TopHighlights {...getTopHighlightsForGuide(guide, city)} />
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-6">
          {guide.intro}
        </p>
        <div className="mt-10">
          {getGuideContent(guide, city).map((section) => (
            <ContentSection
              key={section.heading}
              heading={section.heading}
              paragraphs={section.paragraphs}
            />
          ))}
          <LocalInsights {...getLocalInsightsForGuide(guide, city)} />
          <BudgetGuide {...getBudgetGuideForGuide(guide, city)} />
          <LocalEtiquette {...getLocalEtiquetteForGuide(guide, city)} />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
        <MapPlaceholder
          label={`Map showing ${guide.venues.length} locations`}
          venueMarkers={guide.venues
            .filter((v): v is typeof v & { lat: number; lng: number } => v.lat != null && v.lng != null)
            .map((v) => ({ name: v.name, lat: v.lat, lng: v.lng, category: guide.category }))}
        />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          The Spots
        </h2>
        <div className="flex flex-col gap-4">
          {guide.venues.map((venue) => (
            <VenueCard key={venue.name} venue={venue} />
          ))}
        </div>
      </section>

      {relatedGuides.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {relatedGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      )}

      {nearbyGuides.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            More in {guide.neighbourhood}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {nearbyGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
        <ProTips {...getTravelTipsForGuide(guide, city)} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
        <FAQSection items={getFAQForGuide(guide, city)} />
        <ExploreMore
          links={[
            ...relatedGuides.slice(0, 3).map((g) => ({
              label: g.title,
              href: getGuidePath(citySlug, g.slug),
            })),
            ...nearbyGuides.slice(0, 3).map((g) => ({
              label: g.title,
              href: getGuidePath(citySlug, g.slug),
            })),
            ...(guide.neighbourhoodSlug
              ? [{ label: guide.neighbourhood, href: getNeighbourhoodPath(citySlug, guide.neighbourhoodSlug) }]
              : []),
            { label: "Things to do", href: getCityCategoryPath(citySlug, "things-to-do") },
            { label: "Nightlife", href: getCityCategoryPath(citySlug, "nightlife") },
            { label: `${city.name} guide`, href: getCityPath(citySlug) },
          ]}
        />
      </section>
    </div>
  );
}
