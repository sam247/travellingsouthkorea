import { NextResponse } from "next/server";
import {
  getCinemaPath,
  getCinemaFilmPath,
  getCinemaDirectorPath,
  getCinemaLocationPath,
  getCinemaArticlePath,
} from "@/lib/canonical";
import { getAllFilms } from "@/data/films";
import { getAllDirectors } from "@/data/directors";
import { getAllFilmLocations } from "@/data/filmLocations";
import { getAllCinemaArticles } from "@/data/cinemaArticles";
import {
  urlEntry,
  URLSET_HEADER,
  URLSET_FOOTER,
} from "@/lib/sitemapHelpers";

const lastMod = new Date();

export function GET() {
  const entries: string[] = [urlEntry(getCinemaPath(), lastMod)];

  getAllFilms().forEach((f) =>
    entries.push(urlEntry(getCinemaFilmPath(f.slug), lastMod))
  );
  getAllDirectors().forEach((d) =>
    entries.push(urlEntry(getCinemaDirectorPath(d.slug), lastMod))
  );
  getAllFilmLocations().forEach((l) =>
    entries.push(urlEntry(getCinemaLocationPath(l.slug), lastMod))
  );
  getAllCinemaArticles().forEach((a) =>
    entries.push(urlEntry(getCinemaArticlePath(a.slug), lastMod))
  );

  const body = URLSET_HEADER + entries.join("") + URLSET_FOOTER;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
