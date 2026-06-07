import { supabaseAdmin } from '@/lib/supabase-admin'

async function getOffers() {
  const { data } = await supabaseAdmin
    .from('offers')
    .select('*, cafes(name, slug)')
    .order('created_at', { ascending: false })
  return data || []
}

export default async function AdminOffersPage() {
  const offers = await getOffers()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A1A]">Offers</h1>
          <p className="text-gray-500 text-sm">{offers.length} total offers</p>
        </div>
      </div>

      {offers.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl">
          <p className="text-4xl mb-3">🎁</p>
          <p className="font-medium text-gray-500">No offers yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {offers.map((offer: any) => (
            <div key={offer.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-bold text-[#1A1A1A]">{offer.title}</h2>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${offer.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {offer.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <p className="text-sm text-gray-500">{offer.discount_text}</p>
              <p className="text-xs text-gray-400 mt-1">
                {offer.cafes?.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
