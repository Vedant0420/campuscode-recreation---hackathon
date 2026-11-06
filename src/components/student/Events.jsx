import { useState } from 'react'
import EventMark from '../EventMark'
import PageHeading from '../PageHeading'
import { formatDate } from '../../utils/date'

const tabs = [
  { label: 'All events', kind: 'all' },
  { label: 'Hackathons', kind: 'hackathon' },
  { label: 'Quizzes', kind: 'quiz' },
]

function EventCard({ event }) {
  const [registered, setRegistered] = useState(false)
  const [showNote, setShowNote] = useState(false)
  const isIn = event.joined || registered
  const doneLabel = event.joined ? '✓ JOINED' : '✓ REGISTERED'

  return (
    <article className="flex min-h-[330px] animate-rise flex-col border border-line bg-white p-[25px] transition-all duration-300 hover:-translate-y-[5px] hover:border-[#c9c9c1] hover:shadow-[0_14px_32px_#1414140f]">
      <img src={event.banner} alt={`${event.title} banner`} loading="lazy" className="mb-3.5 max-h-[220px] w-full rounded-xl object-cover" />

      <div className="flex justify-between gap-2.5 font-mono text-[10px] text-[#70706a]">
        <span className="min-w-0 truncate">{event.id}</span>
        <b className="text-lime">{event.status}</b>
      </div>

      <div className="mt-[26px] mb-3 flex items-center gap-3.5">
        <EventMark title={event.title} size={54} />
        <h2 className="text-3xl leading-none font-bold tracking-[-0.05em]">{event.title}</h2>
      </div>

      {event.tagline && <p className="mb-6 text-sm font-bold text-[#70706a]">{event.tagline}</p>}
      <p className="text-sm leading-[1.7] text-[#70706a]">{event.description}</p>

      <div className="mt-auto grid grid-cols-3 gap-2 py-[18px] text-xs text-[#555]">
        {[
          ['MODE', '—'],
          [event.sizeLabel, event.size],
          ['START', formatDate(event.startDate)],
        ].map(([label, value]) => (
          <span key={label}>
            <small className="mb-1.5 block font-mono text-[10px] text-[#888]">{label}</small>
            {value}
          </span>
        ))}
      </div>

      {showNote && <p className="mb-2 font-mono text-[10px] text-[#888]">Event details are not part of this demo.</p>}

      <div className="mt-auto flex items-stretch gap-2">
        <button
          onClick={() => setShowNote((s) => !s)}
          className="min-w-0 flex-1 cursor-pointer rounded-[7px] border border-[#cfd0c7] bg-white px-4 py-[13px] text-xs font-black tracking-[0.12em] text-[#555] transition-colors hover:border-[#999] hover:text-ink"
        >
          VIEW DETAILS <b className="ml-3">↗</b>
        </button>
        <button
          disabled={isIn}
          onClick={() => setRegistered(true)}
          className={`min-w-0 flex-1 rounded-[7px] border px-2 py-[13px] text-[10px] font-black ${
            isIn
              ? 'border-[#d3e2a0] bg-[#eef4d8] text-[#5e731d]'
              : 'cursor-pointer border-ink bg-ink text-white transition-all hover:-translate-y-0.5 hover:bg-[#202020]'
          }`}
        >
          {isIn ? doneLabel : event.kind === 'quiz' ? 'REGISTER FOR QUIZ ↗' : 'JOIN HACKATHON ↗'}
        </button>
      </div>
    </article>
  )
}

export default function Events({ events }) {
  const [kind, setKind] = useState('all')
  const visible = kind === 'all' ? events : events.filter((e) => e.kind === kind)

  return (
    <section>
      <PageHeading
        eyebrow="DISCOVER / BACKEND DATA"
        title="EVENTS."
        text="Explore CampusCode events — hackathons, quizzes, workshops — and join the ones you want."
        count={events.length}
      />

      <div role="tablist" aria-label="Filter events by type" className="mt-[18px] mb-6 flex flex-wrap gap-1.5 border-b border-[#e5e5e0] pb-3.5">
        {tabs.map((tab) => (
          <button
            key={tab.kind}
            role="tab"
            aria-selected={kind === tab.kind}
            onClick={() => setKind(tab.kind)}
            className={`cursor-pointer rounded-[20px] border border-transparent px-3.5 py-[9px] text-[13px] font-semibold transition-colors ${
              kind === tab.kind ? 'bg-ink text-[#a8e62e]' : 'text-[#777770] hover:text-ink'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3">
        {visible.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}
