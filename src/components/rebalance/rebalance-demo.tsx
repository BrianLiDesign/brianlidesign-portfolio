"use client";

import { SlidersHorizontal } from "lucide-react";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { calibratePressure } from "@/lib/rebalance-calibration";
import { PressureMeter } from "./pressure-meter";
import { RawJitterStrip } from "./raw-jitter-strip";

export function ReBalanceDemo() {
  const [leftPressure, setLeftPressure] = useState(52);
  const state = useMemo(() => calibratePressure(leftPressure), [leftPressure]);
  const handlePressureInput = (event: FormEvent<HTMLInputElement>) => {
    setLeftPressure(Number(event.currentTarget.value));
  };

  return (
    <section aria-labelledby="rebalance-demo-title" className="rebalance-demo">
      <div className="rebalance-demo__header">
        <div>
          <p className="eyebrow">Working calibration demo</p>
          <h3 id="rebalance-demo-title">Pressure in. Correction out.</h3>
        </div>
        <SlidersHorizontal aria-hidden="true" className="rebalance-demo__icon" />
      </div>
      <div className="rebalance-demo__control">
        <label htmlFor="pressure">
          Left pressure: {state.leftPressure}% · Right pressure: {state.rightPressure}%
        </label>
        <input
          aria-label="Adjust left and right pressure balance"
          id="pressure"
          max="100"
          min="0"
          onChange={handlePressureInput}
          onInput={handlePressureInput}
          type="range"
          value={leftPressure}
        />
      </div>
      <div className="pressure-grid">
        <PressureMeter label="Left pressure" tone="left" value={state.leftPressure} />
        <PressureMeter label="Right pressure" tone="right" value={state.rightPressure} />
      </div>
      <div className="rebalance-demo__output">
        <div className="raw-panel">
          <p className="eyebrow">Raw jitter strip</p>
          <RawJitterStrip values={state.jitter} />
        </div>
        <div className="score-panel">
          <p className="eyebrow">Calibrated score</p>
          <strong>{state.score}</strong>
          <span>{state.cue}</span>
          <small>Offset {state.offset >= 0 ? `+${state.offset}` : state.offset}</small>
          <p>The raw signal is allowed to be noisy. The cue is intentionally stable and readable.</p>
        </div>
      </div>
    </section>
  );
}
