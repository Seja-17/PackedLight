import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_V1, apiClient } from '@/lib/api/client'

export function SignupPage() {
  const [form, setForm] = useState({ fullName: '', email: '', password: '' })
  const [verificationCode, setVerificationCode] = useState('')
  const [step, setStep] = useState<'signup' | 'verify'>('signup')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  async function handleSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setSuccess(null)
    setIsSubmitting(true)

    try {
      const response = await apiClient.post(`${API_V1}/auth/signup`, {
        full_name: form.fullName,
        email: form.email,
        password: form.password,
      })

      if (response.data.requires_verification) {
        setStep('verify')
        setSuccess(`Account created. Use the code ${response.data.verification_code} to verify your email.`)
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Signup failed'
      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleVerify(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setSuccess(null)
    setIsSubmitting(true)

    try {
      const response = await apiClient.post(`${API_V1}/auth/verify-email`, {
        email: form.email,
        code: verificationCode,
      })

      if (response.data.access_token) {
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('refresh_token', response.data.refresh_token ?? '')
        setSuccess('Email verified successfully. Redirecting to your dashboard...')
        navigate('/dashboard', { replace: true })
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Verification failed'
      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container-app flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="card w-full max-w-md">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Create account</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">Sign up</h1>
        <p className="mt-3 text-sm text-ink-muted">
          Create an account to plan trips, save preferences, and join the community.
        </p>

        <div className="mt-6 flex flex-col gap-2">
          <button type="button" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 font-medium text-ink transition hover:bg-slate-50">
            Continue with Google
          </button>
          <button type="button" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 font-medium text-ink transition hover:bg-slate-50">
            Continue with Apple
          </button>
        </div>

        {step === 'signup' ? (
          <form className="mt-6 space-y-4" onSubmit={handleSignup}>
            <div>
              <label className="mb-1 block text-sm font-medium text-ink" htmlFor="fullName">
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={form.fullName}
                onChange={(event) => setForm({ ...form, fullName: event.target.value })}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none transition focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-ink" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none transition focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-ink" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={8}
                value={form.password}
                onChange={(event) => setForm({ ...form, password: event.target.value })}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none transition focus:border-primary"
              />
            </div>

            {error ? <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p> : null}
            {success ? <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-600">{success}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-primary px-4 py-2.5 font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Creating account...' : 'Create account'}
            </button>
          </form>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleVerify}>
            <div>
              <label className="mb-1 block text-sm font-medium text-ink" htmlFor="verificationCode">
                Verification code
              </label>
              <input
                id="verificationCode"
                type="text"
                required
                value={verificationCode}
                onChange={(event) => setVerificationCode(event.target.value.toUpperCase())}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none transition focus:border-primary"
              />
            </div>

            {error ? <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p> : null}
            {success ? <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-600">{success}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-primary px-4 py-2.5 font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Verifying account...' : 'Verify account'}
            </button>
          </form>
        )}

        <div className="mt-6 border-t border-slate-200 pt-4 text-sm text-ink-muted">
          <p>Social sign-up is ready for the next step with Google or Apple providers.</p>
          <p className="mt-1">For now, email + password signup uses a verification code flow.</p>
        </div>
      </div>
    </div>
  )
}
