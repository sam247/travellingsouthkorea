import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideCard } from "@/components/GuideCard";
import { VenueListCard } from "@/components/VenueListCard";
import { NeighbourhoodCard } from "@/components/NeighbourhoodCard";
import { TopHighlights } from "@/components/TopHighlights";
import { GuidePageToc } from "@/components/GuidePageToc";
import { GuideSidebarRelatedGuides } from "@/components/GuideSidebarRelatedGuides";
import { GuideSidebarExplore } from "@/components/GuideSidebarExplore";
import { GuideSidebarAdPlaceholder } from "@/components/GuideSidebarAdPlaceholder";
import { getCityBySlug } from "@/data/cities";
import { getCategoryBySlug } from "@/data/categories";
import { ContentSection } from "@/components/ContentSection";
import { FAQSection } from "@/components/FAQSection";
import { ExploreMore } from "@/components/ExploreMore";
import { getFAQForCategory } from "@/lib/content/faqContent";
import { getCityCategoryContent } from "@/lib/queries";
import { breadcrumbsCityCategory } from "@/lib/breadcrumbs";
import { getCategoryContentForCity } from "@/lib/content/categoryContent";
import { getTopHighlightsForCity } from "@/lib/content/cityContent";
import { getNeighbourhoodsByCity } from "@/data/neighbourhoods";
import { getGuidesByCity } from "@/data/guides";
import { getItinerariesByCity } from "@/data/itineraries";
import { categories } from "@/data/categories";
import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";
import { getCityCategoryPath, getItineraryPath, getTravelTipPath, getNeighbourhoodPath, getGuidePath, getCityPath } from "@/lib/canonical";
import { getMoneyPageContent, MONEY_CATEGORY_SLUGS, isMoneyCategorySlug } from "@/lib/content/moneyPages";
import { AD_SLOTS } from "@/lib/adsenseConfig";
import {
  buildAreaIntentSections,
  buildCategorySeoTitle,
  buildSeoulScopedLinksForCategory,
  isSeoRefactorEnabledForPath,
  recentlyUpdatedSeoulLinks,
} from "@/lib/seo/refactor";

interface PageProps {
  params: Promise<{ slug: string; categorySlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug: citySlug, categorySlug } = await params;
  const city = getCityBySlug(citySlug);
  const category = getCategoryBySlug(categorySlug);
  const moneyPage = getMoneyPageContent(citySlug, categorySlug);
  if (!city || (!category && !moneyPage)) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = base + getCityCategoryPath(citySlug, categorySlug);
  const label = moneyPage?.label ?? category!.label;
  const description = moneyPage?.description ?? category!.description;
  const seoEnabled = isSeoRefactorEnabledForPath(
    getCityCategoryPath(citySlug, categorySlug),
    citySlug,
    "category"
  );
  const titleResult = seoEnabled
    ? buildCategorySeoTitle(city.name, label, `${citySlug}:${categorySlug}`)
    : {
        title: `${label} in ${city.name} | South Korea Travel`,
      };
  return {
    title: titleResult.title,
    description,
    alternates: { canonical },
    openGraph: { title: `${label} in ${city.name}`, description },
  };
}

export async function generateStaticParams() {
  const { cities } = await import("@/data/cities");
  const { categories } = await import("@/data/categories");
  const pairs: { slug: string; categorySlug: string }[] = [];
  for (const city of cities) {
    for (const cat of categories) {
      pairs.push({ slug: city.slug, categorySlug: cat.slug });
    }
    if (city.slug === "seoul") {
      for (const slug of MONEY_CATEGORY_SLUGS) {
        pairs.push({ slug: city.slug, categorySlug: slug });
      }
    }
  }
  return pairs;
}

export default async function CityCategoryPage({ params }: PageProps) {
  const { slug: citySlug, categorySlug } = await params;
  const city = getCityBySlug(citySlug);
  const category = getCategoryBySlug(categorySlug);
  const moneyPage = getMoneyPageContent(citySlug, categorySlug);
  const seoEnabled = isSeoRefactorEnabledForPath(
    getCityCategoryPath(citySlug, categorySlug),
    citySlug,
    "category"
  );

  if (!city || (!category && !moneyPage)) {
    notFound();
  }
  if (isMoneyCategorySlug(categorySlug) && citySlug !== "seoul") notFound();

  const content = moneyPage
    ? {
        guides: getGuidesByCity(citySlug).slice(0, 6),
        venues: [],
        itineraries: getItinerariesByCity(citySlug),
        neighbourhoods: getNeighbourhoodsByCity(citySlug).slice(0, 6),
        travelTips: [],
        categoryLabel: moneyPage.label,
      }
    : getCityCategoryContent(citySlug, categorySlug);
  const breadcrumbItems = breadcrumbsCityCategory(
    city.name,
    city.slug,
    content.categoryLabel,
    categorySlug
  );
  const seoLinks = seoEnabled
    ? buildSeoulScopedLinksForCategory({
        citySlug,
        cityName: city.name,
        categorySlug,
      })
    : null;
  const intentSections =
    seoEnabled && !moneyPage
      ? buildAreaIntentSections(city.name, city.name, content.categoryLabel, `${citySlug}:${categorySlug}`)
      : [];
  const recentlyUpdated = seoEnabled ? recentlyUpdatedSeoulLinks(10) : [];
  const categoryDescription = moneyPage?.description ?? category?.description ?? "";

  if (!moneyPage && categorySlug === "things-to-do") {
    const cityNeighbourhoods = getNeighbourhoodsByCity(city.slug);
    const tocItems = [
      { id: "overview", label: "Overview" },
      ...(content.guides.length > 0 ? [{ id: "guides", label: "Guides" }] : []),
      ...(content.venues.length > 0 ? [{ id: "venues", label: "Venues" }] : []),
      ...(content.itineraries.length > 0 ? [{ id: "itineraries", label: "Itineraries" }] : []),
      ...(content.neighbourhoods.length > 0 ? [{ id: "neighbourhoods", label: "Neighbourhoods" }] : []),
      ...(content.travelTips.length > 0 ? [{ id: "travel-tips", label: "Travel tips" }] : []),
      { id: "faq", label: "FAQs" },
    ];
    return (
      <div className="min-h-screen bg-background">
        <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
          <SafeImage src={city.image} alt={`${city.name} things to do`} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
            <h1 className="text-3xl sm:text-5xl font-bold text-white">
              {city.name} Things to Do
            </h1>
            <p className="mt-2 text-base sm:text-lg text-white/80 max-w-2xl font-editorial">
              {categoryDescription}
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:items-start">
            <div className="min-w-0 max-w-[760px]">
              <section className="pt-6">
                <Breadcrumbs items={breadcrumbItems} />
              </section>

              <div className="mt-10" id="overview">
                <TopHighlights {...getTopHighlightsForCity(city, cityNeighbourhoods)} id="overview" />
                {getCategoryContentForCity(city, category!, content).map((section) => (
                  <ContentSection
                    key={section.heading}
                    heading={section.heading}
                    paragraphs={section.paragraphs}
                  />
                ))}
                {intentSections.map((section) => (
                  <ContentSection
                    key={section.heading}
                    heading={section.heading}
                    paragraphs={section.paragraphs}
                  />
                ))}
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
              </div>

              {seoEnabled && seoLinks && (
                <section className="pb-10" id="nearby">
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

              {content.guides.length > 0 && (
                <section className="pb-14" id="guides">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Guides</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {content.guides.map((guide) => (
                      <GuideCard key={guide.slug} guide={guide} />
                    ))}
                  </div>
                </section>
              )}

              {content.venues.length > 0 && (
                <section className="pb-14" id="venues">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Venues</h2>
                  <div className="flex flex-col gap-3">
                    {content.venues.map((v) => (
                      <VenueListCard key={v.slug} venue={v} />
                    ))}
                  </div>
                </section>
              )}

              {content.itineraries.length > 0 && (
                <section className="pb-14" id="itineraries">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Itineraries</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {content.itineraries.map((it) => (
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
                          <h3 className="text-base font-semibold text-foreground">{it.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">{it.summary}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {content.neighbourhoods.length > 0 && (
                <section className="pb-14" id="neighbourhoods">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Neighbourhoods</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {content.neighbourhoods.map((n) => (
                      <NeighbourhoodCard key={n.slug} neighbourhood={n} />
                    ))}
                  </div>
                </section>
              )}

              {content.travelTips.length > 0 && (
                <section className="pb-14" id="travel-tips">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Travel Tips</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {content.travelTips.map((t) => (
                      <Link
                        key={t.slug}
                        href={getTravelTipPath(t.slug)}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-secondary/50 transition-colors"
                        style={{ boxShadow: "var(--shadow-card)" }}
                      >
                        <SafeImage
                          src={t.image}
                          alt=""
                          width={56}
                          height={56}
                          className="w-14 h-14 rounded-lg object-cover"
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">{t.title}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{t.summary}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              <section className="pb-14" id="faq">
                <FAQSection items={getFAQForCategory(city.name, content.categoryLabel, "city")} />
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
                      ...categories
                        .filter((c) => c.slug !== categorySlug)
                        .slice(0, 5)
                        .map((c) => ({
                          label: `${c.label} in ${city.name}`,
                          href: getCityCategoryPath(city.slug, c.slug),
                        })),
                      ...cityNeighbourhoods.slice(0, 4).map((n) => ({
                        label: n.name,
                        href: getNeighbourhoodPath(city.slug, n.slug),
                      })),
                      ...getGuidesByCity(city.slug).slice(0, 3).map((g) => ({
                        label: g.title,
                        href: getGuidePath(city.slug, g.slug),
                      })),
                      ...getItinerariesByCity(city.slug).slice(0, 2).map((i) => ({
                        label: i.title,
                        href: getItineraryPath(i.slug),
                      })),
                      { label: `${city.name} guide`, href: getCityPath(city.slug) },
                    ]}
                  />
                )}
              </section>

              {seoEnabled && recentlyUpdated.length > 0 && (
                <section className="pb-14">
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

              <div className="lg:hidden mt-10">
                <GuideSidebarRelatedGuides guides={content.guides} getGuidePath={getGuidePath} citySlug={city.slug} />
                <GuideSidebarExplore
                  city={city}
                  neighbourhoods={cityNeighbourhoods}
                  getNeighbourhoodPath={getNeighbourhoodPath}
                  getCityCategoryPath={getCityCategoryPath}
                />
              </div>
            </div>

            <aside className="hidden lg:block sticky top-8 space-y-6" aria-label="Page navigation and related links">
              <GuidePageToc items={tocItems} />
              <GuideSidebarRelatedGuides guides={content.guides} getGuidePath={getGuidePath} citySlug={city.slug} />
              <GuideSidebarExplore
                city={city}
                neighbourhoods={cityNeighbourhoods}
                getNeighbourhoodPath={getNeighbourhoodPath}
                getCityCategoryPath={getCityCategoryPath}
              />
              <GuideSidebarAdPlaceholder slot={AD_SLOTS.square} />
              <GuideSidebarAdPlaceholder slot={AD_SLOTS.vertical} />
            </aside>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 sm:pt-28 pb-6 sm:pb-8 max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
          {content.categoryLabel} in {city.name}
        </h1>
        <p className="text-muted-foreground mt-2">{categoryDescription}</p>
        <div className="mt-10 max-w-7xl">
          {moneyPage ? (
            <>
              <ContentSection heading="Quick pick summary" paragraphs={moneyPage.quickPick} />
              <ContentSection heading="Local tip" paragraphs={[moneyPage.localTip]} />
              {moneyPage.sections.map((section) => (
                <ContentSection
                  key={section.heading}
                  heading={section.heading}
                  paragraphs={section.paragraphs}
                />
              ))}
            </>
          ) : (
            <>
              {getCategoryContentForCity(city, category!, content).map((section) => (
                <ContentSection
                  key={section.heading}
                  heading={section.heading}
                  paragraphs={section.paragraphs}
                />
              ))}
              {intentSections.map((section) => (
                <ContentSection
                  key={section.heading}
                  heading={section.heading}
                  paragraphs={section.paragraphs}
                />
              ))}
            </>
          )}
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

      {content.guides.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </section>
      )}

      {content.venues.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Venues
          </h2>
          <div className="flex flex-col gap-3">
            {content.venues.map((v) => (
              <VenueListCard key={v.slug} venue={v} />
            ))}
          </div>
        </section>
      )}

      {content.itineraries.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Itineraries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {content.itineraries.map((it) => (
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

      {content.neighbourhoods.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Neighbourhoods
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.neighbourhoods.map((n) => (
              <NeighbourhoodCard key={n.slug} neighbourhood={n} />
            ))}
          </div>
        </section>
      )}

      {content.travelTips.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Travel Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.travelTips.map((t) => (
              <Link
                key={t.slug}
                href={getTravelTipPath(t.slug)}
                className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-secondary/50 transition-colors"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <SafeImage
                  src={t.image}
                  alt=""
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-lg object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {t.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {t.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {content.guides.length === 0 &&
        content.venues.length === 0 &&
        content.itineraries.length === 0 &&
        content.neighbourhoods.length === 0 &&
        content.travelTips.length === 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
            <p className="text-muted-foreground">
              No {content.categoryLabel.toLowerCase()} content for {city.name}{" "}
              yet. More recommendations coming soon.
            </p>
          </section>
        )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        {!moneyPage && (
          <FAQSection items={getFAQForCategory(city.name, content.categoryLabel, "city")} />
        )}
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
              ...categories
                .filter((c) => c.slug !== categorySlug)
                .slice(0, 5)
                .map((c) => ({
                  label: `${c.label} in ${city.name}`,
                  href: getCityCategoryPath(city.slug, c.slug),
                })),
              ...getNeighbourhoodsByCity(city.slug).slice(0, 4).map((n) => ({
                label: n.name,
                href: getNeighbourhoodPath(city.slug, n.slug),
              })),
              ...getGuidesByCity(city.slug).slice(0, 3).map((g) => ({
                label: g.title,
                href: getGuidePath(city.slug, g.slug),
              })),
              ...getItinerariesByCity(city.slug).slice(0, 2).map((i) => ({
                label: i.title,
                href: getItineraryPath(i.slug),
              })),
              { label: `${city.name} guide`, href: getCityPath(city.slug) },
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
