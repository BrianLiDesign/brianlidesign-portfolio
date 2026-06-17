import { debugLogEntries } from "@/content/debug-log";
import Link from "next/link";

export default function DebugLogPage() {
  return (
    <section className="content-page debug-log-page">
      <p className="section-label">Debug Log</p>
      <h1>Failure notes, decision changes, and engineering judgment.</h1>
      <div className="debug-list">
        {debugLogEntries.map((entry) => (
          <details className="debug-card" key={entry.slug}>
            <summary>
              <span className="debug-card__label">{entry.label}</span>
              <span className="debug-card__summary-title">{entry.title}</span>
              <span className="debug-card__thesis">{entry.thesis}</span>
            </summary>
            <div className="debug-card__stages" aria-label={`${entry.title} timeline`}>
              {entry.stages.map((stage) => (
                <span key={stage}>{stage}</span>
              ))}
            </div>
            <div className="debug-card__tags" aria-label={`${entry.title} tags`}>
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
            <ol>
              {entry.notes.map((note) => (
                <li key={note}>{note}</li>
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
