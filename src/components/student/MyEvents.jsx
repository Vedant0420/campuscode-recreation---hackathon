import { useState } from 'react'
import EventMark from '../EventMark'
import PageHeading from '../PageHeading'
import EmptyState from '../EmptyState'

function RegistrationCard({ registration }) {
  const [showNote, setShowNote] = useState(false)

  return (
    <article className="animate-rise border border-line bg-white p-[27px] transition-all duration-300 hover:-translate-y-[5px] hover:border-[#c9c9c1] hover:shadow-[0_14px_32px_#1414140f]">
      <img src={registration.banner} alt={`${registration.title} banner`} loading="lazy" className="mb-3.5 max-h-[220px] w-full rounded-xl object-cover" />

      <div className="flex justify-between gap-2.5 font-mono text-[10px] text-[#555]">
        <span>REGISTRATION</span>
        <b className="text-lime">{registration.id}</b>
      </div>

      <div className="mt-[26px] mb-3 flex items-center justify-between gap-3.5 font-mono text-[#555]">
        <EventMark title={registration.title} size={54} />
        <h2 className="text-[32px] leading-none font-bold tracking-[-0.05em]">{registration.title}</h2>
      </div>

      <p className="mb-2 text-[13px] text-[#70706a]">
        STATUS: <strong className="text-[#bbb]">{registration.status}</strong>
      </p>
      <p className="text-[13px] text-[#70706a]">
        TEAM: <strong className="text-[#bbb]">{registration.team}</strong>
      </p>

      <button
        onClick={() => setShowNote((s) => !s)}
        className="mt-[25px] cursor-pointer rounded-[7px] bg-[#a7d94b] px-4 py-[13px] text-xs font-black tracking-[0.12em] transition-all hover:-translate-y-[3px] hover:shadow-[0_12px_28px_#73912d2e] active:scale-[0.97]"
      >
        OPEN JOURNEY ↗
      </button>
      {showNote && <p className="mt-2 font-mono text-[10px] text-[#888]">The event hub is not part of this demo.</p>}
    </article>
  )
}

export default function MyEvents({ registrations }) {
  return (
    <section>
      <PageHeading
        eyebrow="MY ACTIVITY / BACKEND DATA"
        title="MY EVENTS."
        text="Every event you joined, in one place. Open one to see its rounds, team, results and certificates."
        count={registrations.length}
      />

      {registrations.length ? (
        <div className="grid grid-cols-2 gap-3">
          {registrations.map((registration) => (
            <RegistrationCard key={registration.id} registration={registration} />
          ))}
        </div>
      ) : (
        <EmptyState title="NO EVENTS JOINED" text="No joined events were returned for your student account." />
      )}
    </section>
  )
}
