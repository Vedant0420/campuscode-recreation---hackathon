import { useNavigate } from 'react-router-dom'

export function Mission() {
  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden border-b border-line bg-[#f5f5f1] bg-[radial-gradient(circle_at_75%,#7665ff14,transparent_34%)] px-[10vw] py-[100px]">
      <div className="pointer-events-none absolute top-1/2 -right-[10%] -translate-y-1/2 -rotate-[8deg] text-[20vw] font-black tracking-[-15px] whitespace-nowrap text-[#00000006]">
        CAMPUSCODE
      </div>
      <div className="relative z-[3]">
        <span className="font-mono text-[9px] text-violet">05 — THE MISSION</span>
        <h2 className="my-[50px] text-[clamp(75px,11vw,170px)] leading-[0.82] font-bold tracking-[-9px]">
          GREAT
          <br />
          IDEAS
          <br />
          <em className="text-outline not-italic">NEED BUILDERS.</em>
        </h2>
        <p className="max-w-[450px] text-sm leading-[1.8] text-[#777]">
          Your university is full of people with ideas. CampusCode gives those ideas somewhere to go.
        </p>
      </div>
    </section>
  )
}

const orbitDots = [
  'top-[15%] left-1/2',
  'top-1/2 right-[8%]',
  'bottom-[10%] left-1/2',
  'top-1/2 left-[8%]',
  'top-[30%] right-[20%]',
]

export function Community() {
  return (
    <section id="community" className="grid min-h-[650px] grid-cols-2 border-b border-line bg-[#fafaf7]">
      <div className="border-r border-line px-[8vw] py-[100px]">
        <span className="font-mono text-[9px] text-[#888]">THE NETWORK</span>
        <h2 className="mt-[60px] mb-[0.83em] text-[clamp(70px,9vw,130px)] leading-[0.82] font-bold tracking-[-7px]">
          FIND
          <br />
          YOUR
          <br />
          <em className="text-outline not-italic">PEOPLE.</em>
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-[45px]">
        <div className="relative grid h-[330px] w-[330px] place-items-center rounded-full border border-[#d4d4ce]">
          <div className="absolute inset-[45px] rounded-full border border-line" />
          {orbitDots.map((position) => (
            <span key={position} className={`absolute h-2 w-2 rounded-full bg-violet shadow-[0_0_12px_#7665ff4d] ${position}`} />
          ))}
          <strong className="relative z-[3] grid h-20 w-20 place-items-center border border-violet bg-white text-xl text-violet">CC</strong>
        </div>
        <p className="text-center text-[13px] leading-[1.8] text-[#777]">
          Build with developers.
          <br />
          Think with designers.
          <br />
          Compete with builders.
        </p>
      </div>
    </section>
  )
}

export function Cta() {
  const navigate = useNavigate()

  return (
    <section className="relative flex min-h-[700px] items-center justify-center overflow-hidden border-b border-line bg-[#f0f0ec] bg-[radial-gradient(circle,#7665ff1a,transparent_35%)] text-center">
      <div className="absolute inset-0 bg-[linear-gradient(#0000000a_1px,transparent_1px),linear-gradient(90deg,#0000000a_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute h-[500px] w-[500px] animate-orbit rounded-full border border-[#7665ff2e]" />
      <div className="relative z-[5]">
        <small className="font-mono text-[9px] tracking-[2px] text-violet">READY?</small>
        <h2 className="my-10 text-[clamp(75px,11vw,170px)] leading-[0.8] font-bold tracking-[-9px]">
          YOUR NEXT
          <br />
          <span className="text-outline">PROJECT</span>
          <br />
          STARTS HERE.
        </h2>
        <button
          onClick={() => navigate('/register')}
          className="cursor-pointer bg-ink px-[22px] py-[17px] text-[13px] font-extrabold text-white transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_20px_60px_#00000026]"
        >
          JOIN CAMPUSCODE<span className="ml-[30px] text-[#a8e62e]">↗</span>
        </button>
      </div>
    </section>
  )
}
