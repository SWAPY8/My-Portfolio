import styles from "./About.module.css";
import cvFile from "../assets/Swapnil_CV.pdf";
import avatarImg from "../assets/avatar.svg";
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>
            Hi, I'm <strong>Swapnil Gandhale</strong>, a passionate Full-Stack
            Developer from Pune, India. I enjoy building modern, responsive web
            applications with React, Node.js and Spring Boot. My goal is to
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
              href={cvFile}
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className={styles.photo}>
          <img src={avatarImg} alt="Swapnil Gandhale" />
        </div>
      </div>
    </section>
  );
}
