export type Cue = "SHIFT LEFT" | "CENTERED" | "SHIFT RIGHT";

export type CalibrationState = {
  leftPressure: number;
  rightPressure: number;
  offset: number;
  score: number;
  cue: Cue;
  jitter: number[];
};

const JITTER_PATTERN = [
  0.62, 0.48, 0.72, 0.44, 0.55, 0.68, 0.51, 0.76, 0.58, 0.42, 0.63, 0.7,
  0.49, 0.57, 0.74, 0.46, 0.61, 0.53, 0.79, 0.45, 0.67, 0.5, 0.73, 0.56,
  0.43, 0.66, 0.59, 0.77, 0.47, 0.64,
];

export function calibratePressure(leftPressure: number): CalibrationState {
  const left = clamp(Math.round(leftPressure), 0, 100);
  const right = 100 - left;
  const offset = left - right;
  const absOffset = Math.abs(offset);
  const score = clamp(100 - Math.round(absOffset * 0.85), 0, 100);
  const cue = offset > 8 ? "SHIFT RIGHT" : offset < -8 ? "SHIFT LEFT" : "CENTERED";
  const jitter = JITTER_PATTERN.map((seed, index) => {
    const pressureBias = left / 100;
    const wave = Math.sin((index + 1) * 0.82 + pressureBias * 3.5) * 0.14;
    return clamp(Math.round((seed + wave) * 68), 20, 78);
  });

  return {
    leftPressure: left,
    rightPressure: right,
    offset,
    score,
    cue,
    jitter,
  };
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
