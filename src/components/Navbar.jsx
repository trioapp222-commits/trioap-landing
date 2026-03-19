import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { NAV_LINKS } from '../data'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo" onClick={() => handleLink('#hero')}>
          <span className="navbar__logo-icon"><Zap size={18} /></span>
          TrioApp
        </a>

        <nav className="navbar__links">
          {NAV_LINKS.map((l) => (
            <button key={l.href} onClick={() => handleLink(l.href)} className="navbar__link">
              {l.label}
            </button>
          ))}
        </nav>

        <a href="#contact" className="btn-primary navbar__cta" onClick={(e) => { e.preventDefault(); handleLink('#contact') }}>
          Get in Touch
        </a>

        <button className="navbar__burger" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile">
          {NAV_LINKS.map((l) => (
            <button key={l.href} onClick={() => handleLink(l.href)} className="navbar__mobile-link">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
