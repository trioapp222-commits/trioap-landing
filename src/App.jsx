import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AppsSection from './components/AppsSection'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import './App.css'

function HomePage() {
  return (
    <>
      <Hero />
      <AppsSection />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  )
}
