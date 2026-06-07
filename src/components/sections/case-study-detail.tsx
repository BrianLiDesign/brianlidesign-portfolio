import {
  Activity,
  Bot,
  Camera,
  Cpu,
  Database,
  ExternalLink,
  Gauge,
  GitBranch,
  Lock,
  Play,
  ScanLine,
  Terminal,
  ToggleLeft,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CaseStudyTag } from "@/components/ui/case-study-tag";
import type { CaseStudy } from "@/content/case-studies";
import { CaseStudyVisualArtifact } from "./case-study-visual-artifact";

type CaseStudyDetailProps = {
  study: CaseStudy;
};

const flowIcons = {
  activity: Activity,
  bot: Bot,
  cpu: Cpu,
  database: Database,
  gauge: Gauge,
  "git-branch": GitBranch,
  lock: Lock,
  "scan-line": ScanLine,
  switch: ToggleLeft,
  terminal: Terminal,
};

function ContextLinks({
  links,
}: {
  links?: NonNullable<CaseStudy["deepDives"][number]["links"]>;
}) {
  if (!links?.length) {
    return null;
  }

  return (
    <div className="case-study-context-links">
      {links.map((link) => (
        <a href={link.href} key={`${link.kind}-${link.label}`} rel="noreferrer" target={link.href.startsWith("http") ? "_blank" : undefined}>
          <span>{link.kind}</span>
          {link.label}
          <ExternalLink aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function MediaFrame({
  media,
  priority = false,
}: {
  media: CaseStudy["heroMedia"] | CaseStudy["mediaGallery"][number];
  priority?: boolean;
}) {
  if (media.type === "placeholder") {
    return (
      <figure className="case-study-media case-study-media--placeholder">
        <div className="case-study-media__placeholder" role="img" aria-label={media.alt}>
          <Camera aria-hidden="true" />
          <span>{media.caption}</span>
          {media.note ? <small>{media.note}</small> : null}
        </div>
        <figcaption>{media.caption}</figcaption>
      </figure>
    );
  }

  if (media.type === "video") {
    return (
      <figure className="case-study-media case-study-media--video">
        <div className="case-study-media__video-wrap">
          <Play aria-hidden="true" className="case-study-media__play-icon" />
          <video aria-label={media.alt} controls muted playsInline preload={priority ? "metadata" : "none"}>
            <source src={media.src} type="video/mp4" />
          </video>
        </div>
        <figcaption>{media.caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="case-study-media">
      <img
        alt={media.alt}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        src={media.src}
      />
      <figcaption>{media.caption}</figcaption>
    </figure>
  );
}

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  return (
    <>
      <section className="case-study-hero content-page">
        <div className="case-study-hero__copy">
          <p className="section-label">{study.label}</p>
          <h1>{study.title}</h1>
          <p className="case-study-hero__thesis">{study.thesis}</p>
          {study.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="case-study-proof-strip" aria-label={`${study.title} proof points`}>
            {study.proofPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <div className="case-study-hero__actions">
            {study.sourceRepo ? (
              <ButtonLink href={study.sourceRepo} target="_blank" rel="noreferrer">
                View source repo
              </ButtonLink>
            ) : null}
          </div>
        </div>
        <div className="case-study-hero__media">
          <MediaFrame media={study.heroMedia} priority />
        </div>
        <aside className="case-study-fact-panel">
          <div className="case-study-ownership">
            <p className="section-label">What I owned</p>
            <p>{study.ownership.summary}</p>
            <ul>
              {study.ownership.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="section-label">Project details</p>
          <dl>
            {study.details.map((detail) => (
              <div key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
          <div className="tag-list">
            {study.tags.map((tag) => (
              <CaseStudyTag key={tag} label={tag} />
            ))}
          </div>
        </aside>
      </section>

      <section className="case-study-flow content-page content-page--wide">
        <div>
          <p className="section-label">System flow</p>
          <h2>{study.flow.title}</h2>
        </div>
        <ol className="case-study-flow__steps" aria-label={study.flow.title}>
          {study.flow.steps.map((step, index) => (
            <li key={step.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {(() => {
                const Icon = flowIcons[step.icon];
                return <Icon aria-hidden="true" />;
              })()}
              {step.label}
            </li>
          ))}
        </ol>
      </section>

      <section className="case-study-gallery content-page content-page--wide" id="project-artifacts">
        <div className="section-heading">
          <div>
            <p className="section-label">Project artifacts</p>
            <h2>Evidence you can see.</h2>
          </div>
          <p className="section-heading__credibility">
            Real project media appears where available, with placeholder cards only where sanitized screenshots are still needed.
          </p>
        </div>
        <div className="case-study-gallery__grid">
          {study.mediaGallery.map((media) => (
            <MediaFrame media={media} key={`${media.caption}-${media.src ?? media.alt}`} />
          ))}
        </div>
      </section>

      <section className="case-study-deep-dives content-page content-page--wide">
        <p className="section-label">Technical deep dives</p>
        <div className="case-study-deep-dives__grid">
          {study.deepDives.map((deepDive) => (
            <article className="case-study-deep-dive" key={deepDive.title}>
              <p className="case-study-deep-dive__kicker">{deepDive.kicker}</p>
              <h2>{deepDive.title}</h2>
              <p>{deepDive.body}</p>
              <ul>
                {deepDive.proof.map((proof) => (
                  <li key={proof}>{proof}</li>
                ))}
              </ul>
              <ContextLinks links={deepDive.links} />
            </article>
          ))}
        </div>
      </section>

      <CaseStudyVisualArtifact visual={study.visualHighlight} />

      <section className="case-study-code content-page content-page--wide">
        <div className="section-heading">
          <div>
            <p className="section-label">Code evidence</p>
            <h2>Short excerpts that show the design choices.</h2>
          </div>
          <p className="section-heading__credibility">
            Snippets are trimmed for readability and paired with the source file they came from.
          </p>
        </div>
        <div className="case-study-code__grid">
          {study.codeHighlights.map((highlight) => (
            <article className="case-study-code-card" key={highlight.title}>
              <div className="case-study-code-card__header">
                <div>
                  <p>{highlight.source}</p>
                  <h3>{highlight.title}</h3>
                </div>
                <span>{highlight.language}</span>
              </div>
              <pre>
                <code>{highlight.code}</code>
              </pre>
              <p>{highlight.explanation}</p>
              <ContextLinks links={highlight.links} />
            </article>
          ))}
        </div>
      </section>

      <section className="case-study-outcome content-page content-page--compact">
        <p className="section-label">Outcome and reflection</p>
        <h2>What this project proves.</h2>
        <ul>
          {study.outcome.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="case-study-outcome__reflection">{study.reflection}</p>
      </section>
    </>
  );
}
