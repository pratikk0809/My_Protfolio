import styles from "./Experience.module.css";

const experiences = [
  {
    year: "2026",
    company: "IET DAVV, Indore",
    role: "B.E. Electronics & Telecommunications",
    description:
      "Pursuing a four-year undergraduate degree with a focus on software development, computer science fundamentals, and emerging AI technologies. CGPA: 8.0 / 10.0",
    bullets: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Full-Stack Development",
    ],
  },
  {
    year: "2024",
    company: "Oracle",
    role: "Cloud Infrastructure AI Foundations Associate",
    description:
      "Certified in Oracle Cloud Infrastructure AI services, covering machine learning concepts, data science pipelines, and cloud-native AI solutions.",
    bullets: [
      "Machine learning fundamentals",
      "OCI AI & Data Science",
      "Cloud computing principles",
      "AI model deployment",
    ],
  },
  {
    year: "2023",
    company: "Udemy",
    role: "Full Stack Web Development Bootcamp",
    description:
      "Completed an intensive full-stack bootcamp covering modern web technologies, RESTful API design, authentication systems, and deployment workflows.",
    bullets: [
      "React & Node.js ecosystem",
      "Database design & REST APIs",
      "Authentication & security",
      "Cloud deployment",
    ],
  },
];

const techStack = [
  { label: "React / Node.js / Express" },
  { label: "Python / FastAPI / SQLAlchemy" },
  { label: "PostgreSQL / MongoDB / Docker" },
  { label: "LangChain / RAG / ChromaDB" },
  { label: "Claude Code / Embeddings" },
  { label: "Render / Cloudinary / Neon DB" },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      {/* Section label bar */}
      <div className="section-bar">
        <span className="section-bar__label">01 / SELECTED EXPERIENCE</span>
        <div className="section-bar__line" />
      </div>

      <div className="container">
        {/* Timeline entries */}
        <div className={styles.list}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              {/* Faded year watermark */}
              <div className={styles.yearCol}>
                <span className={styles.year} aria-hidden="true">
                  {exp.year}
                </span>
              </div>

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.header}>
                  <h2 className={styles.company}>{exp.company}</h2>
                  <span className={styles.role}>{exp.role}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.bullets}>
                  {exp.bullets.map((b, j) => (
                    <div key={j} className={styles.bullet}>
                      <span className={styles.arrow} aria-hidden="true">→</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack section */}
        <div className={styles.techSection}>
          <p className={styles.techHeading}>Technical Arsenal</p>
          <div className={styles.techGrid}>
            {techStack.map((t, i) => (
              <div key={i} className={styles.techItem}>
                <span className={styles.techArrow} aria-hidden="true">→</span>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
