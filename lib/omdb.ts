import { cache } from "react";

/** OMDb API title response (subset we use). */
export interface OmdbApiTitle {
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Poster?: string;
  imdbRating?: string;
  imdbVotes?: string;
  Response?: string;
  Error?: string;
}

function normalizeImdbId(id: string): string {
  const t = id.trim();
  return t.startsWith("tt") ? t : `tt${t}`;
}

async function fetchOmdbByImdbIdUncached(
  imdbId: string | undefined
): Promise<OmdbApiTitle | null> {
  if (!imdbId) return null;
  const apiKey = process.env.OMDB_API_KEY;
  if (!apiKey) return null;

  const i = normalizeImdbId(imdbId);
  const url = `https://www.omdbapi.com/?${new URLSearchParams({ i, apikey: apiKey })}`;
  const res = await fetch(url, { next: { revalidate: 86_400 } });
  if (!res.ok) return null;
  const data = (await res.json()) as OmdbApiTitle;
  if (data.Response !== "True" && data.Error) return null;
  return data;
}

/** Deduplicated per request; uses `OMDB_API_KEY`. */
export const getCachedOmdbFilm = cache(fetchOmdbByImdbIdUncached);

export function pickOmdbPoster(omdb: OmdbApiTitle | null): string | null {
  if (!omdb?.Poster || omdb.Poster === "N/A") return null;
  return omdb.Poster;
}

export function pickFilmHeroImage(
  filmHeroImage: string,
  omdb: OmdbApiTitle | null
): string {
  return pickOmdbPoster(omdb) ?? filmHeroImage;
}
