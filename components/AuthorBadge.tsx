import Link from "next/link";
import { getAuthorBySlug } from "@/data/authors";
import { getAuthorPath } from "@/lib/canonical";
import Image from "next/image";

export function AuthorBadge({
  authorSlug,
  updatedDate,
}: {
  authorSlug: string;
  updatedDate: string;
}) {
  const author = getAuthorBySlug(authorSlug);
  if (!author) return null;

  const formatted = new Date(updatedDate).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  const href = getAuthorPath(author.slug);

  return (
    <div className="flex items-center gap-3">
      <Link href={href}>
        <Image
          src={author.image}
          alt={author.name}
          width={32}
          height={32}
          className="w-8 h-8 rounded-full object-cover"
        />
      </Link>
      <div className="text-sm">
        <Link
          href={href}
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          {author.name}
        </Link>
        <span className="text-muted-foreground"> · Updated {formatted}</span>
      </div>
    </div>
  );
}
