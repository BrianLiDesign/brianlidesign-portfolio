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
];
