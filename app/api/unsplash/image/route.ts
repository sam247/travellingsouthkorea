import { NextResponse } from "next/server";
import { getCachedUnsplashPhoto } from "@/lib/unsplashApi";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim();
  if (!q) {
    return NextResponse.json({ error: "Missing q" }, { status: 400 });
  }

  const photo = await getCachedUnsplashPhoto(q);
  if (!photo) {
    return NextResponse.json({ error: "No result" }, { status: 404 });
  }

  return NextResponse.json({
    url: photo.url,
    userName: photo.attribution.userName,
    userHtml: photo.attribution.userHtml,
    photoHtml: photo.attribution.photoHtml,
  });
}
