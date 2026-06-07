import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-[#1A1A1A] min-h-screen fixed left-0 top-0 flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <p className="text-white font-bold text-lg">☕ Admin</p>
          <p className="text-gray-400 text-xs mt-1">Aligarh Cafes</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg text-sm transition">
            📊 Dashboard
          </Link>
          <Link href="/admin/submissions" className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg text-sm transition">
            📋 Submissions
          </Link>
          <Link href="/admin/cafes" className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg text-sm transition">
            🏪 Cafes
          </Link>
          <Link href="/admin/offers" className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg text-sm transition">
            🎁 Offers
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <a href="/api/admin/logout" className="flex items-center gap-3 text-gray-400 hover:text-red-400 px-3 py-2 rounded-lg text-sm transition">
            🚪 Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-56 flex-1 p-8">
        {children}
      </main>
    </div>
  )
}
