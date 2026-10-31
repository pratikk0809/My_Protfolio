import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© 2026 Pratik Birla.</span>
      <div className={styles.status}>
        System Status:&nbsp;
        <span className={styles.operational}>OPERATIONAL</span>
      </div>
    </footer>
  );
}
