import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CinemaImage } from "@/components/CinemaImage";
import { ContentSection } from "@/components/ContentSection";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import {
  getFilmLocationBySlug,
  getAllFilmLocations,
} from "@/data/filmLocations";
import { getFilmBySlug } from "@/data/films";
import {
  getCinemaFilmPath,
  getCinemaLocationPath,
  getGuidePath,
  getNeighbourhoodPath,
} from "@/lib/canonical";
import { breadcrumbsCinemaLocation } from "@/lib/breadcrumbs";
import { getFilmLocationContentSections } from "@/lib/content/cinemaNarrative";

interface PageProps {
  params: Promise<{ locationSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locationSlug } = await params;
  const location = getFilmLocationBySlug(locationSlug);
  if (!location) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  return {
    title: `${location.title} | Cinema | South Korea Travel`,
    description: location.summary,
    alternates: { canonical: base + getCinemaLocationPath(locationSlug) },
    openGraph: { title: location.title, description: location.summary },
  };
}

export async function generateStaticParams() {
  return getAllFilmLocations().map((l) => ({ locationSlug: l.slug }));
}

export default async function CinemaLocationPage({ params }: PageProps) {
  const { locationSlug } = await params;
  const location = getFilmLocationBySlug(locationSlug);
  if (!location) notFound();

  const film = getFilmBySlug(location.filmSlug);
  const contentSections = getFilmLocationContentSections(location);
  const breadcrumbItems = breadcrumbsCinemaLocation(
    location.title,
    location.slug
  );

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <CinemaImage
          src={location.heroImage}
          alt={location.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            {location.title}
          </h1>
          {film && (
            <Link
              href={getCinemaFilmPath(film.slug)}
              className="mt-2 inline-block text-white/80 hover:text-white transition-colors"
            >
              {film.title} ({film.year})
            </Link>
          )}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {location.summary}
        </p>
        <div className="mt-10 space-y-10">
          {contentSections.map((section) => (
            <ContentSection
              key={section.heading}
              heading={section.heading}
              paragraphs={section.paragraphs}
            />
          ))}
        </div>
      </section>

      {location.relatedGuideSlugs && location.relatedGuideSlugs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Travel guides for these areas
          </h2>
          <div className="flex flex-wrap gap-3">
            {location.relatedGuideSlugs.map((g) => (
              <Link
                key={`${g.citySlug}-${g.guideSlug}`}
                href={getGuidePath(g.citySlug, g.guideSlug)}
                className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
              >
                {g.guideSlug.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </section>
      )}

      {location.scenes.some((s) => s.neighbourhoodSlug) && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Neighbourhoods in the film
          </h2>
          <div className="flex flex-wrap gap-3">
            {location.scenes
              .filter((s) => s.neighbourhoodSlug)
              .map((s) => (
                <Link
                  key={s.neighbourhoodSlug}
                  href={getNeighbourhoodPath(location.citySlug, s.neighbourhoodSlug!)}
                  className="px-4 py-2 rounded-lg bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
                >
                  {s.neighbourhoodSlug!.replace(/-/g, " ")}
                </Link>
              ))}
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
        <MapPlaceholder
          label={`Map: ${location.title}`}
          venueMarkers={[]}
        />
      </section>
    </div>
  );
}
