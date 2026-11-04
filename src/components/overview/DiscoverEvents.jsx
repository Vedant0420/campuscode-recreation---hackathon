import { useState } from 'react'
import EventMark from '../EventMark'
import { PanelTitle } from '../Panel'
import { formatDate } from '../../utils/date'

function EventCard({ event, joined, justJoined, onJoin }) {
  return (
    <div className="relative flex min-h-[150px] min-w-0 flex-col justify-between gap-[15px] border border-line bg-[#fafaf7] p-[17px] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#c7c7bf] hover:shadow-[0_10px_24px_#1414140d]">
      {justJoined && (
        <span className="absolute top-3 right-3 rotate-6 animate-stamp rounded-full bg-ink px-2.5 py-1.5 text-xs font-black tracking-[0.08em] text-[#a8e62e] shadow-[0_8px_24px_#00000040]">
          YOU'RE IN ✓
        </span>
      )}

      <div className="flex items-center gap-3">
        <EventMark title={event.title} size={40} />
        <div className="min-w-0">
          <span className="block font-mono text-[9px] tracking-[0.1em] text-[#777]">{event.track}</span>
          <strong className="my-2 block text-[13px] leading-tight">{event.title}</strong>
          <small className="block font-mono text-[9px] tracking-[0.1em] text-[#777]">{formatDate(event.startDate)}</small>
          {event.note && <small className="block font-mono text-[9px] tracking-[0.1em] text-[#777]">{event.note}</small>}
        </div>
      </div>

      <button
        disabled={joined}
        onClick={onJoin}
        className="w-fit cursor-pointer border border-[#cfd0c7] bg-white px-[11px] py-[9px] text-[9px] font-extrabold tracking-[0.08em] text-[#555] transition-colors hover:border-[#a7d94b] hover:text-ink disabled:cursor-default disabled:opacity-65 disabled:hover:border-[#cfd0c7]"
      >
        {joined ? 'JOINED' : 'JOIN NOW ↗'}
      </button>
    </div>
  )
}

export default function DiscoverEvents({ events, onViewAll }) {
  const [joined, setJoined] = useState(events.filter((e) => e.joined).map((e) => e.id))
  const [justJoined, setJustJoined] = useState(null)

  function join(id) {
    setJoined((prev) => [...prev, id])
    setJustJoined(id)
    setTimeout(() => setJustJoined(null), 3000)
  }

  return (
    <div className="mb-3.5 border border-line bg-white p-[22px] shadow-[0_10px_30px_#14141409]">
      <PanelTitle title="03 / DISCOVER EVENTS" action="VIEW ALL" onAction={onViewAll} />

      <div className="grid grid-cols-3 gap-2.5">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            joined={joined.includes(event.id)}
            justJoined={justJoined === event.id}
            onJoin={() => join(event.id)}
          />
        ))}
      </div>
    </div>
  )
}
