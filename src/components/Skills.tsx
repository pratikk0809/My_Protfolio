import styles from "./Skills.module.css";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["C++", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Web Technologies",
    skills: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "FastAPI"],
  },
  {
    category: "AI / ML Tools",
    skills: ["Claude Code", "LangChain", "ChromaDB", "Vector Database", "Embeddings", "Groq API"],
  },
  {
    category: "Core Concepts",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS"],
  },
  {
    category: "Development Tools",
    skills: ["GitHub", "Postman", "Docker"],
  },
  {
    category: "Cloud & Deployment",
    skills: ["Render", "Cloudinary", "Neon Database", "Vercel"],
  },
];

const certifications = [
  {
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle",
    year: "2024",
  },
  {
    title: "Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    year: "2023",
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      {/* Section label bar */}
      <div className="section-bar">
        <span className="section-bar__label">02 / SKILL ARSENAL</span>
        <div className="section-bar__line" />
      </div>

      <div className="container">
        {/* Skill categories grid */}
        <div className={styles.grid}>
          {skillGroups.map((group, i) => (
            <div key={i} className={styles.category}>
              <p className={styles.categoryLabel}>{group.category}</p>
              <div className={styles.tags}>
                {group.skills.map((skill, j) => (
                  <span key={j} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={styles.certSection}>
          <p className={styles.certHeading}>Certifications</p>
          <div className={styles.certGrid}>
            {certifications.map((cert, i) => (
              <div key={i} className={styles.certCard}>
                <p className={styles.certTitle}>{cert.title}</p>
                <p className={styles.certMeta}>
                  {cert.issuer}&nbsp;&nbsp;·&nbsp;&nbsp;{cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
