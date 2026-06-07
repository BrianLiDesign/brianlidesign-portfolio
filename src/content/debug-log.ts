export type DebugLogEntry = {
  slug: string;
  label: string;
  title: string;
  thesis: string;
  stages: string[];
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
    notes: [
      "Gemini provides explanations, but grading must be local to avoid privacy risks and to keep the loop responsive.",
      "Implemented Zod-validated contracts for all AI outputs so the host can trust structured responses before rendering.",
      "Adaptive difficulty is implemented as pure functions with unit tests to ensure predictable learning trajectories.",
    ],
  },
];
