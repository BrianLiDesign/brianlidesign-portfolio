import { professionalPositioning } from "./positioning";

export const aboutIntro = {
  label: "About",
  heading: professionalPositioning.headline,
  lead: `I work across ${professionalPositioning.focusAreas}. Growing up in Hawaii and teaching seniors through Digital Ready Hawaii shaped the standard I bring to that work: a system should be understandable, dependable, and useful where it is actually deployed.`,
  motto: "Reliable systems should be understandable, local, and human.",
};

export type StoryPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export const storyPhotos: StoryPhoto[] = [
  {
    src: "",
    alt: "Hawaii landscape or community context",
    caption: "Hawaii - field context",
  },
  {
    src: "",
    alt: "Cal Poly lab or engineering workspace",
    caption: "Lab - Cal Poly SLO",
  },
];

export type AsideItem = {
  text: string;
  icon: string;
};

export const story = {
  paragraphs: [
    "Growing up on the islands, I learned to judge technology by whether it helps people do real work. Teaching seniors through Digital Ready Hawaii made patience, clarity, and trust feel like engineering requirements rather than finishing touches.",
    "That standard carries across the systems I build and test. I care about the translation layer: the moment a software requirement becomes a repeatable regression test, a drone command becomes inspectable telemetry, a raw sensor reading becomes a useful cue, or backend data becomes a workflow a nonprofit can depend on.",
    "At Cal Poly, I pair computer engineering fundamentals with a debug-first practice. I want the measurement model, interfaces, and failure states to be visible before the polish arrives, because reliable systems are built through evidence and iteration rather than presentation alone.",
  ],
  aside: {
    heading: "Outside the lab",
    items: [
      { text: "Digital Ready Hawaii - teaching seniors practical technology skills", icon: "users" },
      { text: "Surfing and ocean time - Hawaii never fully leaves", icon: "waves" },
      { text: "Video production and visual storytelling", icon: "video" },
      { text: "Exploring how design and engineering overlap", icon: "pen-tool" },
      { text: "Building things with my hands - woodworking, prototyping, soldering", icon: "wrench" },
    ] as AsideItem[],
  },
};

export type CareerIconName =
  | "accessibility"
  | "badge-check"
  | "git-branch"
  | "heart-handshake"
  | "monitor"
  | "shield";

export type CareerEntry = {
  id: string;
  role: string;
  organization: string;
  period: string;
  status: "current" | "completed";
  scope: string;
  bullets?: string[];
  tags: string[];
  organizationMark?: {
    src: string;
  };
  fallbackIcon: CareerIconName;
  relatedHref?: string;
};

export const workExperience: CareerEntry[] = [
  {
    id: "boeing-software-test-engineer",
    role: "Software Test Engineer (Part-Time)",
    organization: "Boeing",
    period: "Aug 2026 - Present",
    status: "current",
    scope:
      "Automating Python and pytest regression testing and validating software behavior against functional, boundary, error, and regression requirements.",
    bullets: [
      "Automated six recurring regression suites, reducing manual testing time by approximately 60%.",
      "Validated 11 functional, boundary, error, and regression scenarios against software requirements.",
    ],
    tags: ["Python", "pytest", "Regression Testing"],
    fallbackIcon: "badge-check",
  },
  {
    id: "booz-allen-systems-engineer-intern",
    role: "Systems Engineer Intern",
    organization: "Booz Allen Hamilton",
    period: "Jun 2026 - Aug 2026",
    status: "completed",
    scope:
      "Built and verified a Python multi-vehicle simulation environment integrating flight control, high-fidelity physics, telemetry, and reproducible test scenarios.",
    bullets: [
      "Implemented multi-vehicle coordination, setpoint streaming, typed telemetry, integrity checks, and automated diagnostics.",
      "Traced 47 requirements and 48 risks to nine simulation scenarios for complete verification coverage.",
    ],
    tags: ["Python", "PX4", "Isaac Sim", "Verification"],
    fallbackIcon: "shield",
    relatedHref: "/case-studies/keres",
  },
  {
    id: "operation-surf-software-engineer",
    role: "Software Engineer (Pro Bono)",
    organization: "Operation SURF",
    period: "Sep 2025 - May 2026",
    status: "completed",
    scope:
      "Developed scheduling and data workflows for veteran and volunteer programs using Next.js, REST APIs, and MongoDB.",
    bullets: [
      "Consolidated shift and event queries into unified endpoints to reduce duplicate client-side requests.",
      "Optimized MongoDB aggregation pipelines and indexes to reduce projected database costs.",
    ],
    tags: ["Next.js", "REST APIs", "MongoDB"],
    fallbackIcon: "heart-handshake",
    relatedHref: "/case-studies/operation-surf",
  },
  {
    id: "cal-poly-its-assistant",
    role: "IT Assistant (Part-Time)",
    organization: "Cal Poly Information Technology Services",
    period: "Nov 2025 - May 2026",
    status: "completed",
    scope:
      "Diagnosed campus network, DNS, application-access, and end-user support issues across university systems.",
    bullets: ["Resolved more than 40 technical-support tickets involving campus infrastructure and applications."],
    tags: ["IT Support", "Networking", "Troubleshooting"],
    fallbackIcon: "monitor",
  },
];

export const leadershipExperience: CareerEntry[] = [
  {
    id: "empower-project-lead",
    role: "Project Lead, Marching Band Haptic Feedback System",
    organization: "Cal Poly EMPOWER Student Association",
    period: "Aug 2026 - Present",
    status: "current",
    scope:
      "Leading continued development of a wearable haptic-feedback system designed to help visually impaired musicians navigate marching formations, while coordinating technical direction and project execution across hardware and software components.",
    tags: ["Project Leadership", "Haptic Feedback", "Embedded Systems"],
    fallbackIcon: "accessibility",
  },
  {
    id: "hack4impact-tech-lead",
    role: "Tech Lead",
    organization: "Hack4Impact Cal Poly",
    period: "Aug 2026 - Present",
    status: "current",
    scope:
      "Leading technical setup and architecture for a nonprofit software project, translating product needs into scoped engineering work, onboarding developers, and establishing contribution, CI, and workflow standards.",
    tags: ["Technical Leadership", "Architecture", "Developer Workflows"],
    fallbackIcon: "git-branch",
  },
];

export const education = {
  school: "California Polytechnic State University, San Luis Obispo",
  degree: "B.S. Computer Engineering",
  expected: "Expected May 2028",
  affiliations: ["Adobe Ambassador", "Cal Poly Engineering Ambassador", "Hack4Impact Developer", "BMES Member"],
  coursework: [
    "Digital Design",
    "Computer Architecture",
    "Data Structures",
    "Embedded Systems",
    "Circuit Analysis",
    "Discrete Mathematics",
    "Systems Programming",
    "Signal Processing",
  ],
  highschool: {
    school: "Punahou School",
    graduated: "2024",
  },
};

export const workingPrinciples = [
  {
    title: "Understandable",
    body: "I expose the system state instead of hiding it.",
  },
  {
    title: "Local",
    body: "I design for the context where the tool is actually used.",
  },
  {
    title: "Human",
    body: "I prefer calmer feedback over impressive noise.",
  },
] as const;

export const currentlyLearning = [
  "software verification",
  "embedded control systems",
  "technical leadership",
] as const;

export type SkillGroup = {
  label: string;
  skills: string[];
  icon: string;
};

export const technicalSkills: SkillGroup[] = [
  {
    label: "Testing & Systems",
    skills: ["Python", "pytest", "GitHub Actions", "Postman", "Ruff", "mypy", "Docker", "Linux"],
    icon: "code",
  },
  {
    label: "Embedded & Simulation",
    skills: [
      "PX4 SITL",
      "Isaac Sim",
      "Pegasus",
      "C/C++",
      "SystemVerilog",
      "RISC-V Assembly",
      "Arduino",
      "Basys3 / FPGA",
    ],
    icon: "cpu",
  },
  {
    label: "Software Platforms",
    skills: ["TypeScript", "React", "Next.js", "REST APIs", "MongoDB/Mongoose", "SQL", "Zod", "Git"],
    icon: "package",
  },
];
