import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: "QuickAi",
      description: "A full-stack AI content platform integrating 5 AI-powered features (article generation, blog titles, image creation, resume review, background removal) across Gemini and OpenAI APIs.",
      tech: ["React.js", "PostgreSQL", "Clerk Authentication","GEMINI API"],
      link: "https://quick-ai-lac.vercel.app/",
      image: "/quickai.png"
    },
    {
      title: "Prescripto",
      description: "A MERN-stack healthcare booking system supporting 20+ doctors across multiple specialties with real-time scheduling and profile management",
      tech: ["React.js", "MongoDB", "Cloudinary","Node.js"],
      link: "https://prescripto-frontend-lime.vercel.app/",
      image: "/prescripto.png"
    },
    {
      title: "Multi Source RAG Chatbot",
      description: "Built a Retrieval-Augmented Generation (RAG) chatbot in Python using LangChain, ingesting and processing 3 document source types (PDF, TXT, web URLs)",
      tech: ["Python", "LangChain","ChromaDB","Groq API", "HuggingFace Embeddings"],
      link: "https://github.com/pratikk0809/Multi-source-RAG-chatbot",
      image: "/chainbot.png"
    },
    {
      title: "YelpCamp",
      description: " Built a full-featured campground discovery platform with CRUD operations, interactive geolocation maps, and marker clustering via MapTiler API.",
      tech: ["Node.js", "EJS","MapTiler API","MongoDB"],
      link: "https://yelp-camp-1-kjx8.onrender.com/",
      image: "/yelpcamp.png"
    }
  ];

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <h2 className="section-title">
          Featured <span className="text-gradient-secondary">Projects</span>
        </h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={`glass ${styles.card}`}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                  View Live Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
