import { useNavigate } from 'react-router-dom'

const hackathons = [
  { track: 'ARTIFICIAL INTELLIGENCE', title: 'AI INNOVATION', text: 'Build intelligent solutions for problems that matter.', status: 'LIVE' },
  { track: 'WEB DEVELOPMENT', title: 'FUTURE WEB', text: 'Design and ship the next generation of digital experiences.', status: 'OPEN' },
  { track: 'SMART TECHNOLOGY', title: 'CAMPUS TECH', text: 'Create technology that makes student life better.', status: 'UPCOMING' },
]

export default function Arena() {
  const navigate = useNavigate()

  return (
    <section id="hackathons" className="border-b border-line bg-paper px-[7vw] py-[110px]">
      <div className="mb-[55px] flex items-end justify-between">
        <div className="flex items-center gap-5">
          <span className="font-mono text-[10px] text-violet">04</span>
          <h2 className="text-[27px] leading-[33px] font-bold tracking-[-1px]">ENTER THE ARENA</h2>
        </div>
        <button onClick={() => navigate('/login')} className="cursor-pointer font-mono text-[9px] text-[#666] transition-colors hover:text-ink">
          VIEW ALL ↗
        </button>
      </div>

      <div className="grid gap-[11px] border-t border-line">
        {hackathons.map((item, i) => (
          <article
            key={item.title}
            className="group grid min-h-[150px] grid-cols-[80px_1.5fr_1.3fr_120px_30px] items-center gap-5 border-b border-line transition-all duration-300 hover:bg-white/65 hover:pl-[15px]"
          >
            <div className="font-mono text-[10px] text-[#999]">0{i + 1}</div>
            <div>
              <small className="font-mono text-[8px] text-[#888]">{item.track}</small>
              <h3 className="mt-2.5 text-[29px] leading-[35px] font-bold tracking-[-1px]">{item.title}</h3>
            </div>
            <p className="text-xs leading-[1.6] text-[#777]">{item.text}</p>
            <div className="flex items-center gap-[7px] font-mono text-[8px] text-[#777]">
              <i className={`h-1.5 w-1.5 rounded-full ${item.status === 'LIVE' ? 'bg-[#82b91a] shadow-[0_0_9px_#82b91a66]' : 'bg-[#aaa]'}`} />
              {item.status}
            </div>
            <span className="text-[#888] transition-all group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-violet">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}
