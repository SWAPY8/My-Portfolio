import styles from "./Education.module.css";
export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <h2>Education</h2>
      <div className={styles.educard}>
        <h3>
          Bachelor of Engineering in Artificial Intelligence & Data Science
        </h3>
        <p>Savitribai Phule Pune University — 2022 – 2026</p>
        <p>Current CGPA: 8.8</p>
        <p>
          Specialized in Artificial Intelligence, Data Science, and Full-Stack
          Web Development.
        </p>
        <p>
          Key Courses: Data Structures & Algorithms, Machine Learning, Database
          Management, Software Engineering, Cloud Computing, UI/UX.
        </p>
        <p>Academic Projects:
          <ul>
            <li>Student Management System (Spring Boot + MySQL) – CRUD operations,
          Excel export.</li>
            <li>NavEye (Computer Vision + LiDAR) – Object detection for navigation
          assistance.</li>
            <li>DDoS Simulation (Python + Flask) – Simulated network attacks for
          research.</li>
          </ul>
          
        </p>
      </div>
      <div className={styles.educard}>
        <h3>High School — L. G. Ansude Jr. College (2018–2020)</h3>
        <p>Grade: First Class Distinction</p>
      </div>
      <div className={styles.educard}>
        <h3>High School — L. G. Ansude Jr. College (2018–2020)</h3>
        <p>Grade: First Class Distinction</p>
      </div>
    </section>
  );
}
