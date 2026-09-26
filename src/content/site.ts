import { routes } from "@/lib/routes";
import { professionalPositioning } from "./positioning";

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
  meta: `${professionalPositioning.title} - hardware/software systems - Cal Poly SLO`,
  title: "I build and test hardware-software systems for reliable behavior in the real world.",
  summary:
    "A systems lab notebook spanning software verification, simulation, embedded engineering, and community technology - designed for the messy path between raw data and dependable behavior.",
  focus: `Focused on ${professionalPositioning.focusAreas}.`,
};

export const proofChips = [
  {
    title: "KERES",
    proof: "simulation, PX4 control, experiments, and replay",
    href: routes.keres,
  },
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
    "Teaching seniors through Digital Ready Hawaii showed me that technology earns trust when people can understand what it is doing and what to do next.",
    "That lesson guides projects for volunteers, patients, and local communities: expose the system state, reduce noise, and make the next action clear.",
  ],
};

export const sourceCodeUrl =
  "https://github.com/BrianLiDesign/brianlidesign-portfolio" as const;

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
