import styles from './Scene3Awakening.module.css';

function WingedCloud() {
  return (
    <svg className={styles.cloudSvg} viewBox="0 0 320 180" aria-hidden="true">
      <g stroke="#111111" strokeWidth="2" strokeLinejoin="round">
        <path fill="#FFFFFF" d="M140 78C100 34 52 22 6 34C40 50 82 72 140 98Z" />
        <path fill="#EC008C" d="M140 96C96 74 50 74 14 90C48 100 88 108 140 114Z" />
        <path fill="#FFFFFF" d="M142 112C104 108 66 116 34 136C70 140 110 134 146 126Z" />
        <path fill="none" d="M120 70L62 44M118 90L52 84M120 116L72 128" />
        <path
          fill="#FFFFFF"
          d="M140 140a30 30 0 0 1 0-60a40 40 0 0 1 70-20a35 35 0 0 1 60 25a28 28 0 0 1-5 55Z"
        />
        <path fill="none" d="M166 140c4-14 18-20 30-14M226 140c-2-12 8-22 20-20" />
      </g>
    </svg>
  );
}

function Eye() {
  return (
    <svg className={styles.eyeSvg} viewBox="0 0 100 60" aria-hidden="true">
      <g stroke="#111111" strokeWidth="2">
        <path fill="#FFFFFF" strokeLinejoin="round" d="M4 30Q50-14 96 30Q50 74 4 30Z" />
        <g className={styles.pupil}>
          <circle cx="50" cy="30" r="15" fill="#FFEB00" />
          <circle cx="50" cy="30" r="21" fill="none" strokeWidth="1" strokeDasharray="3 4" />
          <circle cx="50" cy="30" r="6" fill="#111111" />
          <path fill="none" strokeWidth="1.5" d="M50 6V24M50 36V54M26 30H44M56 30H74" />
        </g>
      </g>
    </svg>
  );
}

function Bolt({ className }: { className: string }) {
  return (
    <svg className={`${styles.bolt} ${className}`} viewBox="0 0 120 300" aria-hidden="true">
      <polygon
        points="72,2 18,134 58,134 8,298 112,108 70,108 104,2"
        fill="#FFEB00"
        stroke="#111111"
        strokeWidth="2"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function Scene3Awakening() {
  return (
    <section id="scene-3" className={`${styles.scene} paper-texture`} aria-labelledby="awakening-title">

      <div id="shadowbox-stage" className={styles.stage}>
        <div className={styles.rig}>
          <div className={`${styles.layer} ${styles.layerBackdrop} layer-backdrop`} aria-hidden="true">
            <div className={styles.rays} />
            <div className={styles.halftone} />
            <svg className={styles.plywood} viewBox="0 0 800 240" preserveAspectRatio="none">
              <g stroke="#111111" strokeWidth="2">
                <path fill="#D9CFBA" d="M0 240V150Q400-40 800 150V240Z" />
                <path fill="#E6DECE" d="M80 240V190Q400 40 720 190V240Z" />
              </g>
            </svg>
          </div>

          <div className={`${styles.layer} ${styles.layerClouds} layer-clouds`} aria-hidden="true">
            <div className={`${styles.anchor} ${styles.anchorLeft}`}>
              <WingedCloud />
            </div>
            <div className={`${styles.anchor} ${styles.anchorRight}`}>
              <WingedCloud />
            </div>
          </div>

          <div className={`${styles.layer} ${styles.layerSculpture} layer-sculpture`}>
            <h2 id="awakening-title" className={styles.manifesto}>
              <span className={styles.hazard}>WHAT, MATE?</span>
              <span className={styles.tape}>YOU THOUGHT THE</span>
              <span className={styles.checkerPlate}>
                <span className={styles.checker}>INTERNET WAS DEAD?</span>
              </span>
            </h2>
          </div>

          <div className={`${styles.layer} ${styles.layerForeground} layer-eyeballs layer-lightning`} aria-hidden="true">
            <div className={`${styles.anchor} ${styles.anchorLeft}`}>
              <div className={styles.eye}>
                <Eye />
              </div>
            </div>
            <div className={`${styles.anchor} ${styles.anchorRight}`}>
              <div className={`${styles.eye} ${styles.eyeMirrored}`}>
                <Eye />
              </div>
            </div>
            <Bolt className={styles.boltA} />
            <Bolt className={styles.boltB} />
            <Bolt className={styles.boltC} />
          </div>
        </div>
      </div>

    </section>
  );
}
