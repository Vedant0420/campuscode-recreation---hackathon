import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import PageHeading from './components/PageHeading'

const user = { name: 'Vedant Khedkar', initials: 'VK', role: 'STUDENT' }

export default function App() {
  const [active, setActive] = useState('Overview')
  const firstName = user.name.split(' ')[0].toUpperCase()

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active={active} onSelect={setActive} user={user} />

      <div className="flex-1 overflow-y-auto">
        <Topbar page={active} user={user} unread={0} />

        <main className="mx-auto max-w-[1280px] px-12 pt-[54px] pb-[90px]">
          <PageHeading
            eyebrow="STUDENT WORKSPACE / LIVE"
            title={
              <>
                WELCOME BACK,{' '}
                <span className="relative inline-block text-violet">
                  {firstName}
                  <span className="absolute right-0 -bottom-[5px] left-0 h-[5px] origin-left animate-underline bg-[#a7d94b]" />
                </span>
                .
              </>
            }
            text="Your CampusCode activity, all in one place."
          />
        </main>
      </div>
    </div>
  )
}
