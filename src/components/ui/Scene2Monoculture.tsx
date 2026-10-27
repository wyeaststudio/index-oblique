import type { CSSProperties } from 'react';
import styles from './Scene2Monoculture.module.css';

const manifestoLines = [
  'TEN THOUSAND IDENTICAL INPUTS',
  'BREATHING RECYCLED AIR.',
  '"WE FORGOT HOW TO BREAK THE GRID."',
];

function ManifestoLines() {
  return manifestoLines.map((line) => (
    <span key={line}>
      {line}
      <br />
    </span>
  ));
}

const sceneStyle: CSSProperties & { '--chroma-shift': string } = {
  '--chroma-shift': '6px',
};

export function Scene2Monoculture() {
  return (
    <section
      id="scene-2"
      className={styles.scene}
      style={sceneStyle}
      aria-labelledby="monoculture-title"
    >
      <header className={styles.ledger}>
        <p>[IDX-02 // THE MONOCULTURE]</p>
        <p>DOSSIER: 002 / OPEN</p>
      </header>

      <div id="dossier-layout" className={styles.dossier}>
        <div className={styles.manifesto}>
          <p className={styles.label}>001 / STATEMENT OF INTENT</p>
          <div id="chroma-text-wrapper" className={styles.chromaText}>
            <h2 className={`${styles.textLayer} ${styles.cyan} font-manifesto`} aria-hidden="true">
              <ManifestoLines />
            </h2>
            <h2 className={`${styles.textLayer} ${styles.magenta} font-manifesto`} aria-hidden="true">
              <ManifestoLines />
            </h2>
            <h2 id="monoculture-title" className={`${styles.textLayer} ${styles.key} font-manifesto`}>
              <ManifestoLines />
            </h2>
          </div>
          <p className={styles.label}>NOT A TEMPLATE. A POINT OF DEPARTURE.</p>
        </div>

        <aside
          id="dossier-sidebar"
          className={styles.sidebar}
          aria-label="Monoculture technical dossier"
        >
          <div className={styles.log}>
            <p className={styles.label}>002 / FIELD TELEMETRY</p>
            <dl className={styles.data}>
              <div><dt>RECORDED</dt><dd><time dateTime="2026-01-01T00:02:26Z">00:02:26 UTC</time></dd></div>
              <div><dt>SOURCE</dt><dd>WEB / SURFACE SCAN</dd></div>
              <div><dt>DEPTH</dt><dd>0.000 MM</dd></div>
              <div><dt>STATUS</dt><dd>DIMENSION LOSS</dd></div>
            </dl>
          </div>

          <div className={styles.log}>
            <p>[00:02:27] PATTERN REPEATS.</p>
            <p>[00:02:28] ORIGINAL SIGNAL: <span className={styles.redacted} role="img" aria-label="redacted">UNRESOLVED</span></p>
            <p>[00:02:29] IDENTICAL SURFACES DETECTED.</p>
            <p>[00:02:30] ORIGIN: <span className={styles.redacted} role="img" aria-label="redacted">MINZCODE / ARCHIVE</span></p>
          </div>

          <figure className={styles.wireframe}>
            <svg viewBox="0 0 280 140" fill="none" aria-hidden="true">
              <g stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
                <path d="M0 25H280M0 50H280M0 75H280M0 100H280M0 125H280M20 0V140M60 0V140M100 0V140M140 0V140M180 0V140M220 0V140M260 0V140" />
                <path d="M0 75H28L40 68L52 83L64 58L76 96L88 40L100 110L112 24L124 120L136 12L148 128L160 32L172 108L184 48L196 94L208 61L220 84L232 71L244 75H280" />
              </g>
            </svg>
            <figcaption>SIGNAL CROSS-SECTION / PLATE 02</figcaption>
          </figure>

          <div className={styles.log}>
            <p className={styles.label}>003 / RECOVERY PROTOCOL</p>
            <p>REJECT THE DEFAULT.</p>
            <p>RESTORE DEPTH. PRESERVE THE SIGNAL.</p>
            <p>AUTHORIZATION: <span className={styles.redacted} role="img" aria-label="redacted">OBLIQUE INTERNAL</span></p>
          </div>
        </aside>
      </div>

      <footer className={styles.ledger}>
        <p>INDEX/OBLIQUE // INDEPENDENT BY DESIGN</p>
        <p>END OF RECORD / 002</p>
      </footer>
    </section>
  );
}