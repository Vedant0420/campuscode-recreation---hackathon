export default function PageHeading({ eyebrow, title, text }) {
  return (
    <div className="mb-[34px] animate-rise">
      <span className="font-mono text-[11px] tracking-[0.18em] text-lime-deep">{eyebrow}</span>
      <h1 className="mt-[9px] mb-3 text-[clamp(34px,5vw,68px)] leading-[0.92] font-black tracking-[-0.065em]">
        {title}
      </h1>
      {text && <p className="max-w-[650px] text-sm leading-[1.75] text-[#6f6f69]">{text}</p>}
    </div>
  )
}
