import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F3EF] flex">
      <aside className="w-60 bg-[#1A1A1A] min-h-screen fixed left-0 top-0 flex flex-col z-50">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D4622A] rounded-lg flex items-center justify-center text-white text-sm font-bold">A</div>
            <div>
              <p className="text-white font-bold text-sm">Aligarh Cafes</p>
              <p className="text-gray-400 text-xs">Admin Panel</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <p className="text-gray-500 text-xs uppercase tracking-wider px-3 mb-3 mt-2">Main Menu</p>
          <Link href="/admin" className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-xl text-sm transition">
            <span className="text-lg">📊</span>
            <span>Dashboard</span>
          </Link>
          <Link href="/admin/submissions" className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-xl text-sm transition">
            <span className="text-lg">📋</span>
            <span>Submissions</span>
          </Link>
          <Link href="/admin/cafes" className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-xl text-sm transition">
            <span className="text-lg">🏪</span>
            <span>Cafes</span>
          </Link>
          <Link href="/admin/offers" className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-xl text-sm transition">
            <span className="text-lg">🎁</span>
            <span>Offers</span>
          </Link>
          <div className="border-t border-white/10 my-4"></div>
          <p className="text-gray-500 text-xs uppercase tracking-wider px-3 mb-3">Quick Links</p>
          <Link href="/" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-xl text-sm transition">
            <span className="text-lg">🌐</span>
            <span>View Site</span>
          </Link>
          <Link href="https://supabase.com/dashboard/project/xebviarpzsddjcbmzkbu" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-xl text-sm transition">
            <span className="text-lg">🗄️</span>
            <span>Supabase DB</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link href="/api/admin/logout" className="flex items-center gap-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-2.5 rounded-xl text-sm transition w-full">
            <span className="text-lg">🚪</span>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      <main className="ml-60 flex-1 min-h-screen">
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-40">
          <div className="text-sm text-gray-500">🔒 Secure Admin Session</div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D4622A] rounded-full flex items-center justify-center text-white text-xs font-bold">N</div>
            <span className="text-sm font-medium text-gray-700">Nitin</span>
          </div>
        </div>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
