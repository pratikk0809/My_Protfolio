import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      {/* Section label bar */}
      <div className="section-bar">
        <span className="section-bar__label">03 / EDUCATION</span>
        <div className="section-bar__line" />
      </div>

      <div className="container">
        <div className={styles.card}>
          {/* Left: degree + institution */}
          <div className={styles.left}>
            <h2 className={styles.degree}>
              B.E. Electronics &amp; Telecommunications
            </h2>
            <p className={styles.institution}>
              Institute of Engineering and Technology, DAVV&nbsp;&nbsp;·&nbsp;&nbsp;Indore, India
            </p>
          </div>

          {/* Right: period + CGPA */}
          <div className={styles.right}>
            <div className={styles.stat}>
              <span className={styles.statValue}>2022 – 2026</span>
              <span className={styles.statLabel}>Duration</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>8.0 <span className={styles.statSub}>/ 10.0</span></span>
              <span className={styles.statLabel}>CGPA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

