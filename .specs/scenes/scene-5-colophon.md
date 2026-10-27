# Scene 5: Colophon & Production Run

## Purpose

The final resume sheet, colophon metadata, and interactive four-plate CMYK
lithographic registration reset.

## DOM Structure

- `#scene-5`: Standard scroll block. Background `#F3EFE6`.
- `#cmyk-specimen-frame`: Centered 400x500px container containing the Kelly &
  Cats halftones.
  - `.cmyk-plate.plate-cyan`: Rotated screen 15°, Cyan channel image.
  - `.cmyk-plate.plate-magenta`: Rotated screen 75°, Magenta channel image.
  - `.cmyk-plate.plate-yellow`: Rotated screen 0°, Yellow channel image.
  - `.cmyk-plate.plate-key`: Rotated screen 45°, Carbon Black master plate.
- `#colophon-resume-grid`: Monospace metadata columns listing Storybook systems,
  tech stack specifications, and press run credits.
- `#re-crank-button`: High-contrast industrial CTA:
  `[ RE-CRANK PRESS // IDX-00 ↑ ]`.

## Interaction Rules

- **Pointer Misregistration**: Moving the cursor over `#cmyk-specimen-frame`
  pulls the 4 plates slightly out of alignment along opposite coordinate
  vectors. Leaving returns them to registered center with `elastic.out(1, 0.4)`.
- **Re-Crank Action**: Clicking the button fires a smooth `window.scrollTo` back
  to `0px` (`duration: 1.4s, ease: 'power4.inOut'`).
