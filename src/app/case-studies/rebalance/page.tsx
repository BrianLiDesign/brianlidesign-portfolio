import { FlagshipRebalance } from "@/components/sections/flagship-rebalance";

export default function ReBalancePage() {
  return (
    <>
      <FlagshipRebalance />
      <section className="content-page content-page--compact">
        <p className="section-label">Case study direction</p>
        <h1>ReBalance full case study is the next expansion point.</h1>
        <p>
          This route is prepared for the full hardware-software writeup: sensor mat,
          Web Serial stream, calibration model, feedback UI, and Debug Log notes.
        </p>
      </section>
    </>
  );
}
