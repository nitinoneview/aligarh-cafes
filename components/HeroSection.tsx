'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function HeroSection() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (query.trim()) {
      router.push('/search?q=' + query.trim())
    }
  }

  const handleFilter = (filter: string) => {
    router.push('/search?filter=' + filter)
  }

  return (
    <div className="bg-[#1A1A1A] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#D4622A] text-sm font-semibold uppercase tracking-widest mb-3">
          Aligarh ka #1 Cafe Guide
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
          Explore Local.{' '}
          <span className="text-[#D4622A]">Brew Memories.</span>
        </h1>
        <p className="text-gray-400 text-base mb-8">
          Real menu prices • Exact locations • Couple-friendly cafes
        </p>
        <div className="max-w-xl mx-auto mb-8">
          <div className="flex items-center bg-white rounded-full px-5 py-3 shadow-xl gap-3">
            <span className="text-gray-400 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Search cafe, area, or vibe..."
              className="flex-1 text-black text-base outline-none bg-transparent"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="bg-[#D4622A] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#c5571f] transition"
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <span
            onClick={() => router.push('/')}
            className="bg-[#D4622A] text-white px-4 py-2 rounded-full text-sm cursor-pointer font-medium"
          >
            ☕ All Cafes
          </span>
          <span
            onClick={() => handleFilter('couple-friendly')}
            className="bg-white/10 text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-white/20 transition"
          >
            💑 Couple Friendly
          </span>
          <span
            onClick={() => handleFilter('student-friendly')}
            className="bg-white/10 text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-white/20 transition"
          >
            🎓 Student Budget
          </span>
          <span
            onClick={() => handleFilter('rooftop-cafe')}
            className="bg-white/10 text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-white/20 transition"
          >
            🌙 Rooftop
          </span>
          <span
            onClick={() => handleFilter('private-cabins')}
            className="bg-white/10 text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-white/20 transition"
          >
            🚪 Private Cabins
          </span>
          <span
            onClick={() => handleFilter('aesthetic-cafe')}
            className="bg-white/10 text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-white/20 transition"
          >
            📸 Aesthetic
          </span>
        </div>
      </div>
    </div>
  )
}
