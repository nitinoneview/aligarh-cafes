"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-[#1A1A1A] px-4 py-3 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Aligarh Cafes"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <span className="text-white font-bold text-lg">
            Aligarh <span className="text-[#D4622A]">Cafes</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/cafes" className="text-gray-300 text-sm hover:text-white">
            Cafes
          </Link>
          <Link href="/offers" className="text-gray-300 text-sm hover:text-white">
            Offers
          </Link>
          <Link
            href="/list-your-cafe"
            className="bg-[#D4622A] text-white text-sm px-4 py-2 rounded-full hover:bg-[#c5571f] touch-friendly"
          >
            List Cafe
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4622A]"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-white/5 bg-[#1A1A1A]`}>
        <div className="px-4 pt-3 pb-4 space-y-2">
          <Link href="/cafes" className="block text-gray-300 text-base py-2 rounded-md hover:bg-white/5 px-2">
            Cafes
          </Link>
          <Link href="/offers" className="block text-gray-300 text-base py-2 rounded-md hover:bg-white/5 px-2">
            Offers
          </Link>
          <Link href="/list-your-cafe" className="block bg-[#D4622A] text-white text-base py-2 rounded-md text-center px-2 touch-friendly">
            List Cafe
          </Link>
        </div>
      </div>
    </nav>
  )
}
