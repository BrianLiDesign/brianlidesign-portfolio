import { hero, heroProofStrip } from "@/content/site";
import { routes } from "@/lib/routes";
import { TrackedButtonLink } from "@/components/analytics/tracked-button-link";
import { ButtonLink } from "@/components/ui/button";
import { ProofChips } from "./proof-chips";
import { HeroAnimationPanel } from "@/components/visuals/hero-animation-panel";

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-section__copy">
        <p className="hero-section__meta">
          <span aria-hidden="true" className="hero-section__meta-icon">
            ≋
          </span>
          {hero.meta}
        </p>
        <h1>{hero.title}</h1>
        <p className="hero-section__summary">{hero.summary}</p>
        <p className="hero-section__focus">
          Focused on hardware/software systems, embedded tooling, robotics, and feedback interfaces.
        </p>
        <div className="hero-section__actions" aria-label="Primary actions" role="group">
          <ButtonLink href={routes.keres} variant="primary">
            View KERES
          </ButtonLink>
          <TrackedButtonLink href={routes.resumePdf} location="hero" variant="quiet">
            Download resume
          </TrackedButtonLink>
        </div>
        <div className="hero-proof-strip" aria-label="Strongest proof points" role="group">
          {heroProofStrip.map((proof) => (
            <span key={proof}>{proof}</span>
          ))}
        </div>
        <ProofChips />
      </div>
      <HeroAnimationPanel />
    </section>
  );
}
