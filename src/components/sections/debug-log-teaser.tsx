import Link from "next/link";
import { debugLogEntries } from "@/content/debug-log";
import { routes } from "@/lib/routes";

export function DebugLogTeaser() {
  const entry = debugLogEntries[0];

  return (
    <section className="debug-log-section" id="debug-log">
      <div className="debug-log-section__copy">
        <p className="section-label">Debug Log</p>
        <h2>Raw engineering process stays visible.</h2>
        <p>A teaser for writing that reads like a lab notebook, not a polished victory lap.</p>
      </div>
      <article className="debug-card">
        <p className="debug-card__label">{entry.label}</p>
        <div className="debug-card__stages">
          {entry.stages.map((stage) => (
            <span key={stage}>{stage}</span>
          ))}
        </div>
        <p className="debug-card__thesis">{entry.thesis}</p>
        <ol>
          {entry.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ol>
        <Link className="debug-card__link" href={routes.debugLog}>
          Read the failure notes →
        </Link>
      </article>
    </section>
  );
}
