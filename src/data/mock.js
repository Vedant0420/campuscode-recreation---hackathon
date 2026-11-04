export const user = {
  name: 'Vedant Khedkar',
  initials: 'VK',
  role: 'STUDENT',
}

export const currentEvent = {
  code: 'e2798ce3-a1b5-4806-9147-4d9f10c52ef1',
  title: "ReBuild '26",
  description:
    "ReBuild '26 is an individual dashboard-recreation hackathon by CampusCode. You participate alone, but you must create a team name for tracking and use it on your Unstop registration, the CampusCode portal, and every submission. Round 1 (Friday, 6 Nov, morning to 10 PM): Recreate the CampusCode user flow faithfully — Dashboard, Login, Register, and Student dashboard — and submit your demo any time till 10 PM. Round 2 (Saturday, 7 Nov, top performers from Round 1 only): Build a complete new UI in CampusCode's vibe. Frontend only, mock data is fine. No presentation round. Prizes: Winner certificate + CampusCode internship with ₹15,000 stipend, runner-up certificate, and participation certificates for all. Sunday, 8 Nov (Diwali) is free. This is a paid event (₹50 on Unstop). Paid students receive an invite code — enter it when you join this event on the portal.",
  status: 'OPEN',
  mode: 'ONLINE',
  startDate: '2026-11-06',
}

export const discoverEvents = [
  { id: 'rebuild-26', title: "ReBuild '26", track: 'Web Development', startDate: '2026-11-06', note: 'Individual participation', joined: true },
  { id: 'firstcommit-2', title: "FirstCommit '26 Quiz Competition 2.0", track: 'Open Innovation' },
  { id: 'firstcommit', title: "FirstCommit '26 Quiz Competition", track: 'Open Innovation' },
]

export const deadlines = [
  { title: "ReBuild '26 · Round 1", date: '2026-11-06', label: 'RECREATE' },
  { title: "ReBuild '26 · Round 2", date: '2026-11-07', label: 'NEW UI' },
]

export const notifications = [
  {
    id: 1,
    title: 'Round 1 opens on 6 Nov',
    body: 'Submit your live link and screenshots any time till 10 PM.',
    time: '2026-11-04',
  },
  {
    id: 2,
    title: 'Team created',
    body: "Aura farmer is your team for ReBuild '26. Use this name on every submission.",
    time: '2026-11-04',
  },
  {
    id: 3,
    title: "New event: FirstCommit '26 Quiz Competition 2.0",
    body: 'Registrations are open. Join it from the events page.',
    time: '2026-11-03',
  },
]

export const stats = {
  registered: 1,
  ongoing: 1,
  completed: 0,
  certificates: 0,
}
