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

function ReBalanceEvidence() {
  return (
    <section className="case-study-proof-module content-page content-page--wide">
      <div className="section-heading">
        <div>
          <p className="section-label">Architecture and calibration</p>
          <h2>Raw pressure becomes a calmer correction cue.</h2>
        </div>
        <p className="section-heading__credibility">
          The system keeps the debugging signal visible while separating it from
          the feedback a patient should act on.
        </p>
      </div>
      <ol className="system-diagram" aria-label="ReBalance architecture">
        {["FSR sensors", "Arduino", "Web Serial", "calibration model", "dashboard cue", "user correction"].map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <div className="before-after-grid">
        <article>
          <span>Before calibration</span>
          <h3>Jitter drives the cue.</h3>
          <p>Raw pressure is useful for diagnosis, but it can flicker too much for rehabilitation feedback.</p>
        </article>
        <article>
          <span>After calibration</span>
          <h3>Dead zone and offset correction settle the output.</h3>
          <p>Baseline correction, an active threshold, and zone scoring make the public cue calmer than the input.</p>
        </article>
      </div>
      <div className="implementation-detail-grid">
        {["Sensor sampling around 20 Hz", "Newline-delimited Web Serial parsing", "Per-side baseline calibration", "Dead-zone threshold", "UI smoothing through zone labels", "Invalid frame and idle-state handling"].map((detail) => (
          <span key={detail}>{detail}</span>
        ))}
      </div>
    </section>
  );
}

function FlipThatDigitEvidence() {
  return (
    <section className="case-study-proof-module content-page content-page--wide">
      <div className="section-heading">
        <div>
          <p className="section-label">State machine and display packing</p>
          <h2>The game models physical switch behavior.</h2>
        </div>
        <p className="section-heading__credibility">
          The important work is timing: press, debounce, validate, update, and
          wait for release before another event can count.
        </p>
      </div>
      <ol className="state-machine-diagram" aria-label="Flip That Digit state machine">
        {["WAIT", "PRESS DETECTED", "DEBOUNCE", "VALIDATE SWITCH", "UPDATE SCORE", "WAIT FOR RELEASE"].map((state) => (
          <li key={state}>{state}</li>
        ))}
      </ol>
      <div className="display-packing-grid">
        <article>
          <span>digit</span>
          <strong>8</strong>
          <code>0b1111111</code>
        </article>
        <article>
          <span>segment mask</span>
          <strong>4</strong>
          <code>0b0110011</code>
        </article>
        <article>
          <span>display output</span>
          <strong>target &lt;&lt; 12 | score</strong>
          <code>MMIO write</code>
        </article>
      </div>
      <div className="implementation-detail-grid">
        {["Mechanical switch bounce", "Limited seven-segment output", "Memory-mapped I/O", "Assembly loop constraints", "OTTER MCU integration"].map((detail) => (
          <span key={detail}>{detail}</span>
        ))}
      </div>
    </section>
  );
}

function OperationSurfEvidence() {
  return (
    <section className="case-study-proof-module content-page content-page--wide">
      <div className="section-heading">
        <div>
          <p className="section-label">API boundaries and permissions</p>
          <h2>One shaped response replaces scattered frontend joins.</h2>
        </div>
        <p className="section-heading__credibility">
          The backend owns access rules and returns coordination-shaped data
          before the UI sees it.
        </p>
      </div>
      <div className="api-before-after">
        <article>
          <span>Before</span>
          <p>frontend fetches volunteer</p>
          <p>frontend fetches shifts</p>
          <p>frontend fetches programs</p>
          <p>frontend joins manually</p>
        </article>
        <article>
          <span>After</span>
          <p>single enriched API response</p>
          <p>admin-only fields removed from public payloads</p>
          <p>signup responses include shift and program context</p>
        </article>
      </div>
      <div className="permission-matrix" role="table" aria-label="Operation Surf permission matrix">
        <div role="row">
          {["User type", "Public programs", "Private details", "Edit shifts", "Manage signups"].map((cell) => (
            <strong role="columnheader" key={cell}>{cell}</strong>
          ))}
        </div>
        {[
          ["Public visitor", "Yes", "No", "No", "No"],
          ["Volunteer", "Yes", "Limited", "No", "Own"],
          ["Admin", "Yes", "Yes", "Yes", "Yes"],
        ].map((row) => (
          <div role="row" key={row[0]}>
            {row.map((cell) => (
              <span role="cell" key={cell}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="endpoint-list" aria-label="Representative endpoints">
        {["GET /api/programs", "GET /api/signups/:id", "POST /api/volunteers", "PATCH /api/admin/shifts/:id"].map((endpoint) => (
          <code key={endpoint}>{endpoint}</code>
        ))}
      </div>
      <div className="data-model-sketch">
        <p><strong>Program</strong> has many Shifts</p>
        <p><strong>Volunteer</strong> has many Signups</p>
        <p><strong>Signup</strong> belongs to Volunteer and Shift</p>
      </div>
    </section>
  );
}

function SpontusEvidence() {
  const trustSteps = [
    "Team signs up with .edu",
    "Sponsor uses work email",
    "Profile completion",
    "Manual verification",
    "Verified marketplace access",
    "Application review",
  ];

  const riskControls = [
    ["Fake team", ".edu validation + verification status"],
    ["Untrusted sponsor", "work-email validation + sponsor verification"],
    ["Premature database exposure", "Supabase RLS/schema foundation"],
    ["Fragile demo", "offline seeded fallback"],
    ["Repo drift", "CI, security, workflow checks"],
  ];

  return (
    <section className="case-study-proof-module content-page content-page--wide">
      <div className="section-heading">
        <div>
          <p className="section-label">Marketplace trust system</p>
          <h2>Verification gates turn listings into credible opportunities.</h2>
        </div>
        <p className="section-heading__credibility">
          The core product work connects business risk to technical controls:
          identity checks, profile completion, verification state, schema
          boundaries, and workflow automation.
        </p>
      </div>
      <ol className="spontus-trust-flow" aria-label="Spontus trust workflow">
        {trustSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <div className="risk-control-matrix" role="table" aria-label="Business risks mapped to technical controls">
        <div role="row">
          <strong role="columnheader">Business risk</strong>
          <strong role="columnheader">Technical control</strong>
        </div>
        {riskControls.map(([risk, control]) => (
          <div role="row" key={risk}>
            <span role="cell">{risk}</span>
            <span role="cell">{control}</span>
          </div>
        ))}
      </div>
      <div className="implementation-detail-grid">
        {[
          "canonical domain model",
          "MVP build slices",
          "verification status provider",
          "profile completion tests",
          "Supabase schema direction",
          "security workflow gates",
        ].map((detail) => (
          <span key={detail}>{detail}</span>
        ))}
      </div>
    </section>
  );
}

function CaseStudyProofModule({ slug }: { slug: CaseStudy["slug"] }) {
  if (slug === "rebalance") {
    return <ReBalanceEvidence />;
  }

  if (slug === "spontus") {
    return <SpontusEvidence />;
  }

  if (slug === "flip-that-digit") {
    return <FlipThatDigitEvidence />;
  }

  if (slug === "operation-surf") {
    return <OperationSurfEvidence />;
  }

  return null;
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
            <ButtonLink href="/resume" variant="quiet">
              Resume context
            </ButtonLink>
          </div>
          <p className="case-study-resume-note">
            This project appears under Projects on my resume.
          </p>
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

      <CaseStudyProofModule slug={study.slug} />

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
