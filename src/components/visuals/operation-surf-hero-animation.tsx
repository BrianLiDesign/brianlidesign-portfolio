import { DatabaseZap } from "lucide-react";

const workflowCards = ["volunteer", "permission", "coordinator"] as const;

export function OperationSurfHeroAnimation() {
  return (
    <div
      aria-label="Animated backend workflow for volunteer operations"
      className="ops-hero-animation"
      role="img"
    >
      <div className="ops-hero-animation__header">
        <span className="ops-hero-animation__eyebrow">
          <DatabaseZap aria-hidden="true" size={14} strokeWidth={2.25} />
          one request/permission cycle
        </span>
        <span className="ops-hero-animation__caption">
          People data moves only after access is clear.
        </span>
      </div>

      <div className="ops-hero-animation__track" aria-hidden="true">
        <span className="ops-packet" />
      </div>

      <div className="ops-hero-animation__cards">
        {workflowCards.map((label, index) => (
          <div
            className="ops-card"
            key={label}
            style={{ animationDelay: `${index * 0.55}s` }}
          >
            <span className="ops-card__index">0{index + 1}</span>
            <span className="ops-card__label">{label}</span>
            <span
              className="ops-scan-line"
              style={{ animationDelay: `${index * 0.55 + 0.2}s` }}
            />
          </div>
        ))}
      </div>

      <p className="ops-hero-animation__note">
        One complete cycle: API request → access check → CRUD action →
        operations-ready confirmation for a 600-volunteer system.
      </p>
    </div>
  );
}
