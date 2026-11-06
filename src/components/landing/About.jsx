const words = ['IDEAS', 'PEOPLE', 'PRODUCTS', 'INNOVATION', 'COMMUNITY']

export function Marquee() {
  // repeated so the -50% loop has no visible jump
  return (
    <section className="overflow-hidden border-y border-line bg-[#f4f4f0] py-[17px] whitespace-nowrap">
      <div className="flex w-max animate-marquee items-center gap-[30px] font-mono text-[10px] leading-5 text-[#777]">
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span key={i} className="flex items-center gap-[30px]">
            {word}
            <b className="text-violet">✦</b>
          </span>
        ))}
      </div>
    </section>
  )
}

export default function About() {
  return (
    <section id="about" className="grid min-h-[720px] grid-cols-[70px_1.2fr_1fr] items-center gap-[45px] border-b border-line bg-[#fafaf7] px-[8vw] py-[120px]">
      <div className="self-start font-mono text-[10px] text-violet">01</div>

      <div>
        <div className="flex items-center gap-2 font-mono text-[9px] tracking-[1px] text-[#777]">
          <i className="h-1.5 w-1.5 rounded-full bg-[#82b91a]" />
          WHAT IS CAMPUSCODE?
        </div>
        <h2 className="mt-[55px] mb-10 text-[clamp(70px,9vw,140px)] leading-[0.82] font-bold tracking-[-8px]">
          WHERE
          <br />
          STUDENTS
          <br />
          <em className="text-outline not-italic">BUILD.</em>
        </h2>
        <p className="max-w-[470px] text-sm leading-[1.8] text-[#666]">
          CampusCode brings students, teams, organizers and hackathons into one connected ecosystem.
        </p>
      </div>

      <div className="relative grid min-h-[450px] place-items-center">
        <div className="absolute h-40 w-40 rounded-full border border-[#7665ff40] [animation:orbit_9s_linear_infinite]" />
        <div className="absolute h-[290px] w-[290px] rounded-full border border-[#7665ff40] [animation:orbit_14s_linear_infinite_reverse]" />
        <div className="absolute h-[430px] w-[430px] animate-orbit rounded-full border border-[#a8e62e2e]" />
        <div className="relative z-[3] grid h-[100px] w-[100px] place-items-center border border-violet bg-white/65 text-[25px] font-black text-violet shadow-[0_20px_60px_#7665ff1a]">
          CC
        </div>
        <span className="absolute top-[10%] left-[20%] font-mono text-[8px] text-[#999]">01</span>
        <span className="absolute top-[45%] right-[8%] font-mono text-[8px] text-[#999]">02</span>
        <span className="absolute bottom-[10%] left-[30%] font-mono text-[8px] text-[#999]">03</span>
      </div>
    </section>
  )
}
