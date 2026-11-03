import Panel from '../Panel'
import EmptyState from '../EmptyState'
import { formatDate } from '../../utils/date'

export default function NotificationsPanel({ items, onRead, onOpenAll }) {
  const unread = items.filter((n) => !n.read)

  return (
    <Panel title="02 / NOTIFICATIONS" action="OPEN ALL" onAction={onOpenAll}>
      {unread.length ? (
        <div className="flex flex-col">
          {unread.slice(0, 4).map((n) => (
            <button
              key={n.id}
              onClick={() => onRead(n.id)}
              title="Mark as read"
              className="grid cursor-pointer grid-cols-[8px_1fr_auto] items-start gap-[11px] border-b border-[#e3e3dd] py-[13px] text-left last:border-0 hover:bg-[#fafaf7]"
            >
              <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_12px_#a7f37a99]" />
              <div>
                <strong className="block text-[13px]">{n.title}</strong>
                <small className="mt-1 block text-xs leading-normal text-[#777]">{n.body}</small>
              </div>
              <time className="font-mono text-[10px] text-[#999]">{formatDate(n.time)}</time>
            </button>
          ))}
        </div>
      ) : (
        <EmptyState title="ALL CAUGHT UP" text="No unread notifications." />
      )}
    </Panel>
  )
}
