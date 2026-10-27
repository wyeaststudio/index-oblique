# Transition: Scene 4 (Specimen Bay) -> Scene 5 (Colophon)

## Trigger

Scroll exit from Scene 4.

## Phase 1: Scene 4 Exit (CRT Degauss)

- If any `.arcade-projection-plane` is currently active in Z-space, collapse it
  instantly: `scaleY: 0.01` (50ms) followed by `scaleX: 0`
  (50ms)[span_26](start_span)[span_26](end_span).
- The 4 specimen slabs slide downward off the bottom edge:
  `yPercent: 120, stagger: 0.04, ease: 'power2.in'`.

## Phase 2: The Lamp Cut

- Viewport background cuts to `#111111` for 100ms (simulating light-table bulb
  power-down) before transitioning to Scene 5's
  `#F3EFE6`[span_27](start_span)[span_27](end_span)[span_28](start_span)[span_28](end_span).

## Phase 3: Scene 5 Entrance (CMYK Registration)

- Scene 5 colophon layout renders.
- The 4 halftone plates of `#cmyk-specimen-frame` arrive intentionally offset:
  - Cyan: `translate(-16px, -12px)`
  - Magenta: `translate(16px, 8px)`
  - Yellow: `translate(-8px, 14px)`
  - Key: `translate(0, 0)`
- As scroll velocity drops to zero, plates tween back to `(0, 0)` with
  `elastic.out(1, 0.4)`[span_29](start_span)[span_29](end_span).
- Interactive mouse misregistration listeners engage on the frame.
