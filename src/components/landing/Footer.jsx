import { LogoMark } from '../Logo'

const columns = [
  { title: 'PRODUCT', links: [['About', '#about'], ['Hackathons', '#hackathons'], ['How it works', '#how'], ['Community', '#community']] },
  { title: 'BUILDERS', links: [['Students', '#student'], ['Teams', '#teams'], ['Organizers', '#organizers'], ['Developers', '#developers']] },
  { title: 'GUIDES', links: [['Hackathon Rules', '#rules'], ['FAQ', '#faq'], ['Support', '#support'], ['Contact', '#contact']] },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f7f7f5] px-[7vw] pt-20 pb-[25px] text-[#161616]">
      <div className="relative z-[4] mx-auto grid max-w-[1200px] grid-cols-[2.2fr_1fr_1fr_1fr] gap-[70px]">
        <div>
          <div className="flex items-center gap-[13px]">
            <LogoMark />
            <span>
              <strong className="block text-[15px] font-extrabold tracking-[1px]">CAMPUSCODE</strong>
              <small className="mt-[3px] block font-mono text-[6px] font-extrabold tracking-[0.18em] text-[#888]">HACKATHON ARENA</small>
            </span>
          </div>
          <p className="mt-[25px] text-sm leading-[1.7] text-[#666]">
            The student hackathon arena.
            <br />
            You build the idea,
            <br />
            we run the competition.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-3.5">
            <h4 className="mb-3 font-mono text-[10px] font-medium tracking-[1px] text-[#3e37d9]">{column.title}</h4>
            {column.links.map(([label, href]) => (
              <a key={label} href={href} className="w-fit text-sm leading-[17px] text-[#666] transition-all hover:translate-x-1 hover:text-ink">
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-[4] mx-auto mt-[50px] flex max-w-[1200px] items-center gap-[30px] pb-[55px] font-mono text-[9px] tracking-[0.5px] text-[#777]">
        <div className="flex items-center gap-2">
          <i className="h-2 w-2 rounded-full bg-[#18b777] shadow-[0_0_0_4px_#18b77714]" />
          ALL SYSTEMS OPERATIONAL
        </div>
        <a href="#terms" className="transition-colors hover:text-ink">TERMS</a>
        <a href="#privacy" className="transition-colors hover:text-ink">PRIVACY</a>
        <a href="#contact" className="transition-colors hover:text-ink">CONTACT</a>
      </div>

      <div className="pointer-events-none relative z-[1] -mt-2.5 w-full text-center text-[clamp(120px,18vw,290px)] leading-[0.72] font-black tracking-[-14px] whitespace-nowrap text-[#e9e9ed] select-none">
        CampusCode
      </div>

      <div className="relative z-[5] mx-auto mt-[45px] flex max-w-[1200px] justify-between border-t border-[#deded9] pt-5 font-mono text-[8px] tracking-[0.5px] text-[#999]">
        <span>© 2026 CAMPUSCODE</span>
        <span>LEARN · BUILD · COMPETE · SHIP</span>
        <span>CHENNAI · INDIA</span>
      </div>
    </footer>
  )
}
