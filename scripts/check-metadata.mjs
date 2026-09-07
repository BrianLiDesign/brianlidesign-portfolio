import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const outDir = path.join(repoRoot, "out");

const publicPages = [
  ["/", "index.html"],
  ["/about", "about.html"],
  ["/case-studies", "case-studies.html"],
  ["/case-studies/keres", "case-studies/keres.html"],
  ["/case-studies/rebalance", "case-studies/rebalance.html"],
  ["/case-studies/spontus", "case-studies/spontus.html"],
  ["/case-studies/flip-that-digit", "case-studies/flip-that-digit.html"],
  ["/case-studies/operation-surf", "case-studies/operation-surf.html"],
  ["/case-studies/vybetutor", "case-studies/vybetutor.html"],
  ["/debug-log", "debug-log.html"],
  ["/writing", "writing.html"],
  ["/resume", "resume.html"],
];

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function getAttribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}=(['"])(.*?)\\1`, "i"))?.[2] ?? "";
}

function getMetaContent(html, attribute, value) {
  for (const match of html.matchAll(/<meta\s+[^>]*>/gi)) {
    const tag = match[0];
    if (getAttribute(tag, attribute).toLowerCase() === value.toLowerCase()) {
      return decodeHtml(getAttribute(tag, "content").trim());
    }
  }

  return "";
}

function getDescription(html) {
  return getMetaContent(html, "name", "description");
}

function getCanonical(html) {
  for (const match of html.matchAll(/<link\s+[^>]*>/gi)) {
    const tag = match[0];
    if (getAttribute(tag, "rel").toLowerCase() === "canonical") {
      return decodeHtml(getAttribute(tag, "href").trim());
    }
  }

  return "";
}

function getTitle(html) {
  const title = html.match(/<title>(.*?)<\/title>/i)?.[1] ?? "";
  return decodeHtml(title.trim());
}

function normalizeUrl(value) {
  try {
    return new URL(value).toString();
  } catch {
    return value;
  }
}

try {
  await access(outDir);
} catch {
  console.error("Metadata check failed: out/ does not exist. Run npm run build first.");
  process.exit(1);
}

const failures = [];
const routesByDescription = new Map();
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://brianlidesign.vercel.app";

for (const [route, relativePath] of publicPages) {
  const outputPath = path.join(outDir, relativePath);
  let html;

  try {
    html = await readFile(outputPath, "utf8");
  } catch {
    failures.push(`${route}: missing generated file out/${relativePath}`);
    continue;
  }

  const description = getDescription(html);
  if (!description) {
    failures.push(`${route}: missing meta description`);
    continue;
  }

  if (description.length < 50 || description.length > 160) {
    failures.push(`${route}: description length ${description.length} is outside the 50-160 character range`);
  }

  const matchingRoutes = routesByDescription.get(description) ?? [];
  matchingRoutes.push(route);
  routesByDescription.set(description, matchingRoutes);

  const expectedUrl = new URL(route, siteUrl).toString();
  const canonical = getCanonical(html);
  const title = getTitle(html);
  const openGraphUrl = getMetaContent(html, "property", "og:url");
  const openGraphTitle = getMetaContent(html, "property", "og:title");
  const twitterTitle = getMetaContent(html, "name", "twitter:title");

  if (normalizeUrl(canonical) !== expectedUrl) {
    failures.push(`${route}: canonical is "${canonical || "missing"}"; expected "${expectedUrl}"`);
  }

  if (normalizeUrl(openGraphUrl) !== expectedUrl) {
    failures.push(`${route}: og:url is "${openGraphUrl || "missing"}"; expected "${expectedUrl}"`);
  }

  if (!title || openGraphTitle !== title || twitterTitle !== title) {
    failures.push(`${route}: page, Open Graph, and Twitter titles must match`);
  }
}

for (const matchingRoutes of routesByDescription.values()) {
  if (matchingRoutes.length > 1) {
    failures.push(`duplicate description on ${matchingRoutes.join(", ")}`);
  }
}

try {
  const sitemap = await readFile(path.join(outDir, "sitemap.xml"), "utf8");
  for (const [route] of publicPages) {
    const expectedUrl = new URL(route, siteUrl).toString();
    if (!sitemap.includes(`<loc>${expectedUrl}</loc>`)) {
      failures.push(`${route}: missing from sitemap.xml`);
    }
  }
} catch {
  failures.push("missing generated file out/sitemap.xml");
}

if (failures.length) {
  console.error("Metadata check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Metadata check passed for ${publicPages.length} public pages.`);
