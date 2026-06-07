"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";

type SketchNode = "raw" | "calibrate" | "cue";

const nodeNotes: Record<SketchNode, string> = {
  raw: "noisy input from real sensors",
  calibrate: "offset + dead zone before UI",
  cue: "output must be calmer than input",
};

export function SignalSketch() {
  const [activeNode, setActiveNode] = useState<SketchNode | null>(null);
  const activateNode = (node: SketchNode) => () => {
    setActiveNode(node);
  };
  const clearNode = () => {
    setActiveNode(null);
  };
  const handleNodeKeyDown = (node: SketchNode) => (event: KeyboardEvent<SVGGElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveNode(node);
    }
  };

  return (
    <figure className="signal-sketch" aria-label="Signal flow sketch from raw pressure to calibrated cue">
      <div className="signal-sketch__header">
        <span>Signal-flow/control-system sketch</span>
        <span>Rev 01</span>
      </div>
      <svg className="signal-sketch__canvas" viewBox="0 0 720 520" role="img">
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
        <rect className="signal-sketch__sheet" x="0" y="0" width="720" height="520" />

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
          <rect className="signal-node__hit-area" x="34" y="44" width="170" height="112" />
          <rect className="sketch-box" x="34" y="44" width="170" height="112" />
          <text x="62" y="84">raw pressure</text>
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
          <rect className="signal-node__hit-area" x="282" y="188" width="176" height="128" />
          <rect className="sketch-box" x="282" y="188" width="176" height="128" />
          <text x="332" y="216">calibrate</text>
          <circle className="calibration-ring" cx="370" cy="260" r="28" />
          <path className="calibration-check" d="M356 260 l12 12 l27 -34" />
          <text className="tiny-text" x="370" y="298" textAnchor="middle">dead zone</text>
          <text className="tiny-text" x="370" y="312" textAnchor="middle">+ offset</text>
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
          <rect className="signal-node__hit-area" x="530" y="350" width="150" height="92" />
          <rect className="sketch-box" x="530" y="350" width="150" height="92" />
          <text x="580" y="390">cue</text>
          <text className="teal-text" x="560" y="414">shift / center</text>
        </g>

        <g className="proof-enter">
          <path className="thin-note" d="M466 104 C430 130 420 172 430 188" />
          <text className="note-text" x="466" y="96">feedback stays calmer</text>
          <path className="thin-note" d="M240 300 C256 298 270 294 282 288" />
          <text className="note-text" x="54" y="292">no fake metrics</text>
          <text className="note-text" x="54" y="310">show the transformation</text>
          <text className="note-text" x="302" y="352">debug surface stays visible</text>
        </g>

        {activeNode ? (
          <g className="signal-badge" aria-live="polite">
            <rect x="380" y="28" width="292" height="34" />
            <text x="394" y="50">{nodeNotes[activeNode]}</text>
          </g>
        ) : null}
      </svg>
    </figure>
  );
}
