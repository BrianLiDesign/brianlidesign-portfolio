import { routes } from "@/lib/routes";

export const navItems = [
  { label: "Case Studies", href: routes.caseStudies },
  { label: "Debug Log", href: routes.debugLog },
  { label: "About", href: routes.about },
  { label: "Resume", href: routes.resume },
] as const;

export const hero = {
  meta: "Brian Li · Computer Engineering · Cal Poly SLO",
  title:
    "I build hardware-software systems that turn real-world signals into useful feedback.",
  summary:
    "A systems lab notebook for projects at the edge of code, circuits, robotics, and community service — designed for the messy path between raw data and reliable behavior.",
};

export const proofChips = [
  {
    title: "ReBalance",
    proof: "4 FSR sensors + 20 Hz Web Serial feedback",
  },
  {
    title: "Flip That Digit",
    proof: "SystemVerilog/Assembly on Basys3",
  },
  {
    title: "Operation Surf",
    proof: "backend systems for 600 volunteers",
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
  "prototype with constraints",
  "debug before polishing",
  "explain the system clearly",
] as const;

export const communityBridge = {
  label: "Useful feedback for real people",
  title: "Useful feedback for real people.",
  lines: [
    "Hawaii shaped how I think about technology: useful systems should be understandable, local, and human.",
    "I’m a Hawaii-born computer engineering student creating and exploring technology one line, circuit, and prototype at a time.",
    "My projects start with a practical purpose, then move through planning, testing, and repeated refinement until the system communicates clearly.",
    "That shows up in projects where technology has to be useful to people outside the lab: seniors learning technology, volunteers coordinating support, patients needing calm feedback, and local communities.",
  ],
};

export const footerLinks = [
  { label: "Email", href: "mailto:brian.li.social@gmail.com" },
  { label: "GitHub", href: "https://github.com/BrianLiDesign/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/brianlidesign/" },
  { label: "YouTube", href: "https://www.youtube.com/@brianlidesign/" },
] as const;
