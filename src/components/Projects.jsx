export default function Projects() {
  const projects = [
    { title: "Weather App", description: "Real-time weather updates for any city." },
    { title: "To-Do List", description: "Manage your daily tasks easily." }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="heading">Projects</h2>
      <div style={{ display: 'grid', gap: '20px' }}>
        {projects.map((p, i) => (
          <div key={i} style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
