# Scene 3: The Dimensional Awakening

## Purpose

A 2.5D multi-plane layered relief inspired by street artists Alex Yanes and Dan
Reeder. Replaces 2D text with dimensional kinetic sculpture.

## DOM Structure

- `#scene-3`: Pinned 3D stage
  (`perspective: 1200px; transform-style: preserve-3d`).
- Depth Planes:
  - `.layer-backdrop` (`translateZ(-120px)`): Layered birch plywood cutout
    silhouettes.
  - `.layer-clouds` (`translateZ(-60px)`): Graphic winged cloud shapes sliding
    in laterally.
  - `.layer-sculpture` (`translateZ(0px)`): Main typographic assemblage and
    character illustrations.
  - `.layer-eyeballs` (`translateZ(+40px)`): Vector eyeball cutouts whose pupils
    track pointer `(x, y)` across the screen.
  - `.layer-lightning` (`translateZ(+80px)`): Jagged neon acrylic lightning
    shards with hard carbon shadows.

## Kinetic Mechanics

- **Pointer Parallax**: Pointer coordinates apply lerped `rotateX` and `rotateY`
  (max ±8deg) to the parent `#scene-3` container.
- **Exit Flattening**: Scrubbing out tweens all child layers to
  `translateZ(0px)` simultaneously, prepping for the Scene 4 Light Table
  handoff.
