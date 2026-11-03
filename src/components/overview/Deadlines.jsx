import Panel from '../Panel'

export default function Deadlines({ items, onBrowse }) {
  return (
    <Panel title="UPCOMING DEADLINES" action="VIEW ALL" onAction={onBrowse}>
      {items.length ? (
        <div className="grid gap-2.5">
          {items.map((item) => {
            const date = new Date(item.date)
            return (
              <div
                key={item.title}
                className="flex items-center gap-3.5 rounded-xl border border-[#e7e7e0] bg-[#fafaf7] px-3.5 py-3 transition-all hover:translate-x-[3px] hover:border-[#b8e62e]"
              >
                <div className="min-w-[58px] text-center">
                  <strong className="block text-[15px] text-[#687f22]">{String(date.getDate()).padStart(2, '0')}</strong>
                  <small className="text-[10px] text-[#999]">
                    {date.toLocaleString('en-IN', { month: 'short' }).toUpperCase()}
                  </small>
                </div>
                <div className="min-w-0">
                  <strong className="block truncate text-[13.5px] text-[#141414]">{item.title}</strong>
                  <span className="text-[9px] font-extrabold tracking-[0.2em] text-[#7a9a1f]">{item.label}</span>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="px-2 py-[18px] text-center">
          <strong className="text-sm text-[#141414]">No deadlines yet.</strong>
          <p className="mt-2 mb-3.5 text-[12.5px] leading-relaxed text-[#777]">
            Join an event and your upcoming dates will appear here.
          </p>
          <button
            onClick={onBrowse}
            className="cursor-pointer rounded-[9px] bg-lime px-[18px] py-2.5 text-[11px] font-extrabold tracking-[0.08em] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_26px_#a7f37a73]"
          >
            BROWSE EVENTS ↗
          </button>
        </div>
      )}
    </Panel>
  )
}
