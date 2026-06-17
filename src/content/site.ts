import { routes } from "@/lib/routes";

export const navItems = [
  {
    label: "Case Studies",
    href: routes.caseStudies,
    description: "project evidence",
    icon: false,
  },
  {
    label: "Debug Log",
    href: routes.debugLog,
    description: "engineering decisions",
    icon: false,
  },
  {
    label: "About",
    href: routes.about,
    description: "background and values",
    icon: false,
  },
  {
    label: "Resume",
    href: routes.resumePdf,
    description: "PDF resume",
    icon: true,
  },
] as const;

export const hero = {
  meta: "Hawaii-born computer engineering student - hardware/software systems - Cal Poly SLO",
  title:
    "I build hardware-software systems that turn real-world signals into useful feedback.",
  summary:
    "A systems lab notebook for projects at the edge of code, circuits, robotics, and community service - designed for the messy path between raw data and reliable behavior.",
};

export const heroProofStrip = [
  "2nd place CPES Hackathon",
  "$74 Arduino rehab prototype",
  "~20 Hz Web Serial pipeline",
  "600 volunteers",
  "55% data-fetching complexity reduction",
  "200+ Jira tickets",
] as const;

export const proofChips = [
  {
    title: "ReBalance",
    proof: "4 FSR sensors + 20 Hz Web Serial feedback",
    href: routes.rebalance,
  },
  {
    title: "Flip That Digit",
    proof: "SystemVerilog/Assembly on Basys3",
    href: routes.flipThatDigit,
  },
  {
    title: "Operation Surf",
    proof: "backend systems for 600 volunteers",
    href: routes.operationSurf,
  },
] as const;

export const signalStages = [
  "raw data",
  "calibration",
  "control loops",
  "human feedback",
  "debug notes",
] as const;

export const howIWork = [
  "Prototype under constraints",
  "Debug before polishing",
  "Explain tradeoffs clearly",
] as const;

export const communityBridge = {
  label: "Field context",
  title: "Useful feedback for real people.",
  lines: [
    "Hawaii shaped how I think about technology: useful systems should be understandable, local, and human.",
    "I'm a Hawaii-born computer engineering student creating and exploring technology one line, circuit, and prototype at a time.",
    "My projects start with a practical purpose, then move through planning, testing, and repeated refinement until the system communicates clearly.",
    "That shows up in projects where technology has to be useful to people outside the lab: Digital Ready Hawaii seniors learning technology, volunteers coordinating support, patients needing calm feedback, and local communities.",
  ],
};

export const sourceCodeUrl =
  "https://github.com/BrianLiDesign/brianlidesign.github.io" as const;

export const footerLinks = [
  {
    label: "Email",
    href: "mailto:brian.li.social@gmail.com",
    icon: "/assets/images/icons/email.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/BrianLiDesign/",
    icon: "/assets/images/icons/github.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/brianlidesign/",
    icon: "/assets/images/icons/linkedin.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@brianlidesign/",
    icon: "/assets/images/icons/youtube.svg",
  },
] as const;
