import { ReBalanceDemo } from "@/components/rebalance/rebalance-demo";
import { SectionLabel } from "@/components/ui/section-label";

export function FlagshipRebalance() {
  return (
    <section className="flagship-section" id="rebalance">
      <div className="flagship-section__copy">
        <SectionLabel>Flagship case study · Calibration bench</SectionLabel>
        <h2>ReBalance turns unstable sensor input into feedback someone can act on.</h2>
        <div
          className="flagship-calibration-brief"
          aria-label="ReBalance calibration summary"
          role="group"
        >
          <dl className="flagship-calibration-brief__steps">
            <div>
              <dt>Problem</dt>
              <dd>Raw pressure signal jitters</dd>
            </div>
            <div>
              <dt>Method</dt>
              <dd>Calibrate before presenting the cue</dd>
            </div>
            <div>
              <dt>Output</dt>
              <dd>Shift left / centered / shift right</dd>
            </div>
          </dl>
          <div className="flagship-calibration-brief__comparison">
            <article>
              <span>Before calibration</span>
              <p>Jittery raw pressure makes the cue feel nervous, even when the user is close to centered.</p>
            </article>
            <article>
              <span>After calibration</span>
              <p>Dead-zone and offset logic preserve debug data while presenting a calmer correction.</p>
            </article>
          </div>
        </div>
        <p className="flagship-section__stamp">
          <span>BL</span>
          Brian Li · Systems Lab
        </p>
      </div>
      <ReBalanceDemo />
    </section>
  );
}
