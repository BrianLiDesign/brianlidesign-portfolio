import { ReBalanceDemo } from "@/components/rebalance/rebalance-demo";
import { SectionLabel } from "@/components/ui/section-label";

export function FlagshipRebalance() {
  return (
    <section className="flagship-section" id="rebalance">
      <div className="flagship-section__copy">
        <SectionLabel>Flagship case study · Calibration bench</SectionLabel>
        <h2>ReBalance turns unstable sensor input into feedback someone can act on.</h2>
        <p className="flagship-section__stamp">
          <span>BL</span>
          Brian Li · Systems Lab
        </p>
      </div>
      <ReBalanceDemo />
    </section>
  );
}
