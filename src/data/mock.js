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

const quizDescription =
  'The quiz features 50 questions across technology, AI, and engineering — 42 multiple-choice questions and 8 true/false questions — to be completed in 30 minutes on Sunday, 1 November 2026. It is conducted online on the CampusCode platform, and every participant gets a single attempt.'

export const events = [
  {
    id: 'e2798ce3-a1b5-4806-9147-4d9f10c52ef1',
    title: "ReBuild '26",
    kind: 'hackathon',
    status: 'OPEN',
    banner: '/banners/rebuild26-banner-web.png',
    description: currentEvent.description,
    sizeLabel: 'TEAM SIZE',
    size: 'Individual',
    startDate: '2026-11-06',
    joined: true,
  },
  {
    id: '20864c76-4792-4b09-a2e9-ff6764bf20d6',
    title: "FirstCommit '26 Quiz Competition 2.0",
    kind: 'quiz',
    status: 'COMPLETED',
    banner: '/banners/quiz-banner-web-white.png',
    tagline: 'QUIZ · SOLO · TIMED',
    description: 'This is the reattempt quiz those who missed',
    sizeLabel: 'FORMAT',
    size: 'Solo',
  },
  {
    id: '80299fc1-3e30-466f-a146-fd45c77c84be',
    title: "FirstCommit '26 Quiz Competition",
    kind: 'quiz',
    status: 'COMPLETED',
    banner: '/banners/quiz-banner-web-white.png',
    tagline: 'QUIZ · SOLO · TIMED',
    description: quizDescription,
    sizeLabel: 'FORMAT',
    size: 'Solo',
  },
]

export const registrations = [
  {
    id: 'd8d7ac7b-1c73-4e19-a070-ea76973f661d',
    title: "ReBuild '26",
    banner: '/banners/rebuild26-banner-web.png',
    status: 'REGISTERED',
    team: 'Aura farmer',
  },
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
