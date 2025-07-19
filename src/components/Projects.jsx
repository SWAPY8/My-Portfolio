export default function Projects() {
  const list = [
    {
      title: "IoT Based Virtual Doctor",
      desc: "Monitors patient health remotely using sensors (GitHub link)..."
    },
    {
      title: "Netflix Clone (Web Dev)",
      desc: "Responsive Netflix UI with JS/CSS/HTML."
    },
    {
      title: "Uber Ride Analysis",
      desc: "EDA and visualizations of Uber ride data."
    },
    {
      title: "React‑based Student Management System",
      desc: "Full CRUD with React and Spring Boot."
    },
    {
      title: "NavEye – Smart Assistant",
      desc: "YOLOv8 & Raspberry Pi assistant for visually impaired."
    }
  ]

  return (
    <section id="projects">
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
