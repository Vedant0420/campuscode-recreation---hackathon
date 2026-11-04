import {
  Award,
  Bell,
  Bot,
  CircleUserRound,
  Clock,
  IdCard,
  LayoutGrid,
  Sparkles,
  Trophy,
} from 'lucide-react'
import Logo from './Logo'

export const navItems = [
  { label: 'Overview', icon: LayoutGrid },
  { label: 'Events', icon: Trophy },
  { label: 'My Events', icon: Clock },
  { label: 'HackMate AI', icon: Sparkles },
  { label: 'IdeaCheck AI', icon: Sparkles },
  { label: 'Certificates', icon: Award },
  { label: 'Digital Card', icon: IdCard },
  { label: 'RuleBot AI', icon: Bot, tag: 'AI' },
  { label: 'Student Guide', icon: Bot },
  { label: 'Official Communication', icon: Bell },
  { label: 'Notifications', icon: Bell },
  { label: 'Help & Support', icon: Bot },
  { label: 'Profile', icon: CircleUserRound },
]

function SectionLabel({ children }) {
  return (
    <div className="mx-[11px] mb-3 font-mono text-[11px] tracking-[0.2em] text-[#8b8b84]">
      {children}
    </div>
  )
}

export default function Sidebar({ active, onSelect, user, onLogout }) {
  return (
    <aside className="sticky top-0 flex h-screen w-[260px] shrink-0 flex-col overflow-y-auto border-r border-line bg-paper px-[18px] pt-7 pb-5">
      <Logo />

      <div className="mt-9">
        <SectionLabel>WORKSPACE</SectionLabel>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map(({ label, icon: Icon, tag }) => {
          const isActive = label === active
          return (
            <button
              key={label}
              onClick={() => onSelect(label)}
              className={`relative flex min-h-[42px] w-full cursor-pointer items-center gap-3 overflow-hidden rounded-lg px-3 text-left text-sm font-bold transition-all duration-200 active:scale-[0.98] ${
                isActive
                  ? 'bg-[#a7d94b] text-ink shadow-[0_8px_24px_#73912d24]'
                  : 'text-[#6f6f69] hover:translate-x-0.5 hover:bg-[#eeeeea] hover:text-ink'
              }`}
            >
              <span
                className={`absolute top-2 bottom-2 left-0 w-[3px] rounded-sm bg-lime transition-transform duration-300 ${
                  isActive ? 'scale-y-100' : 'scale-y-0'
                }`}
              />
              <Icon size={16} strokeWidth={1.8} className={isActive ? 'text-ink' : 'text-[#8b8b84]'} />
              <span className="flex-1 whitespace-nowrap">{label}</span>
              {isActive && <b className="text-sm font-extrabold">→</b>}
              {tag && (
                <span className={`font-mono text-[8px] font-black tracking-[0.12em] ${isActive ? 'text-ink' : 'text-violet'}`}>
                  {tag}
                </span>
              )}
            </button>
          )
        })}
      </nav>

      <div className="mt-auto border-t border-line pt-6">
        <SectionLabel>ACCOUNT</SectionLabel>
        <div className="flex items-center gap-2.5">
          <div className="grid h-[31px] w-[31px] place-items-center rounded-full border border-[#d8d8d1] bg-white text-[11px] font-black">
            {user.initials}
          </div>
          <div>
            <strong className="block text-[13px]">{user.name}</strong>
            <small className="mt-0.5 block text-[11px] text-[#888]">{user.role}</small>
          </div>
        </div>
        <button onClick={onLogout} className="mt-3.5 w-full cursor-pointer rounded-lg border border-[#d8d8d1] p-2.5 text-xs font-black text-[#666] transition-colors hover:border-[#999] hover:text-ink">
          ↪ LOG OUT
        </button>
      </div>
    </aside>
  )
}
