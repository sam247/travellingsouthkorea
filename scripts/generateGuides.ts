/**
 * Bulk AI narrative generation for all guides. Run manually: npm run generate-content
 * Writes data/generated/generatedGuides.ts. Does not run during build or at runtime.
 */

import * as fs from "fs";
import * as path from "path";
import { guides } from "../data/guides";
import { getCityBySlug } from "../data/cities";
import {
  generateGuideNarrative,
  type GeneratedGuideContent,
} from "../lib/ai/generateNarrative";

const RATE_LIMIT_MS_MIN = 500;
const RATE_LIMIT_MS_MAX = 1000;

function delay(): Promise<void> {
  const ms = RATE_LIMIT_MS_MIN + Math.random() * (RATE_LIMIT_MS_MAX - RATE_LIMIT_MS_MIN);
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const results: Record<string, GeneratedGuideContent> = {};
  const root = process.cwd();
  const outPath = path.join(root, "data", "generated", "generatedGuides.ts");

  console.log(`Generating narratives for ${guides.length} guides...`);

  for (let i = 0; i < guides.length; i++) {
    const guide = guides[i];
    const city = getCityBySlug(guide.city);
    if (!city) {
      console.warn(`[generateGuides] No city for guide ${guide.slug}, skipping`);
      continue;
    }

    process.stdout.write(`  [${i + 1}/${guides.length}] ${guide.slug} ... `);
    const content = await generateGuideNarrative(guide, city);
    if (content) {
      results[guide.slug] = content;
      console.log("ok");
    } else {
      console.log("skip (no content)");
    }

    await delay();
  }

  const header = `import type { GeneratedGuideContent } from "@/lib/ai/generateNarrative";

/**
 * AI-generated narrative content for guide pages.
 * Populated by running: npm run generate-content
 * Key = guide.slug
 */
`;
  const exportLine = `export const generatedGuides: Record<string, GeneratedGuideContent> = ${JSON.stringify(results, null, 2)};\n`;
  const content = header + exportLine;

  fs.writeFileSync(outPath, content, "utf8");
  console.log(`\nWrote ${Object.keys(results).length} entries to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
