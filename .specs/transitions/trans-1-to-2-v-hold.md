# Transition: Scene 1 (Genesis) -> Scene 2 (The Monoculture)

## Trigger

Scroll progress along Scene 1's 150vh pinned
duration[span_9](start_span)[span_9](end_span).

## Phase 1: Scene 1 Exit (0.0 to 0.5 Progress)

- Inner characters of `[index/oblique>` (`ndex` and `blique`) fade out with
  horizontal blur (`filter: blur(8px)`, `opacity: 0`).
- The outer brackets cinch around the retained `I/O` to form `[I/O>`.
- At 0.5 progress, GSAP Flip transfers `[I/O>` from Scene 1's flow into
  `#hud-brand-slot` in the persistent
  HUD[span_10](start_span)[span_10](end_span).
- `#eye-video` scales vertically by 300% via an SVG displacement filter to
  simulate scanline tear.

## Phase 2: The V-Hold Slip (Section Handoff)

- As Scene 1 unpins, apply a dynamic spring hitch to the main canvas wrapper:
  `gsap.fromTo('#app-scroller', { y: -48 }, { y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })`[span_11](start_span)[span_11](end_span).

## Phase 3: Scene 2 Entrance

- Scene 2 pins immediately at the bottom of the
  slip[span_12](start_span)[span_12](end_span).
- Monoculture dossier layout slides up into view.
- Velocity tracking engages for
  `--chroma-shift`[span_13](start_span)[span_13](end_span).
