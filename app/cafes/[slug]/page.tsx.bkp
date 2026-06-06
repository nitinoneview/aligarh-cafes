import { supabase } from "@/lib/supabase"
import Image from "next/image"
export const revalidate = 60

async function getCafe(slug: string) {
  const { data } = await supabase
    .from("cafes")
    .select("*, areas(name), cafe_photos(image_url, is_cover, sort_order), menu_categories(id, name, sort_order), menu_items(id, name, description, price_regular, price_medium, price_large, is_veg, category_id), offers(title, discount_text, valid_until, is_active), operating_hours(day_of_week, open_time, close_time, is_closed)")
    .eq("slug", slug)
    .single()
  return data
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default async function CafeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cafe = await getCafe(slug)
  if (!cafe) return <div className="p-8 text-center">Cafe not found</div>

  const coverPhoto = cafe.cafe_photos?.find((p: any) => p.is_cover)
  const otherPhotos = cafe.cafe_photos?.filter((p: any) => !p.is_cover)
  const activeOffers = cafe.offers?.filter((o: any) => o.is_active)
  const sortedCategories = cafe.menu_categories?.sort((a: any, b: any) => a.sort_order - b.sort_order)

  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <div className="relative h-64 md:h-80 bg-gray-200">
        {coverPhoto && (
          <Image src={coverPhoto.image_url} alt={cafe.name} fill sizes="100vw" className="object-cover" />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl font-bold">{cafe.name}</h1>
          <p className="text-sm opacity-80 mt-1">📍 {cafe.areas?.name}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {cafe.couple_friendly && <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">Couple Friendly</span>}
          {cafe.has_wifi && <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">WiFi</span>}
          {cafe.has_ac && <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">AC</span>}
          {cafe.has_rooftop && <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">Rooftop</span>}
          {cafe.has_live_music && <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Live Music</span>}
          {cafe.has_private_cabin && <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">Private Cabins</span>}
        </div>

        {activeOffers?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#1A1A1A] mb-3">Active Offers</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {activeOffers.map((offer: any) => (
                <div key={offer.id} className="min-w-[220px] bg-[#D4622A] text-white rounded-2xl p-4">
                  <h3 className="font-bold">{offer.title}</h3>
                  <p className="text-sm opacity-90 mt-1">{offer.discount_text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h2 className="font-bold text-[#1A1A1A] mb-3">Contact</h2>
            {cafe.phone && (
              <a href={"tel:" + cafe.phone} className="block text-[#D4622A] font-medium mb-2 hover:underline">
                {cafe.phone}
              </a>
            )}
            {cafe.instagram_handle && (
              <a href={"https://instagram.com/" + cafe.instagram_handle} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-500 text-sm hover:underline mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                {"@" + cafe.instagram_handle}
              </a>
            )}
            <p className="text-gray-500 text-sm mt-2">{cafe.address}</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h2 className="font-bold text-[#1A1A1A] mb-3">Opening Hours</h2>
            {cafe.operating_hours?.sort((a: any, b: any) => a.day_of_week - b.day_of_week).map((h: any) => (
              <div key={h.day_of_week} className="flex justify-between text-sm py-1 border-b border-gray-50">
                <span className="text-gray-600">{DAYS[h.day_of_week]}</span>
                <span className="font-medium text-[#1A1A1A]">{h.is_closed ? "Closed" : h.open_time.slice(0,5) + " - " + h.close_time.slice(0,5)}</span>
              </div>
            ))}
          </div>
        </div>

        {cafe.google_maps_url && (
          <div className="mb-6">
            <a href={cafe.google_maps_url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl p-4 shadow-sm text-center hover:shadow-md transition">
              <p className="text-3xl mb-2">🗺️</p>
              <p className="font-bold text-[#1A1A1A]">Get Directions</p>
              <p className="text-sm text-gray-500 mt-1">{cafe.address}</p>
            </a>
          </div>
        )}

        {otherPhotos?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#1A1A1A] mb-3">Photos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {otherPhotos.map((photo: any) => (
                <div key={photo.image_url} className="relative h-36 rounded-xl overflow-hidden">
                  <Image src={photo.image_url} alt={cafe.name} fill sizes="33vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-lg font-bold text-[#1A1A1A] mb-4">Menu</h2>
          {sortedCategories?.map((cat: any) => {
            const items = cafe.menu_items?.filter((item: any) => item.category_id === cat.id)
            if (!items?.length) return null
            return (
              <div key={cat.id} className="mb-6">
                <h3 className="font-bold text-[#D4622A] text-base mb-3 border-b border-orange-100 pb-2">{cat.name}</h3>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  {items.map((item: any, index: number) => (
                    <div key={item.id} className={"flex justify-between items-start px-4 py-3 " + (index !== items.length - 1 ? "border-b border-gray-50" : "")}>
                      <div className="flex items-start gap-2 flex-1">
                        <span className="text-xs mt-1">{item.is_veg ? "🟢" : "🔴"}</span>
                        <div>
                          <p className="text-sm font-medium text-[#1A1A1A]">{item.name}</p>
                          {item.description && <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        {item.price_regular && <p className="text-sm font-bold text-[#1A1A1A]">{"₹" + item.price_regular}</p>}
                        {item.price_medium && <p className="text-xs text-gray-500">{"M: ₹" + item.price_medium}</p>}
                        {item.price_large && <p className="text-xs text-gray-500">{"L: ₹" + item.price_large}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
