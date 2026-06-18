import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={`section ${styles.hero}`}>
      <div className="container">
        <div className={`${styles.content} animate-fade-in`}>
          <h2 className={styles.greeting}>Hello, I'm</h2>
          <h1 className={styles.title}>
            <span className="text-gradient">Pratik Birla</span>
          </h1>
          <h3 className={`${styles.subtitle} animate-fade-in delay-1`}>
            Software Engineer
          </h3>
          <p className={`${styles.description} animate-fade-in delay-2`}>
            I build dynamic, beautiful, and highly scalable web applications. Let's create something amazing together.
          </p>
          <div className={`${styles.actions} animate-fade-in delay-3`}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
