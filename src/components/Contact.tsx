import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      {/* Section label bar */}
      <div className="section-bar">
        <span className="section-bar__label">04 / INITIALIZATION</span>
        <div className="section-bar__line" />
      </div>

      {/* Centered CTA block */}
      <div className={styles.center}>
        <h2 className={styles.heading}>
          Let&apos;s Build
          <br />
          The Future
        </h2>

        <a
          id="contact-email"
          href="mailto:pratikk0809@gmail.com"
          className={styles.email}
          aria-label="Send email to Pratik Birla"
        >
          pratikk0809@gmail.com
        </a>
      </div>
    </section>
  );
}
