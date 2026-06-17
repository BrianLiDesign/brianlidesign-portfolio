export const heroAnimations = [
  {
    id: "rebalance",
    eyebrow: "signal-flow/control-system sketch",
    title: "ReBalance calibration loop",
    label: "01 Signal Flow",
    caption:
      "Raw pressure is noisy; the product challenge is turning it into calm feedback.",
    duration: 3200,
  },
  {
    id: "flip",
    eyebrow: "fpga/state-machine cycle",
    title: "Flip That Digit debounce loop",
    label: "02 FPGA State",
    caption:
      "The game depends on release timing, debounce logic, and constrained display output.",
    duration: 5200,
  },
  {
    id: "ops",
    eyebrow: "backend/coordination workflow",
    title: "Operation Surf access pipeline",
    label: "03 API Access",
    caption:
      "The backend protects coordination data by shaping what each user can access.",
    duration: 5800,
  },
] as const;

export type HeroAnimation = (typeof heroAnimations)[number];
export type HeroAnimationId = HeroAnimation["id"];
