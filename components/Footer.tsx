import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0f1115] text-white border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="flex flex-col items-center text-center mb-10">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="Aligarh Cafes" width={48} height={48} className="rounded-2xl" />
            <span className="font-bold text-2xl">Aligarh <span className="text-orange-400">Cafes</span></span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
            Discover the best cafes across Aligarh. Find aesthetic spots, rooftop cafes, couple-friendly places and hidden gems.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com/aligarhcafes" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-orange-500/15 border border-white/10 hover:border-orange-500/40 px-5 py-2.5 rounded-full text-sm font-medium text-gray-300 hover:text-orange-400 transition-all duration-300">
              📷 Instagram
            </a>
            <a href="mailto:aligarhcafes@gmail.com" className="flex items-center gap-2 bg-white/5 hover:bg-orange-500/15 border border-white/10 hover:border-orange-500/40 px-5 py-2.5 rounded-full text-sm font-medium text-gray-300 hover:text-orange-400 transition-all duration-300">
              ✉️ Email
            </a>
          </div>
        </div>

        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 mb-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500/10 border border-orange-500/20 p-2 rounded-xl">
              <span className="text-orange-400 text-lg">✉️</span>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-0.5">Email</p>
              <p className="text-white text-sm font-medium">aligarhcafes@gmail.com</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10"></div>
          <div className="flex items-center gap-3">
            <div className="bg-orange-500/10 border border-orange-500/20 p-2 rounded-xl">
              <span className="text-orange-400 text-lg">📍</span>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-0.5">Location</p>
              <p className="text-white text-sm font-medium">Aligarh, Uttar Pradesh</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>2026 Aligarh Cafes. All rights reserved.</p>
          <p>Made with love in Aligarh</p>
          <a href="https://instagram.com/aligarhcafes" target="_blank" rel="noreferrer" className="text-orange-500/60 hover:text-orange-400 transition-colors">
            @aligarhcafes
          </a>
        </div>

      </div>
    </footer>
  )
}