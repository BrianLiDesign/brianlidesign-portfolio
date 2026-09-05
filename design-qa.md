# Design QA — Portfolio audit fixes

## Comparison target

- Source visual truth:
  - `qa/reference-home-desktop.png`
  - `qa/reference-home-mobile.png`
  - `qa/reference-keres-desktop.png`
- Browser-rendered implementation:
  - `qa/03-home-consolidated-desktop.png`
  - `qa/07-home-final-mobile.png`
  - `qa/04-keres-summary-desktop.png`
  - `qa/06-keres-summary-mobile.png`
- Desktop viewport requested: 1280 × 720 CSS px; source and implementation captures: 1265 × 712 px.
- Mobile viewport requested: 390 × 844 CSS px; source and implementation captures: 375 × 812 px.
- Density normalization: source and implementation were captured by the same in-app browser surface at the same requested viewport; no resampling was required.
- State: homepage initial state, KERES initial state, and mobile navigation open state.

## Full-view comparison evidence

The original and revised desktop homepage, mobile homepage, and KERES entry were opened together in one comparison pass. The revised views retain the existing grid, typography, palette, borders, icon language, animation panels, and content hierarchy. Intentional differences are limited to the audited fixes: tighter hero spacing, removal of the duplicate metric strip, a non-floating mobile Contact action, shorter community copy, and the expanded KERES summary.

The primary homepage CTA now ends at approximately 700 CSS px in the 720 px desktop viewport and is fully visible. At the mobile breakpoint the document scroll width remains 375 px, the Contact CTA computes to `position: static`, and the proof cards remain inside the content width.

## Focused-region comparison evidence

- Hero: the headline and supporting copy retain their original wrapping and visual weight. Reduced vertical spacing brings both CTAs fully into view without shrinking the main typography or animation panel.
- Mobile hero: the fixed Contact control no longer obscures proof content. The first project proof card begins directly after the primary actions.
- KERES entry: contribution, team, constraints, and outcome use the existing two-column definition-list treatment on desktop and the existing one-column treatment on mobile.
- Mobile navigation: Shift+Tab from Close wraps to LinkedIn; Escape closes the menu and restores focus to Menu.

## Required fidelity surfaces

- Fonts and typography: existing Lexend Deca and JetBrains Mono variables, sizes, weights, letter spacing, and headline wrapping are preserved. New KERES labels and values reuse the existing monospace definition-list styles. No truncation was observed.
- Spacing and layout rhythm: the hero top and inter-element spacing are intentionally tighter; its two-column proportions and major alignments are unchanged. Mobile content remains within the viewport.
- Colors and visual tokens: no palette or token changes. Existing paper, ink, teal, line, focus, and CTA colors are preserved.
- Image quality and asset fidelity: all existing images, diagrams, icons, and animation surfaces are unchanged. No placeholder or synthetic replacement asset was introduced.
- Copy and content: redundant homepage metrics and two repetitive community paragraphs were removed. KERES gained a concise, factual summary derived from claims already present in the case study.

## Interaction and runtime checks

- Primary `View KERES` CTA navigated successfully to `/case-studies/keres`.
- Hero slide selection changed the selected control and caption.
- Mobile menu focus wrapping and Escape dismissal passed.
- The browser console contained no warnings or errors during the checked flow.
- Reduced-motion code now stops automatic hero-slide advancement and labels the control state as manual. The existing CSS disables decorative animation and transition effects.

## Findings

No actionable P0, P1, or P2 visual or interaction differences remain within the implemented scope.

## Comparison history

1. Baseline: desktop primary actions were clipped by the first viewport; the fixed mobile Contact control obscured the proof strip; metrics and community positioning were repetitive; KERES exposed only status and language.
2. First fix pass: tightened desktop hero spacing and made Contact static on mobile. Post-fix captures confirmed a fully visible desktop CTA, no mobile obstruction, and no horizontal overflow.
3. Second fix pass: removed the duplicate hero metric strip, shortened the community copy, and added the KERES contribution/team/constraints/outcome summary. Post-fix captures confirmed cleaner hierarchy on desktop and mobile.
4. Accessibility pass: added focus trapping, Escape dismissal with focus restoration, and reduced-motion-aware slide timing. Browser interaction checks passed.

## Open questions

- An employer-approved, sanitized KERES artifact would strengthen direct evidence, but none exists in the repository. No artifact was invented or reconstructed.
- A dedicated assistive-technology pass with a screen reader remains valuable beyond browser and DOM checks.

## Follow-up polish

- P3: consider adding body scroll locking while the mobile navigation is open.
- P3: add a sanitized KERES replay, configuration, or test artifact if an approved source becomes available.

## Implementation checklist

- [x] Desktop CTA fully visible at the audited laptop viewport.
- [x] Mobile Contact no longer obscures content.
- [x] Mobile proof content stays within the viewport.
- [x] Repeated homepage content consolidated.
- [x] KERES entry summary added.
- [x] Reduced-motion autoplay behavior fixed.
- [x] Mobile navigation keyboard loop and Escape behavior verified.
- [x] Lint, typecheck, tests, production build, asset, metadata, link, and observability checks passed.

final result: passed
