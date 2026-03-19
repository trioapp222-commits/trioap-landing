import { Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon"><Zap size={16} /></span>
            TrioApp
          </div>
          <p className="footer__brand-desc">
            Building mobile apps people love.<br />
            Made with ❤️ in Baku, Azerbaijan.
          </p>
        </div>

        <div className="footer__links-group">
          <div className="footer__col">
            <div className="footer__col-title">Apps</div>
            <a href="#apps" onClick={(e) => { e.preventDefault(); document.querySelector('#apps')?.scrollIntoView({ behavior: 'smooth' }) }}>FutZone</a>
            <a href="#apps" onClick={(e) => { e.preventDefault(); document.querySelector('#apps')?.scrollIntoView({ behavior: 'smooth' }) }}>Sigarsız Yaşa</a>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Company</div>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}>About</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Contact</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' }) }}>FAQ</a>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Legal</div>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy#data-deletion">Data Deletion</Link>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} TrioApp. All rights reserved.</span>
          <span>hello@trioapp.az</span>
        </div>
      </div>
    </footer>
  )
}
