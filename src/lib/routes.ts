export const routes = {
  home: "/",
  caseStudies: "/case-studies",
  keres: "/case-studies/keres",
  rebalance: "/case-studies/rebalance",
  spontus: "/case-studies/spontus",
  flipThatDigit: "/case-studies/flip-that-digit",
  operationSurf: "/case-studies/operation-surf",
  vybeTutor: "/case-studies/vybetutor",
  debugLog: "/debug-log",
  writing: "/writing",
  about: "/about",
  resume: "/resume",
  resumePdf: "/assets/documents/Brian_Li_Resume.pdf",
} as const;

export type RouteKey = keyof typeof routes;
