import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, MapPin, DollarSign } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorBadge } from "@/components/AuthorBadge";
import { QuickFacts } from "@/components/QuickFacts";
import { ItineraryTimeSlot } from "@/components/ItineraryTimeSlot";
import { TopHighlights } from "@/components/TopHighlights";
import { WhenToVisit } from "@/components/WhenToVisit";
import { GettingAround } from "@/components/GettingAround";
import { BudgetGuide } from "@/components/BudgetGuide";
import { ProTips } from "@/components/ProTips";
import { FAQSection } from "@/components/FAQSection";
import { ExploreMore } from "@/components/ExploreMore";
import { getItineraryBySlug, getItinerariesByCity } from "@/data/itineraries";
import { getCityBySlug } from "@/data/cities";
import { getGuidesByCity } from "@/data/guides";
import { getNeighbourhoodsByCity } from "@/data/neighbourhoods";
import { getTopHighlightsForItinerary, getItineraryNarrative } from "@/lib/content/itineraryContent";
import { getFAQForItinerary } from "@/lib/content/faqContent";
import {
  getWhenToVisitForItinerary,
  getGettingAroundForItinerary,
  getBudgetGuideForItinerary,
  getTravelTipsForItinerary,
  getAuthorPerspective,
} from "@/lib/content/insights";
import { breadcrumbsItinerary } from "@/lib/breadcrumbs";
import { getItineraryPath, getGuidePath, getCityCategoryPath, getCityPath, getNeighbourhoodPath } from "@/lib/canonical";
import { ContentSection } from "@/components/ContentSection";

interface PageProps {
  params: Promise<{ itinerarySlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { itinerarySlug } = await params;
  const itinerary = getItineraryBySlug(itinerarySlug);
  if (!itinerary) return {};
  const city = getCityBySlug(itinerary.citySlug);
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = base + getItineraryPath(itinerarySlug);
  return {
    title: `${itinerary.title} | South Korea Travel`,
    description: itinerary.summary,
    alternates: { canonical },
    openGraph: { title: itinerary.title, description: itinerary.summary },
  };
}

export async function generateStaticParams() {
  const { itineraries: list } = await import("@/data/itineraries");
  return list.map((i) => ({ itinerarySlug: i.slug }));
}

export default async function ItineraryPage({ params }: PageProps) {
  const { itinerarySlug } = await params;
  const itinerary = getItineraryBySlug(itinerarySlug);
  if (!itinerary) notFound();

  const city = getCityBySlug(itinerary.citySlug);

  const factItems = [
    { icon: Calendar, label: "Duration", value: `${itinerary.days} Days` },
    { icon: MapPin, label: "City", value: city?.name ?? itinerary.citySlug },
    { icon: DollarSign, label: "Budget", value: itinerary.budget },
  ];

  const breadcrumbItems = breadcrumbsItinerary(
    city?.name ?? null,
    city?.slug ?? null,
    itinerary.title,
    itinerary.slug
  );

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src={itinerary.image}
          alt={itinerary.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
            {itinerary.days}-Day Itinerary
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-3">
            {itinerary.title}
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 relative z-20">
        <div
          className="grid grid-cols-3 gap-px rounded-xl overflow-hidden bg-border/50"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          {factItems.map((item) => (
            <div key={item.label} className="bg-card px-4 py-4 sm:py-5">
              <div className="flex items-center gap-1.5 mb-1">
                <item.icon className="w-3.5 h-3.5 text-primary" />
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</p>
              </div>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Breadcrumbs items={breadcrumbItems} />
        <AuthorBadge authorSlug={itinerary.authorSlug} updatedDate={itinerary.updatedDate} />
      </div>

      {city && getAuthorPerspective(itinerary.authorSlug, city.name, "itinerary") && (
        <p className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 text-sm text-muted-foreground leading-relaxed">
          {getAuthorPerspective(itinerary.authorSlug, city.name, "itinerary")}
        </p>
      )}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <TopHighlights {...getTopHighlightsForItinerary(itinerary, city ?? null)} />
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-6">{itinerary.intro}</p>
        <div className="mt-10">
          {getItineraryNarrative(itinerary, city ?? null).map((section) => (
            <ContentSection key={section.heading} heading={section.heading} paragraphs={section.paragraphs} />
          ))}
          <WhenToVisit {...getWhenToVisitForItinerary(itinerary, city ?? null)} />
            <GettingAround {...getGettingAroundForItinerary(itinerary, city ?? null)} />
            <BudgetGuide {...getBudgetGuideForItinerary(itinerary, city ?? null)} />
        </div>
      </section>

      {itinerary.dayPlans.map((day) => (
        <section key={day.dayNumber} className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Day {day.dayNumber}: {day.title}
            </h2>
          </div>
          <div className="flex flex-col">
            {day.timeSlots.map((slot, i) => (
              <ItineraryTimeSlot key={i} slot={slot} />
            ))}
          </div>
        </section>
      ))}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
        <ProTips {...getTravelTipsForItinerary(itinerary, city ?? null)} />
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
        <FAQSection items={getFAQForItinerary(itinerary, city ?? null)} />
        <ExploreMore
          links={[
            ...getItinerariesByCity(itinerary.citySlug)
              .filter((i) => i.slug !== itinerary.slug)
              .slice(0, 3)
              .map((i) => ({ label: i.title, href: getItineraryPath(i.slug) })),
            ...getGuidesByCity(itinerary.citySlug).slice(0, 4).map((g) => ({
              label: g.title,
              href: getGuidePath(itinerary.citySlug, g.slug),
            })),
            ...getNeighbourhoodsByCity(itinerary.citySlug).slice(0, 3).map((n) => ({
              label: n.name,
              href: getNeighbourhoodPath(itinerary.citySlug, n.slug),
            })),
            { label: `${city?.name ?? itinerary.citySlug} guide`, href: getCityPath(itinerary.citySlug) },
            { label: "Things to do", href: getCityCategoryPath(itinerary.citySlug, "things-to-do") },
            { label: "Nightlife", href: getCityCategoryPath(itinerary.citySlug, "nightlife") },
          ]}
        />
      </section>
    </div>
  );
}
