import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin, Train, DollarSign, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuickFacts } from "@/components/QuickFacts";
import { VenueListCard } from "@/components/VenueListCard";
import { GuideCard } from "@/components/GuideCard";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { getVenueBySlug, getNearbyVenues } from "@/data/venues";
import { getCityBySlug } from "@/data/cities";
import { getNeighbourhoodBySlug } from "@/data/neighbourhoods";
import { guides } from "@/data/guides";
import { breadcrumbsVenue } from "@/lib/breadcrumbs";
import { getVenuePath } from "@/lib/canonical";

interface PageProps {
  params: Promise<{ slug: string; venueSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug: citySlug, venueSlug } = await params;
  const venue = getVenueBySlug(venueSlug);
  const city = getCityBySlug(citySlug);
  if (!venue || !city || venue.citySlug !== citySlug) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = base + getVenuePath(citySlug, venueSlug);
  return {
    title: `${venue.name} | ${city.name} | South Korea Travel`,
    description: venue.description,
    alternates: { canonical },
    openGraph: { title: venue.name, description: venue.description },
  };
}

export async function generateStaticParams() {
  const { venues: vs } = await import("@/data/venues");
  return vs.map((v) => ({ slug: v.citySlug, venueSlug: v.slug }));
}

export default async function VenuePage({ params }: PageProps) {
  const { slug: citySlug, venueSlug } = await params;
  const venue = getVenueBySlug(venueSlug);
  const city = getCityBySlug(citySlug);

  if (!venue || !city || venue.citySlug !== citySlug) {
    notFound();
  }

  const neighbourhood =
    venue.neighbourhoodSlug != null
      ? getNeighbourhoodBySlug(venue.neighbourhoodSlug)
      : null;
  const nearby = getNearbyVenues(venue.slug);
  const relatedGuides = guides
    .filter((g) => g.neighbourhoodSlug === venue.neighbourhoodSlug)
    .slice(0, 4);

  const factItems = [
    venue.address != null && { icon: MapPin, label: "Address", value: venue.address },
    venue.nearestMetro != null && { icon: Train, label: "Nearest Metro", value: venue.nearestMetro },
    venue.priceLevel != null && { icon: DollarSign, label: "Price", value: venue.priceLevel },
    venue.openingHours != null && { icon: Clock, label: "Hours", value: venue.openingHours },
  ].filter(Boolean) as { icon: typeof MapPin; label: string; value: string }[];

  const breadcrumbItems = breadcrumbsVenue(
    city.name,
    citySlug,
    neighbourhood?.name ?? null,
    neighbourhood?.slug ?? null,
    venue.name,
    venue.slug
  );

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm capitalize">
            {venue.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-3">
            {venue.name}
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 relative z-20">
        <QuickFacts items={factItems} />
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {venue.overview != null && venue.overview !== "" && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Overview</h2>
          <p className="text-base text-muted-foreground leading-relaxed">{venue.overview}</p>
        </section>
      )}

      {venue.whyVisit != null && venue.whyVisit !== "" && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
          <div className="px-5 py-5 rounded-xl bg-primary/5 border border-primary/10">
            <h3 className="text-sm font-semibold text-primary mb-2">Why Visit</h3>
            <p className="text-sm text-foreground leading-relaxed font-editorial">{venue.whyVisit}</p>
          </div>
        </section>
      )}

      {venue.tips != null && venue.tips.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Tips For Visiting</h2>
          <div className="bg-card rounded-xl p-5" style={{ boxShadow: "var(--shadow-card)" }}>
            <ul className="space-y-3">
              {venue.tips.map((tip, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-primary font-bold">·</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
        <MapPlaceholder label={venue.address ?? venue.name} />
      </section>

      {nearby.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Nearby Venues</h2>
          <div className="flex flex-col gap-3">
            {nearby.map((v) => (
              <VenueListCard key={v.slug} venue={v} />
            ))}
          </div>
        </section>
      )}

      {relatedGuides.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {relatedGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
