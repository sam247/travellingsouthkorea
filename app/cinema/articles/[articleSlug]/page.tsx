import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CinemaImage } from "@/components/CinemaImage";
import { ContentSection } from "@/components/ContentSection";
import {
  getCinemaArticleBySlug,
  getAllCinemaArticles,
} from "@/data/cinemaArticles";
import { getFilmBySlug } from "@/data/films";
import { getDirectorBySlug } from "@/data/directors";
import { breadcrumbsCinemaArticle } from "@/lib/breadcrumbs";
import {
  getCinemaPath,
  getCinemaArticlePath,
  getCinemaFilmPath,
  getCinemaDirectorPath,
  getCityPath,
} from "@/lib/canonical";
import { getCinemaArticleContentSections } from "@/lib/content/cinemaNarrative";
import { resolveCinemaArticleHero } from "@/lib/resolveUnsplashHero";
import { UnsplashAttributionLine } from "@/components/UnsplashAttribution";
import { AdSenseUnit } from "@/components/analytics/AdSenseUnit";
import { AD_SLOTS } from "@/lib/adsenseConfig";

interface PageProps {
  params: Promise<{ articleSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { articleSlug } = await params;
  const article = getCinemaArticleBySlug(articleSlug);
  if (!article) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  return {
    title: `${article.title} | Cinema | South Korea Travel`,
    description: article.summary,
    alternates: { canonical: base + getCinemaArticlePath(articleSlug) },
    openGraph: { title: article.title, description: article.summary },
  };
}

export async function generateStaticParams() {
  return getAllCinemaArticles().map((a) => ({ articleSlug: a.slug }));
}

export default async function CinemaArticlePage({ params }: PageProps) {
  const { articleSlug } = await params;
  const article = getCinemaArticleBySlug(articleSlug);
  if (!article) notFound();

  const contentSections = getCinemaArticleContentSections(article);
  const breadcrumbItems = breadcrumbsCinemaArticle(article.title, article.slug);
  const hero = await resolveCinemaArticleHero(article);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <CinemaImage
          src={hero.src}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            {article.title}
          </h1>
          {hero.attribution && (
            <UnsplashAttributionLine attribution={hero.attribution} variant="on-dark" />
          )}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {article.intro}
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
        <AdSenseUnit slot={AD_SLOTS.horizontal} />
      </div>

      {(article.relatedFilmSlugs?.length ?? 0) > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Related films
          </h2>
          <div className="flex flex-wrap gap-3">
            {article.relatedFilmSlugs!.map((slug) => {
              const film = getFilmBySlug(slug);
              if (!film) return null;
              return (
                <Link
                  key={slug}
                  href={getCinemaFilmPath(slug)}
                  className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                >
                  {film.title}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {(article.relatedDirectorSlugs?.length ?? 0) > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Related directors
          </h2>
          <div className="flex flex-wrap gap-3">
            {article.relatedDirectorSlugs!.map((slug) => {
              const director = getDirectorBySlug(slug);
              if (!director) return null;
              return (
                <Link
                  key={slug}
                  href={getCinemaDirectorPath(slug)}
                  className="px-4 py-2 rounded-lg bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
                >
                  {director.name}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {(article.relatedCitySlugs?.length ?? 0) > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Explore in Korea
          </h2>
          <div className="flex flex-wrap gap-3">
            {article.relatedCitySlugs!.map((citySlug) => (
              <Link
                key={citySlug}
                href={getCityPath(citySlug)}
                className="px-4 py-2 rounded-lg bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
              >
                {citySlug === "seoul" ? "Seoul" : citySlug === "busan" ? "Busan" : citySlug} guide
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
