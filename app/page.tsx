import WaitlistForm from './components/WaitlistForm'

export default function Home() {
  return (
    <div className="page">

      <nav className="nav">
        <span className="nav-logo">Velvari<span className="nav-logo-dot">.</span></span>
        <div className="nav-right">
          <span className="nav-label">Coming Soon</span>
          <a
            href="https://instagram.com/velvari"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            @velvari
          </a>
        </div>
      </nav>

      <main className="hero">
        <p className="hero-eyebrow">Estate 2026</p>

        <h1 className="hero-title">
          Where cars find those<br />
          who deserve them<span className="gold">.</span>
        </h1>

        <div className="hero-rule" />

        <p className="hero-sub">
          La prima piattaforma italiana<br />
          per aste di automobili straordinarie.
        </p>

        <WaitlistForm />
      </main>

      <footer className="footer">
        <span className="footer-copy">© 2026 Velvari · Italia</span>
        <div className="footer-links">
          <a href="https://instagram.com/velvari" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
          <a href="https://tiktok.com/@velvari" target="_blank" rel="noopener noreferrer" className="footer-link">TikTok</a>
          <a href="/privacy" className="footer-link">Privacy</a>
        </div>
      </footer>

    </div>
  )
}
