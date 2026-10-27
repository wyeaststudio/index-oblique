# Scene 2: The Monoculture

## Purpose

An asymmetric, left-heavy editorial dossier exploring modern web homogeneity,
utilizing real-time RGB chromatic aberration.

## DOM Structure

- `#scene-2`: Pinned for `120vh`. Background `#F3EFE6`.
- `#dossier-layout`: Two-column asymmetric grid (Left: 65% text, Right: 35%
  telemetry).
- `#chroma-text-wrapper`: Houses 3 identical layers of manifesto text stacked on
  top of each other:
  - Layer C: Cyan channel
    (`color: #00F0FF; mix-blend-mode: screen; transform: translate(calc(var(--chroma-shift) * -1), 0)`).
  - Layer M: Magenta channel
    (`color: #EC008C; mix-blend-mode: screen; transform: translate(var(--chroma-shift), 0)`).
  - Layer K: Carbon Black base (`color: #111111; mix-blend-mode: multiply`).
- `#dossier-sidebar`: Monospace technical logs, wireframe grid stamps, and
  "MinzCode" redaction bars.

## Velocity Mechanics

- Bind `--chroma-shift` CSS variable to scroll velocity:
  `gsap.quickSetter('#scene-2', '--chroma-shift', 'px')`.
- On velocity > `2200px/s`, trigger the **Terminal Tape Snap** outlined in
  `02-scroll-orchestration.md`.
