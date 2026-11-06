import { useRef, useState } from 'react'
import { Bell, RefreshCw } from 'lucide-react'
import Avatar from './Avatar'

export default function Topbar({ page, user, unread, onOpenNotifications }) {
  const [spinning, setSpinning] = useState(false)
  const [roast, setRoast] = useState(false)
  const clicks = useRef(0)
  const idle = useRef(null)

  function refresh() {
    setSpinning(true)
    setTimeout(() => setSpinning(false), 650)

    // 5 quick clicks gets a reply
    clicks.current += 1
    clearTimeout(idle.current)
    idle.current = setTimeout(() => (clicks.current = 0), 2000)
    if (clicks.current === 5) {
      clicks.current = 0
      setRoast(true)
      setTimeout(() => setRoast(false), 3000)
    }
  }

  return (
    <header className="sticky top-0 z-20 flex h-[76px] shrink-0 items-center justify-between border-b border-line bg-paper/90 px-[42px] backdrop-blur-xl">
      <div>
        <span className="block font-mono text-[10px] tracking-[0.15em] text-[#888]">CAMPUSCODE / STUDENT</span>
        <strong className="mt-[5px] block text-[13px] tracking-[0.1em]">{page.toUpperCase()}</strong>
      </div>

      <div className="flex items-center gap-[9px]">
        <button
          onClick={onOpenNotifications}
          aria-label="Open notifications"
          className="group relative grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-lg border border-line bg-white text-[#666] shadow-[0_2px_#00000006] transition-all hover:-translate-y-px hover:border-[#a7d94b] hover:bg-[#f8fcef] hover:text-ink"
        >
          <Bell size={16} strokeWidth={1.8} />
          {unread > 0 ? (
            <b className="absolute -top-1 -right-1.5 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-lime px-1 text-[10px] font-black shadow-[0_0_10px_#a7f37a8c]">
              {unread}
            </b>
          ) : (
            <i className="absolute top-2 right-2 h-[5px] w-[5px] rounded-full border border-white bg-[#a7d94b]" />
          )}
          {unread === 69 && (
            <span className="pointer-events-none absolute top-full mt-1.5 font-mono text-[10px] text-[#777] opacity-0 transition-opacity group-hover:opacity-100">nice.</span>
          )}
        </button>

        <button
          onClick={refresh}
          className="group relative flex h-[38px] min-w-[92px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-line bg-white px-3 text-[9px] font-extrabold tracking-[0.12em] text-[#555] transition-all hover:-translate-y-px hover:border-[#a7d94b] hover:bg-[#f8fcef] hover:text-ink"
        >
          <span className="grid h-5 w-5 place-items-center rounded-[5px] bg-[#f3f3ee] transition-colors group-hover:bg-[#eaf7c9] group-hover:text-[#58751d]">
            <RefreshCw size={12} strokeWidth={2} className={spinning ? 'animate-spin' : ''} />
          </span>
          REFRESH
          {roast && (
            <span role="status" className="absolute top-full right-0 mt-2 animate-stamp rounded-full bg-ink px-3 py-2 text-[10px] font-black tracking-[0.04em] whitespace-nowrap text-[#a8e62e] shadow-[0_8px_24px_#00000040]">
              It's mock data, bro. Nothing is going to change.
            </span>
          )}
        </button>

        <div className="flex items-center gap-2 pl-2 text-[13px] font-bold whitespace-nowrap">
          <Avatar name={user.name} size={34} className="shadow-[0_0_0_2px_#fff,0_0_0_3px_#dfe5cd]" />
          <span>{user.name}</span>
        </div>
      </div>
    </header>
  )
}
