# IDX-00 Master Architecture & Design Tokens

## 1. Core Stack

- Framework: Next.js (App Router) or Vite + TypeScript
- Styling: CSS Modules or Tailwind CSS (with arbitrary value support for complex
  CSS vars)
- Animation Engine: GSAP (Core, ScrollTrigger, Flip)
- Fonts:
  - Primary Variable: Cabinet Grotesk (or similar variable grotesque supporting
    `wdth` and `wght`)
  - Monospace: Custom/System Mono (for telemetry and Oblique Strategies)
  - Logo Display: Major Mono Display (Scene 1 masthead)

  ## Styling Convention

  - In CSS Modules and other component stylesheets, use Tailwind theme variables
    for values that have an equivalent token, including colors, font families,
    and font sizes. Do not duplicate those token values as literals.
  - Define or update shared tokens in the global Tailwind theme when a repeated
    design value has no existing token.
  - Keep one-off values and component-specific layout or visual treatments local
    when they do not represent a shared design token.

  ## 2. Color Palette (Industrial Print Shop)

- Background / Substrates:
  - Swiss Coffee (Main Paper): `#F3EFE6`
  - Light Table Frosted Base: `#ECE9E2`
  - Paper surfaces carry a subtle, repeatable grain texture beneath scene
    content; keep it low-contrast so typography and print artwork remain clear.
- Inks & Elements:
  - Carbon Black (Primary Text/Borders): `#111111`
  - Ghost Ink (Subtle Grid/Borders): `rgba(17, 17, 17, 0.12)`
  - Process Magenta (Preloader/Accents): `#EC008C`
  - Pure White (Strobes/Exposure): `#FFFFFF`
- Hologram Projections (Scene 4):
  - Phosphor Emerald: `#00FF66`
  - Vector Amber: `#FFB000`

## 3. Kinetic Physics & Easing (GSAP)

- Mechanical Snap: `power3.out` or `power4.inOut`
- Heavy Industrial Drop: `bounce.out` or `power2.in`
- Spring / V-Hold Slip: `elastic.out(1, 0.4)`
- Velocity Threshold: `2200px/s` (Triggers terminal snaps and chroma splits)

## 4. Z-Index Architecture

- `-100 to 0`: Depth layers (Scene 3 relief)
- `10`: Main Canvas / Scroll Flow
- `50`: Hover Projections (Scene 4 Holograms floating above canvas)
- `100`: Flashes / Strobes (Absolute full viewport covers)
- `900`: Persistent HUD (Corners, Reticles)
- `1000`: System Modals (Catalog Drawer)
