export const revalidate = 60
import type { Metadata } from 'next'
import { supabase } from '@/lib/supabase'
import CafeCard from '@/components/CafeCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All Cafes in Aligarh | Aligarh Cafes',
  description: 'Browse all cafes in Aligarh. Filter by area, features like WiFi, AC, rooftop, couple friendly and more.',
}

async function getAllCafes(area?: string, feature?: string) {
  const { data } = await supabase
    .from('cafes')
    .select(`
      *,
      areas(name),
      cafe_photos(image_url, is_cover),
      offers(title, discount_text, is_active)
    `)
    .eq('is_published', true)
    .is('deleted_at', null)

  let cafes = data || []

  if (area && area !== 'All') {
    cafes = cafes.filter((cafe) => cafe.areas?.name === area)
  }

  if (feature && feature !== 'All') {
    cafes = cafes.filter((cafe) => {
      if (feature === 'couple-friendly') return cafe.couple_friendly
      if (feature === 'wifi') return cafe.has_wifi
      if (feature === 'ac') return cafe.has_ac
      if (feature === 'rooftop') return cafe.has_rooftop
      if (feature === 'live-music') return cafe.has_live_music
      if (feature === 'private-cabin') return cafe.has_private_cabin
      return true
    })
  }

  return cafes
}

const AREAS = ['All', 'Civil Lines', 'Ramghat Road', 'Marris Road', 'AMU Gate']

const FEATURES = [
  { label: '💑 Couple Friendly', value: 'couple-friendly' },
  { label: '📶 WiFi', value: 'wifi' },
  { label: '❄️ AC', value: 'ac' },
  { label: '🌙 Rooftop', value: 'rooftop' },
  { label: '🎵 Live Music', value: 'live-music' },
  { label: '🚪 Private Cabin', value: 'private-cabin' },
]

export default async function CafesPage({
  searchParams,
}: {
  searchParams: Promise<{ area?: string; feature?: string }>
}) {
  const { area, feature } = await searchParams
  const cafes = await getAllCafes(area, feature)

  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      {/* Header */}
      <div className="bg-[#1A1A1A] py-10 px-4 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">All Cafes in Aligarh</h1>
        <p className="text-gray-400 text-sm">
          {cafes.length} cafe{cafes.length !== 1 ? 's' : ''} found
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Area Filter */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Browse by Area</h2>
          <div className="flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <Link
                key={a}
                href={a === 'All' ? '/cafes' : `/cafes?area=${encodeURIComponent(a)}${feature ? `&feature=${feature}` : ''}`}
                className={`px-4 py-2 rounded-full text-sm border transition-all ${
                  (area === a) || (!area && a === 'All')
                    ? 'bg-[#D4622A] text-white border-[#D4622A]'
                    : 'bg-white text-[#1A1A1A] border-gray-200 hover:border-[#D4622A] hover:text-[#D4622A]'
                }`}
              >
                {a}
              </Link>
            ))}
          </div>
        </div>

        {/* Feature Filter */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Filter by Feature</h2>
          <div className="flex flex-wrap gap-2">
            {FEATURES.map((f) => (
              <Link
                key={f.value}
                href={`/cafes?${area ? `area=${encodeURIComponent(area)}&` : ''}feature=${f.value}`}
                className={`px-4 py-2 rounded-full text-sm border transition-all ${
                  feature === f.value
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-white text-[#1A1A1A] border-gray-200 hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                }`}
              >
                {f.label}
              </Link>
            ))}
            {feature && (
              <Link
                href={area ? `/cafes?area=${encodeURIComponent(area)}` : '/cafes'}
                className="px-4 py-2 rounded-full text-sm border border-red-200 text-red-500 bg-white hover:bg-red-50 transition-all"
              >
                ✕ Clear Filter
              </Link>
            )}
          </div>
        </div>

        {/* Cafe Grid */}
        {cafes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cafes.map((cafe) => (
              <CafeCard key={cafe.id} cafe={cafe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">☕</p>
            <p className="text-xl font-bold text-[#1A1A1A] mb-2">No cafes found</p>
            <p className="text-gray-500 text-sm mb-6">Try a different area or feature filter</p>
            <Link href="/cafes" className="bg-[#D4622A] text-white px-6 py-2 rounded-full text-sm hover:bg-[#c5571f] transition">
              Clear All Filters
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
