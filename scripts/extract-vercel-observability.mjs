#!/usr/bin/env node

const deploymentUrl =
  process.argv[2] ?? process.env.VERCEL_OBSERVABILITY_DEPLOYMENT_URL;

if (!deploymentUrl) {
  console.error(
    "Usage: node scripts/extract-vercel-observability.mjs <deployment-url>",
  );
  console.error(
    "Example: node scripts/extract-vercel-observability.mjs https://brianlidesign.vercel.app",
  );
  process.exit(1);
}

const origin = deploymentUrl.replace(/\/$/, "");
const html = await fetch(`${origin}/`).then((response) => {
  if (!response.ok) {
    throw new Error(`Failed to fetch ${origin}: ${response.status}`);
  }
  return response.text();
});

const chunkPaths = [
  ...html.matchAll(/\/_next\/static\/chunks\/[a-z0-9_.-]+\.js/g),
].map((match) => match[0]);

if (chunkPaths.length === 0) {
  throw new Error("No Next.js chunks found in deployment HTML.");
}

for (const chunkPath of chunkPaths) {
  const chunk = await fetch(`${origin}${chunkPath}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch ${chunkPath}: ${response.status}`);
    }
    return response.text();
  });

  const match = chunk.match(
    /\{"analytics":\{[^}]+\},"speedInsights":\{[^}]+\}\}/,
  );

  if (!match) {
    continue;
  }

  const config = JSON.parse(match[0]);
  const analyticsId = config.analytics.scriptSrc.replace("/script.js", "");
  const speedInsightsId = config.speedInsights.scriptSrc.replace(
    "/script.js",
    "",
  );

  console.log("Observability config from deployment:\n");
  console.log(JSON.stringify(config, null, 2));
  console.log("\nSuggested env vars for GitHub Pages builds:\n");
  console.log(`NEXT_PUBLIC_VERCEL_OBSERVABILITY_ORIGIN=${origin}`);
  console.log(`NEXT_PUBLIC_VERCEL_ANALYTICS_ID=${analyticsId}`);
  console.log(`NEXT_PUBLIC_VERCEL_SPEED_INSIGHTS_ID=${speedInsightsId}`);
  process.exit(0);
}

throw new Error(
  "Observability config not found. Enable Web Analytics and Speed Insights, redeploy, then retry.",
);
