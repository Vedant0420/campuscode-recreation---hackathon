import { useNavigate } from 'react-router-dom'
import { LogoMark } from '../Logo'

export default function AuthLayout({ status, indexLabel, indexCount, word, description, extras, system, card, cardFooter, children }) {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen overflow-clip bg-paper bg-[radial-gradient(circle_at_75%_35%,#7665ff12,transparent_25%),radial-gradient(circle_at_25%_75%,#a8e62e0f,transparent_25%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#1414140b_1px,transparent_1px),linear-gradient(90deg,#1414140b_1px,transparent_1px)] bg-[size:65px_65px] [mask-image:linear-gradient(#000,#00000073,transparent)]" />
      <div className="pointer-events-none absolute top-[70px] -right-[180px] h-[500px] w-[500px] rounded-full bg-[#7665ff14] blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-[120px] -left-[120px] h-[350px] w-[350px] rounded-full bg-[#a8e62e12] blur-[90px]" />

      <div className="auth-network pointer-events-none absolute inset-0 opacity-35">
        <svg viewBox="0 0 1400 800" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0 600 C180 450 250 620 420 430 S680 80 900 270 S1150 500 1400 180" />
          <path d="M80 130 C280 300 380 80 570 270 S800 620 1080 500 S1250 400 1400 620" />
          <path d="M250 800 C400 600 570 650 720 460 S970 180 1160 80" />
          <circle cx="420" cy="430" r="4" />
          <circle cx="900" cy="270" r="4" />
          <circle cx="1080" cy="500" r="4" />
          <circle cx="570" cy="270" r="4" />
          <circle cx="1160" cy="80" r="4" />
        </svg>
      </div>

      <header className="relative z-20 flex h-[90px] items-center justify-between px-[5vw]">
        <button onClick={() => navigate('/')} aria-label="CampusCode home" className="flex cursor-pointer items-center gap-2.5 text-left transition-transform hover:-translate-y-0.5">
          <LogoMark />
          <span>
            <strong className="block text-[13px] font-black tracking-[1.5px]">CAMPUSCODE</strong>
            <small className="mt-[3px] block font-mono text-[7px] font-extrabold tracking-[0.18em] text-[#999]">HACKATHON ARENA</small>
          </span>
        </button>
        <button onClick={() => navigate('/')} className="cursor-pointer font-mono text-[9px] tracking-[1px] text-[#777] transition-all hover:-translate-x-1 hover:text-ink">
          ← BACK TO HOME
        </button>
      </header>

      <main className="relative z-[5] grid min-h-[calc(100vh-140px)] grid-cols-[minmax(450px,1fr)_minmax(450px,530px)] items-center gap-[9vw] px-[8vw] pt-[35px] pb-[105px]">
        <section className="relative animate-intro">
          <div className="flex items-center gap-[9px] font-mono text-[9px] tracking-[1px] text-[#888]">
            <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[#82b91a] shadow-[0_0_10px_#7eb91b80]" />
            {status}
          </div>
          <div className="mt-[22px] flex max-w-[450px] justify-between font-mono text-[7px] tracking-[1px] text-[#b1b1ab]">
            <span>{indexLabel}</span>
            <span>{indexCount}</span>
          </div>
          <h1 className="mt-[38px] mb-7 text-[clamp(75px,9vw,145px)] leading-[0.78] font-black tracking-[-8px]">
            {word}
            <br />
            THE
            <br />
            <span className="text-transparent transition-colors [-webkit-text-stroke:1px_#777] hover:text-violet hover:[-webkit-text-stroke:1px_#7566ff]">ARENA.</span>
          </h1>
          <p className="max-w-[455px] text-sm leading-[1.8] text-[#666]">{description}</p>

          {extras}

          <div className="mt-[22px] flex max-w-[520px] justify-between gap-5 border-t border-line pt-[15px] font-mono text-[7px] tracking-[0.6px] text-[#aaa]">
            <span className="flex items-center gap-[7px] text-[#7b9d38]">
              <i className="h-[5px] w-[5px] rounded-full bg-[#82b91a]" />
              {system[0]}
            </span>
            <span>{system[1]}</span>
            <span>2026</span>
          </div>
        </section>

        <section className="w-full animate-card">
          <div className="relative border border-[#d8d8d2] bg-white/95 px-[38px] py-[34px] shadow-[0_30px_80px_#00000012] backdrop-blur-[15px]">
            <div className="absolute -top-px right-[25px] left-[25px] h-0.5 bg-[linear-gradient(90deg,#7665ff,#a8e62e)]" />
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-[8px] tracking-[1px] text-[#999]">{card.label}</span>
                <h2 className="mt-2.5 text-[39px] leading-[1.05] font-bold tracking-[-3px]">{card.title}</h2>
                <p className="mt-[7px] text-[10px] text-[#999]">{card.text}</p>
              </div>
              <div className="text-right font-mono text-[9px] leading-[1.6] text-[#bbb]">
                CC
                <br />
                {card.index}
              </div>
            </div>
            <div className="my-[27px] h-px w-full bg-[#e2e2dc]" />
            {children}
          </div>
          <div className="mt-4 flex justify-between font-mono text-[7px] tracking-[0.7px] text-[#aaa]">
            <span>AUTH / 2026</span>
            <span className="flex items-center gap-[7px]">
              <i className="h-1.5 w-1.5 rounded-full bg-[#82b91a]" />
              {cardFooter}
            </span>
          </div>
        </section>
      </main>

      <footer className="absolute right-[5vw] bottom-[22px] left-[5vw] z-10 flex justify-between font-mono text-[7px] tracking-[0.6px] text-[#aaa]">
        <span>CAMPUSCODE © 2026</span>
        <span>LEARN · BUILD · COMPETE · SHIP</span>
        <span className="text-[#7b9d38]">ALL SYSTEMS OPERATIONAL</span>
      </footer>
    </div>
  )
}
