import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const publicDir = path.join(repoRoot, "public");

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov"]);

const LIMITS = {
  image: 2 * 1024 * 1024,
  video: 50 * 1024 * 1024,
};

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }

  return `${(bytes / 1024).toFixed(1)} KB`;
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

const failures = [];

for await (const filePath of walk(publicDir)) {
  const extension = path.extname(filePath).toLowerCase();
  const mediaType = IMAGE_EXTENSIONS.has(extension)
    ? "image"
    : VIDEO_EXTENSIONS.has(extension)
      ? "video"
      : null;

  if (!mediaType) {
    continue;
  }

  const fileStat = await stat(filePath);
  const limit = LIMITS[mediaType];

  if (fileStat.size > limit) {
    failures.push({
      filePath: path.relative(repoRoot, filePath),
      limit,
      size: fileStat.size,
    });
  }
}

if (failures.length) {
  console.error("Asset budget check failed:");
  for (const failure of failures) {
    console.error(
      `- ${failure.filePath}: ${formatBytes(failure.size)} exceeds ${formatBytes(failure.limit)}`,
    );
  }
  process.exit(1);
}

console.log("Asset budget check passed.");
