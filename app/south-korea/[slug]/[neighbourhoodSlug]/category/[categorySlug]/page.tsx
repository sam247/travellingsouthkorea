import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideCard } from "@/components/GuideCard";
import { VenueListCard } from "@/components/VenueListCard";
import { getCityBySlug } from "@/data/cities";
import { getNeighbourhoodBySlug } from "@/data/neighbourhoods";
import { getCategoryBySlug } from "@/data/categories";
import { ContentSection } from "@/components/ContentSection";
import { FAQSection } from "@/components/FAQSection";
import { ExploreMore } from "@/components/ExploreMore";
import { getFAQForCategory } from "@/lib/content/faqContent";
import { getNeighbourhoodCategoryContent } from "@/lib/queries";
import { breadcrumbsNeighbourhoodCategory } from "@/lib/breadcrumbs";
import { getCategoryContentForNeighbourhood } from "@/lib/content/categoryContent";
import { getGuidesByNeighbourhood } from "@/data/guides";
import { getNeighbourhoodCategoryPath, getNeighbourhoodPath, getGuidePath, getCityPath, getCityCategoryPath } from "@/lib/canonical";
import {
  buildAreaIntentSections,
  buildCategorySeoTitle,
  buildSeoulScopedLinksForCategory,
  isSeoRefactorEnabledForPath,
  recentlyUpdatedSeoulLinks,
} from "@/lib/seo/refactor";

const NEIGHBOURHOOD_CATEGORY_SLUGS = ["bars", "restaurants", "cafes", "things-to-do"] as const;

interface PageProps {
  params: Promise<{ slug: string; neighbourhoodSlug: string; categorySlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug: citySlug, neighbourhoodSlug, categorySlug } = await params;
  const city = getCityBySlug(citySlug);
  const neighbourhood = getNeighbourhoodBySlug(neighbourhoodSlug);
  const category = getCategoryBySlug(categorySlug);
  if (!city || !neighbourhood || !category || neighbourhood.citySlug !== citySlug) return {};
  if (!NEIGHBOURHOOD_CATEGORY_SLUGS.includes(categorySlug as (typeof NEIGHBOURHOOD_CATEGORY_SLUGS)[number]))
    return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = base + getNeighbourhoodCategoryPath(citySlug, neighbourhoodSlug, categorySlug);
  const seoEnabled = isSeoRefactorEnabledForPath(
    getNeighbourhoodCategoryPath(citySlug, neighbourhoodSlug, categorySlug),
    citySlug,
    "activity"
  );
  const title = seoEnabled
    ? buildCategorySeoTitle(
        city.name,
        `Best ${category.label} in ${neighbourhood.name}`,
        `${citySlug}:${neighbourhoodSlug}:${categorySlug}`
      ).title
    : `Best ${category.label} in ${neighbourhood.name}, ${city.name} | South Korea Travel`;
  const description = `Discover ${category.label.toLowerCase()}, cafes, restaurants and things to do in ${neighbourhood.name}, one of ${city.name}'s most popular neighbourhoods.`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description },
  };
}

export async function generateStaticParams() {
  const { cities } = await import("@/data/cities");
  const { getNeighbourhoodsByCity } = await import("@/data/neighbourhoods");
  const params: { slug: string; neighbourhoodSlug: string; categorySlug: string }[] = [];
  for (const city of cities) {
    const cityNeighbourhoods = getNeighbourhoodsByCity(city.slug);
    for (const n of cityNeighbourhoods) {
      for (const categorySlug of NEIGHBOURHOOD_CATEGORY_SLUGS) {
        params.push({
          slug: city.slug,
          neighbourhoodSlug: n.slug,
          categorySlug,
        });
      }
    }
  }
  return params;
}

export default async function NeighbourhoodCategoryPage({ params }: PageProps) {
  const { slug: citySlug, neighbourhoodSlug, categorySlug } = await params;
  const city = getCityBySlug(citySlug);
  const neighbourhood = getNeighbourhoodBySlug(neighbourhoodSlug);
  const category = getCategoryBySlug(categorySlug);

  if (!city || !neighbourhood || neighbourhood.citySlug !== citySlug) notFound();
  if (!category || !NEIGHBOURHOOD_CATEGORY_SLUGS.includes(categorySlug as (typeof NEIGHBOURHOOD_CATEGORY_SLUGS)[number]))
    notFound();
  const seoEnabled = isSeoRefactorEnabledForPath(
    getNeighbourhoodCategoryPath(citySlug, neighbourhoodSlug, categorySlug),
    citySlug,
    "activity"
  );

  const content = getNeighbourhoodCategoryContent(neighbourhoodSlug, categorySlug);
  const breadcrumbItems = breadcrumbsNeighbourhoodCategory(
    city.name,
    city.slug,
    neighbourhood.name,
    neighbourhood.slug,
    content.categoryLabel
  );
  const seoIntentSections = seoEnabled
    ? buildAreaIntentSections(
        city.name,
        neighbourhood.name,
        content.categoryLabel,
        `${citySlug}:${neighbourhoodSlug}:${categorySlug}`
      )
    : [];
  const seoLinks = seoEnabled
    ? buildSeoulScopedLinksForCategory({
        citySlug,
        cityName: city.name,
        categorySlug,
        neighbourhoodSlug,
      })
    : null;
  const recentlyUpdated = seoEnabled ? recentlyUpdatedSeoulLinks(8) : [];

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 sm:pt-28 pb-6 sm:pb-8 max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
          {content.categoryLabel} in {neighbourhood.name}, {city.name}
        </h1>
        <p className="text-muted-foreground mt-2">
          Discover {content.categoryLabel.toLowerCase()}, cafes, restaurants and things to do in{" "}
          {neighbourhood.name}, one of {city.name}&apos;s most popular neighbourhoods.
        </p>
        <div className="mt-10 max-w-7xl">
          {getCategoryContentForNeighbourhood(neighbourhood, city, category, content).map((section) => (
            <ContentSection
              key={section.heading}
              heading={section.heading}
              paragraphs={section.paragraphs}
            />
          ))}
          {seoIntentSections.map((section) => (
            <ContentSection
              key={section.heading}
              heading={section.heading}
              paragraphs={section.paragraphs}
            />
          ))}
        </div>
        {seoEnabled && seoLinks && (
          <div className="mt-8">
            <ExploreMore
              heading="You might also like"
              trackBlockType="you_might_also_like"
              links={seoLinks.relatedBlocks.youMightAlsoLike.map((l) => ({
                label: l.label,
                href: l.href,
                tier: l.tier,
              }))}
            />
          </div>
        )}
      </section>

      {content.guides.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </section>
      )}

      {content.venues.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Venues</h2>
          <div className="flex flex-col gap-3">
            {content.venues.map((v) => (
              <VenueListCard key={v.slug} venue={v} />
            ))}
          </div>
        </section>
      )}
      {seoEnabled && seoLinks && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
          <ExploreMore
            heading="Nearby things to do"
            trackBlockType="nearby_things"
            links={seoLinks.relatedBlocks.nearbyThings.map((l) => ({
              label: l.label,
              href: l.href,
              tier: l.tier,
            }))}
          />
        </section>
      )}

      {content.guides.length === 0 && content.venues.length === 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <p className="text-muted-foreground">More recommendations coming soon.</p>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <FAQSection items={getFAQForCategory(neighbourhood.name, content.categoryLabel, "neighbourhood")} />
        {seoEnabled && seoLinks ? (
          <ExploreMore
            heading="Plan your trip"
            trackBlockType="plan_your_trip"
            links={seoLinks.relatedBlocks.planYourTrip.map((l) => ({
              label: l.label,
              href: l.href,
              tier: l.tier,
            }))}
          />
        ) : (
          <ExploreMore
            links={[
              ...NEIGHBOURHOOD_CATEGORY_SLUGS.filter((s) => s !== categorySlug).map((slug) => {
                const cat = getCategoryBySlug(slug);
                return {
                  label: cat ? `${cat.label} in ${neighbourhood.name}` : slug,
                  href: getNeighbourhoodCategoryPath(citySlug, neighbourhoodSlug, slug),
                };
              }),
              { label: neighbourhood.name, href: getNeighbourhoodPath(citySlug, neighbourhoodSlug) },
              ...getGuidesByNeighbourhood(neighbourhoodSlug).slice(0, 3).map((g) => ({
                label: g.title,
                href: getGuidePath(citySlug, g.slug),
              })),
              { label: `${city.name} guide`, href: getCityPath(citySlug) },
              { label: `Things to do in ${city.name}`, href: getCityCategoryPath(citySlug, "things-to-do") },
            ]}
          />
        )}
      </section>
      {seoEnabled && recentlyUpdated.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
          <ExploreMore
            heading="Recently updated"
            trackBlockType="recently_updated"
            links={recentlyUpdated.map((l) => ({
              label: l.label,
              href: l.href,
              tier: l.tier,
            }))}
          />
        </section>
      )}
    </div>
  );
}
