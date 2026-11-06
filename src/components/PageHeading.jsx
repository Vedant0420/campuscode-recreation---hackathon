export default function PageHeading({ eyebrow, title, text, count }) {
  return (
    <div className="mb-[34px] flex animate-rise items-end justify-between gap-[25px]">
      <div>
        <span className="font-mono text-[11px] tracking-[0.18em] text-lime-deep">{eyebrow}</span>
        <h1 className="mt-[9px] mb-3 text-[clamp(34px,5vw,68px)] leading-[0.92] font-black tracking-[-0.065em]">
          {title}
        </h1>
        {text && <p className="max-w-[650px] text-sm leading-[1.75] text-[#6f6f69]">{text}</p>}
      </div>

      {count !== undefined && (
        <div className="shrink-0 text-right">
          <strong className="block text-5xl leading-none font-black tracking-[-0.06em]">
            {String(count).padStart(2, '0')}
          </strong>
          <span className="mt-3 block font-mono text-[10px] tracking-[0.15em] text-[#777]">LIVE DATA</span>
        </div>
      )}
    </div>
  )
}
