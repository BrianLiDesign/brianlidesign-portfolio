"use client";

import { Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const phases = [
  "formation",
  "track",
  "assignment",
  "intercept",
  "event record",
  "reform",
] as const;

const interceptors = [
  { id: "i-01", x: 34, y: 28 },
  { id: "i-02", x: 52, y: 20 },
  { id: "i-03", x: 67, y: 35 },
  { id: "i-04", x: 62, y: 59 },
  { id: "i-05", x: 43, y: 68 },
  { id: "i-06", x: 27, y: 50 },
] as const;

type KeresReplayProps = {
  variant?: "full" | "flagship" | "panel";
};

export function KeresReplay({ variant = "full" }: KeresReplayProps) {
  const [phase, setPhase] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      setReducedMotion(media.matches);
      if (media.matches) {
        setPhase(phases.length - 1);
        setPlaying(false);
      }
    };

    syncPreference();
    media.addEventListener("change", syncPreference);
    return () => media.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (!playing || reducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setPhase((current) => {
        if (current >= phases.length - 1) {
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 760);

    return () => window.clearInterval(timer);
  }, [playing, reducedMotion]);

  const replay = () => {
    setPhase(0);
    setPlaying(!reducedMotion);
  };

  return (
    <section
      aria-label="Abstract KERES simulation trace"
      className={`keres-replay keres-replay--${variant}`}
    >
      <div className="keres-replay__header">
        <span>Replay view</span>
        <span>{playing ? "trace running" : "trace held"}</span>
      </div>

      <div className="keres-replay__stage">
        <div className="keres-replay__readout">
          <span>Abstract scenario</span>
          <strong>{String(phase + 1).padStart(2, "0")} / {String(phases.length).padStart(2, "0")}</strong>
          <span>{phases[phase]}</span>
        </div>

        <div aria-label="Protected asset" className="keres-replay__asset" role="img">
          <span />
          <strong>asset</strong>
        </div>

        <div
          aria-hidden="true"
          className={`keres-replay__incoming ${phase >= 1 ? "is-visible" : ""}`}
        >
          <span />
        </div>

        <div
          aria-hidden="true"
          className={`keres-replay__assignment ${phase >= 2 ? "is-visible" : ""}`}
        />

        <div
          aria-hidden="true"
          className={`keres-replay__contact ${phase >= 3 ? "is-visible" : ""}`}
        />

        {interceptors.map((interceptor, index) => (
          <span
            aria-hidden="true"
            className={`keres-replay__interceptor ${index === 2 && phase >= 2 ? "is-assigned" : ""} ${phase >= 5 ? "is-reformed" : ""}`}
            key={interceptor.id}
            style={
              {
                "--node-x": `${interceptor.x}%`,
                "--node-y": `${interceptor.y}%`,
                "--node-delay": `${index * 55}ms`,
              } as CSSProperties
            }
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        ))}
      </div>

      <div aria-label="Simulation trace phases" className="keres-replay__timeline" role="group">
        {phases.map((label, index) => (
          <button
            aria-label={`Show ${label} phase`}
            aria-pressed={phase === index}
            className={index <= phase ? "is-complete" : ""}
            key={label}
            onClick={() => {
              setPhase(index);
              setPlaying(false);
            }}
            type="button"
          >
            <span />
            {label}
          </button>
        ))}
      </div>

      <div className="keres-replay__controls" aria-label="Replay controls" role="group">
        <button
          aria-label="Play simulation trace"
          disabled={reducedMotion}
          onClick={() => setPlaying(true)}
          type="button"
        >
          <Play aria-hidden="true" />
          Play
        </button>
        <button aria-label="Pause simulation trace" onClick={() => setPlaying(false)} type="button">
          <Pause aria-hidden="true" />
          Pause
        </button>
        <button aria-label="Replay simulation trace" onClick={replay} type="button">
          <RotateCcw aria-hidden="true" />
          Replay
        </button>
        <p aria-live="polite">
          {reducedMotion ? "Reduced motion: final state shown." : `Current phase: ${phases[phase]}.`}
        </p>
      </div>
    </section>
  );
}
