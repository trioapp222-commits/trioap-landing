import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '../data'
import './FAQ.css'

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`} onClick={onToggle}>
      <div className="faq-item__question">
        <span>{q}</span>
        <ChevronDown size={18} className="faq-item__chevron" />
      </div>
      <div className="faq-item__answer">
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq__header">
          <span className="section-label"><span>✦</span> FAQ</span>
          <h2 className="faq__title">Frequently Asked Questions</h2>
          <p className="faq__subtitle">Got questions? We've got answers.</p>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
