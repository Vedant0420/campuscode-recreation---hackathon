import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../components/auth/AuthLayout'
import { Captcha, Field, FormError, newCaptcha } from '../components/auth/Fields'

const features = ['BUILD', 'COMPETE', 'SHIP']

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [captcha, setCaptcha] = useState(newCaptcha)
  const [captchaInput, setCaptchaInput] = useState('')
  const [error, setError] = useState('')
  const [driving, setDriving] = useState(false)

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  function refreshCaptcha() {
    setCaptcha(newCaptcha())
    setCaptchaInput('')
  }

  function submit(e) {
    e.preventDefault()
    if (!form.email.trim() || !form.password) return setError('Please enter your email and password.')
    if (captchaInput !== captcha) {
      refreshCaptcha()
      return setError('Captcha does not match. Please try the new code.')
    }
    setDriving(true)
    setTimeout(() => navigate('/student'), 1800)
  }

  return (
    <AuthLayout
      status="CAMPUSCODE / AUTHENTICATION"
      indexLabel="ACCESS"
      indexCount="01 / 02"
      word="ENTER"
      description="Sign in to continue building, collaborating and competing with the CampusCode community."
      system={['AUTHENTICATION READY', 'SECURE ACCESS']}
      card={{ label: 'EXISTING ACCOUNT', title: 'LOGIN', text: 'Access your CampusCode account.', index: '01' }}
      cardFooter="SECURE LOGIN"
      extras={
        <div className="mt-[38px] grid max-w-[520px] grid-cols-[1.2fr_1fr_1fr] gap-2">
          {features.map((name, i) => (
            <div
              key={name}
              className={`flex min-h-[92px] flex-col justify-between border border-line p-[15px] transition-all hover:-translate-y-1 hover:border-[#aaa] hover:bg-white ${
                i === 0 ? 'bg-[linear-gradient(145deg,#7665ff12,#ffffffb3)]' : 'bg-white/50'
              }`}
            >
              <strong className="font-mono text-[8px] font-normal text-[#aaa]">0{i + 1}</strong>
              <span className="text-[15px] font-extrabold tracking-[-0.4px]">{name}</span>
            </div>
          ))}
        </div>
      }
    >
      <form onSubmit={submit} noValidate>
        <Field id="login-email" label="EMAIL ADDRESS" icon="@" type="email" name="email" placeholder="you@example.com" autoComplete="email" autoFocus value={form.email} onChange={update} />
        <Field id="login-password" label="PASSWORD" icon="•" type="password" name="password" placeholder="Enter your password" autoComplete="current-password" value={form.password} onChange={update} />
        <Captcha id="login-captcha" code={captcha} value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} onRefresh={refreshCaptcha} />

        <FormError>{error}</FormError>

        <div aria-hidden="true" className="relative mt-3 mb-1 h-16 overflow-hidden rounded-xl border border-dashed border-[#ddd] bg-[linear-gradient(90deg,#f7f7f4,#fff)]">
          {!driving && <span className="absolute top-2 left-[92px] text-xs tracking-[0.1em] text-[#888]">Zzz</span>}
          <span className={`absolute bottom-3 left-3 w-[74px] ${driving ? 'animate-ride' : ''}`}>
            <span className="flex gap-[3px] rounded-lg bg-ink px-2.5 py-2">
              <i className="h-4 w-3.5 -skew-x-[18deg] rounded-sm bg-white" />
              <i className="h-4 w-3.5 -skew-x-[18deg] rounded-sm bg-[#7665ff]" />
              <i className="h-4 w-3.5 -skew-x-[18deg] rounded-sm bg-[#8bcf19]" />
            </span>
            <span className={`absolute -bottom-1.5 left-2.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-ink ${driving ? 'animate-spin' : ''}`} />
            <span className={`absolute right-2.5 -bottom-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-ink ${driving ? 'animate-spin' : ''}`} />
          </span>
          <span className="absolute top-2.5 right-[22px] text-[11px] font-bold tracking-[0.08em] text-[#555]">{driving ? 'GO' : 'READY'}</span>
          <span className="absolute right-2.5 bottom-3 h-[34px] w-1 rounded-sm bg-[#82b91a]" />
        </div>

        <button type="submit" disabled={driving} className="mt-[5px] flex h-[58px] w-full cursor-pointer items-center justify-between bg-ink px-[18px] text-[11px] font-extrabold tracking-[0.3px] text-white transition-all hover:-translate-y-[3px] hover:bg-[#202020] hover:shadow-[0_15px_35px_#00000024] disabled:cursor-wait disabled:opacity-65">
          <span>{driving ? 'LOGGING IN' : 'LOGIN'}</span>
          <b className="text-lg font-normal text-[#a8e62e]">↗</b>
        </button>

        <div className="mx-0.5 mt-3.5">
          <button type="button" onClick={() => setError('Password reset is not part of this demo.')} className="cursor-pointer px-2 py-[7px] font-mono text-[7px] tracking-[0.5px] text-[#888] transition-colors hover:text-violet">
            FORGOT PASSWORD?
          </button>
        </div>
      </form>

      <div className="mt-[26px] flex items-center justify-between gap-5 border-t border-[#e4e4df] pt-[21px] font-mono text-[8px]">
        <span className="text-[#999]">DON'T HAVE AN ACCOUNT?</span>
        <button type="button" onClick={() => navigate('/register')} className="cursor-pointer text-violet transition-all hover:translate-x-[3px] hover:text-ink">
          CREATE ACCOUNT →
        </button>
      </div>
    </AuthLayout>
  )
}
