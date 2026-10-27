# Transition: Scene 0 (Preloader) -> Scene 1 (Genesis)

## Trigger

Completion of asset check:
`Promise.all([document.fonts.ready, videoCanPlayThrough])` or 1400ms timeout
fallback.

## Phase 1: Scene 0 Exit

- `#squeegee-pass` translates Y from `-120px` to `100vh` over 0.8s
  (`ease: 'power2.inOut'`).
- Halftone preview graphic `#halftone-poster-preview` blends under the squeegee
  with `mix-blend-mode: multiply`.

## Phase 2: Interstitial Strobe

- Global overlay `#strobe-layer` executes an 80ms strobe: `#111111` -> `#FFFFFF`
  -> transparent (2 frames).
- `#preloader-container` splits open using `clip-path: inset(50% 0 50% 0)` over
  0.4s (`ease: 'power4.inOut'`).
- Unmount `#preloader-container` once complete.

## Phase 3: Scene 1 Entrance

- Corner registration marks `[+]` animate from preloader center to the 4
  viewport edges (`inset: 24px`).
- `#eye-video` unpauses on frame 0.
- Scene 1 enters its pinned state.
