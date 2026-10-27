# HUD & Peripheral Mechanics Specification

## Overview

The HUD is a persistent, fixed overlay
(`position: fixed; inset: 0; pointer-events: none; z-index: 900`). Elements
inside the HUD corners have `pointer-events: auto`.

- Keep all HUD content within the registration frame at mobile, tablet, and
  desktop widths. Corner slots must be constrained to their grid tracks and
  allow text to wrap rather than overlap the opposite corner or escape the
  frame. Scale HUD type for narrow viewports and respect safe-area insets.
- Scene navigation label shadows, in scene order: Process Magenta, Process
  Yellow, Violet, Phosphor Green, and Process Cyan.
- Omit decorative scene-edge captions and telemetry stamps; retain scene
  headings, project content, and the Scene 5 production/location/contact data.
- Switch each HUD corner and navigation marker to Swiss Coffee only when its
  center lies over Scene 2's dark substrate. Clip the light-ink frame and
  registration marks to the dark scene's viewport bounds, retaining Carbon
  ink elsewhere so mixed-scene boundaries remain legible.

## Corner 1: Top-Left (Brand Anchor)

- **Initial State**: A 1px Carbon Black crosshair `[+]`, receiving the
  collapsed `[I/O>` mark from Scene 1.
- **Action**: During Scene 1 scroll, the `[I/O>` mark on the canvas collapses
  and uses GSAP Flip to seamlessly dock into this corner.
- **End State**: Locks permanently as the `[I/O>` home button for the rest of
  the session.

## Corner 2: Top-Right (Catalog Pull)

- **Visual**: Monospace stamp `[ IDX-00 // ACTIVE ]` above a clickable
  `[ CATALOG / PULL ↓ ]`.
- **Interaction**: On click, slide out an industrial drawer from the right side
  at a -15° skew (`transform: skewX(-15deg)`). Trap focus inside. Close on
  `Escape` or click outside.

## Corner 3: Bottom-Left (Oblique Strategies)

- **Visual**: 11px Monospace Carbon Black text displaying a randomized Brian Eno
  / Peter Schmidt strategy.
- **Interaction**: On click, run a text-scramble effect over 300ms. Replace
  characters randomly with `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_//[]<>` before
  settling on a new array string.

## Corner 4: Bottom-Right (Muybridge Progress Engine)

- **Visual**: A 48x32px container showing Eadweard Muybridge's horse.
- **Sprite Sheet**: Horizontal sprite sheet with 16 frames.
- **Engine Hook**:
  - Tie to global scroll progress (0 to 1).
  - Formula: `frame = Math.min(15, Math.floor(scrollProgress * 16))`
  - Update `backgroundPosition` dynamically based on the frame index.
