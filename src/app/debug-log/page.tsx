import type { Metadata } from "next";
import { AlertTriangle, Check, GitCompareArrows } from "lucide-react";
import { debugLogEntries } from "@/content/debug-log";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering Debug Log — Brian Li",
  description:
    "Engineering decision records from Brian Li's projects, including KERES event ordering, debugging steps, tradeoffs, changed assumptions, and practical fixes.",
};

export default function DebugLogPage() {
  return (
    <section className="content-page debug-log-page">
      <p className="section-label">Debug Log</p>
      <h1>Failure notes, decision changes, and engineering judgment.</h1>
      <div className="debug-list">
        {debugLogEntries.map((entry) => (
          <details
            className={`debug-card${entry.featured ? " debug-card--featured" : ""}`}
            id={entry.slug}
            key={entry.slug}
            open={entry.featured}
          >
            <summary>
              <span className="debug-card__label">{entry.label}</span>
              <span className="debug-card__summary-title">{entry.title}</span>
              <span className="debug-card__thesis">{entry.thesis}</span>
            </summary>
            <div
              className="debug-card__stages"
              aria-label={`${entry.title} timeline`}
              role="group"
            >
              {entry.stages.map((stage) => (
                <span key={stage}>{stage}</span>
              ))}
            </div>
            <div
              className="debug-card__tags"
              aria-label={`${entry.title} tags`}
              role="group"
            >
              {entry.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <dl className="decision-record">
              {Object.entries(entry.decisionRecord).map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            {entry.trace ? (
              <section className="debug-trace" aria-labelledby={`${entry.slug}-trace-title`}>
                <h3 id={`${entry.slug}-trace-title`}>
                  <GitCompareArrows aria-hidden="true" />
                  {entry.trace.title}
                </h3>
                <div className="debug-trace__paths">
                  {entry.trace.paths.map((path) => {
                    const StatusIcon = path.status === "risk" ? AlertTriangle : Check;

                    return (
                      <article
                        className={`debug-trace__path debug-trace__path--${path.status}`}
                        key={path.label}
                      >
                        <p className="debug-trace__path-label">
                          <StatusIcon aria-hidden="true" />
                          {path.label}
                        </p>
                        <ol aria-label={`${path.label} sequence`}>
                          {path.steps.map((step, index) => (
                            <li key={step}>
                              <span>{String(index + 1).padStart(2, "0")}</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                        <p className="debug-trace__outcome">{path.outcome}</p>
                      </article>
                    );
                  })}
                </div>
              </section>
            ) : null}
            <ol>
              {entry.notes.map((note, index) => (
                <li key={note}>
                  {entry.noteLabels?.[index] ? <strong>{entry.noteLabels[index]}</strong> : null}
                  {note}
                </li>
              ))}
            </ol>
            <Link className="debug-card__link" href={entry.caseStudyHref}>
              Open related case study
            </Link>
          </details>
        ))}
      </div>
    </section>
  );
}
