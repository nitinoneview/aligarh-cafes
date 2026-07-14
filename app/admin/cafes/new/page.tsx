import { supabaseAdmin } from '@/lib/supabase-admin'
import { addCafe } from '../actions'

export default async function NewCafePage() {
  const { data: areas } = await supabaseAdmin
    .from('areas')
    .select('id, name')
    .order('name')

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-medium mb-6">Add new cafe</h1>

      <form action={addCafe} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Cafe name</label>
            <input name="name" required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Area</label>
            <select name="area_id" required className="w-full border rounded px-3 py-2">
              <option value="">Select area</option>
              {areas?.map((area) => (
                <option key={area.id} value={area.id}>{area.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Tagline / short description</label>
          <textarea name="tagline" rows={2} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Full address</label>
          <input name="address" required className="w-full border rounded px-3 py-2" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone</label>
            <input name="phone" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">WhatsApp number</label>
            <input name="whatsapp_number" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Instagram handle</label>
            <input name="instagram_handle" placeholder="@cafename" className="w-full border rounded px-3 py-2" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Google Maps URL</label>
            <input name="google_maps_url" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Price tier</label>
            <select name="price_tier" className="w-full border rounded px-3 py-2">
              <option value="1">₹ (Budget)</option>
              <option value="2">₹₹ (Mid-range)</option>
              <option value="3">₹₹₹ (Premium)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Vibe tags (comma separated)</label>
          <input name="vibe_tags" placeholder="cozy, study-friendly, aesthetic" className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-2">Features</label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2"><input type="checkbox" name="has_wifi" /> WiFi</label>
            <label className="flex items-center gap-2"><input type="checkbox" name="has_ac" /> AC</label>
            <label className="flex items-center gap-2"><input type="checkbox" name="has_rooftop" /> Rooftop</label>
            <label className="flex items-center gap-2"><input type="checkbox" name="has_live_music" /> Live music</label>
            <label className="flex items-center gap-2"><input type="checkbox" name="has_private_cabin" /> Private cabin</label>
            <label className="flex items-center gap-2"><input type="checkbox" name="couple_friendly" /> Couple friendly</label>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-2">Operating hours</label>
          <div className="space-y-2">
            {days.map((day, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-24 text-sm">{day}</span>
                <input type="time" name={`day_${i}_open`} className="border rounded px-2 py-1" />
                <span className="text-sm text-gray-400">to</span>
                <input type="time" name={`day_${i}_close`} className="border rounded px-2 py-1" />
                <label className="flex items-center gap-1 text-sm text-gray-600">
                  <input type="checkbox" name={`day_${i}_closed`} /> Closed
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Cover image</label>
            <input type="file" name="cover" accept="image/*" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Gallery images</label>
            <input type="file" name="gallery" accept="image/*" multiple className="w-full border rounded px-3 py-2" />
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" name="is_published" /> Publish immediately
          </label>
          <button type="submit" className="bg-[#D4622A] text-white px-6 py-2 rounded">
            Add cafe
          </button>
        </div>
      </form>
    </div>
  )
}
