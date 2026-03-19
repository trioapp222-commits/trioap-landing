import { ArrowRight, Star, Download } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span>✦</span>
            Built in Azerbaijan
          </div>

          <h1 className="hero__title">
            Apps that make
            <br />
            <span className="hero__title-accent">life better.</span>
          </h1>

          <p className="hero__subtitle">
            TrioApp crafts mobile experiences that are focused, beautiful, and built for real people. 
            Two apps. Thousands of users. Zero fluff.
          </p>

          <div className="hero__actions">
            <a
              href="#apps"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); document.querySelector('#apps')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Explore Our Apps
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Get in Touch
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">2</span>
              <span className="hero__stat-label">Apps</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">600+</span>
              <span className="hero__stat-label">Trivia Levels</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <div className="hero__stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#f59e0b" stroke="none" />)}
              </div>
              <span className="hero__stat-label">Top Rated</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__phone hero__phone--back">
            <div className="hero__phone-screen">
              <div className="hero__app-preview hero__app-preview--green">
                <div className="hap__icon">⚽</div>
                <div className="hap__name">FutZone</div>
                <div className="hap__sub">Football Trivia</div>
                <div className="hap__levels">Level 247 / 600</div>
                <div className="hap__bar"><div className="hap__bar-fill hap__bar-fill--green" /></div>
              </div>
            </div>
          </div>
          <div className="hero__phone hero__phone--front">
            <div className="hero__phone-screen">
              <div className="hero__app-preview hero__app-preview--purple">
                <div className="hap__icon">🚭</div>
                <div className="hap__name">Sigarsız Yaşa</div>
                <div className="hap__sub">Quit Smoking</div>
                <div className="hap__days">47 Days Clean</div>
                <div className="hap__bar"><div className="hap__bar-fill hap__bar-fill--purple" /></div>
              </div>
            </div>
          </div>
          <div className="hero__download-badge">
            <Download size={14} />
            Available now
          </div>
        </div>
      </div>
    </section>
  )
}
