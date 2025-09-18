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
        <p className={styles.gpastyle}>Current CGPA : 8.8</p>
        <p>
          Specialized in Artificial Intelligence, Data Science and Full-Stack
          Web Development.
        </p>
        <p>
          Key Courses: Data Structures & Algorithms, Machine Learning, Database
          Management, <br /> Software Engineering, Cloud Computing, UI/UX.
        </p>
        <div>
          Academic Projects:
          <ul>
            <li>
              Student Management System (Spring Boot + MySQL) – CRUD operations,
              Excel export.
            </li>
            <li>
              NavEye (Computer Vision + LiDAR) – Object detection for navigation
              assistance.
            </li>
            <li>
              DDoS Simulation (Python + Flask) – Simulated network attacks for
              research.
            </li>
          </ul>
        </div>
        <button className={styles.btnstyle}><a href="../src/assets/TE_Result.jpg" target="_blank">Result</a></button>
      </div>

      <div className={styles.educard}>
        <h3>Higher Secondary (HSC) – Science </h3>
        <p>L.G.Bansude Junior College palasdeo, Indapur | 2021 – 2022</p>
        <p className={styles.gpastyle}>Grade : 78%</p>
        <div>
          <ul>
            <li>Stream: Science (Physics, Chemistry, Mathematics, English)</li>
            <li>
              Actively participated in science exhibitions and inter-college
              quiz competitions
            </li>
          </ul>
        </div>
        <button className={styles.btnstyle}><a href="../src/assets/HSC_Result.jpg" target="_blank">Result</a></button>
      </div>
      <div className={styles.educard}>
        <h3>Secondary School (SSC)</h3>
        <p>L.G.Bansude School palasdeo, Indapur | 2019 – 2020</p>
        <p className={styles.gpastyle}>Grade : 89.60%</p>
        <div>
          <ul>
            <li>Excelled in core subjects: Mathematics, Science and English</li>
            <li>
              Represented class in school-level cricket tournaments.
            </li>
          </ul>
        </div>
        <button className={styles.btnstyle}><a href="../src/assets/SSC_Result.jpg" target="_blank">Result</a></button>
      </div>
    </section>
  );
}
