export type WritingEntry = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  href: string;
};

export const writingEntries: WritingEntry[] = [
  {
    title: "The Debug Log: ReBalance calibration failure",
    date: "June 2026",
    summary:
      "A short engineering note on separating noisy sensor input from a calm correction cue.",
    tags: ["Debug Log", "Hardware", "Calibration"],
    href: "/debug-log",
  },
  {
    title: "Flip That Digit",
    date: "August 2025",
    summary:
      "Notes from building a small embedded logic game around Basys3 and OTTER MCU constraints.",
    tags: ["FPGA", "SystemVerilog", "Assembly"],
    href: "/case-studies/flip-that-digit",
  },
];
