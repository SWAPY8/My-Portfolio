import styles from "./Projects.module.css";
export default function Projects() {
  return (
    <section id="projects" className={styles.prosection}>
      <h2>Projects</h2>
      <br />
      <div className={styles.projects}>
        <div className={styles.Vir_Doctor}>
          <img
            src="../src/assets/Vir_Doctor.jpg"
            alt="Virtual Doctor"
            width={300}
          />
          <p>IoT-Based Virtual Doctor</p>
          <div>
            The IoT-Based Virtual Doctor monitors patient health remotely using
            sensors and sends real-time data to doctors. It helps in early
            diagnosis and reduces the need for physical hospital visits.
          </div>
        </div>
        <div className={styles.second}>
          <img
            src="../src/assets/Netflix.jpg"
            alt="Virtual Doctor"
            width={300}
          />
          <p>Netflix Clone (Responsive UI)</p>
          <div>
            A responsive Netflix Clone built using HTML, CSS, and JavaScript
            that replicates the UI of the original platform. It features a
            homepage with movie thumbnails, hover effects, and a navbar similar
            to Netflix.
          </div>
        </div>
        <div className={styles.third}>
          <img
            src="../src/assets/Uber_ride.jpg"
            alt="Virtual Doctor"
            width={300}
          />
          <p>Uber-Ride Data Analysis</p>
          <div>
            Conducted exploratory data analysis on Uber ride data to uncover
            trends in ride frequency, time, and location. Visualized key
            insights using Python libraries for better decision-making.
          </div>
        </div>
        <div className={styles.fourth}>
          <img
            src="../src/assets/Student_Man.jpg"
            alt="Virtual Doctor"
            width={300}
          />
          <p>Student Management System</p>
          <div>
            Developed a Student Management System using React for the frontend
            and Spring Boot for the backend with full CRUD functionality.
          </div>
        </div>
        <div className={styles.fifth}>
          <img
            src="../src/assets/Naveye.jpg"
            alt="Virtual Doctor"
            width={300}
          />
          <p>Naveye - Assistive System for Visually Impaired</p>
          <div>
            Is a wearable system for visually impaired users that detects
            obstacles using YOLOv8 and Raspberry Pi.providing audio feedback
            with object details and distance through a hearing device.
          </div>
        </div>
      </div>
    </section>
  );
}
