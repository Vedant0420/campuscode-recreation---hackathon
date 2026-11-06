import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Overview from '../components/student/Overview'
import Events from '../components/student/Events'
import MyEvents from '../components/student/MyEvents'
import OtherSection from '../components/student/OtherSection'
import { user, events, registrations, notifications as initialNotifications } from '../data/mock'

export default function Student() {
  const navigate = useNavigate()
  const [active, setActive] = useState('Overview')
  const [notifications, setNotifications] = useState(initialNotifications)
  const scroller = useRef(null)
  const unread = notifications.filter((n) => !n.read).length

  // new section starts from the top
  useEffect(() => {
    scroller.current.scrollTop = 0
  }, [active])

  function markRead(id) {
    setNotifications((list) => list.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active={active} onSelect={setActive} user={user} onLogout={() => navigate('/login')} />

      <div ref={scroller} className="flex-1 overflow-y-auto">
        <Topbar page={active} user={user} unread={unread} onOpenNotifications={() => setActive('Notifications')} />

        <main className="mx-auto max-w-[1280px] px-12 pt-[54px] pb-[90px]">
          {active === 'Overview' && <Overview notifications={notifications} onRead={markRead} onNavigate={setActive} />}
          {active === 'Events' && <Events events={events} />}
          {active === 'My Events' && <MyEvents registrations={registrations} />}
          {!['Overview', 'Events', 'My Events'].includes(active) && <OtherSection name={active} />}
        </main>
      </div>
    </div>
  )
}
