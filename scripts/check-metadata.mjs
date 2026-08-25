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

function getDescription(html) {
	for (const match of html.matchAll(/<meta\s+[^>]*>/gi)) {
		const tag = match[0];
		if (!/\bname=["']description["']/i.test(tag)) {
			continue;
		}

		const content = tag.match(/\bcontent=(["'])(.*?)\1/i)?.[2];
		return content ? decodeHtml(content.trim()) : "";
	}

	return "";
}

try {
	await access(outDir);
} catch {
	console.error(
		"Metadata check failed: out/ does not exist. Run npm run build first.",
	);
	process.exit(1);
}

const failures = [];
const routesByDescription = new Map();

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
		failures.push(
			`${route}: description length ${description.length} is outside the 50-160 character range`,
		);
	}

	const matchingRoutes = routesByDescription.get(description) ?? [];
	matchingRoutes.push(route);
	routesByDescription.set(description, matchingRoutes);
}

for (const matchingRoutes of routesByDescription.values()) {
	if (matchingRoutes.length > 1) {
		failures.push(`duplicate description on ${matchingRoutes.join(", ")}`);
	}
}

if (failures.length) {
	console.error("Metadata check failed:");
	for (const failure of failures) {
		console.error(`- ${failure}`);
	}
	process.exit(1);
}

console.log(`Metadata check passed for ${publicPages.length} public pages.`);
