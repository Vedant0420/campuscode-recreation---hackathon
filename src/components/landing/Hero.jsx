import { useNavigate } from 'react-router-dom'
import { LogoMark } from '../Logo'

const links = [
  { label: 'ABOUT', target: 'about' },
  { label: 'HOW IT WORKS', target: 'how' },
  { label: 'HACKATHONS', target: 'hackathons' },
  { label: 'COMMUNITY', target: 'community' },
]

export function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
}

function Nav() {
  const navigate = useNavigate()
  const linkClass = 'cursor-pointer font-mono text-[9px] tracking-[1px] text-[#777] transition-all hover:-translate-y-0.5 hover:text-ink'

  return (
    <header className="absolute top-0 left-0 z-20 flex w-full items-center justify-between px-[5vw] py-[25px]">
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="CampusCode home" className="flex cursor-pointer items-center gap-3 text-left">
        <LogoMark />
        <span>
          <strong className="block text-[13px] font-extrabold tracking-[1.5px]">CAMPUSCODE</strong>
          <small className="mt-[3px] block font-mono text-[7px] tracking-[1px] text-[#888]">HACKATHON ARENA</small>
        </span>
      </button>

      <nav className="flex items-center gap-8">
        {links.map((link) => (
          <button key={link.target} onClick={() => scrollToSection(link.target)} className={linkClass}>
            {link.label}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-[18px]">
        <button onClick={() => navigate('/login')} className={linkClass}>
          LOGIN
        </button>
        <button
          onClick={() => navigate('/register')}
          className="cursor-pointer border border-[#b8b8b0] bg-white/65 px-[15px] py-3 font-mono text-[9px] tracking-[0.5px] transition-all duration-300 hover:-translate-y-[3px] hover:border-ink hover:bg-ink hover:text-white"
        >
          JOIN CAMPUSCODE<span className="ml-[15px]">↗</span>
        </button>
      </div>
    </header>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[850px] overflow-hidden border-b border-line bg-paper bg-[radial-gradient(circle_at_78%_38%,#7665ff1c,transparent_27%),radial-gradient(circle_at_30%_60%,#a8e62e14,transparent_25%)]">
      <Nav />

      <div className="absolute inset-0 bg-[linear-gradient(#1414140e_1px,transparent_1px),linear-gradient(90deg,#1414140e_1px,transparent_1px)] bg-[size:70px_70px] opacity-75 [mask-image:linear-gradient(#000,#0006,transparent)]" />
      <div className="pointer-events-none absolute top-[18%] right-[5%] h-[450px] w-[450px] rounded-full bg-[#7665ff1a] blur-[80px]" />
      <div className="pointer-events-none absolute bottom-[8%] left-[40%] h-[300px] w-[300px] rounded-full bg-[#a8e62e1a] blur-[80px]" />
      <div className="pointer-events-none absolute top-[20%] left-[5%] h-[260px] w-[260px] rounded-full bg-[#526eff0f] blur-[80px]" />

      <div className="hero-network pointer-events-none absolute inset-0 opacity-80">
        <svg viewBox="0 0 1400 800" preserveAspectRatio="none" aria-hidden="true" className="h-full w-full">
          <path d="M0 600 C180 450 250 620 420 430 S680 80 900 270 S1150 500 1400 180" />
          <path d="M80 130 C280 300 380 80 570 270 S800 620 1080 500 S1250 400 1400 620" />
          <path d="M250 800 C400 600 570 650 720 460 S970 180 1160 80" />
          <circle cx="420" cy="430" r="5" />
          <circle cx="900" cy="270" r="5" />
          <circle cx="1080" cy="500" r="5" />
          <circle cx="570" cy="270" r="5" />
          <circle cx="1160" cy="80" r="5" />
        </svg>
      </div>

      <div className="absolute top-[110px] right-[5vw] left-[5vw] flex justify-between font-mono text-[8px] tracking-[1px] text-[#858580]">
        <span className="flex items-center gap-2">
          <i className="h-1.5 w-1.5 rounded-full bg-[#82b91a] shadow-[0_0_10px_#82b91a80]" />
          THE DIGITAL HOME FOR STUDENT INNOVATION
        </span>
        <span>CHENNAI · INDIA</span>
      </div>

      <div className="relative z-[4] px-[8vw] pt-[190px] pb-[100px]">
        <div className="font-mono text-[9px] tracking-[2px] text-[#999]">CAMPUSCODE / 001</div>
        <h1 className="my-10 animate-rise text-[clamp(95px,15vw,220px)] leading-[0.76] font-black tracking-[-12px]">
          BUILD
          <br />
          <span className="text-outline transition-colors duration-[400ms] hover:text-violet hover:[-webkit-text-stroke:1px_#7665ff]">COMPETE</span>
          <br />
          SHIP.
        </h1>
        <div className="flex items-center gap-[60px]">
          <p className="text-sm leading-[1.75] text-[#666]">
            A digital arena for students
            <br />
            who don't just have ideas.
            <br />
            They build them.
          </p>
          <button
            onClick={() => scrollToSection('hackathons')}
            className="cursor-pointer border border-[#999] bg-white px-[18px] py-[15px] font-mono text-[9px] transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-white"
          >
            <span>EXPLORE HACKATHONS</span>
            <b className="ml-[25px] text-[13px]">↗</b>
          </button>
        </div>
      </div>

      <div className="absolute right-[5vw] bottom-[30px] left-[5vw] flex items-center justify-between font-mono text-[8px] tracking-[0.5px] text-[#999]">
        <span>SCROLL TO EXPLORE</span>
        <div className="h-px w-[110px] overflow-hidden bg-[#d2d2cc]">
          <i className="block h-px w-[30%] animate-scroll-line bg-ink" />
        </div>
        <span>01 / 05</span>
      </div>
    </section>
  )
}
