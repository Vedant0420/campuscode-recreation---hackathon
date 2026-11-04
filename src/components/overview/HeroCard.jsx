import Avatar from '../Avatar'
import EventMark from '../EventMark'

export default function HeroCard({ event, user }) {
  return (
    <div className="relative mb-4 flex min-h-[280px] animate-rise items-center justify-between overflow-hidden border border-line bg-white p-[38px] shadow-[0_18px_45px_#1414140b] [animation-delay:100ms]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,#a7d94b33,transparent_30%)]" />

      <div className="relative z-10 max-w-[650px]">
        <span className="font-mono text-[11px] tracking-[0.2em] text-lime-deep">BUILD · LEARN · COLLABORATE</span>
        <h2 className="mt-3.5 mb-3 text-[clamp(28px,4vw,54px)] leading-none font-black tracking-[-0.055em]">
          {event ? event.title : '—'}
        </h2>
        <p className="max-w-[580px] text-[13px] leading-[1.7] text-[#666]">
          {event ? event.description : 'No current hackathon is assigned to your account.'}
        </p>
        {event && (
          <button className="mt-3.5 cursor-pointer rounded-[7px] bg-[#a7d94b] px-4 py-[13px] text-xs font-black tracking-[0.12em] transition-all hover:-translate-y-[3px] hover:shadow-[0_12px_28px_#73912d2e] active:scale-[0.97]">
            OPEN EVENT <b className="ml-3">↗</b>
          </button>
        )}
      </div>

      <div className="relative z-10 flex items-center gap-[18px]">
        <Avatar name={user.name} size={88} className="animate-float shadow-[0_0_0_3px_#fff,0_14px_30px_#00000026]" />
        {event && <EventMark title={event.title} size={64} className="animate-float [animation-delay:-2.5s]" />}
      </div>
    </div>
  )
}
