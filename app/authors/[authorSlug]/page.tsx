import { notFound } from "next/navigation";
import { SafeImage } from "@/components/SafeImage";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideCard } from "@/components/GuideCard";
import { ItineraryCard } from "@/components/ItineraryCard";
import { TravelTipCard } from "@/components/TravelTipCard";
import { getAuthorBySlug } from "@/data/authors";
import {
  getGuidesByAuthorForPage,
  getItinerariesByAuthorForPage,
  getTravelTipsByAuthorForPage,
} from "@/lib/queries";
import { breadcrumbsAuthor } from "@/lib/breadcrumbs";
import { getAuthorPath, getTravelTipPath } from "@/lib/canonical";

interface PageProps {
  params: Promise<{ authorSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { authorSlug } = await params;
  const author = getAuthorBySlug(authorSlug);
  if (!author) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = base + getAuthorPath(authorSlug);
  return {
    title: `${author.name} | Authors | South Korea Travel`,
    description: author.bio,
    alternates: { canonical },
    openGraph: { title: author.name, description: author.bio },
  };
}

export async function generateStaticParams() {
  const { authors } = await import("@/data/authors");
  return authors.map((a) => ({ authorSlug: a.slug }));
}

export default async function AuthorPage({ params }: PageProps) {
  const { authorSlug } = await params;
  const author = getAuthorBySlug(authorSlug);
  if (!author) notFound();

  const authorGuides = getGuidesByAuthorForPage(author.slug);
  const authorItineraries = getItinerariesByAuthorForPage(author.slug);
  const authorTips = getTravelTipsByAuthorForPage(author.slug);

  const breadcrumbItems = breadcrumbsAuthor(author.name);

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 sm:pt-28 max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mt-8 flex flex-col sm:flex-row items-start gap-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0">
            <SafeImage
              src={author.image}
              alt={author.name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{author.name}</h1>
            <p className="text-sm text-primary font-medium mt-1">{author.location}</p>
            <p className="text-base text-muted-foreground mt-3 leading-relaxed max-w-lg">
              {author.bio}
            </p>
            {author.expertise && (
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                <span className="font-medium text-foreground">Expertise:</span> {author.expertise}
              </p>
            )}
            {author.yearsInKorea != null && (
              <p className="text-sm text-muted-foreground mt-1 max-w-lg">
                <span className="font-medium text-foreground">Years in Korea:</span> {author.yearsInKorea}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mt-4">
              {author.topics.map((topic) => (
                <span
                  key={topic}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {authorGuides.length > 0 && (
          <section className="py-10 sm:py-14">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Guides by {author.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {authorGuides.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </section>
        )}

        {authorItineraries.length > 0 && (
          <section className="pb-10 sm:pb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Itineraries by {author.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {authorItineraries.map((it) => (
                <ItineraryCard key={it.slug} itinerary={it} />
              ))}
            </div>
          </section>
        )}

        {authorTips.length > 0 && (
          <section className="pb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Travel Tips by {author.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {authorTips.map((t) => (
                <Link key={t.slug} href={getTravelTipPath(t.slug)}>
                  <TravelTipCard tip={t} />
                </Link>
              ))}
            </div>
          </section>
        )}

        {authorGuides.length === 0 && authorItineraries.length === 0 && authorTips.length === 0 && (
          <p className="text-muted-foreground py-10">More from this author coming soon.</p>
        )}
      </div>
    </div>
  );
}
