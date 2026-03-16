import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CinemaImage } from "@/components/CinemaImage";
import { ContentSection } from "@/components/ContentSection";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { getFilmBySlug, getAllFilms } from "@/data/films";
import { getDirectorBySlug } from "@/data/directors";
import { getFilmLocationsByFilm } from "@/data/filmLocations";
import { breadcrumbsCinemaFilm } from "@/lib/breadcrumbs";
import {
  getCinemaFilmPath,
  getCinemaDirectorPath,
  getCinemaLocationPath,
  getCityPath,
} from "@/lib/canonical";
import { getFilmContentSections } from "@/lib/content/cinemaNarrative";

interface PageProps {
  params: Promise<{ filmSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { filmSlug } = await params;
  const film = getFilmBySlug(filmSlug);
  if (!film) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  return {
    title: `${film.title} | Cinema | South Korea Travel`,
    description: film.summary,
    alternates: { canonical: base + getCinemaFilmPath(filmSlug) },
    openGraph: { title: film.title, description: film.summary },
  };
}

export async function generateStaticParams() {
  return getAllFilms().map((f) => ({ filmSlug: f.slug }));
}

export default async function CinemaFilmPage({ params }: PageProps) {
  const { filmSlug } = await params;
  const film = getFilmBySlug(filmSlug);
  if (!film) notFound();

  const director = getDirectorBySlug(film.directorSlug);
  const locations = getFilmLocationsByFilm(film.slug);
  const contentSections = getFilmContentSections(film, director ?? null);
  const breadcrumbItems = breadcrumbsCinemaFilm(film.title, film.slug);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <CinemaImage
          src={film.heroImage}
          alt={film.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
          <div className="flex flex-wrap gap-2 mb-3">
            {film.genres.map((g) => (
              <span
                key={g}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm"
              >
                {g}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            {film.title}
          </h1>
          <p className="mt-2 text-white/80">
            {film.year}
            {director && (
              <>
                {" · "}
                <Link
                  href={getCinemaDirectorPath(director.slug)}
                  className="text-white hover:underline"
                >
                  {director.name}
                </Link>
              </>
            )}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {film.summary}
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
        {film.notableFacts.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Notable facts
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {film.notableFacts.map((fact, i) => (
                <li key={i}>{fact}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {locations.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Filming location guides
          </h2>
          <div className="flex flex-col gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={getCinemaLocationPath(loc.slug)}
                className="block p-4 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors"
              >
                <span className="font-medium text-foreground">{loc.title}</span>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {loc.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {film.relatedCitySlugs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Travel connections
          </h2>
          <div className="flex flex-wrap gap-3">
            {film.relatedCitySlugs.map((citySlug) => (
              <Link
                key={citySlug}
                href={getCityPath(citySlug)}
                className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
              >
                {citySlug === "seoul" ? "Seoul" : citySlug === "busan" ? "Busan" : citySlug} guide
              </Link>
            ))}
          </div>
        </section>
      )}

      {locations.some((l) => l.scenes.some((s) => s.addressOrArea)) && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
          <MapPlaceholder
            label="Filming locations map"
            venueMarkers={[]}
          />
        </section>
      )}
    </div>
  );
}
