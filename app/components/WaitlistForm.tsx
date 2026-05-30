'use client'

import { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-wrap">
        <div className="form-success">
          <div className="success-mark">✓</div>
          <p className="success-text">Sei in lista. Ti avviseremo prima di tutti.</p>
        </div>
        <p className="form-hint">Niente spam. Solo il lancio.</p>
      </div>
    )
  }

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="la tua email"
            required
            className="email-input"
            disabled={status === 'loading'}
            autoComplete="email"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            inputMode="email"
          />
          <button type="submit" className="submit-btn" disabled={status === 'loading'} aria-label="Iscriviti">
            {status === 'loading' ? '···' : '→'}
          </button>
        </div>
        {status === 'error' && <p className="form-error">Riprova tra qualche secondo.</p>}
      </form>
      <p className="form-hint">Niente spam. Solo il lancio.</p>
    </div>
  )
}
