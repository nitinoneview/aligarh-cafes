import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-[#1A1A1A] px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md">
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
      <div className="flex items-center gap-4">
        <Link href="/cafes" className="text-gray-300 text-sm hover:text-white">
          Cafes
        </Link>
        <Link href="/offers" className="text-gray-300 text-sm hover:text-white">
          Offers
        </Link>
        <Link
          href="/list-your-cafe"
          className="bg-[#D4622A] text-white text-sm px-4 py-2 rounded-full hover:bg-[#c5571f]"
        >
          List Cafe
        </Link>
      </div>
    </nav>
  )
}
