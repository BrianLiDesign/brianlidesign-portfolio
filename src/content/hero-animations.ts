export const heroAnimations = [
  {
    id: "keres",
    eyebrow: "simulation/evidence trace",
    title: "KERES experiment loop",
    label: "01 KERES Trace",
    caption:
      "Coordination becomes useful when commands, events, metrics, and replay stay connected.",
    duration: 5200,
  },
  {
    id: "rebalance",
    eyebrow: "signal-flow/control-system sketch",
    title: "ReBalance calibration loop",
    label: "02 Signal Flow",
    caption:
      "Raw pressure is noisy; the product challenge is turning it into calm feedback.",
    duration: 3200,
  },
  {
    id: "flip",
    eyebrow: "fpga/state-machine cycle",
    title: "Flip That Digit debounce loop",
    label: "03 FPGA State",
    caption:
      "The game depends on release timing, debounce logic, and constrained display output.",
    duration: 5200,
  },
] as const;

export type HeroAnimation = (typeof heroAnimations)[number];
export type HeroAnimationId = HeroAnimation["id"];
