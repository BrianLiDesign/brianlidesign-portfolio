"use client";

import type { KeyboardEvent } from "react";

export type RebalanceSketchNode = "raw" | "calibrate" | "cue";

const nodeNotes: Record<RebalanceSketchNode, string> = {
  raw: "noisy input from real sensors",
  calibrate: "offset + dead zone before UI",
  cue: "output must be calmer than input",
};

type ReBalanceHeroAnimationProps = {
  activeNode: RebalanceSketchNode | null;
  annotation: string | null;
  setActiveNode: (node: RebalanceSketchNode | null) => void;
};

export function ReBalanceHeroAnimation({
  activeNode,
  annotation,
  setActiveNode,
}: ReBalanceHeroAnimationProps) {
  const activateNode = (node: RebalanceSketchNode) => () => {
    setActiveNode(node);
  };
  const clearNode = () => {
    setActiveNode(null);
  };
  const handleNodeKeyDown =
    (node: RebalanceSketchNode) => (event: KeyboardEvent<SVGGElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveNode(node);
      }
    };

  return (
    <svg
      aria-label="Signal flow from sensor input through calibration to feedback cue"
      className="signal-sketch__canvas rebalance-hero-animation"
      role="img"
      viewBox="0 0 720 520"
    >
      <title>Raw pressure is calibrated into a calmer cue</title>
      <defs>
        <marker
          id="signal-arrow-neutral"
          markerHeight="8"
          markerWidth="8"
          orient="auto"
          refX="7"
          refY="4"
        >
          <path d="M0 0 L8 4 L0 8 Z" fill="currentColor" />
        </marker>
        <marker
          id="signal-arrow-teal"
          markerHeight="8"
          markerWidth="8"
          orient="auto"
          refX="7"
          refY="4"
        >
          <path d="M0 0 L8 4 L0 8 Z" fill="#006d77" />
        </marker>
      </defs>
      <rect className="signal-sketch__sheet" height="520" width="720" x="0" y="0" />

      <path
        className="dashed-line signal-draw signal-draw--neutral"
        d="M204 100 C292 98 268 252 282 252"
        markerEnd="url(#signal-arrow-neutral)"
        pathLength="1"
      />
      <path
        className="teal-line signal-draw signal-draw--teal"
        d="M458 252 C552 254 510 396 530 396"
        markerEnd="url(#signal-arrow-teal)"
        pathLength="1"
      />
      <circle className="signal-dot signal-dot--raw" r="6" />
      <circle className="signal-dot signal-dot--calibrated" r="5" />

      <g
        aria-label={nodeNotes.raw}
        className={`signal-node ${activeNode === "raw" ? "signal-node--active" : ""}`}
        onBlur={clearNode}
        onClick={activateNode("raw")}
        onFocus={activateNode("raw")}
        onKeyDown={handleNodeKeyDown("raw")}
        onPointerEnter={activateNode("raw")}
        onPointerLeave={clearNode}
        tabIndex={0}
      >
        <rect className="signal-node__hit-area" height="112" width="170" x="34" y="44" />
        <rect className="sketch-box" height="112" width="170" x="34" y="44" />
        <text x="62" y="84">
          raw pressure
        </text>
        <path className="orange-line" d="M58 122 C78 84 92 151 112 115 S151 82 174 124" />
      </g>

      <g
        aria-label={nodeNotes.calibrate}
        className={`signal-node ${activeNode === "calibrate" ? "signal-node--active" : ""}`}
        onBlur={clearNode}
        onClick={activateNode("calibrate")}
        onFocus={activateNode("calibrate")}
        onKeyDown={handleNodeKeyDown("calibrate")}
        onPointerEnter={activateNode("calibrate")}
        onPointerLeave={clearNode}
        tabIndex={0}
      >
        <rect className="signal-node__hit-area" height="128" width="176" x="282" y="188" />
        <rect className="sketch-box" height="128" width="176" x="282" y="188" />
        <text x="332" y="216">
          calibrate
        </text>
        <circle className="calibration-ring" cx="370" cy="260" r="28" />
        <path className="calibration-check" d="M356 260 l12 12 l27 -34" />
        <text className="tiny-text" textAnchor="middle" x="370" y="298">
          dead zone
        </text>
        <text className="tiny-text" textAnchor="middle" x="370" y="312">
          + offset
        </text>
      </g>

      <g
        aria-label={nodeNotes.cue}
        className={`signal-node ${activeNode === "cue" ? "signal-node--active" : ""}`}
        onBlur={clearNode}
        onClick={activateNode("cue")}
        onFocus={activateNode("cue")}
        onKeyDown={handleNodeKeyDown("cue")}
        onPointerEnter={activateNode("cue")}
        onPointerLeave={clearNode}
        tabIndex={0}
      >
        <rect className="signal-node__hit-area" height="92" width="150" x="530" y="350" />
        <rect className="sketch-box" height="92" width="150" x="530" y="350" />
        <text x="580" y="390">
          cue
        </text>
        <text className="teal-text" x="560" y="414">
          shift / center
        </text>
      </g>

      <g className="proof-enter">
        <path className="thin-note" d="M466 104 C430 130 420 172 430 188" />
        <text className="note-text" x="466" y="96">
          feedback stays calmer
        </text>
        <path className="thin-note" d="M240 300 C256 298 270 294 282 288" />
        <text className="note-text" x="54" y="292">
          no fake metrics
        </text>
        <text className="note-text" x="54" y="310">
          show the transformation
        </text>
        <text className="note-text" x="302" y="352">
          debug surface stays visible
        </text>
      </g>

      {annotation ? (
        <g aria-live="polite" className="signal-badge">
          <rect height="34" width="292" x="380" y="28" />
          <text x="394" y="50">
            {annotation}
          </text>
        </g>
      ) : null}
    </svg>
  );
}
