export function LogoMark({ small = false }) {
  const bar = small ? 'w-[5px] h-[21px]' : 'w-[7px] h-[29px]'
  return (
    <span className={`inline-flex items-center -skew-x-[17deg] ${small ? 'gap-[3px]' : 'gap-1'}`}>
      <span className={`${bar} bg-ink`} />
      <span className={`${bar} bg-violet`} />
      <span className={`${bar} bg-[#8bcf19]`} />
    </span>
  )
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
