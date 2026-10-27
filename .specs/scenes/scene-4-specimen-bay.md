# Scene 4: Specimen Bay Architecture

## Visual Staging

- **Background (Light Table)**: Frosted `#ECE9E2` with a 32px subtle grid.
- **Mouse Spotlight**: A radial gradient tied to `--mouse-x` and `--mouse-y`
  variables updated via `pointermove`.

## Specimen Slabs (Resting State)

- 4 full-width containers (`IDX-01` to `IDX-04`).
- Material: Smoked glass (`rgba(22, 22, 24, 0.75)` with
  `backdrop-filter: blur(12px)`).
- 1px Carbon border.
- Typography: Compressed variable font (`wdth: 70, wght: 400`).

## Interaction: The Holo-Projection (Hover State)

When a slab is hovered:

1. **Glass Reaction**: Slab border transitions to electric gradient (`#00FF66`,
   `#FF007A`, `#FFEA00`). Slab receives heavy drop shadow
   (`0 16px 24px rgba(0,0,0,0.4)`).
2. **Kinetic Typography**: Title expands horizontally
   (`font-variation-settings: 'wdth' 140, 'wght' 900`) and changes color to
   `#FFFFFF`.
3. **Z-Space Extrusion**: An `.arcade-projection-plane` div (initially
   `scaleY: 0`, `opacity: 0`) extrudes out to `translateZ(60px)` and `scaleY: 1`
   over 150ms.
4. **Hologram Styling**: CRT scanlines via CSS `repeating-linear-gradient`.
   Content inside uses Phosphor Green (`#00FF66`) or Amber (`#FFB000`) with
   heavy `drop-shadow` SVG/CSS filters to simulate cathode bloom.
5. **Parallax**: Subtle CSS 3D tilt tied to mouse position (`rotateX`,
   `rotateY`) applied to the slab carrier to sell the 3D effect.

## Data Structure (Future Proofing)

Do not hardcode layout for each project. Map over a `SPECIMEN_REGISTRY` array:

```typescript
{
  id: 'IDX-01',
  title: 'PARAMETRIC CORE',
  classification: 'VECTOR SPRING LATTICE',
  stack: ['CANVAS2D', 'VERLET', 'MATH'],
  telemetry: { fps: '60 FPS', runtime: 'ZERO GC' }
}
```
