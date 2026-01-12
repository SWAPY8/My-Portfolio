import styles from "./Hero.module.css";
import profilePic from "../assets/profile_picture.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero">
     <div className={styles.photo}>
  <img
    src={profilePic}
    alt="swapy-img"
    width="250"
  />
</div>

      <div className={styles.info}>
        <h1>I'm Swapnil Gandhale</h1>
        <h3>Full-Stack Developer & An AI Enthusiast</h3>
        <p>Pune, India </p>
        <div className={styles.btns}>
          <button className={styles.github}>
            <a href="https://github.com/SWAPY8" target="_blank">
              GitHub
            </a>
          </button>
          <button className={styles.linkedin}>
            <a
              href="https://www.linkedin.com/in/swapnil-gandhale-206a46253"
              target="_blank"
            >
              LinkedIn
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
