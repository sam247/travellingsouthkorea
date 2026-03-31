import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Paths that must not be filtered (framework, APIs, assets). */
const SKIP_PREFIXES = ["/_next/", "/api/"] as const;

const STATIC_EXT =
  /\.(?:ico|png|jpe?g|gif|webp|avif|svg|css|js|mjs|map|woff2?|ttf|eot|json|txt|xml)$/i;

/** Legitimate crawlers — checked before block rules (many contain "bot"). */
function isAllowlistedCrawler(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return ua.includes("googlebot") || ua.includes("bingbot");
}

/** Obvious automation / scrapers — not exhaustive; keep checks cheap. */
function isBlockedUserAgent(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return (
    ua.includes("bot") ||
    ua.includes("crawler") ||
    ua.includes("spider") ||
    ua.includes("curl") ||
    ua.includes("wget") ||
    ua.includes("python") ||
    ua.includes("scrapy") ||
    ua.includes("axios") ||
    ua.includes("node-fetch") ||
    ua.includes("httpclient") ||
    ua.includes("go-http-client")
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  for (const prefix of SKIP_PREFIXES) {
    if (pathname.startsWith(prefix)) {
      return NextResponse.next();
    }
  }

  if (STATIC_EXT.test(pathname)) {
    return NextResponse.next();
  }

  const ua = request.headers.get("user-agent") ?? "";

  if (isAllowlistedCrawler(ua)) {
    return NextResponse.next();
  }

  if (isBlockedUserAgent(ua)) {
    return new NextResponse(null, { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run on HTML-style routes; exclude Next static chunks, images, and common static files.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpe?g|gif|webp|avif|svg|css|js|mjs|woff2?|ttf|eot|map|json)$).*)",
  ],
};
