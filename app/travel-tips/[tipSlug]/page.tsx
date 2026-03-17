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

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <SafeImage
          src={tip.image}
          alt={tip.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {tip.title}
          </h1>
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
          {renderTipContent(tip.content)}
        </div>
      </section>

      {relatedTips.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Related Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {relatedTips.map((t) => (
              <Link key={t.slug} href={getTravelTipPath(t.slug)}>
                <TravelTipCard tip={t} />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
