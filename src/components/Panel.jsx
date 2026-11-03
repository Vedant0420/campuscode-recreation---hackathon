export function PanelTitle({ title, action, onAction }) {
  return (
    <div className="mb-4 flex items-center justify-between pb-4">
      <span className="font-mono text-[10px] tracking-[0.15em] text-[#555]">{title}</span>
      {action && (
        <button
          onClick={onAction}
          className="cursor-pointer text-[11px] font-bold text-[#687f22] transition-colors hover:text-ink"
        >
          {action} ↗
        </button>
      )}
    </div>
  )
}

export default function Panel({ title, action, onAction, className = '', children }) {
  return (
    <div
      className={`min-w-0 border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_14px_40px_#1414140f] ${className}`}
    >
      <PanelTitle title={title} action={action} onAction={onAction} />
      {children}
    </div>
  )
}
