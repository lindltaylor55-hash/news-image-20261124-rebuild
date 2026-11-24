// News-image entry for the make.fun competition "news-image-20261124".
// This program places the finished newspaper-front-page image (entry.png,
// headlined "TUESDAY 24 NOVEMBER 2026") into the output directory so the
// competition harness can pick it up. Node 22, standard library only.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.png");
copyFileSync(join(here, "entry.png"), outputPath);
console.log(`Wrote ${outputPath} (${statSync(outputPath).size} bytes)`);
