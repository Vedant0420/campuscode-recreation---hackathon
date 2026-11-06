import { useEffect, useRef, useState } from 'react'

export default function Experience() {
  const video = useRef(null)
  const [playing, setPlaying] = useState(false)

  // plays muted while on screen, pauses when scrolled away
  useEffect(() => {
    const element = video.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) element.play().catch(() => {})
        else element.pause()
      },
      { threshold: 0.5 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  function toggle() {
    if (video.current.paused) video.current.play().catch(() => {})
    else video.current.pause()
  }

  return (
    <section className="relative min-h-[650px] overflow-hidden border-b border-line bg-[#eeeeea] bg-[radial-gradient(circle,#7665ff1f,transparent_38%)] pb-[110px]">
      <div className="absolute inset-0 bg-[linear-gradient(#0000000b_1px,transparent_1px),linear-gradient(90deg,#0000000b_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="absolute top-[35px] right-[5vw] left-[5vw] z-[5] flex justify-between font-mono text-[8px] text-[#777]">
        <span>02 — EXPERIENCE</span>
        <span>00:30</span>
      </div>

      <div className="relative z-[2] mx-auto mt-[104px] max-w-[980px] px-[6vw] text-center">
        <small className="font-mono text-[8px] tracking-[1px] text-[#777]">THE CAMPUSCODE EXPERIENCE</small>
        <strong className="mt-5 block text-[clamp(44px,7vw,96px)] leading-[0.82] font-bold tracking-[-0.045em]">
          BUILD
          <br />
          TOGETHER.
        </strong>
      </div>

      <div
        role="button"
        tabIndex={0}
        aria-label="Play the What is CampusCode film"
        onClick={toggle}
        onKeyDown={(e) => e.key === 'Enter' && toggle()}
        className="relative z-[2] mx-auto mt-[38px] w-[min(1120px,94%)] cursor-pointer overflow-hidden rounded-[20px] border border-[#1414141a] bg-[#0b0b0b] shadow-[0_30px_80px_#7665ff2e] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_40px_100px_#7665ff47]"
      >
        <video
          ref={video}
          src="/videos/what-is-campuscode.mp4"
          loop
          muted
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="block aspect-video w-full object-cover"
        />
        {!playing && (
          <>
            <span className="pointer-events-none absolute inset-0 m-auto flex h-[84px] w-[84px] animate-film-pulse items-center justify-center rounded-full border border-white/25 bg-[#0a0a0ab8] text-[26px] text-white backdrop-blur-[6px]">
              ▶
            </span>
            <span className="pointer-events-none absolute bottom-3 left-3.5 rounded-full border border-white/15 bg-[#0a0a0a99] px-3 py-[7px] text-[11px] tracking-[0.18em] text-white backdrop-blur-[6px]">
              TAP TO PLAY
            </span>
          </>
        )}
      </div>

      <div className="absolute right-[5vw] bottom-[35px] left-[5vw] z-[5] flex justify-between font-mono text-[8px] text-[#777]">
        <span>WATCH THE STORY</span>
        <span className="text-[11px] tracking-[0.18em] opacity-75">PLAYS AS YOU SCROLL ↗</span>
      </div>
    </section>
  )
}
