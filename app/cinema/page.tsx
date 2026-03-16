import { SafeImage } from "@/components/SafeImage";
import { HERO_IMAGES } from "@/lib/imageConfig";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CinemaImage } from "@/components/CinemaImage";
import { breadcrumbsCinema } from "@/lib/breadcrumbs";
import {
  getCinemaPath,
  getCinemaFilmPath,
  getCinemaDirectorPath,
  getCinemaLocationPath,
  getCinemaArticlePath,
} from "@/lib/canonical";
import { films } from "@/data/films";
import { directors } from "@/data/directors";
import { filmLocations } from "@/data/filmLocations";
import { cinemaArticles } from "@/data/cinemaArticles";

export function generateMetadata() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  return {
    title: "Cinema | South Korean Film, Directors & Filming Locations",
    description:
      "Explore South Korean cinema—films, directors, filming locations, and editorial guides. Connect Korean film to travel across Seoul, Busan, and beyond.",
    alternates: { canonical: base + getCinemaPath() },
    openGraph: {
      title: "Cinema | Korean Film & Filming Locations",
      description:
        "South Korean film, directors, and filming locations. Plan cinema-themed travel across Korea.",
    },
  };
}

export default function CinemaPage() {
  const featuredFilms = films.slice(0, 6);
  const featuredDirectors = directors.slice(0, 5);
  const featuredLocations = filmLocations.slice(0, 4);
  const genres = Array.from(
    new Set(films.flatMap((f) => f.genres))
  ).slice(0, 6);
  const recentArticles = cinemaArticles.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <SafeImage
          src={HERO_IMAGES.cinema}
          alt="Korean cinema"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Cinema
          </h1>
          <p className="mt-2 text-base sm:text-lg text-white/80 max-w-xl">
            South Korean film, directors, and filming locations
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <Breadcrumbs items={breadcrumbsCinema()} />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          South Korean cinema has become a global force—from Parasite and Train to Busan
          to the works of Bong Joon-ho, Park Chan-wook, and many more. This section
          explores Korean film, directors, and filming locations while connecting
          cinema to travel across Seoul, Busan, and the rest of Korea.
        </p>
      </section>

      {featuredFilms.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Featured Korean films
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredFilms.map((film) => (
              <Link
                key={film.slug}
                href={getCinemaFilmPath(film.slug)}
                className="group block overflow-hidden rounded-xl bg-card transition-all duration-240"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[3/2] overflow-hidden relative">
                  <CinemaImage
                    src={film.heroImage}
                    alt={film.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1.5">
                    {film.year} · {film.genres.slice(0, 2).join(", ")}
                  </p>
                  <h3 className="text-base font-semibold text-foreground">
                    {film.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
                    {film.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {featuredDirectors.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Major Korean directors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredDirectors.map((director) => (
              <Link
                key={director.slug}
                href={getCinemaDirectorPath(director.slug)}
                className="group block px-5 py-6 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors duration-200"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {director.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
                  {director.bio}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {featuredLocations.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Filming locations in Korea
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {featuredLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={getCinemaLocationPath(loc.slug)}
                className="group block overflow-hidden rounded-xl bg-card transition-all duration-240"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[3/2] overflow-hidden relative">
                  <CinemaImage
                    src={loc.heroImage}
                    alt={loc.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-foreground">
                    {loc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
                    {loc.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {genres.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Popular Korean movie genres
          </h2>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <span
                key={genre}
                className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground"
              >
                {genre}
              </span>
            ))}
          </div>
        </section>
      )}

      {recentArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Recent cinema articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recentArticles.map((article) => (
              <Link
                key={article.slug}
                href={getCinemaArticlePath(article.slug)}
                className="group block overflow-hidden rounded-xl bg-card transition-all duration-240"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[3/2] overflow-hidden relative">
                  <CinemaImage
                    src={article.heroImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-foreground">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
                    {article.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          All films
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {films.map((film) => (
            <Link
              key={film.slug}
              href={getCinemaFilmPath(film.slug)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {film.title} ({film.year})
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
