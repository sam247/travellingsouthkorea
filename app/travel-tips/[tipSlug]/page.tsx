import { notFound } from "next/navigation";
import { SafeImage } from "@/components/SafeImage";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorBadge } from "@/components/AuthorBadge";
import { TravelTipCard } from "@/components/TravelTipCard";
import { getTravelTipBySlug, travelTips } from "@/data/travelTips";
import { breadcrumbsTravelTip } from "@/lib/breadcrumbs";
import { renderTipContent } from "@/lib/markdown";
import { getTravelTipPath } from "@/lib/canonical";
import { resolveTravelTipHero, resolveTravelTipThumbnail } from "@/lib/resolveUnsplashHero";
import { UnsplashAttributionLine } from "@/components/UnsplashAttribution";
import { AdSenseUnit } from "@/components/analytics/AdSenseUnit";
import { AD_SLOTS } from "@/lib/adsenseConfig";
import { BreweryMap, type BreweryMarker } from "@/components/BreweryMap";

const BREWERY_MAP_SPLIT = "## The Korean Craft Renaissance: From Macro-Lagers to Micro-Brews";

const BREWERY_MARKERS: BreweryMarker[] = [
  { name: "Magpie Brewing Co.", lat: 37.5340, lng: 126.9870, region: "Seoul", description: "Pioneering pale ale taproom in Itaewon" },
  { name: "The Booth", lat: 37.5345, lng: 126.9930, region: "Seoul", description: "From Gyeongnidan to nationwide acclaim" },
  { name: "Amazing Brewing Company", lat: 37.5445, lng: 127.0560, region: "Seoul", description: "Cathedral-sized taproom in Seongsu" },
  { name: "Seoul Brewery", lat: 37.5450, lng: 127.0540, region: "Seoul", description: "Technical precision meets modern design" },
  { name: "Artmonster Brewery", lat: 37.5660, lng: 126.9920, region: "Seoul", description: "Neon-lit brewing in Hip-jiro / Euljiro" },
  { name: "Euljiro Brewing", lat: 37.5665, lng: 126.9935, region: "Seoul", description: "Neighbourhood beer in old-Seoul alleys" },
  { name: "Kiwa Taproom", lat: 37.5820, lng: 126.9850, region: "Seoul", description: "Craft beer in a traditional hanok house" },
  { name: "Brew 3.14", lat: 37.5720, lng: 126.9770, region: "Seoul", description: "Intimate small-batch taproom" },
  { name: "Ale Dang", lat: 37.5560, lng: 126.9230, region: "Seoul", description: "Cosy small-batch brews in a historic setting" },
  { name: "Gorilla Brewing", lat: 35.1535, lng: 129.1185, region: "Busan", description: "Coastal stouts and IPAs near Gwangalli Beach" },
  { name: "Wild Wave Brewing", lat: 35.1580, lng: 129.1600, region: "Busan", description: "Pioneers of the Korean sour beer scene" },
  { name: "Budnamu Brewery", lat: 37.7510, lng: 128.8960, region: "Gangneung", description: "Pine-scented ales in a converted grain store" },
  { name: "Magpie Jeju", lat: 33.4530, lng: 126.5700, region: "Jeju", description: "Farm brewery on the Island of the Gods" },
];

interface PageProps {
  params: Promise<{ tipSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { tipSlug } = await params;
  const tip = getTravelTipBySlug(tipSlug);
  if (!tip) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = base + getTravelTipPath(tipSlug);
  return {
    title: `${tip.title} | Travel Tips | South Korea Travel`,
    description: tip.summary,
    alternates: { canonical },
    openGraph: { title: tip.title, description: tip.summary },
  };
}

export async function generateStaticParams() {
  const { travelTips: tips } = await import("@/data/travelTips");
  return tips.map((t) => ({ tipSlug: t.slug }));
}

export default async function TravelTipPage({ params }: PageProps) {
  const { tipSlug } = await params;
  const tip = getTravelTipBySlug(tipSlug);
  if (!tip) notFound();

  const relatedTips = travelTips.filter((t) => t.slug !== tip.slug).slice(0, 4);
  const breadcrumbItems = breadcrumbsTravelTip(tip.title, tip.slug);
  const hero = await resolveTravelTipHero(tip);
  const relatedThumbs = await Promise.all(relatedTips.map((t) => resolveTravelTipThumbnail(t)));

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <SafeImage
          src={hero.src}
          alt={tip.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {tip.title}
          </h1>
          {hero.attribution && (
            <UnsplashAttributionLine attribution={hero.attribution} variant="on-dark" />
          )}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Breadcrumbs items={breadcrumbItems} />
        <AuthorBadge authorSlug={tip.authorSlug} updatedDate={tip.updatedDate} />
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-wrap gap-2">
          {tip.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {tip.supportingImages && tip.supportingImages.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tip.supportingImages.slice(0, 2).map((src, i) => (
              <div
                key={src}
                className="relative aspect-video rounded-xl overflow-hidden bg-secondary/50"
              >
                <SafeImage
                  src={src}
                  alt={`${tip.title} — scene`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {tip.slug === "breweries-in-south-korea" && tip.content.includes(BREWERY_MAP_SPLIT) ? (
            <>
              {renderTipContent(tip.content.split(BREWERY_MAP_SPLIT)[0])}
              <BreweryMap markers={BREWERY_MARKERS} />
              {renderTipContent(BREWERY_MAP_SPLIT + tip.content.split(BREWERY_MAP_SPLIT)[1])}
            </>
          ) : (
            renderTipContent(tip.content)
          )}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
        <AdSenseUnit slot={AD_SLOTS.horizontal} />
      </div>

      {relatedTips.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Related Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {relatedTips.map((t, i) => (
              <Link key={t.slug} href={getTravelTipPath(t.slug)}>
                <TravelTipCard tip={t} imageSrc={relatedThumbs[i]} />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
