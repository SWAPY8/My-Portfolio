import styles from './Projects.module.css';
export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h2>Projects</h2>
      {list.map((p, i) => (
        <div key={i} className="card">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  )
}
