'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/admin')
    } else {
      setError('Invalid password. Try again.')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl">
        <div className="text-center mb-8">
          <p className="text-4xl mb-3">☕</p>
          <h1 className="text-2xl font-bold text-[#1A1A1A]">Admin Panel</h1>
          <p className="text-gray-500 text-sm mt-1">Aligarh Cafes</p>
        </div>

        <div className="space-y-4">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4622A] transition"
          />

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading || !password}
            className="w-full bg-[#D4622A] text-white py-3 rounded-xl font-medium hover:bg-[#c5571f] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    </main>
  )
}
