import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background radial glow */}
      <div className={styles.glow} aria-hidden="true" />

      {/* Main centered content block */}
      <div className={styles.content}>
        {/* Status badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          ONLINE&nbsp;&nbsp;·&nbsp;&nbsp;INDORE
        </div>

        {/* Massive name */}
        <div className={styles.nameWrap}>
          <h1 className={styles.name}>
            <span className={styles.nameFirst}>PRATIK</span>
            <span className={styles.nameLast}>BIRLA</span>
          </h1>
        </div>

        {/* Role + Bio row */}
        <div className={styles.meta}>
          <span className={styles.role}>// SOFTWARE ENGINEER</span>
          <div className={styles.metaDivider} />
          <p className={styles.bio}>
            Building <strong>scalable web apps</strong> and AI-powered tools.
            <br />
            Full-stack developer focused on clean
            <br />
            architecture and modern experiences.
          </p>
        </div>
      </div>

      {/* Scroll cue — natural bottom of flex, never overlaps content */}
      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLabel}>SCROLL</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
