import { useEffect, useRef } from 'react'
import Hero from '../components/landing/Hero'
import About, { Marquee } from '../components/landing/About'
import Experience from '../components/landing/Experience'
import HowItWorks from '../components/landing/HowItWorks'
import Arena from '../components/landing/Arena'
import { Community, Cta, Mission } from '../components/landing/Closing'
import Footer from '../components/landing/Footer'

export default function Landing() {
  const glow = useRef(null)

  // soft purple glow that follows the cursor
  useEffect(() => {
    function move(e) {
      glow.current.style.left = `${e.clientX}px`
      glow.current.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-paper">
      <div
        ref={glow}
        className="pointer-events-none fixed z-[100] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#7665ff12,transparent_68%)] transition-[left,top] duration-100"
      />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <HowItWorks />
      <Arena />
      <Mission />
      <Community />
      <Cta />
      <Footer />
    </div>
  )
}
