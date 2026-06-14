#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "out");

const defaultOrigin = "brianlidesign.vercel.app";
const defaultAnalyticsId = "4a395dc968fa45e9";
const defaultSpeedInsightsId = "5e63b2e6336a67ae";

const origin =
  process.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_ORIGIN?.replace(
    /^https?:\/\//,
    "",
  ) ?? defaultOrigin;
const analyticsId =
  process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID ?? defaultAnalyticsId;
const speedInsightsId =
  process.env.NEXT_PUBLIC_VERCEL_SPEED_INSIGHTS_ID ?? defaultSpeedInsightsId;

const pagesToCheck = [
  path.join(outDir, "index.html"),
  path.join(outDir, "case-studies.html"),
];

const requiredFragments = [
  origin,
  analyticsId,
  speedInsightsId,
  `${speedInsightsId}/vitals`,
  `${analyticsId}/script.js`,
];

const failures = [];

for (const pagePath of pagesToCheck) {
  let html;

  try {
    html = await readFile(pagePath, "utf8");
  } catch (error) {
    if (pagePath.endsWith("case-studies.html")) {
      continue;
    }
    failures.push(`Missing build output: ${path.relative(outDir, pagePath)}`);
    continue;
  }

  const label = path.relative(outDir, pagePath);

  for (const fragment of requiredFragments) {
    if (!html.includes(fragment)) {
      failures.push(`${label}: expected "${fragment}" in HTML`);
    }
  }
}

if (failures.length > 0) {
  console.error("Observability bridge check failed:\n");
  for (const failure of failures) {
    console.error(`  - ${failure}`);
  }
  console.error(
    "\nRun `npm run build` first, then verify src/lib/vercel-observability.ts or NEXT_PUBLIC_VERCEL_* env vars.",
  );
  process.exit(1);
}

console.log(
  `Observability bridge OK (${origin}, analytics ${analyticsId}, speed insights ${speedInsightsId}).`,
);
