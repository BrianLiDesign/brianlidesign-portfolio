"use client";

import { SlidersHorizontal } from "lucide-react";
import type { FormEvent, PointerEvent } from "react";
import { useMemo, useState } from "react";
import { calibratePressure } from "@/lib/rebalance-calibration";
import { PressureMeter } from "./pressure-meter";
import { RawJitterStrip } from "./raw-jitter-strip";

function getPointerRatio(event: PointerEvent<HTMLElement>): number {
  const rect = event.currentTarget.getBoundingClientRect();
  return Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
}

function mapRatioToLeftPressure(ratio: number): number {
  return Math.round((1 - ratio) * 100);
}

export function ReBalanceDemo() {
  const [pressure, setPressure] = useState(52);
  const [pointerActive, setPointerActive] = useState(false);
  const [pointerRatio, setPointerRatio] = useState(0.48);
  const state = useMemo(() => calibratePressure(pressure), [pressure]);

  const handlePressureInput = (event: FormEvent<HTMLInputElement>) => {
    setPointerActive(false);
    setPressure(Number(event.currentTarget.value));
  };
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    const ratio = getPointerRatio(event);

    setPointerActive(true);
    setPointerRatio(ratio);
    setPressure(mapRatioToLeftPressure(ratio));
  };
  const handlePointerEnter = () => {
    setPointerActive(true);
  };
  const handlePointerLeave = () => {
    setPointerActive(false);
  };
  const cueToneClass = state.cue === "CENTERED" ? "score-panel__cue--centered" : "score-panel__cue--shift";

  return (
    <section
      aria-labelledby="rebalance-demo-title"
      className={`rebalance-demo${pointerActive ? " rebalance-demo--sampling" : ""}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      {pointerActive ? (
        <div
          aria-hidden="true"
          className="rebalance-demo__pointer-guide"
          style={{ left: `${pointerRatio * 100}%` }}
        >
          <span>live input</span>
        </div>
      ) : null}
      <div className="rebalance-demo__header">
        <div>
          <p className="eyebrow">Working calibration demo</p>
          <h3 id="rebalance-demo-title">Pressure in. Correction out.</h3>
        </div>
        <div className="rebalance-demo__icon-wrap">
          <span aria-hidden="true" className="calibration-pulse" key={pressure} />
          <SlidersHorizontal aria-hidden="true" className="rebalance-demo__icon" />
        </div>
      </div>
      <p className="rebalance-demo__sampling-indicator" aria-live="polite">
        {pointerActive ? "Live input: pointer sampling" : "Slider input: calibrated pressure"}
      </p>
      <div className="rebalance-demo__control">
        <label htmlFor="pressure">
          Left pressure: {state.leftPressure}% · Right pressure: {state.rightPressure}%
        </label>
        <p className="rebalance-demo__hint">Move pointer across the board or use the slider.</p>
        <input
          aria-describedby="rebalance-output"
          aria-label="Adjust left and right pressure balance"
          id="pressure"
          max="100"
          min="0"
          onChange={handlePressureInput}
          onInput={handlePressureInput}
          type="range"
          value={pressure}
        />
      </div>
      <div
        className="rebalance-board"
        aria-label="Balance board center of pressure"
        role="img"
      >
        <div className="rebalance-board__labels">
          <span>left foot</span>
          <span>dead zone</span>
          <span>right foot</span>
        </div>
        <div className="rebalance-board__deck">
          <span className="rebalance-board__threshold rebalance-board__threshold--left">
            correction threshold
          </span>
          <span className="rebalance-board__dead-zone" />
          <span className="rebalance-board__threshold rebalance-board__threshold--right">
            correction threshold
          </span>
          <i
            className="rebalance-board__pressure-dot"
            style={{ left: `${state.rightPressure}%` }}
          />
        </div>
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
        <div className="score-panel" id="rebalance-output">
          <p className="eyebrow">Calibrated score</p>
          <strong className="calm-output-settle" key={state.score}>
            {state.score}
          </strong>
          <span className={`calm-output-settle ${cueToneClass}`} key={state.cue}>
            {state.cue}
          </span>
          <small className="calm-output-settle" key={`offset-${state.offset}`}>
            Offset {state.offset > 0 ? "+" : ""}
            {state.offset} · settled
          </small>
          <p>Move pointer across the board or use the slider. The raw signal is allowed to be noisy; the cue stays calmer.</p>
        </div>
      </div>
    </section>
  );
}
