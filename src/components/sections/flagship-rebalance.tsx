import { ReBalanceDemo } from "@/components/rebalance/rebalance-demo";
import { SectionLabel } from "@/components/ui/section-label";

export function FlagshipRebalance() {
  return (
    <section className="flagship-section">
      <div className="flagship-section__copy">
        <SectionLabel>Flagship case study</SectionLabel>
        <h2>ReBalance turns unstable sensor input into feedback someone can act on.</h2>
        <p>
          The homepage leads with ReBalance because it demonstrates the portfolio thesis:
          hardware input, software interpretation, and a human-readable correction loop.
        </p>
        <div className="field-notes">
          <p>
            <span>problem:</span> raw pressure signal jitters
          </p>
          <p>
            <span>method:</span> calibrate before presenting the cue
          </p>
          <p>
            <span>output:</span> shift left / centered / shift right
          </p>
        </div>
      </div>
      <ReBalanceDemo />
    </section>
  );
}
