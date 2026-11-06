import { useEffect, useState } from 'react'

const code = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a']

export default function Konami() {
  const [found, setFound] = useState(false)

  useEffect(() => {
    let position = 0
    let timer

    function onKey(e) {
      const key = e.key.toLowerCase()
      if (key === code[position]) position += 1
      else position = key === code[0] ? 1 : 0

      if (position === code.length) {
        position = 0
        setFound(true)
        clearTimeout(timer)
        timer = setTimeout(() => setFound(false), 3000)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      clearTimeout(timer)
    }
  }, [])

  if (!found) return null

  return (
    <div role="status" className="pointer-events-none fixed inset-0 z-[200] grid place-items-center">
      <span className="rotate-6 animate-stamp rounded-full bg-ink px-8 py-4 text-3xl font-black tracking-[0.08em] text-[#a8e62e] shadow-[0_8px_24px_#00000040]">
        YOU FOUND IT.
      </span>
    </div>
  )
}
