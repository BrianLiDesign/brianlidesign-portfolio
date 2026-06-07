import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const outDir = path.join(repoRoot, "out");
const publicDir = path.join(repoRoot, "public");

const IGNORED_PREFIXES = ["/_next/"];
const IGNORED_PROTOCOLS = ["http:", "https:", "mailto:", "tel:", "data:", "blob:", "javascript:"];

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

async function pathExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function* walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      yield* walk(entryPath);
      continue;
    }

    if (entry.isFile()) {
      yield entryPath;
    }
  }
}

function stripUrlParts(url) {
  const hashIndex = url.indexOf("#");
  const queryIndex = url.indexOf("?");
  const cutAt = [hashIndex, queryIndex].filter((index) => index >= 0).sort((a, b) => a - b)[0];

  return cutAt === undefined ? url : url.slice(0, cutAt);
}

function getHash(url) {
  const hashIndex = url.indexOf("#");
  if (hashIndex < 0) {
    return "";
  }

  return url.slice(hashIndex + 1).split("?")[0];
}

function shouldIgnore(rawUrl) {
  if (!rawUrl) {
    return true;
  }

  const trimmed = rawUrl.trim();
  if (!trimmed) {
    return true;
  }

  for (const protocol of IGNORED_PROTOCOLS) {
    if (trimmed.toLowerCase().startsWith(protocol)) {
      return true;
    }
  }

  return IGNORED_PREFIXES.some((prefix) => trimmed.startsWith(prefix));
}

function decodePathname(pathname) {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

function htmlCandidatesForPath(urlPath) {
  const decodedPath = decodePathname(stripUrlParts(urlPath));

  if (decodedPath === "/" || decodedPath === "") {
    return [path.join(outDir, "index.html")];
  }

  const withoutLeadingSlash = decodedPath.replace(/^\/+/, "");
  const candidates = [path.join(outDir, withoutLeadingSlash)];

  if (!path.extname(withoutLeadingSlash)) {
    candidates.push(path.join(outDir, `${withoutLeadingSlash}.html`));
    candidates.push(path.join(outDir, withoutLeadingSlash, "index.html"));
  }

  return candidates;
}

async function resolveOutputPath(urlPath) {
  const decodedPath = decodePathname(stripUrlParts(urlPath));
  const withoutLeadingSlash = decodedPath.replace(/^\/+/, "");
  const candidates = htmlCandidatesForPath(decodedPath);

  candidates.push(path.join(publicDir, withoutLeadingSlash));

  for (const candidate of candidates) {
    if (await pathExists(candidate)) {
      return candidate;
    }
  }

  return null;
}

function getIds(html) {
  const ids = new Set();
  const idRegex = /\bid=(["'])(.*?)\1/gi;

  for (const match of html.matchAll(idRegex)) {
    ids.add(match[2]);
  }

  return ids;
}

function getAttributeUrls(html) {
  const urls = [];
  const attributeRegex = /\b(?:href|src|poster)=(["'])(.*?)\1/gi;
  const srcsetRegex = /\bsrcset=(["'])(.*?)\1/gi;

  for (const match of html.matchAll(attributeRegex)) {
    urls.push(match[2]);
  }

  for (const match of html.matchAll(srcsetRegex)) {
    const candidates = match[2]
      .split(",")
      .map((part) => part.trim().split(/\s+/)[0])
      .filter(Boolean);
    urls.push(...candidates);
  }

  return urls;
}

const htmlFiles = [];
const htmlByPath = new Map();
const idsByPath = new Map();

if (!(await pathExists(outDir))) {
  console.error("Link check failed: out/ does not exist. Run npm run build first.");
  process.exit(1);
}

for await (const filePath of walk(outDir)) {
  if (path.extname(filePath).toLowerCase() === ".html") {
    htmlFiles.push(filePath);
  }
}

for (const filePath of htmlFiles) {
  const html = await readFile(filePath, "utf8");
  htmlByPath.set(filePath, html);
  idsByPath.set(filePath, getIds(html));
}

const failures = [];

for (const filePath of htmlFiles) {
  const html = htmlByPath.get(filePath);
  const relativeHtmlPath = toPosix(path.relative(repoRoot, filePath));
  const urls = getAttributeUrls(html);

  for (const rawUrl of urls) {
    const url = rawUrl.trim();

    if (shouldIgnore(url)) {
      continue;
    }

    if (url.startsWith("#")) {
      const id = getHash(url);
      if (id && !idsByPath.get(filePath).has(id)) {
        failures.push(`${relativeHtmlPath}: missing same-page id "#${id}"`);
      }
      continue;
    }

    if (!url.startsWith("/")) {
      continue;
    }

    const targetPath = stripUrlParts(url);
    const target = await resolveOutputPath(targetPath);

    if (!target) {
      failures.push(`${relativeHtmlPath}: missing local target "${url}"`);
      continue;
    }

    const id = getHash(url);
    if (!id) {
      continue;
    }

    const targetHtml = htmlByPath.has(target)
      ? target
      : (await Promise.all(htmlCandidatesForPath(targetPath).map(async (candidate) => (
          (await pathExists(candidate)) ? candidate : null
        )))).find(Boolean);

    if (!targetHtml) {
      failures.push(`${relativeHtmlPath}: hash "${url}" points at a non-HTML target`);
      continue;
    }

    if (!idsByPath.get(targetHtml)?.has(id)) {
      failures.push(`${relativeHtmlPath}: missing id "#${id}" in "${toPosix(path.relative(repoRoot, targetHtml))}"`);
    }
  }
}

if (failures.length) {
  console.error("Internal link check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Internal link check passed.");
