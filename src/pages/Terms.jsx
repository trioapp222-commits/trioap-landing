import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import './PolicyPage.css'

export default function Terms() {
  return (
    <div className="policy-page">
      <div className="container policy-page__inner">
        <Link to="/" className="policy-page__back">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <div className="policy-page__content">
          <span className="section-label"><span>✦</span> Legal</span>
          <h1>Terms of Service</h1>
          <p className="policy-page__updated">Last updated: January 1, 2025</p>

          <div className="policy-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By downloading or using any TrioApp application or visiting our website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our Services.</p>
          </div>

          <div className="policy-section">
            <h2>2. Use of Our Services</h2>
            <p>You may use our Services only as permitted by law and these Terms. You agree not to misuse our Services — for example, by interfering with our Services or attempting to access them using a method other than the interface we provide.</p>
          </div>

          <div className="policy-section">
            <h2>3. User Accounts</h2>
            <p>Some Services require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
          </div>

          <div className="policy-section">
            <h2>4. Intellectual Property</h2>
            <p>All content, features, and functionality of our Services — including but not limited to text, graphics, logos, and software — are owned by TrioApp and protected by applicable intellectual property laws.</p>
          </div>

          <div className="policy-section">
            <h2>5. In-App Purchases</h2>
            <p>Some features may be available through in-app purchases. All purchases are final and non-refundable unless required by applicable law.</p>
          </div>

          <div className="policy-section">
            <h2>6. Prohibited Conduct</h2>
            <ul>
              <li>Reverse engineering, decompiling, or attempting to extract source code</li>
              <li>Creating derivative works based on our Services</li>
              <li>Using automated tools to access our Services</li>
              <li>Violating any applicable laws or regulations</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>7. Disclaimer of Warranties</h2>
            <p>Our Services are provided "as is" without warranties of any kind. We do not guarantee that our Services will be uninterrupted, error-free, or completely secure.</p>
          </div>

          <div className="policy-section">
            <h2>8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, TrioApp shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our Services.</p>
          </div>

          <div className="policy-section">
            <h2>9. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Continued use of our Services constitutes acceptance of the revised Terms.</p>
          </div>

          <div className="policy-section">
            <h2>10. Governing Law</h2>
            <p>These Terms are governed by the laws of the Republic of Azerbaijan.</p>
          </div>

          <div className="policy-section">
            <h2>11. Contact Us</h2>
            <ul>
              <li>Email: <a href="mailto:hello@trioapp.az">hello@trioapp.az</a></li>
              <li>Company: TrioApp</li>
              <li>Location: Baku, Azerbaijan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
