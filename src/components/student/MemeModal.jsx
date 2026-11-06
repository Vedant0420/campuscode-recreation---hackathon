import { useEffect } from 'react'

export default function MemeModal({ onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div role="dialog" aria-modal="true" aria-label="Let me have it" onClick={onClose} className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6 backdrop-blur-sm">
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-[720px] animate-rise border border-line bg-white p-7 shadow-[0_30px_80px_#00000040]">
        <div className="absolute -top-px right-[25px] left-[25px] h-0.5 bg-[linear-gradient(90deg,#7665ff,#a8e62e)]" />

        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[11px] tracking-[0.18em] text-lime-deep">REBUILD '26 / EVENT DETAILS</span>
          <button onClick={onClose} aria-label="Close" className="cursor-pointer font-mono text-xs text-[#888] transition-colors hover:text-ink">
            ✕ CLOSE
          </button>
        </div>

        <h2 className="mt-3 text-5xl leading-none font-black tracking-[-0.05em]">
          LEME HAVE IT. <span className="text-violet">LEME WIN.</span>
        </h2>
        <p className="mt-3 mb-5 text-sm leading-[1.75] text-[#6f6f69]">Please speed, I need this. My mom is kinda homeless.</p>

        <div className="overflow-hidden rounded-xl bg-[#0b0b0b]">
          <video
            src="/videos/my-mom-is-kinda-homeless.mp4"
            title="iShowSpeed My Mom Is Kinda Homeless clip"
            controls
            playsInline
            preload="metadata"
            className="block aspect-video w-full"
          />
        </div>
      </div>
    </div>
  )
}
