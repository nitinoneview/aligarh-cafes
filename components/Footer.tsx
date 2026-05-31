import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0f1115] text-white">

      {/* CTA Section */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Aligarh Ka #1 Cafe Guide
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Discover Aligarh's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Best Cafes</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Find aesthetic cafes, couple-friendly spots, rooftop cafes and hidden gems across Aligarh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
              Explore Cafes
            </Link>
            <Link href="/list-your-cafe" className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300">
              List Your Cafe
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { emoji: "☕", title: "10+ Cafes", desc: "Listed & Verified" },
            { emoji: "📍", title: "Accurate", desc: "Locations" },
            { emoji: "💰", title: "Real Prices", desc: "Menu Prices" },
            { emoji: "💑", title: "Couple", desc: "Friendly Guide" },
          ].map((item) => (
            <div key={item.title} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 text-center hover:bg-white/8 hover:border-orange-500/30 transition-all duration-300 group">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
              <p className="font-bold text-white text-sm">{item.title}</p>
              <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="Aligarh Cafes" width={44} height={44} className="rounded-2xl" />
                <span className="font-bold text-xl">Aligarh <span className="text-orange-400">Cafes</span></span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Aligarh's most trusted cafe discovery platform helping people find the perfect place to relax, work and create memories.
              </p>
              <div className="flex gap-3">
                <a href="https://instagram.com/aligarhcafes" target="_blank" rel="noreferrer" className="bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/30 p-2.5 rounded-xl transition-all duration-300 group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="mailto:aligarhcafes@gmail.com" className="bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/30 p-2.5 rounded-xl transition-all duration-300 group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Explore</h3>
              <ul className="space-y-3">
                {[
                  { label: "All Cafes", href: "/search" },
                  { label: "Couple Friendly", href: "/search?filter=couple-friendly" },
                  { label: "Student Budget", href: "/search?filter=student-friendly" },
                  { label: "Rooftop Cafes", href: "/search?filter=rooftop-cafe" },
                  { label: "Private Cabins", href: "/search?filter=private-cabins" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-px bg-orange-400 transition-all duration-300 inline-block"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div>
              <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Areas</h3>
              <ul className="space-y-3">
                {[
                  { label: "Civil Lines", href: "/search?q=civil" },
                  { label: "Ramghat Road", href: "/search?q=ramghat" },
                  { label: "Marris Road", href: "/search?q=marris" },
                  { label: "Centre Point", href: "/search?q=centre" },
                  { label: "AMU Area", href: "/search?q=amu" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-px bg-orange-400 transition-all duration-300 inline-block"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Contact</h3>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-gray-500 text-xs mb-1">Email</p>
                  <p className="text-white text-sm font-medium">aligarhcafes@gmail.com</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-gray-500 text-xs mb-1">Instagram</p>
                  <p className="text-orange-400 text-sm font-medium">@aligarhcafes</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-gray-500 text-xs mb-1">Response Time</p>
                  <p className="text-white text-sm font-medium">Within 24 Hours</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">2026 Aligarh Cafes. All rights reserved.</p>
          <p className="text-gray-600 text-sm">Made with love in Aligarh</p>
          <a href="https://instagram.com/aligarhcafes" target="_blank" rel="noreferrer" className="text-orange-400 text-sm hover:text-orange-300 transition-colors">
            @aligarhcafes
          </a>
        </div>
      </div>

    </footer>
  )
}