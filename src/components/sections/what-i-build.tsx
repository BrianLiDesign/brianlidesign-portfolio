import { Cpu, Gauge, ShieldCheck, type LucideIcon } from "lucide-react";

const buildLayers = [
  {
    icon: Gauge,
    title: "Hardware input",
    copy: "Sensors, boards, switches, and the physical constraints that make software honest.",
    proof: "FSR pressure board \u00b7 Basys3 switches",
  },
  {
    icon: Cpu,
    title: "Software interpretation",
    copy: "Calibration, state machines, debouncing, and API boundaries that turn raw events into decisions.",
    proof: "dead zone \u00b7 release timing \u00b7 access rules",
  },
  {
    icon: ShieldCheck,
    title: "Human-facing feedback",
    copy: "Interfaces that keep the system state visible without forcing people to chase noise.",
    proof: "calmer cue \u00b7 enriched workflow payloads",
  },
] satisfies ReadonlyArray<{
  icon: LucideIcon;
  title: string;
  copy: string;
  proof: string;
}>;

export function WhatIBuild() {
  return (
    <section className="what-i-build" aria-labelledby="what-i-build-title">
      <div className="what-i-build__card">
        <div className="what-i-build__heading">
          <p className="section-label">what I build</p>
          <h2 id="what-i-build-title">Three layers, one feedback loop.</h2>
          <p>
            The portfolio works best when it shows the whole path from physical
            input to reliable human action.
          </p>
        </div>
        <div className="what-i-build__grid">
          {buildLayers.map(({ icon: Icon, title, copy, proof }, index) => (
            <article className="what-i-build__item" key={title}>
              <div className="what-i-build__item-header">
                <span>layer 0{index + 1}</span>
                <Icon aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <p className="what-i-build__proof">{proof}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
