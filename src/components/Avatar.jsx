const backgrounds = ['#1c1c1c', '#e3e0ff', '#e8f5d6', '#ffe8d6', '#d6f0ff']
const skins = ['#ffd9b3', '#f1c27d', '#e0ac69', '#c68642']
const shirts = ['#7566ff', '#8bcf19', '#111111', '#e07b39']

// simple hash so the same name always gets the same colours
function hash(str) {
  let h = 0
  for (const ch of str) h = (h * 31 + ch.charCodeAt(0)) >>> 0
  return h
}

export default function Avatar({ name = '', size = 40, className = '' }) {
  const h = hash(name)
  const bg = backgrounds[h % backgrounds.length]
  const skin = skins[(h >> 2) % skins.length]
  const shirt = shirts[(h >> 4) % shirts.length]

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={`shrink-0 rounded-full ${className}`}>
      <clipPath id={`clip-${h}`}>
        <circle cx="50" cy="50" r="50" />
      </clipPath>
      <g clipPath={`url(#clip-${h})`}>
        <rect width="100" height="100" fill={bg} />
        <path d="M24 100 Q24 74 50 74 Q76 74 76 100Z" fill={shirt} />
        <circle cx="50" cy="46" r="24" fill={skin} />
        <path d="M26 42 Q26 18 50 18 Q74 18 74 42 Q66 30 54 32 Q46 24 36 32 Q30 32 26 42Z" fill="#2b1d14" />
        <circle cx="41" cy="48" r="3" fill="#1a1a1a" />
        <circle cx="59" cy="48" r="3" fill="#1a1a1a" />
        <path d="M43 57 Q50 63 57 57" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  )
}
