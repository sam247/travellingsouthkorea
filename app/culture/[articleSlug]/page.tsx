import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorBadge } from "@/components/AuthorBadge";
import { CultureImage } from "@/components/CultureImage";
import { FAQSection } from "@/components/FAQSection";
import { ExploreMore } from "@/components/ExploreMore";
import { getCultureArticleBySlug, getAllCultureArticles } from "@/data/cultureArticles";
import { getGuideBySlug } from "@/data/guides";
import { getArticleDisplaySections } from "@/lib/content/cultureContent";
import { breadcrumbsCultureArticle } from "@/lib/breadcrumbs";
import {
  getCulturePath,
  getCultureArticlePath,
  getGuidePath,
  getCityPath,
  getCityCategoryPath,
} from "@/lib/canonical";

interface PageProps {
  params: Promise<{ articleSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { articleSlug } = await params;
  const article = getCultureArticleBySlug(articleSlug);
  if (!article) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = base + getCultureArticlePath(articleSlug);
  return {
    title: `${article.title} | Culture | South Korea Travel`,
    description: article.summary,
    alternates: { canonical },
    openGraph: { title: article.title, description: article.summary },
  };
}

export async function generateStaticParams() {
  const articles = getAllCultureArticles();
  return articles.map((a) => ({ articleSlug: a.slug }));
}

export default async function CultureArticlePage({ params }: PageProps) {
  const { articleSlug } = await params;
  const article = getCultureArticleBySlug(articleSlug);
  if (!article) notFound();

  const displaySections = getArticleDisplaySections(article);
  const breadcrumbItems = breadcrumbsCultureArticle(article.title, article.slug);

  const exploreLinks: { label: string; href: string }[] = [];

  article.relatedArticleSlugs?.forEach((slug) => {
    const related = getCultureArticleBySlug(slug);
    if (related)
      exploreLinks.push({
        label: related.title,
        href: getCultureArticlePath(slug),
      });
  });
  article.relatedGuides?.forEach((g) => {
    const guide = getGuideBySlug(g.guideSlug);
    const label = guide?.city === g.citySlug ? guide.title : `${g.guideSlug} (${g.citySlug})`;
    exploreLinks.push({
      label,
      href: getGuidePath(g.citySlug, g.guideSlug),
    });
  });
  article.relatedCitySlugs?.forEach((citySlug) => {
    const labels: Record<string, string> = {
      seoul: "Seoul guide",
      busan: "Busan guide",
      jeju: "Jeju guide",
    };
    exploreLinks.push({
      label: labels[citySlug] ?? `${citySlug} guide`,
      href: getCityPath(citySlug),
    });
  });
  if (article.category === "nightlife") {
    exploreLinks.push(
      { label: "Nightlife in Seoul", href: getCityCategoryPath("seoul", "nightlife") }
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <CultureImage
          src={article.heroImage}
          alt={article.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {article.title}
          </h1>
          <p className="mt-2 text-base text-white/80 line-clamp-2">
            {article.summary}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Breadcrumbs items={breadcrumbItems} />
        <AuthorBadge
          authorSlug={article.authorSlug}
          updatedDate={article.updatedDate}
        />
      </div>

      {article.topCta && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
          <div className="rounded-xl border border-border bg-secondary/40 p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-foreground mb-2">
              {article.topCta.heading}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              {article.topCta.body}
            </p>
            <a
              href={article.topCta.ctaHref}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {article.topCta.ctaText}
            </a>
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {article.intro}
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
        {displaySections.map((section, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              {section.heading}
            </h2>
            {section.imageUrl && (
              <div className="my-6 aspect-video overflow-hidden rounded-xl relative">
                <CultureImage
                  src={section.imageUrl}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>
            )}
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {section.body.split("\n\n").map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
        <FAQSection items={article.faq} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
        <ExploreMore
          heading="Explore more"
          links={exploreLinks.slice(0, 10)}
        />
      </section>
    </div>
  );
}
