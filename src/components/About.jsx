import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>
            Hi, I'm <strong>Swapnil Gandhale</strong>, a passionate Full-Stack
            Developer from Pune, India. I enjoy building modern, responsive web
            applications with React, Node.js, and Spring Boot. My goal is to
            create impactful digital products while growing as a full-stack
            developer.
          </p>

          <ul className="about-list">
            <li>1 Year of development experience</li>
            <li>Worked on React, Spring Boot & MySQL</li>
            <li>Interested in AI integration & Ethical Hacking</li>
          </ul>

          <div className={styles.actions}>
            <a
              href="../src/assets/Swapnil_cv.pdf"
              className={styles.button}
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className={styles.photo}>
          <img src="../src/assets/avatar.svg" alt="Swapnil Gandhale" />
        </div>
      </div>
    </section>
  );
}
