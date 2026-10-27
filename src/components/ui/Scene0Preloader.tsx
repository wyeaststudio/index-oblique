import styles from './Scene0Preloader.module.css';

const halftoneDots = [
  [134, 184, 2],
  [148, 169, 2],
  [165, 157, 2],
  [184, 150, 2],
  [204, 148, 2],
  [224, 150, 2],
  [243, 157, 2],
  [260, 169, 2],
  [274, 184, 2],
  [144, 280, 2],
  [162, 295, 2],
  [182, 304, 2],
  [204, 308, 2],
  [226, 304, 2],
  [246, 295, 2],
  [264, 280, 2],
];

const irisMarks = Array.from({ length: 16 }, (_, index) => {
  const angle = (index * Math.PI) / 8;
  const innerRadius = 59;
  const outerRadius = index % 2 === 0 ? 72 : 66;

  return {
    x1: 210 + Math.cos(angle) * innerRadius,
    y1: 234 + Math.sin(angle) * innerRadius,
    x2: 210 + Math.cos(angle) * outerRadius,
    y2: 234 + Math.sin(angle) * outerRadius,
  };
});

export function Scene0Preloader() {
  return (
    <div
      id="preloader-container"
      className={`${styles.container} font-hud paper-texture`}
    >
      <span
        className={`${styles.registrationMark} ${styles.topLeft}`}
        aria-hidden="true"
      />
      <span
        className={`${styles.registrationMark} ${styles.topRight}`}
        aria-hidden="true"
      />
      <span
        className={`${styles.registrationMark} ${styles.bottomLeft}`}
        aria-hidden="true"
      />
      <span
        className={`${styles.registrationMark} ${styles.bottomRight}`}
        aria-hidden="true"
      />

      <div className={styles.stage}>
        <div id="halftone-poster-preview" className={styles.poster}>
          <svg
            className={styles.eyeGraphic}
            viewBox="0 0 420 470"
            role="img"
            aria-labelledby="poster-title poster-description"
          >
            <title id="poster-title">Static eye, one-bit proof</title>
            <desc id="poster-description">
              A geometric eye with a halftone iris, pupil, and fine scanlines.
            </desc>

            <g fill="#111111">
              <rect x="46" y="72" width="328" height="1" />
              <rect x="46" y="80" width="250" height="1" />
              <rect x="46" y="88" width="292" height="1" />
              <rect x="46" y="96" width="218" height="1" />
              <rect x="46" y="104" width="310" height="1" />
            </g>

            <path
              d="M58 234C98 166 151 130 210 130s112 36 152 104c-40 68-93 104-152 104S98 302 58 234Z"
              fill="none"
              stroke="#111111"
              strokeWidth="3"
            />
            <path
              d="M78 234c34-48 77-74 132-74s98 26 132 74c-34 48-77 74-132 74s-98-26-132-74Z"
              fill="none"
              stroke="#111111"
              strokeWidth="1"
            />

            <circle
              cx="210"
              cy="234"
              r="72"
              fill="none"
              stroke="#111111"
              strokeWidth="2"
            />
            <circle
              cx="210"
              cy="234"
              r="52"
              fill="none"
              stroke="#111111"
              strokeWidth="1"
            />
            <circle cx="210" cy="234" r="33" fill="#111111" />
            <circle cx="220" cy="222" r="7" fill="#F3EFE6" />

            <g stroke="#111111" strokeWidth="2">
              {irisMarks.map((mark) => (
                <path
                  key={`${mark.x1}-${mark.y1}`}
                  d={`M${mark.x1} ${mark.y1}L${mark.x2} ${mark.y2}`}
                />
              ))}
            </g>

            <g fill="#111111">
              {halftoneDots.map(([cx, cy, r]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
              ))}
              <rect x="46" y="365" width="328" height="1" />
              <rect x="46" y="373" width="286" height="1" />
              <rect x="46" y="381" width="312" height="1" />
              <rect x="46" y="389" width="230" height="1" />
            </g>
          </svg>
          <div
            id="squeegee-pass"
            className={styles.squeegeePass}
            aria-hidden="true"
          />
        </div>
      </div>

    </div>
  );
}
