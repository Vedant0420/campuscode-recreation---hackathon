import { LogoMark } from './Logo'

export default function EmptyState({ title, text }) {
  return (
    <div className="flex min-h-[190px] flex-col items-center justify-center gap-[9px] border border-dashed border-line bg-[#fafaf7] p-[30px] text-center">
      <span className="mb-1 opacity-70">
        <LogoMark />
      </span>
      <strong className="text-[11px] tracking-[0.08em] text-[#777]">{title}</strong>
      <span className="max-w-[430px] text-[11px] leading-relaxed text-[#777]">{text}</span>
    </div>
  )
}
