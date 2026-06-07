export type Cue = "SHIFT LEFT" | "CENTERED" | "SHIFT RIGHT";

export type CalibrationState = {
  leftPressure: number;
  rightPressure: number;
  offset: number;
  score: number;
  cue: Cue;
  jitter: number[];
};

export function calibratePressure(leftPressure: number): CalibrationState {
  const left = clamp(Math.round(leftPressure), 0, 100);
  const right = 100 - left;
  const offset = left - 50;
  const absOffset = Math.abs(offset);
  const score = clamp(Math.round(100 - absOffset * 2), 0, 100);
  const cue = offset < -7 ? "SHIFT RIGHT" : offset > 7 ? "SHIFT LEFT" : "CENTERED";
  const jitter = Array.from({ length: 42 }, (_, index) => {
    const wave = Math.sin(index * 1.7 + left / 8) * 9 + Math.cos(index * 0.63) * 5;
    return clamp(Math.round(left + wave), 8, 92);
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
