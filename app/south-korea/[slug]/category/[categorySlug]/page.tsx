import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideCard } from "@/components/GuideCard";
import { VenueListCard } from "@/components/VenueListCard";
import { NeighbourhoodCard } from "@/components/NeighbourhoodCard";
import { getCityBySlug } from "@/data/cities";
import { getCategoryBySlug } from "@/data/categories";
import { getCityCategoryContent } from "@/lib/queries";
import { breadcrumbsCityCategory } from "@/lib/breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import { getCityCategoryPath, getItineraryPath, getTravelTipPath } from "@/lib/canonical";

interface PageProps {
  params: Promise<{ slug: string; categorySlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug: citySlug, categorySlug } = await params;
  const city = getCityBySlug(citySlug);
  const category = getCategoryBySlug(categorySlug);
  if (!city || !category) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = base + getCityCategoryPath(citySlug, categorySlug);
  return {
    title: `${category.label} in ${city.name} | South Korea Travel`,
    description: category.description,
    alternates: { canonical },
    openGraph: { title: `${category.label} in ${city.name}`, description: category.description },
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
  }
  return pairs;
}

export default async function CityCategoryPage({ params }: PageProps) {
  const { slug: citySlug, categorySlug } = await params;
  const city = getCityBySlug(citySlug);
  const category = getCategoryBySlug(categorySlug);

  if (!city || !category) {
    notFound();
  }

  const content = getCityCategoryContent(citySlug, categorySlug);
  const breadcrumbItems = breadcrumbsCityCategory(
    city.name,
    city.slug,
    content.categoryLabel,
    categorySlug
  );

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 sm:pt-28 pb-6 sm:pb-8 max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
          {content.categoryLabel} in {city.name}
        </h1>
        <p className="text-muted-foreground mt-2">{category.description}</p>
      </section>

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
                <Image
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
    </div>
  );
}
