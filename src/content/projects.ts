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
};

export const projects: Project[] = [
  {
    slug: "rebalance",
    label: "Flagship · Hardware-software system",
    title: "ReBalance",
    href: routes.rebalance,
    summary:
      "A balance feedback system using 4 FSR sensors and 20 Hz Web Serial updates to turn pressure data into a readable correction cue.",
    role: "Hardware/software developer",
    evidence: "4 FSR sensors, Web Serial stream, calibration, feedback UI",
    note: "learned to separate noisy input from readable feedback",
    tags: ["4 FSR sensors", "20 Hz feedback", "calibration"],
  },
  {
    slug: "flip-that-digit",
    label: "FPGA / Computer architecture",
    title: "Flip That Digit",
    href: routes.flipThatDigit,
    summary:
      "A Basys3 game built around OTTER MCU constraints, seven-segment output, and precise debounce/release handling.",
    role: "Embedded game logic + hardware deployment",
    evidence: "SystemVerilog + Assembly on Basys3 / OTTER MCU",
    note: "learned how release timing shapes reliable state transitions",
    tags: ["SystemVerilog", "Assembly", "Basys3"],
  },
  {
    slug: "operation-surf",
    label: "Nonprofit operations backend",
    title: "Operation Surf",
    href: routes.operationSurf,
    summary:
      "Backend and data workflows for nonprofit operations supporting 600 volunteers, access-aware CRUD, and API-driven coordination.",
    role: "Backend/API workflow contributor",
    evidence: "MongoDB/Mongoose, Next.js, API workflows, permissions",
    note: "learned how backend structure affects real-world coordination",
    tags: ["600 volunteers", "MongoDB", "access-aware CRUD"],
  },
];
