export type WritingEntry = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  href: string;
  linkLabel: string;
};

export const writingEntries: WritingEntry[] = [
  {
    title: "KERES: When event order changes the metric",
    date: "Summer 2026",
    summary:
      "A same-step interception could erase a breach from the run record. This note explains why breach accounting had to run before contact cleanup.",
    tags: ["KERES", "Simulation", "Event Ordering"],
    href: "/debug-log#keres-event-ordering",
    linkLabel: "Read the KERES debugging note",
  },
  {
    title: "The Debug Log: ReBalance calibration failure",
    date: "June 2026",
    summary:
      "A short engineering note on separating noisy sensor input from a calm correction cue.",
    tags: ["Debug Log", "Hardware", "Calibration"],
    href: "/debug-log",
    linkLabel: "Read the ReBalance debugging note",
  },
  {
    title: "Flip That Digit",
    date: "August 2025",
    summary:
      "Notes from building a small embedded logic game around Basys3 and OTTER MCU constraints.",
    tags: ["FPGA", "SystemVerilog", "Assembly"],
    href: "/case-studies/flip-that-digit",
    linkLabel: "Read the Flip That Digit case study",
  },
];
