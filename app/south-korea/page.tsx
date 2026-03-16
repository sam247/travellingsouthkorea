import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CityCard } from "@/components/CityCard";
import { GuideCard } from "@/components/GuideCard";
import { getCountryPath, getRegionPath, getItineraryPath, getTravelTipPath } from "@/lib/canonical";
import { breadcrumbsCountry } from "@/lib/breadcrumbs";
import { regions } from "@/data/regions";
import { getFeaturedCities, getFeaturedGuides } from "@/lib/queries";
import { itineraries } from "@/data/itineraries";
import { travelTips } from "@/data/travelTips";

export function generateMetadata() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  return {
    title: "South Korea Travel Guide | Regions, Cities & Itineraries",
    description: "Curated travel guides, neighbourhood insights, food spots and itineraries for exploring South Korea.",
    alternates: { canonical: base + getCountryPath() },
    openGraph: {
      title: "South Korea Travel Guide",
      description: "Curated travel guides and itineraries for South Korea.",
    },
  };
}

export default function CountryPage() {
  const topCities = getFeaturedCities(5);
  const popularGuides = getFeaturedGuides(6);
  const topItineraries = itineraries.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[70vh] min-h-[450px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1600&q=80"
          alt="South Korea"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            South Korea Travel Guide
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/80 max-w-xl font-editorial">
            Everything you need to explore Korea — cities, neighbourhoods, food,
            nightlife and travel tips.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <Breadcrumbs items={breadcrumbsCountry()} />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          South Korea packs an extraordinary amount into a small peninsula —
          megacities with the best food scene in Asia, volcanic islands, mountain
          temples, K-pop culture, and some of the most welcoming people you&apos;ll
          meet anywhere. Whether you&apos;re here for three days or three months,
          this guide covers everything.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          Regions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={getRegionPath(region.slug)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              <Image
                src={region.image}
                alt={region.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-sm font-semibold text-white">{region.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          Major Cities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {topCities.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </section>

      {topItineraries.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Top Itineraries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {topItineraries.map((it) => (
              <Link
                key={it.slug}
                href={getItineraryPath(it.slug)}
                className="group block overflow-hidden rounded-xl bg-card transition-all duration-240"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <Image
                    src={it.image}
                    alt={it.title}
                    width={800}
                    height={533}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1.5">
                    {it.days} Days
                  </p>
                  <h3 className="text-base font-semibold text-foreground">
                    {it.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
                    {it.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          Popular Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          Travel Tips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {travelTips.map((tip) => (
            <Link
              key={tip.slug}
              href={getTravelTipPath(tip.slug)}
              className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-secondary/50 transition-colors"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Image
                src={tip.image}
                alt=""
                width={56}
                height={56}
                className="w-14 h-14 rounded-lg object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {tip.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                  {tip.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
