import * as fs from "fs";
import * as path from "path";
import { cities } from "../data/cities";
import { regions } from "../data/regions";
import { neighbourhoods } from "../data/neighbourhoods";
import { venues } from "../data/venues";
import { DEFAULT_PLACEHOLDER_IMAGE } from "../lib/imageConfig";

type Row = { label: string; image: string };

function isUnsplashUrl(src: string): boolean {
  return src.startsWith("https://images.unsplash.com/");
}

function isLocalImage(src: string): boolean {
  return src.startsWith("/images/");
}

function checkRows(rows: Row[], root: string): string[] {
  const errors: string[] = [];

  for (const row of rows) {
    const img = row.image?.trim();
    if (!img) {
      errors.push(`${row.label}: missing image`);
      continue;
    }

    if (img === DEFAULT_PLACEHOLDER_IMAGE) {
      errors.push(`${row.label}: still uses DEFAULT_PLACEHOLDER_IMAGE`);
      continue;
    }

    if (isLocalImage(img)) {
      const abs = path.join(root, "public", img);
      if (!fs.existsSync(abs)) {
        errors.push(`${row.label}: missing local file ${img}`);
      }
      continue;
    }

    if (isUnsplashUrl(img)) continue;

    errors.push(`${row.label}: unsupported image url ${img}`);
  }

  return errors;
}

async function main() {
  const root = process.cwd();

  const rows: Row[] = [
    ...cities.map((c) => ({ label: `city:${c.slug}`, image: c.image })),
    ...regions.map((r) => ({ label: `region:${r.slug}`, image: r.image })),
    ...neighbourhoods.map((n) => ({
      label: `neighbourhood:${n.citySlug}:${n.slug}`,
      image: n.image,
    })),
    ...venues.map((v) => ({ label: `venue:${v.slug}`, image: v.image })),
  ];

  const errors = checkRows(rows, root);

  if (errors.length) {
    console.error(`validate-images failed with ${errors.length} issue(s):`);
    for (const e of errors) console.error(`- ${e}`);
    process.exit(1);
  }

  console.log(`validate-images ok (${rows.length} images checked)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

