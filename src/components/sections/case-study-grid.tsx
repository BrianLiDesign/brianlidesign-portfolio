"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { projects } from "@/content/projects";
import { Card } from "@/components/ui/card";
import { CaseStudyTag } from "@/components/ui/case-study-tag";

type ProjectArtifactProps = {
  slug: string;
};

const flipStates = ["wait", "press", "release", "update"];
const hoverDigits = [0, 1, 2, 3];

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

function FlipThatDigitArtifact() {
  const [zone, setZone] = useState(1);
  const [artifactHover, setArtifactHover] = useState(false);
  const [clockDigit, setClockDigit] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setClockDigit((digit) => (digit + 1) % 10);
    }, 950);
    return () => window.clearInterval(timer);
  }, []);

  const displayDigit = artifactHover ? hoverDigits[zone] : clockDigit;
  const activeSegments = digitSegments[displayDigit] ?? [];

  const handleArtifactPointer = (event: PointerEvent<HTMLDivElement>) => {
    setZone(Math.min(3, Math.floor(getPointerRatio(event) * 4)));
  };

  return (
    <div
      className="project-artifact project-artifact--logic"
      aria-label="FPGA state machine artifact"
      onPointerMove={handleArtifactPointer}
      onPointerEnter={() => setArtifactHover(true)}
      onPointerLeave={() => setArtifactHover(false)}
    >
      <div className="flip-artifact__module">
        <div className="flip-artifact__module-header">
          <span>clk scan / debounced input</span>
          <span className="flip-artifact__mode">
            <i aria-hidden="true" />
            {artifactHover ? "scrub" : "cycle"}
          </span>
        </div>

        <div className="flip-artifact__body">
          <svg
            aria-label={`Seven-segment display showing ${displayDigit}`}
            className="flip-artifact__display"
            role="img"
            viewBox="0 0 90 146"
          >
            <rect
              className="flip-artifact__housing"
              height="144"
              rx="10"
              width="88"
              x="1"
              y="1"
            />
            <rect
              className="flip-artifact__screen"
              height="132"
              rx="7"
              width="76"
              x="7"
              y="7"
            />
            {segmentPaths.map((path, index) => {
              const active = activeSegments.includes(index);
              return (
                <path
                  className={active ? "seven-seg-active" : "seven-seg-idle"}
                  d={path}
                  key={`${path}-${index}`}
                  style={{ animationDelay: `${index * 0.11}s` }}
                />
              );
            })}
            <circle className="flip-artifact__decimal" cx="80" cy="132" r="3" />
          </svg>

          <div className="flip-artifact__states">
            {flipStates.map((state, index) => {
              const active = index === zone && artifactHover;
              return (
                <div
                  className={`flip-artifact__state ${active ? "is-active" : ""}`}
                  key={state}
                >
                  <span className="flip-artifact__state-index">
                    {index + 1}
                  </span>
                  <span className="flip-artifact__state-label">{state}</span>
                </div>
              );
            })}

            <p className="flip-artifact__note">
              Cycles 0-9 like a scanned seven-segment display; hover to scrub
              WAIT -&gt; PRESS -&gt; RELEASE -&gt; UPDATE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectArtifact({ slug }: ProjectArtifactProps) {
  if (slug === "rebalance") {
    return (
      <div
        className="project-artifact project-artifact--rebalance"
        aria-label="Sensor calibration artifact"
      >
        <div className="project-artifact__header">
          <span>sensor -&gt; calibration -&gt; cue</span>
          <strong>centered</strong>
        </div>
        <div className="artifact-balance">
          <span>L 52%</span>
          <i />
          <span>R 48%</span>
        </div>
        <div className="artifact-jitter" aria-hidden="true">
          {[34, 58, 41, 72, 50, 28, 64].map((height, index) => (
            <span
              key={`${height}-${index}`}
              style={{ "--bar-height": `${height}%` } as CSSProperties}
            />
          ))}
        </div>
        <p>RAW pressure / 20 Hz stream / 4 FSR sensors</p>
      </div>
    );
  }

  if (slug === "flip-that-digit") {
    return <FlipThatDigitArtifact />;
  }

  if (slug === "operation-surf") {
    return (
      <div
        className="project-artifact project-artifact--workflow"
        aria-label="Backend operations workflow artifact"
      >
        <div className="workflow-map">
          {["volunteer", "event", "role", "api"].map((node) => (
            <span key={node}>{node}</span>
          ))}
        </div>
        <div className="workflow-rail" aria-hidden="true" />
        <p>CRUD / permissions / MongoDB / coordination</p>
      </div>
    );
  }

  return (
    <div
      className="project-artifact project-artifact--learning"
      aria-label="IDE learning loop artifact"
    >
      <div className="learning-loop">
        {["explain", "quiz", "grade", "adapt"].map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
      <p>local IDE loop / validated output / adaptive engine</p>
    </div>
  );
}

export function CaseStudyGrid() {
  return (
    <section className="case-studies-section" id="case-studies">
      <div className="section-heading">
        <div>
          <p className="section-label">Case files</p>
          <h2>Artifacts over abstractions.</h2>
        </div>
        <div className="section-heading__copy">
          <p>
            Preview cards show what was built, what kind of evidence exists, and
            why the work matters.
          </p>
          <p className="section-heading__credibility">
            Evidence is shown as project facts, roles, artifacts, and process
            notes - not invented impact numbers.
          </p>
        </div>
      </div>
      <div className="case-study-grid">
        {projects.map((project, index) => (
          <Link
            className="case-study-card__link-wrapper"
            href={project.href}
            key={project.slug}
          >
            <Card
              className={`case-study-card case-study-card--${project.slug}`}
            >
              <span className="case-study-card__file-number">
                case file {String(index + 1).padStart(2, "0")}
              </span>
              <p className="case-study-card__label">{project.label}</p>
              <ProjectArtifact slug={project.slug} />
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className="case-study-card__role">Role: {project.role}</p>
              <p className="case-study-card__evidence">{project.evidence}</p>
              <p className="case-study-card__note">note: {project.note}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <CaseStudyTag key={tag} label={tag} />
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
