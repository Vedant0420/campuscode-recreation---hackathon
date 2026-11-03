function StatCard({ label, value, detail, delay }) {
  return (
    <div
      className="min-h-[125px] animate-rise border border-line bg-white p-[22px] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c9c9c1] hover:shadow-[0_16px_35px_#14141412]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="block font-mono text-[11px] tracking-[0.15em] text-[#777]">{label}</span>
      <strong className="mt-3.5 mb-[7px] block text-[38px] leading-none font-bold tracking-[-0.06em]">{value}</strong>
      <small className="block font-mono text-[11px] tracking-[0.15em] text-[#999]">{detail}</small>
    </div>
  )
}

export default function StatCards({ stats }) {
  const cards = [
    { label: 'REGISTERED', value: stats.registered, detail: 'ALL TIME' },
    { label: 'ONGOING', value: stats.ongoing, detail: 'IN PROGRESS' },
    { label: 'COMPLETED', value: stats.completed, detail: 'SUBMITTED' },
    { label: 'CERTIFICATES', value: stats.certificates, detail: 'EARNED' },
  ]

  return (
    <div className="mb-[35px] grid grid-cols-4 gap-2.5">
      {cards.map((card, i) => (
        <StatCard key={card.label} {...card} delay={i * 80} />
      ))}
    </div>
  )
}
