import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className="card">
      <div className="footer-icons">
        <a href="https://github.com/SWAPY8">🐙 GitHub</a>
        <a href="https://linkedin.com/in/https://www.linkedin.com/in/swapnil-gandhale-206a46253">🔗 LinkedIn</a>
      </div>
      <p>© {new Date().getFullYear()} Swapnil Gandhale</p>
    </footer>
  )
}
