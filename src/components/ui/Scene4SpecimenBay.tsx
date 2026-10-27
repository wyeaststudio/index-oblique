import type { CSSProperties } from 'react';
import styles from './Scene4SpecimenBay.module.css';

type SpecimenVector = 'cube' | 'wave' | 'matrix' | 'torus';

interface Specimen {
  id: string;
  title: string;
  classification: string;
  stack: string[];
  vector: SpecimenVector;
  stamp: string;
  telemetry: { runtime: string; status: string };
}

const SPECIMEN_REGISTRY: Specimen[] = [
  {
    id: 'IDX-01',
    title: 'PARAMETRIC CORE',
    classification: 'VECTOR SPRING LATTICE',
    stack: ['CANVAS2D', 'VERLET', 'MATH'],
    vector: 'cube',
    stamp: '2026.04',
    telemetry: { runtime: '60 FPS', status: 'ACTIVE APPARATUS' },
  },
  {
    id: 'IDX-02',
    title: 'TENSOR FLUX',
    classification: 'REACTION-DIFFUSION LAB',
    stack: ['WEBGL2', 'GPGPU', 'SHADERS'],
    vector: 'wave',
    stamp: '2026.04',
    telemetry: { runtime: '60 FPS', status: 'GPU BOUND' },
  },
  {
    id: 'IDX-03',
    title: 'GLYPH STRESS',
    classification: 'DYNAMIC AST TYPE ENGINE',
    stack: ['SVG', 'OPENTYPE', 'AST'],
    vector: 'matrix',
    stamp: '2026.04',
    telemetry: { runtime: '60 FPS', status: 'PARSING GLYPHS' },
  },
  {
    id: 'IDX-04',
    title: 'STATE ENGINE',
    classification: 'HEADLESS DISPATCH RUNTIME',
    stack: ['TYPESCRIPT', 'XSTATE', 'CLI'],
    vector: 'torus',
    stamp: '2026.04',
    telemetry: { runtime: 'HEADLESS', status: 'AWAITING DISPATCH' },
  },
];

// Static stand-in for the hover state until pointer interaction is wired.
const PREVIEW_ID = 'IDX-01';

function VectorGlyph({ vector }: { vector: SpecimenVector }) {
  return (
    <svg className={styles.vector} viewBox="0 0 120 120" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      >
        {vector === 'cube' && (
          <g transform="rotate(-12 60 60)">
            <path strokeDasharray="3 3" d="M48 27V72H93M48 72L30 90" />
            <path d="M30 45H75V90H30Z" />
            <path d="M30 45L48 27H93L75 45M93 27V72L75 90" />
          </g>
        )}
        {vector === 'wave' && (
          <>
            <path opacity="0.4" d="M10 40Q22.5 15 35 40T60 40T85 40T110 40" />
            <path d="M10 60Q22.5 35 35 60T60 60T85 60T110 60" />
            <path opacity="0.4" d="M10 80Q22.5 55 35 80T60 80T85 80T110 80" />
          </>
        )}
        {vector === 'matrix' && (
          <>
            {[0, 1, 2, 3].map((row) =>
              [0, 1, 2, 3].map((col) => (
                <rect
                  key={`${row}-${col}`}
                  x={22 + col * 20}
                  y={22 + row * 20}
                  width="14"
                  height="14"
                  fill={(row + col) % 3 === 0 ? 'currentColor' : 'none'}
                />
              )),
            )}
          </>
        )}
        {vector === 'torus' && (
          <>
            <ellipse cx="60" cy="60" rx="50" ry="24" />
            <ellipse cx="60" cy="60" rx="36" ry="16" strokeDasharray="3 3" />
            <ellipse cx="60" cy="58" rx="20" ry="8" />
            <ellipse cx="17" cy="60" rx="7" ry="13" opacity="0.5" />
            <ellipse cx="103" cy="60" rx="7" ry="13" opacity="0.5" />
          </>
        )}
      </g>
    </svg>
  );
}

const bedSpotlight = {
  '--mouse-x': '50%',
  '--mouse-y': '40%',
} as CSSProperties;

export function Scene4SpecimenBay() {
  return (
    <section id="scene-4" aria-labelledby="specimen-bay-title">
      <div id="light-table-bed" className={styles.bed} style={bedSpotlight}>
        <h2 id="specimen-bay-title" className={styles.meta}>
          {'[IDX-03 // SPECIMEN BAY]'}
        </h2>

        <ul className={styles.registry}>
          {SPECIMEN_REGISTRY.map((specimen) => {
            const isActive = specimen.id === PREVIEW_ID;

            return (
              <li
                key={specimen.id}
                className={`${styles.specimen} ${isActive ? `${styles.slabActive} slab-active` : ''}`}
              >
                <article className={styles.slab}>
                  <header className={styles.header}>
                    <span>{`[${specimen.id} // R&D]`}</span>
                    <span>{`STAMP // ${specimen.stamp}`}</span>
                  </header>

                  <h3 className={styles.title}>{specimen.title}</h3>
                  <p className={styles.classification}>
                    {specimen.classification}
                  </p>

                  <footer className={styles.footer}>
                    <ul className={styles.stack} aria-label="Tech stack">
                      {specimen.stack.map((tag) => (
                        <li key={tag} className={styles.tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className={styles.ready}>[SPEC READY ↗]</span>
                  </footer>
                </article>

                <div
                  className={`${styles.projection} arcade-projection-plane`}
                  aria-hidden="true"
                >
                  <VectorGlyph vector={specimen.vector} />
                  <dl className={styles.telemetry}>
                    <div>
                      <dt>&gt; RUNTIME:</dt>
                      <dd>{specimen.telemetry.runtime}</dd>
                    </div>
                    <div>
                      <dt>&gt; STATUS:</dt>
                      <dd>{specimen.telemetry.status}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
