import styles from "./Experience.module.css";
export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <h2>Experience</h2>
      <div className={styles.card}>
        <p>1) Web Development Intern — CodSoft (Aug–Sep 2024)</p>
        <ul>
          <li>
            Developed responsive web pages using HTML5, CSS3, and JavaScript,
            optimized for cross-browser compatibility.
          </li>
          <li>
            Implemented interactive UI components like navigation menus, form
            validations, and animations to improve user engagement.
          </li>
          <li>
            Collaborated using Git & GitHub for version control, handling
            multiple branches, commits, and pull requests.
          </li>
          <li>
            Completed 3 assigned projects, including a personal portfolio site,
            a landing page, and a calculator application.
          </li>
        </ul>
        <button>Certificate</button>
      </div>
      <div className={styles.card}>
        <p>2) Data Analyst Intern — Neu AI Labs (Sep–Nov 2024)</p>
        <ul>
          <li>
            Participated in the AI Experience Program, focusing on real-world
            datasets. Analyzed Uber ride data in Pune to identify customer
            travel patterns, peak hours, and demand clusters.
          </li>
          <li>
            Analyzed Uber ride data in PunePreprocessed large datasets using
            Pandas & NumPy, ensuring data cleaning and consistency. Designed
            heatmaps, bar charts, and trend graphs using Matplotlib & Seaborn
            for visual insights.
          </li>
          <li>
            Contributed to team discussions on how AI-driven insights could
            improve transport efficiency.
          </li>
        </ul>
        <button>Certificate</button>
      </div>
    </section>
  );
}
