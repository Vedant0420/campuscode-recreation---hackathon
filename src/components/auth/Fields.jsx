import { useMemo, useState } from 'react'

const wrap =
  'relative flex items-center border border-[#d8d8d2] bg-[#fafaf8] transition-all hover:border-[#bdbdb6] focus-within:border-violet focus-within:bg-white focus-within:shadow-[0_0_0_3px_#7665ff14]'
const toggle =
  'inline-flex cursor-pointer items-center gap-[5px] px-2 py-[7px] font-mono text-[7px] tracking-[0.5px] text-[#888] transition-all hover:-translate-y-px hover:text-violet'

export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="mb-[9px] block font-mono text-[8px] tracking-[1px] text-[#777]">
      {children}
    </label>
  )
}

export function Field({ id, label, icon, type = 'text', height = 54, ...inputProps }) {
  const [show, setShow] = useState(false)
  const isPassword = type === 'password'

  return (
    <div className="mb-[22px]">
      <Label htmlFor={id}>{label}</Label>
      <div className={wrap} style={{ height }}>
        <span className="grid w-[50px] place-items-center font-mono text-[13px] text-[#aaa]">{icon}</span>
        <input
          id={id}
          type={isPassword && show ? 'text' : type}
          className="h-full min-w-0 flex-1 bg-transparent pr-3 text-[13px] text-ink outline-none placeholder:text-[#aaa] read-only:text-[#666]"
          {...inputProps}
        />
        {isPassword && (
          <button type="button" onClick={() => setShow((s) => !s)} className={`${toggle} mr-2.5`}>
            <span className="text-[9px]">{show ? '●' : '○'}</span>
            {show ? 'HIDE' : 'SHOW'}
          </button>
        )}
      </div>
    </div>
  )
}

export function newCaptcha() {
  return String(Math.floor(10000 + Math.random() * 90000))
}

const inkColors = ['#7566ff', '#e0359a', '#22b8cf', '#8bcf19', '#e07b39']

export function Captcha({ id, code, value, onChange, onRefresh, height = 54 }) {
  // keep the same squiggle until the code changes
  const glyphs = useMemo(
    () =>
      code.split('').map((digit, i) => ({
        digit,
        x: 18 + i * 25,
        y: 34 + Math.random() * 6,
        rotate: -14 + Math.random() * 28,
        color: inkColors[Math.floor(Math.random() * inkColors.length)],
      })),
    [code]
  )

  return (
    <div className="mb-[22px]">
      <Label htmlFor={id}>CAPTCHA</Label>
      <div className="flex items-center gap-3">
        <span className="inline-flex min-h-[50px] min-w-[150px] select-none overflow-hidden rounded-lg border border-[#2a2f45] bg-[#f4f4f0]">
          <svg width="150" height="50" viewBox="0 0 150 50" role="img" aria-label="Captcha code">
            <path d="M4 12 C40 2 90 8 146 30" stroke="#e0359a" fill="none" />
            <path d="M6 40 C50 48 100 26 144 42" stroke="#22b8cf" fill="none" />
            {glyphs.map((g, i) => (
              <text
                key={i}
                x={g.x}
                y={g.y}
                fill={g.color}
                fontSize="27"
                fontFamily="Space Grotesk, sans-serif"
                fontWeight="600"
                transform={`rotate(${g.rotate} ${g.x} ${g.y})`}
              >
                {g.digit}
              </text>
            ))}
          </svg>
        </span>
        <button type="button" aria-label="New captcha" onClick={onRefresh} className={toggle}>
          ↻ NEW
        </button>
      </div>
      <div className={`${wrap} mt-2`} style={{ height }}>
        <input
          id={id}
          value={value}
          onChange={onChange}
          placeholder="Enter the code above"
          autoComplete="off"
          maxLength={5}
          className="h-full min-w-0 flex-1 bg-transparent px-3 text-[13px] text-ink outline-none placeholder:text-[#aaa]"
        />
      </div>
    </div>
  )
}

export function FormError({ children }) {
  if (!children) return null
  return (
    <div role="alert" className="mt-[5px] mb-5 flex items-start gap-2.5 border border-[#be3c3c40] bg-[#be3c3c0a] p-3 font-mono text-[9px] leading-[1.6] text-[#a43d3d]">
      <span className="grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full border border-[#a43d3d]">!</span>
      <p>{children}</p>
    </div>
  )
}
