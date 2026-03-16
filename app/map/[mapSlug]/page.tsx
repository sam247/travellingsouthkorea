import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MapDiscoveryClient } from "@/components/MapDiscoveryClient";
import { getCityBySlug } from "@/data/cities";
import { venues } from "@/data/venues";
import { breadcrumbsMap } from "@/lib/breadcrumbs";
import { getMapPath } from "@/lib/canonical";

interface PageProps {
  params: Promise<{ mapSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { mapSlug } = await params;
  const citySlug = mapSlug.split("-")[0];
  const city = getCityBySlug(citySlug);
  if (!city) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = base + getMapPath(mapSlug);
  return {
    title: `${city.name} Map | South Korea Travel`,
    description: `Explore venues and places in ${city.name}.`,
    alternates: { canonical },
    openGraph: { title: `${city.name} Map`, description: `Explore venues in ${city.name}.` },
  };
}

export async function generateStaticParams() {
  const { cities } = await import("@/data/cities");
  return cities.map((c) => ({ mapSlug: c.slug }));
}

export default async function MapPage({ params }: PageProps) {
  const { mapSlug } = await params;
  const citySlug = mapSlug.split("-")[0];
  const city = getCityBySlug(citySlug);

  if (!city) notFound();

  const cityVenues = venues.filter((v) => v.citySlug === citySlug);
  const breadcrumbItems = breadcrumbsMap(city.name, city.slug);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <MapDiscoveryClient cityName={city.name} citySlug={city.slug} venues={cityVenues} />
    </div>
  );
}
