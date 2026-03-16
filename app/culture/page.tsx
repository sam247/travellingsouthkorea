import { SafeImage } from "@/components/SafeImage";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DEFAULT_PLACEHOLDER_IMAGE } from "@/lib/imageConfig";
import { CultureArticleCard } from "@/components/CultureArticleCard";
import { breadcrumbsCulture } from "@/lib/breadcrumbs";
import { getCulturePath } from "@/lib/canonical";
import {
  getAllCultureArticles,
  getCultureArticlesByCategory,
} from "@/data/cultureArticles";
export function generateMetadata() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  return {
    title: "Culture | Korean Fashion, Nightlife, K-pop & Lifestyle",
    description:
      "Explore Korean culture, fashion, nightlife, K-pop, beauty, and lifestyle. Editorial guides to what makes Korea unique—from Seoul street style to festivals and cafe culture.",
    alternates: { canonical: base + getCulturePath() },
    openGraph: {
      title: "Culture | Korean Fashion, Nightlife & Lifestyle",
      description:
        "Editorial content on Korean culture, fashion, nightlife, K-pop, and lifestyle.",
    },
  };
}

export default function CulturePage() {
  const all = getAllCultureArticles();
  const featured = all.slice(0, 4);
  const kpop = getCultureArticlesByCategory("k-pop");
  const fashionBeauty = [
    ...getCultureArticlesByCategory("fashion"),
    ...getCultureArticlesByCategory("beauty"),
  ];
  const foodNightlife = [
    ...getCultureArticlesByCategory("food"),
    ...getCultureArticlesByCategory("nightlife"),
  ];
  const festivals = getCultureArticlesByCategory("festivals");

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <SafeImage
          src={DEFAULT_PLACEHOLDER_IMAGE}
          alt="Korean culture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Culture
          </h1>
          <p className="mt-2 text-base sm:text-lg text-white/80 max-w-xl font-editorial">
            Korean fashion, nightlife, K-pop, beauty, and lifestyle
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <Breadcrumbs items={breadcrumbsCulture()} />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Korean culture goes far beyond travel basics. Here we explore fashion
          and street style, nightlife and drinking culture, K-pop and
          entertainment, beauty standards, cafe life, and seasonal festivals.
          These editorial guides connect what you see in Seoul, Busan, and Jeju
          to the trends and traditions that make Korea unique.
        </p>
      </section>

      {featured.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Featured culture articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((article) => (
              <CultureArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {kpop.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            K-pop and entertainment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {kpop.map((article) => (
              <CultureArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {fashionBeauty.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Fashion and beauty
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fashionBeauty.map((article) => (
              <CultureArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {foodNightlife.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Food and nightlife
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {foodNightlife.map((article) => (
              <CultureArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {festivals.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Seasonal events and festivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {festivals.map((article) => (
              <CultureArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          All culture articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {all.map((article) => (
            <CultureArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
