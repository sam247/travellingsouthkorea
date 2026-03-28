import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryBySlug } from "@/data/categories";
import { getGuidesByCategory } from "@/data/guides";
import { neighbourhoods } from "@/data/neighbourhoods";
import { itineraries } from "@/data/itineraries";
import { travelTips } from "@/data/travelTips";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideCard } from "@/components/GuideCard";
import { ItineraryCard } from "@/components/ItineraryCard";
import { TravelTipCard } from "@/components/TravelTipCard";
import { CategoryDiscoveryClient } from "@/components/CategoryDiscoveryClient";
import { breadcrumbsGlobalCategory } from "@/lib/breadcrumbs";
import { getCategoryPath, getTravelTipPath } from "@/lib/canonical";
import { resolveTravelTipThumbnail } from "@/lib/resolveUnsplashHero";

interface PageProps {
  params: Promise<{ categorySlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = base + getCategoryPath(categorySlug);
  return {
    title: `${category.label} | South Korea Travel`,
    description: category.description,
    alternates: { canonical },
    openGraph: { title: category.label, description: category.description },
  };
}

export async function generateStaticParams() {
  const { categories } = await import("@/data/categories");
  return categories.map((c) => ({ categorySlug: c.slug }));
}

export default async function GlobalCategoryPage({ params }: PageProps) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const breadcrumbItems = breadcrumbsGlobalCategory(category.label);

  if (categorySlug === "neighbourhoods") {
    return (
      <div className="min-h-screen bg-background">
        <section className="pt-24 sm:pt-28 pb-6 sm:pb-8 max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">{category.label}</h1>
          <p className="text-muted-foreground mt-2">{category.description}</p>
        </section>
        <CategoryDiscoveryClient
          mode="neighbourhoods"
          category={category}
          neighbourhoods={neighbourhoods}
        />
      </div>
    );
  }

  if (categorySlug === "itineraries") {
    return (
      <div className="min-h-screen bg-background">
        <section className="pt-24 sm:pt-28 pb-6 sm:pb-8 max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">{category.label}</h1>
          <p className="text-muted-foreground mt-2">{category.description}</p>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          {itineraries.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {itineraries.map((it) => (
                <ItineraryCard key={it.slug} itinerary={it} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">No itineraries yet. Check back soon!</p>
            </div>
          )}
        </section>
      </div>
    );
  }

  if (categorySlug === "travel-tips") {
    const tipThumbs = await Promise.all(travelTips.map((t) => resolveTravelTipThumbnail(t)));
    return (
      <div className="min-h-screen bg-background">
        <section className="pt-24 sm:pt-28 pb-6 sm:pb-8 max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">{category.label}</h1>
          <p className="text-muted-foreground mt-2">{category.description}</p>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          {travelTips.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {travelTips.map((t, i) => (
                <Link key={t.slug} href={getTravelTipPath(t.slug)}>
                  <TravelTipCard tip={t} imageSrc={tipThumbs[i]} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">No travel tips yet. Check back soon!</p>
            </div>
          )}
        </section>
      </div>
    );
  }

  const allGuides = getGuidesByCategory(categorySlug);

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 sm:pt-28 pb-6 sm:pb-8 max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">{category.label}</h1>
        <p className="text-muted-foreground mt-2">{category.description}</p>
      </section>
      <CategoryDiscoveryClient mode="guides" category={category} guides={allGuides} />
    </div>
  );
}
