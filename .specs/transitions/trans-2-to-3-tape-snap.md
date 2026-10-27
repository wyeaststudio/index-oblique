# Transition: Scene 2 (Monoculture) -> Scene 3 (Awakening)

## Trigger (Dual Condition)

- **Primary:** Scroll velocity > `2200px/s` inside Scene
  2[span_14](start_span)[span_14](end_span).
- **Fallback:** Scroll reaches 100% of Scene 2's pinned scroll distance without
  hitting velocity threshold.

## Phase 1: Scene 2 Exit (The Blowout)

- `--chroma-shift` instantly springs from current value to `120px` over
  0.15s[span_15](start_span)[span_15](end_span).
- Cyan (`#00F0FF`) and Magenta (`#EC008C`) channel text fly outward to screen
  edges and fade to `opacity: 0`.
- Black channel base text shatters into individual character spans scattered
  across random `(x, y)` offsets.

## Phase 2: The Interstitial Blank

- `#strobe-layer` fires a 3-frame rapid strobe: `#FFFFFF` -> `#000000` ->
  `#F3EFE6` (120ms total)[span_16](start_span)[span_16](end_span).
- Scene 2 unpins and unmounts/hides visibility.

## Phase 3: Scene 3 Entrance

- `#scene-3` container locks in center viewport (`perspective: 1200px`).
- Child depth planes assemble outward along the Z-axis with staggered spring
  physics:
  - `.layer-backdrop`: `z: -120px` (`duration: 0.6s, ease: 'back.out(1.5)'`)
  - `.layer-clouds`: `z: -60px` (`duration: 0.5s, delay: 0.05s`)
  - `.layer-sculpture`: `z: 0px` (`duration: 0.4s, delay: 0.1s`)
  - `.layer-eyeballs`: `z: +40px` (`duration: 0.5s, delay: 0.15s`)
  - `.layer-lightning`: `z: +80px` (`duration: 0.6s, delay: 0.2s`)
- Pointer parallax event listeners activate.
