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
          <p className="policy-page__updated">Effective Date: March 19, 2026</p>
          <p className="policy-page__updated">Developer: Trioapp &nbsp;·&nbsp; Contact: <a href="mailto:trioapp222@gmail.com">trioapp222@gmail.com</a></p>

          <div className="policy-section">
            <h2>1. Introduction</h2>
            <p>This Privacy Policy explains how information is handled in our mobile applications. Our apps provide entertainment and informational content, including football statistics, cinema information, horoscopes, and casual games. We are committed to protecting your privacy and being transparent about how data is handled.</p>
          </div>

          <div className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>We do not directly collect personal information such as your name, phone number, or email address for the core functionality of the app unless you voluntarily provide it through optional features.</p>
            <p>However, our applications may use third-party services that automatically collect certain technical information, including:</p>
            <ul>
              <li>Device identifiers (such as IDFA or AAID)</li>
              <li>IP address</li>
              <li>Device type and operating system</li>
              <li>App usage data</li>
              <li>Crash reports and performance diagnostics</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. No Mandatory Account</h2>
            <p>You can use the core features of the app without creating an account. Creating an account or using login features is optional and only applies to features where authentication is needed.</p>
          </div>

          <div className="policy-section">
            <h2>4. Optional Permissions and Features</h2>
            <p>Our apps may request access to certain device permissions for optional features. These are not required for the basic use of the app:</p>
            <ul>
              <li><strong>Camera:</strong> For optional interactive features such as scanning or AR-based experiences.</li>
              <li><strong>Location:</strong> For optional location-based features within the app.</li>
              <li><strong>Notifications:</strong> For updates such as reminders, alerts, or match-related notifications.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>5. Authentication</h2>
            <p>We may offer optional login methods such as Sign in with Apple or Google Sign-In. If you choose to use these features, we may receive limited account-related information (e.g., a unique identifier) in accordance with the provider's privacy policies.</p>
          </div>

          <div className="policy-section">
            <h2>6. Third-Party Services</h2>
            <p>To support functionality, monetization, and stability, our apps may use:</p>
            <ul>
              <li><strong>Google AdMob</strong> (Advertising)</li>
              <li><strong>Firebase</strong> (Analytics and Crash Reporting)</li>
              <li><strong>Apple App Store / Google Play</strong> (Distribution and Payments)</li>
            </ul>
            <p>These services process data under their own privacy policies. We do not control how third-party providers process data on their own systems.</p>
          </div>

          <div className="policy-section">
            <h2>7. Advertising and Tracking</h2>
            <p>Our apps may display advertisements via Google AdMob. These services may use tracking technologies to deliver relevant ads. Where required by law (e.g., iOS App Tracking Transparency), we will request your explicit permission before enabling tracking.</p>
          </div>

          <div className="policy-section">
            <h2>8. Payments</h2>
            <p>All purchases and subscriptions are processed exclusively by the Apple App Store or Google Play Store. We do not collect, store, or have access to your full payment card or banking details.</p>
          </div>

          <div className="policy-section">
            <h2>9. Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal data to third parties. Data processed by third-party SDKs is handled strictly for functional purposes (advertising, analytics, hosting).</p>
          </div>

          <div className="policy-section">
            <h2>10. International Data Transfers</h2>
            <p>We do not manually transfer user data internationally. However, third-party providers (Google/Apple) may process data on global servers according to their infrastructure and privacy standards.</p>
          </div>

          <div className="policy-section">
            <h2>11. Data Retention</h2>
            <p>We do not retain personal data unless necessary for app functionality. If you use optional login features, associated data is retained until deletion is requested or the account becomes inactive.</p>
          </div>

          <div id="data-deletion" className="policy-section">
            <h2>12. Account Deletion</h2>
            <p>If you use a login feature, you have the right to request deletion of your account and data. Account deletion can be initiated directly through the App Settings. Once deleted, data is permanently removed from our systems.</p>
            <div className="policy-highlight">
              <strong>How to delete your account:</strong> Go to App Settings and select "Delete Account," or contact us at <a href="mailto:trioapp222@gmail.com">trioapp222@gmail.com</a> with the subject "Delete My Account." Data will be permanently removed once the request is processed.
            </div>
          </div>

          <div className="policy-section">
            <h2>13. Children's Privacy</h2>
            <p>Our apps are intended for a general audience. We do not knowingly collect personal information from children. Age ratings are assigned by the relevant app stores based on content.</p>
          </div>

          <div className="policy-section">
            <h2>14. Security</h2>
            <p>We take reasonable administrative and technical measures to protect information. However, no method of electronic transmission or storage is 100% secure.</p>
          </div>

          <div className="policy-section">
            <h2>15. Your Rights</h2>
            <p>Depending on your region, you may have the right to access, correct, or delete your data. To exercise these rights, contact us at: <a href="mailto:trioapp222@gmail.com">trioapp222@gmail.com</a></p>
          </div>

          <div className="policy-section">
            <h2>16. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any updates will be published on this page with a revised Effective Date.</p>
          </div>

          <div className="policy-section">
            <h2>17. Contact Us</h2>
            <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
            <ul>
              <li>Email: <a href="mailto:trioapp222@gmail.com">trioapp222@gmail.com</a></li>
              <li>Developer: Trioapp</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}