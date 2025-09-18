import styles from "./Experience.module.css";
export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <h2>Experience</h2>
      <div className={styles.card}>
        <p>1) Web Development Intern — CodSoft (Aug–Sep 2024)</p>
        <ul>
          <li>
            Developed responsive web pages using HTML5, CSS3 and JavaScript,
            optimized for cross-browser compatibility.
          </li>
          <li>
            Implemented interactive UI components like navigation menus, form
            validations and animations to improve user engagement.
          </li>
          <li>
            Collaborated using Git & GitHub for version control, handling
            multiple branches, commits and pull requests.
          </li>
          <li>
            Completed 3 assigned projects, including a personal portfolio site,
            a landing page and a calculator application.
          </li>
        </ul>
        <button>
          <a href="../src/assets/codesoft_certi.pdf" target="_blank">
            Certificate
          </a>
        </button>
      </div>
      <div className={styles.card}>
        <p>2) Data Analyst Intern — Neu AI Labs (Sep–Nov 2024)</p>
        <ul>
          <li>
            Learned and worked with Python data analysis libraries including
            Pandas, NumPy, Matplotlib and Seaborn for handling, cleaning and
            visualizing datasets.
          </li>
          <li>
            Gained hands-on experience in data preprocessing, feature
            extraction and trend analysis while working on real-world datasets.
          </li>
          <li>
            Applied these skills in a project analyzing Uber ride data in Pune,
            performing EDA to identify demand trends, peak timings and
            location-based insights.
          </li>

          <li>
            Contributed to team discussions on how AI-driven insights could
            improve transport efficiency.
          </li>
        </ul>
        <button>
          <a href="../src/assets/neuai_certi.jpg" target="_blank">
            Certificate
          </a>
        </button>
      </div>
    </section>
  );
}
