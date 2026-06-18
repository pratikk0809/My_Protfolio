import styles from './Skills.module.css';

export default function Skills() {
  const skillsData = [
    { category: "Programming Languages", skills: ["C++", "JavaScript", "SQL"] },
    { category: "Concepts", skills: ["Data Structure and Algorithms", "Object Oriented Programming", "DBMS"] },
    { category: "Web Technologies", skills: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL"] },
    { category: "Development Tools", skills: ["GitHub", "Postman"] },
    { category: "Cloud & Deployment", skills: ["Render", "Cloudinary", "Neon Database"] }
  ];

  const education = [
    { degree: "B.E. Electronics and Telecommunications", school: "Institute of Engineering and Technology, DAVV, Indore", cgpa:"CGPA - 8.0", year: "2022 - 2026" },
  ];

  const certifications = [
    { title: "Oracle Cloud Infrastructure AI Foundations Associate", issuer: "Oracle" },
    { title: "Full Stack Web Development Bootcamp", issuer: "Udemy" },
  ];

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <h2 className="section-title">
          My <span className="text-gradient">Experience</span>
        </h2>
        <div className={styles.containerGrid}>
          
          <div className={`glass ${styles.card} ${styles.skillsCard}`}>
            <h3 className={styles.cardTitle}>Skills Summary</h3>
            <div className={styles.skillsWrapper}>
              {skillsData.map((group, index) => (
                <div key={index} className={styles.skillGroup}>
                  <h4 className={styles.groupTitle}>{group.category}</h4>
                  <div className={styles.skillTags}>
                    {group.skills.map((skill, i) => (
                      <span key={i} className={styles.tag}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sideCards}>
            <div className={`glass ${styles.card}`}>
              <h3 className={styles.cardTitle}>Education</h3>
              <ul className={styles.list}>
                {education.map((edu, index) => (
                  <li key={index} className={styles.listItem}>
                    <h4>{edu.degree}</h4>
                    <p>{edu.school}<span>{edu.cgpa}</span> <span>{edu.year}</span></p>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`glass ${styles.card}`}>
              <h3 className={styles.cardTitle}>Certifications</h3>
              <ul className={styles.list}>
                {certifications.map((cert, index) => (
                  <li key={index} className={styles.listItem}>
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
