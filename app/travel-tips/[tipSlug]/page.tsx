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
  { name: "Magpie Brewshop", lat: 37.5394, lng: 126.9874, region: "Seoul", description: "Magpie's original Gyeongnidan/Noksapyeong taproom (Wed–Sun)", address: "244-1 Noksapyeong-daero, Yongsan-gu, Seoul" },
  { name: "Magpie NM+ Euljiro", lat: 37.5661, lng: 126.9851, region: "Seoul", description: "Magpie's Euljiro bar, 4th floor", address: "4F, 127 Eulji-ro, Jung-gu, Seoul" },
  { name: "Magpie Mini Myeongdong", lat: 37.5620, lng: 126.9897, region: "Seoul", description: "Small Magpie bar in SL Hotel Myeongdong (opened Oct 2026)", address: "1F, 9 Samil-daero 4-gil, Jung-gu, Seoul" },
  { name: "Seoul Brewery Hapjeong", lat: 37.5460, lng: 126.9146, region: "Seoul", description: "Seoul Brewery's original brewpub", address: "10 Tojeong-ro 3an-gil, Mapo-gu, Seoul" },
  { name: "Seoul Brewery Seongsu", lat: 37.5430, lng: 127.0523, region: "Seoul", description: "Multi-floor café, taphouse and brewery", address: "28-12 Yeonmujang-gil, Seongdong-gu, Seoul" },
  { name: "Artmonster Euljiro", lat: 37.5660, lng: 126.9899, region: "Seoul", description: "Brewery beer hall in Hipjiro", address: "2F, 52 Supyo-ro, Jung-gu, Seoul" },
  { name: "Euljiro Brewing", lat: 37.5655, lng: 126.9907, region: "Seoul", description: "Two neon rooms, six house beers", address: "48-16 Supyo-ro, Jung-gu, Seoul" },
  { name: "Kiwa Taproom", lat: 37.5780, lng: 126.9808, region: "Seoul", description: "Hanok taproom between Bukchon and Samcheong-dong", address: "74-7 Yulgok-ro 1-gil, Jongno-gu, Seoul" },
  { name: "Brew 3.14", lat: 37.5747, lng: 126.9898, region: "Seoul", description: "Small in-house brewpub in Ikseon-dong", address: "39 Donhwamun-ro 11na-gil, Jongno-gu, Seoul" },
  { name: "Ale Dang", lat: 37.5736, lng: 126.9901, region: "Seoul", description: "Hanok pub pouring Goodman Brewery ales", address: "33-9 Supyo-ro 28-gil, Jongno-gu, Seoul" },
  { name: "Gorilla Beach", lat: 35.1598, lng: 129.1696, region: "Busan", description: "Gorilla Brewing's seafront bar, open from noon", address: "30 Dalmaji-gil, Haeundae-gu, Busan" },
  { name: "Gorilla Haeundae", lat: 35.1597, lng: 129.1588, region: "Busan", description: "Gorilla taproom in Shilla Stay Haeundae", address: "46 Haeundae-ro 570beon-gil, Haeundae-gu, Busan" },
  { name: "Galmegi Haeundae", lat: 35.1585, lng: 129.1605, region: "Busan", description: "Galmegi Brewing taphouse near Haeundae Beach", address: "2F, 9 Haeundaehaebyeon-ro 265beon-gil, Haeundae-gu, Busan" },
  { name: "Galmegi Nampo", lat: 35.0995, lng: 129.0265, region: "Busan", description: "Galmegi Brewing taphouse in Nampo", address: "2F, 21-3 Gwangbok-ro, Jung-gu, Busan" },
  { name: "Budnamu Brewery", lat: 37.7489, lng: 128.8851, region: "Gangneung", description: "Brewpub in a 1970s makgeolli brewery building", address: "1961 Gyeonggang-ro, Gangneung-si, Gangwon-do" },
  { name: "Rami Brewing", lat: 35.1688, lng: 128.6000, region: "Changwon", description: "Changwon brewpub (limited opening days)", address: "177 Samgwi-ro, Seongsan-gu, Changwon-si, Gyeongsangnam-do" },
  { name: "Magpie Brewery & Taproom", lat: 33.5047, lng: 126.6134, region: "Jeju", description: "Magpie's Jeju brewery, tours Wed–Sun", address: "23 Donghoecheon 1-gil, Jeju-si, Jeju-do" },
  { name: "Magpie Tapdong", lat: 33.5178, lng: 126.5236, region: "Jeju", description: "Magpie pub in central Jeju City", address: "2F, 7 Tapdong-ro 2-gil, Jeju-si, Jeju-do" },
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
  const title = tip.metaTitle ?? `${tip.title} | Travel Tips | South Korea Travel`;
  const description = tip.metaDescription ?? tip.summary;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description },
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
