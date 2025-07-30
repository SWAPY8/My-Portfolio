import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className={styles.photo}>
        <img
          src="../src/assets/profile_picture.jpg"
          alt="swapy-img"
          width="250px"
        />
      </div>
      <div className={styles.info}>
        <h1>I'm Swapnil Gandhale</h1>
        <h3>Full-Stack Developer & A Tech Enthusiast</h3>
        <p>Pune, India </p>
        <div className={styles.btns}>
          <button className={styles.github}>GitHub</button>
          <button className={styles.resume}>Resume</button>
        </div>
      </div>
    </section>
  );
}
