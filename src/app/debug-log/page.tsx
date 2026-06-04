import { debugLogEntries } from "@/content/debug-log";

export default function DebugLogPage() {
  return (
    <section className="content-page">
      <p className="section-label">Debug Log</p>
      <h1>Failure notes, decision changes, and engineering judgment.</h1>
      <div className="debug-list">
        {debugLogEntries.map((entry) => (
          <article className="debug-card" key={entry.slug}>
            <p className="debug-card__label">{entry.label}</p>
            <h2>{entry.title}</h2>
            <p className="debug-card__thesis">{entry.thesis}</p>
            <ol>
              {entry.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}
