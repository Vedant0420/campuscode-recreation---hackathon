import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import PageHeading from './components/PageHeading'
import HeroCard from './components/overview/HeroCard'
import StatCards from './components/overview/StatCards'
import DiscoverEvents from './components/overview/DiscoverEvents'
import Deadlines from './components/overview/Deadlines'
import AiSpotlight from './components/overview/AiSpotlight'
import Journey from './components/overview/Journey'
import CurrentActivity from './components/overview/CurrentActivity'
import NotificationsPanel from './components/overview/NotificationsPanel'
import { user, currentEvent, stats, discoverEvents, deadlines, notifications as initialNotifications } from './data/mock'

export default function App() {
  const [active, setActive] = useState('Overview')
  const [notifications, setNotifications] = useState(initialNotifications)
  const firstName = user.name.split(' ')[0].toUpperCase()
  const unread = notifications.filter((n) => !n.read).length

  function markRead(id) {
    setNotifications((list) => list.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active={active} onSelect={setActive} user={user} />

      <div className="flex-1 overflow-y-auto">
        <Topbar page={active} user={user} unread={unread} />

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
          <HeroCard event={currentEvent} user={user} />
          <StatCards stats={stats} />
          <DiscoverEvents events={discoverEvents} onViewAll={() => setActive('Events')} />

          <div className="my-[22px] grid grid-cols-3 gap-[18px]">
            <Deadlines items={deadlines} onBrowse={() => setActive('My Events')} />
            <AiSpotlight onOpen={setActive} />
            <Journey stats={stats} onCertificates={() => setActive('Certificates')} />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <CurrentActivity event={currentEvent} onViewEvents={() => setActive('Events')} />
            <NotificationsPanel items={notifications} onRead={markRead} onOpenAll={() => setActive('Notifications')} />
          </div>
        </main>
      </div>
    </div>
  )
}
