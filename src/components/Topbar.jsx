import { useState } from 'react'
import { Bell, RefreshCw } from 'lucide-react'
import Avatar from './Avatar'

export default function Topbar({ page, user, unread, onOpenNotifications }) {
  const [spinning, setSpinning] = useState(false)

  function refresh() {
    setSpinning(true)
    setTimeout(() => setSpinning(false), 650)
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
          className="relative grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-lg border border-line bg-white text-[#666] shadow-[0_2px_#00000006] transition-all hover:-translate-y-px hover:border-[#a7d94b] hover:bg-[#f8fcef] hover:text-ink"
        >
          <Bell size={16} strokeWidth={1.8} />
          {unread > 0 ? (
            <b className="absolute -top-1 -right-1.5 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-lime px-1 text-[10px] font-black shadow-[0_0_10px_#a7f37a8c]">
              {unread}
            </b>
          ) : (
            <i className="absolute top-2 right-2 h-[5px] w-[5px] rounded-full border border-white bg-[#a7d94b]" />
          )}
        </button>

        <button
          onClick={refresh}
          className="group flex h-[38px] min-w-[92px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-line bg-white px-3 text-[9px] font-extrabold tracking-[0.12em] text-[#555] transition-all hover:-translate-y-px hover:border-[#a7d94b] hover:bg-[#f8fcef] hover:text-ink"
        >
          <span className="grid h-5 w-5 place-items-center rounded-[5px] bg-[#f3f3ee] transition-colors group-hover:bg-[#eaf7c9] group-hover:text-[#58751d]">
            <RefreshCw size={12} strokeWidth={2} className={spinning ? 'animate-spin' : ''} />
          </span>
          REFRESH
        </button>

        <div className="flex items-center gap-2 pl-2 text-[13px] font-bold whitespace-nowrap">
          <Avatar name={user.name} size={34} className="shadow-[0_0_0_2px_#fff,0_0_0_3px_#dfe5cd]" />
          <span>{user.name}</span>
        </div>
      </div>
    </header>
  )
}
