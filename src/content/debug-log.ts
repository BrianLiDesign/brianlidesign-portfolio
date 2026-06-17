export type DebugLogEntry = {
  slug: string;
  label: string;
  title: string;
  thesis: string;
  stages: string[];
  tags: string[];
  caseStudyHref: string;
  decisionRecord: {
    context: string;
    problem: string;
    decision: string;
    tradeoff: string;
    result: string;
    learned: string;
  };
  notes: string[];
};

export const debugLogEntries: DebugLogEntry[] = [
  {
    slug: "rebalance-calibration-failure",
    label: "Entry 001 · ReBalance calibration failure",
    title: "ReBalance calibration failure",
    thesis:
      "When the signal got noisy, I stopped tuning the UI and went back to the measurement model.",
    stages: ["failure", "calibration", "calmer cue"],
    tags: ["calibration", "hardware constraints", "feedback"],
    caseStudyHref: "/case-studies/rebalance",
    decisionRecord: {
      context: "FSR pressure values moved even when the user was trying to hold a neutral stance.",
      problem: "The UI cue made small measurement changes feel like urgent corrections.",
      decision: "Calibrate the baseline first, then expose raw jitter separately from the user-facing cue.",
      tradeoff: "The interface became more explicit and less visually simple, but it told the truth about the signal.",
      result: "The public cue could stay calm while the raw stream remained available for debugging.",
      learned: "Noisy hardware often needs a better measurement model before it needs better polish.",
    },
    notes: [
      "Raw pressure values drifted enough to make the correction cue feel nervous.",
      "The fix was not more visual polish — it was calibration: separate noisy input from readable output.",
      "Next pass: tune dead zone, expose raw strip, keep the user cue calm.",
    ],
  },
  {
    slug: "flip-that-digit-debounce",
    label: "Entry 002 · Flip That Digit debounce",
    title: "Flip That Digit — debounce & release timing",
    thesis:
      "Precise user input requires accounting for mechanical bounce and release timing, not just boolean state transitions.",
    stages: ["spec", "debounce", "timing"],
    tags: ["debounce", "state machine", "hardware constraints"],
    caseStudyHref: "/case-studies/flip-that-digit",
    decisionRecord: {
      context: "Basys3 switches and buttons do not behave like ideal digital events.",
      problem: "Held or bouncing inputs could count twice or skip the intended release boundary.",
      decision: "Model input as a release-aware state machine before updating game score.",
      tradeoff: "The loop has more states, but each game event has a clear physical meaning.",
      result: "Input handling became deterministic enough for constrained gameplay.",
      learned: "Reliable embedded interaction starts by modeling the physical transition.",
    },
    notes: [
      "Initial implementation treated button presses as clean edges; gameplay suffered from double-count and missed releases.",
      "Added debounce state with a small hold window and explicit release detection to make single presses reliable.",
      "Lesson: model the physical world (bounce, hold, release) in the state machine rather than trying to filter it downstream.",
    ],
  },
  {
    slug: "operation-surf-access-control",
    label: "Entry 003 · Operation Surf access model",
    title: "Operation Surf — access control shaped data quality",
    thesis:
      "Permissions belong in the API layer; leaving them only in the UI produced data leaks and inconsistent behavior.",
    stages: ["model", "api-enforcement", "coordination"],
    tags: ["access control", "API design", "read model"],
    caseStudyHref: "/case-studies/operation-surf",
    decisionRecord: {
      context: "Volunteer, program, shift, and signup data had different visibility requirements.",
      problem: "Client-only checks could not reliably protect private coordination details.",
      decision: "Move role-aware filtering and payload shaping into the API layer.",
      tradeoff: "Routes became more responsible for workflow shape, but access rules became enforceable.",
      result: "Frontend fetching got simpler and public payloads avoided admin-only fields.",
      learned: "Data shape is part of product behavior, not just backend plumbing.",
    },
    notes: [
      "Early deployments relied on client-side role checks and returned inconsistent results when third-party tools accessed the API.",
      "Moved role enforcement into Next.js API routes and validated at the query layer — reduced accidental overexposure.",
      "Designing the data model to match how volunteers organize events reduced coordination overhead in the field.",
    ],
  },
  {
    slug: "vybetutor-adaptive-engine",
    label: "Entry 004 · Vybe Tutor adaptive engine",
    title: "Vybe Tutor — deterministic adaptation & privacy",
    thesis:
      "Keep grading and adaptation local and deterministic; rely on AI only for explanation generation.",
    stages: ["prompting", "validation", "adaptation"],
    tags: ["AI contracts", "local state", "validation"],
    caseStudyHref: "/case-studies/vybetutor",
    decisionRecord: {
      context: "AI output could generate useful explanations, but learning state needed predictable behavior.",
      problem: "Letting the model grade or advance difficulty would make progress hard to trust.",
      decision: "Validate generated content with contracts and keep grading/adaptation as local pure functions.",
      tradeoff: "The system has stricter boundaries, but the learner loop stays responsive and testable.",
      result: "AI stays useful without owning assessment or privacy-sensitive state.",
      learned: "Probabilistic generation works best when deterministic product logic boxes it in.",
    },
    notes: [
      "Gemini provides explanations, but grading must be local to avoid privacy risks and to keep the loop responsive.",
      "Implemented Zod-validated contracts for all AI outputs so the host can trust structured responses before rendering.",
      "Adaptive difficulty is implemented as pure functions with unit tests to ensure predictable learning trajectories.",
    ],
  },
];
