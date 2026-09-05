import { Boxes, Database, Network, RadioTower } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { keresProject } from "@/content/keres";
import { KeresArchitectureExplorer } from "./keres-architecture-explorer";
import { KeresFormationExplorer } from "./keres-formation-explorer";
import { KeresReplay } from "./keres-replay";

const contributionIcons = [Network, RadioTower, Database, Boxes] as const;

export function KeresCaseStudy() {
  return (
    <article className="keres-page">
      <section className="keres-hero content-page content-page--wide">
        <div className="keres-hero__copy">
          <h1>{keresProject.title}</h1>
          <p className="keres-hero__meta">
            {keresProject.organization} · {keresProject.role} · {keresProject.period}
          </p>
          <p className="keres-hero__thesis">{keresProject.thesis}</p>
          <div className="keres-hero__actions" aria-label="KERES case-study actions" role="group">
            <ButtonLink href="#architecture" variant="primary">
              Explore the system
            </ButtonLink>
            <ButtonLink href="/resume" variant="quiet">
              Resume context
            </ButtonLink>
          </div>
          <dl className="keres-hero__status">
            {keresProject.summary.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <KeresReplay />
      </section>

      <section className="keres-scope content-page content-page--wide">
        <div className="section-heading">
          <div>
            <p className="section-label">Scope and boundary</p>
            <h2>A research platform, not a deployed system.</h2>
          </div>
          <p className="section-heading__credibility">
            The public case study separates implemented software from long-term concepts and unvalidated runtime paths.
          </p>
        </div>
        <div className="keres-scope__grid">
          <section>
            <h3>What the prototype investigated</h3>
            <ul>
              {keresProject.scope.inScope.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section>
            <h3>What this page does not claim</h3>
            <ul>
              {keresProject.scope.outOfScope.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </div>
      </section>

      <section className="keres-contributions content-page content-page--wide">
        <p className="section-label">What I worked on</p>
        <h2>I worked across the system boundaries.</h2>
        <div className="keres-contributions__grid">
          {keresProject.contributions.map((contribution, index) => {
            const Icon = contributionIcons[index];
            return (
              <article key={contribution.title}>
                <Icon aria-hidden="true" />
                <h3>{contribution.title}</h3>
                <p>{contribution.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="keres-architecture-section content-page content-page--wide" id="architecture">
        <div className="section-heading">
          <div>
            <p className="section-label">System architecture</p>
            <h2>Simulation, coordination, control, and evidence stay connected.</h2>
          </div>
          <p className="section-heading__credibility">
            Select a stage to see its responsibility. Teal marks the software path Brian helped build, integrate, or harden.
          </p>
        </div>
        <KeresArchitectureExplorer />
      </section>

      <section className="keres-scale content-page content-page--wide">
        <p className="section-label">Engineering scale</p>
        <div className="keres-scale__grid" role="list">
          {keresProject.metrics.map((metric) => (
            <div key={metric.label} role="listitem">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <p className="keres-scale__note">
          The 126 figure describes implemented coordination × formation × threat-profile configuration space before seeds, swarm sizes, or flight backends. It is not a claim that every combination was validated in the full Isaac, Pegasus, and PX4 runtime.
        </p>
      </section>

      <section className="keres-experiment content-page content-page--wide">
        <div>
          <p className="section-label">Formation explorer</p>
          <h2>Compare the geometry without turning it into spectacle.</h2>
          <p>
            Formation families were interchangeable experiment inputs. The useful question was how geometry changed coordination behavior under controlled scenarios.
          </p>
        </div>
        <KeresFormationExplorer />
      </section>

      <section className="keres-deep-dives content-page content-page--wide">
        <p className="section-label">Technical deep dives</p>
        <div className="keres-deep-dives__grid">
          {keresProject.deepDives.map((deepDive) => (
            <article key={deepDive.index}>
              <span>{deepDive.index}</span>
              <h2>{deepDive.title}</h2>
              <p>{deepDive.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="keres-verification content-page content-page--wide">
        <div>
          <p className="section-label">Verification approach</p>
          <h2>Most logic stayed testable without the GPU simulator.</h2>
        </div>
        <ol>
          {keresProject.verification.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ol>
      </section>

      <section className="keres-result content-page content-page--compact">
        <p className="section-label">Result</p>
        <h2>From concept to measurable experiments.</h2>
        <p>
          KERES finished the internship as a simulation prototype with a broader software foundation than the initial concept. It could compare several coordination strategies and formations, execute high-level commands through PX4-backed simulated vehicles, record structured experiment evidence, and replay mission behavior for analysis.
        </p>
        <p>
          My work focused on the software layers that made those experiments configurable, testable, and reproducible. The project is the clearest example in my portfolio of working across simulation, controls, multi-agent logic, observability, and verification.
        </p>
      </section>
    </article>
  );
}
