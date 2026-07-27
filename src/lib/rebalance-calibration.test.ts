import { describe, expect, it } from "vitest";
import { calibratePressure } from "./rebalance-calibration";

describe("calibratePressure", () => {
  it("returns a centered, perfect score at neutral pressure", () => {
    expect(calibratePressure(50)).toMatchObject({
      leftPressure: 50,
      rightPressure: 50,
      offset: 0,
      score: 100,
      cue: "CENTERED",
    });
  });

  it.each([
    { pressure: 42, cue: "SHIFT RIGHT" },
    { pressure: 43, cue: "CENTERED" },
    { pressure: 57, cue: "CENTERED" },
    { pressure: 58, cue: "SHIFT LEFT" },
  ] as const)("uses the dead-zone boundary at $pressure", ({ pressure, cue }) => {
    expect(calibratePressure(pressure).cue).toBe(cue);
  });

  it.each([
    { pressure: -20, left: 0, right: 100, score: 0 },
    { pressure: 120, left: 100, right: 0, score: 0 },
  ])("clamps out-of-range pressure values", ({ pressure, left, right, score }) => {
    expect(calibratePressure(pressure)).toMatchObject({
      leftPressure: left,
      rightPressure: right,
      score,
    });
  });

  it("rounds input and produces deterministic, bounded jitter", () => {
    const first = calibratePressure(50.6);
    const second = calibratePressure(50.6);

    expect(first.leftPressure).toBe(51);
    expect(first.jitter).toEqual(second.jitter);
    expect(first.jitter).toHaveLength(42);
    expect(first.jitter.every((value) => value >= 8 && value <= 92)).toBe(true);
  });
});
