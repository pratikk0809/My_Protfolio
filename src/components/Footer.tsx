import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className="text-gradient">Portfolio.</span>
            <p className={styles.tagline}>Building scalable and beautiful web experiences.</p>
          </div>
          <div className={styles.links}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>
          <div className={styles.social}>
            <a href="https://github.com/pratikk0809" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/pratik-birla-656321256" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Pratik Birla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
