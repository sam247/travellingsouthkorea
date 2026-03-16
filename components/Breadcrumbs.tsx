import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://travellingsouthkorea.com";

export interface BreadcrumbEntry {
  label: string;
  href?: string;
}

function breadcrumbListJsonLd(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href && { item: `${baseUrl}${item.href.startsWith("/") ? item.href : `/${item.href}`}` }),
    })),
  };
}

export function Breadcrumbs({ items }: { items: BreadcrumbEntry[] }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd(items)) }}
      />
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <BreadcrumbItem key={i}>
                {i > 0 && <BreadcrumbSeparator />}
                {isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={item.href ?? "/"}>{item.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
