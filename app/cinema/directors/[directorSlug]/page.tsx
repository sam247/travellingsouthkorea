import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { getDirectorBySlug, getAllDirectors } from "@/data/directors";
import { getFilmsByDirector } from "@/data/films";
import { breadcrumbsCinemaDirector } from "@/lib/breadcrumbs";
import {
  getCinemaPath,
  getCinemaDirectorPath,
  getCinemaFilmPath,
} from "@/lib/canonical";
import { getDirectorContentSections } from "@/lib/content/cinemaNarrative";

interface PageProps {
  params: Promise<{ directorSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { directorSlug } = await params;
  const director = getDirectorBySlug(directorSlug);
  if (!director) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  return {
    title: `${director.name} | Cinema | South Korea Travel`,
    description: director.bio,
    alternates: { canonical: base + getCinemaDirectorPath(directorSlug) },
    openGraph: { title: director.name, description: director.bio },
  };
}

export async function generateStaticParams() {
  return getAllDirectors().map((d) => ({ directorSlug: d.slug }));
}

export default async function CinemaDirectorPage({ params }: PageProps) {
  const { directorSlug } = await params;
  const director = getDirectorBySlug(directorSlug);
  if (!director) notFound();

  const films = getFilmsByDirector(director.slug);
  const contentSections = getDirectorContentSections(director);
  const breadcrumbItems = breadcrumbsCinemaDirector(director.name, director.slug);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          {director.name}
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          {director.bio}
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

      {films.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Related films
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {films.map((film) => (
              <Link
                key={film.slug}
                href={getCinemaFilmPath(film.slug)}
                className="block p-4 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors"
              >
                <span className="font-medium text-foreground">{film.title}</span>
                <p className="text-sm text-muted-foreground mt-1">
                  {film.year} · {film.genres.slice(0, 2).join(", ")}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
