import PageHeading from '../PageHeading'
import EmptyState from '../EmptyState'

const sections = {
  'HackMate AI': {
    eyebrow: 'INTELLIGENCE / HACKMATE',
    title: 'FIND YOUR TEAM.',
    text: "Find registered students from the same hackathon using HackMate match scores. Search by name or CampusCode ID, or scan a teammate's QR on mobile.",
  },
  'IdeaCheck AI': {
    eyebrow: 'CAMPUSCODE INTELLIGENCE / IDEACHECK',
    title: 'IDEACHECK AI.',
    text: 'Check your idea against the CampusCode reference dataset, then get a Gemini-powered explanation and improvement plan.',
  },
  Certificates: {
    eyebrow: 'REWARDS / CERTIFICATES',
    title: 'CERTIFICATES.',
    text: 'Every certificate carries a unique code anyone can verify — share the verify link with recruiters.',
  },
  'Digital Card': {
    eyebrow: 'IDENTITY / VERIFIED ACCOUNT',
    title: 'DIGITAL ID.',
    text: 'Your identity card uses the real CampusCode profile and CampusCode ID returned by the backend.',
  },
  'RuleBot AI': {
    eyebrow: 'CAMPUSCODE INTELLIGENCE / RULEBOT',
    title: 'RULEBOT AI.',
    text: "Ask questions against the selected hackathon's organizer-uploaded rulebook.",
  },
  'Student Guide': {
    eyebrow: 'HELP / CAMPUSCODE GUIDE',
    title: 'STUDENT GUIDE.',
    text: 'Everything you need to navigate CampusCode, from joining a hackathon to completing your final round.',
  },
  'Official Communication': {
    eyebrow: 'COMMUNICATION / OFFICIAL',
    title: 'OFFICIAL COMMUNICATION.',
    text: 'Use the official CampusCode channel for important announcements and communication.',
  },
  Notifications: {
    eyebrow: 'ALERTS / BACKEND DATA',
    title: 'NOTIFICATIONS.',
    text: 'Only unread notifications are shown by default. Mark them read as you go.',
  },
  'Help & Support': {
    eyebrow: 'HELP / SUPPORT',
    title: 'HELP & SUPPORT.',
    text: 'Start with the guide and FAQs. If you still need help, use the official communication channel or contact your organizer.',
  },
  Profile: {
    eyebrow: 'ACCOUNT / BACKEND PROFILE',
    title: 'YOUR PROFILE.',
    text: 'Edit your student profile and save the changes directly to the CampusCode backend.',
  },
}

export default function OtherSection({ name }) {
  return (
    <section>
      <PageHeading {...sections[name]} />
      <EmptyState title="NOT PART OF THIS DEMO" text="This recreation covers the Overview, Events and My Events sections." />
    </section>
  )
}
