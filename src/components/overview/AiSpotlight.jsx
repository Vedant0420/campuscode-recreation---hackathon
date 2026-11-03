import { Bot, Sparkles, Users } from 'lucide-react'
import Panel from '../Panel'

const tools = [
  { label: 'IDEACHECK', page: 'IdeaCheck AI', icon: Sparkles },
  { label: 'HACKMATE', page: 'HackMate AI', icon: Users },
  { label: 'RULEBOT', page: 'RuleBot AI', icon: Bot },
]

export default function AiSpotlight({ onOpen }) {
  return (
    <Panel title="AI SPOTLIGHT" className="!border-[#d3e2a0] bg-[linear-gradient(145deg,#f4f9e2,#fbfdf4_60%,#fff)]">
      <h3 className="mt-3.5 mb-2 text-xl font-bold tracking-[-0.02em] text-[#141414]">Your AI teammates are ready.</h3>
      <p className="text-[13px] leading-[1.7] text-[#70706a]">
        Check your idea, find teammates, or ask the rules — right from here.
      </p>

      <div className="mt-[18px] flex flex-wrap gap-2">
        {tools.map(({ label, page, icon: Icon }) => (
          <button
            key={label}
            onClick={() => onOpen(page)}
            className="inline-flex cursor-pointer items-center gap-[7px] rounded-[10px] border border-[#d3e2a0] bg-[#eef4d8] px-3.5 py-2.5 text-[10.5px] font-extrabold tracking-[0.1em] text-[#5e731d] transition-all hover:-translate-y-0.5 hover:border-lime hover:bg-lime hover:text-ink"
          >
            <Icon size={14} strokeWidth={1.8} />
            {label}
          </button>
        ))}
      </div>
    </Panel>
  )
}
