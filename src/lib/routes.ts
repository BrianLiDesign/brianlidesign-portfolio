export const routes = {
  home: "/",
  caseStudies: "/case-studies",
  rebalance: "/case-studies/rebalance",
  flipThatDigit: "/case-studies/flip-that-digit",
  operationSurf: "/case-studies/operation-surf",
  debugLog: "/debug-log",
  writing: "/writing",
  about: "/about",
  resume: "/assets/documents/brian-li-resume.pdf",
} as const;

export type RouteKey = keyof typeof routes;
