#!/usr/bin/env node

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "out");

const pagesToCheck = [
  path.join(outDir, "index.html"),
  path.join(outDir, "case-studies.html"),
];

const requiredFragments = [
  "/_vercel/insights/script.js",
  "/_vercel/speed-insights/script.js",
];

const failures = [];

for (const pagePath of pagesToCheck) {
  try {
    await readFile(pagePath, "utf8");
  } catch {
    if (pagePath.endsWith("case-studies.html")) {
      continue;
    }
    failures.push(`Missing build output: ${path.relative(outDir, pagePath)}`);
  }
}

async function collectJavaScriptFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectJavaScriptFiles(entryPath)));
    } else if (entry.isFile() && entry.name.endsWith(".js")) {
      files.push(entryPath);
    }
  }

  return files;
}

const chunksDir = path.join(outDir, "_next", "static", "chunks");
let bundle = "";

try {
  const chunkPaths = await collectJavaScriptFiles(chunksDir);
  bundle = (await Promise.all(chunkPaths.map((chunkPath) => readFile(chunkPath, "utf8")))).join(
    "\n",
  );
} catch {
  failures.push("Missing built JavaScript chunks");
}

for (const fragment of requiredFragments) {
  if (!bundle.includes(fragment)) {
    failures.push(`Built JavaScript: expected "${fragment}"`);
  }
}

if (failures.length > 0) {
  console.error("Observability bridge check failed:\n");
  for (const failure of failures) {
    console.error(`  - ${failure}`);
  }
  console.error("\nRun `npm run build` first, then verify src/app/layout.tsx.");
  process.exit(1);
}

console.log("Native Vercel observability routes are present.");
