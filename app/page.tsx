export const revalidate = 60
import type { Metadata } from 'next'
import { supabase } from '@/lib/supabase'
import HeroSection from '@/components/HeroSection'
import OffersSection from '@/components/OffersSection'
import FilterPills from '@/components/FilterPills'
import CafeCard from '@/components/CafeCard'

export const metadata: Metadata = {
  title: 'Aligarh Cafes — Explore Local. Brew Memories.',
  description:
    'Discover the best cafes in Aligarh. Find menus, prices, locations, couple-friendly cafes and special offers near you.',
  keywords: [
    'cafes in Aligarh',
    'best cafe Aligarh',
    'couple friendly cafe Aligarh',
    'cafe near me Aligarh',
    'rooftop cafe Aligarh',
  ],
  openGraph: {
    title: 'Aligarh Cafes — Explore Local. Brew Memories.',
    description:
      'Discover the best cafes in Aligarh. Find menus, prices, locations, couple-friendly cafes and special offers near you.',
    url: 'https://aligarhcafes.in',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Aligarh Cafes',
  },
}

async function getCafes(area?: string) {
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

  if (area && area !== 'All') {
    return (data || []).filter((cafe) => cafe.areas?.name === area)
  }

  return data || []
}

async function getOffers() {
  const { data } = await supabase
    .from('offers')
    .select(`*, cafes(name, slug)`)
    .eq('is_active', true)
  return data || []
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ area?: string }>
}) {
  const { area } = await searchParams
  const cafes = await getCafes(area)
  const offers = await getOffers()

  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <OffersSection offers={offers} />
        <FilterPills />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cafes.length > 0 ? (
            cafes.map((cafe) => (
              <CafeCard key={cafe.id} cafe={cafe} />
            ))
          ) : (
            <div className="col-span-3 text-center py-12 text-gray-500">
              <p className="text-4xl mb-3">☕</p>
              <p className="font-medium">No cafes found in this area yet.</p>
              <p className="text-sm mt-1">More cafes coming soon!</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
