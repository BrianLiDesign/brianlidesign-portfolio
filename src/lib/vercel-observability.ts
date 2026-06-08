const defaultObservabilityOrigin = "https://brianlidesign.vercel.app";

const defaultAnalyticsId = "4a395dc968fa45e9";
const defaultSpeedInsightsId = "5e63b2e6336a67ae";

function observabilityOrigin() {
  return (
    process.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_ORIGIN ??
    defaultObservabilityOrigin
  );
}

function analyticsId() {
  return (
    process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID ?? defaultAnalyticsId
  );
}

function speedInsightsId() {
  return (
    process.env.NEXT_PUBLIC_VERCEL_SPEED_INSIGHTS_ID ?? defaultSpeedInsightsId
  );
}

function observabilityUrl(path: string) {
  return `${observabilityOrigin()}/${path}`;
}

/**
 * Vercel injects relative observability routes at build time. GitHub Pages builds
 * need absolute URLs that point at the linked Vercel project's analytics routes.
 * Override via NEXT_PUBLIC_VERCEL_OBSERVABILITY_ORIGIN and the *\_ID env vars if
 * paths change after re-enabling analytics in the Vercel dashboard.
 */
export const externalAnalyticsProps = {
  scriptSrc: observabilityUrl(`${analyticsId()}/script.js`),
  viewEndpoint: observabilityUrl(`${analyticsId()}/view`),
  eventEndpoint: observabilityUrl(`${analyticsId()}/event`),
  sessionEndpoint: observabilityUrl(`${analyticsId()}/session`),
} as const;

export const externalSpeedInsightsProps = {
  scriptSrc: observabilityUrl(`${speedInsightsId()}/script.js`),
  endpoint: observabilityUrl(`${speedInsightsId()}/vitals`),
} as const;

export function isVercelBuild() {
  return process.env.VERCEL === "1";
}
