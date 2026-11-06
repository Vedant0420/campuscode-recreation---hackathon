const steps = [
  { title: 'DISCOVER', text: 'Find a challenge that makes you want to build.' },
  { title: 'TEAM UP', text: 'Find people who share your ambition.' },
  { title: 'BUILD', text: 'Turn your idea into something people can use.' },
  { title: 'SHIP', text: 'Submit your work and take it to the arena.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="border-b border-line bg-paper px-[7vw] py-[110px]">
      <div className="mb-[55px] flex items-end justify-between">
        <div className="flex items-center gap-5">
          <span className="font-mono text-[10px] text-violet">03</span>
          <h2 className="text-[27px] leading-[33px] font-bold tracking-[-1px]">HOW IT WORKS</h2>
        </div>
        <p className="text-right font-mono text-[8px] leading-[1.6] text-[#888]">
          FROM IDEA
          <br />
          TO IMPACT.
        </p>
      </div>

      <div className="grid grid-cols-4 border-t border-l border-line">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="relative min-h-[350px] border-r border-b border-line bg-[#fafaf8] p-7 transition-all duration-300 hover:-translate-y-[7px] hover:bg-white hover:shadow-[0_20px_50px_#0000000f]"
          >
            <div className="font-mono text-[10px] text-[#999]">0{i + 1}</div>
            <div className="my-[30px] h-px w-full bg-line" />
            <h3 className="mb-[18px] text-[35px] leading-[42px] font-bold tracking-[-2px]">{step.title}</h3>
            <p className="max-w-[220px] text-xs leading-[1.7] text-[#777]">{step.text}</p>
            <span className="absolute right-[25px] bottom-[25px] text-lg text-violet">↗</span>
          </div>
        ))}
      </div>
    </section>
  )
}
