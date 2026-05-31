export default function FilterPills() {
  const filters = ['All', 'Civil Lines', 'Ramghat Road', 'Marris Road', 'AMU Gate']
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">
        Browse by Area
      </h2>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {filters.map((f) => (
          <span
            key={f}
            className="whitespace-nowrap bg-white border border-gray-200 text-[#1A1A1A] px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-[#D4622A] hover:text-white hover:border-[#D4622A] transition-all"
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  )
}
