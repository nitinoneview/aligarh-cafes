export const revalidate = 60
import type { Metadata } from 'next'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Offers & Deals | Aligarh Cafes',
  description: 'Find the best cafe offers and deals in Aligarh. Discounts, combos and special offers from top cafes.',
}

async function getOffers() {
  const { data } = await supabase
    .from('offers')
    .select(`
      *,
      cafes(name, slug)
    `)
    .eq('is_active', true)
    .order('created_at', { ascending: false })
  return data || []
}

export default async function OffersPage() {
  const offers = await getOffers()

  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      {/* Header */}
      <div className="bg-[#1A1A1A] py-10 px-4 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Offers & Deals</h1>
        <p className="text-gray-400 text-sm">
          {offers.length} active offer{offers.length !== 1 ? 's' : ''} available
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {offers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {offers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-orange-100">
                {/* Orange top bar */}
                <div className="bg-[#D4622A] px-5 py-4">
                  <h2 className="text-white font-bold text-lg">{offer.title}</h2>
                  <p className="text-orange-100 text-sm mt-1">{offer.discount_text}</p>
                </div>

                {/* Cafe info */}
                <div className="px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Cafe</p>
                      <p className="font-semibold text-[#1A1A1A]">{offer.cafes?.name}</p>
                    </div>
                    {offer.valid_until && (
                      <div className="text-right">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Valid Until</p>
                        <p className="text-sm font-medium text-[#1A1A1A]">
                          {new Date(offer.valid_until).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/cafes/${offer.cafes?.slug}`}
                    className="mt-4 block w-full text-center bg-[#1A1A1A] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-[#D4622A] transition-all"
                  >
                    View Cafe →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🎁</p>
            <p className="text-xl font-bold text-[#1A1A1A] mb-2">No active offers right now</p>
            <p className="text-gray-500 text-sm mb-6">Check back soon — new deals coming!</p>
            <Link href="/cafes" className="bg-[#D4622A] text-white px-6 py-2 rounded-full text-sm hover:bg-[#c5571f] transition">
              Browse Cafes
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
