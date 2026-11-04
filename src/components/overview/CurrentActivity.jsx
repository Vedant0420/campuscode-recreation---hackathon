import Panel from '../Panel'
import EmptyState from '../EmptyState'
import { formatDate } from '../../utils/date'

export default function CurrentActivity({ event, onViewEvents }) {
  return (
    <Panel title="01 / CURRENT ACTIVITY" action="VIEW EVENTS" onAction={onViewEvents}>
      {event ? (
        <div>
          <span className="font-mono text-[11px] text-lime-deep">{event.code}</span>
          <h3 className="mt-2.5 mb-[18px] text-[28px] font-bold tracking-[-0.045em]">{event.title}</h3>
          <div className="flex flex-wrap gap-2">
            {[event.status, event.mode, formatDate(event.startDate)].map((meta) => (
              <span
                key={meta}
                className="rounded border border-line px-[9px] py-[7px] text-[11px] font-extrabold text-[#777] uppercase"
              >
                {meta}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <EmptyState title="NO CURRENT ACTIVITY" text="You haven't joined a hackathon yet." />
      )}
    </Panel>
  )
}
