# Transition: Scene 3 (Awakening) -> Scene 4 (Specimen Bay)

## Trigger

Scrubbing past the pinned duration of Scene
3[span_17](start_span)[span_17](end_span).

## Phase 1: Scene 3 Exit (Hydraulic Flattening)

- All 5 depth layers of Scene 3 tween from their respective Z-positions back to
  `translateZ(0px)` simultaneously over 400ms
  (`ease: 'power2.inOut'`)[span_18](start_span)[span_18](end_span).
- Eyeball tracking and lightning parallax freeze.
- Elements simulate being pressed flat under an industrial
  roller[span_19](start_span)[span_19](end_span).

## Phase 2: Interstitial 5500K Flash

- As Z reaches 0, `#strobe-layer` fires an 80ms pure white (`#FFFFFF`) flash to
  reset optical adaptation[span_20](start_span)[span_20](end_span).
- Scene 3 visibility sets to `none`.

## Phase 3: Scene 4 Entrance

- `#light-table-bed` fades in (`#ECE9E2` with 32px
  grid)[span_21](start_span)[span_21](end_span)[span_22](start_span)[span_22](end_span).
- The 4 smoked glass slabs (`IDX-01` through `IDX-04`) drop into view
  sequentially:
  `gsap.from('.specimen-slab', { y: 80, opacity: 0, stagger: 0.06, ease: 'power3.out' })`[span_23](start_span)[span_23](end_span)[span_24](start_span)[span_24](end_span).
- Mouse tracking for the light-table spotlight (`--mouse-x`, `--mouse-y`)
  activates[span_25](start_span)[span_25](end_span).
