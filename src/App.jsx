import { useState } from 'react'
import Sidebar from './components/Sidebar'

const user = { name: 'Vedant Khedkar', initials: 'VK', role: 'STUDENT' }

export default function App() {
  const [active, setActive] = useState('Overview')

  return (
    <div className="flex min-h-screen">
      <Sidebar active={active} onSelect={setActive} user={user} />

      <main className="flex-1 px-10 py-14">
        <span className="font-mono text-xs tracking-[0.2em] text-lime-deep">
          STUDENT WORKSPACE / LIVE
        </span>
        <h1 className="mt-2 text-6xl font-black tracking-tighter">
          WELCOME BACK, <span className="text-violet">{user.name.split(' ')[0].toUpperCase()}</span>.
        </h1>
      </main>
    </div>
  )
}
