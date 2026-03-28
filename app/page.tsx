import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";
import { HERO_IMAGES, HERO_HOME_VIDEO_SRC } from "@/lib/imageConfig";
import { Search } from "lucide-react";
import { CityCard } from "@/components/CityCard";
import { GuideCard } from "@/components/GuideCard";
import { getCountryPath, getCategoryPath, getItineraryPath } from "@/lib/canonical";
import { getFeaturedCities, getFeaturedGuides, getFeaturedEditorialTravelTips } from "@/lib/queries";
import { categories } from "@/data/categories";
import { itineraries } from "@/data/itineraries";
import { HomepageSearch } from "./HomepageSearch";
import { FeaturedTravelTipCard } from "@/components/FeaturedTravelTipCard";
import { HomeHeroVideo } from "@/components/HomeHeroVideo";
import { resolveTravelTipHero } from "@/lib/resolveUnsplashHero";

export default async function HomePage() {
  const topCities = getFeaturedCities(3);
  const popularGuides = getFeaturedGuides(6);
  const featuredArticles = getFeaturedEditorialTravelTips();
  const featuredHeroes = await Promise.all(featuredArticles.map((t) => resolveTravelTipHero(t)));
  const topItineraries = itineraries.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <HomeHeroVideo
          videoSrc={HERO_HOME_VIDEO_SRC}
          posterSrc={HERO_IMAGES.home}
          alt="South Korea landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight text-balance">
            Your Guide To South Korea
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-lg mx-auto leading-relaxed">
            Travel guides, neighbourhood insights, food spots and itineraries for
            exploring South Korea.
          </p>
          <HomepageSearch />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Featured Cities
        </h2>
        <p className="text-muted-foreground mb-8">
          Start exploring South Korea&apos;s top destinations
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {topCities.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href={getCountryPath()}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all cities & regions →
          </Link>
        </div>
      </section>

      {featuredArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Featured Articles
          </h2>
          <p className="text-muted-foreground mb-8">
            In-depth travel tips — transport, shopping, and culture
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredArticles.map((tip, i) => (
              <FeaturedTravelTipCard
                key={tip.slug}
                tip={tip}
                heroImageSrc={featuredHeroes[i]?.src}
              />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href={getCategoryPath("travel-tips")}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all travel tips →
            </Link>
          </div>
        </section>
      )}

      {topItineraries.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Top Itineraries
          </h2>
          <p className="text-muted-foreground mb-8">
            Structured day-by-day travel plans
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {topItineraries.map((it) => (
              <Link
                key={it.slug}
                href={getItineraryPath(it.slug)}
                className="group block overflow-hidden rounded-xl bg-card transition-all duration-240"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <SafeImage
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
                    {it.days}-Day Itinerary
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Popular Guides
        </h2>
        <p className="text-muted-foreground mb-8">Our most-read travel guides</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Explore By Category
        </h2>
        <p className="text-muted-foreground mb-8">
          Find exactly what you&apos;re looking for
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={getCategoryPath(cat.slug)}
              className="group px-5 py-6 sm:py-8 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors duration-200"
            >
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                {cat.label}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
