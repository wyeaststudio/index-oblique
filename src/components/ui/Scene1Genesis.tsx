import styles from './Scene1Genesis.module.css';

const halftoneDots = Array.from({ length: 441 }, (_, index) => {
  const column = index % 21;
  const row = Math.floor(index / 21);
  const offsetX = (column - 10) * 11;
  const offsetY = (row - 10) * 11;
  const distance = Math.hypot(offsetX, offsetY);

  return {
    cx: 360 + offsetX,
    cy: 225 + offsetY,
    r: 0.8 + (distance / 155) * 1.4,
    visible: distance <= 122,
  };
}).filter((dot) => dot.visible);

const rasterLines = Array.from({ length: 25 }, (_, index) => 158 + index * 6);

export function Scene1Genesis() {
  return (
    <section id="scene-1" className={`${styles.scene} paper-texture`}>
      <header className={styles.ledgerTop}>
        <p>[IDX-00 // MACHINE GENESIS]</p>
        <p>REV: 2026.01</p>
      </header>

      <div className={styles.stage}>
        <div id="brand-title-banner" className={styles.titleBanner}>
          <h1
            id="brand-title"
            className={`${styles.logo} font-logo tracking-tight antialiased`}
            aria-label="[index/oblique>"
          >
            <span id="bracket-l">[</span>
            <span id="char-i">I</span>
            <span className="dissolve-char">ndex</span>
            <span>/</span>
            <span id="char-o">O</span>
            <span className="dissolve-char">blique</span>
            <span id="bracket-r">&gt;</span>
          </h1>
        </div>

        <div id="eye-video-container" className={styles.mediaFrame}>
          <div className={styles.cornerMarks} aria-hidden="true" />
          <p className={`${styles.mediaMetadata} ${styles.feed}`}>
            [FEED: 01 // MACRO-HALFTONE]
          </p>
          <p className={`${styles.mediaMetadata} ${styles.frame}`}>
            FRAME: 0001 // 60 FPS
          </p>

          <div id="eye-video-placeholder" className={styles.mediaLayer}>
            <svg
              className={styles.eyeGraphic}
              viewBox="0 0 720 450"
              role="img"
              aria-labelledby="genesis-eye-title genesis-eye-description"
            >
              <title id="genesis-eye-title">Macro halftone eye</title>
              <desc id="genesis-eye-description">
                A geometric eye with a radial halftone iris, solid black pupil,
                and horizontal raster lines.
              </desc>

              <defs>
                <clipPath id="genesis-eye-window">
                  <path d="M74 225c74-108 168-162 286-162s212 54 286 162c-74 108-168 162-286 162S148 333 74 225Z" />
                </clipPath>
              </defs>

              <g clipPath="url(#genesis-eye-window)" fill="#111111">
                {rasterLines.map((y) => (
                  <rect key={y} x="70" y={y} width="580" height="1" />
                ))}
              </g>

              <path
                d="M74 225c74-108 168-162 286-162s212 54 286 162c-74 108-168 162-286 162S148 333 74 225Z"
                fill="none"
                stroke="#111111"
                strokeWidth="3"
              />
              <path
                d="M112 225c65-79 147-119 248-119s183 40 248 119c-65 79-147 119-248 119s-183-40-248-119Z"
                fill="none"
                stroke="#111111"
                strokeWidth="1"
              />

              <g fill="#111111">
                {halftoneDots.map((dot) => (
                  <circle
                    key={`${dot.cx}-${dot.cy}`}
                    cx={dot.cx}
                    cy={dot.cy}
                    r={dot.r}
                  />
                ))}
              </g>

              <circle
                cx="360"
                cy="225"
                r="122"
                fill="none"
                stroke="#111111"
                strokeWidth="1"
              />
              <circle cx="360" cy="225" r="58" fill="#111111" />
              <circle cx="378" cy="204" r="10" fill="#f3efe6" />
            </svg>
          </div>
        </div>
      </div>

      <footer className={styles.ledgerBottom}>
        <p>MACRO-OPTICAL SCANNER // CALIBRATED TO VIEWPORT VELOCITY</p>
      </footer>
    </section>
  );
}
