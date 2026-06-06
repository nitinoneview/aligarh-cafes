export const revalidate = 60
import type { Metadata } from 'next'

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
    url: 'https://aligarhcafes.vercel.app',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Aligarh Cafes',
  },
}
import { supabase } from '@/lib/supabase'
import HeroSection from '@/components/HeroSection'
import OffersSection from '@/components/OffersSection'
import FilterPills from '@/components/FilterPills'
import CafeCard from '@/components/CafeCard'

async function getCafes() {
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
  return data || []
}

async function getOffers() {
  const { data } = await supabase
    .from('offers')
    .select(`*, cafes(name, slug)`)
    .eq('is_active', true)
  return data || []
}

export default async function Home() {
  const cafes = await getCafes()
  const offers = await getOffers()

  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <OffersSection offers={offers} />
        <FilterPills />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cafes.map((cafe) => (
            <CafeCard key={cafe.id} cafe={cafe} />
          ))}
        </div>
      </div>
    </main>
  )
}
