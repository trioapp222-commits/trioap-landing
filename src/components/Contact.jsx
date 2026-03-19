import { useState } from 'react'
import { Mail, Send, CheckCircle, Github, Instagram } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate send — replace with your backend/Formspree/EmailJS
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__left">
            <span className="section-label"><span>✦</span> Contact</span>
            <h2 className="contact__title">Let's talk.</h2>
            <p className="contact__text">
              Have a question, feedback, or a business inquiry? We'd love to hear from you. Drop us a message and we'll get back to you within 24 hours.
            </p>

            <div className="contact__links">
              <a href="mailto:hello@trioapp.az" className="contact__link">
                <Mail size={18} />
                hello@trioapp.az
              </a>
              <a href="#" className="contact__link">
                <Github size={18} />
                github.com/trioapp
              </a>
              <a href="#" className="contact__link">
                <Instagram size={18} />
                @trioapp.az
              </a>
            </div>
          </div>

          <div className="contact__right">
            {sent ? (
              <div className="contact__success">
                <CheckCircle size={48} className="contact__success-icon" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__field">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="contact__field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="contact__field">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary contact__submit" disabled={loading}>
                  {loading ? 'Sending...' : <>Send Message <Send size={16} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
