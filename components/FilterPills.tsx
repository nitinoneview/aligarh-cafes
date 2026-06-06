'use client'
import { useRouter, useSearchParams } from 'next/navigation'

export default function FilterPills() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentArea = searchParams.get('area') || 'All'

  const filters = ['All', 'Civil Lines', 'Ramghat Road', 'Sasni Gate' , 'Marris Road', 'AMU Gate']

  const handleClick = (filter: string) => {
    if (filter === 'All') {
      router.push('/')
    } else {
      router.push(`/?area=${encodeURIComponent(filter)}`)
    }
  }

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">
        Browse by Area
      </h2>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {filters.map((f) => (
          <span
            key={f}
            onClick={() => handleClick(f)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm cursor-pointer border transition-all
              ${currentArea === f
                ? 'bg-[#D4622A] text-white border-[#D4622A]'
                : 'bg-white border-gray-200 text-[#1A1A1A] hover:bg-[#D4622A] hover:text-white hover:border-[#D4622A]'
              }`}
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  )
}
