import { useState } from 'react'

const sleepy = ['Zzz', 'Zzz?', '...!']

export default function RideStage({ driving }) {
  const [clicks, setClicks] = useState(0)
  const [joyride, setJoyride] = useState(false)
  const moving = driving || joyride

  // click the sleeping bus 3 times and it goes for a drive
  function poke() {
    if (moving) return
    if (clicks < 2) return setClicks(clicks + 1)
    setJoyride(true)
    setTimeout(() => {
      setJoyride(false)
      setClicks(0)
    }, 2200)
  }

  return (
    <div aria-hidden="true" className="relative mt-3 mb-1 h-16 overflow-hidden rounded-xl border border-dashed border-[#ddd] bg-[linear-gradient(90deg,#f7f7f4,#fff)]">
      {!moving && <span className="absolute top-2 left-[92px] text-xs tracking-[0.1em] text-[#888]">{sleepy[clicks]}</span>}
      {joyride && <span className="absolute top-2 left-1/2 -translate-x-1/2 animate-stamp text-[11px] font-black tracking-[0.1em] text-violet">BEEP BEEP!</span>}

      <span onClick={poke} className={`absolute bottom-3 left-3 w-[74px] cursor-pointer ${moving ? 'animate-ride' : ''}`}>
        <span className="flex gap-[3px] rounded-lg bg-ink px-2.5 py-2">
          <i className="h-4 w-3.5 -skew-x-[18deg] rounded-sm bg-white" />
          <i className="h-4 w-3.5 -skew-x-[18deg] rounded-sm bg-[#7665ff]" />
          <i className="h-4 w-3.5 -skew-x-[18deg] rounded-sm bg-[#8bcf19]" />
        </span>
        <span className={`absolute -bottom-1.5 left-2.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-ink ${moving ? 'animate-spin' : ''}`} />
        <span className={`absolute right-2.5 -bottom-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-ink ${moving ? 'animate-spin' : ''}`} />
      </span>

      <span className="absolute top-2.5 right-[22px] text-[11px] font-bold tracking-[0.08em] text-[#555]">{moving ? 'GO' : 'READY'}</span>
      <span className="absolute right-2.5 bottom-3 h-[34px] w-1 rounded-sm bg-[#82b91a]" />
    </div>
  )
}
