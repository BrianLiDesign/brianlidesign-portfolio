"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import type { CaseStudyVisualHighlight } from "@/content/case-studies";

type CaseStudyVisualArtifactProps = {
  visual: CaseStudyVisualHighlight;
};

const digitSegments: Record<number, number[]> = {
  0: [0, 1, 2, 3, 4, 5],
  1: [1, 2],
  2: [0, 1, 6, 4, 3],
  3: [0, 1, 6, 2, 3],
  4: [5, 6, 1, 2],
  5: [0, 5, 6, 2, 3],
  6: [0, 5, 6, 4, 3, 2],
  7: [0, 1, 2],
  8: [0, 1, 2, 3, 4, 5, 6],
  9: [0, 1, 2, 3, 5, 6],
};

const segmentPaths = [
  "M22 8 H68 L76 16 L68 24 H22 L14 16 Z",
  "M72 22 L82 32 V60 L72 70 L62 60 V32 Z",
  "M72 76 L82 86 V114 L72 124 L62 114 V86 Z",
  "M22 122 H68 L76 130 L68 138 H22 L14 130 Z",
  "M18 76 L28 86 V114 L18 124 L8 114 V86 Z",
  "M18 22 L28 32 V60 L18 70 L8 60 V32 Z",
  "M22 65 H68 L76 73 L68 81 H22 L14 73 Z",
];

function getPointerRatio(event: PointerEvent<HTMLDivElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  return Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
}

function ReBalanceArtifact() {
  const bars = [34, 58, 41, 72, 50, 28, 64, 45, 69, 38];

  return (
    <div
      className="case-visual case-visual--rebalance"
      aria-label="Raw pressure to calibrated cue"
      role="img"
    >
      <div className="case-visual__signal">
        {bars.map((height, index) => (
          <span
            key={`${height}-${index}`}
            style={{ "--bar-height": `${height}%`, "--delay": `${index * 80}ms` } as CSSProperties}
          />
        ))}
      </div>
      <div className="case-visual__pipeline">
        <span>raw jitter</span>
        <i />
        <span>baseline</span>
        <i />
        <strong>centered cue</strong>
      </div>
    </div>
  );
}

function FlipThatDigitArtifact() {
  const [zone, setZone] = useState(1);
  const [artifactHover, setArtifactHover] = useState(false);
  const [clockDigit, setClockDigit] = useState(0);
  const states = ["wait", "press", "release", "update"];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setClockDigit((digit) => (digit + 1) % 10);
    }, 950);
    return () => window.clearInterval(timer);
  }, []);

  const displayDigit = artifactHover ? zone : clockDigit;
  const activeSegments = digitSegments[displayDigit] ?? [];

  const handleArtifactPointer = (event: PointerEvent<HTMLDivElement>) => {
    setZone(Math.min(3, Math.floor(getPointerRatio(event) * 4)));
  };

  return (
    <div
      className="case-visual case-visual--flip"
      aria-label="Seven-segment game state artifact"
      onPointerEnter={() => setArtifactHover(true)}
      onPointerLeave={() => setArtifactHover(false)}
      onPointerMove={handleArtifactPointer}
      role="img"
    >
      <svg aria-label={`Seven-segment display showing ${displayDigit}`} role="img" viewBox="0 0 90 146">
        <rect className="case-visual__display-housing" height="144" rx="10" width="88" x="1" y="1" />
        <rect className="case-visual__display-screen" height="132" rx="7" width="76" x="7" y="7" />
        {segmentPaths.map((path, index) => (
          <path
            className={activeSegments.includes(index) ? "seven-seg-active" : "seven-seg-idle"}
            d={path}
            key={`${path}-${index}`}
            style={{ animationDelay: `${index * 0.11}s` }}
          />
        ))}
      </svg>
      <div className="case-visual__states">
        {states.map((state, index) => (
          <span className={index === zone && artifactHover ? "is-active" : ""} key={state}>
            {state}
          </span>
        ))}
      </div>
    </div>
  );
}

function OperationSurfArtifact() {
  return (
    <div
      className="case-visual case-visual--workflow"
      aria-label="API workflow diagram"
      role="img"
    >
      {["auth context", "route filter", "query", "enrich", "role payload"].map((step, index) => (
        <span key={step} style={{ "--delay": `${index * 120}ms` } as CSSProperties}>
          {step}
        </span>
      ))}
    </div>
  );
}

function SpontusArtifact() {
  return (
    <div
      className="case-visual case-visual--spontus"
      aria-label="Marketplace trust pipeline diagram"
      role="img"
    >
      <div className="case-visual__marketplace-sides">
        <span>Team</span>
        <span>Sponsor</span>
      </div>
      <div className="case-visual__trust-line" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="case-visual__trust-steps">
        {["Verification", "Listing", "Application", "Review"].map((step, index) => (
          <span key={step} style={{ "--delay": `${index * 120}ms` } as CSSProperties}>
            {step}
          </span>
        ))}
      </div>
    </div>
  );
}

function VybeTutorArtifact() {
  return (
    <div
      className="case-visual case-visual--learning"
      aria-label="IDE tutoring loop diagram"
      role="img"
    >
      {["selected code", "Gemini", "Zod", "local grade", "adapt"].map((step, index) => (
        <span key={step} style={{ "--delay": `${index * 110}ms` } as CSSProperties}>
          {step}
        </span>
      ))}
    </div>
  );
}

export function CaseStudyVisualArtifact({ visual }: CaseStudyVisualArtifactProps) {
  const artifact = {
    rebalance: <ReBalanceArtifact />,
    spontus: <SpontusArtifact />,
    "flip-that-digit": <FlipThatDigitArtifact />,
    "operation-surf": <OperationSurfArtifact />,
    vybetutor: <VybeTutorArtifact />,
  }[visual.type];

  return (
    <section className="case-study-visual content-page content-page--wide">
      <div>
        <p className="section-label">Animated artifact</p>
        <h2>{visual.title}</h2>
        <p>{visual.caption}</p>
      </div>
      {artifact}
    </section>
  );
}
