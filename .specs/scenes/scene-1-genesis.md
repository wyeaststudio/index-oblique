# Scene 1: Genesis (IDX-00)

## Purpose

Hero introduction featuring the velocity-scrubbed halftone eye and the animated
brand collapse.

## DOM Structure

- `#scene-1`: Container pinned for `150vh` via ScrollTrigger. Background
  `#F3EFE6`.
- `#eye-video-container`: Centered aspect-ratio container holding
  `<video id="eye-video">`.
  - Asset: Halftone eye video loop.
  - Styling: Grayscale, high-contrast, mix-blend `multiply`.
- `#brand-title-banner`: Centered variable title `<Index/Oblique>`.
  - Structure:
    `<span id="bracket-l">&lt;</span><span id="char-i">I</span><span class="dissolve-char">ndex</span><span class="dissolve-char">/</span><span id="char-o">O</span><span class="dissolve-char">blique</span><span id="bracket-r">&gt;</span>`.

## Interaction & Kinetic Rules

- **Video Velocity Scrub**: In `ScrollTrigger.onUpdate`, read
  `Math.abs(self.getVelocity())`. Scale `playbackRate` dynamically between `0.5`
  and `2.5`.
- **Title Collapse**: Between scroll progress `0.0` and `0.4`:
  - `.dissolve-char` elements tween `opacity: 0, filter: blur(8px)`.
  - Outer brackets cinched onto `I` and `O` to form `<I/O>`.
  - At `0.5` progress, trigger GSAP Flip to reparent `<I/O>` into
    `#hud-brand-slot` in the persistent HUD.
