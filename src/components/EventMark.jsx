const gradients = [
  ['#a7f37a', '#4c7a12'],
  ['#7c5cff', '#2e1a8f'],
  ['#141414', '#4a4a4a'],
  ['#9ed41f', '#1d6f5f'],
  ['#b8e62e', '#7c5cff'],
  ['#ffcf5c', '#e07b39'],
]

// same title always gets the same gradient
function pickGradient(title) {
  let h = 0
  for (const ch of title) h = (h * 31 + ch.charCodeAt(0)) >>> 0
  return gradients[h % gradients.length]
}

function initials(title) {
  const words = title.replace(/[^a-zA-Z ]/g, '').split(' ').filter(Boolean)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

export default function EventMark({ title, size = 54, className = '' }) {
  const [from, to] = pickGradient(title)
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full font-black text-white shadow-[0_10px_24px_#00000024,inset_0_2px_#ffffff59] ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: Math.max(13, Math.round(size * 0.34)),
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      {initials(title)}
    </span>
  )
}
