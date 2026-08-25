"use client";

import {
  Boxes,
  Database,
  FilePlay,
  Network,
  RadioTower,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { keresProject } from "@/content/keres";

const stageDetails = [
  "Defines the repeatable scenario, formation, coordinator, threat profile, and seed.",
  "Runs the 3D world and simulated multirotor models while exposing vehicle and sensor state.",
  "Converts observations into tracks and state that the coordinator can reason about.",
  "Assigns simulated interceptors and produces high-level position, velocity, and yaw intent.",
  "Owns estimation and low-level simulated vehicle control through the OFFBOARD lifecycle.",
  "Accounts for contacts, breaches, losses, separation, altitude, speed, and timing before results finalize.",
  "Preserves configuration identity, events, metrics, artifacts, and a browser-readable replay.",
] as const;

const stageIcons = [Boxes, RadioTower, ScanLine, Network, ShieldCheck, Database, FilePlay] as const;

export function KeresArchitectureExplorer() {
  const [selected, setSelected] = useState(3);

  return (
    <div className="keres-architecture">
      <ol aria-label="KERES system architecture">
        {keresProject.architecture.map((stage, index) => {
          const Icon = stageIcons[index];
          return (
            <li className={selected === index ? "is-selected" : ""} key={stage}>
              <button
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
                type="button"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" />
                <strong>{stage}</strong>
              </button>
            </li>
          );
        })}
      </ol>
      <div className="keres-architecture__detail" aria-live="polite">
        <span>Selected stage</span>
        <strong>{keresProject.architecture[selected]}</strong>
        <p>{stageDetails[selected]}</p>
      </div>
    </div>
  );
}
