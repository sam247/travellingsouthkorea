import { notFound } from "next/navigation";
import { cities } from "@/data/cities";
import { regions } from "@/data/regions";
import { assertNoCityRegionSlugCollision } from "@/lib/guard";
import { getCityPath, getRegionPath } from "@/lib/canonical";
import { RegionOrCityPage } from "./RegionOrCityPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  const region = regions.find((r) => r.slug === slug);
  if (!city && !region) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = base + (city ? getCityPath(slug) : getRegionPath(slug));
  const title = city ? `${city.name} Travel Guide | South Korea` : `${region!.name} | South Korea`;
  const description = city ? city.tagline : region!.description;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description },
  };
}

export async function generateStaticParams() {
  assertNoCityRegionSlugCollision(
    cities.map((c) => c.slug),
    regions.map((r) => r.slug)
  );
  const citySlugs = cities.map((c) => ({ slug: c.slug }));
  const regionSlugs = regions.map((r) => ({ slug: r.slug }));
  return [...citySlugs, ...regionSlugs];
}

export default async function SouthKoreaSlugPage({ params }: PageProps) {
  const { slug } = await params;
  assertNoCityRegionSlugCollision(
    cities.map((c) => c.slug),
    regions.map((r) => r.slug)
  );
  const city = cities.find((c) => c.slug === slug);
  const region = regions.find((r) => r.slug === slug);
  if (city) {
    return <RegionOrCityPage type="city" city={city} />;
  }
  if (region) {
    return <RegionOrCityPage type="region" region={region} />;
  }
  notFound();
}
