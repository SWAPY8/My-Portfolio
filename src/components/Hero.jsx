import styles from './Hero.module.css';
export default function Hero() {
  return (
    <section id="home" className="card" style={{textAlign: 'center'}}>
      <h1>I'm Swapnil Gandhale</h1>
      <h3>A Tech Enthusiast & Web Developer (Freelancer)</h3>
      <p>Pune, India | Experience: 1 Year</p>
      <a href="/cv.pdf" download>
        <button className="download">Download CV</button>
      </a>
      <div style={{marginTop: '10px'}}>
        <a href="https://github.com/yourusername">GitHub</a> | 
        <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
      </div>
    </section>
  )
}
