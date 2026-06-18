import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">About Me</span>
        </h2>
        <div className={`glass ${styles.content}`}>
          <div className={styles.text}>
            <p>
              Hi, I'm a passionate software developer who enjoys creating things that people can use and benefit from. My interest in technology started with a simple curiosity about how websites and applications work, and over time it grew into a passion for building solutions and continuously learning new things.
            </p>
            <p>
              I enjoy solving problems, exploring new ideas, and challenging myself with projects that help me grow as a developer. What excites me most about software development is the ability to turn an idea into something real and impactful.
              <br />
              Beyond coding, I enjoy learning about emerging technologies, reading about the latest trends in tech, and finding new ways to improve both my technical and problem-solving skills. I believe that growth comes from staying curious, being consistent, and always being open to learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
