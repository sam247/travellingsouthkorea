/**
 * Batch-generate hero images from data/imagePrompts.ts.
 * Skips items whose file already exists. Writes to public/images/ using paths from lib/imagePaths.
 *
 * Usage: OPENAI_API_KEY=sk-... npx tsx scripts/generateImages.ts [--limit 50] [--types city,neighbourhood,guide,culture,cinema]
 * Requires OPENAI_API_KEY in env. Document in README.
 */

import * as fs from "fs";
import * as path from "path";
import {
  getCityImagePath,
  getNeighbourhoodImagePath,
  getGuideImagePath,
  getCultureImagePath,
  getCinemaImagePath,
} from "../lib/imagePaths";
import { imagePrompts } from "../data/imagePrompts";

const DEFAULT_LIMIT = 50;
const PUBLIC_DIR = path.join(process.cwd(), "public");

type QueuedItem = { absolutePath: string; relativePath: string; prompt: string };

function parseArgs(): { limit: number; types: Set<string> } {
  const args = process.argv.slice(2);
  let limit = DEFAULT_LIMIT;
  const types = new Set<string>(["city", "neighbourhood", "guide", "culture", "cinema"]);
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--limit" && args[i + 1] != null) {
      limit = Math.max(1, parseInt(args[i + 1], 10) || DEFAULT_LIMIT);
      i++;
    } else if (args[i] === "--types" && args[i + 1] != null) {
      types.clear();
      args[i + 1].split(",").forEach((t) => t.trim() && types.add(t.trim()));
      i++;
    }
  }
  return { limit, types };
}

function toAbsolute(relativePath: string): string {
  return path.join(PUBLIC_DIR, relativePath.replace(/^\//, ""));
}

function exists(relativePath: string): boolean {
  return fs.existsSync(toAbsolute(relativePath));
}

function buildQueue(limit: number, typeFilter: Set<string>): QueuedItem[] {
  const queue: QueuedItem[] = [];

  const add = (relativePath: string, prompt: string) => {
    if (exists(relativePath)) return;
    queue.push({
      absolutePath: toAbsolute(relativePath),
      relativePath,
      prompt,
    });
  };

  if (typeFilter.has("city")) {
    for (const p of imagePrompts.cities) {
      if (queue.length >= limit) break;
      add(getCityImagePath(p.citySlug), p.heroPrompt);
    }
  }
  if (typeFilter.has("neighbourhood") && queue.length < limit) {
    for (const p of imagePrompts.neighbourhoods) {
      if (queue.length >= limit) break;
      add(
        getNeighbourhoodImagePath(p.citySlug, p.neighbourhoodSlug),
        p.heroPrompt
      );
    }
  }
  if (typeFilter.has("guide") && queue.length < limit) {
    for (const p of imagePrompts.guides) {
      if (queue.length >= limit) break;
      add(getGuideImagePath(p.guideSlug, "hero"), p.heroPrompt);
    }
  }
  if (typeFilter.has("culture") && queue.length < limit) {
    for (const p of imagePrompts.culture) {
      if (queue.length >= limit) break;
      add(getCultureImagePath(p.cultureSlug, "hero"), p.heroPrompt);
    }
  }
  if (typeFilter.has("cinema") && queue.length < limit) {
    for (const p of imagePrompts.cinema) {
      if (queue.length >= limit) break;
      add(getCinemaImagePath(p.cinemaSlug, "hero"), p.heroPrompt);
    }
  }

  return queue.slice(0, limit);
}

async function generateImage(prompt: string): Promise<Buffer> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set. Set it in the environment to run this script.");
  }

  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1792x1024",
      response_format: "url",
      quality: "standard",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenAI API error ${res.status}: ${err}`);
  }

  const data = (await res.json()) as { data?: Array<{ url?: string }> };
  const url = data.data?.[0]?.url;
  if (!url) throw new Error("No image URL in OpenAI response");

  const imgRes = await fetch(url);
  if (!imgRes.ok) throw new Error(`Failed to fetch image: ${imgRes.status}`);
  const arrayBuffer = await imgRes.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

function ensureDirFor(filePath: string): void {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function main(): Promise<void> {
  const { limit, types } = parseArgs();
  console.log(`Generate up to ${limit} hero images (types: ${Array.from(types).join(", ")})`);

  const queue = buildQueue(limit, types);
  if (queue.length === 0) {
    console.log("No images to generate (all exist or none match filter).");
    return;
  }

  console.log(`Generating ${queue.length} images...`);
  const generated: string[] = [];
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    process.stdout.write(`  [${i + 1}/${queue.length}] ${item.relativePath} ... `);
    try {
      const buffer = await generateImage(item.prompt);
      ensureDirFor(item.absolutePath);
      fs.writeFileSync(item.absolutePath, buffer);
      generated.push(item.relativePath);
      console.log("ok");
    } catch (e) {
      console.log("error:", e instanceof Error ? e.message : String(e));
    }
    // Avoid rate limits
    if (i < queue.length - 1) {
      await new Promise((r) => setTimeout(r, 1500));
    }
  }

  console.log(`Done. Generated ${generated.length} images.`);
  if (generated.length > 0) {
    const manifestPath = path.join(process.cwd(), "scripts", "generated-images-manifest.txt");
    fs.writeFileSync(manifestPath, generated.join("\n"), "utf8");
    console.log(`Manifest written to ${manifestPath}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
