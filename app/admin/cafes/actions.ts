'use server'

import { supabaseAdmin } from '@/lib/supabase-admin'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

// IMPORTANT: apne existing cafes (antares-cafe, thrustea-cafe) ka
// operating_hours data check karke confirm kar lena ki day_of_week
// 0 = Sunday hai ya 0 = Monday. Neeche maine 0 = Sunday assume kiya hai.
const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

export async function addCafe(formData: FormData) {
  const name = formData.get('name') as string
  const slug = slugify(name)

  // 1. Basic cafe fields
  const cafeData = {
    name,
    slug,
    area_id: formData.get('area_id') as string,
    address: formData.get('address') as string,
    tagline: formData.get('tagline') as string,
    phone: formData.get('phone') as string,
    whatsapp_number: formData.get('whatsapp_number') as string,
    instagram_handle: formData.get('instagram_handle') as string,
    google_maps_url: formData.get('google_maps_url') as string,
    price_tier: Number(formData.get('price_tier')) || null,
    couple_friendly: formData.get('couple_friendly') === 'on',
    has_wifi: formData.get('has_wifi') === 'on',
    has_ac: formData.get('has_ac') === 'on',
    has_rooftop: formData.get('has_rooftop') === 'on',
    has_live_music: formData.get('has_live_music') === 'on',
    has_private_cabin: formData.get('has_private_cabin') === 'on',
    vibe_tags: ((formData.get('vibe_tags') as string) || '')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean),
    is_published: formData.get('is_published') === 'on',
  }

  // 2. Cafe insert karo, id wapas lo
  const { data: cafe, error: cafeError } = await supabaseAdmin
    .from('cafes')
    .insert(cafeData)
    .select('id')
    .single()

  if (cafeError || !cafe) {
    console.error('Cafe insert failed:', cafeError)
    throw new Error('Cafe create nahi ho paya: ' + cafeError?.message)
  }

  const cafeId = cafe.id

  // 3. Operating hours — 7 rows, ek har din ke liye
  const hoursRows = DAYS.map((_, i) => ({
    cafe_id: cafeId,
    day_of_week: i,
    is_closed: formData.get(`day_${i}_closed`) === 'on',
    open_time: (formData.get(`day_${i}_open`) as string) || null,
    close_time: (formData.get(`day_${i}_close`) as string) || null,
  }))

  const { error: hoursError } = await supabaseAdmin
    .from('operating_hours')
    .insert(hoursRows)

  if (hoursError) {
    console.error('Operating hours insert failed:', hoursError)
  }

  // 4. Images upload — Storage mein, phir cafe_photos table mein record
  const cover = formData.get('cover') as File | null
  const gallery = formData.getAll('gallery') as File[]
  let sortOrder = 0

  if (cover && cover.size > 0) {
    const ext = cover.name.split('.').pop()
    const path = `${slug}/cover-${Date.now()}.${ext}`

    const { error: uploadError } = await supabaseAdmin.storage
      .from('cafe-images')
      .upload(path, cover)

    if (!uploadError) {
      const { data: urlData } = supabaseAdmin.storage
        .from('cafe-images')
        .getPublicUrl(path)

      await supabaseAdmin.from('cafe_photos').insert({
        cafe_id: cafeId,
        image_url: urlData.publicUrl,
        is_cover: true,
        sort_order: sortOrder++,
      })
    } else {
      console.error('Cover upload failed:', uploadError)
    }
  }

  for (const file of gallery) {
    if (!file || file.size === 0) continue
    const ext = file.name.split('.').pop()
    const path = `${slug}/gallery-${Date.now()}-${sortOrder}.${ext}`

    const { error: uploadError } = await supabaseAdmin.storage
      .from('cafe-images')
      .upload(path, file)

    if (!uploadError) {
      const { data: urlData } = supabaseAdmin.storage
        .from('cafe-images')
        .getPublicUrl(path)

      await supabaseAdmin.from('cafe_photos').insert({
        cafe_id: cafeId,
        image_url: urlData.publicUrl,
        is_cover: false,
        sort_order: sortOrder++,
      })
    } else {
      console.error('Gallery upload failed:', uploadError)
    }
  }

  // 5. Cache clear karo taaki naya cafe turant public site pe dikhe
  revalidatePath('/admin/cafes')
  revalidatePath('/cafes')
  redirect('/admin/cafes')
}
