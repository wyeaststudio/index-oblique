# Scene 2: The Monoculture

## Purpose

An asymmetric, left-heavy editorial dossier exploring modern web homogeneity,
utilizing real-time RGB chromatic aberration.

## DOM Structure

- `#scene-2`: Pinned for `120vh`. Background IKEA-inspired blue-black
  (`#1B2631`) with Swiss Coffee foreground text.
- `#dossier-layout`: Two-column asymmetric grid (Left: 65% text, Right: 35%
  telemetry).
- `#chroma-text-wrapper`: Houses 3 identical layers of manifesto text stacked on
  top of each other:
  - Manifesto copy, set in Clash Display Bold:
    `TEN THOUSAND IDENTICAL INPUTS`
    `BREATHING RECYCLED AIR.`
    `"WE FORGOT HOW TO BREAK THE GRID."`
  - Layer C: Cyan channel
    (`color: #00F0FF; mix-blend-mode: screen; transform: translate(calc(var(--chroma-shift) * -1), 0)`).
  - Layer M: Magenta channel
    (`color: #EC008C; mix-blend-mode: screen; transform: translate(var(--chroma-shift), 0)`).
  - Layer K: Swiss Coffee base (`color: #F3EFE6; mix-blend-mode: normal`).
- `#dossier-sidebar`: Monospace technical logs, wireframe grid stamps, and
  "MinzCode" redaction bars.
- Keep all ledger, classification, telemetry, and marginal log text in Drafting
  Mono; only the manifesto layers use Clash Display.

## Velocity Mechanics

- Bind `--chroma-shift` CSS variable to scroll velocity:
  `gsap.quickSetter('#scene-2', '--chroma-shift', 'px')`.
- On velocity > `2200px/s`, trigger the **Terminal Tape Snap** outlined in
  `02-scroll-orchestration.md`.
