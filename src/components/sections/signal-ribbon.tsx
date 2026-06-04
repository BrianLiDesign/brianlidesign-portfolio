import { signalStages } from "@/content/site";

export function SignalRibbon() {
  return (
    <section aria-label="Signal system stages" className="signal-ribbon">
      {signalStages.map((stage, index) => (
        <span key={stage}>
          {index === 0 ? <span aria-hidden="true">≋</span> : null}
          {stage}
        </span>
      ))}
    </section>
  );
}
