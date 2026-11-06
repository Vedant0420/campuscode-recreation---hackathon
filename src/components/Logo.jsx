export function LogoMark({ small = false }) {
  return <img src="/campuscode-logo.png" alt="" className={small ? 'h-[22px] w-auto' : 'h-[31px] w-auto'} />
}

export default function Logo() {
  return (
    <div className="flex items-center gap-[11px]">
      <LogoMark />
      <div>
        <strong className="block text-sm tracking-[0.16em]">CAMPUSCODE</strong>
        <span className="mt-[3px] block text-[9px] font-extrabold tracking-[0.18em] text-[#888]">
          HACKATHON ARENA
        </span>
      </div>
    </div>
  )
}
