import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import './PolicyPage.css'

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <div className="container policy-page__inner">
        <Link to="/" className="policy-page__back">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="policy-page__content">
          <span className="section-label"><span>✦</span> Legal</span>
          <h1>Privacy Policy</h1>
          <p className="policy-page__updated">Last updated: January 1, 2025</p>

          <div className="policy-section">
            <h2>1. Introduction</h2>
            <p>
              TrioApp ("we," "our," or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information when you use our mobile applications — FutZone and Sigarsız Yaşa — and our website (collectively, the "Services").
            </p>
            <p>
              By using our Services, you agree to the collection and use of information in accordance with this policy. If you disagree, please discontinue use of our Services.
            </p>
          </div>

          <div className="policy-section">
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li><strong>Account Information:</strong> When you sign in with Google or Apple, we receive your name, email address, and profile photo.</li>
              <li><strong>User Content:</strong> Any content or data you create within the apps (e.g., quit-smoking start date, game progress).</li>
              <li><strong>Communications:</strong> If you contact us, we collect your name, email, and message content.</li>
            </ul>
            <h3>2.2 Information Collected Automatically</h3>
            <ul>
              <li><strong>Usage Data:</strong> App interactions, feature usage, and session duration.</li>
              <li><strong>Device Information:</strong> Device type, OS version, and unique device identifiers.</li>
              <li><strong>Crash Reports:</strong> Error logs to help us fix bugs and improve stability.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our Services</li>
              <li>Sync your progress and data across devices</li>
              <li>Display leaderboards and competitive features</li>
              <li>Send you notifications (only with your permission)</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Monitor for security issues and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>We do <strong>not</strong> sell your personal data to third parties.</p>
          </div>

          <div className="policy-section">
            <h2>4. Data Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Firebase / Google:</strong> For authentication, database storage, and analytics (governed by Google's Privacy Policy).</li>
              <li><strong>Apple:</strong> For Sign in with Apple authentication (governed by Apple's Privacy Policy).</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>5. Data Retention</h2>
            <p>
              We retain your personal data for as long as your account is active or as needed to provide Services. You may request deletion of your data at any time (see Section 7).
            </p>
          </div>

          <div className="policy-section">
            <h2>6. Security</h2>
            <p>
              We implement industry-standard security measures including encryption in transit (HTTPS/TLS) and at rest. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div id="data-deletion" className="policy-section">
            <h2>7. Your Rights & Data Deletion</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data.</li>
              <li><strong>Deletion:</strong> Request deletion of your account and all associated data.</li>
              <li><strong>Portability:</strong> Receive your data in a structured format.</li>
            </ul>
            <p>
              To exercise any of these rights, please email us at <a href="mailto:hello@trioapp.az">hello@trioapp.az</a> with the subject line "Data Request." We will respond within 30 days.
            </p>
            <div className="policy-highlight">
              <strong>How to delete your account:</strong> Send an email to <a href="mailto:hello@trioapp.az">hello@trioapp.az</a> with subject "Delete My Account" from your registered email address. We will permanently delete all your data within 7 business days and confirm via email.
            </div>
          </div>

          <div className="policy-section">
            <h2>8. Children's Privacy</h2>
            <p>
              Our Services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.
            </p>
          </div>

          <div className="policy-section">
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last updated" date at the top and, where applicable, notifying you within the app.
            </p>
          </div>

          <div className="policy-section">
            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
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
