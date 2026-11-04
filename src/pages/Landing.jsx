import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Landing() {
  return (
    <div className="flex min-h-screen items-center justify-between px-[5vw]">
      <Logo />
      <Link to="/login" className="font-mono text-xs tracking-[0.1em]">
        LOGIN ↗
      </Link>
    </div>
  )
}
