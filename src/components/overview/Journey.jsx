import { useEffect, useState } from 'react'
import { Award, CircleCheck, Trophy, Zap } from 'lucide-react'
import Panel from '../Panel'

export default function Journey({ stats, onCertificates }) {
  // start bars at 0 so they animate in on first render
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 150)
    return () => clearTimeout(t)
  }, [])

  const rows = [
    { label: 'HACKATHONS', value: stats.registered, icon: Trophy },
    { label: 'ONGOING', value: stats.ongoing, icon: Zap },
    { label: 'COMPLETED', value: stats.completed, icon: CircleCheck },
    { label: 'CERTIFICATES', value: stats.certificates, icon: Award },
  ]
  const max = Math.max(1, ...rows.map((r) => r.value))

  return (
    <Panel title="YOUR JOURNEY" action="CERTIFICATES" onAction={onCertificates}>
      <div className="grid gap-3.5 pt-1.5">
        {rows.map(({ label, value, icon: Icon }) => (
          <div key={label} className="grid grid-cols-[30px_1fr_34px] items-center gap-2.5">
            <span className="grid h-[30px] w-[30px] place-items-center rounded-[9px] border border-[#d3e2a0] bg-[#eef4d8] text-[#5e731d]">
              <Icon size={16} strokeWidth={1.8} />
            </span>
            <div className="h-[7px] overflow-hidden rounded-full bg-[#eceee6]">
              <i
                className="block h-full rounded-full bg-[linear-gradient(90deg,#7c5cff,#9ed41f)] transition-[width] duration-[800ms] ease-[cubic-bezier(.2,.9,.3,1)]"
                style={{ width: ready ? `${Math.max(6, (value / max) * 100)}%` : '0%' }}
              />
            </div>
            <strong className="text-right text-[17px] text-[#141414]">{value}</strong>
            <small className="col-span-3 -mt-1.5 text-[9px] font-extrabold tracking-[0.22em] text-[#999]">{label}</small>
          </div>
        ))}
      </div>
    </Panel>
  )
}
