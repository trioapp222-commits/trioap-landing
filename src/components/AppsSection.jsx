import { ExternalLink, Smartphone, Apple } from 'lucide-react'
import { APPS } from '../data'
import './AppsSection.css'

function PhoneFrame({ app }) {
  return (
    <div className="app-phone">
      <div className="app-phone__notch" />
      <div className="app-phone__screen" style={{ background: `linear-gradient(160deg, ${app.colorDim} 0%, var(--trio-dark) 60%)` }}>
        <div className="app-phone__header">
          <span className="app-phone__time">9:41</span>
          <span className="app-phone__signal">●●●</span>
        </div>
        <div className="app-phone__content">
          <div className="app-phone__icon" style={{ background: app.colorDim, border: `1px solid ${app.color}30` }}>
            {app.icon}
          </div>
          <div className="app-phone__app-name" style={{ color: app.color }}>{app.name}</div>
          <div className="app-phone__tagline">{app.tagline}</div>

          <div className="app-phone__screens">
            {app.screenshots.map((s, i) => (
              <div key={i} className="app-phone__thumb" style={{ animationDelay: `${i * 0.1}s`, background: app.colorDim }}>
                <span>{s}</span>
              </div>
            ))}
          </div>

          <div className="app-phone__btn" style={{ background: app.color }}>
            Open App
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AppsSection() {
  return (
    <section id="apps" className="apps-section">
      <div className="container">
        <div className="apps-section__header">
          <span className="section-label"><span>✦</span> Our Apps</span>
          <h2 className="apps-section__title">Two apps. One mission.</h2>
          <p className="apps-section__subtitle">
            Every product we build solves a real problem — with focus, care, and attention to detail.
          </p>
        </div>

        <div className="apps-section__list">
          {APPS.map((app, idx) => (
            <div key={app.id} className={`app-card ${idx % 2 === 1 ? 'app-card--reversed' : ''}`}>
              <div className="app-card__visual">
                <PhoneFrame app={app} />
                <div className="app-card__glow" style={{ background: `radial-gradient(circle, ${app.color}30 0%, transparent 70%)` }} />
              </div>

              <div className="app-card__info">
                <div className="app-card__category" style={{ color: app.color, background: app.colorDim, borderColor: `${app.color}30` }}>
                  {app.category}
                </div>

                <h3 className="app-card__name">{app.name}</h3>
                <p className="app-card__tagline">{app.tagline}</p>
                <p className="app-card__desc">{app.description}</p>

                <div className="app-card__features">
                  {app.features.map((f) => (
                    <div key={f.title} className="app-card__feature">
                      <span className="app-card__feature-icon">{f.icon}</span>
                      <div>
                        <div className="app-card__feature-title">{f.title}</div>
                        <div className="app-card__feature-desc">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="app-card__actions">
                  {app.playStoreUrl && (
                    <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="store-btn store-btn--android">
                      <Smartphone size={18} />
                      <div>
                        <div className="store-btn__sub">Get it on</div>
                        <div className="store-btn__name">Google Play</div>
                      </div>
                    </a>
                  )}
                  {app.appStoreUrl && (
                    <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="store-btn store-btn--ios">
                      <Apple size={18} />
                      <div>
                        <div className="store-btn__sub">Download on the</div>
                        <div className="store-btn__name">App Store</div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
