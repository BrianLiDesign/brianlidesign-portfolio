"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { keresProject, type KeresFormationId } from "@/content/keres";

const formationPositions: Record<KeresFormationId, ReadonlyArray<readonly [number, number]>> = {
  dome: [[20, 64], [31, 42], [44, 28], [56, 28], [69, 42], [80, 64]],
  sphere: [[50, 18], [28, 34], [72, 34], [24, 62], [76, 62], [50, 78]],
  ring: [[50, 16], [76, 34], [76, 66], [50, 84], [24, 66], [24, 34]],
  "stacked-rings": [[29, 30], [50, 23], [71, 30], [29, 66], [50, 73], [71, 66]],
  layered: [[20, 30], [50, 30], [80, 30], [29, 68], [50, 54], [71, 68]],
  cloud: [[21, 35], [42, 20], [70, 28], [32, 65], [58, 54], [78, 72]],
};

export function KeresFormationExplorer() {
  const [formation, setFormation] = useState<KeresFormationId>("dome");

  return (
    <div className="keres-formation">
      <div className="keres-formation__controls" aria-label="Formation family" role="group">
        {keresProject.formations.map((item) => (
          <button
            aria-pressed={formation === item.id}
            key={item.id}
            onClick={() => setFormation(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="keres-formation__stage" role="img" aria-label={`${formation} formation schematic`}>
        <div className="keres-formation__asset">asset</div>
        {formationPositions[formation].map(([x, y], index) => (
          <span
            aria-hidden="true"
            key={`${formation}-${index}`}
            style={{ "--formation-x": `${x}%`, "--formation-y": `${y}%` } as CSSProperties}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        ))}
      </div>
      <p>
        The explorer shows implemented formation families schematically. It does not represent measured operational coverage.
      </p>
    </div>
  );
}
