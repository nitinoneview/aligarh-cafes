import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: 'https://aligarhcafes.in',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://aligarhcafes.in/cafes',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://aligarhcafes.in/offers',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  const { data: cafes } = await supabase
    .from('cafes')
    .select('slug')
    .eq('is_published', true)

  const cafePages: MetadataRoute.Sitemap = (cafes || []).map((cafe) => ({
    url: `https://aligarhcafes.in/cafes/${cafe.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticPages, ...cafePages]
}
