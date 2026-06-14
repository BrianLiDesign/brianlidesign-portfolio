import { Cpu } from "lucide-react";

const segments = [
  "top",
  "upper-left",
  "upper-right",
  "middle",
  "lower-left",
  "lower-right",
  "bottom",
] as const;

const stateSteps = [
  "idle",
  "button sampled",
  "debounced",
  "score write",
  "release required",
] as const;

export function FlipDigitHeroAnimation() {
  return (
    <div
      aria-label="Animated FPGA seven segment state machine cycle"
      className="flip-hero-animation"
      role="img"
    >
      <div className="flip-hero-animation__header">
        <span className="flip-hero-animation__eyebrow">
          <Cpu aria-hidden="true" size={14} strokeWidth={2.25} />
          one debounce/release cycle
        </span>
        <span className="flip-hero-animation__caption">
          Press. Lock. Release. Advance.
        </span>
      </div>

      <div className="flip-hero-animation__body">
        <div aria-hidden="true" className="flip-hero-animation__display">
          {segments.map((segment, index) => (
            <span
              className={`seven-seg-piece seven-seg-${segment}`}
              key={segment}
              style={{ animationDelay: `${index * 0.16}s` }}
            />
          ))}
        </div>

        <div className="flip-hero-animation__states">
          {stateSteps.map((step, index) => (
            <div
              className="flip-state-row"
              key={step}
              style={{ animationDelay: `${index * 0.72}s` }}
            >
              <span className="flip-state-row__index">S{index}</span>
              <span className="flip-state-row__label">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="flip-hero-animation__note">
        The important motion is not the digit flashing — it is the state machine
        waiting for clean release before it trusts the next input.
      </p>
    </div>
  );
}
