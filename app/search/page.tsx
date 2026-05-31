import { supabase } from "@/lib/supabase"
import CafeCard from "@/components/CafeCard"

async function searchCafes(query: string, filter: string) {
  let supabaseQuery = supabase
    .from("cafes")
    .select("*, areas(name), cafe_photos(image_url, is_cover), offers(title, discount_text, is_active)")
    .eq("is_published", true)
    .is("deleted_at", null)

  if (query) {
    supabaseQuery = supabaseQuery.or(
      "name.ilike.%" + query + "%,address.ilike.%" + query + "%"
    )
  }

  if (filter) {
    supabaseQuery = supabaseQuery.contains("vibe_tags", [filter])
  }

  const { data } = await supabaseQuery
  return data || []
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; filter?: string }>
}) {
  const { q, filter } = await searchParams
  const cafes = await searchCafes(q || "", filter || "")

  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1A1A1A]">
            {q ? "Results for: " + q : filter ? "Filter: " + filter : "All Cafes"}
          </h1>
          <p className="text-gray-500 text-sm mt-1">{cafes.length} cafes found</p>
        </div>

        {cafes.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">☕</p>
            <p className="text-gray-500 text-lg">No cafes found</p>
            <p className="text-gray-400 text-sm mt-2">Try searching something else</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cafes.map((cafe) => (
              <CafeCard key={cafe.id} cafe={cafe} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}