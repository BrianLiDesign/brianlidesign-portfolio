export const heroAnimations = [
  {
    id: "rebalance",
    eyebrow: "signal-flow/control-system sketch",
    title: "ReBalance calibration loop",
    duration: 3200,
  },
  {
    id: "flip",
    eyebrow: "fpga/state-machine cycle",
    title: "Flip That Digit debounce loop",
    duration: 5200,
  },
  {
    id: "ops",
    eyebrow: "backend/coordination workflow",
    title: "Operation Surf access pipeline",
    duration: 5800,
  },
] as const;

export type HeroAnimation = (typeof heroAnimations)[number];
export type HeroAnimationId = HeroAnimation["id"];
