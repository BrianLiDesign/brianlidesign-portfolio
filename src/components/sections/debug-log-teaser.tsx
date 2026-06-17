import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { debugLogEntries } from "@/content/debug-log";
import { routes } from "@/lib/routes";

export function DebugLogTeaser() {
  const entry = debugLogEntries[0];
  const processSteps = entry.notes.map((note, index) => ({
    label: ["Context", "Decision", "Next test"][index] ?? "Note",
    note,
    number: String(index + 1).padStart(2, "0"),
  }));

  return (
    <section className="debug-log-section" id="debug-log">
      <div className="debug-log-section__copy">
        <p className="section-label">Debug log / Failure notes</p>
        <h2>Raw engineering process stays visible.</h2>
        <p>A teaser for writing that reads like a lab notebook, not a polished victory lap.</p>
      </div>
      <article className="debug-card">
        <div className="debug-card__header">
          <p className="debug-card__label">{entry.label}</p>
          <div className="debug-card__stages" aria-label="Log stages">
            {entry.stages.map((stage) => (
              <span key={stage}>{stage}</span>
            ))}
          </div>
        </div>
        <blockquote className="debug-card__thesis">{entry.thesis}</blockquote>
        <ol className="debug-card__process" aria-label={`${entry.title} process notes`}>
          {processSteps.map((step) => (
            <li key={step.note}>
              <p className="debug-card__process-label">
                <span>{step.number}</span>
                <span aria-hidden="true">//</span>
                <strong>{step.label}</strong>
              </p>
              <p>{step.note}</p>
            </li>
          ))}
        </ol>
        <footer className="debug-card__footer">
          <div className="debug-card__framework" aria-label="Debug log framework">
            {processSteps.map((step) => (
              <span key={step.label}>
                {step.number} {step.label}
              </span>
            ))}
          </div>
          <Link className="debug-card__link" href={routes.debugLog}>
            Read the failure notes
            <ArrowRight aria-hidden="true" />
          </Link>
        </footer>
      </article>
    </section>
  );
}
