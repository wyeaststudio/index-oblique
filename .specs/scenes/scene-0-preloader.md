# Scene 0: Calibration Preloader

## Purpose

Prepress calibration screen ensuring fonts and initial media buffer before
unveiling Scene 1.

## DOM Structure

- `#preloader-container`: Full viewport overlay
  (`position: fixed; inset: 0; z-index: 950; background: #F3EFE6`).
- `#squeegee-pass`: Absolute full-width bar
  (`height: 120px; background: #EC008C; mix-blend-mode: multiply`).
- `#halftone-poster-preview`: Centered SVG halftone graphic (Pure Black
  `#111111` outline eye).
- `#preloader-status`: Bottom monospace readout (`11px` Carbon Black):
  `STATUS: PRIMING OPTICAL DRUM // 100%`.

## Execution Logic

1. Squeegee bar translates Y from `-120px` to `100vh` over 800ms
   (`power2.inOut`).
2. Await `Promise.all([document.fonts.ready, mediaReadyPromise])` with a 1400ms
   fallback timeout.
3. On complete:
   - Viewport strobe: 80ms pure black/white invert.
   - Container split: `clip-path: inset(50% 0 50% 0)` over 400ms
     (`power4.inOut`).
   - Unmount preloader DOM from tree.
