import PageHeading from '../PageHeading'
import HeroCard from '../overview/HeroCard'
import StatCards from '../overview/StatCards'
import DiscoverEvents from '../overview/DiscoverEvents'
import Deadlines from '../overview/Deadlines'
import AiSpotlight from '../overview/AiSpotlight'
import Journey from '../overview/Journey'
import CurrentActivity from '../overview/CurrentActivity'
import NotificationsPanel from '../overview/NotificationsPanel'
import { user, currentEvent, stats, discoverEvents, deadlines } from '../../data/mock'

export default function Overview({ notifications, onRead, onNavigate }) {
  const firstName = user.name.split(' ')[0].toUpperCase()

  return (
    <section>
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
        text="Your CampusCode activity is loaded directly from the backend."
      />
      <HeroCard event={currentEvent} user={user} onOpen={() => onNavigate('Events')} />
      <StatCards stats={stats} />
      <DiscoverEvents events={discoverEvents} onViewAll={() => onNavigate('Events')} />

      <div className="my-[22px] grid grid-cols-3 gap-[18px]">
        <Deadlines items={deadlines} onBrowse={() => onNavigate('My Events')} />
        <AiSpotlight onOpen={onNavigate} />
        <Journey stats={stats} onCertificates={() => onNavigate('Certificates')} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <CurrentActivity event={currentEvent} onViewEvents={() => onNavigate('Events')} />
        <NotificationsPanel items={notifications} onRead={onRead} onOpenAll={() => onNavigate('Notifications')} />
      </div>
    </section>
  )
}
