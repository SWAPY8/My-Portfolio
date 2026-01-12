import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="#home" className={styles.link}>
        Home
      </a>
      <a href="#experience" className={styles.link}>
        Experience
      </a>
      <a href="#education" className={styles.link}>
        Education
      </a>
      <a href="#projects" className={styles.link}>
        Projects
      </a>
      <a href="#contact" className={styles.link}>
        Contact
      </a>
    </nav>
  );
}
