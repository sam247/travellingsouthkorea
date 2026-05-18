import { notFound } from "next/navigation";
import { MapPin, DollarSign, Train, Clock } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";
import { getGuideImagePath } from "@/lib/imagePaths";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorBadge } from "@/components/AuthorBadge";
import { QuickFacts } from "@/components/QuickFacts";
import { VenueCard } from "@/components/VenueCard";
import { GuideCard } from "@/components/GuideCard";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { TrackableMapSection } from "@/components/analytics/TrackableMapSection";
import { TrackableImageWrapper } from "@/components/analytics/TrackableImageWrapper";
import { ContentSection } from "@/components/ContentSection";
import { TopHighlights } from "@/components/TopHighlights";
import { LocalInsights } from "@/components/LocalInsights";
import { BudgetGuide } from "@/components/BudgetGuide";
import { LocalEtiquette } from "@/components/LocalEtiquette";
import { ProTips } from "@/components/ProTips";
import { FAQSection } from "@/components/FAQSection";
import { ExploreMore } from "@/components/ExploreMore";
import { getGuideBySlug, getGuidesByNeighbourhood, getGuidesByCity } from "@/data/guides";
import { getTopHighlightsForGuide } from "@/lib/content/guideContent";
import {
  getGuideContentSections,
  getLocalInsightsForGuideResolved,
  getBudgetGuideForGuideResolved,
  getLocalEtiquetteForGuideResolved,
} from "@/lib/content/guideNarrative";
import { getFAQForGuide } from "@/lib/content/faqContent";
import { getTravelTipsForGuide, getAuthorPerspective } from "@/lib/content/insights";
import { getCityBySlug } from "@/data/cities";
import { guides } from "@/data/guides";
import { breadcrumbsGuide, breadcrumbsCityGuide } from "@/lib/breadcrumbs";
import {
  getGuidePath,
  getNeighbourhoodPath,
  getCityCategoryPath,
  getCityPath,
  getTravelTipPath,
} from "@/lib/canonical";
import {
  getProgrammaticGuideSpec,
  buildProgrammaticGuide,
  getProgrammaticGuideSpecs,
} from "@/lib/programmaticGuides";
import {
  buildGuideIntentSections,
  buildGuideSeoTitle,
  buildSeoulScopedLinksForGuide,
  isSeoRefactorEnabledForPath,
  recentlyUpdatedSeoulLinks,
} from "@/lib/seo/refactor";

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
  const scopedPath = getGuidePath(citySlug, guideSlug);
  const seoEnabled = isSeoRefactorEnabledForPath(scopedPath, citySlug, "guides");
  const titleCandidate = seoEnabled
    ? buildGuideSeoTitle(guide, city.name).title
    : `${guide.title} | ${city.name} | South Korea Travel`;
  return {
    title: titleCandidate,
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
  const scopedPath = getGuidePath(citySlug, guideSlug);
  const seoEnabled = isSeoRefactorEnabledForPath(scopedPath, citySlug, "guides");

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
  const seoIntentSections = seoEnabled
    ? buildGuideIntentSections(guide, city.name)
    : [];
  const seoLinks = seoEnabled
    ? buildSeoulScopedLinksForGuide(guide)
    : null;
  const recentlyUpdated = seoEnabled ? recentlyUpdatedSeoulLinks(8) : [];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <SafeImage
          src={guide.image}
          alt={guide.title}
          fill
          className="object-cover"
          priority
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
        {seoEnabled && seoLinks && (
          <div className="mt-8">
            <ExploreMore
              heading="You might also like"
              trackBlockType="you_might_also_like"
              links={seoLinks.relatedBlocks.youMightAlsoLike.map((l) => ({
                label: l.label,
                href: l.href,
                tier: l.tier,
              }))}
            />
          </div>
        )}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <TrackableImageWrapper imageContext={`guide-${guideSlug}-supporting-1`}>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary/50">
              <SafeImage
                src={getGuideImagePath(guideSlug, "1")}
                alt={`${guide.title} — supporting`}
                fill
                className="object-cover"
              />
            </div>
          </TrackableImageWrapper>
          <TrackableImageWrapper imageContext={`guide-${guideSlug}-supporting-2`}>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary/50">
              <SafeImage
                src={getGuideImagePath(guideSlug, "2")}
                alt={`${guide.title} — supporting`}
                fill
                className="object-cover"
              />
            </div>
          </TrackableImageWrapper>
        </div>
        <div className="mt-10">
          {getGuideContentSections(guide, city).map((section) => (
            <ContentSection
              key={section.heading}
              heading={section.heading}
              paragraphs={section.paragraphs}
            />
          ))}
          <LocalInsights {...getLocalInsightsForGuideResolved(guide, city)} />
          <BudgetGuide {...getBudgetGuideForGuideResolved(guide, city)} />
          <LocalEtiquette {...getLocalEtiquetteForGuideResolved(guide, city)} />
          {seoIntentSections.map((section) => (
            <ContentSection
              key={section.heading}
              heading={section.heading}
              paragraphs={section.paragraphs}
            />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
        <TrackableMapSection guideSlug={guideSlug}>
          <MapPlaceholder
            label={`Map showing ${guide.venues.length} locations`}
            venueMarkers={guide.venues
              .filter((v): v is typeof v & { lat: number; lng: number } => v.lat != null && v.lng != null)
              .map((v) => ({ name: v.name, lat: v.lat, lng: v.lng, category: guide.category }))}
          />
        </TrackableMapSection>
      </section>
      {seoEnabled && seoLinks && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
          <ExploreMore
            heading="Nearby things to do"
            trackBlockType="nearby_things"
            links={seoLinks.relatedBlocks.nearbyThings.map((l) => ({
              label: l.label,
              href: l.href,
              tier: l.tier,
            }))}
          />
        </section>
      )}

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
              <GuideCard
                key={g.slug}
                guide={g}
                analyticsContext={{ type: "guide", guideSlug }}
              />
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
              <GuideCard
                key={g.slug}
                guide={g}
                analyticsContext={{ type: "guide", guideSlug }}
              />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
        <ProTips {...getTravelTipsForGuide(guide, city)} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
        <FAQSection items={getFAQForGuide(guide, city)} />
        {seoEnabled && seoLinks ? (
          <ExploreMore
            heading="Plan your trip"
            trackBlockType="plan_your_trip"
            links={seoLinks.relatedBlocks.planYourTrip.map((l) => ({
              label: l.label,
              href: l.href,
              tier: l.tier,
            }))}
          />
        ) : (
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
              ...(citySlug === "jeju"
                ? [{ label: "Jeju Loveland", href: getTravelTipPath("jeju-loveland") }]
                : []),
              ...(citySlug === "seoul"
                ? [
                    {
                      label: "Seoul subway cheat sheet",
                      href: getTravelTipPath("seoul-subway-cheat-sheet"),
                    },
                  ]
                : []),
              { label: "Things to do", href: getCityCategoryPath(citySlug, "things-to-do") },
              { label: "Nightlife", href: getCityCategoryPath(citySlug, "nightlife") },
              { label: `${city.name} guide`, href: getCityPath(citySlug) },
            ]}
          />
        )}
      </section>

      {seoEnabled && recentlyUpdated.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
          <ExploreMore
            heading="Recently updated"
            trackBlockType="recently_updated"
            links={recentlyUpdated.map((l) => ({
              label: l.label,
              href: l.href,
              tier: l.tier,
            }))}
          />
        </section>
      )}
    </div>
  );
}
