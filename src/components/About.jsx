import { MapPin, Heart, Code2, Sparkles } from 'lucide-react'
import './About.css'

const VALUES = [
  {
    icon: <Code2 size={22} />,
    title: 'Clean Code First',
    desc: 'We build apps with clean architecture — performant, maintainable, and built to last.',
  },
  {
    icon: <Heart size={22} />,
    title: 'User-Centered',
    desc: 'Every decision starts and ends with the user. If it doesn\'t help them, we don\'t ship it.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Focused Products',
    desc: 'We don\'t chase trends. We pick a problem, solve it well, and polish it until it shines.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Made in Azerbaijan',
    desc: 'Proudly built in Baku, AZ — contributing to the local tech ecosystem.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__left">
            <span className="section-label"><span>✦</span> About Us</span>
            <h2 className="about__title">We build apps<br />people actually use.</h2>
            <p className="about__text">
              TrioApp is a mobile development studio based in Baku, Azerbaijan. We're a small, focused team passionate about crafting software that solves real problems — not software that just looks good in screenshots.
            </p>
            <p className="about__text">
              Our philosophy is simple: build fewer things, but build them extremely well. Every app we release goes through rigorous testing, design refinement, and real-world feedback loops before it hits the store.
            </p>

            <div className="about__location">
              <MapPin size={16} />
              <span>Baku, Azerbaijan 🇦🇿</span>
            </div>
          </div>

          <div className="about__right">
            <div className="about__avatar">
              <div className="about__avatar-inner">
                <span>🚀</span>
              </div>
              <div className="about__avatar-ring" />
              <div className="about__avatar-ring about__avatar-ring--2" />
            </div>

            <div className="about__values">
              {VALUES.map((v) => (
                <div key={v.title} className="about__value">
                  <div className="about__value-icon">{v.icon}</div>
                  <div>
                    <div className="about__value-title">{v.title}</div>
                    <div className="about__value-desc">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
