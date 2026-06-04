import { hero } from "@/content/site";
import { ProofChips } from "./proof-chips";
import { SignalSketch } from "@/components/visuals/signal-sketch";

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-section__copy">
        <p className="hero-section__meta">{hero.meta}</p>
        <h1>{hero.title}</h1>
        <p className="hero-section__summary">{hero.summary}</p>
        <ProofChips />
      </div>
      <SignalSketch />
    </section>
  );
}
