"use client";

import { useEffect, useState } from "react";
import { KeresReplay } from "@/components/keres/keres-replay";
import { heroAnimations } from "@/content/hero-animations";
import { FlipDigitHeroAnimation } from "./flip-digit-hero-animation";
import {
  ReBalanceHeroAnimation,
  type RebalanceSketchNode,
} from "./rebalance-hero-animation";

export function HeroAnimationPanel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeNode, setActiveNode] = useState<RebalanceSketchNode | null>(null);
  const slide = heroAnimations[activeSlide];

  const annotation =
    activeNode === "raw"
      ? "noisy input from real sensors"
      : activeNode === "calibrate"
        ? "offset + dead zone before UI"
        : activeNode === "cue"
          ? "output must be calmer than input"
          : null;

  // biome-ignore lint/correctness/useExhaustiveDependencies: Changing slides must reset the timer even when durations match.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveNode(null);
      setActiveSlide((current) => (current + 1) % heroAnimations.length);
    }, slide.duration);

    return () => window.clearTimeout(timer);
  }, [activeSlide, slide.duration]);

  const handleSlideSelect = (index: number) => {
    setActiveNode(null);
    setActiveSlide(index);
  };

  return (
    <figure
      aria-label="Hero animation slideshow"
      className="hero-animation-panel signal-sketch"
    >
      <div className="hero-animation-panel__header signal-sketch__header">
        <span>{slide.eyebrow}</span>
        <span>
          auto · {activeSlide + 1}/{heroAnimations.length}
        </span>
      </div>

      <div
        aria-label="Animation slide controls"
        className="hero-animation-panel__controls"
        role="toolbar"
      >
        {heroAnimations.map((item, index) => (
          <button
            aria-label={`Show ${item.title}`}
            aria-pressed={activeSlide === index}
            className={`hero-animation-panel__control ${
              activeSlide === index ? "hero-animation-panel__control--active" : ""
            }`}
            key={item.id}
            onClick={() => handleSlideSelect(index)}
            type="button"
          >
            <span className="hero-animation-panel__label">{item.label}</span>
            <span
              className={`hero-animation-panel__progress ${
                activeSlide === index ? "hero-slide-progress" : ""
              }`}
              key={`${item.id}-${activeSlide}`}
              style={
                activeSlide === index
                  ? { animationDuration: `${item.duration}ms` }
                  : undefined
              }
            />
          </button>
        ))}
      </div>

      <div className="hero-animation-panel__stage hero-slide-enter" key={slide.id}>
        {slide.id === "keres" ? (
          <KeresReplay variant="panel" />
        ) : slide.id === "rebalance" ? (
          <ReBalanceHeroAnimation
            activeNode={activeNode}
            annotation={annotation}
            setActiveNode={setActiveNode}
          />
        ) : (
          <FlipDigitHeroAnimation />
        )}
      </div>
      <figcaption className="hero-animation-panel__caption">
        <strong>{slide.title}</strong>
        <span>{slide.caption}</span>
      </figcaption>
    </figure>
  );
}
