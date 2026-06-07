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

async function getRecentSubmissions() {
  const { data } = await supabaseAdmin
    .from('submissions')
    .select('*')
    .order('submitted_at', { ascending: false })
    .limit(3)
  return data || []
}

export default async function AdminDashboard() {
  const { cafesCount, offersCount, submissionsCount, pendingCount } = await getStats()
  const recentSubmissions = await getRecentSubmissions()

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1A1A1A]">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back, Nitin! Here is what is happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <Link href="/admin/cafes" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition hover:border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl">🏪</div>
            <span className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded-full">Live</span>
          </div>
          <p className="text-3xl font-bold text-[#1A1A1A]">{cafesCount || 0}</p>
          <p className="text-sm text-gray-500 mt-1">Published Cafes</p>
        </Link>

        <Link href="/admin/offers" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition hover:border-orange-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-xl">🎁</div>
            <span className="text-xs text-orange-500 bg-orange-50 px-2 py-1 rounded-full">Active</span>
          </div>
          <p className="text-3xl font-bold text-[#1A1A1A]">{offersCount || 0}</p>
          <p className="text-sm text-gray-500 mt-1">Active Offers</p>
        </Link>

        <Link href="/admin/submissions" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition hover:border-green-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-xl">📋</div>
            <span className="text-xs text-green-500 bg-green-50 px-2 py-1 rounded-full">Total</span>
          </div>
          <p className="text-3xl font-bold text-[#1A1A1A]">{submissionsCount || 0}</p>
          <p className="text-sm text-gray-500 mt-1">Total Submissions</p>
        </Link>

        <Link href="/admin/submissions" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition hover:border-yellow-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center text-xl">⏳</div>
            {(pendingCount || 0) > 0 && (
              <span className="text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full font-medium">Action needed</span>
            )}
          </div>
          <p className="text-3xl font-bold text-[#1A1A1A]">{pendingCount || 0}</p>
          <p className="text-sm text-gray-500 mt-1">Pending Review</p>
        </Link>
      </div>

      {/* Recent Submissions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="font-bold text-[#1A1A1A]">Recent Submissions</h2>
          <Link href="/admin/submissions" className="text-sm text-[#D4622A] hover:underline">View all</Link>
        </div>
        <div className="divide-y divide-gray-50">
          {recentSubmissions.length === 0 ? (
            <div className="px-6 py-8 text-center text-gray-400 text-sm">No submissions yet</div>
          ) : (
            recentSubmissions.map((sub: any) => (
              <div key={sub.id} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#1A1A1A] text-sm">{sub.cafe_name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{sub.owner_name} • {sub.whatsapp_number}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  sub.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                  sub.status === 'approved' ? 'bg-green-100 text-green-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {sub.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="font-bold text-[#1A1A1A] mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/submissions" className="bg-[#D4622A] text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#c5571f] transition">
            📋 Review Submissions
          </Link>
          <Link href="/admin/offers" className="bg-[#1A1A1A] text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition">
            🎁 Manage Offers
          </Link>
          <Link href="/admin/cafes" className="bg-white border border-gray-200 text-[#1A1A1A] px-4 py-2.5 rounded-xl text-sm font-medium hover:border-[#D4622A] transition">
            🏪 View Cafes
          </Link>
          <Link href="https://supabase.com/dashboard/project/xebviarpzsddjcbmzkbu/editor" target="_blank" className="bg-white border border-gray-200 text-[#1A1A1A] px-4 py-2.5 rounded-xl text-sm font-medium hover:border-[#D4622A] transition">
            🗄️ Open Database
          </Link>
        </div>
      </div>
    </div>
  )
}
