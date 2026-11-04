import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../components/auth/AuthLayout'
import { Captcha, Field, FormError, newCaptcha } from '../components/auth/Fields'

const infoCards = [
  { tag: 'IDENTITY', title: 'CREATE', text: 'Build your student profile and enter the CampusCode ecosystem.' },
  { tag: 'TEAM', title: 'COLLABORATE', text: 'Find teammates and build projects together.' },
  { tag: 'ARENA', title: 'COMPETE', text: 'Join hackathons and turn ideas into submissions.' },
]

const passwordOk = (p) => p.length >= 8 && /[A-Z]/.test(p) && /[a-z]/.test(p) && /[0-9]/.test(p)

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [adult, setAdult] = useState(false)
  const [captcha, setCaptcha] = useState(newCaptcha)
  const [captchaInput, setCaptchaInput] = useState('')
  const [step, setStep] = useState('details')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  function refreshCaptcha() {
    setCaptcha(newCaptcha())
    setCaptchaInput('')
  }

  function submitDetails(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.password) return setError('Please fill in all required fields.')
    if (!passwordOk(form.password)) return setError('Password needs min 8 characters with an uppercase letter, a lowercase letter, and a number.')
    if (form.password !== form.confirm) return setError('Passwords do not match.')
    if (!adult) return setError('Please confirm that you are 18 years of age or older to create an account.')
    if (captchaInput !== captcha) {
      refreshCaptcha()
      return setError('Captcha does not match. Please try the new code.')
    }
    setError('')
    setStep('otp')
    window.scrollTo(0, 0)
  }

  function submitOtp(e) {
    e.preventDefault()
    if (!/^\d{6}$/.test(otp)) return setError('Enter the 6 digit verification code.')
    navigate('/student')
  }

  const card =
    step === 'details'
      ? { label: 'NEW ACCOUNT', title: 'REGISTER', text: 'Create your CampusCode account.', index: '02' }
      : { label: 'NEW ACCOUNT', title: 'VERIFY', text: `We sent a code to ${form.email}.`, index: '02' }

  return (
    <AuthLayout
      status="CAMPUSCODE / REGISTRATION"
      indexLabel="CREATE"
      indexCount="02 / 02"
      word="JOIN"
      description="Create your CampusCode identity and become part of a student ecosystem designed around ideas, teams, technology and competition."
      system={['REGISTRATION OPEN', 'STUDENT INNOVATION NETWORK']}
      card={card}
      cardFooter="SECURE REGISTRATION"
      extras={
        <div className="mt-[38px] grid max-w-[520px] grid-cols-[1.2fr_1fr_1fr] gap-2">
          {infoCards.map((info, i) => (
            <div
              key={info.tag}
              className={`relative min-h-[145px] border border-[#ddddd7] p-[17px] transition-all hover:-translate-y-1 hover:border-[#aaa] hover:bg-white ${
                i === 0 ? 'bg-[linear-gradient(145deg,#7665ff12,#ffffffb3)]' : 'bg-white/50'
              }`}
            >
              <div className="flex justify-between font-mono text-[7px] tracking-[0.8px] text-[#aaa]">
                <span>0{i + 1}</span>
                <span>{info.tag}</span>
              </div>
              <strong className="mt-[25px] block text-[17px] tracking-[-0.5px]">{info.title}</strong>
              <p className="mt-2 text-[9px] leading-[1.55] text-[#858580]">{info.text}</p>
              <div className="absolute right-[17px] bottom-3.5 left-[17px] h-px bg-[#ddd]">
                <i className="block h-px w-[35%] bg-[#a8e62e]" />
              </div>
            </div>
          ))}
        </div>
      }
    >
      {step === 'details' ? (
        <form onSubmit={submitDetails} noValidate>
          <Field id="reg-name" label="FULL NAME" icon="◇" name="name" compact placeholder="Your full name" autoComplete="name" autoFocus value={form.name} onChange={update} />
          <Field id="reg-email" label="EMAIL ADDRESS" icon="@" type="email" name="email" compact placeholder="you@example.com" autoComplete="email" value={form.email} onChange={update} />
          <Field id="reg-type" label="ACCOUNT TYPE" icon="🎓" compact spacing={10} value="STUDENT" readOnly />
          <p className="mx-0.5 mb-4 text-xs leading-[1.7] text-[#77776e]">
            Organizer? Accounts are created by our team — contact{' '}
            <a href="mailto:campuscode@gmail.com" className="font-bold text-[#7c5cff] hover:underline">
              campuscode@gmail.com
            </a>
          </p>

          <Field id="reg-password" label="PASSWORD" icon="•" type="password" name="password" compact placeholder="Create a password" autoComplete="new-password" value={form.password} onChange={update} />
          <Field id="reg-confirm" label="CONFIRM PASSWORD" icon="•" type="password" name="confirm" compact placeholder="Repeat your password" autoComplete="new-password" value={form.confirm} onChange={update} />
          <Captcha id="reg-captcha" code={captcha} value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} onRefresh={refreshCaptcha} compact />

          <label className="mb-3.5 flex cursor-pointer items-start gap-3 border border-[#d8d8d2] bg-[#fafaf8] px-3.5 py-[13px] text-[13px] leading-normal transition-all hover:border-violet has-[:checked]:border-violet has-[:checked]:bg-white has-[:checked]:shadow-[0_0_0_3px_#7665ff14]">
            <input type="checkbox" checked={adult} onChange={(e) => { setAdult(e.target.checked); setError('') }} className="mt-px h-5 w-5 shrink-0 cursor-pointer accent-[#7665ff]" />
            <span>
              I confirm that I am <b className="text-[#7665ff]">18 years of age or older</b>.
            </span>
          </label>

          <FormError>{error}</FormError>

          <button type="submit" className="mt-[3px] flex h-[54px] w-full cursor-pointer items-center justify-between bg-ink px-[18px] text-[10px] font-extrabold tracking-[0.3px] text-white transition-all hover:-translate-y-[3px] hover:shadow-[0_15px_35px_#00000024]">
            <span className="inline-flex gap-0.5 rounded-md bg-white px-[7px] py-[5px]">
              <i className="h-[11px] w-[9px] -skew-x-[18deg] rounded-[1px] bg-ink" />
              <i className="h-[11px] w-[9px] -skew-x-[18deg] rounded-[1px] bg-[#7665ff]" />
              <i className="h-[11px] w-[9px] -skew-x-[18deg] rounded-[1px] bg-[#8bcf19]" />
            </span>
            <span>SEND VERIFICATION CODE</span>
            <b className="text-[17px] font-normal text-[#a8e62e]">↗</b>
          </button>
        </form>
      ) : (
        <form onSubmit={submitOtp} noValidate>
          <Field id="reg-otp" label="VERIFICATION CODE" icon="#" compact placeholder="6 digit code" inputMode="numeric" maxLength={6} autoComplete="one-time-code" autoFocus value={otp} onChange={(e) => { setOtp(e.target.value); setError('') }} />
          <p className="mx-0.5 mb-[22px] text-xs leading-[1.7] text-[#77776e]">This is a demo, so any 6 digits will work.</p>

          <FormError>{error}</FormError>

          <button type="submit" className="flex h-[54px] w-full cursor-pointer items-center justify-between bg-ink px-[18px] text-[10px] font-extrabold tracking-[0.3px] text-white transition-all hover:-translate-y-[3px] hover:shadow-[0_15px_35px_#00000024]">
            <span>VERIFY AND CREATE ACCOUNT</span>
            <b className="text-[17px] font-normal text-[#a8e62e]">↗</b>
          </button>
          <button type="button" onClick={() => { setStep('details'); setOtp(''); setError('') }} className="mt-3.5 cursor-pointer px-2 py-[7px] font-mono text-[7px] tracking-[0.5px] text-[#888] transition-colors hover:text-violet">
            ← CHANGE DETAILS
          </button>
        </form>
      )}

      <div className="mt-5 flex items-center justify-between gap-5 border-t border-[#e4e4df] pt-[21px] font-mono text-[8px]">
        <span className="text-[#999]">ALREADY HAVE AN ACCOUNT?</span>
        <button type="button" onClick={() => navigate('/login')} className="cursor-pointer text-violet transition-all hover:translate-x-[3px] hover:text-ink">
          LOGIN →
        </button>
      </div>
    </AuthLayout>
  )
}
