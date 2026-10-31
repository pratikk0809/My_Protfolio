import styles from "./Projects.module.css";

const projects = [
  {
    title: "WalletCore",
    subtitle: "Wallet & Transaction Service",
    description:
      "A backend application managing digital wallets — deposit, withdraw, and transfer money securely while maintaining accurate transaction records with full audit trails.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "JWT"],
    link: "https://github.com/pratikk0809/WalletCore-Wallet-Management-Service",
    type: "github" as const,
  },
  {
    title: "QuickAI",
    subtitle: "AI Content Platform",
    description:
      "Full-stack AI platform integrating 5 AI-powered features — article generation, blog titles, image creation, resume review, and background removal across Gemini & OpenAI APIs.",
    tech: ["React.js", "Gemini API", "PostgreSQL", "Clerk Auth"],
    link: "https://quick-ai-lac.vercel.app/",
    type: "live" as const,
  },
  {
    title: "Prescripto",
    subtitle: "Healthcare Booking System",
    description:
      "MERN-stack healthcare platform supporting 20+ doctors across multiple specialties with real-time scheduling, admin dashboard, and profile management.",
    tech: ["React.js", "Node.js", "MongoDB", "Cloudinary"],
    link: "https://prescripto-frontend-lime.vercel.app/",
    type: "live" as const,
  },
  {
    title: "Multi-Source RAG Chatbot",
    subtitle: "AI Retrieval System",
    description:
      "Retrieval-Augmented Generation chatbot built with LangChain, ingesting and processing 3 document types — PDF, TXT, and web URLs — using vector embeddings for semantic search.",
    tech: ["Python", "LangChain", "ChromaDB", "Groq API", "HuggingFace"],
    link: "https://github.com/pratikk0809/Multi-source-RAG-chatbot",
    type: "github" as const,
  },
  {
    title: "YelpCamp",
    subtitle: "Campground Discovery Platform",
    description:
      "Full-featured campground discovery platform with CRUD operations, interactive geolocation maps, marker clustering, user authentication, and image uploads.",
    tech: ["Node.js", "EJS", "MapTiler API", "MongoDB"],
    link: "https://yelp-camp-1-kjx8.onrender.com/",
    type: "live" as const,
  },
];

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      {/* Section label bar */}
      <div className="section-bar">
        <span className="section-bar__label">01 / SELECTED WORK / EXPERIENCE</span>
        <div className="section-bar__line" />
      </div>

      <div className="container">
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.subtitle}>{project.subtitle}</p>
                </div>
              </div>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.tech}>
                {project.tech.map((t, j) => (
                  <span key={j} className={styles.tag}>{t}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={`${project.type === "github" ? "View source of" : "Open live demo for"} ${project.title}`}
              >
                {project.type === "github" ? (
                  <>
                    <GitHubIcon />
                    View Source
                  </>
                ) : (
                  <>↗ Live Demo</>
                )}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
