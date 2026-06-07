import { routes } from "@/lib/routes";

export type Project = {
  slug: string;
  label: string;
  title: string;
  href: string;
  summary: string;
  role: string;
  evidence: string;
  note: string;
  tags: string[];
  sourceRepo?: string;
  localSourcePath?: string;
  caseStudyThesis?: string;
  technicalHighlights?: string[];
  codeHighlights?: string[];
  artifacts?: string[];
};

export const projects: Project[] = [
  {
    slug: "rebalance",
    label: "Hardware-software - Calibration file",
    title: "ReBalance",
    href: routes.rebalance,
    summary:
      "A balance feedback system using FSR sensors and Web Serial updates to turn noisy pressure data into a readable correction cue.",
    role: "Hardware/software developer",
    evidence: "FSR sensors, Web Serial stream, calibration, feedback UI",
    note: "learned to separate noisy input from readable feedback",
    tags: ["FSR sensors", "Web Serial", "calibration"],
    sourceRepo: "https://github.com/joshnaim1/rebalance",
    localSourcePath: "C:\\Users\\brian\\Documents\\GitHub\\balanceback",
    caseStudyThesis:
      "Raw sensor data can stay noisy internally, but user-facing feedback has to be stable enough to act on.",
    technicalHighlights: ["baseline correction", "active-pressure threshold", "serial frame parsing"],
    codeHighlights: ["calculateBalance", "Calibration", "useSerial"],
    artifacts: ["live calibration demo", "raw jitter visualization", "balance zone model"],
  },
  {
    slug: "flip-that-digit",
    label: "FPGA - Digital logic file",
    title: "Flip That Digit",
    href: routes.flipThatDigit,
    summary:
      "A Basys3 game built around OTTER MCU constraints, seven-segment output, and precise debounce/release handling.",
    role: "Embedded game logic + hardware deployment",
    evidence: "SystemVerilog + Assembly on Basys3 / OTTER MCU",
    note: "learned how release timing shapes reliable state transitions",
    tags: ["SystemVerilog", "Assembly", "Basys3"],
    sourceRepo: "https://github.com/BrianLiDesign/flip-that-digit",
    localSourcePath: "C:\\Users\\brian\\Documents\\GitHub\\flip-that-digit",
    caseStudyThesis:
      "Reliable digital interaction means modeling physical switch behavior, not assuming ideal boolean input.",
    technicalHighlights: ["one-shot debouncer", "MMIO game loop", "exactly-one-switch decoder"],
    codeHighlights: ["debouncer_one_shot.sv", "main.asm", "seven-segment packing"],
    artifacts: ["Basys3 mapping diagram", "program flowchart", "SystemVerilog wrapper"],
  },
  {
    slug: "operation-surf",
    label: "Backend - Operations workflow",
    title: "Operation Surf",
    href: routes.operationSurf,
    summary:
      "Backend and data workflows for nonprofit operations supporting volunteer coordination, access-aware CRUD, and API-driven workflows.",
    role: "Backend/API workflow contributor",
    evidence: "MongoDB/Mongoose, Next.js, API workflows, permissions",
    note: "learned how backend structure affects real-world coordination",
    tags: ["volunteer ops", "MongoDB", "access-aware CRUD"],
    sourceRepo: "https://github.com/hack4impact-calpoly/Operation-Surf",
    localSourcePath: "C:\\Users\\brian\\Documents\\GitHub\\Operation-Surf",
    caseStudyThesis:
      "Backend response shape affects coordination quality, privacy, and what staff can safely do in the field.",
    technicalHighlights: ["auth context", "public/private filtering", "enriched signup read models"],
    codeHighlights: ["authz.ts", "api/signup/route.ts", "api/volunteer/route.ts"],
    artifacts: ["program schema", "signup workflow", "admin-trimmed volunteer payload"],
  },
  {
    slug: "vybetutor",
    label: "IDE extension - Learning loop",
    title: "Vybe Tutor",
    href: routes.vybeTutor,
    summary:
      "A local-first VS Code extension that turns AI-generated code into learning opportunities: explanations, quizzes, and an adaptive engine.",
    role: "Contributor - adaptive engine & MCP integrations",
    evidence:
      "Gemini-driven explanations, Zod-validated outputs, deterministic adaptive engine, MCP doc-enricher",
    note: "privacy-first grading and deterministic difficulty transitions",
    tags: ["TypeScript", "VS Code Extension", "Gemini", "Zod"],
    sourceRepo: "https://github.com/tannosukeee/VybeTutor",
    localSourcePath: "C:\\Users\\brian\\Documents\\GitHub\\KiroHacks",
    caseStudyThesis:
      "Use AI for explanation generation, but keep assessment, progression, and privacy-sensitive state deterministic and local.",
    technicalHighlights: ["Zod contracts", "Gemini JSON validation", "adaptive difficulty"],
    codeHighlights: ["geminiService.ts", "adaptiveEngine.ts", "docEnricher.ts"],
    artifacts: ["VS Code webview", "host/webview bridge", "Vitest adaptive tests"],
  },
];
