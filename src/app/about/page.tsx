import { communityBridge } from "@/content/site";
import { resumeHighlights } from "@/content/resume-highlights";

export default function AboutPage() {
  return (
    <section className="content-page">
      <p className="section-label">About</p>
      <h1>Hawaii-born computer engineering student building useful systems.</h1>
      <div className="content-page__grid">
        <div>
          {communityBridge.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <aside className="content-aside">
          <h2>Current signals</h2>
          <ul>
            {resumeHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
