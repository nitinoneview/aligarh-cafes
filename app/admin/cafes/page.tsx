import { supabaseAdmin } from '@/lib/supabase-admin'
import Link from 'next/link'

async function getCafes() {
  const { data } = await supabaseAdmin
    .from('cafes')
    .select('*, areas(name)')
    .order('created_at', { ascending: false })
  return data || []
}

export default async function AdminCafesPage() {
  const cafes = await getCafes()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A1A]">Cafes</h1>
          <p className="text-gray-500 text-sm">{cafes.length} total cafes</p>
        </div>
      </div>

      <div className="space-y-4">
        {cafes.map((cafe) => (
          <div key={cafe.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-bold text-[#1A1A1A]">{cafe.name}</h2>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  cafe.is_published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                }`}>
                  {cafe.is_published ? 'Published' : 'Draft'}
                </span>
              </div>
              <p className="text-sm text-gray-500">{cafe.areas?.name} • {cafe.address}</p>
            </div>
            <Link
              href={`/cafes/${cafe.slug}`}
              target="_blank"
              className="text-sm text-[#D4622A] hover:underline"
            >
              View →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
