export default function Navbar() {
  return (
    <nav style={{ background: '#fff', padding: '15px 20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', position: 'sticky', top: 0 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ fontSize: '24px' }}>Swapnil</h1>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
