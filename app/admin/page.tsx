import { supabaseAdmin } from '@/lib/supabase-admin'
import Link from 'next/link'

async function getStats() {
  const [
    { count: cafesCount },
    { count: offersCount },
    { count: submissionsCount },
    { count: pendingCount },
  ] = await Promise.all([
    supabaseAdmin.from('cafes').select('*', { count: 'exact', head: true }).eq('is_published', true),
    supabaseAdmin.from('offers').select('*', { count: 'exact', head: true }).eq('is_active', true),
    supabaseAdmin.from('submissions').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('submissions').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
  ])

  return { cafesCount, offersCount, submissionsCount, pendingCount }
}

export default async function AdminDashboard() {
  const { cafesCount, offersCount, submissionsCount, pendingCount } = await getStats()

  const stats = [
    { label: 'Published Cafes', value: cafesCount || 0, icon: '🏪', href: '/admin/cafes', color: 'bg-blue-50 border-blue-200' },
    { label: 'Active Offers', value: offersCount || 0, icon: '🎁', href: '/admin/offers', color: 'bg-orange-50 border-orange-200' },
    { label: 'Total Submissions', value: submissionsCount || 0, icon: '📋', href: '/admin/submissions', color: 'bg-green-50 border-green-200' },
    { label: 'Pending Review', value: pendingCount || 0, icon: '⏳', href: '/admin/submissions', color: 'bg-yellow-50 border-yellow-200' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1A1A1A] mb-2">Dashboard</h1>
      <p className="text-gray-500 text-sm mb-8">Welcome back, Nitin! Here's what's happening.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href} className={`border rounded-2xl p-6 ${stat.color} hover:shadow-md transition`}>
            <p className="text-3xl mb-3">{stat.icon}</p>
            <p className="text-3xl font-bold text-[#1A1A1A]">{stat.value}</p>
            <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="font-bold text-[#1A1A1A] mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/submissions" className="bg-[#D4622A] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#c5571f] transition">
            📋 Review Submissions
          </Link>
          <Link href="/admin/offers" className="bg-[#1A1A1A] text-white px-4 py-2 rounded-xl text-sm hover:bg-gray-800 transition">
            🎁 Manage Offers
          </Link>
          <Link href="/" target="_blank" className="bg-white border border-gray-200 text-[#1A1A1A] px-4 py-2 rounded-xl text-sm hover:border-[#D4622A] transition">
            🌐 View Site →
          </Link>
        </div>
      </div>
    </div>
  )
}
