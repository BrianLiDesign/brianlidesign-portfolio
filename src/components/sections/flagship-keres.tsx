import { ButtonLink } from "@/components/ui/button";
import { KeresReplay } from "@/components/keres/keres-replay";
import { SectionLabel } from "@/components/ui/section-label";
import { routes } from "@/lib/routes";

export function FlagshipKeres() {
  return (
    <section className="flagship-section flagship-section--keres" id="keres">
      <div className="flagship-section__copy">
        <SectionLabel>Flagship case study · Simulation trace</SectionLabel>
        <h2>KERES turns coordinated simulation into evidence engineers can inspect.</h2>
        <div className="flagship-keres-brief" aria-label="KERES project summary" role="group">
          <dl>
            <div>
              <dt>Problem</dt>
              <dd>A visual swarm demo could not support controlled engineering comparison by itself.</dd>
            </div>
            <div>
              <dt>System</dt>
              <dd>Coordination, PX4 control, event accounting, metrics, and replay.</dd>
            </div>
            <div>
              <dt>Boundary</dt>
              <dd>Simulation prototype—not physical-drone deployment.</dd>
            </div>
          </dl>
          <div className="flagship-keres-brief__proof">
            <span>7 strategies</span>
            <span>6 formations</span>
            <span>417 passing tests</span>
          </div>
        </div>
        <ButtonLink href={routes.keres} variant="primary">
          Read the KERES case study
        </ButtonLink>
      </div>
      <KeresReplay variant="flagship" />
    </section>
  );
}
