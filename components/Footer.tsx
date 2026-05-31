import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image src="/logo.png" alt="Aligarh Cafes" width={40} height={40} className="rounded-xl" />
              <span className="font-bold text-lg">Aligarh <span className="text-[#D4622A]">Cafes</span></span>
            </Link>
            <p className="text-gray-400 text-sm mb-2">Explore Local. Brew Memories.</p>
            <p className="text-pink-400 text-sm">Instagram: @aligarh.cafes</p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 text-sm hover:text-white transition">Home</Link></li>
              <li><Link href="/search" className="text-gray-400 text-sm hover:text-white transition">All Cafes</Link></li>
              <li><Link href="/offers" className="text-gray-400 text-sm hover:text-white transition">Offers</Link></li>
              <li><Link href="/list-your-cafe" className="text-gray-400 text-sm hover:text-white transition">List Your Cafe</Link></li>
              <li><Link href="/about" className="text-gray-400 text-sm hover:text-white transition">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Browse Areas</h3>
            <ul className="space-y-2">
              <li><Link href="/search?q=ramghat" className="text-gray-400 text-sm hover:text-white transition">Ramghat Road</Link></li>
              <li><Link href="/search?q=marris" className="text-gray-400 text-sm hover:text-white transition">Marris Road</Link></li>
              <li><Link href="/search?q=civil" className="text-gray-400 text-sm hover:text-white transition">Civil Lines</Link></li>
              <li><Link href="/search?q=amu" className="text-gray-400 text-sm hover:text-white transition">AMU Gate</Link></li>
              <li><Link href="/search?q=centre" className="text-gray-400 text-sm hover:text-white transition">Centre Point</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Why Aligarh Cafes?</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-[#D4622A]">🏪</span>
                <span>10+ Cafes Listed</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-[#D4622A]">💰</span>
                <span>Real Menu Prices</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-[#D4622A]">📍</span>
                <span>Exact Locations</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-[#D4622A]">💑</span>
                <span>Couple-Friendly Filter</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">2025 Aligarh Cafes. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Made with love in Aligarh</p>
        </div>
      </div>
    </footer>
  )
}