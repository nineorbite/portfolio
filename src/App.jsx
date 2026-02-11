import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import Projects from './components/Projects'
import ProcessTimeline from './components/ProcessTimeline'
import Services from './components/Services'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Projects />
        <ProcessTimeline />
        <Services />
      </main>
      <Footer />
    </div>
  )
}

export default App
