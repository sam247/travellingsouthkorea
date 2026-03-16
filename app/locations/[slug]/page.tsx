import { SafeImage } from "@/components/SafeImage";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideCard } from "@/components/GuideCard";
import { breadcrumbsLocation } from "@/lib/breadcrumbs";
import { getLocationPath } from "@/lib/canonical";
import { getLocationBySlug, getAllLocationSlugs } from "@/lib/locations";
import { getCitiesByRegion } from "@/data/cities";
import { getGuidesByCity } from "@/data/guides";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = base + getLocationPath(slug);
  const title = `${location.name} | South Korea`;
  const description = location.description.slice(0, 160);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description },
  };
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const regionCities = getCitiesByRegion(location.regionSlug);
  const guidesToShow = regionCities.flatMap((c) => getGuidesByCity(c.slug)).slice(0, 9);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <SafeImage
          src={location.heroImage}
          alt={location.name}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            {location.name}
          </h1>
          <p className="mt-2 text-base sm:text-lg text-white/80 max-w-xl font-editorial">
            {location.locationType === "island" ? "Island" : "National Park"} · South Korea
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <Breadcrumbs items={breadcrumbsLocation(location.name)} />
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mt-6">
          {location.description}
        </p>
      </section>

      {guidesToShow.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Related guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guidesToShow.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
