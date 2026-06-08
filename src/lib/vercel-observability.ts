const observabilityOrigin = "https://brianlidesign.vercel.app";

/**
 * Vercel injects relative observability routes at build time. GitHub Pages builds
 * need absolute URLs that point at the linked Vercel project's analytics routes.
 * Paths come from the production Vercel deployment (Web Analytics + Speed Insights).
 */
export const externalAnalyticsProps = {
  scriptSrc: `${observabilityOrigin}/4a395dc968fa45e9/script.js`,
  viewEndpoint: `${observabilityOrigin}/4a395dc968fa45e9/view`,
  eventEndpoint: `${observabilityOrigin}/4a395dc968fa45e9/event`,
  sessionEndpoint: `${observabilityOrigin}/4a395dc968fa45e9/session`,
} as const;

export const externalSpeedInsightsProps = {
  scriptSrc: `${observabilityOrigin}/5e63b2e6336a67ae/script.js`,
  endpoint: `${observabilityOrigin}/5e63b2e6336a67ae/vitals`,
} as const;

export function isVercelBuild() {
  return process.env.VERCEL === "1";
}
